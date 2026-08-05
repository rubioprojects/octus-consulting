import { SITE } from "../../lib/pageMeta";

export type TeamPersonLd = {
  name: string;
  title: string;
  pathPhoto: string;
  linkedin?: string | null;
};

/** Person JSON-LD for published Team members only (no invented relationships). */
export default function TeamPersonsJsonLd({ people }: { people: TeamPersonLd[] }) {
  const data = people.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.title,
    worksFor: {
      "@type": "Organization",
      name: "Octus Consulting",
      url: SITE,
    },
    image: `${SITE}${p.pathPhoto.startsWith("/") ? p.pathPhoto : `/${p.pathPhoto}`}`,
    url: `${SITE}/team`,
    ...(p.linkedin
      ? { sameAs: [p.linkedin] }
      : {}),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
