# Octus Google Search Console + GA4 readiness

**Status:** Ready for Rubio approval — do **not** install tracking without approval.  
**PR:** #17

## Google Search Console (after production domain live)

1. Verify domain property for `octusconsulting.com` (DNS TXT preferred).
2. Confirm URL prefix property if used for `https://octusconsulting.com`.
3. Submit sitemap: `https://octusconsulting.com/sitemap.xml`
4. Request indexing for Tier-1 URLs (Home, Services, Brazil, key service hubs).
5. Monitor Coverage / Page indexing for HOLD leakage (must be zero HOLD articles).

## Google Analytics 4 (recommend — not installed)

Recommended events (custom or recommended event names):

| Event | Trigger |
|-------|---------|
| `whatsapp_click` | WhatsApp CTA / float |
| `email_click` | mailto links (Contact / Careers / Compliance) |
| `diagnostic_click` | Diagnostic CTA |
| `services_view` | `/solutions` and deep service pages |
| `insight_view` | Public insight article views |

Implementation options after approval:

1. GA4 gtag snippet in `app/layout.tsx` (production host only), or
2. Google Tag Manager container with the same events.

**Do not** add tags in this pack.

## Google Tag Manager

Prepare a container only if Rubio prefers GTM over direct GA4. Same event map as above. Gate by production hostname.

## Privacy / cookies implication

If analytics is enabled later:

- Update Privacy Policy + Cookie Policy
- Update CookieBanner copy if non-essential cookies appear
- Re-run legal consistency audit
