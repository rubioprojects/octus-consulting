# OCTUS Original Seven Areas — Reconciliation V1

| Field | Value |
|---|---|
| Status | `HUMAN_APPROVED` · `CONSUMABLE_BY_WEBSITE` |
| Control principle | `PRESERVE_RUBIO_ORIGINAL_SEVEN_AREAS` |
| Date | 2026-08-02 |
| Approved by | Rubio Teixeira |
| Issue | [#13](https://github.com/rubioprojects/octus-consulting/issues/13) |
| PR | [#15](https://github.com/rubioprojects/octus-consulting/pull/15) |
| Terminals | `OCTUS_PUBLIC_CATALOG_HUMAN_APPROVED` · `OCTUS_PUBLIC_CATALOG_CONSUMABLE_BY_WEBSITE` |

## Principle

Do not invent a new taxonomy. Rubio’s original seven public areas are the controlling commercial structure.

The six website Solutions are **implementation references only**. They do not control the public commercial taxonomy.

## Definitive public names (approved)

1. Regulatory Structuring  
2. Compliance & Risk  
3. Legal & Structural Architecture  
4. Corporate Structuring  
5. Private Clients  
6. Remediation & Readiness  
7. International Hub  

Historical aliases (not primary navigation):

- Ownership & UBO → Private Clients  
- Audit & Readiness → Remediation & Readiness  

## Reconciliation table

| Original area | Evidence source | Existing PR #15 equivalent | Services mapped | Overlaps | Recommended treatment | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Regulatory Structuring | git what-we-do; /regulatory; Notion Regulatório; icon REGULATORY | AREA-REG | SVC-REG-01 … SVC-REG-05 | Market entry also Hub; Brazil SPA with Corporate | KEEP_ORIGINAL | HUMAN_APPROVED |
| Compliance & Risk | git what-we-do; /compliance; Notion Compliance; icon COMPLIANCE | AREA-CMP | SVC-CMP-01 … SVC-CMP-06 | Certification readiness also Hub/Remediation | KEEP_ORIGINAL | HUMAN_APPROVED |
| Legal & Structural Architecture | git what-we-do; /legal-architecture; Notion Legal; icon LEGAL_ARCHITECTURE | AREA-LEG | SVC-LEG-01 … SVC-LEG-04 | Counsel coordination also Hub | KEEP_ORIGINAL | HUMAN_APPROVED |
| Corporate Structuring | git what-we-do; /corporate; Notion Corporativo; icon CORPORATE | AREA-CORP | SVC-CORP-01 … SVC-CORP-07 | Banking readiness and corporate tax/accounting mapped here | KEEP_ORIGINAL | HUMAN_APPROVED |
| Private Clients | git what-we-do Ownership & UBO; /private-clients; icon PRIVATE_CLIENTS | AREA-PC | SVC-PC-01 … SVC-PC-05 | Group entities also Corporate | KEEP_ORIGINAL — public name Private Clients; historical alias Ownership & UBO | HUMAN_APPROVED · D-PC-NAME-01 APPROVED |
| Remediation & Readiness | git what-we-do Audit & Readiness; /audit; Rubio mandate Remediation | AREA-REM | SVC-REM-01 … SVC-REM-06 | Audit readiness also Compliance | KEEP_ORIGINAL — public name Remediation & Readiness; historical alias Audit & Readiness | HUMAN_APPROVED · D-REM-NAME-01 APPROVED |
| International Hub | git what-we-do International Hub; /international-hub; Figma HUB | AREA-HUB | SVC-HUB-01 … SVC-HUB-06 | Was partly banking + market entry | KEEP_ORIGINAL — International Hub | HUMAN_APPROVED · D-HUB-NAME-01 APPROVED |

## Removed as peer areas (remapped — approved)

| Prior peer candidate | Treatment |
|---|---|
| Banking, Payments & Financial Infrastructure | Not a peer. Bankability → Corporate; PSP/providers → Hub; failed rails → Remediation. |
| Tax, Accounting, Audit & Finance | Not an eighth area. Corporate / Private Clients / Remediation (+ Hub for specialist coordination). |

## Naming decisions (closed)

| ID | Decision |
|---|---|
| D-REM-NAME-01 | **APPROVED: Remediation & Readiness** |
| D-PC-NAME-01 | **APPROVED: Private Clients** |
| D-HUB-NAME-01 | **APPROVED: International Hub** |

## Evidence paths

- `git 381b672:app/what-we-do/page.tsx`
- `octus-consulting/docs/website/CONTENT_ALIGNMENT_AUDIT.md`
- `axle-dev-agent/docs/ops/evidence/DES_MEM_02F_OCTUS_FIGMA_DEEP_SWEEP_2026-07-31/21_FIGMA_SEVEN_AREAS_TO_CURRENT_ARCHITECTURE_CROSSWALK.csv`
- `axle-dev-agent/docs/ops/evidence/OCTUS_OFFER_KNOWLEDGE_SYSTEM/.../OCTUS_SEVEN_AREAS_TO_SIX_SOLUTIONS_CROSSWALK_M0.md`
- Rubio human approval 2026-08-02 (`HUMAN_APPROVED` / `CONSUMABLE_BY_WEBSITE`)

## Owner model (approved)

| Role | Person |
|---|---|
| Commercial owner (all areas and services) | Milla Ludovico |
| Executive / strategic | Rubio Teixeira |
| Regulatory international | Esther Vendrami |
| Regulatory Brazil | Caroline Giovanetti |
| Compliance substance | Irati |
| Financial and corporate | Claudia Nery |
| Legal architecture | Rubio Teixeira and Rodrigo Coelho Lopes |
| Operational coordination | Maria Cristina |
| Hub and partner network | Rubio Teixeira and Milla Ludovico |

## Website consumption

This reconciliation and the linked catalog V1.1 are `HUMAN_APPROVED` and `CONSUMABLE_BY_WEBSITE`.  
Playbooks, deck, cases and pricing remain separately gated.
