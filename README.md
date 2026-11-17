# Kotoba 言葉

A Japanese word of the day. Each day brings a new native Japanese word (no katakana loanwords) with its kanji, hiragana, English meaning and three example sentences, each with its translation underneath. Words never repeat.

- **Today**: the day's word, with read-aloud buttons for the word and every sentence.
- **Practice**: a past word comes back, and you say whether you remembered its meaning, or try using it in your own sentence. Words you forgot come back first. The rest return after 1, 3, 7, 14, 30… days.
- **Log**: every word you've had so far, searchable, with your remember/forgot history and the sentences you wrote.
- **Daily notification**: the new word plus a past word to check, at the hour you pick.

**Use it:** https://jackjbennett.github.io/kotoba/ (sign in with your Prep Kitchen account). Add `?demo` to the address to look around with sample progress.

## How it's built

- `index.html` is the whole app (plain HTML, CSS and JavaScript, no build step).
- `words.js` is the word list, one entry per day in order. Add new words to the end; never reorder or remove entries, or everyone's history shifts.
- Accounts, progress and notification sign-ups live in the same [Supabase](https://supabase.com) project as Prep Kitchen. Kotoba's tables all start with `kotoba_`, and row-level security (`supabase/schema.sql`) keeps each person's rows private.
- `.github/workflows/send-words.yml` runs every hour. `push/send.mjs` asks Supabase who is due (their chosen hour has arrived in their time zone, and they haven't had today's word yet) and sends them a web push notification.
- `manifest.webmanifest`, `sw.js` and `icons/` make it installable and receive the notifications.

## One-time setup

1. **Database:** in Supabase, open SQL Editor → New query, paste all of `supabase/schema.sql`, and run it.
2. **GitHub secrets** (Settings → Secrets and variables → Actions):
   - `VAPID_PRIVATE_KEY`: private half of the push key pair. The public half is `vapidPublicKey` in `config.js`.
   - `KOTOBA_PUSH_TOKEN`: the secret whose SHA-256 hash is in `kotoba_check_token` in `supabase/schema.sql`.
3. **Hosting:** GitHub Pages from the `main` branch, root folder.

To replace either secret, generate a new one, update the hash in `schema.sql` (or the public key in `config.js`), run the SQL again, and update the GitHub secret.

## Notifications on iPhone

iPhones only deliver web notifications to apps on the Home Screen. In Safari, tap Share → **Add to Home Screen**, open Kotoba from there, then turn notifications on in Settings.
