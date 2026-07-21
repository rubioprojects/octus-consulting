import Link from "next/link";

export const metadata = {
  title: "Team",
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
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Our Team</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            People who understand how regulated operations hold together.
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "720px" }}>
            Octus combines regulatory structuring with operational execution. The team is built around people who work inside complex regulated environments, not around generic advisory roles.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
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
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title" style={{ marginBottom: "20px" }}>
            Work with a team built for regulatory execution.
          </h2>
          <p className="body-large" style={{ marginBottom: "32px" }}>
            We work with operators who need regulatory clarity, operational discipline and structures that survive scrutiny.
          </p>
          <Link href="/careers" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
            See careers →
          </Link>
        </div>
      </section>
    </main>
  );
}
