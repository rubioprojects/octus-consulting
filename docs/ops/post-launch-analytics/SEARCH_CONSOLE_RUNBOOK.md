# Search Console runbook (Rubio manual actions)

Application support: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` → meta verification **only when set**.  
**Do not invent tokens. Do not change DNS from the application or this agent session.**

## Rubio checklist

1. **Create or access the Domain Property** in Google Search Console for `octusconsulting.com` (Domain property preferred so both apex and `www` are covered).  
2. **Add the Google-provided DNS TXT record** at the DNS provider for the domain (exact value from Google). Wait for DNS propagation.  
3. **Wait for verification** in Search Console until the Domain Property shows verified.  
4. **Submit sitemap:** `https://octusconsulting.com/sitemap.xml`  
5. **Request indexing** for Tier-1 URLs (home, key services hubs, contact, diagnostic, insights hub, jurisdictions hub — as prioritized commercially).  
6. **Record** verification date and property owner in the ops evidence pack.

## Optional HTML-tag path (app-ready)

If Rubio also wants HTML tag verification (in addition to or instead of DNS for a URL-prefix property):

1. Copy the meta `content` token from Google (not a placeholder).  
2. Set Vercel production env `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>`.  
3. Redeploy production (separate approved release).  
4. Confirm `<meta name="google-site-verification" …>` on the live homepage.  

DNS remains the Domain Property method above; the app never writes DNS records.

## Preflight checks (already expected on production)

| Check | Expect |
|-------|--------|
| `https://octusconsulting.com/robots.txt` | 200 |
| `https://octusconsulting.com/sitemap.xml` | 200 |
| Canonical host | `https://octusconsulting.com` |
| Production apex/www | no production-wide `noindex` |
| Preview `*.vercel.app` | retains `X-Robots-Tag: noindex` |
