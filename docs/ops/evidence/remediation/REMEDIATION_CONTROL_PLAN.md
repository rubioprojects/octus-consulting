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

## Approved public Team roster (exactly 10)

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

**Forbidden public bands:** Leadership Support · Operational Leadership · Practice Leads · invented subdivisions.

## Phase gating

| Phase | Name | Status | Terminal |
|---|---|---|---|
| 0 | Control and inventory | COMMITTED `b90a694` | (prerequisite) |
| 1 | Team hard gate | IMPLEMENTATION ACCEPTED; evidence provenance repair → Sol audit | `OCTUS_TEAM_EVIDENCE_PROVENANCE_READY_FOR_SOL_AUDIT` |
| 2 | Global visual system | BLOCKED until Sol accepts Phase 1 | — |
| 3 | Homepage | BLOCKED | — |
| 4 | Services and service families | BLOCKED | — |
| 5 | Institutional and content families | BLOCKED | — |
| 6 | Full regression | BLOCKED | Final: `OCTUS_FULL_SITE_CANDIDATE_READY_FOR_SOL_FINAL_AUDIT` |

## Permitted / prohibited files — Phase 1

### Permitted
- `app/team/page.tsx`
- Team-specific metadata in that file
- `public/team/*`
- CSS selectors scoped exclusively to `team-*` classes (only if required; prefer no globals change)

### Prohibited in Phase 1
- `app/page.tsx`
- `components/Nav.tsx`
- `app/layout.tsx`
- shared footer code
- `PageHero` / AreaHub / service pages
- shared color or spacing tokens
- unrelated routes
- `components/system/DarkHeroAtmosphere.tsx` (consume only — do not edit)
- `components/system/HomeLeadershipTrust.tsx`

If a global component appears to require alteration → **STOP** and record for Phase 2.

## Acceptance criteria — Phase 1

- Exact DOM roster count = 10  
- Only Leadership + Core Specialists bands  
- Baseline grid composition / ordering / card rhythm matched within intentional differences  
- Rubio / Maria titles locked to verified current titles  
- Other titles = verified current titles (no inflation)  
- All portraits present under `public/team/`  
- Screenshots committed (baseline / before / reconciled) desktop 1440×1000 + mobile 390×844  
- Preview SHA matches declared commit  
- Build + typecheck + Phase 1 scans pass  

## Intentional differences (global / Team)

| Difference | Rationale |
|---|---|
| Rubio title Founder & CEO (baseline “Founder”) | Current verified editorial lock |
| Maria title Operations Coordination (baseline “Managing Director”) | Current verified editorial lock; Managing Director forbidden |
| Specialist titles use verified PR titles where they differ from baseline labels | Do not invent or inflate |
| Evidence-safe bios (no jurisdiction laundry lists / group-wide overclaims) | Integrity register |
| Seven-area IA elsewhere unchanged | Factual SoT = PR #17 |

## Dependencies

- Luciana portrait restored from historical commit `dc5862d` → `public/team/luciana-santos-veloso.jpg`  
- Baseline deployment reachable for comparison captures  

## Rollback

| Field | Value |
|---|---|
| Recovery / rollback commit | `bc40c2ae376867af1ba68ae3a8124d23c70f33c3` |
| Method | `git revert` Phase commits; do not rebase |

## Forbidden claims

- No merge · no production deploy · no rebase · no new PR  
- No preview return to Rubio  
- No `READY_FOR_RUBIO_RESCREEN` without explicit Sol instruction  
- No Phase 2+ until Sol accepts Phase 1  
