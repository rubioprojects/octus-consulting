import Link from "next/link";

export const metadata = {
  title: "Jurisdictions — Where We Structure Operations | Octus",
  description:
    "Active across 15+ jurisdictions. Licensing, compliance and corporate structuring in Brazil, Curaçao, Malta, Isle of Man, UAE and more.",
};

export default function JurisdictionsPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Jurisdictions</span>
          <h1 className="heading-xl sp-headline">
            Jurisdictions don&apos;t solve problems.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              Structures do.
            </span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "620px" }}>
            Choosing the right jurisdiction is a strategic decision that impacts
            regulation, banking access, operational flexibility and long-term
            scalability. Octus supports jurisdiction selection based on business
            model, capital structure and growth objectives, not generic
            preferences.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">
              Request a strategic assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW TO THINK ABOUT JURISDICTIONS ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            Jurisdictions are not interchangeable.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Each framework reflects a different balance between regulatory
            credibility, operational flexibility, cost and banking
            compatibility. The right choice depends on where your operation
            sits today, and where it needs to go.
          </p>

          {/* ─── 3-TIER FRAMEWORK ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "32px" }}>
            {[
              { tier: "Institutional", focus: "Credibility, banking alignment, long-term positioning", examples: "Isle of Man · Malta", profile: "Established operators, B2B providers, institutional growth" },
              { tier: "Structured", focus: "Operational balance, regulatory framework, scalability", examples: "Curaçao · Brazil", profile: "Growing operators, mid-market, regulated market entry" },
              { tier: "Tactical", focus: "Speed, flexibility, transitional entry", examples: "Anjouan", profile: "Early-stage or fast-moving operations" },
            ].map((t, i) => (
              <div key={t.tier} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", padding: "24px 0", borderBottom: i < 2 ? "1px solid var(--border)" : "none", alignItems: "start" }}>
                <span className="heading-card" style={{ fontSize: "13px", color: "var(--blue-light)", paddingTop: "2px" }}>{t.tier}</span>
                <div>
                  <p className="body" style={{ color: "var(--white)", marginBottom: "4px" }}>{t.focus}</p>
                  <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "4px" }}>{t.examples}</p>
                  <p className="body-sm" style={{ color: "var(--white-25)", fontStyle: "italic" }}>{t.profile}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIMARY JURISDICTIONS (pages exist, clickable) ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">Primary jurisdictions</p>
          <h2 className="heading-md" style={{ marginBottom: "16px" }}>
            Active execution, established processes.
          </h2>
          <p className="body" style={{ marginBottom: "40px", color: "var(--white-60)", maxWidth: "620px" }}>
            Primary jurisdictions represent the core licensing frameworks
            currently supported with active execution, established processes
            and ongoing mandates.
          </p>
          <div className="grid-3">
            {[
              {
                name: "Brazil",
                regulator: "SPA/MF · BACEN",
                sectors: "iGaming, Fintech, Payments",
                desc: "Sports betting authorization, payment institutions and fintech regulatory structuring for the Brazilian market.",
                href: "/brazil",
              },
              {
                name: "Curaçao",
                regulator: "GCB",
                sectors: "iGaming, Betting",
                desc: "iGaming licensing under the new regulatory framework. Entity, compliance and banking in one coordinated process.",
                href: "/jurisdictions/curacao",
              },
              {
                name: "Malta",
                regulator: "MGA · MFSA",
                sectors: "iGaming, Fintech, Crypto",
                desc: "B2C and B2B licensing. Tier-1 European jurisdiction with full regulatory and banking infrastructure.",
                href: "/jurisdictions/malta",
              },
            ].map((j) => (
              <Link key={j.name} href={j.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "4px" }}>{j.name}</h3>
                <p className="label" style={{ fontSize: "10px", marginBottom: "12px" }}>{j.regulator}</p>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{j.desc}</p>
                <div className="chip-row">
                  {j.sectors.split(", ").map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
                <span style={{ color: "var(--blue-light)", fontSize: "13px", marginTop: "12px", display: "block" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC JURISDICTIONS (non-clickable) ─── */}
      <section className="section-dark section-padded">
        <div className="container">
          <p className="label">Strategic jurisdictions</p>
          <h2 className="heading-md" style={{ marginBottom: "16px" }}>
            Selected frameworks for specific requirements.
          </h2>
          <p className="body" style={{ marginBottom: "32px", maxWidth: "680px", color: "var(--white-60)" }}>
            Octus supports selected strategic jurisdictions for clients
            requiring higher regulatory positioning or specific market access,
            depending on scale, structure and objectives.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                name: "Isle of Man",
                desc: "Tier-1 jurisdiction for operators and B2B providers prioritizing regulatory credibility, institutional positioning and long-term banking stability. Typically suitable for well-capitalized operations with a long-term market strategy.",
              },
              {
                name: "UK",
                desc: "Gambling Commission and FCA-regulated markets. High compliance bar, strong banking infrastructure and institutional credibility.",
              },
              {
                name: "Gibraltar",
                desc: "B2B and B2C licensing for operators with European and UK-facing operations. Strong regulatory reputation.",
              },
              {
                name: "UAE",
                desc: "Emerging regulatory hub for crypto and fintech. ADGM, DFSA and VARA frameworks with growing international recognition.",
              },
              {
                name: "Portugal",
                desc: "SRIJ-regulated iGaming market with local licensing requirements and EU market access.",
              },
              {
                name: "Cyprus",
                desc: "EU jurisdiction with growing regulatory infrastructure for fintech and gaming operations.",
              },
            ].map((j) => (
              <div key={j.name} className="card" style={{ padding: "24px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{j.name}</h3>
                <p className="body-sm" style={{ color: "var(--white-60)" }}>{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALTERNATIVE FRAMEWORKS (Anjouan — separate tier) ─── */}
      <section className="section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Alternative frameworks</p>
          <h2 className="heading-md" style={{ marginBottom: "16px" }}>
            Tactical and transitional options.
          </h2>
          <p className="body" style={{ marginBottom: "32px", color: "var(--white-60)" }}>
            Alternative frameworks are used selectively in scenarios where
            speed, flexibility or transitional strategies are prioritized over
            institutional positioning.
          </p>
          <div className="card" style={{ padding: "28px" }}>
            <h3 className="heading-card" style={{ marginBottom: "8px" }}>Anjouan</h3>
            <p className="body-sm" style={{ color: "var(--white-60)" }}>
              Alternative licensing framework used in specific scenarios
              requiring speed and flexibility, often as a transitional solution
              where regulatory flexibility outweighs institutional positioning.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OCTUS APPROACH ─── */}
      <section className="section-dark section-padded">
        <div className="container" style={{ maxWidth: "760px" }}>
          <p className="label">Our approach</p>
          <h2 className="heading-md" style={{ marginBottom: "24px" }}>
            We don&apos;t recommend jurisdictions based on popularity or cost.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Each licensing strategy is defined based on regulatory risk,
            operational structure, payment infrastructure and long-term
            objectives.
          </p>
          <p className="body">
            In many cases, the optimal approach involves a combination of
            jurisdictions rather than a single license. We design the structure
            first, then select the jurisdictions that support it.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="section-padded">
        <div className="container">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "Markets", desc: "Sectors we specialize in.", href: "/markets" },
              { title: "Solutions", desc: "Full service architecture.", href: "/solutions" },
              { title: "Start a Diagnostic", desc: "Identify what's broken.", href: "/contact" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="heading-card" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Explore →</span>
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
            Selecting the wrong jurisdiction creates long-term operational and
            financial constraints.
          </p>
          <h2 className="heading-lg cta-block__title">
            A structured assessment is required{" "}
            <span style={{ color: "var(--blue-light)" }}>before any decision.</span>
          </h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Request a strategic assessment →
          </Link>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
