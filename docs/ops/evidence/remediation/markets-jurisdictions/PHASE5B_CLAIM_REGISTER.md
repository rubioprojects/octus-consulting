# Phase 5B — Claim Register (opening)

**Phase:** 5B Markets, Jurisdictions and Brazil  
**Starting HEAD:** `9b5ce63501e48e4da0440ae5f3f59f776d2bf955`  
**Retrieval / as-of:** 2026-08-03  
**Status:** OPENING — dispositions execute in application commits; final closeout in fact/claim commit.

## Bound residuals (carry forward — do not resolve)

| ID | Status in Phase 5B |
|---|---|
| `HOME_PUNCTUATION_RESIDUAL_001` | PRESERVE OPEN |
| `GLOBAL_A11Y_REGION_RESIDUAL_001` | PRESERVE OPEN |
| `AXE_INCOMPLETE_REVIEW_001` | PRESERVE OPEN |

## Opening claim matrix (high-priority)

| Claim ID | Route | Exact / paraphrased current public claim | Category | Opening disposition | Final public wording (target) |
|---|---|---|---|---|---|
| C-SLA-24H | multi | “We respond within 24 hours.” | SLA | REMOVE | (omit) |
| C-IG-11W | /markets/igaming | Bank account open in 11 weeks after 6 months | Mandate KPI | REMOVE | Drop numeric outcome; keep structural narrative |
| C-CU-11W | /jurisdictions/curacao | Operational account open in 11 weeks | Mandate KPI | REMOVE | Same |
| C-CU-6W | /jurisdictions/curacao | Remediation in 6 weeks | Mandate KPI | REMOVE | Same |
| C-FT-4BANKS | /markets/fintech | Rejected by 4 banks | Mandate KPI | REMOVE | Qualify banking friction without count |
| C-REG-DIRECT | igaming/curacao | Direct coordination with regulator / SPA/MF | Partnership-like | QUALIFY | Client-side regulatory programme support; no formal partnership claim |
| C-IOM-FEES | /jurisdictions/isle-of-man | £5,250 / £36,750 / £52,500 | Fees | RETAIN+SOURCE | Retain with GSC/Treasury source + as-of |
| C-IOM-DUTY | /jurisdictions/isle-of-man | Duty 0.1%–1.5% | Taxation | QUALIFY | Point to official duty schedule; avoid unsourced band detail if schedule not cited |
| C-IOM-10-12W | /jurisdictions/isle-of-man | Processing 10–12 weeks | Timeline | QUALIFY | “GSC guidance notes a typical 10–12 weeks after application acceptance” — not a guarantee |
| C-MICA-GF | /markets/crypto | Grandfathering ends July 2026 | Transitional status | UPDATE | As of 2026-08-03: MiCA transitional period ended 1 July 2026 (ESMA) |
| C-MICA-CAP | /markets/crypto | Capital €50k–€150k | Capital | QUALIFY/REMOVE | Only retain with precise MiCA citation; else remove |
| C-MICA-27 | /markets/crypto | Passporting across 27 member states | Passport | QUALIFY | Authorised CASP passporting under MiCA — not automatic for all models |
| C-PT-GGR | /jurisdictions/portugal | Online GGR exceeds EUR300 million | Market statistic | REMOVE | Unsourced → remove |
| C-PT-OPS | /jurisdictions/portugal | 18 operators / 31 licences | Market statistic | REMOVE | Unsourced → remove |
| C-PT-DEP | /jurisdictions/portugal | Guarantee deposits EUR500k + EUR100k | Fees | QUALIFY/REMOVE | Retain only with primary statute/regulator cite |
| C-AJ-850 | /jurisdictions/anjouan | Over 850 licences / 2000+ websites | Market statistic | REMOVE | Unsourced → remove |
| C-AJ-FEE | /jurisdictions/anjouan | ~EUR17,800 / 2–6 weeks | Fees/timeline | QUALIFY/REMOVE | Remove fixed fee/timeline without primary cite |
| C-BR-LAWS | /brazil | Laws 13,756/2018 and 14,790/2023 | Statute | RETAIN | Retain with as-of 2026-08-03 |
| C-BR-SPA | /brazil | SPA/MF licensing pathways | Regulator | RETAIN+QUALIFY | Authorisation by MF/SPA under current ordinances; no guaranteed access |
| C-HUB-UKGI | /jurisdictions | UK/Gibraltar/Cyprus cards | Footprint | QUALIFY | Non-landing references; no dedicated pages in Phase 5B |

## CTA opening audit targets

For every route record (filled at closeout): label · target · section · priority · desktop · mobile.

Rules enforced in application commits:
- WhatsApp primary strategic intake
- Contact non-WhatsApp alternative
- Diagnostic only for genuine structured assessment
- No repeated identical commercial label in same main content
- No adjacent indistinguishable CTAs
- No dead links
- No jurisdiction-specific promise in CTA text

## Closeout counters (to be filled in fact/claim commit)

| Metric | Opening | Closeout |
|---|---|---|
| Claims retained | — | TBD |
| Claims qualified | — | TBD |
| Claims updated | — | TBD |
| Claims removed | — | TBD |
| Primary-source coverage | Opening library seeded | TBD |
| Claims lacking authoritative sources | Triaged above | Must be 0 on public pages |
