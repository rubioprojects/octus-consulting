# OCTUS Seven Areas Service Placement Matrix V2

**Status:** EVIDENCE / DECISION  
**Date:** 2026-08-03  
**Services:** 39  
**Areas:** 7 (no eighth area)  
**Banking & Payments:** cross-cutting infrastructure  
**Tax:** mapped explicitly on 4 services (not hidden)

## Areas

| Area | Hub |
|------|-----|
| Regulatory Structuring | `/solutions/regulatory-structuring` |
| Compliance & Risk | `/solutions/compliance-risk` |
| Legal & Structural Architecture | `/solutions/legal-structural-architecture` |
| Corporate Structuring | `/solutions/corporate-structuring` |
| Private Clients | `/private-clients` |
| Remediation & Readiness | `/solutions/remediation-readiness` |
| International Hub | `/international-hub` |

## Explicit tax mapping

| Service ID | Name | Primary area | Recommended route |
|------------|------|--------------|-------------------|
| SVC-CORP-07 | Corporate tax planning | Corporate Structuring | `/solutions/corporate-structuring` |
| SVC-PC-05 | Personal tax coordination | Private Clients | `/private-clients` |
| SVC-REM-06 | Tax and finance problem remediation | Remediation & Readiness | `/solutions/remediation-readiness` |
| SVC-HUB-06 | Counsel and tax specialist coordination | International Hub | `/international-hub` |

## Full service table

| ID | Service | Primary area | Family | Supporting | Cross-cut | Depth | Current route | Recommended | Priority |
|----|---------|--------------|--------|------------|-----------|-------|---------------|-------------|----------|
| SVC-REG-01 | Licensing strategy and pathway design | Regulatory Structuring | SVC-REG | — | — | family module | `/solutions/regulatory/market-entry` | `/solutions/regulatory/market-entry` | P1 |
| SVC-REG-02 | iGaming licensing programme | Regulatory Structuring | SVC-REG | International Hub | — | deep-service page | `/solutions/regulatory/igaming-licensing` | `/solutions/regulatory/igaming-licensing` | P1 |
| SVC-REG-03 | Fintech, EMI and crypto licensing | Regulatory Structuring | SVC-REG | Corporate Structuring | — | deep-service page | `/solutions/regulatory/fintech-licensing` | `/solutions/regulatory/fintech-licensing` | P1 |
| SVC-REG-04 | Brazil SPA / MF regulatory support | Regulatory Structuring | SVC-REG | Corporate Structuring | — | family module | `—` | `/solutions/regulatory-structuring` | P2 |
| SVC-REG-05 | Jurisdiction selection and risk mapping | Regulatory Structuring | SVC-REG | International Hub | — | family module | `/solutions/regulatory/market-entry` | `/solutions/regulatory/market-entry` | P1 |
| SVC-CMP-01 | AML / KYC / CDD frameworks | Compliance & Risk | SVC-CMP | — | — | deep-service page | `/solutions/compliance/aml-kyc` | `/solutions/compliance/aml-kyc` | P1 |
| SVC-CMP-02 | Compliance-as-a-Service | Compliance & Risk | SVC-CMP | — | — | deep-service page | `/solutions/compliance/compliance-as-a-service` | `/solutions/compliance/compliance-as-a-service` | P1 |
| SVC-CMP-03 | DPO-as-a-Service | Compliance & Risk | SVC-CMP | — | — | deep-service page | `/solutions/compliance/dpo-as-a-service` | `/solutions/compliance/dpo-as-a-service` | P1 |
| SVC-CMP-04 | Internal controls and governance | Compliance & Risk | SVC-CMP | Corporate Structuring | — | deep-service page | `/solutions/compliance/internal-controls` | `/solutions/compliance/internal-controls` | P1 |
| SVC-CMP-05 | Certification and lab readiness | Compliance & Risk | SVC-CMP | International Hub | — | deep-service page | `/solutions/compliance/gli-readiness` | `/solutions/compliance/gli-readiness` | P1 |
| SVC-CMP-06 | Policies and due diligence packs | Compliance & Risk | SVC-CMP | — | — | family module | `—` | `/solutions/compliance-risk` | P2 |
| SVC-LEG-01 | Contractual architecture | Legal & Structural Architecture | SVC-LEG | — | — | family module | `—` | `/solutions/legal-structural-architecture` | P2 |
| SVC-LEG-02 | Multi-jurisdiction legal frameworks | Legal & Structural Architecture | SVC-LEG | Corporate Structuring | — | family module | `—` | `/solutions/legal-structural-architecture` | P2 |
| SVC-LEG-03 | Counsel coordination | Legal & Structural Architecture | SVC-LEG | International Hub | — | family module | `—` | `/solutions/legal-structural-architecture` | P2 |
| SVC-LEG-04 | Legal opinions and certifications support | Legal & Structural Architecture | SVC-LEG | — | — | family module | `—` | `/solutions/legal-structural-architecture` | P2 |
| SVC-CORP-01 | Entity and holding architecture | Corporate Structuring | SVC-CORP | — | — | family module | `—` | `/solutions/corporate-structuring` | P2 |
| SVC-CORP-02 | Company formation | Corporate Structuring | SVC-CORP | International Hub | — | family module | `—` | `/solutions/corporate-structuring` | P2 |
| SVC-CORP-03 | Cross-border structuring | Corporate Structuring | SVC-CORP | International Hub | — | family module | `—` | `/solutions/corporate-structuring` | P2 |
| SVC-CORP-04 | Corporate reorganisation | Corporate Structuring | SVC-CORP | Remediation & Readiness | — | family module | `—` | `/solutions/corporate-structuring` | P2 |
| SVC-CORP-05 | Banking readiness | Corporate Structuring | SVC-CORP | International Hub | Banking & Payments | deep-service page | `/solutions/banking-payments-infrastructure` | `/solutions/banking-payments-infrastructure` | P1 |
| SVC-CORP-06 | Accounting and finance coordination | Corporate Structuring | SVC-CORP | — | — | family module | `—` | `/solutions/corporate-structuring` | P2 |
| SVC-CORP-07 | Corporate tax planning | Corporate Structuring | SVC-CORP | Private Clients | Tax | family module | `—` | `/solutions/corporate-structuring` | P2 |
| SVC-PC-01 | Ownership and UBO architecture | Private Clients | SVC-PC | Corporate Structuring | — | family module | `—` | `/private-clients` | P2 |
| SVC-PC-02 | Personal holding and asset organisation | Private Clients | SVC-PC | Corporate Structuring | — | family module | `—` | `/private-clients` | P2 |
| SVC-PC-03 | Residency and personal international structuring | Private Clients | SVC-PC | International Hub | — | family module | `—` | `/private-clients` | P2 |
| SVC-PC-04 | Personal banking and individual KYC readiness | Private Clients | SVC-PC | International Hub | Banking & Payments | deep-service page | `/solutions/banking-payments-infrastructure` | `/solutions/banking-payments-infrastructure` | P1 |
| SVC-PC-05 | Personal tax coordination | Private Clients | SVC-PC | Corporate Structuring | Tax | family module | `—` | `/private-clients` | P2 |
| SVC-REM-01 | Crisis entry and structural assessment | Remediation & Readiness | SVC-REM | — | — | family module | `—` | `/solutions/remediation-readiness` | P2 |
| SVC-REM-02 | Licensing delay remediation | Remediation & Readiness | SVC-REM | Regulatory Structuring | — | family module | `—` | `/solutions/remediation-readiness` | P2 |
| SVC-REM-03 | Banking or compliance gap remediation | Remediation & Readiness | SVC-REM | Compliance & Risk | Banking & Payments | deep-service page | `/solutions/banking-payments-infrastructure` | `/solutions/banking-payments-infrastructure` | P1 |
| SVC-REM-04 | Audit and readiness remediation | Remediation & Readiness | SVC-REM | Compliance & Risk | — | family module | `—` | `/solutions/remediation-readiness` | P2 |
| SVC-REM-05 | Financial infrastructure remediation | Remediation & Readiness | SVC-REM | International Hub | — | family module | `—` | `/solutions/remediation-readiness` | P2 |
| SVC-REM-06 | Tax and finance problem remediation | Remediation & Readiness | SVC-REM | Corporate Structuring | Tax | family module | `—` | `/solutions/remediation-readiness` | P2 |
| SVC-HUB-01 | Market entry coordination | International Hub | SVC-HUB | Regulatory Structuring | — | family module | `—` | `/international-hub` | P2 |
| SVC-HUB-02 | Bank and PSP introductions | International Hub | SVC-HUB | Corporate Structuring | Banking & Payments | family module | `—` | `/international-hub` | P2 |
| SVC-HUB-03 | Payment and PSP architecture | International Hub | SVC-HUB | Corporate Structuring | Banking & Payments | deep-service page | `/solutions/banking-payments-infrastructure` | `/solutions/banking-payments-infrastructure` | P1 |
| SVC-HUB-04 | CSP, local director and formation partners | International Hub | SVC-HUB | Corporate Structuring | — | family module | `—` | `/international-hub` | P2 |
| SVC-HUB-05 | Lab, certification and specialist network coordination | International Hub | SVC-HUB | Compliance & Risk | — | family module | `—` | `/international-hub` | P2 |
| SVC-HUB-06 | Counsel and tax specialist coordination | International Hub | SVC-HUB | Legal & Structural Architecture | Tax | family module | `—` | `/international-hub` | P2 |

## Rules

- Exactly one primary area per service.
- Supporting areas allowed; do not invent peer areas.
- Banking & Payments deep pages support infrastructure narrative; do not promote Banking as Area 08.
- Tax appears under Corporate, Private Clients, Remediation, and International Hub coordination — never as a peer area.
