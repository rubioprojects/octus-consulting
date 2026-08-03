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
| 1 | Team hard gate | **ACCEPTED by Sol** | `OCTUS_TEAM_HARD_GATE` + provenance PASS |
| 2 | Global visual system | **AUTHORIZED / IN PROGRESS** | `OCTUS_GLOBAL_SYSTEM_GATE_READY_FOR_SOL_AUDIT` |
| 3 | Homepage | BLOCKED until Sol accepts Phase 2 | — |
| 4 | Services and service families | BLOCKED | — |
| 5 | Institutional and content families | BLOCKED | — |
| 6 | Full regression | BLOCKED | Final: `OCTUS_FULL_SITE_CANDIDATE_READY_FOR_SOL_FINAL_AUDIT` |

### Phase 1 acceptance stamp

| Field | Value |
|---|---|
| accepted_phase1_head | `0654dc1247967bcc36d760f47ae0654ff3814aa3` |
| TEAM_IMPLEMENTATION | PASS |
| TEAM_EVIDENCE_PROVENANCE | PASS |
| PHASE_1_HARD_GATE | ACCEPTED |
| Team lock | Do not reopen roster, titles, order, portraits, or `app/team/page.tsx` |

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

## Phase 2 scope

Shared visual system only: Nav, BrandLockup, footer shell, globals tokens, DarkHeroAtmosphere, WhatsApp, cookies, favicons, brand assets.

**Not in Phase 2:** homepage composition, services content, institutional pages, Team page.

Impact matrix: `docs/ops/evidence/remediation/global-system/PHASE2_IMPACT_MATRIX.md`

## Intentional differences (binding)

| Difference | Rationale |
|---|---|
| Services / Industries labels (baseline Solutions / Markets) | Seven-area factual IA — PR #17 SoT |
| Single primary Discuss CTA in header (baseline Discuss + Email) | Commercial simplification retained |
| Rubio / Maria / specialist verified titles | Phase 1 lock |
| Contact/Brazil dark-hero chrome vs baseline light on some routes | Page-hero ownership → Phase 5; do not empty-dark via globals |

## Rollback

| Field | Value |
|---|---|
| accepted_phase1_head (Phase 2 start) | `0654dc1247967bcc36d760f47ae0654ff3814aa3` |
| Method | `git revert` Phase 2 commits; do not rebase |

## Forbidden claims

- No merge · no production · no rebase · no new PR  
- No preview return to Rubio  
- No `READY_FOR_RUBIO_RESCREEN`  
- No Phase 3 until Sol accepts Phase 2  
