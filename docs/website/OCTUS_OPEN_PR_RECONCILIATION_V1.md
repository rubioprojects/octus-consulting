# OCTUS OPEN PR RECONCILIATION V1

| Field | Value |
|-------|-------|
| **Status** | `REQUIRES_RUBIO_REVIEW` |
| **Date** | 2026-08-02 |
| **Rule** | **Do not merge any PR** in this mission |
| **Repo** | rubioprojects/octus-consulting |

## Classification legend

| Class | Meaning |
|-------|---------|
| KEEP | Preserve branch work for later integration |
| CHERRY_PICK | Take selected commits/files only |
| REBUILD | Concept useful; implementation must be redone against seven areas |
| DROP | Do not carry forward |
| SUPERSEDED | Replaced by a newer PR/pack |
| HUMAN_REVIEW | Rubio must decide |

---

## Open PRs (as of 2026-08-02)

### PR #15 — docs(commercial): Octus public catalog V1 and commercial system
| | |
|--|--|
| Head | `docs/octus-public-commercial-catalog-v1` → `main` |
| Scope | Commercial docs only (~26 files) |
| Workstreams | Catalog, playbooks, system, deck |
| Class | **HUMAN_REVIEW** / **KEEP** (commercial front) |
| Note | Catalog front revising toward original **seven** areas; website must **not** consume six-area recommendations as final |
| Merge now? | **No** |

### PR #14 — docs(commercial): OCTUS public service catalog V1
| | |
|--|--|
| Head | `docs/octus-public-service-catalog-v1` → `main` |
| Scope | Catalog md/json + registers |
| Class | **SUPERSEDED** or **HUMAN_REVIEW** vs #15 (overlapping commercial catalog) |
| Merge now? | **No** — reconcile with #15 / seven-area revision |

### PR #12 — docs(brand): Octus SVG agent packs
| | |
|--|--|
| Scope | Brand SVG packs under docs/design |
| Class | **KEEP** (design reference) |
| Merge now? | **No** (optional later; not blocking seven-area prep) |

### PR #11 — feat: authority and conversion P0
| | |
|--|--|
| Base | `feat/official-brand-system-integration` (stacked) |
| Scope | Homepage/about/contact/intelligence/insights/jurisdictions/how-we-engage — conversion + claim hygiene (~56 files) |
| Workstreams | Homepage, conversion, content humanization |
| Class | **CHERRY_PICK** / **HUMAN_REVIEW** |
| Caution | May embed six-Solution assumptions; cherry-pick copy/CTA wins **after** taxonomy approval |
| Merge now? | **No** |

### PR #10 — feat(brand): official visual system
| | |
|--|--|
| Base | brand-signature stack |
| Scope | Large brand asset + layout/nav/homepage (~292 files) |
| Workstreams | Visual brand |
| Class | **KEEP** / **HUMAN_REVIEW** (design system value) |
| Caution | Stacked base; do not flatten into main without brand owner |
| Merge now? | **No** |

### PR #9 — People visual treatment update
| | |
|--|--|
| Base | wave4 people |
| Scope | Team visual treatment |
| Class | **KEEP** / **CHERRY_PICK** into team surface |
| Merge now? | **No** |

### PR #8 — Brand signature final refinement
| | |
|--|--|
| Scope | Brand signature, cookie, jurisdiction polish |
| Class | **KEEP** (stacked under #10/#11) |
| Merge now? | **No** |

### PR #7 — Executive visual polish
| | |
|--|--|
| Base | `main` |
| Scope | Favicon, cookie, hero atmosphere |
| Class | **KEEP** / **CHERRY_PICK** |
| Merge now? | **No** |

### PR #6 — Wave4 People & Trust
| | |
|--|--|
| Base | `main` |
| Scope | Team architecture |
| Class | **KEEP** |
| Merge now? | **No** |

### PR #3 — Strategic content review (docs)
| | |
|--|--|
| Base | wave1 closeout |
| Scope | Content strategy docs + minor sitemap/contact |
| Class | **KEEP** (docs) / possibly **SUPERSEDED** in parts by newer audits |
| Merge now? | **No** |

---

## Stack map (simplified)

```text
main
 ├─ #7 executive polish
 ├─ #6 people trust
 ├─ #3 content docs (off wave1)
 ├─ #12 svg packs
 ├─ #14 / #15 commercial catalog docs (parallel — reconcile)
 └─ brand chain: #8 → #10 → #11 (authority conversion)  [STACKED]
```

Local dirty branch `feat/authority-conversion-p0` often carries uncommitted service-architecture packs — treat as **HUMAN_REVIEW**, not merge authority.

---

## By workstream

| Workstream | PRs | Recommendation |
|------------|-----|----------------|
| Navigation | #10, #11, uncommitted service IA | **REBUILD** menu against seven areas; cherry-pick UX polish only |
| Homepage | #7, #8, #10, #11 | **CHERRY_PICK** atmosphere/CTA; **REBUILD** six-tile rail |
| Service architecture | Uncommitted packs + commercial #14/#15 | **REBUILD** on approved seven; do not ship six as final |
| Visual brand | #7–#10, #12 | **KEEP** system; integrate carefully |
| Team pages | #6, #9 | **KEEP** |
| Conversion-heavy | #11 | **HUMAN_REVIEW** — strip false-ready / six-final claims |
| Duplicated route systems | Legacy redirects already on main; service packs on stacks | Do not add second parallel IA |

---

## Website-critical warnings

1. **Do not merge #11/#10 stack** until seven-area catalog is consumable — risk of locking six-Solution nav/copy.
2. **#14 vs #15** commercial overlap — catalog front owns reconciliation (including seven-area restore).
3. Preserve brand and team gains via cherry-pick, not wholesale stack merge.
4. No production deploy from these PRs in this mission.

## Human decisions

| ID | Ask |
|----|-----|
| PR-01 | Which commercial PR is SoT after seven-area restore? |
| PR-02 | Accept brand stack (#7–#10) sequencing? |
| PR-03 | Cherry-pick list from #11 after taxonomy? |
