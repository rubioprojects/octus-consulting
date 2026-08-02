# Reused vs new components

## Reused (preserved brand system)

| Asset | Role |
|-------|------|
| `PageHero`, `CtaButton`/`CtaLink`, `Eyebrow` | Area + index heroes |
| `HomeModulesAccordion` | Homepage seven-area accordion |
| `SolutionHubPage` pattern | Informational basis for `AreaHubPage` |
| `ENGAGEMENT_MODELS` from `lib/commercial.ts` | Homepage how-we-work |
| Depth pages under `/solutions/{regulatory,compliance,corporate}/*` | Unchanged content, linked from areas as Related services |
| `/markets/*`, `/insights/*`, `/team`, `/about`, `/contact` | Preserved routes |
| Brand tokens / fonts / logo assets | Unchanged |

## New

| Asset | Role |
|-------|------|
| `lib/publicAreas.ts` | Website-facing seven areas + 39 services (catalog consume) |
| `components/system/AreaHubPage.tsx` | Shared area template |
| `components/StaticRedirect.tsx` | Static-export fallback redirects |
| `lib/pageMeta.ts` | Page-specific Open Graph / Twitter metadata |
| `lib/insightEnrichment.ts` | Author / area / industry / jurisdiction / review markers |
| `vercel.json` | Host permanent redirects (observed HTTP **308**) for renamed hubs, legacy pillars, `/services` |
| New routes | `/solutions/regulatory-structuring`, `compliance-risk`, `legal-structural-architecture`, `corporate-structuring`, `remediation-readiness` |

## Supporting / redirected (not peer areas)

| Former / special | Treatment |
|------------------|-----------|
| Banking & Payments (`/solutions/banking-payments-infrastructure`) | **HTTP 200** supporting routing page → Corp / Hub / Remediation (H-03). **Not** redirected to International Hub. |
| Renamed six-Solution hub URLs | Permanent redirect (**308**) to approved area URLs |
| Legacy pillars `/regulatory`, `/compliance`, `/corporate`, `/audit`, `/legal-architecture` | Permanent redirect (**308**) to approved area URLs |

## Not wholesale-merged

PR #10 / #11 brand+conversion branches — used only as conceptual reference; not merged.
