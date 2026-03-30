import Link from "next/link";

export const metadata = {
  title: "International Hub — Octus Consulting",
  description:
    "Market entry and cross-border coordination for regulated operations. Octus structures international expansion across jurisdictions — from jurisdiction mapping to full operational setup.",
};

export default function InternationalHubPage() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">International Hub</span>
          <h1 className="heading-xl sp-headline">
            Entering a regulated market
            <br />
            <span style={{ color: "var(--white-40)" }}>
              is a structural decision, not a location choice.
            </span>
          </h1>
          <p className="body-lg sp-sub">
            The decision to enter a new regulated market sets in motion a
            sequence of structural requirements — regulatory, corporate,
            compliance and banking — that must be aligned before the first
            commercial step. Most market entries fail because the structure was
            not prepared for the market they entered.
          </p>
          <p className="body-lg sp-sub" style={{ marginTop: "16px" }}>
            Octus coordinates international market entry and cross-border
            expansion — from jurisdiction selection and regulatory mapping to
            operational setup and ongoing multi-jurisdiction coordination.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Expand internationally →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE ENTRY FAILS ────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Where international entry fails</span>
          <h2 className="heading-md" style={{ marginBottom: "32px" }}>
            The market was right.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              The structure was not.
            </span>
          </h2>
          <ul className="problem-list">
            {[
              "Jurisdiction selected based on market opportunity — without mapping the regulatory, banking and corporate requirements of operating there",
              "Market entry initiated before the licensing timeline was understood — creating commercial commitments that regulatory reality cannot support",
              "Corporate structure from the existing group used for a new jurisdiction — incompatible with local regulatory and UBO requirements",
              "Banking and payment infrastructure not established before commercial launch — operational dependency without the infrastructure to support it",
              "Multi-jurisdiction expansion with no central coordination — each market set up independently, creating structural inconsistency across the group",
              "Entry into an emerging or transitioning regulated market without a strategy for regulatory uncertainty — structure built for a framework that changes mid-process",
            ].map((item) => (
              <li key={item}>
                <span className="problem-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── APPROACH ─────────────────────────────────────────────── */}
      <section className="section-blue section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">Our approach</span>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Entry is coordinated, not improvised.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Octus coordinates international market entry as a single integrated
            process — regulatory mapping, jurisdiction selection, corporate
            structuring, licensing strategy, compliance setup and banking
            access, aligned and executed in the right sequence.
          </p>
          <p className="body" style={{ marginBottom: "20px" }}>
            For cross-border expansion, we maintain structural coherence across
            jurisdictions — ensuring that what works in one market does not
            create problems in another.
          </p>
          <p className="body">
            We have structured market entry across established offshore
            frameworks, regulated European environments, LATAM markets in active
            regulatory transition and frontier regulated markets in Africa and
            Asia — working alongside jurisdiction-specific expertise where
            required.
          </p>
        </div>
      </section>

      {/* ─── WHAT WE COORDINATE ───────────────────────────────────── */}
      <section className="sp-what section-padded">
        <div className="container">
          <span className="label">What we coordinate</span>
          <h2 className="heading-lg sp-headline">
            From first mapping to full operational setup.
          </h2>
          <p className="body-lg sp-what-body" style={{ marginBottom: "64px" }}>
            Every international entry requires a different scope. Octus
            coordinates whatever the operation needs — from pre-entry strategy
            to ongoing multi-jurisdiction management.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                title: "Market Entry Strategy",
                body: "Regulatory mapping, jurisdiction fit assessment and entry sequencing — structured before commercial commitments are made. What market, what structure, in what order.",
              },
              {
                title: "Jurisdiction Selection & Risk Mapping",
                body: "Systematic analysis of target jurisdictions — regulatory requirements, licensing timelines, banking access, tax environment and operational risk — structured to support the decision, not just describe the options.",
              },
              {
                title: "Cross-border Operational Setup",
                body: "Coordination of the full operational setup for a new market — corporate structure, regulatory filing, compliance framework, banking access and operational infrastructure, aligned across all requirements simultaneously.",
              },
              {
                title: "Multi-jurisdiction Coordination",
                body: "For groups operating across multiple markets — maintaining structural coherence across jurisdictions, managing regulatory and banking requirements in each market and ensuring the group architecture holds as the operation scales.",
              },
              {
                title: "Emerging Market Entry",
                body: "Structured entry into LATAM, Africa and other markets in active regulatory transition — where the framework is still evolving and the entry structure must be designed to adapt without restart.",
              },
              {
                title: "Expansion Planning & Sequencing",
                body: "For operations planning multi-market expansion — mapping the right order of entry, identifying structural dependencies and ensuring each new market is set up without creating problems for existing operations.",
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

      {/* ─── MARKETS ──────────────────────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container">
          <span className="label">Markets we structure</span>
          <h2 className="heading-md" style={{ marginBottom: "16px" }}>
            Across four regulatory environments.
          </h2>
          <p className="body-lg" style={{ marginBottom: "48px", maxWidth: "640px", color: "var(--white-60)" }}>
            Each environment requires a different approach. The selection
            depends on the operation&apos;s commercial model, risk profile and
            expansion timeline.
          </p>
          <div className="grid-3">
            {[
              {
                layer: "Offshore frameworks",
                desc: "Curaçao, Anjouan and equivalent offshore licensing environments — selected for speed, flexibility and operational fit, not as a default. Structured to support banking access and regulatory credibility.",
              },
              {
                layer: "Regulated environments",
                desc: "Brazil (SPA/MF), UK, Malta, Cyprus, Portugal, Italy and other jurisdictions with established regulatory frameworks — where full regulatory compliance and direct regulator interaction are required.",
              },
              {
                layer: "Emerging markets",
                desc: "LATAM (Brazil, Peru and other markets in transition), Africa (Nigeria and others) and Asia — where market entry strategy must account for regulatory uncertainty and framework evolution.",
              },
            ].map((t) => (
              <div key={t.layer} className="card-lg">
                <h3
                  className="heading-card"
                  style={{ color: "var(--blue-light)", marginBottom: "12px" }}
                >
                  {t.layer}
                </h3>
                <p className="body">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="body-sm" style={{ marginTop: "32px", color: "var(--white-25)" }}>
            Each market is structured based on operational fit, not convenience.
            Additional jurisdictions covered case by case.
          </p>
        </div>
      </section>


      {/* ─── HOW THE PROCESS WORKS ────────────────────────────── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="label">How the process works</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Market review", body: "We assess target jurisdictions, regulatory requirements, banking access and sequencing before any expansion commitment is made." },
              { step: "02", title: "Structure design", body: "We define how regulatory, legal, corporate and operational layers should be coordinated for the specific market and operational model." },
              { step: "03", title: "International coordination", body: "We coordinate the entry or expansion process across jurisdictions, counterparties and local execution requirements." },
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
              { q: "Is this just expansion strategy advice?", a: "No. This is structural coordination for operations moving across jurisdictions — ensuring the architecture holds before commercial commitments are made." },
              { q: "Can we enter multiple markets simultaneously?", a: "Sometimes, yes. Parallel expansion only works when the structure supports it. We assess whether it is viable and coordinate the sequencing if it is." },
              { q: "Do you work only in regulated markets?", a: "Mostly. Our model is built for operations where structure, regulatory scrutiny and jurisdictional fit determine whether the expansion works." },
              { q: "What if we already operate internationally but the setup is fragmented?", a: "That is one of the most common situations we work on. The objective is to rebuild coherence before the fragmentation creates failures across the group." },
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
            If your operation is expanding into a new regulated market —
          </p>
          <h2 className="heading-lg cta-block__title">
            Structure the entry before you commit to the market.
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Expand internationally →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Initial diagnostic call. We start by mapping the regulatory and
            structural requirements of the target market.
          </p>
        </div>
      </section>

    </main>
  );
}
