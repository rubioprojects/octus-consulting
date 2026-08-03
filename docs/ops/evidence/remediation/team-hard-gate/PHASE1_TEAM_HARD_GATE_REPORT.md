# Phase 1 — Team hard gate evidence

**Terminal target:** `OCTUS_TEAM_HARD_GATE_READY_FOR_SOL_AUDIT`  
**Date:** 2026-08-03  
**Starting recovery HEAD:** `bc40c2ae376867af1ba68ae3a8124d23c70f33c3`  
**Phase 0 commit:** `b90a6944d2b104010e17763b1ee026790d8bfc79`  

## Visual baseline

| Field | Value |
|---|---|
| URL | https://octus-consulting-9q798dbg2-axle1.vercel.app |
| Deployment ID | `437tawkoMDv7sqxW6NzPzTegj1Lq` |

## Before (broken composition)

| Field | Value |
|---|---|
| Preview | https://octus-consulting-dzw2n5wff-axle1.vercel.app |
| SHA | `bc40c2ae376867af1ba68ae3a8124d23c70f33c3` |
| Roster | 7 (missing Larissa, Bianca, Luciana) |
| Bands | Leadership + Leadership Support + Operational Leadership + Core Specialists |

## Reconciled (local validation origin)

| Field | Value |
|---|---|
| Capture origin | `http://127.0.0.1:3017` (static `out/` after `npm run build`) |
| Roster | **10** |
| Bands | Leadership + Core Specialists only |

## Public roster (names + roles)

| # | Name | Role | Band |
|---|---|---|---|
| 1 | Rubio Teixeira | Founder & CEO | Leadership |
| 2 | Maria Cristina | Operations Coordination | Leadership |
| 3 | Rodrigo Coelho Lopes | Legal Architecture Lead | Core Specialists |
| 4 | Claudia Nery | Chief Financial Officer | Core Specialists |
| 5 | Esther Vendrami | International Regulatory & Compliance Lead | Core Specialists |
| 6 | Caroline Giovanetti | Brazil Regulatory Lead | Core Specialists |
| 7 | Larissa Carvalho | Regulatory & Compliance Specialist | Core Specialists |
| 8 | Milla Ludovico | Business Development Lead | Core Specialists |
| 9 | Bianca Carolina Oliveira Andrade | People & Operations | Core Specialists |
| 10 | Luciana Santos Veloso | Operations Coordinator | Core Specialists |

## Changed files (Phase 1)

- `app/team/page.tsx`
- `public/team/luciana-santos-veloso.jpg` (restored from `dc5862d`)
- `docs/ops/evidence/remediation/team-hard-gate/**`
- `scripts/team-hard-gate-capture.cjs`
- control plan gate status update in `docs/ops/evidence/remediation/REMEDIATION_CONTROL_PLAN.md`

## Prohibited files confirmation

Untouched in Phase 1:

- `app/page.tsx`
- `components/Nav.tsx`
- `app/layout.tsx`
- shared footer components
- `PageHero` / AreaHub / service pages
- shared color/spacing tokens (no edits to non–team-* token definitions)
- `components/system/DarkHeroAtmosphere.tsx` (consumed, not edited)
- `components/system/HomeLeadershipTrust.tsx`

## Screenshot paths

### Desktop 1440×1000

| Shot | Baseline | Before | Reconciled |
|---|---|---|---|
| Hero | `baseline/hero-desktop.png` | `before/hero-desktop.png` | `reconciled/hero-desktop.png` |
| Full | `baseline/full-desktop.png` | `before/full-desktop.png` | `reconciled/full-desktop.png` |
| Leadership | `baseline/leadership-grid-desktop.png` | `before/leadership-grid-desktop.png` | `reconciled/leadership-grid-desktop.png` |
| Rubio crop | `baseline/rubio-crop-desktop.png` | `before/rubio-crop-desktop.png` | `reconciled/rubio-crop-desktop.png` |
| Maria crop | `baseline/maria-crop-desktop.png` | `before/maria-crop-desktop.png` | `reconciled/maria-crop-desktop.png` |
| Core grid | `baseline/core-grid-desktop.png` | `before/core-grid-desktop.png` | `reconciled/core-grid-desktop.png` |
| CTA | `baseline/cta-desktop.png` | `before/cta-desktop.png` | `reconciled/cta-desktop.png` |

### Mobile 390×844

| Shot | Baseline | Before | Reconciled |
|---|---|---|---|
| Hero | `baseline/hero-mobile.png` | `before/hero-mobile.png` | `reconciled/hero-mobile.png` |
| Full | `baseline/full-mobile.png` | `before/full-mobile.png` | `reconciled/full-mobile.png` |
| Leadership | `baseline/leadership-grid-mobile.png` | `before/leadership-grid-mobile.png` | `reconciled/leadership-grid-mobile.png` |
| Rubio crop | `baseline/rubio-crop-mobile.png` | `before/rubio-crop-mobile.png` | `reconciled/rubio-crop-mobile.png` |
| Maria crop | `baseline/maria-crop-mobile.png` | `before/maria-crop-mobile.png` | `reconciled/maria-crop-mobile.png` |
| Core grid | `baseline/core-grid-mobile.png` | `before/core-grid-mobile.png` | `reconciled/core-grid-mobile.png` |
| CTA | `baseline/cta-mobile.png` | `before/cta-mobile.png` | `reconciled/cta-mobile.png` |
| Card stack | `baseline/mobile-card-stack.png` | `before/mobile-card-stack.png` | `reconciled/mobile-card-stack.png` |

Manifest: `SCREENSHOT_MANIFEST.json`  
Validation: `audit/PHASE1_VALIDATION.json`

## Intentional differences vs baseline (unresolved only as documented)

1. Rubio title **Founder & CEO** (baseline: Founder) — verified lock  
2. Maria title **Operations Coordination** (baseline: Managing Director) — verified lock; Managing Director forbidden  
3. Specialist titles use current verified titles where they differ from baseline labels (e.g. Claudia CFO vs Financial Operations; Rodrigo Legal Architecture Lead vs Strategic Legal Architecture)  
4. Bios are evidence-safe / narrowed — no restored jurisdiction laundry lists  
5. Nav/shell visual parity deferred to Phase 2 (global visual system) — not mutated here  

## Hard stops honoured

- No merge · no production · no rebase · no new PR  
- No Phase 2  
- No Rubio rescreen claim  
