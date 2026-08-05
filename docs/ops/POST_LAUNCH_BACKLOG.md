# Post-Launch Backlog — Octus Consulting

**Production:** https://octusconsulting.com  
**Deployment:** `dpl_EJ7fPhWXFKLN9wEfU5N8dSiZpEP3`  
**SHA:** `28eb2ece1a498aee63bd29343111b83e7904f01f`  
**Date:** 2026-08-05  

**Rule:** No implementation without explicit Rubio/Sol approval. This file is inventory only.

---

## P0 — Production issues

| ID | Item | Notes | Status |
|----|------|-------|--------|
| P0-1 | Confirm `talentos@octusconsulting.com` mailbox delivers | Careers CTA points here; human mailbox check | OPEN — human |
| P0-2 | GSC domain verify + sitemap submit | External account action | OPEN — human |
| P0-3 | Confirm production stays indexable after future previews | Production must not inherit preview `noindex` | MONITOR |

*No blocking HTTP/SEO failures found on live apex in 2026-08-05 health audit.*

---

## P1 — Conversion improvements

| ID | Item | Notes | Status |
|----|------|-------|--------|
| P1-1 | Approve + install GA4 (or GTM) | Events: `whatsapp_click`, `email_click`, `diagnostic_click`, `services_view`, `industry_view`, `jurisdiction_view`, `insight_view` | BLOCKED — approval |
| P1-2 | Optional `/industries` → `/markets` redirect | `/industries` correctly 404s; nav already uses `/markets` | OPTIONAL |
| P1-3 | Update Privacy/Cookie when analytics enabled | Policies already state analytics absent today | GATED on P1-1 |

---

## P2 — SEO / content improvements

| ID | Item | Notes | Status |
|----|------|-------|--------|
| P2-1 | Execute GSC URL Inspection order (Tier 1 then Tier 2) | See `docs/seo/OCTUS_POST_LAUNCH_SEO_MONITORING.md` | OPEN — human |
| P2-2 | Insights cadence on keyword clusters | Recommendations only; no forced keyword injection | OPEN — editorial |
| P2-3 | Claudia Nery higher-resolution portrait | Current file ~35KB; lowest-res residual | WAITING asset |
| P2-4 | Compress Luciana portrait if LCP regresses | Source ~625KB; review after Team Lighthouse | OPTIONAL |
| P2-5 | Modern image formats for Team / team-group / Insights | Only if measurable + no visual regression | OPTIONAL |

---

## P3 — Nice-to-have

| ID | Item | Notes | Status |
|----|------|-------|--------|
| P3-1 | Rodrigo / Luciana LinkedIn when approved | Intentionally null today | WAITING |
| P3-2 | Per-article OG images | Site uses shared `/og-image.png` | OPTIONAL |
| P3-3 | Vercel Web Analytics | Mentioned as future option in Cookie Policy | APPROVAL |
| P3-4 | Backlink / PR distribution plan | High-level only in SEO monitoring doc | PLANNING |

---

## Explicitly out of backlog (do not invent)

- Homepage / seven-areas / nav / Team hierarchy redesign  
- CTA strategy changes  
- Copy repositioning  
- DNS / domain changes  
- Merge of PR #17 without authorization  
- Production promote of unapproved commits  
