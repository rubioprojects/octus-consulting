import Link from "next/link";

export const metadata = {
  title: "GLI & Certification Readiness — Octus Consulting",
  description:
    "The audit does not find problems. It confirms they were always there. Octus prepares operations for certification and regulatory review before the auditor arrives.",
};

export default function GliReadinessPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Compliance · GLI & Certification Readiness</span>
          <h1 className="heading-xl sp-headline">
            The audit does not find problems.
            <br />
            <span style={{ color: "var(--white-40)" }}>It confirms they were always there.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "660px" }}>
            GLI certification, ISO audits and regulatory reviews reveal gaps
            that existed since launch. The difference between passing and
            failing is whether readiness was built before scrutiny arrived.
          </p>
          <p className="body-lg sp-sub" style={{ maxWidth: "660px", marginTop: "16px" }}>
            Octus prepares the operation for audit. It does not act as the certifying or auditing body.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request a readiness assessment →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Problem</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Evidence is scattered. No register, no version control, no audit trail.",
              "Policies exist but do not match actual operations. What is written is not what happens.",
              "The team has never been through a formal review. Questions they cannot answer become findings.",
              "Gaps found internally are fixable. Gaps found externally are expensive.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px" }}>
            Readiness is not a last-minute exercise. It is a structural build.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">What we actually build</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Gap analysis", "Comprehensive review against certification or audit requirements."],
              ["Evidence framework", "Structured register, version control, document mapping aligned to audit criteria."],
              ["Remediation", "Closing gaps with operational changes, not documentation updates."],
              ["Mock audit", "Internal stress test simulating the formal review. Weaknesses found before they become findings."],
              ["Coordination", "Direct coordination with GLI, certification bodies and regulatory authorities."],
              ["Team preparation", "Key personnel understand the process, respond to questions, demonstrate competence."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px" }}>
            <strong style={{ color: "var(--white)" }}>Scope:</strong> GLI certification,
            ISO 27001, ISO 37001, regulatory inspections, banking due diligence
            audits, MONEYVAL-aligned AML reviews.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Critical findings create regulatory consequences and financial penalties.",
              "Failed certification delays market entry or triggers licence review.",
              "Banking partners lose confidence after adverse audit results.",
              "Remediation under pressure costs 3-5x more than preparation.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Qualification</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Audit or certification scheduled and readiness uncertain.",
              "Documentation does not match operations.",
              "Previous audit had critical findings needing remediation.",
              "Entering a jurisdiction with mandatory certification requirements.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <h3 className="heading-card" style={{ marginBottom: "12px" }}>Not for you if</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Looking for someone to conduct the formal audit itself.",
              "Compliance maturity is already confirmed and tested.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--white-40)", marginTop: "2px", flexShrink: 0 }}>—</span>
                <p className="body" style={{ color: "var(--white-40)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Compliance-as-a-Service", desc: "Prevents audit gaps", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "Internal Controls", desc: "Governance that supports readiness", href: "/solutions/compliance/internal-controls" },
              { title: "AML/KYC", desc: "What auditors evaluate first", href: "/solutions/compliance/aml-kyc" },
              { title: "Audit & Readiness", desc: "Full pillar", href: "/audit" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{item.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{item.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            If the evidence is not ready before the audit, the findings are already written.
          </p>
          <h2 className="heading-lg cta-block__title">
            Prepare before scrutiny arrives.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a readiness assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
