# PLAYBOOK — Operational Remediation & Readiness

| Field | Value |
|-------|-------|
| **playbook_id** | `PB-AREA-REM` |
| **public_area** | `AREA-REM` |
| **status** | `REQUIRES_RUBIO_REVIEW` |
| **owner** | Milla (commercial) / Rubio (substance) |
| **review_date** | 2026-11-01 |
| **sources** | Catalog V1; SERVICE_CANONICAL_MASTER; Axle Catalog V2 (mapping only) |

## simple_explanation

Porta de entrada quando algo travou: licença, banco, compliance ou auditoria. A Octus diagnostica e monta o plano — depois puxa as áreas certas.

## client_profile

Operações em crise, atraso ou falha; founders sob pressão de go-live ou funding.

## triggers

- Licença atrasada
- Banking failed
- Gap de compliance sob inspeção
- Audit em X semanas

## scope

- Crisis entry / assessment
- Licensing delay remediation
- Banking/compliance gap remediation
- Audit readiness remediation

## deliverables

- Diagnostic
- Action plan
- Workstream de remediação

## exclusions

- Milagre de prazo
- Garantia de desbloqueio
- Esconder fatos de regulador/banco

## discovery_questions

1. O que exatamente está bloqueado?
2. Desde quando?
3. Quem está cobrando (banco, regulador, investidor)?
4. O que já tentaram?
5. Qual o pior cenário se nada mudar em 30/60/90 dias?

## qualification_criteria

- Bloqueio real e articulado
- Acesso a documentos e stakeholders
- Mandato para corrigir causas (não só cosmética)

## red_flags

- Cliente quer só carta/comfort sem mudança real
- Fatos materiais omitidos
- Urgência artificial para pular KYC

## dependencies

- AREA-REG
- AREA-BNK
- AREA-CMP
- AREA-CORP
- AREA-LEG

## related_services

- `SVC-REM-01`
- `SVC-REM-02`
- `SVC-REM-03`
- `SVC-REM-04`

## cross_sell

- All spine areas
- Continuous partnership after stabilisation

## proposal_model

Paid diagnostic first, then remediation SOW. Link to /diagnostic pattern.

## allowed_claims

- `CL-INST-01`

## sources

- `docs/commercial/public-catalog/OCTUS_PUBLIC_SERVICE_CATALOG_V1.md`
- `docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- Axle Catalog V2 / playbooks (internal mapping; strip prices and partner brands)

## owner

Milla (conversation) · Rubio (approval of substance) · Commercial front (catalog SoT)

## review_date

2026-11-01
