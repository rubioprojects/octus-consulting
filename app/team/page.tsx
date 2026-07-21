import Link from "next/link";
import {
  CTA_DISCUSS_LABEL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import {
  GROUP_LABELS,
  GROUP_ORDER,
  getPublishedByGroup,
  personAlt,
  type PersonProfile,
} from "../../lib/people";

export const metadata = {
  title: "Team",
  description:
    "Leadership and specialists behind Octus — execution capability for regulated operations across regulatory, compliance, delivery and partnerships.",
};

function PersonCard({ person }: { person: PersonProfile }) {
  const body = (
    <article className="team-card">
      <div className="team-card-photo-wrap">
        <img
          src={person.photo}
          alt={personAlt(person)}
          className="team-card-photo"
          style={{ objectPosition: person.photoPosition ?? "center" }}
          width={200}
          height={200}
          decoding="async"
        />
      </div>
      <h3 className="heading-sm" style={{ marginBottom: "6px" }}>
        {person.name}
      </h3>
      <p className="team-card-role">{person.title}</p>
      <p className="body-sm">{person.bio}</p>
    </article>
  );

  if (person.linkedin) {
    return (
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="team-card-link"
      >
        {body}
      </a>
    );
  }

  return body;
}

export default function TeamPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Team</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            People who represent capability —
            <br />
            <span className="text-white/70">not a directory of headcount.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Octus publishes leadership and core execution capability for regulated operations.
            International network collaborators appear on Partners — not as employees.
          </p>
        </div>
      </section>

      {GROUP_ORDER.map((group) => {
        const people = getPublishedByGroup(group);
        if (people.length === 0) return null;
        return (
          <section
            key={group}
            className={
              group === "core_specialists"
                ? "surface-elevated py-24 md:py-32"
                : "bg-background py-24 md:py-32"
            }
            aria-labelledby={`team-group-${group}`}
          >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="section-label mb-4 block">{GROUP_LABELS[group]}</p>
              <h2 id={`team-group-${group}`} className="heading-section mb-12 md:mb-16">
                {GROUP_LABELS[group]}
              </h2>
              <div
                className={
                  group === "leadership"
                    ? "team-grid team-grid--leadership"
                    : "team-grid"
                }
              >
                {people.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-border bg-background py-20 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="section-label mb-3 block">Next</p>
            <h2 className="heading-section mb-3">Work with the execution layer.</h2>
            <p className="body-large text-muted-foreground">
              Explore careers, discuss your operation, or collaborate through our international
              partner network.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/careers"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 font-sans text-sm font-medium text-foreground no-underline transition-colors hover:border-primary/40"
            >
              Careers →
            </Link>
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 font-sans text-sm font-medium text-primary-foreground no-underline transition-colors hover:bg-primary/90"
            >
              {CTA_DISCUSS_LABEL}
            </a>
            <Link
              href="/partners"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 font-sans text-sm font-medium text-foreground no-underline transition-colors hover:border-primary/40"
            >
              Partners →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
