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
| 3 | Homepage | **READY_FOR_SOL_AUDIT** (impl + immutable evidence) | `OCTUS_HOME_GATE_READY_FOR_SOL_AUDIT` |
| 4 | Services and service families | BLOCKED until Sol accepts Phase 3 | — |
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

### Phase 3 stamp (awaiting Sol)

| Field | Value |
|---|---|
| phase3_control_commit | `98125861a4c2ea5ff659d7da0c513490a2329d32` |
| phase3_implementation_commit | `47db576145b80f7c232b0d31c3372247a6f538fc` |
| phase3_evidence_commit | `9435d9bec86fde156d52bb13bfd57e06c210d9e3` |
| immutable_preview | https://octus-consulting-l79bo9vrg-axle1.vercel.app |
| deployment_id | `dpl_FCywMhkUrBatkqCH4t3s7izYvUYE` |
| validation | `homepage/audit/PHASE3_VALIDATION.json` overall PASS |
| report | `homepage/PHASE3_HOME_GATE_REPORT.md` |
| Phase 4 | BLOCKED until Sol accepts Phase 3 |

**Not in Phase 3:** Team, global system, Nav/footer, services/institutional pages.

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
- No Phase 4 until Sol accepts Phase 3  
