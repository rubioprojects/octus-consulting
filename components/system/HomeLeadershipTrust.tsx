import Link from "next/link";

/**
 * Homepage leadership accountability. Rubio + Maria Cristina (Cris).
 * Restored from approved HomeLeadershipTrust treatment (70cb232 / 5f61dcc).
 * Assets: /team/rubio-teixeira.jpg, /team/maria-cristina.jpg
 */
export default function HomeLeadershipTrust() {
  const leaders = [
    {
      name: "Rubio Teixeira",
      title: "Founder & CEO",
      photo: "/team/rubio-teixeira.jpg",
      photoClass: "team-photo--rubio",
      line: "Strategic ownership of structure, sequencing and delivery across regulated mandates.",
    },
    {
      name: "Maria Cristina",
      title: "Operations Coordination",
      photo: "/team/maria-cristina.jpg",
      photoClass: "team-photo--maria",
      line: "Operational coordination and client engagement across regulatory and compliance work.",
    },
  ] as const;

  return (
    <section
      className="home-leadership-trust border-b border-border bg-background py-16 md:py-24"
      aria-labelledby="home-leadership-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 md:mb-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-end md:gap-16">
          <div>
            <p className="section-label mb-4 block">Leadership</p>
            <h2
              id="home-leadership-heading"
              className="heading-section max-w-xl text-balance"
            >
              Direct leadership. Clear accountability.
            </h2>
          </div>
          <p className="body-large max-w-xl text-pretty text-muted-foreground">
            Mandates are owned by the people who structure and run the work. Rubio and Cris lead
            execution personally, with direct access for operators when decisions matter.
          </p>
        </div>

        <div className="home-leadership-trust__grid">
          {leaders.map((l) => (
            <article key={l.name} className="home-leadership-trust__card">
              <div className={`home-leadership-trust__photo-wrap ${l.photoClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.photo} alt={l.name} className="home-leadership-trust__photo" />
              </div>
              <div className="home-leadership-trust__copy">
                <p className="home-leadership-trust__name">{l.name}</p>
                <p className="home-leadership-trust__role">{l.title}</p>
                <p className="home-leadership-trust__line">{l.line}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/team"
            className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            Meet the full team →
          </Link>
        </div>
      </div>
    </section>
  );
}
