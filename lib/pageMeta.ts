import type { Metadata } from "next";

const SITE = "https://octusconsulting.com";
const SITE_NAME = "Octus Consulting";
const DEFAULT_OG_IMAGE = "https://octusconsulting.com/og-image.png";

function absoluteImageUrl(image: string): string {
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const path = image.startsWith("/") ? image : `/${image}`;
  return `${SITE}${path}`;
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
}): Metadata {
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  // Homepage canonical matches sitemap (no trailing slash).
  const canonical = path === "/" ? SITE : `${SITE}${path}`;
  const imageUrl = absoluteImageUrl(opts.image ?? DEFAULT_OG_IMAGE);
  const titleValue: Metadata["title"] = opts.absoluteTitle
    ? { absolute: opts.title }
    : opts.title;

  return {
    title: titleValue,
    description: opts.description,
    alternates: { canonical },
    ...(opts.robots !== undefined ? { robots: opts.robots } : {}),
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [imageUrl],
    },
  };
}
