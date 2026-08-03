# Decision Register — Controlled remediation PR #17

**Starting HEAD:** `bc40c2ae376867af1ba68ae3a8124d23c70f33c3`  
**Baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)

## D-001 — Public Team roster size and membership

| Field | Value |
|---|---|
| Decision | Public Team = exactly **10** named people (mandate, 2026-08-03) |
| Supersedes | Prior “7 verified / 3 held” and “Larissa/Bianca/Luciana internal-only” gates |
| Authority | Rubio mandate Phase 1 Team hard gate |
| Status | ACCEPTED for Phase 1 |

## D-002 — Public hierarchy bands

| Field | Value |
|---|---|
| Decision | Render only **Leadership** + **Core Specialists** |
| Forbidden bands | Leadership Support · Operational Leadership · Practice Leads |
| Visual SoT | Baseline 9q798dbg2 composition |
| Status | ACCEPTED |

## D-003 — Titles

| Person | Title used | Source |
|---|---|---|
| Rubio Teixeira | Founder & CEO | Current verified lock |
| Maria Cristina | Operations Coordination | Current verified lock |
| Rodrigo Coelho Lopes | Legal Architecture Lead | Current verified |
| Claudia Nery | Chief Financial Officer | Current verified |
| Esther Vendrami | International Regulatory & Compliance Lead | Current verified |
| Caroline Giovanetti | Brazil Regulatory Lead | Current verified |
| Larissa Carvalho | Regulatory & Compliance Specialist | Verified public roster validation 2026-08-02 |
| Milla Ludovico | Business Development Lead | Current verified |
| Bianca Carolina Oliveira Andrade | People & Operations | Verified public roster validation 2026-08-02 |
| Luciana Santos Veloso | Operations Coordinator | Verified public roster validation 2026-08-02 |

## D-004 — Luciana portrait recovery

| Field | Value |
|---|---|
| Decision | Restore `public/team/luciana-santos-veloso.jpg` from historical commit `dc5862d` |
| Status | EXECUTED in Phase 1 |
| Note | File was absent at recovery HEAD; required for portrait completeness gate |

## D-005 — Phase 1 file isolation

| Field | Value |
|---|---|
| Decision | Touch only Team-allowed paths; do not edit Nav/layout/Home/PageHero/tokens |
| Global change needed? | No (as of Phase 1) |
| Status | ACCEPTED |

## D-006 — Phase sequencing

| Field | Value |
|---|---|
| Decision | Stop after Phase 1 for Sol audit; do not start Phase 2 |
| Status | BINDING |

## Open / deferred to later phases

| ID | Item | Phase |
|---|---|---|
| P2 | Global visual system / shell fidelity | 2 |
| P3 | Homepage remediation | 3 |
| P4 | Services families | 4 |
| P5 | Institutional / content pages | 5 |
| P6 | Full regression | 6 |
