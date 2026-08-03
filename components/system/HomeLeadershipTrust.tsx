import Link from "next/link";

/**
 * Homepage leadership accountability. Rubio + Maria Cristina (Cris).
 * Compact editorial cards restored from the approved Octus visual system.
 */
export default function HomeLeadershipTrust() {
  const leaders = [
    {
      name: "Rubio Teixeira",
      title: "Founder & CEO",
      photo: "/team/rubio-teixeira.jpg",
      photoClass: "team-photo--rubio",
    },
    {
      name: "Maria Cristina",
      title: "Operations Coordination",
      photo: "/team/maria-cristina.jpg",
      photoClass: "team-photo--maria",
    },
  ];

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
            >
              <div className={`home-leadership-trust__photo-wrap ${l.photoClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.photo} alt={l.name} className="home-leadership-trust__photo" />
              </div>
              <div className="home-leadership-trust__copy">
                <p className="home-leadership-trust__name">{l.name}</p>
                <p className="home-leadership-trust__role">{l.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
