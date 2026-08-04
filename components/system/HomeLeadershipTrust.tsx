import Link from "next/link";

/**
 * Homepage leadership accountability. Rubio + Maria Cristina (Cris).
 * Composition matched to definitive deployment 9q798dbg2; titles are current facts.
 */
export default function HomeLeadershipTrust() {
  const leaders = [
    {
      name: "Rubio Teixeira",
      title: "Founder & CEO",
      photo: "/team/rubio-teixeira.jpg",
      photoClass: "team-photo--rubio team-photo--rubio-home",
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
      className="home-leadership-trust bg-background py-20 md:py-24"
      aria-labelledby="home-leadership-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-end md:gap-16">
          <div>
            <p className="section-label mb-4 block">Accountability</p>
            <h2 id="home-leadership-heading" className="heading-section max-w-md">
              Leadership who own the structure.
            </h2>
          </div>
          <p className="body-large max-w-xl">
            Trust starts with clear accountability, not a directory of faces.
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
        <div className="mt-10">
          <Link
            href="/team"
            className="font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            Meet the team →
          </Link>
        </div>
      </div>
    </section>
  );
}
