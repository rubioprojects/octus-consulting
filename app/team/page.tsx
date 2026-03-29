import Link from "next/link";

export const metadata = {
  title: "Team — Octus Consulting",
  description:
    "The people behind Octus. A team with operational depth across regulatory structuring, compliance, legal architecture, corporate design and international market entry.",
};

const leadership = [
  {
    name: "Rubio Teixeira",
    title: "Founder",
    photo: "rubio-teixeira.jpg",
    focus: "Regulatory structuring, international licensing and market entry strategy. Operational presence across Brazil, Portugal, EU and offshore jurisdictions since 2019.",
    linkedin: "https://www.linkedin.com/in/rubioteixeiraoctus/",
  },
  {
    name: "Maria Cristina",
    title: "Managing Director",
    photo: "maria-cristina.jpg",
    focus: "Operational leadership and client engagement across Octus' regulatory and compliance mandates.",
    linkedin: "https://www.linkedin.com/in/maria-cristina-060241b6/",
  },
];

const core = [
  {
    name: "Rodrigo Coelho Lopes",
    title: "Legal Architecture Lead",
    photo: "rodrigo-lopes.jpg",
    focus: "Legal strategy and coordination across regulatory and corporate mandates.",
    linkedin: null,
  },
  {
    name: "Claudia Nery",
    title: "Chief Financial Officer",
    photo: "claudia-nery.jpg",
    focus: "Corporate and financial architecture. Financial governance across jurisdictions.",
    linkedin: "https://www.linkedin.com/in/claudia-nery/",
  },
  {
    name: "Esther Vendrami",
    title: "International Regulatory & Compliance",
    photo: "esther-vendrami.jpg",
    focus: "International licensing, outsourced compliance operations and banking access.",
    linkedin: "https://www.linkedin.com/in/esthervendrami/",
  },
  {
    name: "Caroline Giovanetti",
    title: "Brazil Regulatory Lead",
    photo: "caroline-giovanetti.jpg",
    focus: "Regulatory processes, licensing and administrative operations for Brazil.",
    linkedin: "https://www.linkedin.com/in/caroline-cubas-giovanetti-400820144/",
  },
  {
    name: "Milla Ludovico",
    title: "Business Development",
    photo: "milla-ludovico.jpg",
    focus: "New business development, client intake and commercial strategy.",
    linkedin: "https://www.linkedin.com/in/milla-ludovico-6a9945a2/",
  },
  {
    name: "Larissa Carvalho",
    title: "Regulatory & Compliance",
    photo: "larissa-carvalho.jpg",
    focus: "Operational support across regulatory and compliance engagements.",
    linkedin: "https://www.linkedin.com/in/larissaocarvalho/",
  },
  {
    name: "Bianca Carolina Oliveira Andrade",
    title: "People & Operations",
    photo: "bianca.jpg",
    focus: "People operations, talent coordination and internal processes.",
    linkedin: "https://www.linkedin.com/in/rh2463365recursoshumanos/",
  },
];

function LeaderCard({ m }: { m: typeof leadership[0] }) {
  const card = (
    <div className="team-leader-card">
      <div className="team-photo team-photo--lg">
        <img src={`/team/${m.photo}`} alt={m.name} />
      </div>
      <div>
        <h3 className="team-name" style={{ fontSize: "20px" }}>{m.name}</h3>
        <p className="team-role">{m.title}</p>
        <p className="body-sm" style={{ color: "var(--white-60)", maxWidth: "400px" }}>{m.focus}</p>
        {m.linkedin && <span className="team-linkedin">LinkedIn →</span>}
      </div>
    </div>
  );
  if (m.linkedin) return <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>{card}</a>;
  return card;
}

function MemberCard({ m }: { m: typeof core[0] }) {
  const card = (
    <div className="team-card">
      <div className="team-photo">
        <img src={`/team/${m.photo}`} alt={m.name} />
      </div>
      <h3 className="team-name">{m.name}</h3>
      <p className="team-role">{m.title}</p>
      <p className="body-sm" style={{ color: "var(--white-60)", flexGrow: 1 }}>{m.focus}</p>
      {m.linkedin && <span className="team-linkedin">LinkedIn →</span>}
    </div>
  );
  if (m.linkedin) return <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>{card}</a>;
  return card;
}

export default function TeamPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Team</span>
          <h1 className="heading-xl sp-headline">
            Operational depth.
            <br />
            <span style={{ color: "var(--white-40)" }}>Not just expertise.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "560px" }}>
            The people behind Octus come from inside regulated operations —
            not from the outside looking in.
          </p>
        </div>
      </section>

      {/* ─── LEADERSHIP ───────────────────────────────────────────── */}
      <section className="section-dark section-padded" style={{ padding: "80px 40px 100px" }}>
        <div className="container">
          <span className="label" style={{ display: "block", marginBottom: "48px" }}>Leadership</span>
          <div className="team-leader-grid">
            {leadership.map((m) => <LeaderCard key={m.name} m={m} />)}
          </div>
        </div>
      </section>

      {/* ─── CORE TEAM ─────────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "100px 40px 130px" }}>
        <div className="container">
          <span className="label" style={{ display: "block", marginBottom: "48px" }}>Core team</span>
          <div className="grid-auto-lg" style={{ gap: "20px" }}>
            {core.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">Work with us.</h2>
          <p className="body-lg" style={{ color: "var(--white-40)", marginBottom: "32px" }}>
            We work with people who have operational depth in regulated environments.
          </p>
          <Link href="/careers" className="btn-primary btn-primary-lg">
            See open positions →
          </Link>
        </div>
      </section>
    </main>
  );
}
