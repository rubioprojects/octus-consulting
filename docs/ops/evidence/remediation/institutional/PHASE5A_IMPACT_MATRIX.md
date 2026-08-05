# Phase 5A — Impact Matrix

**Freeze rule:** Any required change to a frozen consumer of a shared component → stop BLOCKED or create a Phase 5A-only variant. Do not edit shared components in place during Phase 5A.

## Allowed application paths

| Path | Intent |
|---|---|
| `app/about/**` | Institutional authority |
| `app/how-we-engage/**` | Engagement models |
| `app/contact/**` | Commercial intake |
| `app/diagnostic/**` | Diagnostic assessment |
| `app/partners/**` | Partner classes |
| `app/careers/**` | Careers EOI |
| Phase 5A evidence under `docs/ops/evidence/remediation/institutional/**` | Gate artifacts |

## Frozen (do not modify)

Homepage (`app/page.tsx`, `HomeModulesAccordion`, home-only CSS) · Team · `app/solutions/**` · private-clients · international-hub · `AreaHubPage` · `lib/publicAreas.ts` · catalogue / architecture JSON · Nav · layout · footer structure · CookieBanner · WhatsApp geometry · logo/favicon · global tokens · markets/jurisdictions/brazil/intelligence/insights · privacy/terms/cookies/compliance-channel

## Shared component blast radius

| Component | Phase 5A users | Outside Phase 5A? | Phase 5A decision |
|---|---|---|---|
| `PageHero` | about, how-we-engage, diagnostic, partners | Yes — services, hubs, markets, jurisdictions, intelligence, insights | **Do not edit.** Page-level props/copy only. |
| `DarkHeroAtmosphere` | contact (direct); via PageHero | Yes — team, brazil, deep services | **Do not edit.** |
| `CtaLink` | how-we-engage, partners; via PageHero | Yes — home, solutions, etc. | **Do not edit.** Labels via existing CTA constants. |
| `OctusEditorialDivider` | about | Yes — home, solutions, AreaHub | **Do not edit.** |
| `OctusChapterTransition` | about | Yes — home | **Do not edit.** |
| `lib/commercial` ENGAGEMENT_MODELS / PARTNER_CLASSES | how-we-engage / partners | Data consumers limited to those pages | Prefer page-local edits; touch commercial data only if claim rewrite requires |

## Mutation class

`PRODUCT_WEBSITE` · institutional/engagement pages only · no global CSS token edits to hide composition issues
