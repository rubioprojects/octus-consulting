import Link from "next/link";

export const metadata = {
  title: "AML & KYC Framework — Compliance That Holds | Octus",
  description:
    "AML/KYC compliance frameworks for regulated operations. Built to survive real audit, not to sit in a folder. Transaction monitoring, risk assessment and regulatory reporting.",
};

export default function SolutionsAMLKYCPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Compliance · AML & KYC</span>
          <h1 className="heading-xl sp-headline">
            Your AML framework looks good on paper.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              The question is whether it survives an audit.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "640px" }}>
            Most compliance frameworks are built to check a box. They pass
            internal review. They don&apos;t pass regulatory scrutiny, banking
            due diligence, or a real-world audit. We build the ones that do.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Fix your compliance structure →
            </Link>
            <Link href="/compliance" className="btn-ghost">
              Full compliance services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE REAL PROBLEM ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Why most AML frameworks fail.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            They were written by lawyers who never operated a compliance desk.
            The policies exist. The procedures are documented. But when the
            regulator asks for evidence of implementation: transaction
            monitoring logs, SAR filing records, training completion records,
            risk assessment updates. There&apos;s nothing there.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The framework existed. The compliance function didn&apos;t.
          </p>
          <p
            className="heading-sm"
            style={{ color: "var(--white)", borderTop: "1px solid var(--border)", paddingTop: "24px", marginTop: "8px" }}
          >
            Policies are not compliance.{" "}
            <span style={{ color: "var(--blue-light)" }}>Evidence is.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE BUILD ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">What we build</p>
          <h2 className="heading-md" style={{ marginBottom: "40px" }}>
            A compliance function. Not a document set.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "AML policy & program design",
                desc: "Tailored to your sector, jurisdiction and risk profile. Not a template. A framework designed for your specific regulatory environment.",
              },
              {
                title: "KYC & customer onboarding",
                desc: "Risk-based customer due diligence, enhanced due diligence, PEP/sanctions screening and ongoing monitoring procedures.",
              },
              {
                title: "Transaction monitoring",
                desc: "Rules, thresholds, escalation procedures and reporting workflows. Designed to catch what matters, not generate noise.",
              },
              {
                title: "Risk assessment",
                desc: "Business-wide risk assessment, customer risk scoring and product/channel risk analysis. Updated periodically, not once.",
              },
              {
                title: "SAR/STR reporting",
                desc: "Suspicious activity identification, internal escalation, regulatory reporting procedures and documentation standards.",
              },
              {
                title: "Training & awareness",
                desc: "Staff training program, completion tracking, refresher cycles and role-specific compliance education.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                title: "iGaming operator — compliance remediation",
                body: "Flagged by regulator for compliance gaps. Full AML/KYC rebuild: policies, procedures, monitoring rules, evidence register. Cleared within 8 weeks.",
              },
              {
                title: "Fintech — banking due diligence recovery",
                body: "Rejected by 3 banks for inadequate AML framework. We rebuilt the program, aligned it with banking risk requirements and coordinated re-application. Accounts opened.",
              },
              {
                title: "Multi-jurisdiction operator — unified framework",
                body: "Compliance framework harmonized across 3 jurisdictions with local adaptations. Single policy architecture, jurisdiction-specific procedures.",
              },
              {
                title: "GLI audit preparation",
                body: "Full evidence register, compliance documentation and readiness pack delivered in 6 weeks. Client entered audit with complete documentation and zero critical findings.",
              },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 0",
                  borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                }}
              >
                <h3 className="heading-card" style={{ marginBottom: "8px", color: "var(--white)" }}>
                  {m.title}
                </h3>
                <p className="body" style={{ color: "var(--white-60)" }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Who this is for</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Operations where compliance is not optional.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Compliance framework exists but doesn't hold under real scrutiny",
              "Bank or payment provider rejected you for AML gaps",
              "Regulatory inquiry or audit scheduled, not prepared",
              "Expanding to a new jurisdiction and need a compliant framework from day one",
              "Operating without a dedicated compliance function",
              "Existing framework is template-based, not tailored to your operation",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-3">
            {[
              { title: "Compliance & Risk", desc: "Full compliance services beyond AML.", href: "/compliance" },
              { title: "Audit & Readiness", desc: "Prepared for scrutiny before it arrives.", href: "/audit" },
              { title: "iGaming Operations", desc: "Compliance in the iGaming context.", href: "/markets/igaming" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Compliance is not a document. It&apos;s an operational function.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build it to survive. Not to check a box.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Fix your compliance structure →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
