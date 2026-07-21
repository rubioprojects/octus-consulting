/**
 * Intelligence Hub helpers — maps legacy post categories to Wave 4 taxonomy
 * without rewriting article bodies.
 */

export type IntelligenceCategoryId =
  | "regulatory"
  | "market"
  | "operational"
  | "founder";

export function mapPostToIntelligenceCategory(category: string): IntelligenceCategoryId {
  const c = category.toLowerCase();
  if (
    c.includes("market") ||
    c.includes("industry") ||
    c.includes("crypto") ||
    c.includes("advertising")
  ) {
    return "market";
  }
  if (c.includes("operation") || c.includes("banking") || c.includes("compliance")) {
    return "operational";
  }
  if (c.includes("corporate") || c.includes("legal architecture") || c.includes("founder")) {
    return "founder";
  }
  return "regulatory";
}
