# Phase 1 — Team hard gate evidence

**Terminal (implementation):** `OCTUS_TEAM_HARD_GATE_READY_FOR_SOL_AUDIT` (implementation accepted by Sol)  
**Terminal (this repair):** `OCTUS_TEAM_EVIDENCE_PROVENANCE_READY_FOR_SOL_AUDIT`  
**Date:** 2026-08-03  

## Provenance (binding)

| Field | Value |
|---|---|
| Starting recovery HEAD | `bc40c2ae376867af1ba68ae3a8124d23c70f33c3` |
| Phase 0 commit | `b90a6944d2b104010e17763b1ee026790d8bfc79` |
| team_implementation_commit | `3fb56fcb3cff41d43d3d40b09757a9771e59844b` |
| capture_code_head | `f5be0d87aeaa09a17864da9d7563e435b3746fe9` |
| evidence_repair_commit | `3c462b9ef3b367520b0f3ea8f8fefc7bbc3aa44e` |
| final_phase1_head | `3d7bff5406f4b65b837df8c9ff999c93bc0fd067` |

**Removed invalid SHA:** `4c9a6cfe69326d3db84fa2d047a6d12e3eeb791f` (orphaned amend tip — not on GitHub). Count removed from evidence tree: **17**.

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

## Reconciled (immutable Vercel preview — auditable)

| Field | Value |
|---|---|
| source_url | https://octus-consulting-bvvs2ue51-axle1.vercel.app/team |
| commit_sha / capture_code_head | `f5be0d87aeaa09a17864da9d7563e435b3746fe9` |
| deployment_id | `dpl_7TfPfQnGjCHYsGGkExngEMwUJ8CH` |
| capture_origin | immutable Vercel preview, not localhost |
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

## Implementation files (Phase 1 — not modified by this repair)

- `app/team/page.tsx`
- `public/team/luciana-santos-veloso.jpg`

## This repair — allowed files only

- `docs/ops/evidence/remediation/team-hard-gate/**`
- `docs/ops/evidence/remediation/REMEDIATION_CONTROL_PLAN.md`
- `docs/ops/evidence/remediation/DECISION_REGISTER.md`

Application / portraits / CSS / tokens: **0 changes**.

## Prohibited files confirmation

Untouched:

- `app/**` (including team page during repair)
- `components/**`
- `lib/**`
- `public/**`
- shared CSS / tokens
- service routes

## Screenshot paths (reconciled only replaced)

Desktop 1440×1000 + mobile 390×844 under `reconciled/`:
hero, full, leadership-grid, rubio-crop, maria-crop, core-grid, cta, mobile-card-stack.

Manifest: `SCREENSHOT_MANIFEST.json`  
Validation: `audit/PHASE1_VALIDATION.json` (includes `x-robots-tag` noindex)

## Intentional differences vs baseline (unchanged)

1. Rubio title Founder & CEO (baseline: Founder)  
2. Maria title Operations Coordination (baseline: Managing Director)  
3. Specialist titles use verified current titles  
4. Evidence-safe bios  
5. Global shell deferred to Phase 2  

## Hard stops

- No merge · no production · no rebase · no Phase 2  
- No Team page / portrait / CSS edits in this repair  
- No Rubio rescreen claim  
