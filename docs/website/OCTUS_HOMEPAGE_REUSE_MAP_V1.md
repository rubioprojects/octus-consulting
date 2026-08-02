# OCTUS HOMEPAGE REUSE MAP V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Rule** | Content map only — **do not** write an entirely new homepage yet |
| **Source page** | `app/page.tsx` (+ brand/system components) |

## Future homepage must answer

1. Who is Octus?
2. What does Octus do?
3. What are the seven areas?
4. Which industries does Octus serve?
5. How does Octus work?
6. Why trust Octus?
7. How to contact Octus?

---

## Section map

### S1 — Identity / hero (Who is Octus?)

| Field | Content |
|-------|---------|
| existing_component | Homepage hero / `PageHero` or equivalent atmosphere components from brand PRs |
| existing_copy | “Premium Execution for Regulated Operations” and structural-failure framing |
| needs_simplification | Yes — reduce abstract “structural” density; keep concrete |
| catalog_dependency | Low for identity sentence; high if hero lists areas |
| disposition | **Remain** — refine copy after claim register approval |

### S2 — What Octus does (one clear statement)

| Field | Content |
|-------|---------|
| existing_component | Hero subcopy; may pull from `/what-octus-does` |
| existing_copy | Execution / coordination for regulated ops |
| needs_simplification | Align with approved one-sentence from catalog when consumable |
| catalog_dependency | **Yes** — official sentence |
| disposition | **Remain**; sync to catalog |

### S3 — Seven areas (capability map)

| Field | Content |
|-------|---------|
| existing_component | Solutions / capability rail (currently **six**) |
| existing_copy | Six hub titles from `lib/commercial.ts` |
| needs_simplification | **Replace count and labels** — do not ship six as final |
| catalog_dependency | **Hard dependency** on approved seven names |
| disposition | **Remain as section**; **rebuild tiles** after approval |

### S4 — Industries

| Field | Content |
|-------|---------|
| existing_component | Markets links/cards pattern (`/markets`) |
| existing_copy | iGaming, Fintech, Digital Assets, High-Risk |
| needs_simplification | Minor |
| catalog_dependency | Low |
| disposition | **Remain** |

### S5 — How Octus works

| Field | Content |
|-------|---------|
| existing_component | Engagement teaser → `/how-we-engage` |
| existing_copy | Lead contractor / models |
| needs_simplification | Keep short; link out |
| catalog_dependency | Low |
| disposition | **Remain** |

### S6 — Why trust Octus

| Field | Content |
|-------|---------|
| existing_component | People/trust bands (team PR lineage); failure-mode honesty; boundaries |
| existing_copy | Team + “what we do not promise” |
| needs_simplification | Avoid unverified metrics/cases |
| catalog_dependency | Claim register |
| disposition | **Remain**; use approved people assets |

### S7 — Contact

| Field | Content |
|-------|---------|
| existing_component | CTA group (Discuss / Email / Contact) |
| existing_copy | Conversation CTAs |
| needs_simplification | Keep dual path: Contact vs Diagnostic for crisis |
| catalog_dependency | None |
| disposition | **Remain** |

---

## Sections to move or remove (later)

| Current pattern | Disposition |
|-----------------|-------------|
| Long failure-mode stacks competing with areas | **Move** density to Remediation / Diagnostic |
| Any “six solutions” explicit claim | **Remove/replace** after seven approved |
| Conversion-only modules that obscure areas | **Human review** from PR #11 cherry-picks |

## Explicit non-actions

- No new homepage implementation in this pack
- No final seven labels on homepage
- No production deploy
