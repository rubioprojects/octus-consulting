import Link from "next/link";

/**
 * Homepage leadership accountability. Rubio + Maria Cristina (Cris).
 * Photo treatment matches commit 8b12fcc / reference deployment exactly.
 */
export default function HomeLeadershipTrust() {
  const leaders = [
    {
      name: "Rubio Teixeira",
      title: "Founder & CEO",
      photo: "/team/rubio-teixeira.jpg",
      photoClass: "team-photo--rubio-home",
    },
    {
      name: "Maria Cristina",
      title: "Operations Coordination",
      photo: "/team/maria-cristina.jpg",
      photoClass: "team-photo--maria",
    },
  ] as const;

  return (
    <section
      className="home-leadership-trust border-b border-border bg-background py-14 md:py-20"
      aria-labelledby="home-leadership-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl md:mb-12">
          <p className="section-label mb-3 block">Leadership</p>
          <h2
            id="home-leadership-heading"
            className="heading-section mb-4 text-balance"
          >
            Direct ownership of the mandate.
          </h2>
          <p className="body-large text-pretty text-muted-foreground">
            Rubio and Cris lead the work that has to hold under regulatory and operational pressure.
          </p>
        </div>
        <div className="home-leadership-trust__grid">
          {leaders.map((l) => (
            <Link
              key={l.name}
              href="/team"
              className="home-leadership-trust__card no-underline"
              aria-label={`${l.name}, ${l.title}`}
            >
              <div className={`home-leadership-trust__photo-wrap ${l.photoClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.photo}
                  alt=""
                  className="home-leadership-trust__photo"
                  aria-hidden="true"
                />
              </div>
              <p className="home-leadership-trust__name" aria-hidden="true">
                {l.name}
              </p>
              <p className="home-leadership-trust__role" aria-hidden="true">
                {l.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
