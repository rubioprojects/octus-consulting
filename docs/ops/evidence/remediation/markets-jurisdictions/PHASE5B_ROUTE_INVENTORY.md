# Phase 5B — Route Inventory

**Phase:** 5B Markets, Jurisdictions and Brazil Hard Gate  
**Starting HEAD / accepted Phase 5A evidence HEAD:** `9b5ce63501e48e4da0440ae5f3f59f776d2bf955`  
**Accepted Phase 5A application SHA:** `9e97c13e90ecc4165e969ee04181e8d2a3a9110c`  
**Accepted Phase 5A immutable preview:** https://octus-consulting-nx5t8xtoo-axle1.vercel.app  
**Accepted Phase 5A deployment:** `dpl_C8Zt5mFCF6BaK165cKMt6ELBknKj`  
**Baseline SoT (visual only):** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Baseline Git SHA:** `8b12fcc88922e6ed07b98dd40da0a27bde71bbf9`  
**Inventory date:** 2026-08-03  
**Mandatory route count:** 13

## Reconciliation sources

| Source | Phase 5B touch |
|---|---|
| `app/markets/**` | 5 page files |
| `app/jurisdictions/**` | 7 page files |
| `app/brazil/**` | 1 page file |
| `app/sitemap.ts` | All 13 listed |
| `next.config.js` | No redirects for these paths |
| `vercel.json` | Solutions/legacy only — none for Phase 5B |
| `middleware` | Absent |
| Canonicals | `pageSocialMeta({ path })` → `https://octusconsulting.com{path}` |
| Internal links | Home chips, Nav Industries→`/markets`, solutions deep pages, hubs |
| Legacy redirect records | None for markets/jurisdictions/brazil |

## Mandatory routes

| # | Route | Template class | File | Baseline classification | Notes |
|---|---|---|---|---|---|
| 1 | `/markets` | Markets overview | `app/markets/page.tsx` | `DIRECT_BASELINE_ROUTE` | PageHero; Nav label “Industries” |
| 2 | `/markets/fintech` | Standard market page | `app/markets/fintech/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 3 | `/markets/igaming` | Standard market page | `app/markets/igaming/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 4 | `/markets/crypto` | Standard market page | `app/markets/crypto/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 5 | `/markets/high-risk` | High-Risk Operations page | `app/markets/high-risk/page.tsx` | `DIRECT_BASELINE_ROUTE` | Materially distinct framing |
| 6 | `/jurisdictions` | Jurisdictions overview | `app/jurisdictions/page.tsx` | `DIRECT_BASELINE_ROUTE` | PageHero + WA CTA |
| 7 | `/jurisdictions/malta` | Standard jurisdiction page | `app/jurisdictions/malta/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 8 | `/jurisdictions/isle-of-man` | Standard jurisdiction page | `app/jurisdictions/isle-of-man/page.tsx` | `DIRECT_BASELINE_ROUTE` | Highest numerical claim density |
| 9 | `/jurisdictions/curacao` | Standard jurisdiction page | `app/jurisdictions/curacao/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 10 | `/jurisdictions/anjouan` | Standard jurisdiction page | `app/jurisdictions/anjouan/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 11 | `/jurisdictions/portugal` | Standard jurisdiction page | `app/jurisdictions/portugal/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 12 | `/jurisdictions/uae` | Standard jurisdiction page | `app/jurisdictions/uae/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom surface-dark hero |
| 13 | `/brazil` | Brazil strategic-market page | `app/brazil/page.tsx` | `DIRECT_BASELINE_ROUTE` | DarkHeroAtmosphere; not under `/jurisdictions/brazil` |

## Template classification summary

| Class | Routes |
|---|---|
| 1. Markets overview | `/markets` |
| 2. Standard market page | `/markets/fintech`, `/markets/igaming`, `/markets/crypto` |
| 3. High-Risk Operations page | `/markets/high-risk` |
| 4. Jurisdictions overview | `/jurisdictions` |
| 5. Standard jurisdiction page | malta, isle-of-man, curacao, anjouan, portugal, uae |
| 6. Brazil strategic-market page | `/brazil` |
| 7. Genuinely distinct discovered | None beyond the six classes above |

## Aliases / alternate routes

| Probe | Result | Action |
|---|---|---|
| `/market` (singular) | No `app/` route | Document only — not mandatory |
| `/jurisdiction` (singular) | No `app/` route | Document only |
| `/markets/betting` | No route (folded into igaming) | Document only |
| `/jurisdictions/brazil` | No route — Brazil is `/brazil` | Document only |
| Nav “Industries” | Links to `/markets` | Path unchanged; label intentional IA difference |
| Hub cards UK / Gibraltar / Cyprus | Mentioned on `/jurisdictions` without dedicated pages | Not mandatory Phase 5B routes; qualify as non-landing references |
| `vercel.json` / `next.config.js` | No Phase 5B redirects | Confirmed |
| Sitemap | All 13 present (`/brazil` priority 0.5) | Retain |

**No live public Phase 5B alias redirects discovered.** Live status codes will be confirmed against the Phase 5B immutable preview.

## Information architecture safeguards (binding)

- Markets = industries / operating environments — **not** a peer service area.
- Jurisdictions = legal / regulatory locations — **not** a peer service area.
- Exactly **seven** peer service areas preserved (Services pack lock).
- Banking and Payments remains supporting / non-peer.
- Brazil is a distinct strategic market page, not an eighth service pillar.

## Bound residuals (do not resolve in Phase 5B)

| ID | Owner | Status |
|---|---|---|
| `HOME_PUNCTUATION_RESIDUAL_001` | Phase 6 | OPEN |
| `GLOBAL_A11Y_REGION_RESIDUAL_001` | Phase 6 | OPEN |
| `AXE_INCOMPLETE_REVIEW_001` | Phase 6 | OPEN |
