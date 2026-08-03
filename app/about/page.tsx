import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
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
            We don&apos;t produce reports. We structure, coordinate and operate what needs to
            work across regulatory, compliance, banking and corporate layers simultaneously.
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
            Octus does not sit as a traditional advisor, law firm or vendor. It
            operates as the central execution layer behind regulated businesses
           : entering the structure, coordinating across layers and taking
            responsibility for what needs to work.
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

      {/* ─── HOW WE WORK ──────────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How we work</span>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            We act as lead contractor.
            <br />
            <span style={{ color: "var(--blue-light)" }}>
              Not as one more provider.
            </span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Most operations fail because regulatory, legal, compliance and
            banking are treated as separate workstreams. Each moves at its own
            pace, managed by different providers, with no one accountable for
            the whole.
          </p>
          <p className="body-text" style={{ marginBottom: "20px" }}>
            Octus coordinates the entire structure: from jurisdiction selection
            and licensing strategy to compliance operations and corporate
            architecture, as a single execution layer.
          </p>
          <p className="body-text">
            You don&apos;t manage multiple advisors. You have one point of contact
            accountable for the structure that needs to work.
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
                <p className="juris-strip-label">Markets and jurisdictions</p>
                <div className="chip-row">
                  {["Brazil (SPA/MF)", "UK", "Malta (MGA)", "UAE", "Curaçao", "Cyprus", "BVI", "Cayman", "Portugal", "Italy"].map((j) => (
                    <span key={j} className="chip-juris">{j}</span>
                  ))}
                  <span className="chip-juris-more">+more</span>
                </div>
              </div>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "32px" }}>What we have structured</p>
              <ul className="check-list">
                {[
                  "Offshore and onshore licensing across multiple jurisdictions",
                  "Corporate structures for international groups entering regulated markets",
                  "Compliance and AML operations for high-risk businesses",
                  "Direct interaction with regulatory authorities, including SPA/MF, MGA, GLI and others",
                  "Banking and payment infrastructure for operations with restricted access",
                  "Cross-border structures for expansion into emerging regulated markets",
                  "Laboratory certifications and technical compliance readiness",
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
            This is not for experimental setups. We work with operations where
            failure has real financial and regulatory consequences.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                name: "Companies entering regulated markets",
                desc: "Operators structuring market entry across new jurisdictions: licensing, corporate structure, compliance and banking, built together from the start.",
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
            Regulated operations that span multiple jurisdictions require
            local : in legal systems, banking environments,
            regulatory bodies and corporate frameworks. Octus coordinates
            that layer as part of a single integrated structure.
          </p>
          <p className="body-text">
            Clients do not manage multiple providers across multiple markets.
            Where local execution is required, Octus structures and
            coordinates jurisdiction-specific expertise as part of one
            operational , with a single point of responsibility
            throughout.
          </p>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Selected certifications and recognitions</span>
          <h2 className="heading-section" style={{ marginBottom: "16px", maxWidth: "640px" }}>
            Credentials and operational environments relevant to regulated,
            high-scrutiny structures.
          </h2>
          <p className="body-lg" style={{ marginBottom: "48px", maxWidth: "640px", color: "var(--white-60)" }}>
            Octus operates across environments that require structured compliance,
            technical readiness and regulatory , beyond documentation alone.
          </p>
          <div className="grid-auto-lg">
            {[
              { name: "GDPR & Data Protection", desc: "Structured to operate under European data protection and privacy requirements. Compliance coordination across GDPR-regulated jurisdictions." },
              { name: "LGPD Readiness (Brazil)", desc: "Aligned with Brazilian data protection obligations and operational enforcement expectations for regulated businesses." },
              { name: "ESG & Governance Standards", desc: "Experience in environments requiring governance discipline, transparency and institutional accountability standards." },
              { name: "Diversity & Institutional Recognition", desc: "Participation in programs and initiatives that reflect institutional accountability and representation in regulated markets." },
              { name: "Certification-ready Environments", desc: "Structures prepared to meet ISO, laboratory and technical certification requirements when applicable to the operation." },
            ].map((item) => (
              <div key={item.name} className="card" style={{ borderLeft: "2px solid var(--blue-border)" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{item.name}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your operation depends on regulatory approval, compliance
            integrity and structural stability,
          </p>
          <h2 className="heading-lg cta-block__title">
            You don&apos;t need more advisors.
            <br />You need a structure that works.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by identifying where the
            structure breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
