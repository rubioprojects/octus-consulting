import Link from "next/link";
import {
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_DISCUSS,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";
import OctusChapterTransition from "../../components/system/OctusChapterTransition";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "About",
  description:
    "Octus structures, coordinates and operates the work behind regulated businesses across regulatory, compliance, banking and corporate layers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Octus"
        title="Octus structures, coordinates and operates"
        titleSecondLine="the work behind regulated businesses."
        description={
          <>
            We go beyond written advice by structuring, coordinating and operating the work
            required across regulatory, compliance, banking and corporate layers.
          </>
        }
        primaryCta={{
          href: WHATSAPP_DISCUSS_URL,
          label: CTA_DISCUSS_LABEL,
          external: true,
        }}
      />

      {/* ─── WHAT OCTUS IS ────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">What Octus actually is</span>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Structuring, coordinating and operating what others only advise on.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Octus acts as the central coordination and execution layer behind regulated
            businesses. We enter the structure, coordinate the required workstreams and remain
            accountable for the work within our mandate.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            Clients bring us in when licensing is stuck, banking is blocked,
            compliance is failing or a structure needs to be rebuilt from the
            ground up. We step in, diagnose the structural failure and fix it.
          </p>
          <p className="body-text">
            Octus structures what needs to hold, and coordinates until it
            actually does.
          </p>
        </div>
      </section>

      <OctusChapterTransition />

      {/* ─── HOW WE WORK ──────────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <OctusEditorialDivider className="mb-10 ml-0 mr-auto" />
          <span className="label">How we work</span>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            We act as lead contractor.
            <br />
            <span style={{ color: "var(--blue-light)" }}>
              One accountable execution layer.
            </span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Most operations fail because regulatory, legal, compliance and
            banking are treated as separate workstreams. Each moves at its own
            pace, managed by different providers, with no one accountable for
            the whole.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            Octus coordinates the entire structure from jurisdiction selection
            and licensing strategy through compliance operations and corporate
            architecture, as a single execution layer.
          </p>
          <p className="body-text">
            Operators work with one point of contact accountable for the structure
            that needs to hold.
          </p>
        </div>
      </section>

      {/* ─── WHEN CLIENTS COME ────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">When clients come to us</span>
          <h2 className="heading-lg text-balance" style={{ marginBottom: "56px", maxWidth: "700px" }}>
            Often when the structure can no longer hold under pressure.
          </h2>
          <div className="grid-3">
            {[
              {
                title: "The operation is licensed but not running",
                body: "License approved. No bank account. AML rejected. PSPs refusing to onboard. The structure that was supposed to enable the operation doesn't. We enter and fix it.",
              },
              {
                title: "The process is stuck mid-way",
                body: "Licensing delayed, compliance failing under scrutiny, or corporate structure incompatible with what regulators or banks actually require. We diagnose the structural gap and take over.",
              },
              {
                title: "The expansion is structurally unprepared",
                body: "New regulated market, complex setup across jurisdictions, or transition from offshore to regulated. Entry structured before the consequences of a wrong decision become irreversible.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border">
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p className="body-text">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OctusChapterTransition />

      {/* ─── WHERE WE COME FROM ───────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Where we come from</span>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Built inside complexity. Applied across regulated sectors.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Octus was built operating inside high-risk regulated environments
            since 2019, including iGaming, one of the most structurally
            demanding regulated sectors in the world. We have been inside
            regulatory transitions, laboratory certifications, banking
            structures and cross-border operations, not observing them.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            That experience (how operations actually break, and what is
            required to fix them) is what we apply across every regulated
            industry today: fintech, payments, crypto, VASP, forex, corporate
            structuring and international market entry.
          </p>
          <p className="body-text">
            The sector changes. The structural problem does not.
          </p>
        </div>
      </section>

      {/* ─── AUTHORITY ────────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">What we have done</span>
          <h2 className="heading-section" style={{ marginBottom: "48px", maxWidth: "700px" }}>
            Real operations under real pressure.
          </h2>
          <div className="grid-2">
            <div>
              <div
                className="about-authority-panel"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
                  gap: "1px",
                  background: "var(--border-solid)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "24px",
                }}
              >
                <div className="card" style={{ borderRadius: "0", border: "none" }}>
                  <p className="stat-num">2019</p>
                  <p className="stat-label">Operating since</p>
                </div>
                <div style={{ position: "relative", minHeight: "140px", background: "#0B1220" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/team-group.jpg"
                    alt="Octus team at work"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 30%",
                      filter: "grayscale(1) contrast(1.05)",
                      display: "block",
                    }}
                  />
                </div>
              </div>
              <div className="juris-strip">
                <p className="juris-strip-label">Markets and jurisdictions where Octus has coordinated work</p>
                <div className="chip-row">
                  {["Brazil (SPA/MF)", "UK", "Malta (MGA)", "UAE", "Curaçao", "Cyprus", "BVI", "Cayman", "Portugal", "Italy"].map((j) => (
                    <span key={j} className="chip-juris">{j}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "32px" }}>What we have structured</p>
              <ul className="check-list">
                {[
                  "Offshore and onshore licensing workstreams across multiple jurisdictions",
                  "Corporate structures for international groups entering regulated markets",
                  "Compliance and AML operations for high-risk businesses",
                  "Workstreams involving regulators such as SPA/MF and MGA, and laboratory or certification providers such as GLI, without implying preferred-provider status",
                  "Banking and payment infrastructure for operations with restricted access",
                  "Cross-border structures for expansion into emerging regulated markets",
                  "Laboratory certification readiness and technical compliance coordination",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ─────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Who we work with</span>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Operators building serious businesses in regulated environments.
          </h2>
          <p className="body-lg" style={{ marginBottom: "48px", maxWidth: "640px", color: "var(--white-60)" }}>
            We work with operations where failure has real financial and regulatory
            consequences, and where structural design has to hold under scrutiny.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                name: "Companies entering regulated markets",
                desc: "Operators structuring market entry across new jurisdictions, with licensing, corporate structure, compliance and banking built together from the start.",
              },
              {
                name: "Operations under regulatory or banking pressure",
                desc: "Businesses with licensing delays, blocked accounts, compliance failures or regulatory escalation that need structural intervention.",
              },
              {
                name: "Groups restructuring for compliance or scale",
                desc: "International groups that need corporate structures, governance and compliance frameworks rebuilt to support growth or regulatory requirements.",
              },
              {
                name: "Businesses expanding across jurisdictions",
                desc: "Operations moving into new markets (LATAM, Africa, Europe) where regulatory, compliance and corporate layers need to be coordinated simultaneously.",
              },
            ].map((item) => (
              <div key={item.name} className="card">
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>
                  {item.name}
                </h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JURISDICTION COORDINATION ────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How execution works</span>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            One point of responsibility.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Coordinated execution across jurisdictions.
            </span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Regulated operations that span multiple jurisdictions require local expertise in
            legal systems, banking environments, regulatory bodies and corporate frameworks.
            Octus coordinates that layer as part of a single integrated structure.
          </p>
          <p className="body-text">
            Clients do not manage multiple providers across multiple markets.
            Where local execution is required, Octus structures and coordinates
            jurisdiction-specific expertise as part of one operating model, with a
            single point of responsibility throughout.
          </p>
        </div>
      </section>

      {/* ─── OPERATING CAPABILITIES ───────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Relevant operating capabilities</span>
          <h2 className="heading-section" style={{ marginBottom: "16px", maxWidth: "640px" }}>
            Environments and disciplines Octus coordinates in regulated work.
          </h2>
          <p className="body-lg" style={{ marginBottom: "48px", maxWidth: "640px", color: "var(--white-60)" }}>
            Octus operates in environments that require structured compliance,
            technical readiness and regulatory alignment that extends beyond documentation.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                name: "Data protection coordination (GDPR contexts)",
                desc: "Coordination of data-protection workstreams for operations that must meet European privacy requirements in day-to-day practice.",
              },
              {
                name: "Data protection coordination (LGPD contexts)",
                desc: "Coordination of Brazilian data-protection obligations and operational expectations for regulated businesses.",
              },
              {
                name: "Governance and accountability design",
                desc: "Design of decision rights, controls and accountability patterns for high-scrutiny regulated operations.",
              },
              {
                name: "Certification and laboratory readiness",
                desc: "Preparation of evidence and operating posture for laboratory and technical certification processes when the programme requires them.",
              },
            ].map((item) => (
              <div key={item.name} className="card" style={{ borderLeft: "2px solid var(--blue-border)" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{item.name}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OctusChapterTransition />

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your operation depends on regulatory approval, compliance
            integrity and structural stability,
          </p>
          <h2 className="heading-lg cta-block__title">
            Build a structure that works under scrutiny.
          </h2>
          <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: "16px" }}>
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
              href="/how-we-engage"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-10 text-base font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              How we engage →
            </Link>
          </div>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by identifying where the
            structure breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
