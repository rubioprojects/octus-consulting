import Link from "next/link";

export const metadata = {
  title: "UAE / Dubai — Octus Consulting",
  description:
    "Most companies fail in the UAE before they even choose the right authority. Octus structures operations aligned with the correct regulator, entity type and activity from day one.",
};

export default function JurisdictionsUaePage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Jurisdictions · UAE / Dubai</span>
          <h1 className="heading-xl sp-headline">
            Most companies fail in the UAE before they even choose the right authority.
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "620px" }}>
            Not because the UAE is unclear. Because they treat it as a single jurisdiction. It is not.
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
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            The UAE is not one licensing regime. It is a landscape of overlapping authorities.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              "VARA (Dubai) for virtual assets",
              "ADGM and DIFC for financial services",
              "Mainland structures for specific operational models",
              "Central bank for banking and payments",
              "SCA for securities and commodities",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="body">
            Each comes with different expectations, different timelines and different levels of scrutiny. Corporate tax at 9% on profits above AED 375,000. Free zone entities may qualify for 0% on qualifying income. No personal income tax.
          </p>
          <p className="body" style={{ marginTop: "20px" }}>
            Choosing wrong does not delay your operation. It breaks it.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What this jurisdiction allows.
          </h2>
          <p className="body" style={{ marginBottom: "16px", color: "var(--white)" }}>The UAE enables:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Regulated crypto and virtual asset operations (VARA, ADGM FSRA)",
              "Payment, fintech and financial services structures",
              "International group structuring with operational presence",
              "Access to Middle East, Africa and Asia markets",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginBottom: "16px", color: "var(--white)" }}>But:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Not every activity fits every authority",
              "Not every licence supports real operations",
              "Not every approved structure is bankable",
              "Free zone vs mainland creates operational scope limitations most operators discover too late",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--white-40)", marginTop: "2px", flexShrink: 0 }}>—</span>
                <p className="body" style={{ color: "var(--white-60)" }}>{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px" }}>
            A licence in the UAE is not the outcome. A viable structure is.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What most people get wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "They choose the authority based on speed, not fit.",
              "They assume \"Dubai licence\" is a single concept.",
              "They separate licensing from banking strategy.",
              "They build entities before defining the operating model.",
              "They underestimate substance and governance requirements.",
            ].map((item) => (
              <div key={item} className="card" style={{ padding: "20px 24px" }}>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px" }}>
            The result: wrong regulator, misaligned structure, delayed or rejected applications. Or worse: approved but non-operational entities.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What we actually structure.
          </h2>
          <p className="body" style={{ marginBottom: "28px" }}>
            We do not set up companies in the UAE. We design regulatory-ready
            operations aligned with the correct authority from day one.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Regulatory positioning", "VARA vs ADGM vs DIFC vs mainland, based on actual activity. Licensing path aligned with product, geography and risk."],
              ["Entity and group architecture", "HoldCo / OpCo structuring where required. Separation of risk, ownership and operations. Free zone vs mainland aligned to operational scope."],
              ["Operational model", "Where the activity actually sits. How funds move. What is regulated and where."],
              ["Compliance infrastructure", "AML/KYC frameworks aligned with UAE Federal AML Law and authority-specific requirements. Governance that survives regulatory scrutiny."],
              ["Banking and payments strategy", "Designed in parallel, not after approval. Avoiding the most common failure: licensed but unbanked."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "24px", color: "var(--white)" }}>
            We structure first. Licensing follows.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px" }}>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>Makes sense</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Building a regulated crypto or fintech operation with regional ambition.",
                  "Structuring an international group with real substance in the UAE.",
                  "Need credible jurisdiction positioning for partners and investors.",
                  "Understand that regulatory complexity is part of the build.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p className="body-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--white-40)" }}>Does not</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Looking for a fast or low-cost licence.",
                  "Want to test and adapt later.",
                  "Do not have a defined operating model.",
                  "Expect the licence to solve structural problems.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--white-40)", marginTop: "2px", flexShrink: 0 }}>—</span>
                    <p className="body-sm" style={{ color: "var(--white-40)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="body" style={{ marginTop: "32px" }}>
            The UAE will not compensate for weak structure. It will expose it.
          </p>
        </div>
      </section>

      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            What happens if you get this wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Apply to the wrong authority and restart the process.",
              "Build an entity that cannot support the activity.",
              "Secure a licence but fail to obtain banking.",
              "Face regulatory friction before or after approval.",
              "Forced into costly restructures under pressure.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: "20px" }}>
            Most of these failures happen before the application is submitted.
          </p>
        </div>
      </section>

      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Fintech Licensing", desc: "How the licensing process is structured", href: "/solutions/regulatory/fintech-licensing" },
              { title: "Banking & Payments", desc: "Why banking defines viability", href: "/solutions/regulatory/banking-payments" },
              { title: "Offshore Structuring", desc: "How the UAE fits within a broader group", href: "/solutions/corporate/offshore-structuring" },
              { title: "Crypto", desc: "VASP regulation and structural consequences", href: "/markets/crypto" },
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
          <h2 className="heading-lg cta-block__title">
            Design for the right authority. Not for the right postcode.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a structural assessment →
          </Link>
          <p className="body-sm" style={{ color: "var(--white-25)", marginTop: "16px" }}>
            We review your intended operation, map the correct regulatory path
            and define what needs to be built. If there is no viable structure,
            we will tell you upfront.
          </p>
        </div>
      </section>
    </main>
  );
}
