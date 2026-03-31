import Link from "next/link";

export const metadata = {
  title: "Team — Octus Consulting",
  description:
    "The people behind Octus. A team with operational depth across regulatory structuring, compliance, legal architecture, corporate design and international market entry.",
};

const team = [
  {
    name: "Daniel Cruz Fonseca",
    title: "Regulatory & Compliance Specialist",
    photo: "/team-daniel.jpg",
    focus:
      "Regulatory and compliance structuring across iGaming, fintech and betting. Multi-jurisdictional experience: Curaçao, Malta, Isle of Man, Dubai, Anjouan.",
  },
  {
    name: "Luciana Santos Veloso",
    title: "Operations Coordinator",
    photo: "/team-luciana.jpg",
    focus:
      "Operational workflows, client documentation and cross-functional coordination across multiple jurisdictions.",
  },
];

export default function TeamPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Our Team</span>
          <h1 className="heading-xl sp-headline">
            People who understand how regulated operations hold together.
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "720px" }}>
            Octus combines regulatory structuring with operational execution. The team is built around people who work inside complex regulated environments, not around generic advisory roles.
          </p>
        </div>
      </section>

      <section className="section-padded" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-card-photo-wrap">
                  <img src={member.photo} alt={member.name} className="team-card-photo" />
                </div>
                <h3 className="heading-sm" style={{ marginBottom: "6px" }}>
                  {member.name}
                </h3>
                <p className="team-card-role">{member.title}</p>
                <p className="body-sm">{member.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "20px" }}>
            Work with a team built for regulatory execution.
          </h2>
          <p className="body-lg" style={{ marginBottom: "32px" }}>
            We work with operators who need regulatory clarity, operational discipline and structures that survive scrutiny.
          </p>
          <Link href="/careers" className="btn-primary btn-primary-lg">
            See careers →
          </Link>
        </div>
      </section>
    </main>
  );
}
