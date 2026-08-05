/**
 * Canonical Insights title normalisation.
 * Editorial H1/index titles must not carry brand suffixes.
 * Document/OG/Twitter titles carry exactly one "| Octus Consulting".
 */

const BRAND = "Octus Consulting";
const BRAND_SUFFIX = ` | ${BRAND}`;

const BRAND_STRIP_PATTERNS: RegExp[] = [
  /\s*\|\s*Octus Consulting(\s*\|\s*Octus Consulting)*/gi,
  /\s*[—–-]\s*Octus Consulting(\s*[—–-]\s*Octus Consulting)*/gi,
  /\s*\.\s*Octus Consulting\s*$/gi,
  /(\s+Octus Consulting){2,}\s*$/gi,
  /\s+Octus Consulting\s*$/gi,
];

/** Remove repeated or trailing brand variants from an editorial title. */
export function normalizeEditorialTitle(raw: string): string {
  let t = String(raw || "").trim();
  let prev = "";
  while (t !== prev) {
    prev = t;
    for (const re of BRAND_STRIP_PATTERNS) {
      t = t.replace(re, "").trim();
    }
  }
  // Collapse accidental double spaces / trailing punctuation artefacts from strip
  t = t.replace(/\s{2,}/g, " ").replace(/\s+([:;.!?])/g, "$1").trim();
  return t;
}

/** Exactly one brand suffix for document / OG / Twitter titles. */
export function brandedDocumentTitle(raw: string): string {
  const clean = normalizeEditorialTitle(raw);
  return `${clean}${BRAND_SUFFIX}`;
}

export function countBrandSuffixes(title: string): number {
  const matches = String(title || "").match(/Octus Consulting/gi);
  return matches ? matches.length : 0;
}

export function hasRepeatedBrandSuffix(title: string): boolean {
  return /Octus Consulting\s*\|\s*Octus Consulting/i.test(String(title || ""));
}

export { BRAND, BRAND_SUFFIX };
