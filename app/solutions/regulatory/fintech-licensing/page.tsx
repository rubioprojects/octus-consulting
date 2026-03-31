import Link from "next/link";

export const metadata = {
  title: "Fintech Licensing — Octus Consulting",
  description:
    "EMI and Payment Institution licensing is not a filing exercise. Octus structures fintech operations so they can be authorised, operated and sustained under regulatory scrutiny.",
};

export default function FintechLicensingPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Solutions · Regulatory · Fintech Licensing</span>
          <h1 className="heading-xl sp-headline">
            A fintech licence is not a product launch.
            <br />
            <span style={{ color: "var(--white-40)" }}>It is a regulatory build.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "640px" }}>
            Most applications do not fail because of the regulator. They fail
            because the structure behind them was never built to pass.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request a structural assessment →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Where licensing fails</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Most fintech licensing failures are not rejections. They are predictable outcomes.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "The entity exists, but the operating model does not.",
                body: "The legal shell is in place, but there is no real regulatory logic behind how the business will function.",
              },
              {
                title: "The product is defined, but the regulatory perimeter is not.",
                body: "Founders know what they want to sell, but not what that means under EMI, PI, VASP or hybrid frameworks.",
              },
              {
                title: "The compliance framework is written, but not operational.",
                body: "Policies exist, but no one has built the systems, governance and monitoring needed for authorisation and post-launch scrutiny.",
              },
              {
                title: "The banking layer is missing or unstable.",
                body: "The application goes forward while banking and safeguarding remain unresolved, creating the classic licensed-but-unbankable problem.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "28px" }}>
            The application goes in. The regulator sees what the founders do not:
            a fragmented structure trying to pass as a regulated institution.
          </p>
          <p className="body" style={{ marginTop: "12px" }}>
            That does not get approved. Or worse: it gets approved and collapses post-launch.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            We do not handle applications. We structure fintech operations for authorisation.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Regulatory positioning", "EMI, PI, VASP or hybrid models defined correctly from day one. Jurisdiction selection aligned with product, geography and risk tolerance."],
              ["Entity and group architecture", "HoldCo / OpCo separation where needed. Governance aligned with regulatory expectations, not convenience."],
              ["Operational model", "How money moves. Who holds funds. Where risk sits. What is regulated and what is not."],
              ["Compliance infrastructure", "AML/KYC frameworks that are actually executable. Policies aligned with operations, not templates."],
              ["Banking and PSP strategy", "Access to payment rails designed in parallel, not after approval. Avoiding the most common failure: licensed but unbankable."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px", color: "var(--white)" }}>
            We design the structure first. Then the licence becomes a consequence.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Framework</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            PI or EMI. The licence type determines everything.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <p className="body"><strong style={{ color: "var(--white)" }}>Payment Institution (PI)</strong> — Payment processing, transfers, account services. No e-money issuance. Capital: EUR20k-EUR125k depending on scope.</p>
            <p className="body"><strong style={{ color: "var(--white)" }}>Electronic Money Institution (EMI)</strong> — All PI services plus e-money issuance, IBANs, wallets, prepaid. Client fund safeguarding mandatory. Capital: minimum EUR350k.</p>
            <p className="body"><strong style={{ color: "var(--white)" }}>Jurisdictions</strong> — Lithuania leads volume. Ireland and Malta established. Each regulator interprets PSD2/EMD2 differently.</p>
          </div>
          <p className="body" style={{ marginTop: "24px" }}>
            Octus does not recommend a jurisdiction based on speed or cost. The choice is driven by where the operation can sustain substance, compliance and banking long-term.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What happens if you get this wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Delays of 6-18 months.",
              "Rejections that damage future applications.",
              "Licensed entities without banking access.",
              "Compliance frameworks that collapse under audit.",
              "Forced restructures under regulatory pressure.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "20px" }}>
            Most of this is avoidable. If the structure is built correctly from the start.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              ["Case 1 · Fintech · EU", "EMI application rejected. Structure rebuilt.", "Initial application failed due to insufficient substance and safeguarding gaps. Octus redesigned corporate structure, rebuilt compliance documentation and coordinated resubmission. Authorisation granted on second application."],
              ["Case 2 · Payments · Cross-border", "Licensed but unable to bank.", "PI licence active but no banking partner would onboard. AML documentation did not meet banking standards. Octus restructured compliance and coordinated with specialist institutions. Account operational within 10 weeks."],
              ["Case 3 · Fintech · Passporting", "Authorised but blocked in target markets.", "EMI licence granted but passporting notifications rejected due to substance concerns. Octus restructured local presence, governance and operational controls. Passporting restored across 4 EU markets."],
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

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Fit</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What this is. And what it is not.
          </h2>
          <p className="body-lg" style={{ marginBottom: "16px" }}>
            This is not a filing service.
          </p>
          <p className="body" style={{ marginBottom: "20px" }}>
            We do not submit applications built on assumptions. We design regulatory-ready operations and take them through authorisation.
          </p>
          <p className="body" style={{ marginBottom: "24px" }}>
            If your objective is "get a licence fast", "test and see if it passes", or "use a template and adapt later" — this is not for you.
          </p>
          <h3 className="heading-card" style={{ marginBottom: "12px" }}>Who this is for</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Founders building regulated fintech products across multiple markets.",
              "Operators scaling into EMI/PI frameworks or adding regulated layers.",
              "Companies that have already failed once and need to rebuild properly.",
              "Businesses that understand licensing is infrastructure, not a checkbox.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <p className="body-sm" style={{ marginBottom: "20px", color: "var(--white-40)" }}>
            Where this is typically structured:{" "}
            <Link href="/jurisdictions/uae" style={{ color: "var(--blue-light)" }}>UAE</Link>
            {" · "}
            <Link href="/jurisdictions/portugal" style={{ color: "var(--blue-light)" }}>Portugal</Link>
          </p>
          <div className="grid-auto-lg">
            {[
              { title: "iGaming Licensing", desc: "Same structural logic, different regulatory framework", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Banking & Payments", desc: "The layer that fails most often post-authorisation", href: "/solutions/regulatory/banking-payments" },
              { title: "Market Entry", desc: "Jurisdiction selection as structural project", href: "/solutions/regulatory/market-entry" },
              { title: "Compliance-as-a-Service", desc: "What keeps the licence operational", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "AML/KYC", desc: "Compliance architecture for licensing and banking", href: "/solutions/compliance/aml-kyc" },
              { title: "Fintech & Payments", desc: "Sector overview", href: "/markets/fintech" },
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
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "8px" }}>
            Getting licensed is the first step. Without continuous compliance, the licence becomes a liability.
          </p>
          <h2 className="heading-lg cta-block__title">
            The regulator does not stop watching after authorisation.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a structural assessment →
          </Link>
          <p className="body-sm" style={{ color: "var(--white-25)", marginTop: "16px" }}>
            We review your current setup, identify structural gaps and define what needs to be built before any application is submitted. If there is no viable path, we will tell you upfront.
          </p>
        </div>
      </section>
    </main>
  );
}
