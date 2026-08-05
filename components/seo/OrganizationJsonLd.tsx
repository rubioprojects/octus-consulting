import {
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  SAME_AS,
  SITE,
  SITE_NAME,
} from "../../lib/pageMeta";

/** Organization JSON-LD for the public site. Production URLs only. */
export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE,
    logo: LOGO_URL,
    image: DEFAULT_OG_IMAGE,
    sameAs: [...SAME_AS],
    email: "info@octusconsulting.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
