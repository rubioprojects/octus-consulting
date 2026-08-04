# Phase 5C — Impact Matrix

**Phase:** 5C Intelligence / Insights / Legal utility  
**Starting HEAD:** `cee3e907069542b14c85bec56769dc9549b4674c`  
**Date:** 2026-08-03

## Allowed mutation surfaces

| Path | Rationale | Blast radius |
|---|---|---|
| `app/intelligence/**` | Intelligence family only | Local |
| `app/insights/**` | Insights index + article renderer | Local |
| `lib/posts.ts` | Sole Insights article SoT (33 posts) | Insights + sitemap slug list only |
| `lib/insightEnrichment.ts` | Article enrichment helpers | Insights articles only |
| `lib/intelligence.ts` | Hub category mapping | Insights hub only |
| `lib/commercial.ts` `INTELLIGENCE_PILLARS` | Single consumer: intelligence page | Local (documented) |
| `app/privacy/**` | Privacy policy | Local |
| `app/terms/**` | Terms | Local |
| `app/cookies/**` | Cookie policy (align to frozen CookieBanner) | Local |
| `app/compliance-channel/**` | Compliance channel | Local |
| `app/not-found.tsx` | Branded 404 (authorized) | Export 404 only |
| Phase 5C evidence under `intelligence-legal/` | Audit packet | Docs only |
| `app/sitemap.ts` | Only if orphan/missing Phase 5C route | Shared metadata — edit only with orphan proof |

## Shared component policy

| Component | Edit in 5C? | Consumers outside 5C | Rule |
|---|---|---|---|
| `PageHero` | **No** | Many frozen routes | Page-scoped copy only |
| `CtaLink` / `CtaButton` | **No** | Global | Labels via page props only |
| `CookieBanner` | **No** (frozen) | Layout | Align Privacy/Cookies copy to banner |
| `Nav` / `layout` / footer / WhatsApp | **No** | Global | Freeze |
| `InsightsHubClient` | Yes if needed | Insights only | Allowed |
| `InsightCategoryRail` / `ContentCard` / `Section` | Yes if needed | Insights only | Allowed |
| `BrandSectionMotif` / `Reveal` / markers | **No** (shared) | Home/solutions | Reuse without editing |

**Stop condition:** Undocumented shared-component mutation → `BLOCKED`.

## Frozen systems (hard stop)

`app/page.tsx`, Homepage components, `app/team/**`, `public/team/**`, `app/solutions/**`, `app/markets/**`, `app/jurisdictions/**`, `app/brazil/**`, `app/about/**`, `app/contact/**`, `app/how-we-engage/**`, `app/diagnostic/**`, `app/partners/**`, `app/careers/**`, Nav, layout, footer, CookieBanner, WhatsApp, global tokens, brand assets, redirects/canonicals outside Phase 5C.

## Mutation class

`PRODUCT_WEBSITE` + `PRODUCT_CONTENT_GOVERNANCE` (claims).

## Regression surfaces (must remain PASS)

Homepage · Team · Services (20/39/34/11) · Phase 5A six routes · Phase 5B 13 routes · global system (header/footer/WA/Cookie/favicon/overflow/noindex).

## Bound residuals

Preserve OPEN; do not silently resolve.
