// Sends each person their word of the day once their chosen hour arrives.
// Runs hourly from GitHub Actions. Needs two repository secrets:
//   VAPID_PRIVATE_KEY   private half of the push key pair (public half is in config.js)
//   KOTOBA_PUSH_TOKEN   shared secret checked by the kotoba_* functions in supabase/schema.sql
// The repository is public, so this never logs endpoints, user ids or secrets.
import webpush from 'web-push';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ['config.js', 'words.js']) vm.runInContext(readFileSync(new URL(file, root), 'utf8'), sandbox);
const cfg = sandbox.window.KOTOBA_CONFIG;
const WORDS = sandbox.window.KOTOBA_WORDS;

const token = process.env.KOTOBA_PUSH_TOKEN;
const vapidPrivate = process.env.VAPID_PRIVATE_KEY;
if (!token || !vapidPrivate) {
  console.log('::error::Add the KOTOBA_PUSH_TOKEN and VAPID_PRIVATE_KEY repository secrets.');
  process.exit(1);
}
webpush.setVapidDetails(cfg.siteUrl, cfg.vapidPublicKey, vapidPrivate);

// Same spacing the app uses when it picks a past word to review.
const OFFSETS = [1, 3, 7, 14, 30, 60, 120, 240];

async function rpc(fn, args) {
  const res = await fetch(`${cfg.supabaseUrl}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: { apikey: cfg.supabaseKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ p_token: token, ...args })
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${fn} failed (${res.status}): ${text.slice(0, 300)}`);
  return text ? JSON.parse(text) : null;
}

// The form the word is usually written in, and its other spelling (if any).
const show = w => (w.k && !w.kana) ? w.k : w.r;
const other = w => !w.k ? '' : show(w) === w.k ? w.r : w.k;

function message(day, forgotten) {
  const word = day < WORDS.length ? WORDS[day] : null;
  const past = Math.min(day, WORDS.length);
  const missed = (forgotten || []).filter(i => i < past);
  const spaced = OFFSETS.map(o => day - o).filter(i => i >= 0 && i < past);
  const reviewIndex = missed.length ? missed[day % missed.length] : spaced.length ? spaced[day % spaced.length] : null;
  const review = reviewIndex == null ? null : WORDS[reviewIndex];
  const reviewLine = review ? `Remember ${show(review)}? Tap to check.` : '';
  if (word) {
    return {
      title: `今日の言葉 · ${show(word)}`,
      body: [(other(word) ? `${other(word)} — ` : '') + word.en, reviewLine].filter(Boolean).join('\n'),
      url: './'
    };
  }
  if (!review) return null;
  return { title: 'Kotoba review', body: `You've learned every word so far. ${reviewLine}`, url: './' };
}

const rows = await rpc('kotoba_due_pushes', {});
const byUser = new Map();
for (const r of rows) {
  if (!byUser.has(r.user_id)) byUser.set(r.user_id, { day: r.day_index, forgotten: r.forgotten, subs: [] });
  byUser.get(r.user_id).subs.push(r);
}

let sent = 0, failed = 0, dropped = 0;
const done = [];
for (const [userId, u] of byUser) {
  const msg = message(u.day, u.forgotten);
  if (!msg) { done.push(userId); continue; }
  let ok = false, retry = false;
  for (const s of u.subs) {
    try {
      await webpush.sendNotification(
        { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
        JSON.stringify(msg),
        { TTL: 60 * 60 * 12, urgency: 'normal' }
      );
      ok = true; sent++;
    } catch (err) {
      if (err.statusCode === 404 || err.statusCode === 410) {
        await rpc('kotoba_drop_subscription', { p_endpoint: s.endpoint });
        dropped++;
      } else {
        failed++; retry = true;
        console.log(`Push service error ${err.statusCode || ''} ${String(err.body || err.message).slice(0, 120)}`);
      }
    }
  }
  // Try again next hour only if a working device hit a temporary error.
  if (ok || !retry) done.push(userId);
}
if (done.length) await rpc('kotoba_mark_sent', { p_user_ids: done });

console.log(`People due: ${byUser.size}. Notifications sent: ${sent}. Failed: ${failed}. Expired devices removed: ${dropped}.`);
if (failed && !sent) process.exitCode = 1;
