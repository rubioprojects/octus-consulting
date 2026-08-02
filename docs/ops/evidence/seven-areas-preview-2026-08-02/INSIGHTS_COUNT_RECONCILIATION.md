# Insights count reconciliation

| Field | Value |
|-------|-------|
| Date | 2026-08-02 |
| Branch | `feat/seven-areas-website-architecture` (PR #17) |
| SoT | `lib/posts.ts` |

## Counts

| Ref | Count |
|-----|------:|
| `origin/main` | 33 |
| `HEAD` | 33 |
| `3d98346` | 33 |
| `5857c0a` | 33 |
| `5b6d4a0` | 33 |

## Current 33 slugs (PR #17 / HEAD)

1. `annual-recertification-betting-platforms-spa-mf-new-guidelines`
2. `banking-for-high-risk-operations`
3. `bet-br-domain-extension-to-states-brazil`
4. `betting-taxation-risks-senate-legal-certainty-regulated-market`
5. `brazil-b2b-registration-requirement-betting-igaming`
6. `centralised-self-exclusion-platform-key-changes-operators-bettors`
7. `coaf-crisis-aml-obligations-online-gaming-operators`
8. `compliance-as-a-service-vs-internal-teams`
9. `curacao-reform-what-changes`
10. `customised-studies-international-expansion-brazil`
11. `games-not-classified-as-fixed-odds-betting-brazil`
12. `intellectual-property-igaming-trademark-registration-brazil`
13. `iof-update-financial-market-brazil-2025`
14. `mica-what-operators-need-to-do`
15. `national-betting-system-sinapo-brazil`
16. `new-regulation-betting-online-game-systems-portaria-722-2024`
17. `new-rules-sports-betting-online-games-brazil-portaria-827-2024`
18. `new-spa-mf-normative-instruction-fixed-odds-betting`
19. `quinel-credentialed-certifying-entity-brazil-ministry-finance`
20. `regulation-and-technology-legal-follows-igaming-evolution`
21. `regulatory-agenda-2025-2026-secretariat-prizes-betting`
22. `rio-de-janeiro-regulates-vlts-lottery-equipment-decree`
23. `risk-management-software-igaming-regulatory-compliance`
24. `senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs`
25. `senate-commission-approves-casino-bingo-gaming-bill-brazil`
26. `spa-mf-position-brazilian-partner-20-percent-share-capital`
27. `spa-ordinance-banks-refuse-illegal-betting-operators`
28. `stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts`
29. `stf-suspends-municipal-lottery-operations-nationwide`
30. `trump-tax-reform-betting-operators-lessons-for-brazil`
31. `why-licensing-fails-post-approval`
32. `why-your-international-licence-may-not-protect-you-in-brazil`
33. `youtube-tightens-rules-illegal-betting-sites-impact-influencers`

## Diff vs `origin/main`

- only on main: none
- only on PR #17: none

## Source of previous number 38

Planning document `docs/website/OCTUS_BLOG_PRESERVATION_AND_LINKING_PLAN_V1.md` stated:

- SoT: `lib/posts.ts` (38 posts)
- Published posts: 38

That figure is **not** supported by `lib/posts.ts` on `main` (33) or on PR #17 (33).
No alternate posts collection (MDX/CMS) exists in this repo.
Likely causes of the audit error:
1. Double-counting related/legacy routes or Intelligence categories; or
2. Including planned/unpublished titles from an earlier inventory; or
3. Arithmetic/inventory error during the reuse audit.

## Five “missing” items

No five missing slugs were found in git history between `main` and PR #17.
PR #17 did **not** remove any post from `lib/posts.ts` (identical slug set to `origin/main`).

## Conclusion

| Item | Status |
|------|--------|
| Canonical count | **33** |
| Prior 38 | **Audit error in planning docs** |
| PR #17 post removals | **None** |
| Human import decision | **Not required** — no orphaned five posts located elsewhere |
| H-04 | Closed as technical reconciliation: SoT = 33 |
