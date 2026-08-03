import type { Metadata } from "next";

const SITE = "https://octusconsulting.com";
const SITE_NAME = "Octus Consulting";
const DEFAULT_OG_IMAGE = "/og-image.png";

/** Page-specific title/description/canonical + Open Graph + Twitter for production URLs. */
export function pageSocialMeta(opts: {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
  /** Intentional social share image path under the production origin. */
  image?: string;
}): Metadata {
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  // Homepage canonical matches sitemap (no trailing slash).
  const canonical = path === "/" ? SITE : `${SITE}${path}`;
  const image = opts.image ?? DEFAULT_OG_IMAGE;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    ...(opts.robots !== undefined ? { robots: opts.robots } : {}),
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
