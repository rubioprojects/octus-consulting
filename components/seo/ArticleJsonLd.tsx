import { SITE, SITE_NAME, DEFAULT_OG_IMAGE, LOGO_URL } from "../../lib/pageMeta";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
};

/** Article JSON-LD for public Insights only. */
export default function ArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  authorName,
  image,
}: ArticleJsonLdProps) {
  const url = `${SITE}${path.startsWith("/") ? path : `/${path}`}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    image: image ? (image.startsWith("http") ? image : `${SITE}${image}`) : DEFAULT_OG_IMAGE,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
