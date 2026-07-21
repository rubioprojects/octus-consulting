import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import BrandSectionMotif from "../../components/system/BrandSectionMotif";

export const metadata = {
  title: "Jurisdictions — Where We Structure Operations",
  description:
    "Operating environments for regulated structures across Brazil, Curaçao, Malta, Isle of Man, UAE and more — selected for structural fit, not a licence catalogue.",
};

export default function JurisdictionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Jurisdictions"
        title="Jurisdictions don't solve problems."
        titleSecondLine="Structures do."
        description="Selecting an operating environment is a strategic decision — regulatory posture, banking access, operational flexibility and long-term scalability. Octus advises on structural fit from the business model, capital design and growth path — not from a catalogue of places."
        primaryCta={{
          href: WHATSAPP_DISCUSS_URL,
          label: CTA_DISCUSS_LABEL,
          external: true,
        }}
      />

      {/* ─── HOW TO THINK ABOUT JURISDICTIONS ─── */}
      <section className="octus-section-relative bg-background py-24 md:py-32">
        <BrandSectionMotif />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Operating environments are not interchangeable.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Each environment balances regulatory credibility, operational
            flexibility, cost and banking compatibility differently. The right
            fit depends on where the operation sits today — and where it must
            hold under scrutiny next.
          </p>

          {/* ─── 3-TIER FRAMEWORK ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "32px" }}>
            {[
              { tier: "Institutional", focus: "Credibility, banking alignment, long-term positioning", examples: "Isle of Man · Malta", profile: "Established operators, B2B providers, institutional growth" },
              { tier: "Structured", focus: "Operational balance, regulatory strategy, scalability", examples: "Curaçao · Brazil · Portugal · UAE", profile: "Growing operators, mid-market, regulated market entry" },
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
      <section className="octus-section-relative surface-elevated py-24 md:py-32">
        <BrandSectionMotif />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Primary operating environments</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Active execution, established processes.
          </h2>
          <p className="body-text mb-10 max-w-[620px]">
            These are the environments where Octus runs active mandates —
            established processes, coordinated execution and ongoing structural
            support.
          </p>
          <div className="grid-3">
            {[
              {
                name: "Brazil",
                regulator: "SPA/MF · BACEN",
                sectors: "iGaming, Fintech, Payments",
                desc: "Market-entry structuring for sports betting, payment institutions and fintech operators in Brazil — regulatory strategy and operational fit.",
                href: "/brazil",
              },
              {
                name: "Curaçao",
                regulator: "GCB",
                sectors: "iGaming, Betting",
                desc: "iGaming operating environment under the current regulatory regime. Entity, compliance and banking coordinated as one execution path.",
                href: "/jurisdictions/curacao",
              },
              {
                name: "Malta",
                regulator: "MGA · MFSA",
                sectors: "iGaming, Fintech, Crypto",
                desc: "European institutional environment for B2C and B2B operators — regulatory strategy with banking and operational infrastructure in view.",
                href: "/jurisdictions/malta",
              },
              {
                name: "Isle of Man",
                regulator: "GSC",
                sectors: "iGaming, B2B, Tier-1",
                desc: "Institutional operating environment for operators and suppliers prioritizing banking alignment and long-term credibility.",
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
      <section className="octus-section-relative bg-background py-24 md:py-32">
        <BrandSectionMotif />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Strategic environments</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Selected environments for specific structural requirements.
          </h2>
          <p className="body-text mb-8 max-w-[680px]">
            Octus supports selected strategic environments when clients need
            higher regulatory positioning or specific market access — based on
            scale, structure and objectives, not jurisdiction shopping.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                name: "Isle of Man",
                desc: "Institutional environment for operators and B2B providers prioritizing regulatory credibility, positioning and long-term banking stability — typically for well-capitalized operations with a durable market strategy.",
                href: "/jurisdictions/isle-of-man",
              },
              {
                name: "UK",
                desc: "High-compliance operating environment (Gambling Commission / FCA). Strong banking infrastructure and institutional credibility where the structure can meet the bar.",
              },
              {
                name: "Gibraltar",
                desc: "Operating environment for B2B and B2C groups with European and UK-facing operations — strong regulatory reputation when structural fit is clear.",
              },
              {
                name: "UAE",
                desc: "Emerging hub for crypto and fintech. ADGM, DFSA and VARA as execution considerations within a broader group structure.",
                href: "/jurisdictions/uae",
              },
              {
                name: "Portugal",
                desc: "SRIJ-regulated market with local operating requirements and EU access — assessed for structural fit, not as a default destination.",
                href: "/jurisdictions/portugal",
              },
              {
                name: "Cyprus",
                desc: "EU environment with growing regulatory infrastructure for fintech and gaming operations — used when it supports the structure.",
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
          <p className="label">Tactical environments</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Transitional options when speed is structural.
          </h2>
          <p className="body-text mb-8">
            Used selectively when speed or flexibility must outweigh institutional
            positioning — always as part of a wider structure, not as a destination
            by default.
          </p>
          <Link href="/jurisdictions/anjouan" className="card-grid" style={{ padding: "28px" }}>
            <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>Anjouan</h3>
            <p className="body-sm mb-3 text-muted-foreground">
              Tactical operating environment used in specific scenarios where
              speed and flexibility are execution considerations — often
              transitional within a longer structural path.
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
            We don&apos;t recommend environments based on popularity or cost.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Each regulatory strategy is defined from operational risk, capital
            structure, payment infrastructure and long-term objectives.
          </p>
          <p className="body-text">
            In many cases the durable path combines environments rather than a
            single seat. We design the structure first, then select the operating
            environments that support it.
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
            Selecting the wrong operating environment creates long-term
            structural and financial constraints.
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
