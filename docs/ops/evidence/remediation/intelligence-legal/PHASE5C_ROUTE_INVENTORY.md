# Phase 5C — Route Inventory

**Phase:** 5C Intelligence, Insights and Legal / Utility Hard Gate  
**Starting HEAD / accepted Phase 5B evidence HEAD:** `cee3e907069542b14c85bec56769dc9549b4674c`  
**Accepted Phase 5B application SHA:** `eb37d6f96db6bda418e4f8132cbcda6b6731deaf`  
**Accepted Phase 5B immutable preview:** https://octus-consulting-jhedve7t0-axle1.vercel.app  
**Accepted Phase 5B deployment:** `dpl_HpNbyjdhxuLLrrcpitB4DA1EJ2TX`  
**Baseline SoT (visual only):** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Baseline Git SHA:** `8b12fcc88922e6ed07b98dd40da0a27bde71bbf9`  
**Inventory date:** 2026-08-03

## Reconciliation sources

| Source | Phase 5C touch |
|---|---|
| `app/intelligence/**` | 1 page |
| `app/insights/**` | index + `[slug]` dynamic |
| `lib/posts.ts` | 33 public posts (Insights SoT) |
| `app/privacy/**` | 1 page |
| `app/terms/**` | 1 page |
| `app/cookies/**` | 1 page |
| `app/compliance-channel/**` | 1 page |
| `app/not-found.tsx` | Missing at inventory — branded 404 authorized |
| `app/sitemap.ts` | Lists intelligence, insights, all post slugs, legal routes |
| `public/robots.txt` | Allow + sitemap (validate only; freeze if no defect) |
| `CookieBanner` | Frozen — Privacy/Cookies must align to banner |

## Mandatory route families

### Intelligence (1)

| # | Route | Template | File |
|---|---|---|---|
| 1 | `/intelligence` | Intelligence hub | `app/intelligence/page.tsx` |

### Insights (1 + 33 articles)

| # | Route | Template | File |
|---|---|---|---|
| 2 | `/insights` | Insights index hub | `app/insights/page.tsx` |
| 3–35 | `/insights/{slug}` | Insight article | `app/insights/[slug]/page.tsx` + `lib/posts.ts` |

**Public article count:** 33 (no draft filter).

### Legal / utility (5 + 404)

| # | Route | Template | File |
|---|---|---|---|
| 36 | `/privacy` | Legal policy shell | `app/privacy/page.tsx` |
| 37 | `/terms` | Legal policy shell | `app/terms/page.tsx` |
| 38 | `/cookies` | Legal policy shell | `app/cookies/page.tsx` |
| 39 | `/compliance-channel` | Compliance reporting | `app/compliance-channel/page.tsx` |
| 40 | `/404` (static export) | Default Next 404 at inventory | `app/not-found.tsx` (to add) |

**Inventoried public Phase 5C routes:** 1 + 1 + 33 + 5 = **40** (+ branded not-found for export 404).

## Template classification

| Class | Routes |
|---|---|
| 1. Intelligence hub | `/intelligence` |
| 2. Insights index | `/insights` |
| 3. Insight article | 33 `/insights/*` |
| 4. Legal policy shell | privacy, terms, cookies |
| 5. Compliance channel | `/compliance-channel` |
| 6. Not-found / 404 | branded `not-found` |

## Sitemap / robots / metadata

| Asset | Status at inventory |
|---|---|
| Sitemap `/intelligence` | Present |
| Sitemap `/insights` + all slugs | Present via `posts` map |
| Sitemap legal four | Present |
| `public/robots.txt` | Allow `/`; Sitemap production URL |
| Canonicals | `pageSocialMeta({ path })` → `https://octusconsulting.com{path}` |
| Preview | Must retain `x-robots-tag: noindex` |

## Aliases / auxiliary probes

| Probe | Result | Action |
|---|---|---|
| `/intelligence/` trailing | Next static | Document |
| `/blog` | No route | Not mandatory |
| `/legal` | No route | Not mandatory |
| `/privacy-policy` | No route | Not mandatory |
| Insight unknown slug | `notFound()` | Covered by not-found |
| Compliance external URL | BeCompliance tenancy | Validate wording; keep URL if operational |

## Bound residuals (do not resolve)

| ID | Owner |
|---|---|
| `HOME_PUNCTUATION_RESIDUAL_001` | Phase 6 |
| `GLOBAL_A11Y_REGION_RESIDUAL_001` | Phase 6 |
| `AXE_INCOMPLETE_REVIEW_001` | Phase 6 |

## Freeze reminder

Do not modify Homepage, Team, Services, Markets, Jurisdictions, Brazil, Phase 5A routes, Nav, layout, footer, CookieBanner, WhatsApp, global tokens, brand assets, or redirects/canonicals outside Phase 5C.
