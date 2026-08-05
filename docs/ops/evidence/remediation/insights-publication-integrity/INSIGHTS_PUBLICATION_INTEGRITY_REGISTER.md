# Insights Publication Integrity Register

**Phase:** Insights Publication Integrity Repair  
**Application SHA:** `eace7f4ab7aeee324b874502a8ee0f870ca6ad25`  
**Review date:** 2026-08-04  

## Counts

| Status | Count |
| --- | ---: |
| source inventory | 33 |
| PUBLISH_CURRENT | 5 |
| PUBLISH_HISTORICAL_WITH_UPDATE | 6 |
| EDITORIAL_COMMENTARY | 5 |
| HOLD_NOT_PUBLIC | 17 |
| public | 16 |

## PUBLISH_CURRENT

- mica-what-operators-need-to-do — EUR-Lex MiCA + ESMA; Art. 59 / Art. 143 precision
- senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs — LC 224 primary
- coaf-crisis-aml-obligations-online-gaming-operators — Lei 9.613 + COAF
- brazil-b2b-registration-requirement-betting-igaming — Aviso SPA/MF 1/2026 DOU; final ordinance not confirmed
- curacao-reform-what-changes — CGA orange-seal PDFs (25 Sep / 15 Oct 2025)

## PUBLISH_HISTORICAL_WITH_UPDATE

- betting-taxation-risks-senate-legal-certainty-regulated-market
- new-regulation-betting-online-game-systems-portaria-722-2024
- games-not-classified-as-fixed-odds-betting-brazil
- stf-suspends-municipal-lottery-operations-nationwide
- quinel-credentialed-certifying-entity-brazil-ministry-finance
- regulatory-agenda-2025-2026-secretariat-prizes-betting

## EDITORIAL_COMMENTARY

- why-licensing-fails-post-approval
- banking-for-high-risk-operations
- compliance-as-a-service-vs-internal-teams
- regulation-and-technology-legal-follows-igaming-evolution
- trump-tax-reform-betting-operators-lessons-for-brazil

## HOLD_NOT_PUBLIC (moved / retained)

- stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts
- intellectual-property-igaming-trademark-registration-brazil
- why-your-international-licence-may-not-protect-you-in-brazil
- risk-management-software-igaming-regulatory-compliance
- customised-studies-international-expansion-brazil
- senate-commission-approves-casino-bingo-gaming-bill-brazil
- new-spa-mf-normative-instruction-fixed-odds-betting
- centralised-self-exclusion-platform-key-changes-operators-bettors
- annual-recertification-betting-platforms-spa-mf-new-guidelines
- rio-de-janeiro-regulates-vlts-lottery-equipment-decree
- bet-br-domain-extension-to-states-brazil
- national-betting-system-sinapo-brazil
- iof-update-financial-market-brazil-2025
- spa-ordinance-banks-refuse-illegal-betting-operators
- youtube-tightens-rules-illegal-betting-sites-impact-influencers
- spa-mf-position-brazilian-partner-20-percent-share-capital
- new-rules-sports-betting-online-games-brazil-portaria-827-2024

## Gate rules applied

1. `currentLawDependency=true` and `primarySources.length=0` → HOLD_NOT_PUBLIC  
2. Generic SPA / Brasil Participativo root / CGA portal roots rejected  
3. Historical regulatory without exact primary → HOLD  
4. Editorial commentary requires `EDITORIAL_COMMENTARY` + visible Editorial basis  
5. Public regulatory requires visible Sources with working exact links  
