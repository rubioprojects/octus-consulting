# PLAYBOOK — Banking, Payments & Financial Infrastructure

| Field | Value |
|-------|-------|
| **playbook_id** | `PB-AREA-BNK` |
| **public_area** | `AREA-BNK` |
| **status** | `REQUIRES_RUBIO_REVIEW` |
| **owner** | Milla (commercial) / Rubio (substance) |
| **review_date** | 2026-11-01 |
| **sources** | Catalog V1; SERVICE_CANONICAL_MASTER; Axle Catalog V2 (mapping only) |

## simple_explanation

A Octus prepara a operação para ser bancável e desenha opções de pagamentos. Não promete abertura de conta nem endossa bancos.

## client_profile

Operadores licenciados ou em licensing que precisam mover dinheiro; times com recusas bancárias.

## triggers

- Conta rejeitada ou congelada
- Licença ok, banking não
- Precisa de PSP / PIX / cards / crypto rails
- Stack de pagamentos incompatível com risco

## scope

- Bankability / readiness pack
- Optioning de bancos (sem garantia)
- Arquitetura PSP/pagamentos
- Remediação de infraestrutura falha

## deliverables

- Readiness pack
- Shortlist de opções
- Mapa de gaps
- Memo de arquitetura de pagamentos

## exclusions

- Promessa de conta aprovada
- Nome de banco como parceria pública sem aprovação
- Operar como money transmitter

## discovery_questions

1. Qual o fluxo de fundos (de onde para onde)?
2. Quais volumes e moedas?
3. Já houve recusa? De quem e por quê?
4. Licença atual e jurisdição da entidade?
5. UBOs e PEP exposure?
6. PSPs já contratados ou vetados?

## qualification_criteria

- Entidade e licença (ou pathway) claros
- Disposição a corrigir gaps de compliance/corp
- Documentação mínima disponível

## red_flags

- Pressão por “conta em 48h”
- Recusa em explicar source of funds
- Estrutura societária inconsistente com narrativa

## dependencies

- AREA-REG
- AREA-CMP
- AREA-CORP

## related_services

- `SVC-BNK-01`
- `SVC-BNK-02`
- `SVC-BNK-03`

## cross_sell

- Licensing programme
- AML/KYC
- Remediation

## proposal_model

Projeto de readiness + optional payments architecture. Separate quote for introductions. No SLA de aprovação bancária.

## allowed_claims

- `CL-SVC-BNK-01`
- `CL-INST-06`

## sources

- `docs/commercial/public-catalog/OCTUS_PUBLIC_SERVICE_CATALOG_V1.md`
- `docs/website/service-architecture/SERVICE_CANONICAL_MASTER.md`
- Axle Catalog V2 / playbooks (internal mapping; strip prices and partner brands)

## owner

Milla (conversation) · Rubio (approval of substance) · Commercial front (catalog SoT)

## review_date

2026-11-01
