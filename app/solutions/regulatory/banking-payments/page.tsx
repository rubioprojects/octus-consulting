import Link from "next/link";

export const metadata = {
  title: "Banking & Payments — Octus Consulting",
  description:
    "Banks do not reject your business. They reject your structure. Octus designs banking strategy, compliance documentation and payment infrastructure for regulated and high-risk operations.",
};

export default function BankingPaymentsPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Regulatory · Banking & Payments</span>
          <h1 className="heading-xl sp-headline">
            Banks do not reject your business.
            <br />
            <span style={{ color: "var(--white-40)" }}>They reject your structure.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "660px" }}>
            Banking access for regulated and high-risk operations depends on
            corporate design, compliance documentation, licensing status and
            jurisdiction. When banking fails, it is almost never the bank. It
            is the structure the bank is evaluating.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request a banking assessment →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Why banking fails</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            The account is not the problem. The structure behind it is.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "AML documentation designed for the regulator, not for the bank.",
                body: "Banks apply their own threshold. Below it, the account is declined or terminated.",
              },
              {
                title: "Corporate structure creates risk flags.",
                body: "Offshore entities, nominee directors and complex UBO chains trigger enhanced due diligence.",
              },
              {
                title: "Single provider dependency.",
                body: "One bank. One PSP. One acquirer. When any exits, the operation stops.",
              },
              {
                title: "Licensing does not unlock banking automatically.",
                body: "Banks evaluate the licence, the compliance, the structure and the substance independently.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "28px" }}>
            Most operators respond by looking for another bank. The pattern repeats.
            Because the structure has not changed.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Banking strategy designed before the first application.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Banking readiness assessment", "Gap analysis between current structure and what banking partners require."],
              ["Compliance documentation", "AML/KYC, transaction monitoring, SAR procedures rebuilt to banking standards. Not regulatory standards — banking standards."],
              ["Corporate restructuring", "Entity design, jurisdiction, governance and UBO alignment optimised for banking risk assessment."],
              ["Multi-bank strategy", "Parallel coordination with multiple banking partners. No single point of failure. If one exits, operations continue."],
              ["PSP and acquirer alignment", "Payment processor onboarding coordinated with compliance and licensing status."],
              ["Safeguarding arrangements", "Client fund segregation structured for EMI/PI requirements and banking partner expectations."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px", color: "var(--white)" }}>
            Banking is not the last step. It is a design constraint that shapes every structural decision from the beginning.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What happens if you get this wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Accounts declined or terminated without explanation.",
              "PSP churn — every new provider applies the same assessment to the same structure.",
              "Operations halted with no contingency.",
              "Licensing investment wasted because the operation cannot process payments.",
              "Months of searching for banking that the structure will never unlock.",
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
          <p className="label">Selected mandates</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              ["Case 1 · iGaming · Curaçao", "Licence active 6 months. No operational account.", "AML documentation did not meet banking standards. Octus restructured compliance and coordinated with three institutions. Account operational in 11 weeks."],
              ["Case 2 · Payments · Cross-border", "PSP terminated. Operations halted.", "Single provider dependency, no contingency. Octus restructured payment infrastructure across multiple providers and jurisdictions. Processing restored within 4 weeks."],
              ["Case 3 · Fintech · EU", "Licensed EMI. Banks refused onboarding.", "Safeguarding and AML documentation insufficient for banking due diligence. Octus rebuilt compliance layer and coordinated with specialist partners. Accounts operational."],
            ].map(([tag, title, body], index) => (
              <div key={title} style={{ padding: "24px 0", borderBottom: index < 2 ? "1px solid var(--border)" : "none" }}>
                <span className="case-tag">{tag}</span>
                <h3 className="heading-card" style={{ marginTop: "12px", marginBottom: "8px" }}>{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            This is for operations where banking is a structural constraint.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Banking declined or terminated and the pattern repeats.",
              "Payment processing dependent on a single provider.",
              "Licensed but banking remains blocked.",
              "Expanding and need banking in place before launch.",
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
              "Looking for a bank that does not ask questions.",
              "Unwilling to restructure compliance or corporate design.",
              "Banking difficulty caused by activity that is not licensable.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--white-40)", marginTop: "2px", flexShrink: 0 }}>—</span>
                <p className="body" style={{ color: "var(--white-40)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "iGaming Licensing", desc: "Banking integral to licensing", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Fintech Licensing", desc: "EMI/PI banking and safeguarding", href: "/solutions/regulatory/fintech-licensing" },
              { title: "Compliance-as-a-Service", desc: "Compliance banks accept", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "AML/KYC", desc: "Documentation to banking standards", href: "/solutions/compliance/aml-kyc" },
              { title: "High-Risk Operations", desc: "Banking under classification pressure", href: "/markets/high-risk" },
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
            If banking keeps failing, the structure keeps failing.
          </p>
          <h2 className="heading-lg cta-block__title">
            Fix the structure. The banking follows.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a banking assessment →
          </Link>
        </div>
      </section>
    </main>
  );
}
