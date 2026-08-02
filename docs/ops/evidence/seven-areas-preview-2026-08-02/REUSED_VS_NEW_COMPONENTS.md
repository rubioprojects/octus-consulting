# Reused vs new components

## Reused (preserved brand system)

| Asset | Role |
|-------|------|
| `PageHero`, `CtaButton`/`CtaLink`, `Eyebrow` | Area + index heroes |
| `HomeModulesAccordion` | Homepage seven-area accordion |
| `SolutionHubPage` pattern | Informational basis for `AreaHubPage` |
| `ENGAGEMENT_MODELS` from `lib/commercial.ts` | Homepage how-we-work |
| Depth pages under `/solutions/{regulatory,compliance,corporate}/*` | Unchanged content, linked from areas |
| `/markets/*`, `/insights/*`, `/team`, `/about`, `/contact` | Preserved routes |
| Brand tokens / fonts / logo assets | Unchanged |

## New

| Asset | Role |
|-------|------|
| `lib/publicAreas.ts` | Website-facing seven areas + 39 services (catalog consume) |
| `components/system/AreaHubPage.tsx` | Shared area template |
| `components/StaticRedirect.tsx` | Static-export fallback redirects |
| `lib/insightEnrichment.ts` | Author / area / industry / jurisdiction / review markers |
| `vercel.json` | Host redirects for renamed hubs + `/services` alias |
| New routes | `/solutions/regulatory-structuring`, `compliance-risk`, `legal-structural-architecture`, `corporate-structuring`, `remediation-readiness` |

## Demoted / redirected

| Former | To |
|--------|----|
| Banking & Payments hub | `/international-hub` (+ Corp / Remediation depth links) |
| Six Solution hub URLs | Corresponding approved area URLs |

## Not wholesale-merged

PR #10 / #11 brand+conversion branches — used only as conceptual reference; not merged.
