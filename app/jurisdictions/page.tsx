import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import BrandSectionMotif from "../../components/system/BrandSectionMotif";
import Reveal from "../../components/system/Reveal";

export const metadata = {
  title: "Jurisdictions — Where We Structure Operations",
  description:
    "Operating environments for regulated structures across Brazil, Curaçao, Malta, Isle of Man, UAE and more — selected for structural fit, not a licence catalogue.",
};

const TIERS = [
  {
    tier: "Institutional",
    focus: "Credibility, banking alignment, long-term positioning",
    examples: "Isle of Man · Malta",
    profile: "Established operators, B2B providers, institutional growth",
  },
  {
    tier: "Structured",
    focus: "Operational balance, regulatory strategy, scalability",
    examples: "Curaçao · Brazil · Portugal · UAE",
    profile: "Growing operators, mid-market, regulated market entry",
  },
  {
    tier: "Tactical",
    focus: "Speed, flexibility, transitional entry",
    examples: "Anjouan",
    profile: "Early-stage or fast-moving operations",
  },
] as const;

const PRIMARY = [
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
] as const;

const STRATEGIC = [
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
] as const;

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

      <section className="octus-section-relative bg-background py-24 md:py-32">
        <BrandSectionMotif position="start" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <Reveal>
            <div className="mb-6 flex items-stretch gap-4">
              <div className="octus-story-rail w-0.5 shrink-0 self-stretch min-h-[4.5rem]" />
              <div>
                <h2 className="heading-section mb-6">
                  Operating environments are not interchangeable.
                </h2>
                <p className="body-lg mb-5">
                  Each environment balances regulatory credibility, operational flexibility, cost
                  and banking compatibility differently. The right fit depends on where the
                  operation sits today — and where it must hold under scrutiny next.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8">
            {TIERS.map((t, i) => (
              <Reveal key={t.tier} delayMs={i * 80}>
                <div className="jurisdiction-tier">
                  <span className="jurisdiction-tier__label">{t.tier}</span>
                  <div>
                    <p className="body-text mb-1 text-foreground">{t.focus}</p>
                    <p className="body-sm mb-1 text-muted-foreground">{t.examples}</p>
                    <p className="body-sm italic text-muted-foreground">{t.profile}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="octus-section-relative surface-elevated py-24 md:py-32">
        <BrandSectionMotif position="end" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label">Primary operating environments</p>
            <h2 className="heading-section mb-4">Active execution, established processes.</h2>
            <p className="body-text mb-10 max-w-[620px]">
              These are the environments where Octus runs active mandates — established processes,
              coordinated execution and ongoing structural support.
            </p>
          </Reveal>
          <div className="grid-3">
            {PRIMARY.map((j, i) => (
              <Reveal key={j.name} delayMs={Math.min(i * 60, 180)}>
                <Link href={j.href} className="card-grid jurisdiction-card block p-7">
                  <h3 className="mb-1 font-sans text-lg font-semibold text-primary">{j.name}</h3>
                  <p className="label mb-3" style={{ fontSize: "10px" }}>
                    {j.regulator}
                  </p>
                  <p className="body-sm mb-3">{j.desc}</p>
                  <div className="chip-row">
                    {j.sectors.split(", ").map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="mt-3 block text-[13px] text-primary">Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="octus-section-relative bg-background py-24 md:py-32">
        <BrandSectionMotif position="center" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label">Strategic environments</p>
            <h2 className="heading-section mb-4">
              Selected environments for specific structural requirements.
            </h2>
            <p className="body-text mb-8 max-w-[680px]">
              Octus supports selected strategic environments when clients need higher regulatory
              positioning or specific market access — based on scale, structure and objectives, not
              jurisdiction shopping.
            </p>
          </Reveal>
          <div className="grid-auto-lg">
            {STRATEGIC.map((j, i) =>
              "href" in j && j.href ? (
                <Reveal key={j.name} delayMs={Math.min(i * 50, 200)}>
                  <Link href={j.href} className="card-grid jurisdiction-card block p-6">
                    <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{j.name}</h3>
                    <p className="body-sm mb-3 text-muted-foreground">{j.desc}</p>
                    <span className="text-[13px] text-primary">Learn more →</span>
                  </Link>
                </Reveal>
              ) : (
                <Reveal key={j.name} delayMs={Math.min(i * 50, 200)}>
                  <div className="card jurisdiction-card p-6">
                    <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{j.name}</h3>
                    <p className="body-sm text-muted-foreground">{j.desc}</p>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <Reveal>
            <p className="label">Tactical environments</p>
            <h2 className="heading-section mb-4">Transitional options when speed is structural.</h2>
            <p className="body-text mb-8">
              Used selectively when speed or flexibility must outweigh institutional positioning —
              always as part of a wider structure, not as a destination by default.
            </p>
            <Link href="/jurisdictions/anjouan" className="card-grid jurisdiction-card block p-7">
              <h3 className="mb-2 font-sans text-lg font-semibold text-primary">Anjouan</h3>
              <p className="body-sm mb-3 text-muted-foreground">
                Tactical operating environment used in specific scenarios where speed and
                flexibility are execution considerations — often transitional within a longer
                structural path.
              </p>
              <span className="text-[13px] text-primary">Learn more →</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <Reveal>
            <div className="mb-6 h-px w-20 accent-cream-bar" aria-hidden="true" />
            <p className="label">Our approach</p>
            <h2 className="heading-section mb-6">
              We don&apos;t recommend environments based on popularity or cost.
            </h2>
            <p className="body-lg mb-5">
              Each regulatory strategy is defined from operational risk, capital structure, payment
              infrastructure and long-term objectives.
            </p>
            <p className="body-text">
              In many cases the durable path combines environments rather than a single seat. We
              design the structure first, then select the operating environments that support it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="label">Go deeper</p>
          <div className="grid-3">
            {[
              { title: "Markets", desc: "Sectors we specialize in.", href: "/markets" },
              { title: "Solutions", desc: "Full service architecture.", href: "/solutions" },
              { title: "Start a Diagnostic", desc: "Identify what's broken.", href: "/contact" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid jurisdiction-card block p-7">
                <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{r.title}</h3>
                <p className="body-sm mb-3">{r.desc}</p>
                <span className="text-[13px] text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text mb-4" style={{ color: "var(--white-40)" }}>
            Selecting the wrong operating environment creates long-term structural and financial
            constraints.
          </p>
          <h2 className="heading-lg cta-block__title">
            A structured assessment is required{" "}
            <span style={{ color: "var(--blue-light)" }}>before any decision.</span>
          </h2>
          <a
            href={WHATSAPP_DISCUSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {CTA_DISCUSS_LABEL}
          </a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            We respond within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
