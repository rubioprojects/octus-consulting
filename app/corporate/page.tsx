import Link from "next/link";

export const metadata: import("next").Metadata = {
  title: "Corporate Structuring — Octus Consulting",
  description:
  robots: { index: false, follow: false },
    "Corporate architecture designed for regulated operations. Octus structures and coordinates international corporate setups, holding design, governance and ownership architecture — built to hold across jurisdictions.",
};

export default function CorporatePage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Corporate Structuring</span>
          <h1 className="heading-xl sp-headline">
            Corporate structure is not a formality.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It is the architecture the operation depends on.
            </span>
          </h1>
          <p className="body-lg sp-sub">
            Most corporate structures are designed for a single purpose — tax
            efficiency, incorporation speed or a specific transaction. They
            become a problem when the operation tries to license, open banking
            or expand across jurisdictions.
          </p>
          <p className="body-lg sp-sub" style={{ marginTop: "16px" }}>
            Octus structures and coordinates corporate architecture designed
            for regulated operations — across US structures (including
            Delaware), European frameworks (Malta, Cyprus, Portugal, UK),
            Middle East (UAE), Asia (Singapore, Hong Kong) and selected
            offshore environments — ensuring alignment across regulatory,
            banking and operational requirements, working alongside
            jurisdiction-specific corporate and accounting expertise where
            required.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Design your structure →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE CORPORATE STRUCTURE FAILS ─────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Where corporate structure fails</span>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            The structure was built for one thing.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              The operation required something different.
            </span>
          </h2>
          <p className="body" style={{ marginBottom: "32px", color: "var(--white-60)" }}>
            Corporate structure defines how the operation is owned, controlled,
            financed and scaled. It also determines what is possible — which
            licenses are available, which banks will operate and which
            jurisdictions will accept the entity.{" "}
            <span style={{ color: "var(--blue-light)" }}>
              Banking outcomes are a direct consequence of corporate structure.
            </span>
          </p>
          <ul className="problem-list">
            {[
              "Holding structure optimised for tax — incompatible with the licensing jurisdiction's regulatory and UBO requirements",
              "Corporate entities set up quickly for a transaction — no governance framework, no operational coherence across jurisdictions",
              "Expansion into a new regulated market with existing group structure that cannot support local regulatory requirements",
              "Banking rejected because the ownership and corporate chain does not satisfy the bank's due diligence standards",
              "Reorganisation needed but no one has mapped the regulatory, banking and tax consequences across all entities simultaneously",
              "Private wealth and operating entities mixed in a structure that creates exposure under regulatory and banking scrutiny",
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
            A corporate structure that works for one layer but fails under
            another is not an architecture.{" "}
            <span style={{ color: "var(--blue-light)" }}>
              It is a liability waiting to surface.
            </span>
          </p>
        </div>
      </section>

      {/* ─── APPROACH ─────────────────────────────────────────────── */}
      <section className="section-blue section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Our approach</span>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Designed for the full operational stack.
            <br />
            <span style={{ color: "var(--blue-light)" }}>
              Not for a single layer.
            </span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Octus structures corporate architecture starting from the
            operational reality — what the business does, where it operates,
            what regulators require and what banks need to see — and coordinates
            the corporate design to support all of it simultaneously.
          </p>
          <p className="body" style={{ marginBottom: "20px" }}>
            Regulatory requirements, banking access, UBO disclosure and
            governance design are not separate workstreams. They are constraints
            that the corporate structure must satisfy at the same time. Most
            corporate failures happen because these layers were designed
            independently.
          </p>
          <p className="body">
            Octus coordinates the architecture as a single integrated structure
            — working alongside the appropriate financial, tax and corporate
            specialists required for each jurisdiction. Where local accounting
            or corporate execution is required by law, Octus coordinates that
            layer and ensures it is aligned with the overall structure.
          </p>
        </div>
      </section>

      {/* ─── WHAT WE STRUCTURE ────────────────────────────────────── */}
      <section className="sp-what section-padded">
        <div className="container">
          <span className="label">What we structure and coordinate</span>
          <h2 className="heading-lg sp-headline">
            Corporate architecture across the full operational stack.
          </h2>
          <p className="body-lg sp-what-body" style={{ marginBottom: "64px" }}>
            From entity design to governance and reorganisation — structures
            coordinated to hold across regulatory, banking and operational
            requirements.
          </p>

          <div className="grid-auto-lg">
            {[
              {
                title: "International Corporate Structuring",
                body: "Onshore and offshore corporate structures for regulated operations — designed to satisfy regulatory requirements, support banking access and operate coherently across jurisdictions. Not built for a single purpose.",
              },
              {
                title: "Holding & Group Architecture",
                body: "Holding structures and group entity design coordinated across regulatory, banking and operational layers — aligned with UBO disclosure requirements, licensing conditions and the actual commercial model of the business.",
              },
              {
                title: "Governance Architecture",
                body: "Governance frameworks designed for regulated operations — board structure, decision rights, internal controls and oversight aligned with what regulators expect and what the business actually needs to operate.",
              },
              {
                title: "Corporate Reorganisation",
                body: "Restructuring of existing corporate architectures — for operations entering new regulated markets, undergoing regulatory transition, expanding across jurisdictions or preparing for institutional scrutiny.",
              },
              {
                title: "Ownership & UBO Structuring",
                body: "Ownership and personal holding structures for individuals behind complex regulated operations — designed to manage UBO exposure, banking risk and regulatory disclosure requirements without unnecessary complexity.",
              },
              {
                title: "Cross-border Entity Coordination",
                body: "For groups operating across multiple jurisdictions — coordinating entity design, inter-company relationships and governance so the corporate architecture holds under the regulatory and banking standards of each market.",
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
          <span className="label">How corporate connects with the rest</span>
          <h2 className="heading-md" style={{ marginBottom: "48px", maxWidth: "700px" }}>
            Corporate architecture is not built in isolation.
          </h2>
          <div className="grid-3">
            {[
              {
                layer: "Corporate + Regulatory",
                body: "The corporate structure determines which licenses are available, what UBO disclosure is required and whether the regulator will approve the operation. Entity design and licensing strategy must be coordinated from the start.",
              },
              {
                layer: "Corporate + Banking",
                body: "Banks assess corporate structure, ownership chains and governance before account opening. A structure that satisfies the regulator but cannot pass banking due diligence is not a working structure.",
              },
              {
                layer: "Corporate + Compliance",
                body: "KYC, AML and data protection obligations flow through the corporate structure. Gaps in entity design or governance create compliance failures that surface under regulatory review or banking scrutiny.",
              },
            ].map((item) => (
              <div key={item.layer} className="card-lg">
                <h3
                  className="heading-card"
                  style={{ color: "var(--blue-light)", marginBottom: "12px" }}
                >
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
                tag: "Holding · Regulatory",
                title: "Holding designed for tax.\nIncompatible with licensing.",
                body: "Group with existing holding structure attempting to license in a regulated jurisdiction. Holding architecture redesigned, UBO chain reconfigured and corporate documentation aligned with regulatory requirements. Licensing process relaunched in the correct structure.",
              },
              {
                tag: "Banking · Corporate",
                title: "Corporate structure\nrejected by three banks.",
                body: "Operator with regulatory approval and compliant corporate structure unable to open banking across three institutions. Corporate chain, governance documentation and UBO presentation restructured to meet banking standards. Account operational on fourth application.",
              },
              {
                tag: "Cross-border · Expansion",
                title: "Multi-jurisdiction group.\nNo structural coherence.",
                body: "Group with entities across four jurisdictions — no inter-company framework, inconsistent governance, regulatory misalignment across markets. Full architectural review and corporate structure coordinated across all jurisdictions simultaneously.",
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
            Operations where corporate structure determines what is possible.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                name: "Regulated businesses entering new markets",
                desc: "Companies structuring international operations — where the corporate design must satisfy regulatory requirements, banking standards and operational needs in the target jurisdiction from the start.",
              },
              {
                name: "Groups with existing structures that no longer hold",
                desc: "Businesses with corporate architectures built for a previous stage — licensing transitions, expansion into stricter environments or regulatory changes that the current structure cannot support.",
              },
              {
                name: "High-risk and complex operations",
                desc: "iGaming, fintech, crypto and other regulated sectors where regulators and banks apply heightened scrutiny to ownership structure, UBO chains and corporate governance.",
              },
              {
                name: "Private clients and family structures",
                desc: "High-net-worth individuals and families behind regulated operations who need personal and corporate structures coordinated — managing UBO exposure, regulatory risk and banking access simultaneously.",
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
              { step: "01", title: "Structural mapping", body: "We assess how the operation is owned, controlled and financed — and where the corporate architecture diverges from what the operation actually requires." },
              { step: "02", title: "Corporate design", body: "We structure the right corporate architecture across jurisdictions, aligned with regulatory requirements, banking access and operational governance." },
              { step: "03", title: "Coordination", body: "We coordinate local corporate and accounting execution where required by law, ensuring the full structure holds across all relevant jurisdictions." },
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
              { q: "Why is corporate structure such a critical issue?", a: "Because it defines ownership, control, capital flow and scalability. If the structure is misaligned, the entire operation becomes fragile — at licensing, banking and regulatory review." },
              { q: "Can banking fail because of corporate structure?", a: "Yes. Banking outcomes are a direct consequence of how the corporate structure is designed. UBO presentation, governance and entity chain all affect whether accounts can be opened." },
              { q: "Do you directly provide accounting services?", a: "No. Octus structures and coordinates the corporate and financial layer, working alongside jurisdiction-specific accounting and corporate expertise where required by local law." },
              { q: "Can we reorganise after the structure is already in place?", a: "Yes, but the cost, timing and risk depend on how far the current structure diverges from what the operation actually needs. Earlier is almost always better." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
                <h3 className="heading-card" style={{ marginBottom: "12px", color: "var(--white)" }}>{item.q}</h3>
                <p className="body">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}}
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body" style={{ color: "var(--white-40)", marginBottom: "12px" }}>
            If your corporate structure needs to hold under regulatory, banking
            and operational pressure —
          </p>
          <h2 className="heading-lg cta-block__title">
            Design it before it becomes a problem.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Design your structure →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by mapping where the structure
            breaks.
          </p>
        </div>
      </section>

    </main>
  );
}
