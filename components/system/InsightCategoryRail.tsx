import Link from "next/link";
import {
  mapPostToIntelligenceCategory,
  type IntelligenceCategoryId,
} from "../../lib/intelligence";

/** Hub ids stay stable: they drive the /insights?hub= query params. */
export const INSIGHT_CATEGORIES = [
  {
    id: "regulatory" as const,
    label: "Regulatory",
    description: "Rules, authorities, jurisdiction shifts",
  },
  {
    id: "market" as const,
    label: "Market",
    description: "Sector dynamics and industry movement",
  },
  {
    id: "operational" as const,
    label: "Operational",
    description: "Failure modes and execution patterns",
  },
  {
    id: "founder" as const,
    label: "Founder",
    description: "Ownership, governance, expansion",
  },
];

export { mapPostToIntelligenceCategory };
export type { IntelligenceCategoryId };

export default function InsightCategoryRail({
  active,
}: {
  active?: IntelligenceCategoryId | "all";
}) {
  const current = active || "all";
  return (
    <nav aria-label="Insights categories" className="mb-10">
      <p className="section-label mb-4 block">Insights categories</p>
      <ul className="flex list-none flex-wrap gap-2 border-b border-border pb-4">
        <li>
          <Link
            href="/insights"
            className={`inline-flex rounded-md px-3 py-2 text-sm no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              current === "all"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            All
          </Link>
        </li>
        {INSIGHT_CATEGORIES.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/insights?hub=${cat.id}`}
              className={`inline-flex rounded-md px-3 py-2 text-sm no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                current === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
              title={cat.description}
            >
              {cat.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
