import type { Post } from "./posts";

/** Controlled linking helpers for Insights — no mass body rewrites. */

const CATEGORY_AREA_LINKS: Record<string, Array<{ label: string; href: string }>> = {
  "Brazil Regulatory": [
    { label: "Regulatory Structuring", href: "/solutions/regulatory-structuring" },
    { label: "Brazil", href: "/brazil" },
  ],
  Compliance: [
    { label: "Compliance & Risk", href: "/solutions/compliance-risk" },
  ],
  "Regulatory Analysis": [
    { label: "Regulatory Structuring", href: "/solutions/regulatory-structuring" },
  ],
  Licensing: [
    { label: "Regulatory Structuring", href: "/solutions/regulatory-structuring" },
  ],
  Banking: [
    { label: "Corporate Structuring", href: "/solutions/corporate-structuring" },
    { label: "International Hub", href: "/international-hub" },
  ],
};

const CATEGORY_INDUSTRY_LINKS: Record<string, Array<{ label: string; href: string }>> = {
  "Brazil Regulatory": [
    { label: "iGaming", href: "/markets/igaming" },
  ],
};

const DEFAULT_AUTHOR = "Octus Consulting";

export function resolvePostAuthor(post: Post): string {
  return post.author?.trim() || DEFAULT_AUTHOR;
}

export function resolveServiceAreaLinks(post: Post): Array<{ label: string; href: string }> {
  const fromPost = post.related?.filter((r) => r.href.startsWith("/solutions") || r.href === "/private-clients" || r.href === "/international-hub") || [];
  const fromCategory = CATEGORY_AREA_LINKS[post.category] || [];
  const merged = [...fromPost];
  for (const link of fromCategory) {
    if (!merged.some((m) => m.href === link.href)) merged.push(link);
  }
  return merged.slice(0, 4);
}

export function resolveIndustryLinks(post: Post): Array<{ label: string; href: string }> {
  return CATEGORY_INDUSTRY_LINKS[post.category] || [];
}

export function resolveJurisdictionLinks(post: Post): Array<{ label: string; href: string }> {
  const links: Array<{ label: string; href: string }> = [];
  const hay = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
  if (hay.includes("brazil") || hay.includes("spa") || hay.includes("stf")) {
    links.push({ label: "Brazil", href: "/brazil" });
  }
  if (hay.includes("malta")) links.push({ label: "Malta", href: "/jurisdictions/malta" });
  if (hay.includes("curaçao") || hay.includes("curacao")) {
    links.push({ label: "Curaçao", href: "/jurisdictions/curacao" });
  }
  if (hay.includes("portugal")) links.push({ label: "Portugal", href: "/jurisdictions/portugal" });
  if (hay.includes("uae") || hay.includes("dubai")) links.push({ label: "UAE", href: "/jurisdictions/uae" });
  return links;
}

/** Marker for articles that may need human factual refresh — do not auto-rewrite. */
export function factualReviewStatus(post: Post): "reviewed" | "needs_review" {
  // Conservative: older than 2025-06 without author → needs_review marker only
  if (!post.author && post.date < "2025-06-01") return "needs_review";
  return "reviewed";
}
