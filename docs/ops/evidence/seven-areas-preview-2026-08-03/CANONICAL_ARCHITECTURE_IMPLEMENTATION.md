# Canonical Architecture Implementation — Seven Areas PR #17

**Date:** 2026-08-03  
**Branch:** `feat/seven-areas-website-architecture`  
**Starting HEAD:** `d99d53aea4122cb9653cf7171e1e4b3bd2b1a447`  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17

## Mandate sections delivered

| § | Requirement | Status |
|---|-------------|--------|
| A | Architecture markdown docs (family V1, placement V3, canonical map, org model, team register) | DONE |
| B | `lib/serviceArchitecture.ts`, `lib/areaHubContent.ts`, 12-module `AreaHubPage` | DONE |
| C | Team page rebuild — locked roster, no removed profiles | DONE |
| D | Rubio crop tokens `.team-photo--rubio-home` / `.team-photo--rubio-team` | DONE |
| E | Services overview 9-module structure | DONE |
| F | Brazil flagship page modules | DONE |
| G | Banking redirect → `/solutions/banking-payments-infrastructure` + vercel.json 301 | DONE |
| H | CTA governance (hub workstream / remediation assess labels) | DONE |
| I | Absolute OG image `https://octusconsulting.com/og-image.png` | DONE |
| J | Evidence (this document) | DONE |
| K | Build + typecheck green; 55 families / 39 services / zero orphans | DONE |
| L | Two commits (architecture then implementation) | DONE |

## Architecture counts

- **Families:** 55 (locked in `OCTUS_SERVICE_FAMILY_ARCHITECTURE_V1.json`)
- **Services mapped:** 39 (all in families; zero orphans validated)
- **Public areas:** 7 (no Banking 8th area)

## Team roster (rendered)

| Layer | Name | Title |
|-------|------|-------|
| Leadership | Rubio Teixeira | Founder & CEO |
| Leadership | Maria Cristina | Operations Coordination |
| Practice Lead | Esther Vendrami | International Regulatory & Compliance Lead |
| Practice Lead | Caroline Giovanetti | Brazil Regulatory Lead |
| Practice Lead | Rodrigo Coelho Lopes | Legal Architecture Lead |
| Practice Lead | Claudia Nery | Chief Financial Officer |
| Commercial | Milla Ludovico | Business Development Lead |

**Removed from Team:** Larissa Carvalho, Daniel Cruz Fonseca, Bianca Carolina Oliveira Andrade, Luciana Santos Veloso  
**Internal only (not rendered):** Irati  
**Not added:** Karen, Tikito, Juliana

## Portrait provenance

| Asset | sha256 | Decision |
|-------|--------|----------|
| `public/team/rubio-teixeira.jpg` | `b02c2d72fcda45077f4f6e95fcc7d4698f4ce6f4a110d0d7d2e40303e06a277b` | Restored old asset (mandate D6) |

Crop tokens: homepage `.team-photo--rubio-home` (50% 12%, scale 1.08); team `.team-photo--rubio-team` (48% 16%) — distinct from Maria Cristina at 50% 40%.

## Area hubs

All seven hubs use 12-module `AreaHubPage`:

1. Area thesis (hero)  
2. Problems / triggers  
3. Service-family overview  
4. Subservices by family (accordion)  
5. Selected deep-service pages  
6. Multi-jurisdiction implications (unique per area)  
7. Connections to other areas  
8. Industries  
9. Jurisdictions  
10. Delivery / engagement  
11. Responsible leadership  
12. Contextual final CTA  

Thin wrappers unchanged under `app/solutions/*`, `/private-clients`, `/international-hub`.

## Brazil

`/brazil` retained as flagship. Modules: who for; regulatory entry; SPA/MF; B2B/supplier; corporate/local presence; compliance AML; banking/payments; tax/finance; service area links; Brazil Insights; single CTA.

## CTA / metadata

- Hubs: **Discuss this workstream →** (Remediation: **Assess your situation →**)
- Header: single Discuss; WhatsApp float unchanged
- Team closing: primary Discuss + text link See careers
- `pageSocialMeta`: absolute OG/Twitter image on production domain

## Build validation

```
npm run build — exit 0
npx tsc --noEmit — exit 0
```

## Screenshots

Static export (`output: export`) — preview via `npx serve out`. Playwright CLI available but browser binaries not installed in this environment; screenshots not captured locally. Vercel preview deploy validates visual output post-push.

## Remaining visual defects

- Rubio crop may need human rescreen on live preview (face-dominant intent set; asset restored)
- Practice lead photos unchanged from prior deploy
- Mobile accordion spacing on very long family lists untested on device

## Scope exclusions (confirmed)

- No merge to main  
- No production deploy  
- No rebase against main
