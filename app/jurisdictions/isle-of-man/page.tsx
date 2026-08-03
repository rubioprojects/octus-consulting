import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Isle of Man",
  description:
    "Isle of Man licensing through the GSC is a Tier-1 credential. Octus structures the corporate, compliance and banking architecture required to reach approval and sustain operations.",
  path: "/jurisdictions/isle-of-man",
});

export default function JurisdictionsIsleOfManPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Jurisdictions · Isle of Man</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            Isle of Man is not a shortcut.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              It is a regulatory credential.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "620px" }}>
            A GSC licence is recognised globally as Tier-1. Banks trust it.
            Payment processors accept it. Regulators in other jurisdictions
            respect it. But the standard required to obtain and maintain it is
            high: and the margin for structural error is narrow.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
            <Link
              href="/solutions/regulatory/igaming-licensing"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Full licensing process →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POSITIONING ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label" style={{ marginBottom: "12px" }}>Why Isle of Man</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            This is not the jurisdiction you choose to save time.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The Isle of Man Gambling Supervision Commission has regulated gambling
            since 1962. The jurisdiction sits on the OECD whitelist and is
            recognised by the UK Gambling Commission, giving licensed operators
            access to advertise in the UK market. The licensing framework covers
            all forms of online gambling under a single licence. Corporate tax on
            gaming profits is 0%. Gambling duty is tiered between 0.1% and 1.5% of
            gross gaming yield.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            None of this makes it easy. It makes it valuable.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Operators who reach this jurisdiction with the wrong corporate
            structure, incomplete compliance architecture or misaligned banking
            arrangements do not get approved. The GSC&apos;s fit-and-proper
            assessment is continuous, not just at application: and with the
            MONEYVAL on-site review expected in late 2026, enforcement expectations
            are increasing, particularly around AML controls, beneficial ownership
            transparency and source of funds.
          </p>
        </div>
      </section>

      {/* ─── WHEN / WHEN NOT ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label" style={{ marginBottom: "12px" }}>Qualification</p>
          <h2 className="heading-section" style={{ marginBottom: "32px", maxWidth: "760px" }}>
            Isle of Man is the right jurisdiction: but not for every operation.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px" }}>
            <div>
              <p className="label" style={{ marginBottom: "16px", color: "var(--blue-light)" }}>When it makes sense</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You need a Tier-1 licence that banks and payment processors recognise without friction.",
                  "You plan to operate in or advertise to the UK market.",
                  "Your operation requires institutional credibility for investor, partner or white-label relationships.",
                  "You are scaling from an offshore licence (Curaçao, Anjouan) to a regulated European framework.",
                  "You want a single licence covering multiple verticals: casino, sports, poker, crypto.",
                  "You are building a B2B platform and need a network services licence with foreign player acceptance.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p className="body-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="label mb-4 text-muted-foreground">When it does not</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You need the cheapest or fastest path to market. Isle of Man is neither.",
                  "Your corporate structure cannot support two resident directors and a designated official on the island.",
                  "You have no clear plan for local banking, server hosting or ongoing compliance staffing.",
                  "Your AML programme is not yet operational. The GSC does not approve operators who plan to build compliance after licensing.",
                  "You expect to launch and leave. The GSC\u2019s supervision is continuous, risk-based and increasingly enforcement-oriented.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span className="mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true">•</span>
                    <p className="body-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="body-text mt-8 max-w-[760px]">
            If your operation is not ready for this level of scrutiny, a different
            jurisdiction may be a better starting point. Octus can help determine
            that before you commit.
          </p>
        </div>
      </section>

      {/* ─── WHAT OCTUS STRUCTURES ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "12px" }}>
            The licence is the outcome.{" "}
            <span style={{ color: "var(--blue-light)" }}>The structure is the work.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: "32px" }}>
            Most operators focus on the GSC application. The application is the
            last step. Everything that determines whether it succeeds happens
            before submission: corporate design, compliance architecture, banking
            relationships, technical infrastructure, personnel arrangements.
          </p>
          <p className="body-text" style={{ marginBottom: "32px" }}>
            Octus structures and coordinates the full pre-application and
            application process.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "10px" }}>Corporate structuring</h3>
              <p className="body-text">
                Isle of Man company incorporation with appropriate director
                appointments. Resident director sourcing. Designated official or
                operations manager identification. Registered office and substance
                arrangements. UBO alignment and shareholder structure review.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "10px" }}>Compliance architecture</h3>
              <p className="body-text">
                AML/CFT programme designed to GSC and FATF standards. KYC
                procedures, transaction monitoring, suspicious activity reporting.
                Responsible gambling framework. Data protection alignment
                (GDPR-equivalent). Internal controls and governance policies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "10px" }}>Banking and payments</h3>
              <p className="body-text">
                Corporate bank account in the Isle of Man for player fund
                segregation. Operational accounts. Payment processor onboarding
                aligned to the licence type. Coordination with island-based
                banking partners familiar with gaming operations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "10px" }}>Technical readiness</h3>
              <p className="body-text">
                Server hosting arrangements on the island (or approved fail-over
                mirrors). RNG certification through GSC-approved testing
                laboratories. Platform documentation and technical architecture
                review.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "10px" }}>Application management</h3>
              <p className="body-text">
                Full licensing dossier preparation. Business plan aligned to GSC
                expectations. Regulatory form completion. Direct coordination with
                the GSC inspectorate. Response management throughout typical review
                timelines, subject to regulatory complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REGULATORY LANDSCAPE ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Current regulatory environment</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The GSC is tightening. Not loosening.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The Isle of Man is actively reforming its gambling legislation. The
            Gambling Legislation Amendment Bill 2025 introduces enhanced
            fit-and-proper tests, expanded inspection powers, and harmonised
            regulatory authority across all gambling Acts. In early 2026, the
            GSC published draft fitness and propriety guidance, with a public
            consultation running through May 2026, replacing the existing patchwork
            of suitability rules with a unified standard.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The jurisdiction is preparing for a MONEYVAL on-site evaluation
            expected in late 2026, driving heightened enforcement activity and
            stricter AML compliance expectations.
          </p>
          <p className="body-text">
            For operators applying now: the regulatory bar is moving upward.
            Applications submitted with yesterday&apos;s compliance standards will
            face tomorrow&apos;s review criteria.
          </p>
        </div>
      </section>

      {/* ─── LICENCE STRUCTURE ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Licence types</p>
          <h2 className="heading-section" style={{ marginBottom: "32px", maxWidth: "760px" }}>
            One framework. Multiple licence categories.
          </h2>
          <p className="body-text mb-8 max-w-[760px]">
            All licences are issued under the Online Gambling Regulation Act 2001
            (OGRA). Each has a five-year validity period.
          </p>
          <div className="grid-auto-lg" style={{ marginBottom: "32px" }}>
            {[
              {
                title: "Full Licence (B2C)",
                body: "Direct-to-player operations: casino, sportsbook, poker, bingo, lottery, crypto. Application fee: £5,250. Annual fee: £36,750.",
              },
              {
                title: "Sub-Licence",
                body: "Operates under an existing full licensee\u2019s framework. Application fee: £5,250. Annual fee: £5,250.",
              },
              {
                title: "Network Services Licence",
                body: "B2C and B2B platform provision. Permits acceptance of foreign-registered players without re-registration. Application fee: £5,250. Annual fee: £52,500.",
              },
              {
                title: "Software Supplier Licence (B2B)",
                body: "Games content or gambling software supply to licensed operators. Application fee: £5,250. Annual fee: £36,750.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "24px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "10px" }}>{item.title}</h3>
                <p className="body-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="grid-3">
            {[
              { label: "Gambling duty", value: "1.5% on the first £20m GGY. 0.5% on £20m: £40m. 0.1% above £40m." },
              { label: "Corporate tax", value: "0% on gaming profits." },
              { label: "Processing time", value: "10: 12 weeks from file-complete acceptance by the inspectorate." },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: "24px" }}>
                <p className="label" style={{ marginBottom: "8px", fontSize: "10px" }}>{item.label}</p>
                <p className="body-text text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANDATE ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Engagement</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Octus operates on a mandate basis for Isle of Man licensing.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Isle of Man licensing is not a transactional service. It is a
            structured engagement that requires alignment between operator
            readiness, corporate design, compliance maturity and regulatory
            expectations.
          </p>
          <p className="body-text" style={{ marginBottom: "32px" }}>
            Octus accepts Isle of Man mandates after a diagnostic assessment
            confirms operational fit. The diagnostic determines whether Isle of
            Man is the right jurisdiction, identifies structural gaps, and
            produces a strategy memo with timeline, cost projection and execution
            roadmap.
          </p>
          <p className="body-text" style={{ marginBottom: "32px" }}>
            If Isle of Man is not the right fit, the diagnostic will make that
            clear. Octus does not recommend jurisdictions that do not align with
            the operation.
          </p>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-auto-lg">
            {[
              { title: "Malta (MGA)", desc: "EU-regulated alternative with high compliance requirements", href: "/jurisdictions/malta" },
              { title: "Curaçao", desc: "Established offshore framework, often a stepping stone to Tier-1", href: "/jurisdictions/curacao" },
              { title: "iGaming Licensing", desc: "Full licensing strategy across jurisdictions", href: "/solutions/regulatory/igaming-licensing" },
              { title: "AML/KYC", desc: "Compliance architecture for regulated operations", href: "/solutions/compliance/aml-kyc" },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{r.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{r.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
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
            If your operation needs a licence that institutional partners take
            seriously, the structure behind it needs to be built to that standard.
          </p>
          <h2 className="heading-lg cta-block__title">
            Structure it for the jurisdiction.{" "}
            <span style={{ color: "var(--blue-light)" }}>Not around it.</span>
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Diagnostic call. We assess operational fit before recommending a jurisdiction or engagement model.
          </p>
        </div>
      </section>

    </main>
  );
}
