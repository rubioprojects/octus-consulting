# Octus Post-Launch SEO Monitoring

**Status:** LIVE  
**Production:** https://octusconsulting.com  
**Deployment:** `dpl_EJ7fPhWXFKLN9wEfU5N8dSiZpEP3`  
**SHA:** `28eb2ece1a498aee63bd29343111b83e7904f01f`  
**Date:** 2026-08-05  

This document is monitoring and growth guidance only. It does not authorize copy rewrites, redesign, or production deploys.

---

## Indexation plan

### Week 0–1 (human / GSC)

1. Verify domain property for `octusconsulting.com` in Google Search Console.
2. Submit sitemap: `https://octusconsulting.com/sitemap.xml` (64 public URLs; 16 Insights).
3. Confirm robots allow Googlebot and that production responses do **not** send `x-robots-tag: noindex`.
4. Request indexing for Tier 1 URLs (URL Inspection), in order below.
5. Spot-check apex vs www (both should resolve to the same production deployment with production canonicals).

### Week 2–4

- Monitor Coverage / Pages report for soft-404s, redirects, and excluded URLs.
- Confirm all 16 public Insights appear as indexed or discovered.
- Watch for accidental indexing of preview hostnames (`*.vercel.app`) — should remain noindex.

### Month 2–3

- Review query impressions for Tier 1 pages.
- Expand Insights only under existing publication governance (no HOLD_NOT_PUBLIC exposure).
- Re-audit sitemap count vs public article inventory after each Insights release.

---

## Priority pages

### Tier 1 — request indexing first

| URL | Intent |
|-----|--------|
| `/` | Brand + regulated-operations positioning |
| `/solutions` | Service architecture hub |
| `/brazil` | Brazil regulatory demand |
| `/markets` | Industries hub (nav label “Industries”) |
| `/solutions/regulatory-structuring` | Licensing / jurisdiction fit |
| `/solutions/compliance-risk` | Compliance / AML / controls |
| `/international-hub` | Cross-border coordination |
| `/markets/igaming` | iGaming vertical |
| `/markets/fintech` | Fintech vertical |
| `/markets/crypto` | Digital assets vertical |

### Tier 2

| URL | Intent |
|-----|--------|
| `/jurisdictions` + jurisdiction children | Hub + market-entry pages |
| `/insights` + 16 public articles | Authority / topical depth |
| `/team` | Trust / people |
| `/about`, `/how-we-engage`, `/diagnostic`, `/contact` | Conversion support |

### Note on paths

- Industries live under **`/markets`** (not `/industries` — `/industries` correctly 404s today).
- International Hub lives at **`/international-hub`** (not `/solutions/international-hub`).

---

## Keyword clusters (do not force into existing copy)

Use for future Insights briefs and internal linking — not for stuffing current pages.

### Regulatory / Brazil

- iGaming licensing Brazil  
- betting regulation Brazil  
- SPA/MF regulation / Secretaria de Prêmios e Apostas  
- gambling compliance Brazil  

### Fintech

- payment institution licensing Brazil  
- fintech compliance Brazil  
- PIX / payment intermediary liability (where statute-backed)  

### Crypto

- crypto regulation Brazil  
- MiCA compliance  
- VASPs / digital asset structuring  

### Jurisdictions

- Curaçao LOK  
- Malta gaming license  
- Isle of Man licensing  

### Corporate

- international structuring  
- offshore structuring  
- holding design for regulated groups  

---

## Content expansion roadmap (recommendations only)

1. **Quarterly Insights cadence** under existing governance — prefer statute-anchored Brazil and jurisdiction updates.
2. **Cluster pages later (approval required):** dedicated briefs that link into existing Tier 1 hubs without changing hub architecture.
3. **Internal links:** from new Insights → `/brazil`, `/markets/*`, matching solution area — without rewriting hub copy.
4. **Avoid:** keyword-stuffed landing pages that duplicate `/solutions` or `/markets`.

---

## Backlink strategy (high-level)

- Prefer citations from industry press, counsel networks, and conference appearances over directory spam.
- Publish primary-source Insights that third parties can cite (statute + date + jurisdiction).
- Company LinkedIn (`octusonsulting`) as owned distribution — not a substitute for editorial links.
- No paid link schemes; no automated outreach from this pack.

---

## Monitoring checklist (recurring)

| Cadence | Check |
|---------|--------|
| Weekly | GSC indexed vs submitted; 404 spikes |
| Weekly | WhatsApp / mailto conversion volume (once analytics approved) |
| Monthly | Lighthouse mobile LCP on `/` and `/team` |
| Monthly | Sitemap URL count vs public Insights |
| On release | Preview remains noindex; production remains indexable |

---

## Explicit non-actions

- No redesign of homepage, services, nav, Team, About, Industries, CTAs, or visual system.
- No production deploy from this document alone.
- No DNS changes.
- No GA4/GTM install without Rubio approval.
