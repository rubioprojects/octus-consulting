# Insights Publication Integrity — Sol Audit Stamp

**Terminal:** `OCTUS_INSIGHTS_PUBLICATION_INTEGRITY_READY_FOR_SOL_AUDIT`  
**Date:** 2026-08-04  
**Return:** Sol only  

| Field | Value |
| --- | --- |
| starting_HEAD | `50984398c5dfbc55a2ecaf22d0dc9be89820977b` |
| title_normalisation_commit | `c29870bad7e5fb7f3819618694afe7da8ed9447e` |
| source_gate_commit | `272e2f47b604c7e93dfd2c13cdc4cf14ccd0027d` |
| article_integrity_commit | `38511221a7fffb0ba8745e04ebb4df814b01eeb3` |
| validation_commit | `b19dea96b868e017ac0033761dd596afdd46dbcb` |
| source_link_hardening_commits | `bfbe1895ae9868932177e3b013e3417f9f6c6282`, `eace7f4ab7aeee324b874502a8ee0f870ca6ad25` |
| evidence_commit | `401be8d6a2fa16f343fb854d8c06268dbcc69ac8` |
| application_sha | `eace7f4ab7aeee324b874502a8ee0f870ca6ad25` |
| immutable_preview | https://octus-consulting-otlkpv2ds-axle1.vercel.app |
| deployment_id | `dpl_2dvgYCq5ML6puF2EBV7yDpiMjxQ2` |
| deployment_sha | `eace7f4ab7aeee324b874502a8ee0f870ca6ad25` |
| gitDirty | `0` (absent on Git-sourced deploy; `source=git`) |
| branch | `feat/seven-areas-website-architecture` |
| target | preview |
| x-robots-tag | noindex |
| validation | PASS (`audit/IPI_VALIDATION.json`) |

## Publication counts

| Metric | Count |
| --- | ---: |
| source articles preserved | 33 |
| PUBLISH_CURRENT | 5 |
| PUBLISH_HISTORICAL_WITH_UPDATE | 6 |
| EDITORIAL_COMMENTARY | 5 |
| HOLD_NOT_PUBLIC | 17 |
| public article count | 16 |
| sitemap article count | 16 |
| articles moved to HOLD (vs launch-safety public set) | 11 |
| articles restored with exact primary sources | 11 |

## Source integrity (validation bags)

| Metric | Count |
| --- | ---: |
| public regulatory articles | 11 |
| public regulatory with exact primary sources | 11 |
| current-law routes without exact primary sources | 0 |
| historical regulatory without sources | 0 |
| editorial routes with Editorial basis | 5 |
| generic URLs rejected | 0 |
| source-link failures | 0 |
| historical notices without sources | 0 |

## Metadata

| Metric | Count |
| --- | ---: |
| routes tested | 16 |
| duplicate document titles | 0 |
| duplicate OG titles | 0 |
| duplicate Twitter titles | 0 |
| H1 brand suffix failures | 0 |
| canonical failures | 0 |

## Specific dispositions

| Topic | Disposition |
| --- | --- |
| MiCA Article 59 | rewritten establishment language (registered office / effective management / director resident) |
| MiCA Article 143 | retained corrected transition treatment |
| Brazil B2B | Aviso SPA/MF nº 1/2026 DOU exact source; consultation completed; final ordinance not confirmed; unreachable Brasil Participativo URL removed |
| Curaçao | CGA PDF notices for orange-seal end (25 Sep / 15 Oct 2025) |
| Portaria 722 | PUBLISH_HISTORICAL_WITH_UPDATE + DOU primary |
| Portaria 827 | HOLD_NOT_PUBLIC (exact DOU URL not confirmed) |
| Historical STF municipal lottery | PUBLISH_HISTORICAL_WITH_UPDATE + STF news primary |
| SPA regulatory (agenda 817, Quinel/300, games 1.207) | historical with exact DOU / primary |

## Bound residual

`TEAM_PORTRAIT_SOURCE_RESIDUAL_001` — OPEN — Claudia Nery (no higher-quality approved real source asset; no synthetic face).

## Governance

- no merge
- no production
- no rebase
- Rubio final rescreen blocked pending Sol audit
