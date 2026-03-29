import Link from "next/link";

export const metadata = {
  title: "Legal & Structural Architecture — Octus Consulting",
  description:
    "Legal architecture is not documentation. It is the structural backbone behind regulated operations — contracts, corporate design, cross-border setups and governance that hold under real conditions.",
  robots: { index: false, follow: false },
};

export default function LegalArchitecturePage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Legal & Structural Architecture</span>
          <h1 className="heading-xl sp-headline">
            Legal structure is not paperwork.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It is what the operation runs on.
            </span>
          </h1>
          <p className="body-lg sp-sub">
            Most legal failures in regulated operations are not compliance
            failures or licensing failures. They are structural failures — wrong
            entity design, misaligned contracts, ownership structures that don&apos;t
            support the operation they were built for.
          </p>
          <p className="body-lg sp-sub" style={{ marginTop: "16px" }}>
            Octus structures and coordinates the legal architecture required for
            the operation — ensuring alignment across jurisdictions, regulatory
            requirements and banking conditions, working alongside
            jurisdiction-specific legal expertise where required.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Structure your legal framework →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE LEGAL STRUCTURE FAILS ──────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Where legal structure fails</span>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            The legal structure fails first.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Everything else follows.
            </span>
          </h2>
          <ul className="problem-list">
            {[
              "Corporate structure designed for tax efficiency — incompatible with the licensing jurisdiction's regulatory requirements",
              "Shareholder and UBO structure that works on paper but fails under regulatory disclosure obligations",
              "Contracts between group entities that don't reflect the operational reality — creating liability exposure at audit",
              "Holding structure built without considering banking access — entities that regulators accept but banks reject",
              "Cross-border operation with no legal coherence between jurisdictions — gaps that surface only under external scrutiny",
              "Governance model that cannot support expansion — correct for the current size, wrong for the next stage",
            ].map((item) => (
              <li key={item}>
                <span className="problem-dot" />
                {item}
              </li>
            ))}
          </ul>
          <p
            className="heading-sm"
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid var(--border)",
              color: "var(--white)",
            }}
          >
            Legal structure is not a document you prepare before the operation
            starts.{" "}
            <span style={{ color: "var(--blue-light)" }}>
              It is the architecture the operation runs on.
            </span>
          </p>
        </div>
      </section>

      {/* ─── HOW WE APPROACH ──────────────────────────────────────── */}
      <section className="section-blue section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Our approach</span>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Legal architecture is designed from the operation backward.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Octus structures and coordinates legal architecture starting from
            the operational requirements — what the business does, where it
            operates, who the regulators are and what the banking infrastructure
            requires — and then aligns the legal architecture to support all of
            it simultaneously.
          </p>
          <p className="body" style={{ marginBottom: "20px" }}>
            This is the opposite of how most legal structures are designed. Most
            are approached from a single angle — tax, incorporation, or a
            specific contract — and then adapted as the operation evolves.
            The result is structural fragmentation: a holding that doesn&apos;t
            support licensing, contracts that don&apos;t reflect operations,
            governance that doesn&apos;t scale.
          </p>
          <p className="body">
            Octus coordinates it as a single integrated architecture — designed
            to align across regulatory, banking and operational dimensions from
            the start.
          </p>
        </div>
      </section>

      {/* ─── WHAT WE STRUCTURE ────────────────────────────────────── */}
      <section className="sp-what section-padded">
        <div className="container">
          <span className="label">What we structure</span>
          <h2 className="heading-lg sp-headline">
            Legal architecture across the full operational stack.
          </h2>
          <p className="body-lg sp-what-body" style={{ marginBottom: "64px" }}>
            From entity design to contractual frameworks — structured to hold
            under regulatory scrutiny and operational reality.
          </p>

          <div className="grid-auto-lg">
            {[
              {
                title: "Corporate & Entity Structure",
                body: "Corporate structures for regulated operations coordinated end-to-end — onshore and offshore, holding and operational entities, aligned with licensing requirements, banking access and governance needs.",
              },
              {
                title: "Cross-border & Multi-jurisdiction Architecture",
                body: "Legal structures that operate coherently across jurisdictions — including inter-company agreements, operational frameworks and ownership design that holds under multiple regulatory systems simultaneously.",
              },
              {
                title: "UBO & Ownership Architecture",
                body: "Ultimate beneficial ownership structures designed to satisfy regulatory disclosure requirements while protecting operational integrity. Aligned with KYC/KYB standards across target jurisdictions.",
              },
              {
                title: "Contractual Frameworks",
                body: "Commercial and operational contractual frameworks structured to reflect the actual architecture of the business — service agreements, inter-company arrangements, operator agreements and regulatory documentation aligned with operational and regulatory reality.",
              },
              {
                title: "Governance Architecture",
                body: "Governance models designed for regulated operations — board structure, decision rights, internal controls and oversight frameworks that satisfy regulators and support operational scale.",
              },
              {
                title: "Corporate Reorganisation",
                body: "Restructuring of existing corporate architectures that no longer support the operation — for groups expanding into new markets, undergoing regulatory transition or preparing for institutional scrutiny.",
              },
            ].map((item) => (
              <div key={item.title} className="card-lg">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT CONNECTS ──────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container">
          <span className="label">How legal connects with the rest</span>
          <h2 className="heading-md" style={{ marginBottom: "48px", maxWidth: "700px" }}>
            Legal architecture does not operate in isolation.
          </h2>
          <div className="grid-3">
            {[
              {
                layer: "Legal + Regulatory",
                body: "The corporate structure must match the jurisdiction's licensing requirements. Entity design, UBO disclosure and governance are not separate from the regulatory process — they determine whether the license is granted.",
              },
              {
                layer: "Legal + Compliance",
                body: "Contracts and governance frameworks must reflect the compliance operation. KYC, AML and data protection obligations flow through legal structures — gaps in legal architecture create compliance failures.",
              },
              {
                layer: "Legal + Banking",
                body: "Banks assess legal structure before opening accounts. Holding design, UBO clarity, inter-company agreements and operational contracts all affect banking access — legal architecture is part of the banking strategy.",
              },
            ].map((item) => (
              <div key={item.layer} className="card-lg">
                <h3 className="heading-card" style={{ color: "var(--blue-light)", marginBottom: "12px" }}>
                  {item.layer}
                </h3>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REAL SITUATIONS ──────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "130px 40px" }}>
        <div className="container">
          <span className="label">Real situations. Real outcomes.</span>
          <h2 className="heading-md" style={{ marginBottom: "56px" }}>
            Not theory.
          </h2>
          <div className="grid-3">
            {[
              {
                tag: "Corporate · Restructuring",
                title: "Holding structure\nincompatible with licensing.",
                body: "Group with existing holding structure attempting to license in a jurisdiction that required a different entity design and UBO presentation. Corporate structure redesigned, inter-company agreements rebuilt and licensing process relaunched in the correct architecture.",
              },
              {
                tag: "Cross-border · Multi-jurisdiction",
                title: "Three jurisdictions.\nNo legal coherence.",
                body: "Operator with entities in three jurisdictions — no inter-company agreements, no operational contracts, no governance framework. Full architectural review, documentation rebuilt and structure aligned across all three regulatory environments.",
              },
              {
                tag: "Governance · Scale",
                title: "Governance model\nthat blocked banking.",
                body: "Operation with governance structure that satisfied the regulator but was rejected by two banks during account opening. Governance documentation redesigned and UBO presentation rebuilt to meet banking requirements without affecting regulatory position.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="card-lg"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span className="case-tag">{c.tag}</span>
                <h3
                  className="heading-sm"
                  style={{ margin: "16px 0", whiteSpace: "pre-line" }}
                >
                  {c.title}
                </h3>
                <p className="body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ──────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container">
          <span className="label">Who this is for</span>
          <h2 className="heading-md" style={{ marginBottom: "48px" }}>
            Operations where structure determines outcome.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                name: "International groups entering regulated markets",
                desc: "Businesses setting up in Brazil, EU, UK or offshore jurisdictions that need corporate and legal architecture aligned with regulatory and banking requirements from the start.",
              },
              {
                name: "Operations rebuilding for regulatory compliance",
                desc: "Businesses with existing structures that no longer hold under current regulatory requirements — licensing transitions, market changes or expansion into stricter environments.",
              },
              {
                name: "High-risk businesses requiring UBO clarity",
                desc: "iGaming, fintech, crypto and other sectors where regulators and banks scrutinise ownership structure, beneficial ownership disclosure and inter-company relationships.",
              },
              {
                name: "Groups preparing for institutional scrutiny",
                desc: "Operations preparing for regulatory audit, banking due diligence or external review — where legal and governance architecture needs to hold under structured examination.",
              },
            ].map((ind) => (
              <div key={ind.name} className="card">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>
                  {ind.name}
                </h3>
                <p className="body-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── HOW THE PROCESS WORKS ────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">How the process works</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Structural review", body: "We assess how the legal layer interacts with ownership, governance and the operating model — identifying where structure and legal architecture are misaligned." },
              { step: "02", title: "Architecture design", body: "We structure the legal framework required for the operation to hold across jurisdictions — built around operational requirements, not just regulatory text." },
              { step: "03", title: "Coordination", body: "We coordinate the legal architecture alongside jurisdiction-specific expertise where required — ensuring the entire structure holds simultaneously." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px", padding: "28px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontFamily: "var(--font-unigeo), Unigeo64, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--blue-light)", paddingTop: "4px" }}>{s.step}</span>
                <div>
                  <h3 className="heading-card" style={{ marginBottom: "8px" }}>{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padded" style={{ padding: "130px 40px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Common questions</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { q: "Is this the same as hiring a law firm?", a: "No. This is legal architecture as part of an operational structure, coordinated to align with regulatory, banking and corporate requirements simultaneously." },
              { q: "Do we need this if the company is already incorporated?", a: "Often yes. Existing entities are not always structured to match the regulatory, banking or ownership requirements of the operation they support." },
              { q: "Can legal structure affect licensing and banking outcomes?", a: "Directly. Ownership presentation, governance design and contractual architecture often determine whether the broader operational structure works or fails." },
              { q: "Do you work across multiple jurisdictions?", a: "Yes. The legal layer is typically coordinated across jurisdictions — depending on where ownership, operations and regulatory exposure sit." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px", color: "var(--white)" }}>{item.q}</h3>
                <p className="body">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your legal structure needs to hold under regulatory, banking and
            operational pressure —
          </p>
          <h2 className="heading-lg cta-block__title">
            Design it before it fails.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Structure your legal framework →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by mapping where the architecture breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
