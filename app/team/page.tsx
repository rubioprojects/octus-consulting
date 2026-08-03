import Link from "next/link";
import {
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_DISCUSS,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import DarkHeroAtmosphere from "../../components/system/DarkHeroAtmosphere";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Team",
  description:
    "Octus leadership and practice leads across regulatory, compliance, legal, corporate and international workstreams.",
  path: "/team",
});

type Member = {
  name: string;
  title: string;
  photo: string;
  focus: string;
  linkedin: string | null;
  capability?: string;
  featured?: boolean;
  photoKey?: string;
};

/**
 * Verified public roster inside closed-model composition.
 * Larissa / Bianca / Luciana held at NEEDS RUBIO — see evidence decision register.
 */
const leadership: Member[] = [
  {
    name: "Rubio Teixeira",
    title: "Founder & CEO",
    photo: "/team/rubio-teixeira.jpg",
    photoKey: "rubio",
    focus:
      "Executive and strategic oversight of Octus regulatory, licensing and market-entry mandates.",
    linkedin: "https://www.linkedin.com/in/rubioteixeiraoctus/",
  },
  {
    name: "Maria Cristina",
    title: "Operations Coordination",
    photo: "/team/maria-cristina.jpg",
    photoKey: "maria",
    focus:
      "Operational coordination and client engagement across regulatory, compliance and remediation mandates.",
    linkedin: "https://www.linkedin.com/in/maria-cristina-060241b6/",
  },
];

const leadershipSupport: Member[] = [
  {
    name: "Rodrigo Coelho Lopes",
    title: "Legal Architecture Lead",
    photo: "/team/rodrigo-lopes.jpg",
    photoKey: "rodrigo",
    capability: "Strategic legal architecture",
    focus:
      "Legal architecture for regulatory and corporate mandates, including cross-border structure.",
    linkedin: null,
  },
];

const operationalLeadership: Member[] = [
  {
    name: "Claudia Nery",
    title: "Chief Financial Officer",
    photo: "/team/claudia-nery.jpg",
    photoKey: "claudia",
    capability: "Financial continuity",
    focus:
      "Corporate and financial architecture, financial governance and group reporting.",
    linkedin: "https://www.linkedin.com/in/claudia-nery/",
    featured: true,
  },
];

const specialists: Member[] = [
  {
    name: "Esther Vendrami",
    title: "International Regulatory & Compliance Lead",
    photo: "/team/esther-vendrami.jpg",
    photoKey: "esther",
    capability: "International regulatory",
    focus:
      "International regulatory and licensing coordination, with compliance operations for cross-border programmes.",
    linkedin: "https://www.linkedin.com/in/esthervendrami/",
    featured: true,
  },
  {
    name: "Caroline Giovanetti",
    title: "Brazil Regulatory Lead",
    photo: "/team/caroline-giovanetti.jpg",
    photoKey: "caroline",
    capability: "Brazil regulatory",
    focus:
      "Brazil regulatory processes and SPA/MF licensing support for Brazil-facing mandates.",
    linkedin: "https://www.linkedin.com/in/caroline-cubas-giovanetti-400820144/",
    featured: true,
  },
  {
    name: "Milla Ludovico",
    title: "Business Development Lead",
    photo: "/team/milla-ludovico.jpg",
    photoKey: "milla",
    capability: "Commercial intake",
    focus:
      "New business development, client intake and commercial coordination on new mandates.",
    linkedin: "https://www.linkedin.com/in/milla-ludovico-6a9945a2/",
    featured: true,
  },
];

function MemberCard({
  member,
  tier,
}: {
  member: Member;
  tier:
    | "leadership"
    | "leadership-support"
    | "operational-leadership"
    | "specialist";
}) {
  const photoClass =
    member.photoKey === "rubio"
      ? "team-photo--rubio team-photo--rubio-team"
      : member.photoKey
        ? `team-photo--${member.photoKey}`
        : "";

  const inner = (
    <article className={`team-card team-card--${tier}`}>
      <div className={`team-card-photo-wrap ${photoClass}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={member.photo} alt="" className="team-card-photo" aria-hidden="true" />
      </div>
      {member.capability && <p className="team-capability">{member.capability}</p>}
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
        <div className="octus-hero-copy relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Our Team</span>
          <h1 className="font-heading text-[1.85rem] font-bold leading-[1.18] tracking-tight text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08] sp-headline">
            People who understand how regulated operations hold together.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--text-secondary-on-dark)] sm:text-lg">
            Accountability starts with clear leadership. Octus is built around people who take
            ownership inside complex regulated environments and execute with operational clarity.
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

          <div className="team-grid team-grid--leadership-support">
            {leadershipSupport.map((m) => (
              <MemberCard key={m.name} member={m} tier="leadership-support" />
            ))}
          </div>

          <p className="team-band-label">Operational Leadership</p>
          <div className="team-grid team-grid--operational-leadership mb-16">
            {operationalLeadership.map((m) => (
              <MemberCard key={m.name} member={m} tier="operational-leadership" />
            ))}
          </div>

          <p className="team-band-label">Core Specialists</p>
          <div className="team-grid team-grid--core mb-16">
            {specialists.map((m) => (
              <MemberCard key={m.name} member={m} tier="specialist" />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block surface-dark">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title" style={{ marginBottom: "20px", color: "#fff" }}>
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
