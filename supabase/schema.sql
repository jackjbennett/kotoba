-- Kotoba database setup.
-- Run once in Supabase: SQL Editor -> New query -> paste this -> Run.
-- Safe to run again; it only creates what is missing and replaces the functions.
--
-- Kotoba shares the Supabase project (and sign-in accounts) with Prep Kitchen.
-- Every table here starts with kotoba_ so nothing touches Prep Kitchen's data.
-- The word list itself lives in words.js in the app, not in the database.

-- One row per person: when their word list started and when they want the daily notification.
create table if not exists public.kotoba_profiles (
  user_id      uuid        primary key default auth.uid() references auth.users (id) on delete cascade,
  start_date   date        not null,               -- the person's local date for word #1
  timezone     text        not null default 'UTC', -- IANA name from the browser, e.g. America/Chicago
  notify_hour  smallint    not null default 8 check (notify_hour between 0 and 23),
  last_sent_on date,                               -- local date the last daily notification went out
  created_at   timestamptz not null default now()
);

-- The person's practice history: "did you remember it?" answers and sentences they wrote.
create table if not exists public.kotoba_reviews (
  id          bigint      generated always as identity primary key,
  user_id     uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  word_index  integer     not null check (word_index >= 0),  -- position in words.js
  kind        text        not null check (kind in ('recall', 'sentence')),
  remembered  boolean,                                       -- recall only
  sentence    text        check (char_length(sentence) <= 500), -- sentence only
  created_at  timestamptz not null default now()
);
create index if not exists kotoba_reviews_user_idx on public.kotoba_reviews (user_id, word_index);

-- Browser push subscriptions (one per device that turned notifications on).
create table if not exists public.kotoba_push_subscriptions (
  endpoint    text        primary key,
  user_id     uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  p256dh      text        not null,
  auth        text        not null,
  created_at  timestamptz not null default now()
);
create index if not exists kotoba_push_user_idx on public.kotoba_push_subscriptions (user_id);

-- Row-level security: each signed-in person only sees and changes their own rows.
alter table public.kotoba_profiles           enable row level security;
alter table public.kotoba_reviews            enable row level security;
alter table public.kotoba_push_subscriptions enable row level security;

drop policy if exists "Own profile" on public.kotoba_profiles;
create policy "Own profile" on public.kotoba_profiles
  for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "Own reviews" on public.kotoba_reviews;
create policy "Own reviews" on public.kotoba_reviews
  for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "Own push subscriptions" on public.kotoba_push_subscriptions;
create policy "Own push subscriptions" on public.kotoba_push_subscriptions
  for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- ---------------------------------------------------------------------------
-- Functions used by the hourly notification job (.github/workflows/send-words.yml).
-- The job has no account, so these check a shared secret instead. Only its SHA-256
-- hash is stored here; the secret itself lives in the GitHub secret KOTOBA_PUSH_TOKEN.
-- ---------------------------------------------------------------------------
create or replace function public.kotoba_check_token(p_token text)
returns void language plpgsql stable as $$
begin
  if p_token is null
     or encode(sha256(convert_to(p_token, 'UTF8')), 'hex')
        <> '796d2da97f88a946e1ddbaedd7d8b73f3667e75a9c598e5957423272faaaa796' then
    raise exception 'not allowed' using errcode = '42501';
  end if;
end $$;

-- Everyone whose notification hour has arrived today (in their own time zone) and who
-- hasn't been sent today's word yet. Running late or skipping an hour still delivers.
create or replace function public.kotoba_due_pushes(p_token text)
returns table (
  user_id    uuid,
  day_index  integer,
  endpoint   text,
  p256dh     text,
  auth       text,
  forgotten  integer[]
)
language plpgsql security definer set search_path = public as $$
#variable_conflict use_column
begin
  perform public.kotoba_check_token(p_token);
  return query
  with local as (
    select p.user_id,
           (now() at time zone p.timezone)::date as today,
           extract(hour from now() at time zone p.timezone)::int as hour,
           p.start_date, p.notify_hour, p.last_sent_on
    from public.kotoba_profiles p
    where p.timezone in (select name from pg_timezone_names)
  ),
  due as (
    select l.user_id, (l.today - l.start_date)::int as day_index
    from local l
    where l.hour >= l.notify_hour
      and (l.last_sent_on is null or l.last_sent_on < l.today)
      and l.today >= l.start_date
  ),
  last_recall as (
    select distinct on (r.user_id, r.word_index) r.user_id, r.word_index, r.remembered
    from public.kotoba_reviews r
    where r.kind = 'recall' and r.user_id in (select d.user_id from due d)
    order by r.user_id, r.word_index, r.created_at desc
  )
  select d.user_id, d.day_index, s.endpoint, s.p256dh, s.auth,
         coalesce((select array_agg(lr.word_index order by lr.word_index)
                   from last_recall lr
                   where lr.user_id = d.user_id and lr.remembered = false), '{}')
  from due d
  join public.kotoba_push_subscriptions s on s.user_id = d.user_id;
end $$;

-- Record that today's notification went out, so nobody gets it twice.
create or replace function public.kotoba_mark_sent(p_token text, p_user_ids uuid[])
returns void language plpgsql security definer set search_path = public as $$
begin
  perform public.kotoba_check_token(p_token);
  update public.kotoba_profiles p
     set last_sent_on = (now() at time zone p.timezone)::date
   where p.user_id = any(p_user_ids);
end $$;

-- Forget a device whose subscription the browser has cancelled.
create or replace function public.kotoba_drop_subscription(p_token text, p_endpoint text)
returns void language plpgsql security definer set search_path = public as $$
begin
  perform public.kotoba_check_token(p_token);
  delete from public.kotoba_push_subscriptions where endpoint = p_endpoint;
end $$;

revoke all on function public.kotoba_due_pushes(text)              from public;
revoke all on function public.kotoba_mark_sent(text, uuid[])       from public;
revoke all on function public.kotoba_drop_subscription(text, text) from public;
grant execute on function public.kotoba_due_pushes(text)                 to anon;
grant execute on function public.kotoba_mark_sent(text, uuid[])          to anon;
grant execute on function public.kotoba_drop_subscription(text, text)    to anon;
