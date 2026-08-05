# Octus Mobile Remediation — Relatório QA (2026-08-05)

**Status técnico:** `MOBILE_REMEDIATION_PASS`  
**Merge gate:** `AWAITING_RUBIO_EXPLICIT_APPROVAL`  
**Produção tocada:** NÃO  
**Merge executado:** NÃO

| Campo | Valor |
|-------|-------|
| Branch HEAD | `9fb4fff229b9915f9fb8f9b919c23399654d340d` |
| Preview | https://octus-consulting-mobqz674u-axle1.vercel.app |
| Preview deployment | `dpl_BAJ4Dju9yefNLgJFo8cEDuEduGzt` |
| CI | PASS — https://github.com/rubioprojects/octus-consulting/actions/runs/31002872157 |
| Produção viva | SHA `28eb2ec` · `dpl_EJ7fPhWXFKLN9wEfU5N8dSiZpEP3` |

## Gates

| Gate | Resultado |
|------|-----------|
| `npm run lint` | PASS |
| `npm run build` | PASS |
| GitHub Actions lint+build | PASS |
| Vercel preview READY | PASS |
| Playwright matrix (local + preview) | PASS |
| Overflow horizontal páginas críticas | PASS |
| Cookie × WhatsApp overlap | PASS (gap ≈ 41px @ 390×844) |
| Redirects no preview (`vercel.json`) | PASS (308) |
| Preview `X-Robots-Tag: noindex` | PASS |
| Regressão desktop @ 1024 | PASS (nav desktop) |

## Causas raiz

1. Cascata CSS acumulada com breakpoints conflitantes (639/640/767/768/1024).
2. Nav desktop em `md` (768) — tablet via desktop comprimido.
3. `MobileRemediation.module.css` órfão (não importado).
4. Hero com `min-height: 880px` no mobile.
5. Rail em grid 2 colunas denso.
6. Leadership forçado a 1 coluna ≤640px.
7. WhatsApp `z-index` acima do cookie sem lift espacial.
8. Fonte Unigeo duplicada (`@font-face` + `next/font`).

## SoT responsivo

Opção A: bloco **OCTUS FINAL MOBILE REMEDIATION** no fim de `app/globals.css`. Módulo órfão removido.

## Evidência

`docs/ops/evidence/OCTUS_MOBILE_REMEDIATION_2026-08-05/screenshots/`  
`QA_MATRIX.json`

## Dependências externas (não bloqueiam mobile)

GTM/GA4 IDs, Search Console, Consent Mode v2 — ver `ANALYTICS_INSERTION_POINTS.md`.

## Recomendação

```text
TECHNICAL PASS — READY FOR RUBIO MERGE AUTHORIZATION
```

Não fazer merge/prod/DNS sem autorização explícita do Rubio.
