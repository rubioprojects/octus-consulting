# Remediation Control Plan — Octus PR #17

**Mission:** Controlled full-site remediation (phased)  
**Starting recovery HEAD:** `bc40c2ae376867af1ba68ae3a8124d23c70f33c3`  
**Branch:** `feat/seven-areas-website-architecture`  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  

## Visual baseline (source of truth)

| Field | Value |
|---|---|
| URL | https://octus-consulting-9q798dbg2-axle1.vercel.app |
| Deployment ID | `437tawkoMDv7sqxW6NzPzTegj1Lq` |
| Provenance commit (not visual SoT alone) | `8b12fcc` |

## Factual / architecture source of truth

PR #17 — seven-area architecture, current routes, evidence-safe editorial rules.

## Phase gating

| Phase | Name | Status | Terminal |
|---|---|---|---|
| 0 | Control and inventory | COMMITTED `b90a694` | (prerequisite) |
| 1 | Team hard gate | **ACCEPTED by Sol** | Team hard gate + provenance PASS |
| 2 | Global visual system | **ACCEPTED by Sol** | Global system gate PASS |
| 3 | Homepage | **ACCEPTED_WITH_RESIDUAL** | Closeout accepted · residual `HOME_PUNCTUATION_RESIDUAL_001` → Phase 6 |
| 4 | Services and service families | **AUTHORIZED / IN PROGRESS** | `OCTUS_SERVICES_GATE_READY_FOR_SOL_AUDIT` |
| 5 | Institutional and content families | BLOCKED until Sol accepts Phase 4 | — |
| 6 | Full regression | BLOCKED | Includes residual punctuation closure + final: `OCTUS_FULL_SITE_CANDIDATE_READY_FOR_SOL_FINAL_AUDIT` |

### Phase 1 acceptance stamp

| Field | Value |
|---|---|
| accepted_phase1_head | `0654dc1247967bcc36d760f47ae0654ff3814aa3` |
| TEAM_IMPLEMENTATION | PASS |
| TEAM_EVIDENCE_PROVENANCE | PASS |
| PHASE_1_HARD_GATE | ACCEPTED |
| Team lock | Do not reopen roster, titles, order, portraits, or `app/team/page.tsx` |

### Phase 2 acceptance stamp

| Field | Value |
|---|---|
| accepted_phase2_head | `4a4687134156dce4e5892552a049ff00747d1172` |
| phase2_implementation_commit | `ef0d9465f07993c811144291d0da0371d12e7229` |
| immutable_preview | https://octus-consulting-kovk3ad1l-axle1.vercel.app |
| deployment_id | `dpl_4pDMJNttdiwdLJmkyBbSffxBqDWK` |
| PHASE_2_GLOBAL_SYSTEM_HARD_GATE | ACCEPTED |
| Global lock | Do not reopen Nav/header/footer/WhatsApp/cookies/global tokens |

## Approved public Team roster (exactly 10) — LOCKED

### Leadership
1. Rubio Teixeira — Founder & CEO  
2. Maria Cristina — Operations Coordination  

### Core Specialists (baseline order)
3. Rodrigo Coelho Lopes — Legal Architecture Lead  
4. Claudia Nery — Chief Financial Officer  
5. Esther Vendrami — International Regulatory & Compliance Lead  
6. Caroline Giovanetti — Brazil Regulatory Lead  
7. Larissa Carvalho — Regulatory & Compliance Specialist  
8. Milla Ludovico — Business Development Lead  
9. Bianca Carolina Oliveira Andrade — People & Operations  
10. Luciana Santos Veloso — Operations Coordinator  

## Phase 3 scope

Homepage composition only: `app/page.tsx`, home-only components, `.home-*` / homepage-scoped CSS.

Impact matrix: `docs/ops/evidence/remediation/homepage/PHASE3_HOME_IMPACT_MATRIX.md`

### Phase 3 stamp (ACCEPTED_WITH_RESIDUAL)

| Field | Value |
|---|---|
| accepted_phase3_head | `620b725d613fba4ff4a062477c1110e453a4eb63` |
| accepted Homepage application commit | `11c0f9da74408f270a22c23b5b2903ce45f5e33c` |
| immutable_preview (Homepage closeout) | https://octus-consulting-7yzcy4yif-axle1.vercel.app |
| deployment_id (closeout) | `dpl_ALymSbjVv45GWXdeFuYrPBXMN88w` |
| PHASE_3_HOMEPAGE_HARD_GATE | ACCEPTED_WITH_RESIDUAL |
| residual | `HOME_PUNCTUATION_RESIDUAL_001` → Phase 6 |
| Homepage lock | Do not modify `app/page.tsx` / `HomeLeadershipTrust` / Homepage CSS |

## Phase 4 scope

Services overview · seven area hubs · Banking supporting page · all deep-service routes · service-family navigation/CTAs · desktop+mobile unique templates.

Inventory: `services/PHASE4_ROUTE_INVENTORY.md`  
Impact matrix: `services/PHASE4_SERVICES_IMPACT_MATRIX.md`

### Phase 4 stamp (in progress)

| Field | Value |
|---|---|
| phase4_starting_head | `620b725d613fba4ff4a062477c1110e453a4eb63` |
| status | AUTHORIZED / IN PROGRESS |
| terminal_target | `OCTUS_SERVICES_GATE_READY_FOR_SOL_AUDIT` |
| Phase 5–6 | BLOCKED |
| Rubio rescreen | BLOCKED |

**Not in Phase 4:** Homepage residual fix · Team · global shell · institutional/content families · merge/production/rebase.

## Intentional differences (binding)

| Difference | Rationale |
|---|---|
| Services / Industries labels (baseline Solutions / Markets) | Seven-area factual IA — PR #17 SoT |
| Single primary Discuss CTA in header (baseline Discuss + Email) | Commercial simplification retained |
| Rubio / Maria / specialist verified titles | Phase 1 lock |
| Homepage Seven areas (not Six solutions / 06) | Catalog SoT |
| Homepage evidence-safe hero/final/remediation wording | Editorial integrity |
| Contact/Brazil dark-hero chrome vs baseline light on some routes | Page-hero ownership → Phase 5 |

## Rollback

| Field | Value |
|---|---|
| accepted_phase2_head (Phase 3 start) | `4a4687134156dce4e5892552a049ff00747d1172` |
| Method | `git revert` Phase 3 commits; do not rebase |

## Forbidden claims

- No merge · no production · no rebase · no new PR  
- No preview return to Rubio  
- No `READY_FOR_RUBIO_RESCREEN`  
- No Phase 5 until Sol accepts Phase 4  
- Do not resolve `HOME_PUNCTUATION_RESIDUAL_001` in Phase 4  
