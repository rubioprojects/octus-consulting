import type { Metadata } from "next";

const SITE = "https://octusconsulting.com";
const SITE_NAME = "Octus Consulting";

/** Page-specific title/description/canonical + Open Graph + Twitter for production URLs. */
export function pageSocialMeta(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  // Normalize: homepage → https://octusconsulting.com/
  const canonical = path === "/" ? `${SITE}/` : `${SITE}${path}`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}
