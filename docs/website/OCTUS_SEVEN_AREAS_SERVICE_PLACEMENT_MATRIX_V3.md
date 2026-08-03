# OCTUS Seven Areas Service Placement Matrix V3

**Status:** LOCKED — supersedes V2  
**Date:** 2026-08-03  
**Supersedes:** `OCTUS_SEVEN_AREAS_SERVICE_PLACEMENT_MATRIX_V2.md`  
**Architecture:** `OCTUS_SERVICE_FAMILY_ARCHITECTURE_V1.json`  
**Services:** 39  
**Families:** 55  
**Areas:** 7 (no eighth area)

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

## Full service table

| ID | Public name | Primary area | Family | Supporting | Cross-cut | Owner | Route | Depth |
|----|-------------|--------------|--------|------------|-----------|-------|-------|-------|
| SVC-REG-01 | Licensing strategy and pathway design | Regulatory Structuring | Jurisdiction and pathway strategy | — | — | Rubio Teixeira (strategic oversight)… | `/solutions/regulatory/market-entry` | deep-service page |
| SVC-REG-05 | Jurisdiction selection and risk mapping | Regulatory Structuring | Jurisdiction and pathway strategy | International Hub | — | Rubio Teixeira (strategic oversight)… | `/solutions/regulatory/market-entry` | deep-service page |
| SVC-REG-02 | iGaming licensing programme | Regulatory Structuring | iGaming licensing programmes | International Hub | — | Rubio Teixeira (strategic oversight)… | `/solutions/regulatory/igaming-licensing` | deep-service page |
| SVC-REG-03 | Fintech, EMI and crypto licensing | Regulatory Structuring | Fintech, payments and digital-assets authorisations | Corporate Structuring | — | Rubio Teixeira (strategic oversight)… | `/solutions/regulatory/fintech-licensing` | deep-service page |
| SVC-REG-04 | Brazil SPA / MF regulatory support | Regulatory Structuring | Brazil regulatory and SPA/MF | Corporate Structuring | — | Rubio Teixeira (strategic oversight)… | `/brazil` | deep-service page |
| SVC-CMP-01 | AML / KYC / CDD frameworks | Compliance & Risk | AML, KYC, CDD and onboarding | — | — | Rubio Teixeira (governance)… | `/solutions/compliance/aml-kyc` | deep-service page |
| SVC-CMP-06 | Policies and due diligence packs | Compliance & Risk | Policies and governance frameworks | — | — | Rubio Teixeira (governance)… | `/solutions/compliance-risk` | family module |
| SVC-CMP-04 | Internal controls and governance | Compliance & Risk | Internal controls and monitoring | Corporate Structuring | — | Rubio Teixeira (governance)… | `/solutions/compliance/internal-controls` | deep-service page |
| SVC-CMP-02 | Compliance-as-a-Service | Compliance & Risk | Compliance operations and Compliance-as-a-Service | — | — | Rubio Teixeira (governance)… | `/solutions/compliance/compliance-as-a-service` | deep-service page |
| SVC-CMP-03 | DPO-as-a-Service | Compliance & Risk | Privacy, data protection and DPO | — | — | Rubio Teixeira (governance)… | `/solutions/compliance/dpo-as-a-service` | deep-service page |
| SVC-CMP-05 | Certification and lab readiness | Compliance & Risk | Certification, audit and laboratory readiness | International Hub | — | Rubio Teixeira (governance)… | `/solutions/compliance/gli-readiness` | deep-service page |
| SVC-LEG-01 | Contractual architecture | Legal & Structural Architecture | Contractual architecture | — | — | Rubio Teixeira… | `/solutions/legal-structural-architecture` | family module |
| SVC-LEG-04 | Legal opinions and certifications support | Legal & Structural Architecture | Regulatory opinions and legal analysis | — | — | Rubio Teixeira… | `/solutions/legal-structural-architecture` | family module |
| SVC-LEG-02 | Multi-jurisdiction legal frameworks | Legal & Structural Architecture | Local-counsel and multi-jurisdiction legal coordination | Corporate Structuring | — | Rubio Teixeira… | `/solutions/legal-structural-architecture` | family module |
| SVC-LEG-03 | Counsel coordination | Legal & Structural Architecture | Local-counsel and multi-jurisdiction legal coordination | International Hub | — | Rubio Teixeira… | `/solutions/legal-structural-architecture` | family module |
| SVC-CORP-02 | Company formation | Corporate Structuring | Entity formation and market-entry vehicles | International Hub | — | Rubio Teixeira (structural strategy)… | `/solutions/corporate/company-formation` | deep-service page |
| SVC-CORP-01 | Entity and holding architecture | Corporate Structuring | Holding and ownership design | — | — | Rubio Teixeira (structural strategy)… | `/solutions/corporate/holding-design` | deep-service page |
| SVC-CORP-03 | Cross-border structuring | Corporate Structuring | Cross-border corporate architecture | International Hub | — | Rubio Teixeira (structural strategy)… | `/solutions/corporate/offshore-structuring` | deep-service page |
| SVC-CORP-04 | Corporate reorganisation | Corporate Structuring | Shareholder, director and governance structures | Remediation & Readiness | — | Rubio Teixeira (structural strategy)… | `/solutions/corporate-structuring` | family module |
| SVC-CORP-06 | Accounting and finance coordination | Corporate Structuring | Accounting, reporting and finance coordination | — | — | Rubio Teixeira (structural strategy)… | `/solutions/corporate-structuring` | family module |
| SVC-CORP-07 | Corporate tax planning | Corporate Structuring | Corporate tax planning | Private Clients | Tax coordination | Rubio Teixeira (structural strategy)… | `/solutions/corporate-structuring` | family module |
| SVC-CORP-05 | Banking readiness | Corporate Structuring | Banking and institutional onboarding readiness | International Hub | Banking & Payments | Rubio Teixeira (structural strategy)… | `/solutions/banking-payments-infrastructure` | deep-service page |
| SVC-PC-01 | Ownership and UBO architecture | Private Clients | UBO and ownership architecture | Corporate Structuring | — | Rubio Teixeira… | `/private-clients` | family module |
| SVC-PC-02 | Personal holding and asset organisation | Private Clients | Personal and family holdings | Corporate Structuring | — | Rubio Teixeira… | `/private-clients` | family module |
| SVC-PC-03 | Residency and personal international structuring | Private Clients | Residence and personal international structuring | International Hub | — | Rubio Teixeira… | `/private-clients` | family module |
| SVC-PC-05 | Personal tax coordination | Private Clients | Personal tax coordination | Corporate Structuring | Tax coordination | Rubio Teixeira… | `/private-clients` | family module |
| SVC-PC-04 | Personal banking and individual KYC readiness | Private Clients | Personal banking and KYC readiness | International Hub | Banking & Payments | Rubio Teixeira… | `/private-clients` | family module |
| SVC-REM-01 | Crisis entry and structural assessment | Remediation & Readiness | Diagnostic and root-cause assessment | — | — | Rubio Teixeira… | `/diagnostic` | deep-service page |
| SVC-REM-02 | Licensing delay remediation | Remediation & Readiness | Regulatory remediation | Regulatory Structuring | — | Rubio Teixeira… | `/solutions/remediation-readiness` | family module |
| SVC-REM-03 | Banking or compliance gap remediation | Remediation & Readiness | Banking and payments remediation | Compliance & Risk | Banking & Payments | Rubio Teixeira… | `/solutions/banking-payments-infrastructure` | deep-service page |
| SVC-REM-05 | Financial infrastructure remediation | Remediation & Readiness | Banking and payments remediation | International Hub | Banking & Payments | Rubio Teixeira… | `/solutions/remediation-readiness` | family module |
| SVC-REM-06 | Tax and finance problem remediation | Remediation & Readiness | Tax and finance remediation | Corporate Structuring | Tax coordination | Rubio Teixeira… | `/solutions/remediation-readiness` | family module |
| SVC-REM-04 | Audit and readiness remediation | Remediation & Readiness | Audit, certification and inspection readiness | Compliance & Risk | — | Rubio Teixeira… | `/solutions/remediation-readiness` | family module |
| SVC-HUB-01 | Market entry coordination | International Hub | Multi-country market-entry coordination | Regulatory Structuring | — | Rubio Teixeira… | `/international-hub` | family module |
| SVC-HUB-04 | CSP, local director and formation partners | International Hub | CSP, entity and local-director network | Corporate Structuring | — | Rubio Teixeira… | `/international-hub` | family module |
| SVC-HUB-02 | Bank and PSP introductions | International Hub | Banking, PSP and payment-provider coordination | Corporate Structuring | Banking & Payments | Rubio Teixeira… | `/solutions/banking-payments-infrastructure` | deep-service page |
| SVC-HUB-03 | Payment and PSP architecture | International Hub | Banking, PSP and payment-provider coordination | Corporate Structuring | Banking & Payments | Rubio Teixeira… | `/solutions/banking-payments-infrastructure` | deep-service page |
| SVC-HUB-05 | Lab, certification and specialist network coordination | International Hub | Laboratories, certification and technical vendors | Compliance & Risk | — | Rubio Teixeira… | `/international-hub` | family module |
| SVC-HUB-06 | Counsel and tax specialist coordination | International Hub | Counsel and tax-specialist coordination | Legal & Structural Architecture | Tax coordination | Rubio Teixeira… | `/international-hub` | family module |

## Explicit tax mapping

| Service ID | Name | Primary area | Route |
|------------|------|--------------|-------|

## Banking & Payments cross-cut

| Service ID | Name | Primary area | Route |
|------------|------|--------------|-------|
| SVC-CORP-05 | Banking readiness | Corporate Structuring | `/solutions/banking-payments-infrastructure` |
| SVC-PC-04 | Personal banking and individual KYC readiness | Private Clients | `/private-clients` |
| SVC-REM-03 | Banking or compliance gap remediation | Remediation & Readiness | `/solutions/banking-payments-infrastructure` |
| SVC-REM-05 | Financial infrastructure remediation | Remediation & Readiness | `/solutions/remediation-readiness` |
| SVC-HUB-02 | Bank and PSP introductions | International Hub | `/solutions/banking-payments-infrastructure` |
| SVC-HUB-03 | Payment and PSP architecture | International Hub | `/solutions/banking-payments-infrastructure` |

## Rules

- Exactly one primary area per service.
- Supporting areas allowed; do not invent peer areas.
- V3 supersedes V2 family IDs (area-level `SVC-REG` placeholders replaced by genuine families).
- All 39 services mapped; zero orphans.
