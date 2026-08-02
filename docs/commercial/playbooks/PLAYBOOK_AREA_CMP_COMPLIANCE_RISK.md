# PLAYBOOK — Compliance & Risk

| Field | Value |
|-------|-------|
| **playbook_id** | `PB-AREA-CMP` |
| **public_area** | `AREA-CMP` |
| **public_name** | Compliance & Risk |
| **status** | `REQUIRES_RUBIO_REVIEW` |
| **commercial_owner** | Milla |
| **substantive_owners** | Rubio and designated compliance specialist |
| **review_date** | 2026-08-02 |
| **sources** | Catalog V1.1-SEVEN-AREAS; reconciliation V1 |

## simple_explanation

A Octus monta e, quando faz sentido, opera compliance: AML/KYC, DPO, controles e preparação para revisão externa. Marca pública é Octus.

## client_profile

Operadores sob escrutínio de banco, regulador ou auditor; grupos sem CO/DPO efetivo.

## triggers

- Pedido de banco/regulador por políticas
- Precisa de DPO ou CO contínuo
- Preparação GLI / certificação
- Due diligence de parceiro ou investidor

## scope

- Frameworks AML/KYC/CDD
- Compliance-as-a-Service
- DPO-as-a-Service
- Controles internos
- Readiness de certificação/lab
- Políticas e DD packs

## deliverables

- Suite de políticas
- Modelo de onboarding
- Pack CDD
- Modelo de cobertura CO/DPO
- Gap analysis de readiness

## exclusions

- Nomear Antera publicamente
- Vender ISO como produto Octus sem aprovação
- Garantir “zero findings”

## discovery_questions

1. Quem exige o compliance agora (banco, regulador, investidor)?
2. Já existe manual AML / KYC?
3. Há DPO nomeado?
4. Quais jurisdições de dados (LGPD/GDPR)?
5. Há incidente aberto?

## qualification_criteria

- Demanda concreta (auditoria, banking, licence)
- Acesso a operações e dados
- Sponsor interno de compliance

## red_flags

- Quer “política só para inglês” sem operação
- Recusa monitoramento contínuo quando o risco exige
- Pedidos de atestar conformidade falsa

## dependencies

- AREA-REG
- AREA-CORP
- AREA-LEG
- AREA-HUB

## related_services

- `SVC-CMP-01`
- `SVC-CMP-02`
- `SVC-CMP-03`
- `SVC-CMP-04`
- `SVC-CMP-05`
- `SVC-CMP-06`

## cross_sell

- Licensing
- Banking readiness (Corporate)
- Hub lab/certification coordination
- Contractual architecture
- Retainer

## proposal_model

Projeto de setup (P5-like) + retainer de operação. Separar setup de mensalidade.

## allowed_claims

- `CL-SVC-CMP-01`
- `CL-INST-01`

## sources

- `docs/commercial/public-catalog/OCTUS_PUBLIC_SERVICE_CATALOG_V1.md`
- `docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- Axle Catalog V2 / playbooks (internal mapping; strip prices and partner brands)

## owner

Milla (conversation) · Rubio (approval of substance) · Commercial front (catalog SoT)

## review_date

2026-11-01
