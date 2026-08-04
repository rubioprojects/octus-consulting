# Phase 5A — Route Inventory

**Phase:** 5A Institutional and Engagement Hard Gate  
**Starting HEAD:** `15df1e82c5ccd3dfb47d83dda30805fbd55b5497`  
**Accepted Phase 4 application SHA:** `eac4e514ea751314774f3e69f71ebd52245d2534`  
**Accepted Phase 4 preview:** https://octus-consulting-beqxfdqrk-axle1.vercel.app  
**Baseline SoT:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)

## Mandatory routes

| Route | Template family | File | Baseline classification (FINAL) | Notes |
|---|---|---|---|---|
| `/about` | Institutional authority | `app/about/page.tsx` | `DIRECT_BASELINE_ROUTE` | Uses PageHero (shared; page-only edits) |
| `/how-we-engage` | Engagement model | `app/how-we-engage/page.tsx` | `DIRECT_BASELINE_ROUTE` | Uses PageHero + CtaLink |
| `/contact` | Commercial intake | `app/contact/page.tsx` | `DIRECT_BASELINE_ROUTE` | Custom dark hero; no site form; layout.tsx removed |
| `/diagnostic` | Structured assessment intake | `app/diagnostic/page.tsx` | `DIRECT_BASELINE_ROUTE` | WA + mailto; not a lead form |
| `/partners` | Network positioning | `app/partners/page.tsx` | `DIRECT_BASELINE_ROUTE` | Classes only; no named partners |
| `/careers` | Employer / talent EOI | `app/careers/page.tsx` | `DIRECT_BASELINE_ROUTE` | Local markup only; mailto EOI |

> Preliminary inventory rows that previously said `NO_DIRECT_BASELINE_ROUTE` for How We Engage / Diagnostic / Partners are **superseded**. Canonical: `shared/PHASE5A_BASELINE_ROUTE_MAPPING.md`.

## Aliases / redirects (derived)

| Probe | Result |
|---|---|
| `next.config.js` redirects | None for these six paths |
| `middleware` | None |
| `vercel.json` | Solutions legacy only — none for Phase 5A |
| Sitemap | All six retained in `app/sitemap.ts` |
| Canonicals | `pageSocialMeta({ path })` → `https://octusconsulting.com{path}` |
| Related non-alias | `ASSESS_PATH=/diagnostic` in `lib/cta.ts`; `/what-we-do` is separate (out of Phase 5A) |

**No legacy 301/308 aliases discovered for the six mandatory routes.** Alias audit will confirm live status codes against the immutable Phase 5A preview.

## Intake surfaces

| Route | Mechanism | Live data risk |
|---|---|---|
| Contact | WhatsApp + mailto | Opens client apps; no automated POST |
| Diagnostic | WhatsApp assess/discuss + mailto | Same |
| Careers | `mailto:talentos@octusconsulting.com` | Same |
| About / How we engage / Partners | WA / mailto / internal links | No forms |

## Bound residuals (do not resolve in 5A)

| ID | Owner | Status |
|---|---|---|
| `HOME_PUNCTUATION_RESIDUAL_001` | Phase 6 | OPEN · exactly one · final-candidate blocking |
| `GLOBAL_A11Y_REGION_RESIDUAL_001` | Phase 6 | OPEN · Axe moderate `.wa-float` · not a Phase 5A pass condition |
| `AXE_INCOMPLETE_REVIEW_001` | Phase 6 | OPEN · incomplete disposition deferred |
