# OCTUS Original Seven Areas — Reconciliation V1

| Field | Value |
|---|---|
| Status | `REQUIRES_RUBIO_REVIEW` |
| Control principle | `PRESERVE_RUBIO_ORIGINAL_SEVEN_AREAS` |
| Date | 2026-08-02 |
| Issue | [#13](https://github.com/rubioprojects/octus-consulting/issues/13) |
| PR | [#15](https://github.com/rubioprojects/octus-consulting/pull/15) |
| Terminal | `OCTUS_ORIGINAL_SEVEN_AREAS_READY_FOR_RUBIO_REVIEW` |

## Principle

Do not invent a new taxonomy. Recover Rubio’s original seven public areas and map existing catalog work into them.

The six website Solutions and the prior PR #15 six-area spine are **references only**. They do not control the public commercial structure.

## Recovered original seven (best evidence)

From git `381b672` `app/what-we-do/page.tsx`:

1. Regulatory Structuring
2. Compliance & Risk
3. Legal & Structural Architecture
4. Corporate Structuring
5. Ownership & UBO (Private Clients page)
6. Audit & Readiness
7. International Hub

Supporting evidence: design seven icon areas; Notion/Figma seven categorias; CONTENT_ALIGNMENT_AUDIT; DES_MEM_02F crosswalk.

## Reconciliation table

| Original area | Evidence source | Existing PR #15 equivalent | Services mapped | Overlaps | Recommended treatment | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Regulatory Structuring | git what-we-do; /regulatory; Notion Regulatório; icon REGULATORY | AREA-REG (renamed from Regulatory Strategy & Licensing) | SVC-REG-01, SVC-REG-02, SVC-REG-03, SVC-REG-04, SVC-REG-05 | Market entry also Hub; Brazil SPA with Corporate | KEEP_ORIGINAL | KEEP_ORIGINAL |
| Compliance & Risk | git what-we-do; /compliance; Notion Compliance; icon COMPLIANCE | AREA-CMP (shortened from Compliance & Risk Systems) | SVC-CMP-01, SVC-CMP-02, SVC-CMP-03, SVC-CMP-04, SVC-CMP-05, SVC-CMP-06 | Certification readiness also Hub/Remediation | KEEP_ORIGINAL | KEEP_ORIGINAL |
| Legal & Structural Architecture | git what-we-do; /legal-architecture; Notion Legal; icon LEGAL_ARCHITECTURE | AREA-LEG (was Legal & Contractual Architecture) | SVC-LEG-01, SVC-LEG-02, SVC-LEG-03, SVC-LEG-04 | Counsel coordination also Hub | KEEP_ORIGINAL | KEEP_ORIGINAL |
| Corporate Structuring | git what-we-do; /corporate; Notion Corporativo; icon CORPORATE | AREA-CORP (was Corporate & Cross-Border Structuring) | SVC-CORP-01, SVC-CORP-02, SVC-CORP-03, SVC-CORP-04, SVC-CORP-05, SVC-CORP-06, SVC-CORP-07 | Banking readiness was AREA-BNK; tax/accounting mapped here (not 8th area) | KEEP_ORIGINAL | KEEP_ORIGINAL |
| Private Clients (Ownership & UBO) | git what-we-do Ownership & UBO; /private-clients; icon PRIVATE_CLIENTS; golden Private Clients | Demoted to client segment in PR #15 — **restored as peer area AREA-PC** | SVC-PC-01 … SVC-PC-05 | Group entities also Corporate; personal tax mapped here (not eighth Tax area) | KEEP_WITH_MINOR_WORDING_EDIT — public name Private Clients; historical title Ownership & UBO retained as alias | KEEP_WITH_MINOR_WORDING_EDIT |
| Remediation & Readiness (Audit & Readiness) | git what-we-do Audit & Readiness; /audit; Notion Auditoria; Rubio mandate Remediation | AREA-REM Operational Remediation & Readiness | SVC-REM-01 … SVC-REM-06 | Audit readiness also Compliance; finance problem remediation also Corporate | KEEP_WITH_MINOR_WORDING_EDIT — preserve Remediation meaning; confirm public label vs original Audit & Readiness | REQUIRES_RUBIO_DECISION |
| International Hub | git what-we-do International Hub; /international-hub; Figma HUB; icon INTERNATIONAL_HUB | Demoted / folded into market-entry — **restored as peer area AREA-HUB** | SVC-HUB-01 … SVC-HUB-06 | Was partly AREA-BNK + REG market entry; Hub ≠ eighth tax area | KEEP_ORIGINAL — recovered name International Hub (not Octus Hub / Networking) | KEEP_ORIGINAL |

## Removed as peer areas (not discarded — remapped)

| Prior PR #15 peer | Treatment |
|---|---|
| Banking, Payments & Financial Infrastructure | **Not a peer in original seven.** Services remapped: bankability → Corporate; PSP/payments → Hub; infrastructure remediation → Remediation. |
| Tax, Accounting, Audit & Finance (candidate 7th/8th) | **Not an eighth area.** Services remapped: corporate accounting/tax → Corporate; personal tax → Private Clients; audit/recovery problems → Remediation. Delivery partners stay unnamed publicly. |

## Naming decisions still open

| ID | Question | Options |
|---|---|---|
| D-REM-NAME-01 | Public label for area 06 | A) Audit & Readiness (original) · B) Remediation & Readiness (recommended working) · C) other Rubio wording |
| D-PC-NAME-01 | Public label for area 05 | A) Private Clients (recommended) · B) Ownership & UBO (original module title) · C) both with Private Clients as nav label |
| D-HUB-NAME-01 | Confirm International Hub | Recovered original name is International Hub. Confirm no rename to Octus Hub. |

## Evidence paths

- `git 381b672:app/what-we-do/page.tsx`
- `octus-consulting/docs/website/CONTENT_ALIGNMENT_AUDIT.md`
- `octus-consulting/docs/website/service-architecture/*`
- `axle-dev-agent/docs/ops/evidence/DES_MEM_02F_OCTUS_FIGMA_DEEP_SWEEP_2026-07-31/21_FIGMA_SEVEN_AREAS_TO_CURRENT_ARCHITECTURE_CROSSWALK.csv`
- `axle-dev-agent/docs/ops/evidence/OCTUS_OFFER_KNOWLEDGE_SYSTEM/.../OCTUS_SEVEN_AREAS_TO_SIX_SOLUTIONS_CROSSWALK_M0.md`
- `axle-platform/docs/product/catalog/AXLE_SERVICE_CATALOG_V2_DRAFT_2026-05-30.md`
- `GitHub Issue rubioprojects/octus-consulting#13`
- `Rubio mandate PRESERVE_RUBIO_ORIGINAL_SEVEN_AREAS (2026-08-02)`

## Owner model (working)

| Role | Person |
|---|---|
| Commercial owner (all areas) | Milla |
| Executive / strategic | Rubio |
| Regulatory international | Esther |
| Regulatory Brazil | Caroline |
| Financial and corporate | Claudia |
| Legal architecture | Rubio and Rodrigo |
| Compliance | Rubio and designated compliance specialist |
| Operational coordination | Maria Cristina |
| Hub and partner network | Rubio and Milla |
| Private Clients | Rubio, with Claudia / Rodrigo as needed |

Uncertain person assignments remain `REQUIRES_RUBIO_DECISION` at service level where noted.

