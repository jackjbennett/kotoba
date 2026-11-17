// Kotoba settings. Every value here is public by design and ships with the website.
// Never put the Supabase service_role key, the VAPID private key or the push token here;
// those live only in the repository's GitHub Actions secrets.
window.KOTOBA_CONFIG = {
  // Shared with Prep Kitchen, so the same account signs in to both apps.
  supabaseUrl: 'https://nnkneiohvdafbetimtwg.supabase.co',
  supabaseKey: 'sb_publishable_XHt74gAyg0X7ZcHX9bgA_A_1Q7pJSul',
  // Where the app is hosted. Also identifies the sender of push notifications.
  siteUrl: 'https://jackjbennett.github.io/kotoba/',
  // Public half of the push-notification key pair. The private half is the VAPID_PRIVATE_KEY secret.
  vapidPublicKey: 'BMfsW0VU_U1NDALCX3wGeYPKr9hZkhamvvu_8ZkGtI3-oqo2C3otTgWn39_ifXgRYluYqFg0uPzd0N83yqBjxaM'
};
