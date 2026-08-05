# GA4 Implementation Plan — Octus Consulting

**Date:** 2026-08-05  
**Production:** https://octusconsulting.com  

## Measurement ID status

```text
GA4_MEASUREMENT_ID: NOT_PROVIDED
GA4_INSTALL: PENDING_APPROVAL_AND_ID
```

Do **not** invent a Measurement ID. Do not install gtag/GTM until Rubio provides:

- GA4 Measurement ID (`G-XXXXXXXX`), and  
- explicit install approval.

Current production audit: **no GA4 / GTM snippet present.**

---

## Recommended production-safe method (when approved)

1. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` (or build-time env) — production host only.
2. Load gtag **only** when:
   - Measurement ID is non-empty, and  
   - `window.location.hostname` is `octusconsulting.com` or `www.octusconsulting.com`
3. Never load on `*.vercel.app` preview hosts.
4. Update Privacy Policy + Cookie Policy when non-essential analytics cookies are introduced.
5. Prefer GA4 direct gtag first; introduce GTM later only if tag volume requires it.

---

## Recommended events

### Commercial

| Event | Trigger |
|-------|---------|
| `whatsapp_click` | WhatsApp CTA / float / engage links |
| `email_click` | `mailto:` CTAs |
| `diagnostic_click` | Diagnostic primary CTA |

### Navigation

| Event | Trigger |
|-------|---------|
| `services_view` | `/solutions` and major solution areas |
| `industry_view` | `/markets` and `/markets/*` |
| `jurisdiction_view` | `/jurisdictions` and children |

### Content

| Event | Trigger |
|-------|---------|
| `insight_view` | Insights index + article page views |
| `article_read` | Scroll depth threshold on article (e.g. 50% / 90%) |

Suggested event params: `page_path`, `cta_location`, `destination`.

---

## Conversion definitions

### Primary

- `whatsapp_click`
- `diagnostic_click`

### Secondary

- `insight_engagement` (map from `insight_view` + `article_read`)
- `services_view`

Mark primary events as key events / conversions in the GA4 UI after install.

---

## Implementation checklist (gated)

1. [ ] Measurement ID provided  
2. [ ] Install approval recorded  
3. [ ] Production-only host guard  
4. [ ] Event wiring on WhatsApp / mailto / diagnostic / view pages  
5. [ ] Privacy + Cookie policy update  
6. [ ] Preview host verification (no tags)  
7. [ ] Sol/Rubio smoke of DebugView  

---

## Related

- `docs/ops/OCTUS_ANALYTICS_READINESS.md`
- `docs/ops/POST_LAUNCH_BACKLOG.md` (P1-1)
