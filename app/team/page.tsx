import Link from "next/link";
import {
  CTA_DISCUSS_LABEL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import DarkHeroAtmosphere from "../../components/system/DarkHeroAtmosphere";
import { CtaLink } from "../../components/system/CtaButton";
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
  photoClass: string;
};

const leadership: Member[] = [
  {
    name: "Rubio Teixeira",
    title: "Founder & CEO",
    photo: "/team/rubio-teixeira.jpg",
    photoClass: "team-photo--rubio-team",
    focus:
      "Executive and strategic oversight of Octus regulatory, licensing and market-entry mandates.",
    linkedin: "https://www.linkedin.com/in/rubioteixeiraoctus/",
  },
  {
    name: "Maria Cristina",
    title: "Operations Coordination",
    photo: "/team/maria-cristina.jpg",
    photoClass: "team-photo--maria",
    focus:
      "Operational coordination and client engagement across regulatory, compliance and remediation mandates.",
    linkedin: "https://www.linkedin.com/in/maria-cristina-060241b6/",
  },
];

const practiceLeads: Member[] = [
  {
    name: "Esther Vendrami",
    title: "International Regulatory & Compliance Lead",
    photo: "/team/esther-vendrami.jpg",
    photoClass: "team-photo--esther",
    focus:
      "International regulatory and licensing coordination, with compliance operations for cross-border programmes.",
    linkedin: "https://www.linkedin.com/in/esthervendrami/",
  },
  {
    name: "Caroline Giovanetti",
    title: "Brazil Regulatory Lead",
    photo: "/team/caroline-giovanetti.jpg",
    photoClass: "team-photo--caroline",
    focus:
      "Brazil regulatory processes and SPA/MF licensing support for Brazil-facing mandates.",
    linkedin: "https://www.linkedin.com/in/caroline-cubas-giovanetti-400820144/",
  },
  {
    name: "Rodrigo Coelho Lopes",
    title: "Legal Architecture Lead",
    photo: "/team/rodrigo-lopes.jpg",
    photoClass: "team-photo--rodrigo",
    focus:
      "Legal architecture for regulatory and corporate mandates, including cross-border structure.",
    linkedin: null,
  },
  {
    name: "Claudia Nery",
    title: "Chief Financial Officer",
    photo: "/team/claudia-nery.jpg",
    photoClass: "team-photo--claudia",
    focus:
      "Corporate and financial architecture, financial governance and group reporting.",
    linkedin: "https://www.linkedin.com/in/claudia-nery/",
  },
];

const commercial: Member = {
  name: "Milla Ludovico",
  title: "Business Development Lead",
  photo: "/team/milla-ludovico.jpg",
  photoClass: "team-photo--milla",
  focus:
    "New business development, client intake and commercial coordination on new mandates.",
  linkedin: "https://www.linkedin.com/in/milla-ludovico-6a9945a2/",
};

function MemberCard({
  member,
  tier,
}: {
  member: Member;
  tier: "leadership" | "practice" | "commercial";
}) {
  const inner = (
    <article className={`team-card team-card--${tier === "leadership" ? "leadership" : "specialist"}${tier === "commercial" ? " team-card--commercial" : ""}`}>
      <div className={`team-card-photo-wrap ${member.photoClass}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={member.photo} alt="" className="team-card-photo" aria-hidden="true" />
      </div>
      <h2 className="heading-sm" style={{ marginBottom: "6px" }}>
        {member.name}
      </h2>
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
            Leadership and practice leads accountable for regulatory, compliance, legal, corporate
            and international execution.
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

          <p className="team-band-label">Practice Leads</p>
          <div className="team-grid team-grid--core">
            {practiceLeads.map((m) => (
              <MemberCard key={m.name} member={m} tier="practice" />
            ))}
          </div>

          <p className="team-band-label">Commercial &amp; Client Relations</p>
          <div className="team-grid team-grid--commercial max-w-md">
            <MemberCard member={commercial} tier="commercial" />
          </div>
        </div>
      </section>

      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-white md:text-3xl">
            Work with a team built for regulatory execution.
          </h2>
          <CtaLink
            href={WHATSAPP_DISCUSS_URL}
            variant="on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CTA_DISCUSS_LABEL}
          </CtaLink>
          <p className="mt-6">
            <Link
              href="/careers"
              className="font-sans text-sm text-white/55 no-underline hover:text-white/80"
            >
              See careers →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
