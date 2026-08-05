import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import PageHero from "../../components/system/PageHero";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Jurisdictions. Where We Structure Operations",
  description:
    "Jurisdiction selection and structuring for regulated operations across markets including Brazil, Curaçao, Malta, Isle of Man, UAE and more.",
  path: "/jurisdictions",
});

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
              { tier: "Tactical", focus: "Flexibility and transitional entry", examples: "Anjouan", profile: "Early-stage operations with a defined transition plan" },
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
            Primary jurisdictions represent licensing frameworks in which Octus
            advises on strategy, structure, application readiness and
            implementation. Engagement scope depends on the client and framework.
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
                desc: "Advisory support for iGaming licensing under the current framework, including entity, compliance and banking-readiness work.",
                href: "/jurisdictions/curacao",
              },
              {
                name: "Malta",
                regulator: "MGA · MFSA",
                sectors: "iGaming, Fintech, Crypto",
                desc: "Advisory support for B2C and B2B licensing, corporate substance, compliance and banking readiness in a European framework.",
                href: "/jurisdictions/malta",
              },
              {
                name: "Isle of Man",
                regulator: "GSC",
                sectors: "iGaming, B2B, Tier-1",
                desc: "Licensing framework for operators and suppliers seeking institutional positioning and stronger banking readiness.",
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
            Octus advises on selected strategic jurisdictions where the
            framework may fit a client&apos;s scale, structure and objectives.
            UK, Gibraltar and Cyprus are landscape references on this page, not
            dedicated Octus jurisdiction landing pages.
          </p>
          <div className="grid-auto-lg">
            {[
              {
                name: "UK",
                desc: "Landscape reference only. Gambling Commission and FCA-regulated activities carry distinct requirements and require current specialist analysis.",
              },
              {
                name: "Gibraltar",
                desc: "Landscape reference only. B2B and B2C licensing suitability and permitted market activity require current specialist analysis.",
              },
              {
                name: "UAE",
                desc: "Regulatory landscape for crypto and fintech spanning ADGM, DIFC, VARA, SCA and other activity-specific authorities.",
                href: "/jurisdictions/uae",
              },
              {
                name: "Portugal",
                desc: "SRIJ-regulated iGaming market with local licensing requirements. A Portuguese licence does not create EU-wide passporting.",
                href: "/jurisdictions/portugal",
              },
              {
                name: "Cyprus",
                desc: "Landscape reference only. Fintech and gaming activities require separate, current analysis of the applicable Cypriot and EU frameworks.",
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

      {/* ─── ALTERNATIVE FRAMEWORKS (Anjouan: separate tier) ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Alternative frameworks</p>
          <h2 className="heading-section" style={{ marginBottom: "16px" }}>
            Tactical and transitional options.
          </h2>
          <p className="body-text mb-8">
            Alternative frameworks are used selectively in scenarios where
            flexibility or transitional strategies are prioritized over
            institutional positioning. Availability and permitted use depend on
            current law, target markets, counterparties and operator profile.
          </p>
          <Link href="/jurisdictions/anjouan" className="card-grid" style={{ padding: "28px" }}>
            <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>Anjouan</h3>
            <p className="body-sm mb-3 text-muted-foreground">
              Alternative licensing framework used in specific scenarios
              requiring flexibility, often as a transitional solution where
              regulatory accessibility outweighs institutional positioning.
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
              { title: "Markets", desc: "Sector context, not a statement of geographic service coverage.", href: "/markets" },
              { title: "Solutions", desc: "Full service architecture.", href: "/solutions" },
              { title: "Contact", desc: "A non-WhatsApp way to discuss your requirements.", href: "/contact" },
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
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{"Continue on WhatsApp →"}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Prefer not to use WhatsApp? <Link href="/contact" className="underline underline-offset-4">Contact us here.</Link>
          </p>
        </div>
      </section>

    </main>
  );
}
