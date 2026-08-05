import type { Metadata } from "next";

export const SITE = "https://octusconsulting.com";
export const SITE_NAME = "Octus Consulting";
export const DEFAULT_OG_IMAGE = "https://octusconsulting.com/og-image.png";
export const LOGO_URL =
  "https://octusconsulting.com/brand/lockup/octus-lockup-horizontal-primary-on-dark.svg";
export const SAME_AS = [
  "https://www.linkedin.com/company/octusonsulting/",
  "https://www.instagram.com/octusconsulting/",
] as const;

function absoluteImageUrl(image: string): string {
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const path = image.startsWith("/") ? image : `/${image}`;
  return `${SITE}${path}`;
}

function normalizeTitle(title: string): { display: string; absolute: boolean } {
  let t = title.trim();
  // Normalize short brand suffix to full brand.
  t = t.replace(/\s*\|\s*Octus\s*$/i, ` | ${SITE_NAME}`);
  const alreadyBranded =
    t === SITE_NAME ||
    t.startsWith(`${SITE_NAME} |`) ||
    t.endsWith(`| ${SITE_NAME}`);
  return { display: t, absolute: alreadyBranded };
}

/** Page-specific title/description/canonical + Open Graph + Twitter for production URLs. */
export function pageSocialMeta(opts: {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
  /** Intentional social share image path under the production origin. */
  image?: string;
  /**
   * When true, set metadata.title as absolute so the root layout template
   * ("%s | Octus Consulting") does not append a second brand suffix.
   * Pass a fully branded title (exactly one "| Octus Consulting").
   */
  absoluteTitle?: boolean;
  /** Open Graph type — articles should pass "article". */
  ogType?: "website" | "article";
}): Metadata {
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  // Homepage canonical matches sitemap (no trailing slash).
  const canonical = path === "/" ? SITE : `${SITE}${path}`;
  const imageUrl = absoluteImageUrl(opts.image ?? DEFAULT_OG_IMAGE);
  const normalized = normalizeTitle(opts.title);
  const useAbsolute = opts.absoluteTitle === true || normalized.absolute;
  const displayTitle = normalized.display;
  const titleValue: Metadata["title"] = useAbsolute
    ? { absolute: displayTitle }
    : displayTitle;

  return {
    title: titleValue,
    description: opts.description,
    alternates: { canonical },
    ...(opts.robots !== undefined ? { robots: opts.robots } : {}),
    openGraph: {
      title: displayTitle,
      description: opts.description,
      url: canonical,
      siteName: SITE_NAME,
      type: opts.ogType ?? "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: opts.description,
      images: [imageUrl],
    },
  };
}
