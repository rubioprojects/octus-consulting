# OCTUS PUBLIC SERVICE CATALOG — DECISION REGISTER

| Field | Value |
|-------|-------|
| **Catalog status** | `HUMAN_APPROVED` · `CONSUMABLE_BY_WEBSITE` |
| **Date** | 2026-08-02 |
| **Catalog** | `OCTUS_PUBLIC_SERVICE_CATALOG_V1` (V1.1-SEVEN-AREAS) |
| **Control principle** | `PRESERVE_RUBIO_ORIGINAL_SEVEN_AREAS` |
| **Approved by** | Rubio Teixeira |
| **Issue** | [octus-consulting#13](https://github.com/rubioprojects/octus-consulting/issues/13) |
| **Companion** | [OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md](./OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md) |

---

## Artifact lifecycle separation

| Artifact class | Status |
|---|---|
| Public taxonomy and catalog | `HUMAN_APPROVED` + `CONSUMABLE_BY_WEBSITE` |
| Service names and plain-language descriptions | `CONSUMABLE_BY_WEBSITE` |
| Playbooks | `REQUIRES_MILLA_REVIEW` |
| Institutional deck content | `REQUIRES_RUBIO_REVIEW` |
| Storyboard and visual brief | `REQUIRES_RUBIO_REVIEW` |
| Case studies, metrics and client logos | `HUMAN_EVIDENCE_REQUIRED` |
| Pricing | `INTERNAL_ONLY` |

Website may consume only the approved catalog, descriptions and claim-register entries marked for website use.

---

## Rubio-approved taxonomy decisions

### D-SEVEN-01 — Preserve original seven areas

| | |
|--|--|
| **Decision** | Public commercial structure = **seven original Octus areas**. |
| **Status** | **HUMAN_APPROVED** |

Definitive public names:

1. Regulatory Structuring  
2. Compliance & Risk  
3. Legal & Structural Architecture  
4. Corporate Structuring  
5. Private Clients  
6. Remediation & Readiness  
7. International Hub  

### D-PC-NAME-01 — Private Clients

| | |
|--|--|
| **Decision** | **APPROVED: Private Clients** |
| **Historical alias** | Ownership & UBO (not primary navigation) |
| **Status** | **HUMAN_APPROVED** |

### D-REM-NAME-01 — Remediation & Readiness

| | |
|--|--|
| **Decision** | **APPROVED: Remediation & Readiness** |
| **Historical alias** | Audit & Readiness (not primary navigation) |
| **Status** | **HUMAN_APPROVED** |
| **Note** | Remains a public peer area — not merely an engagement model. |

### D-HUB-NAME-01 — International Hub

| | |
|--|--|
| **Decision** | **APPROVED: International Hub** |
| **Status** | **HUMAN_APPROVED** |
| **Note** | Remains a public peer area — not a secondary capability. |

### D-TAX-MAP-01 — Tax without an eighth area

| | |
|--|--|
| **Decision** | No eighth Tax pillar. Map tax/accounting/audit/finance into Corporate, Private Clients and Remediation. |
| **Status** | **HUMAN_APPROVED** |

### D-BNK-MAP-01 — Banking without a peer outside the seven

| | |
|--|--|
| **Decision** | Banking/payments is not a peer outside the seven. Remap into Corporate (bankability), Hub (PSP/providers) and Remediation (failed infrastructure). |
| **Status** | **HUMAN_APPROVED** |

### D-PARTNER-01 — Partner naming

| | |
|--|--|
| **Decision** | No public OC8 / Antera / Rubio Adv. / Irati brand as delivery partner naming in public catalog or website. |
| **Status** | **HUMAN_APPROVED** |
| **Note** | Irati is recorded as **substantive compliance owner** internally; not published as a public partner brand. |

### D-PRICE-01 — Public pricing

| | |
|--|--|
| **Decision** | No public prices. |
| **Status** | `INTERNAL_ONLY` |

### D-OWNER-01 — Substantive owners

| | |
|--|--|
| **Decision** | Owner model corrected per Rubio approval (Milla commercial; Rubio executive; Esther / Caroline / Claudia / Rodrigo / Irati / Maria Cristina as specified). |
| **Status** | **HUMAN_APPROVED** for catalog ownership fields |

---

## Locked

| ID | Decision |
|----|----------|
| L-01 | `docs/commercial/public-catalog/` remains public catalog SoT |
| L-02 | No website code mutation in this PR |
| L-03 | No PPTX/PDF until deck content + storyboard approved |
| L-04 | Catalog status = `HUMAN_APPROVED` + `CONSUMABLE_BY_WEBSITE` |
| L-05 | Delivery models ≠ areas |
| L-06 | Industries ≠ areas |
| L-07 | Six website Solutions are implementation reference only |
| L-08 | Playbooks not auto-approved with catalog |
| L-09 | Deck / storyboard not auto-approved with catalog |

---

## Superseded

| Prior recommendation | Status |
|----------------------|--------|
| Six Final Lock areas as commercial spine | SUPERSEDED |
| Private Clients as segment-only | SUPERSEDED |
| Hub not a peer area | SUPERSEDED |
| Tax as optional seventh/eighth pillar | SUPERSEDED |
| Remediation as engagement model only | SUPERSEDED |
| Open naming D-REM / D-PC / D-HUB | CLOSED — APPROVED |
| PR #14 Phase 1 six-area catalog | SUPERSEDED by PR #15 |

---

## Terminals

- `OCTUS_PUBLIC_CATALOG_HUMAN_APPROVED`
- `OCTUS_PUBLIC_CATALOG_CONSUMABLE_BY_WEBSITE`
