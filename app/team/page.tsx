import Link from "next/link";
import {
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_DISCUSS,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import DarkHeroAtmosphere from "../../components/system/DarkHeroAtmosphere";

export const metadata = {
  title: "Team",
  description:
    "The people behind Octus. A team with operational depth across regulatory structuring, compliance, legal architecture, corporate design and international market entry.",
};

type Member = {
  name: string;
  title: string;
  photo: string;
  focus: string;
  linkedin: string | null;
  capability?: string;
  photoKey?: string;
};

/** Approved leadership pair - current PR titles only. */
const leadership: Member[] = [
  {
    name: "Rubio Teixeira",
    title: "Founder & CEO",
    photo: "/team/rubio-teixeira.jpg",
    photoKey: "rubio",
    focus:
      "Regulatory structuring, international licensing and market entry strategy. Operational presence across Brazil, Portugal, EU and offshore jurisdictions since 2019.",
    linkedin: "https://www.linkedin.com/in/rubioteixeiraoctus/",
  },
  {
    name: "Maria Cristina",
    title: "Operations Coordination",
    photo: "/team/maria-cristina.jpg",
    photoKey: "maria",
    focus:
      "Operational coordination and client engagement across Octus' regulatory and compliance mandates. Senior depth across regulated markets in Brazil and internationally.",
    linkedin: "https://www.linkedin.com/in/maria-cristina-060241b6/",
  },
];

/** Current PR roster excluding leadership - Core Specialists band. */
const specialists: Member[] = [
  {
    name: "Rodrigo Coelho Lopes",
    title: "Legal Architecture Lead",
    photo: "/team/rodrigo-lopes.jpg",
    photoKey: "rodrigo",
    capability: "Legal architecture",
    focus:
      "Legal strategy and coordination across the group's regulatory and corporate mandates. Oversight of legal architecture, cross-border structure and jurisdictional risk.",
    linkedin: null,
  },
  {
    name: "Claudia Nery",
    title: "Chief Financial Officer",
    photo: "/team/claudia-nery.jpg",
    photoKey: "claudia",
    capability: "Financial governance",
    focus:
      "Corporate and financial architecture. Financial governance, group structuring and reporting across jurisdictions.",
    linkedin: "https://www.linkedin.com/in/claudia-nery/",
  },
  {
    name: "Esther Vendrami",
    title: "International Regulatory & Compliance Lead",
    photo: "/team/esther-vendrami.jpg",
    photoKey: "esther",
    capability: "International regulatory",
    focus:
      "International licensing, outsourced compliance operations (CO as a service), company formations and banking access across offshore and regulated environments.",
    linkedin: "https://www.linkedin.com/in/esthervendrami/",
  },
  {
    name: "Caroline Giovanetti",
    title: "Brazil Regulatory Lead",
    photo: "/team/caroline-giovanetti.jpg",
    photoKey: "caroline",
    capability: "Brazil regulatory",
    focus:
      "Regulatory processes, licensing and administrative operations for Brazil. Coordination of all Brazil-facing regulatory and compliance activities.",
    linkedin: "https://www.linkedin.com/in/caroline-cubas-giovanetti-400820144/",
  },
  {
    name: "Milla Ludovico",
    title: "Business Development Lead",
    photo: "/team/milla-ludovico.jpg",
    photoKey: "milla",
    capability: "Commercial intake",
    focus:
      "New business development, client intake and commercial strategy. Works directly with the founding team across new mandates and market opportunities.",
    linkedin: "https://www.linkedin.com/in/milla-ludovico-6a9945a2/",
  },
  {
    name: "Bianca Carolina Oliveira Andrade",
    title: "People & Operations",
    photo: "/team/bianca.jpg",
    photoKey: "bianca",
    capability: "People & delivery",
    focus:
      "People operations, talent coordination and internal processes. Supports team structure, recruitment and operational management across the Octus group.",
    linkedin: "https://www.linkedin.com/in/rh2463365recursoshumanos/",
  },
  {
    name: "Larissa Carvalho",
    title: "Regulatory & Compliance Specialist",
    photo: "/team/larissa-carvalho.jpg",
    photoKey: "larissa",
    capability: "Regulatory & compliance",
    focus:
      "Operational support across regulatory and compliance engagements. Coordination of documentation, processes and deliverables shared with clients.",
    linkedin: "https://www.linkedin.com/in/larissaocarvalho/",
  },
  {
    name: "Daniel Cruz Fonseca",
    title: "Regulatory & Compliance Specialist",
    photo: "/team-daniel.jpg",
    photoKey: "daniel",
    capability: "Regulatory & compliance",
    focus:
      "Regulatory and compliance structuring across iGaming, fintech and betting. Multi-jurisdictional experience: Curaçao, Malta, Isle of Man, Dubai, Anjouan.",
    linkedin: null,
  },
  {
    name: "Luciana Santos Veloso",
    title: "Operations Coordinator",
    photo: "/team-luciana.jpg",
    photoKey: "luciana",
    capability: "Operations",
    focus:
      "Operational workflows, client documentation and cross-functional coordination across multiple jurisdictions.",
    linkedin: null,
  },
];

function MemberCard({
  member,
  tier,
}: {
  member: Member;
  tier: "leadership" | "specialist";
}) {
  const inner = (
    <article className={`team-card team-card--${tier}`}>
      <div
        className={`team-card-photo-wrap${member.photoKey ? ` team-photo--${member.photoKey}` : ""}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={member.photo} alt="" className="team-card-photo" aria-hidden="true" />
      </div>
      {member.capability ? <p className="team-capability">{member.capability}</p> : null}
      <h3 className="heading-sm" style={{ marginBottom: "6px" }}>
        {member.name}
      </h3>
      <p className="team-card-role">{member.title}</p>
      <p className="body-sm">{member.focus}</p>
    </article>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="team-card-link"
        aria-label={`${member.name} on LinkedIn`}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export default function TeamPage() {
  return (
    <main>
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Our Team</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            People who understand how regulated operations hold together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Accountability starts with clear leadership. Octus is built around people who work
            inside complex regulated environments, not a generic advisory directory.
          </p>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="team-band-label">Leadership</p>
          <div className="team-grid team-grid--leadership">
            {leadership.map((m) => (
              <MemberCard key={m.name} member={m} tier="leadership" />
            ))}
          </div>

          <p className="team-band-label">Core Specialists</p>
          <div className="team-grid team-grid--core">
            {specialists.map((m) => (
              <MemberCard key={m.name} member={m} tier="specialist" />
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
          <p className="body-large" style={{ marginBottom: "32px", color: "rgba(255,255,255,0.78)" }}>
            We work with operators who need regulatory clarity, operational discipline and
            structures that survive scrutiny.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {CTA_DISCUSS_LABEL}
            </a>
            <a
              href={MAILTO_DISCUSS}
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-10 text-base font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              {CTA_EMAIL_LABEL}
            </a>
            <Link
              href="/careers"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-10 text-base font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              See careers →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
