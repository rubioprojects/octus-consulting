import Link from "next/link";

export const metadata = {
  title: "Team — Octus Consulting",
  description:
    "The people behind Octus. A team with operational depth across regulatory structuring, compliance, legal architecture, corporate design and international market entry.",
};

// ─── Team data ───────────────────────────────────────────────────────────────
// Photos: to be added from Canva Octus folder.
// Dimensions recommended: square, min 400x400, dark/neutral background.

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
    focus: "Operational leadership and client engagement across Octus' regulatory and compliance mandates. Senior depth across regulated markets in Brazil and internationally.",
    linkedin: "https://www.linkedin.com/in/maria-cristina-060241b6/",
  },
  {
    name: "Rodrigo Coelho Lopes",
    title: "Legal Architecture Lead",
    photo: "rodrigo-lopes.jpg",
    focus: "Legal strategy and coordination across the group's regulatory and corporate mandates. Oversight of legal architecture, cross-border structure and jurisdictional risk.",
    linkedin: null,
  },
  {
    name: "Claudia Nery",
    title: "Chief Financial Officer",
    photo: "claudia-nery.jpg",
    focus: "Corporate and financial architecture. Financial governance, group structuring and reporting across jurisdictions.",
    linkedin: "https://www.linkedin.com/in/claudia-nery/",
  },
];

const execution = [
  {
    name: "Esther Vendrami",
    title: "International Regulatory & Compliance Lead",
    photo: "esther-vendrami.jpg",
    focus: "International licensing, outsourced compliance operations (CO as a service), company formations and banking access across offshore and regulated environments.",
    linkedin: "https://www.linkedin.com/in/esthervendrami/",
  },
  {
    name: "Caroline Giovanetti",
    title: "Brazil Regulatory Lead",
    photo: "caroline-giovanetti.jpg",
    focus: "Regulatory processes, licensing and administrative operations for Brazil. Coordination of all Brazil-facing regulatory and compliance activities.",
    linkedin: "https://www.linkedin.com/in/caroline-cubas-giovanetti-400820144/",
  },
  {
    name: "Milla Ludovico",
    title: "Business Development Lead",
    photo: "milla-ludovico.jpg",
    focus: "New business development, client intake and commercial strategy. Works directly with the founding team across new mandates and market opportunities.",
    linkedin: "https://www.linkedin.com/in/milla-ludovico-6a9945a2/",
  },
];

const operations = [
  {
    name: "Bianca Carolina Oliveira Andrade",
    title: "People & Operations",
    photo: "bianca.jpg",
    focus: "People operations, talent coordination and internal processes. Supports team structure, recruitment and operational management across the Octus group.",
    linkedin: "https://www.linkedin.com/in/rh2463365recursoshumanos/",
  },
  {
    name: "Larissa Carvalho",
    title: "Regulatory & Compliance Specialist",
    photo: "larissa-carvalho.jpg",
    focus: "Operational support across regulatory and compliance engagements. Coordination of documentation, processes and client-facing deliverables.",
    linkedin: "https://www.linkedin.com/in/larissaocarvalho/",
  },
];

// ─── Reusable card ────────────────────────────────────────────────────────────
function MemberCard({ member }: { member: { name: string; title: string; photo: string; focus: string; linkedin: string | null } }) {
  const inner = (
    <div className="card-lg" style={{ display: "flex", flexDirection: "column", cursor: member.linkedin ? "pointer" : "default" }}>
      <div style={{ width: "100%", aspectRatio: "1 / 1", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "8px", marginBottom: "20px", maxHeight: "200px", overflow: "hidden" }}>
        <img src={`/team/${member.photo}`} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
      </div>
      <h3 className="heading-sm" style={{ marginBottom: "6px", fontSize: "17px" }}>{member.name}</h3>
      <p style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue-light)", marginBottom: "14px" }}>
        {member.title}
      </p>
      <p className="body-sm" style={{ color: "var(--white-60)", flexGrow: 1 }}>{member.focus}</p>
    </div>
  );

  if (member.linkedin) {
    return (
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </a>
    );
  }
  return inner;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TeamPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Team</span>
          <h1 className="heading-xl sp-headline">
            Operational depth.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Not just expertise.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "560px" }}>
            The people behind Octus come from inside regulated operations —
            not from the outside looking in. Each layer of the team covers
            a different dimension of what makes a regulated business actually
            function.
          </p>
        </div>
      </section>

      {/* ─── LEADERSHIP ───────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "0 40px 80px" }}>
        <div className="container">
          <span className="label" style={{ display: "block", marginBottom: "40px" }}>
            Leadership
          </span>
          <div className="grid-auto-lg">
            {leadership.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXECUTION ────────────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container">
          <span className="label" style={{ display: "block", marginBottom: "40px" }}>
            Execution
          </span>
          <div className="grid-3">
            {execution.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPERATIONS ───────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "80px 40px 130px" }}>
        <div className="container">
          <span className="label" style={{ display: "block", marginBottom: "40px" }}>
            Operations
          </span>
          <div style={{ maxWidth: "380px" }}>
            {operations.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "20px" }}>
            Work with us.
          </h2>
          <p className="body-lg" style={{ marginBottom: "32px" }}>
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
