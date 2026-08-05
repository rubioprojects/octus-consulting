# Analytics Readiness — Octus Post-Launch

**Date:** 2026-08-05  
**Production SHA:** `28eb2ece1a498aee63bd29343111b83e7904f01f`

## Current status

**Analytics: ABSENT on production.**

Audit findings:

- No GA4 / gtag / GTM snippets in the live app layout for production host.
- Privacy Policy states the public site does not invent inactive analytics collection and that policies will be updated if tools are enabled.
- Cookie Policy describes analytics as future preparation only.

**Do not install tracking without Rubio approval.**

---

## Recommendation (install only after approval)

Prefer one of:

1. **GA4 via gtag** on production host only (`octusconsulting.com` / `www`), or  
2. **GTM** container loading GA4 + future tags.

Never load tags on Vercel preview hosts.

---

## Required events (commercial + engagement)

### Commercial

| Event | Trigger |
|-------|---------|
| `whatsapp_click` | WhatsApp CTA / float / engage links |
| `email_click` | `mailto:` CTAs (`info@`, careers, etc.) |
| `diagnostic_click` | Diagnostic primary CTA |

### Engagement

| Event | Trigger |
|-------|---------|
| `services_view` | `/solutions` and major solution area views |
| `industry_view` | `/markets` and `/markets/*` |
| `jurisdiction_view` | `/jurisdictions` and children |
| `insight_view` | `/insights` and article pages |

Suggested parameters: `page_path`, `cta_location`, `destination` (for outbound).

---

## Privacy / Cookie follow-up (gated)

When analytics is approved:

1. Update Privacy + Cookie policies to describe cookies / processing.  
2. Align CookieBanner if non-essential cookies are introduced.  
3. Keep preview hosts free of marketing tags.

---

## Related

- `docs/ops/OCTUS_GSC_GA4_READINESS.md` (pre-launch recommendation)
- `docs/ops/POST_LAUNCH_BACKLOG.md` item P1-1
