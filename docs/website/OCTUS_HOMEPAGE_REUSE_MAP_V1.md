# OCTUS HOMEPAGE REUSE MAP V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Correction** | Capability section depends on approved seven — **not** six-plus-one |
| **Rule** | Content map only — **do not** write an entirely new homepage yet |
| **Source page** | `app/page.tsx` (+ brand/system components) |

## Future homepage must answer

1. Who is Octus?
2. What does Octus do?
3. What are the seven areas? (`final_area_identity` for each from approved catalog only)
4. Which industries does Octus serve?
5. How does Octus work?
6. Why trust Octus?
7. How to contact Octus?

---

## Section map

### S1 — Identity / hero (Who is Octus?)

| Field | Content |
|-------|---------|
| existing_component | Homepage hero / atmosphere components from brand PRs |
| existing_copy | “Premium Execution for Regulated Operations” and related framing |
| needs_simplification | Yes — keep concrete; reduce abstract density |
| catalog_dependency | Low for identity sentence; high if hero lists areas |
| disposition | **Remain** — refine after claim register approval |

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
| existing_component | Capability / Solutions rail (currently shows **six temporary** hubs) |
| existing_copy | Temporary hub titles from `lib/commercial.ts` — **not** approved seven |
| needs_simplification | **Replace count and labels** with approved seven only |
| catalog_dependency | **Hard dependency** — do not ship six, and do not assume six-plus-one |
| disposition | **Remain as section**; **rebuild tiles** after `OCTUS_ORIGINAL_SEVEN_AREAS_RECONCILIATION_V1.md` is consumable |
| forbidden_assumption | AREA-01…AREA-06 ≠ current six Solutions; AREA-07 ≠ “whatever is left” |

### S4 — Industries

| Field | Content |
|-------|---------|
| existing_component | Markets links/cards (`/markets`) |
| existing_copy | iGaming, Fintech, Digital Assets, High-Risk |
| needs_simplification | Minor |
| catalog_dependency | Low |
| disposition | **Remain** (industries layer, not service areas) |

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
| existing_component | People/trust bands; honesty/boundaries |
| existing_copy | Team + “what we do not promise” |
| needs_simplification | Avoid unverified metrics/cases |
| catalog_dependency | Claim register |
| disposition | **Remain**; use approved people assets |

### S7 — Contact

| Field | Content |
|-------|---------|
| existing_component | CTA group (Discuss / Email / Contact) |
| existing_copy | Conversation CTAs |
| needs_simplification | Keep Contact; Diagnostic remains available as intake from remediation **content cluster** — hierarchy TBD |
| catalog_dependency | None for contact mechanics |
| disposition | **Remain** |

---

## Sections to move or remove (later)

| Current pattern | Disposition |
|-----------------|-------------|
| Long failure-mode stacks competing with the capability map | **Move** density into remediation **content cluster** pages (`/diagnostic` and related) after role assignment — not pre-classified as an area |
| Any “six solutions” explicit claim | **Remove/replace** after seven approved |
| Conversion-only modules that obscure areas | **Human review** from PR #11 cherry-picks |

## Explicit non-actions

- No new homepage implementation in this pack
- No final seven labels on homepage
- No six-plus-one tile plan
- No production deploy
