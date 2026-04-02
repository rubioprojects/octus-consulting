import Link from "next/link";

export const metadata = {
  title: "Audit & Readiness — Octus Consulting",
  description:
    "Preparation for regulatory audit, certification and external scrutiny. Octus structures the evidence, closes the gaps and coordinates readiness before scrutiny arrives.",
};

export default function AuditPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Audit & Readiness</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Prepare for scrutiny
            <br />
            <span style={{ color: "var(--white-40)" }}>
              before scrutiny arrives.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl">
            Regulatory audit, laboratory certification and external review do
            not create problems. They reveal problems that were already there.
            The question is whether those problems are discovered before or
            during the process.
          </p>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ marginTop: "16px" }}>
            Octus prepares the operation for audit, certification and
            regulatory review — it does not act as the certifying or auditing
            body. This is readiness built before scrutiny starts.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
              Stress-test your operation →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE AUDIT FAILS ────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Where audit preparation fails</span>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            The audit doesn&apos;t fail during the audit.
            <br />
            <span className="text-muted-foreground">
              It fails in the preparation.
            </span>
          </h2>
          <ul className="problem-list">
            {[
              "Compliance framework exists on paper but evidence of actual operation cannot be produced at audit",
              "Gap analysis done internally — gaps identified but not closed before the external review",
              "GLI or regulatory audit scheduled without a structured evidence register — documentation spread across systems and individuals",
              "Certification attempted without a mock audit — first test of readiness happens in front of the auditor",
              "Remediation items from a previous audit still open when the next cycle starts",
              "Operational changes made after certification — creating drift between the certified state and the actual operation",
            ].map((item) => (
              <li key={item}>
                <span className="problem-dot" />
                {item}
              </li>
            ))}
          </ul>
          <p
            className="heading-sm text-foreground"
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid var(--border-solid)",
            }}
          >
            An operation that is not ready for audit is not compliant.{" "}
            <span className="text-primary">
              It has simply not been tested yet.
            </span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE STRUCTURE ────────────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">What we structure</span>
          <h2 className="heading-lg sp-headline">
            Readiness as an operational state,
            not a pre-audit exercise.
          </h2>
          <p className="body-lg sp-what-body" style={{ marginBottom: "64px" }}>
            Audit preparation is not a one-time project before a review. It is
            a continuous operational condition. Octus structures the gap
            analysis, evidence architecture and remediation process — so
            readiness is embedded, not rushed.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                title: "Gap Analysis & Risk Assessment",
                body: "Systematic identification of structural gaps across compliance, documentation and operational controls — assessed against the specific regulatory or certification standard being targeted.",
              },
              {
                title: "Evidence Register & Documentation Architecture",
                body: "Structuring of the evidence base required for audit — organised by control, mapped to regulatory requirement and maintained in a state that can be produced on demand.",
              },
              {
                title: "Pre-audit Preparation",
                body: "Full readiness preparation before a scheduled regulatory audit, GLI certification or external review — gap closure, evidence organisation, process alignment and direct coordination with the audit team.",
              },
              {
                title: "Mock Audit & Readiness Testing",
                body: "Simulated audit process against the relevant standard — identifying weaknesses in the evidence base, documentation and operational controls before the actual review.",
              },
              {
                title: "GLI & Technical Compliance Readiness",
                body: "Specialist preparation for gaming laboratory certification — gap analysis against GLI technical standards, evidence register construction and coordination with the laboratory across the review process.",
              },
              {
                title: "Post-audit Remediation",
                body: "Structured remediation of audit findings — identifying root causes, closing gaps and applying changes to prevent recurrence. Coordinated to maintain operational continuity during the remediation process.",
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

      {/* ─── REAL SITUATIONS ──────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Real situations. Real outcomes.</span>
          <h2 className="heading-section" style={{ marginBottom: "56px" }}>Not theory.</h2>
          <div className="grid-3">
            {[
              {
                tag: "Compliance · Audit readiness",
                title: "GLI audit scheduled.\nNo evidence organized.",
                body: "Full gap analysis, evidence register and readiness pack delivered in 6 weeks. Client entered audit with complete documentation and zero critical findings.",
              },
              {
                tag: "Regulatory · Remediation",
                title: "Audit findings open.\nNext cycle approaching.",
                body: "Operator with unresolved remediation items from a previous regulatory review. Root cause analysis, gap closure and documentation rebuild completed before the next audit cycle. All items closed.",
              },
              {
                tag: "Compliance · ISO readiness",
                title: "ISO certification targeted.\nProcesses not documented.",
                body: "Company targeting ISO 27001 without documented processes or evidence architecture. Full control framework structured, evidence registers built and mock audit completed. Certification obtained on first submission.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <span className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-accent">{c.tag}</span>
                <h3 className="mb-4 whitespace-pre-line font-sans text-lg font-semibold text-primary">{c.title}</h3>
                <p className="body-text">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── HOW THE PROCESS WORKS ────────────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">How the process works</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Readiness assessment", body: "We map the gaps between the operation as it runs and the requirements of the audit, certification or regulatory review it needs to pass." },
              { step: "02", title: "Evidence and control structure", body: "We organise the controls, documentation and evidence base required to support the operation under external scrutiny." },
              { step: "03", title: "Remediation and coordination", body: "We coordinate the fixes required so the operation enters the review already prepared — not scrambling during it." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px", padding: "28px 0", borderBottom: i < 2 ? "1px solid var(--border-solid)" : "none" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)", paddingTop: "4px" }}>{s.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Common questions</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { q: "Do you perform formal audits?", a: "No. Octus prepares the operation for audit, certification and regulatory review — it does not act as the certifying or auditing body." },
              { q: "When should readiness work start?", a: "Before the audit or certification process is scheduled. Late preparation compresses timelines, increases pressure and reduces the quality of the outcome." },
              { q: "What kind of gaps do you typically find?", a: "Usually: control gaps, missing evidence, fragmented process ownership and frameworks that exist on paper but do not operate in practice." },
              { q: "Is this only relevant for certification?", a: "No. The same readiness logic applies to labs, certifiers, counterparties, investors, banks and regulators. Any external scrutiny requires the same preparation." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border-solid)" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.q}</h3>
                <p className="body-text">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATION ENVIRONMENTS ───────────────────────── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Certification and review environments</span>
          <h2 className="heading-section" style={{ marginBottom: "20px" }}>
            Prepared for operations that need to stand up to external scrutiny.
          </h2>
          <p className="body-lg" style={{ marginBottom: "40px" }}>
            Audit and certification do not start when the review begins. They
            start with how the operation is structured. Octus prepares
            operations to meet the expectations of laboratories, certifiers,
            counterparties and regulators — before scrutiny starts.
          </p>
          <ul className="check-list" style={{ marginBottom: "32px" }}>
            {[
              "GLI and technical certification environments — preparation for testing, certification and technical validation",
              "ISO-aligned operational structures — frameworks designed to support certification and audit requirements",
              "GDPR and LGPD compliance environments — structures aligned with European and Brazilian data protection standards",
              "Internal and external audit readiness — evidence, controls and processes prepared for independent review",
              "Counterparty and banking due diligence — operational readiness for financial institutions, partners and investors",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="body-sm text-muted-foreground italic">
            Octus prepares the operation for audit and certification — it does
            not act as the certifying or auditing body.
          </p>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your operation needs to hold under regulatory, certification or
            external scrutiny —
          </p>
          <h2 className="heading-lg cta-block__title">
            Don&apos;t find out during the audit.
          </h2>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
            Stress-test your operation →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by mapping where the gaps are.
          </p>
        </div>
      </section>

    </main>
  );
}
