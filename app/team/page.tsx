import Link from "next/link";

export const metadata = {
  title: "Team — Octus Consulting",
  description:
    "The people behind Octus. A team with operational depth across regulatory structuring, compliance, legal architecture, corporate design and international market entry.",
};

const team = [
  {
    name: "Rubio Teixeira",
    title: "Founder",
    photo: "/team/rubio-teixeira.jpg",
    focus:
      "Regulatory structuring, international licensing and market entry strategy. Operational presence across Brazil, Portugal, EU and offshore jurisdictions since 2019.",
    linkedin: "https://www.linkedin.com/in/rubioteixeiraoctus/",
  },
  {
    name: "Maria Cristina",
    title: "Managing Director",
    photo: "/team/maria-cristina.jpg",
    focus:
      "Operational leadership and client engagement across Octus' regulatory and compliance mandates. Senior depth across regulated markets in Brazil and internationally.",
    linkedin: "https://www.linkedin.com/in/maria-cristina-060241b6/",
  },
  {
    name: "Rodrigo Coelho Lopes",
    title: "Legal Architecture Lead",
    photo: "/team/rodrigo-lopes.jpg",
    focus:
      "Legal strategy and coordination across the group's regulatory and corporate mandates. Oversight of legal architecture, cross-border structure and jurisdictional risk.",
    linkedin: null,
  },
  {
    name: "Claudia Nery",
    title: "Chief Financial Officer",
    photo: "/team/claudia-nery.jpg",
    focus:
      "Corporate and financial architecture. Financial governance, group structuring and reporting across jurisdictions.",
    linkedin: "https://www.linkedin.com/in/claudia-nery/",
  },
  {
    name: "Esther Vendrami",
    title: "International Regulatory & Compliance Lead",
    photo: "/team/esther-vendrami.jpg",
    focus:
      "International licensing, outsourced compliance operations (CO as a service), company formations and banking access across offshore and regulated environments.",
    linkedin: "https://www.linkedin.com/in/esthervendrami/",
  },
  {
    name: "Caroline Giovanetti",
    title: "Brazil Regulatory Lead",
    photo: "/team/caroline-giovanetti.jpg",
    focus:
      "Regulatory processes, licensing and administrative operations for Brazil. Coordination of all Brazil-facing regulatory and compliance activities.",
    linkedin: "https://www.linkedin.com/in/caroline-cubas-giovanetti-400820144/",
  },
  {
    name: "Milla Ludovico",
    title: "Business Development Lead",
    photo: "/team/milla-ludovico.jpg",
    focus:
      "New business development, client intake and commercial strategy. Works directly with the founding team across new mandates and market opportunities.",
    linkedin: "https://www.linkedin.com/in/milla-ludovico-6a9945a2/",
  },
  {
    name: "Bianca Carolina Oliveira Andrade",
    title: "People & Operations",
    photo: "/team/bianca.jpg",
    focus:
      "People operations, talent coordination and internal processes. Supports team structure, recruitment and operational management across the Octus group.",
    linkedin: "https://www.linkedin.com/in/rh2463365recursoshumanos/",
  },
  {
    name: "Larissa Carvalho",
    title: "Regulatory & Compliance Specialist",
    photo: "/team/larissa-carvalho.jpg",
    focus:
      "Operational support across regulatory and compliance engagements. Coordination of documentation, processes and client-facing deliverables.",
    linkedin: "https://www.linkedin.com/in/larissaocarvalho/",
  },
  {
    name: "Daniel Cruz Fonseca",
    title: "Regulatory & Compliance Specialist",
    photo: "/team-daniel.jpg",
    focus:
      "Regulatory and compliance structuring across iGaming, fintech and betting. Multi-jurisdictional experience: Curaçao, Malta, Isle of Man, Dubai, Anjouan.",
    linkedin: null,
  },
  {
    name: "Luciana Santos Veloso",
    title: "Operations Coordinator",
    photo: "/team-luciana.jpg",
    focus:
      "Operational workflows, client documentation and cross-functional coordination across multiple jurisdictions.",
    linkedin: null,
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
              member.linkedin ? (
                <a
                  key={member.name}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card-link"
                >
                  <article className="team-card">
                    <div className="team-card-photo-wrap">
                      <img src={member.photo} alt={member.name} className="team-card-photo" />
                    </div>
                    <h3 className="heading-sm" style={{ marginBottom: "6px" }}>
                      {member.name}
                    </h3>
                    <p className="team-card-role">{member.title}</p>
                    <p className="body-sm">{member.focus}</p>
                  </article>
                </a>
              ) : (
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
              )
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
