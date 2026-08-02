import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";

export const metadata = {
  title: "Jurisdictions — Where We Structure Operations",
  description:
    "Jurisdiction selection and structuring for regulated operations across markets including Brazil, Curaçao, Malta, Isle of Man, UAE and more.",
};

export default function JurisdictionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Jurisdictions"
        title="Jurisdictions don't solve problems."
        titleSecondLine="Structures do."
        description="Choosing the right jurisdiction is a strategic decision that impacts regulation, banking access, operational flexibility and long-term scalability. Octus supports jurisdiction selection based on business model, capital structure and growth objectives, not generic preferences."
        primaryCta={{
          href: WHATSAPP_DISCUSS_URL,
          label: CTA_DISCUSS_LABEL,
          external: true,
        }}
      />

      {/* ─── HOW TO THINK ABOUT JURISDICTIONS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
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
              { tier: "Structured", focus: "Operational balance, regulatory framework, scalability", examples: "Curaçao · Brazil · Portugal · UAE", profile: "Growing operators, mid-market, regulated market entry" },
              { tier: "Tactical", focus: "Speed, flexibility, transitional entry", examples: "Anjouan", profile: "Early-stage or fast-moving operations" },
            ].map((t, i) => (
              <div key={t.tier} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", padding: "24px 0", borderBottom: i < 2 ? "1px solid var(--border-solid)" : "none", alignItems: "start" }}>
                <span className="text-lg font-semibold text-primary font-sans" style={{ fontSize: "13px", color: "var(--blue-light)", paddingTop: "2px" }}>{t.tier}</span>
                <div>
                  <p className="body-text mb-1 text-foreground">{t.focus}</p>
                  <p className="body-sm mb-1 text-muted-foreground">{t.examples}</p>
                  <p className="body-sm italic text-muted-foreground">{t.profile}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIMARY JURISDICTIONS (pages exist, clickable) ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Primary jurisdictions</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Active execution, established processes.
          </h2>
          <p className="body-text mb-10 max-w-[620px]">
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
              {
                name: "Isle of Man",
                regulator: "GSC",
                sectors: "iGaming, B2B, Tier-1",
                desc: "Institutional licensing framework for operators and suppliers needing stronger banking alignment and long-term credibility.",
                href: "/jurisdictions/isle-of-man",
              },
            ].map((j) => (
              <Link key={j.name} href={j.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "4px" }}>{j.name}</h3>
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

      {/* ─── STRATEGIC JURISDICTIONS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Strategic jurisdictions</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Selected frameworks for specific requirements.
          </h2>
          <p className="body-text mb-8 max-w-[680px]">
            Octus supports selected strategic jurisdictions for clients
            requiring higher regulatory positioning or specific market access,
            depending on scale, structure and objectives.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                name: "Isle of Man",
                desc: "Tier-1 jurisdiction for operators and B2B providers prioritizing regulatory credibility, institutional positioning and long-term banking stability. Typically suitable for well-capitalized operations with a long-term market strategy.",
                href: "/jurisdictions/isle-of-man",
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
                href: "/jurisdictions/uae",
              },
              {
                name: "Portugal",
                desc: "SRIJ-regulated iGaming market with local licensing requirements and EU market access.",
                href: "/jurisdictions/portugal",
              },
              {
                name: "Cyprus",
                desc: "EU jurisdiction with growing regulatory infrastructure for fintech and gaming operations.",
              },
            ].map((j) =>
              "href" in j && j.href ? (
                <Link key={j.name} href={j.href} className="card-grid" style={{ padding: "24px" }}>
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{j.name}</h3>
                  <p className="body-sm mb-3 text-muted-foreground">{j.desc}</p>
                  <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
                </Link>
              ) : (
                <div key={j.name} className="card" style={{ padding: "24px" }}>
                  <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{j.name}</h3>
                  <p className="body-sm text-muted-foreground">{j.desc}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ─── ALTERNATIVE FRAMEWORKS (Anjouan — separate tier) ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Alternative frameworks</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Tactical and transitional options.
          </h2>
          <p className="body-text mb-8">
            Alternative frameworks are used selectively in scenarios where
            speed, flexibility or transitional strategies are prioritized over
            institutional positioning.
          </p>
          <Link href="/jurisdictions/anjouan" className="card-grid" style={{ padding: "28px" }}>
            <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>Anjouan</h3>
            <p className="body-sm mb-3 text-muted-foreground">
              Alternative licensing framework used in specific scenarios
              requiring speed and flexibility, often as a transitional solution
              where regulatory flexibility outweighs institutional positioning.
            </p>
            <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
          </Link>
        </div>
      </section>

      {/* ─── OCTUS APPROACH ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Our approach</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            We don&apos;t recommend jurisdictions based on popularity or cost.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Each licensing strategy is defined based on regulatory risk,
            operational structure, payment infrastructure and long-term
            objectives.
          </p>
          <p className="body-text">
            In many cases, the optimal approach involves a combination of
            jurisdictions rather than a single license. We design the structure
            first, then select the jurisdictions that support it.
          </p>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "Markets", desc: "Sectors we specialize in.", href: "/markets" },
              { title: "Solutions", desc: "Full service architecture.", href: "/solutions" },
              { title: "Start a Diagnostic", desc: "Identify what's broken.", href: "/contact" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{r.title}</h3>
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
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            Selecting the wrong jurisdiction creates long-term operational and
            financial constraints.
          </p>
          <h2 className="heading-lg cta-block__title">
            A structured assessment is required{" "}
            <span style={{ color: "var(--blue-light)" }}>before any decision.</span>
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>

    </main>
  );
}
