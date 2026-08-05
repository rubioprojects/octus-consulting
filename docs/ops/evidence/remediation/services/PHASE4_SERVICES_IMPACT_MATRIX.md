# Phase 4 — Services impact matrix

**PR #17** · starting HEAD `620b725d613fba4ff4a062477c1110e453a4eb63`  
**Constraint:** Do not silently alter Phase 5 institutional consumers via global shared-component edits without a services-specific variant **or** full consumer capture.

## Allowed application paths (declared)

| Path | Purpose | Status |
|---|---|---|
| `app/solutions/**` | Overview, hubs, banking, deep, aliases | IN SCOPE |
| `app/private-clients/**` | Private Clients hub | IN SCOPE |
| `app/international-hub/**` | International Hub | IN SCOPE |
| `components/system/AreaHubPage.tsx` | 7 hub consumers only (all Phase 4) | IN SCOPE — Phase 4 only consumers |
| `components/system/ServiceFamilyAccordion.tsx` | 7 hubs only | IN SCOPE |
| `components/system/SolutionIdentityMark.tsx` | `/solutions` overview only | IN SCOPE |
| `lib/publicAreas.ts` | Area/service copy registry | IN SCOPE if needed — no 8th peer |
| `lib/areaHubContent.ts` | Hub enrichment | IN SCOPE if needed |
| `lib/serviceArchitecture.ts` + JSON docs | Family architecture | IN SCOPE if needed |
| Service-scoped CSS selectors in `app/globals.css` | `.solution-card*` only (overview) | DECLARED — overview commit |
| New `components/system/ServicesPageHero.tsx` or wrapper | Prefer if PageHero institutional consumers must stay frozen | PREFERRED over global PageHero edit |

## Prohibited paths (hard freeze)

`app/page.tsx` · `HomeLeadershipTrust` · `HomeModulesAccordion` · `CapabilityRail` · Homepage CSS · `app/team/**` · `public/team/**` · `Nav` · `layout` · footer · `CookieBanner` · WhatsApp global · logo/favicon · global tokens · About/Brazil/Contact/How We Engage/Intelligence/Insights/Markets/Jurisdictions/Careers/legal · redirects/canonicals unless proven defect

**Bound residual (do not fix):** `HOME_PUNCTUATION_RESIDUAL_001` in `HomeLeadershipTrust` — Phase 6 owner.

## Shared component usage inventory

### `PageHero.tsx`

| Route | Family | Phase 4? | Impact if changed | Required regression |
|---|---|---|---|---|
| `/solutions` | Services overview | Yes | HIGH | Overview hero desktop/mobile |
| `/solutions/banking-payments-infrastructure` | Banking supporting | Yes | HIGH | Banking hero |
| 7 hubs via `AreaHubPage` | Area hubs | Yes | HIGH | Each hub hero |
| `/about` | Institutional | **No** | Medium | Capture if PageHero mutated globally |
| `/how-we-engage` | Institutional | **No** | Medium | Capture if mutated |
| `/partners` | Institutional | **No** | Medium | Capture if mutated |
| `/diagnostic` | Conversion | **No** | Medium | Capture if mutated |
| `/intelligence` | Content | **No** | Medium | Capture if mutated |
| `/insights` | Content | **No** | Medium | Capture if mutated |
| `/jurisdictions` · `/markets` | Markets IA | **No** | Medium | Capture if mutated |

**Decision rule:** Prefer services-scoped hero wrapper / props / CSS prefixes for Phase 4. Global `PageHero` structural geometry may only change if all Phase 5+ consumers are listed and captured in this mission.

### `AreaHubPage.tsx`

| Route | Phase 4? | Impact |
|---|---|---|
| `/solutions/regulatory-structuring` | Yes | CRITICAL |
| `/solutions/compliance-risk` | Yes | CRITICAL |
| `/solutions/legal-structural-architecture` | Yes | CRITICAL |
| `/solutions/corporate-structuring` | Yes | CRITICAL |
| `/private-clients` | Yes | CRITICAL |
| `/solutions/remediation-readiness` | Yes | CRITICAL |
| `/international-hub` | Yes | CRITICAL |

All consumers are Phase 4 — safe to evolve for hub reconciliation without Phase 5 blast.

### `ServiceFamilyAccordion.tsx`

All 7 hubs · Phase 4 only · CRITICAL

### `DarkHeroAtmosphere.tsx`

Deep services (inline) + `PageHero` + Brazil/contact/team · **Do not change geometry** without documenting Phase 1/5 regressions. Prefer deep-page-local markup/CSS.

### `CtaButton` / `CtaLink`

Site-wide · change only service-local CTA composition unless unavoidable

## Planned implementation blast (pre-code)

| Workstream | Files (expected) | Shared? | Commit bucket |
|---|---|---|---|
| Overview visual reconcile | `app/solutions/page.tsx` (+ scoped CSS if needed) | PageHero consumer | Commit 2 |
| Seven hubs | `AreaHubPage.tsx`, `ServiceFamilyAccordion.tsx`, hub `page.tsx` thin wrappers | Hub-only shared | Commit 3 |
| Banking | `app/solutions/banking-payments-infrastructure/page.tsx` | PageHero | Commit 4 |
| Deep services | 11 `app/solutions/**` deep pages | Pattern sync; prefer shared deep template only if new service-only component | Commit 5 |
| Evidence | `docs/ops/evidence/remediation/services/**` | N/A | Commits 6–7 |

## Visual recovery targets (from baseline SoT)

- Editorial density, premium hierarchy, section proportions  
- Dark/light rhythm, hero geometry, heading scale  
- Card proportions, spacing, dividers, transitions  
- CTA hierarchy, mobile rhythm, footer transition  

Preserve current seven-area facts / 39-service catalogue / evidence-safe copy.

## Avoid

Repetitive SaaS templates · identical mechanical hubs · empty dark heroes · generic icon walls · excessive CTAs · internal taxonomy language · six-area framing · Banking as peer · em/en dashes · guarantee language

## Residual binding

| ID | Text | Owner | Phase 4 action |
|---|---|---|---|
| HOME_PUNCTUATION_RESIDUAL_001 | Leadership supporting line em dash | Phase 6 | Preserve; do not resolve |

## Institutional smoke (regression only)

`/about` · `/contact` · `/brazil` · `/intelligence` — verify unchanged if shared components untouched; capture if PageHero/`DarkHeroAtmosphere` mutated.
