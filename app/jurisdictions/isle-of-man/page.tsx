import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../lib/cta";
import { pageSocialMeta } from "../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Isle of Man",
  description:
    "Isle of Man licensing advisory covering corporate, compliance, application-readiness and banking-readiness considerations under the GSC framework.",
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
            The GSC framework is commonly considered an institutional licensing
            option. Recognition, market permissions, banking and payment access
            remain subject to the rules and independent decisions of each
            regulator, market and provider. The standard required to apply and
            maintain a licence is high.
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
            The Isle of Man Gambling Supervision Commission has regulated
            gambling since 1962. The framework supports multiple online gambling
            activities, but licence scope and activity in any target market must
            be verified under current rules. Tax treatment and gambling duty are
            governed by official schedules and depend on the operator&apos;s facts;
            current rates must be confirmed with the relevant authorities and
            qualified tax advisers.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            None of this makes it easy. It makes it valuable.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Corporate structure, compliance architecture, source-of-funds
            evidence and banking readiness can materially affect an application.
            The GSC applies fit-and-proper and ongoing supervisory requirements;
            applicants should verify the current standards and guidance before
            relying on a proposed structure.
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
                  "You are considering an institutional framework and accept that banks and payment processors conduct independent due diligence.",
                  "You have identified target markets and will obtain separate advice on local operating and advertising permissions.",
                  "Your operation requires institutional credibility for investor, partner or white-label relationships.",
                  "You are scaling from an offshore licence (Curaçao, Anjouan) to a regulated European framework.",
                  "You need a framework capable of covering relevant approved gambling activities.",
                  "You are building a B2B platform and need to assess the network services framework and player-location rules.",
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
                  "Your AML programme is not yet operational or application-ready.",
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
                Banking and payment-provider readiness for operational and
                player-fund arrangements. Introductions and onboarding support
                may be available, but every account and processor relationship is
                subject to provider eligibility, risk appetite and due diligence.
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
                Licensing dossier preparation, business-plan review and
                regulatory form support. Octus advises the client and supports
                authorised communications with the GSC; it is not affiliated
                with or acting on behalf of the regulator. Review timing and
                outcomes remain solely within the regulator&apos;s control.
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
            Current requirements require active verification.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Isle of Man gambling legislation and GSC guidance continue to
            evolve. Applicants should check the current status of proposed
            legislation, consultations, fitness and propriety guidance,
            inspection powers and application requirements before proceeding.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            AML/CFT, beneficial-ownership and source-of-funds controls should be
            designed against the law and official guidance in force at the time
            of application and throughout operations.
          </p>
          <p className="body-text">
            Historical summaries are not a substitute for current legal and
            regulatory review.
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
            Licence categories and validity are governed by OGRA and current GSC
            rules. Applicants should verify the category, scope and term that
            apply to their proposed activity.
          </p>
          <div className="grid-auto-lg" style={{ marginBottom: "32px" }}>
            {[
              {
                title: "Full Licence (B2C)",
                body: "Direct-to-player operations within the approved scope. As of the Online Gambling (Licence Fees) Regulations 2023, effective 6 July 2023, and the GSC fee sheet dated October 2025: application fee £5,250 and annual fee £36,750. Verify the current schedule before relying on these figures.",
              },
              {
                title: "Sub-Licence",
                body: "Operates within an eligible full licensee\u2019s framework. As of the Online Gambling (Licence Fees) Regulations 2023, effective 6 July 2023, and the GSC fee sheet dated October 2025: application fee £5,250 and annual fee £5,250. Verify the current schedule.",
              },
              {
                title: "Network Services Licence",
                body: "B2C and B2B platform provision within the approved scope. Player acceptance remains subject to licence conditions and target-market law. As of the Online Gambling (Licence Fees) Regulations 2023, effective 6 July 2023, and the GSC fee sheet dated October 2025: application fee £5,250 and annual fee £52,500. Verify the current schedule.",
              },
              {
                title: "Software Supplier Licence (B2B)",
                body: "Games content or gambling software supply within the approved scope. As of the Online Gambling (Licence Fees) Regulations 2023, effective 6 July 2023, and the GSC fee sheet dated October 2025: application fee £5,250 and annual fee £36,750. Verify the current schedule.",
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
              { label: "Gambling duty", value: "Official schedules currently use tiered rates in the 0.1% to 1.5% range. Verify the current duty schedule and operator-specific treatment." },
              { label: "Corporate tax", value: "Tax treatment depends on current law and operator facts. Obtain current Isle of Man tax advice." },
              { label: "Processing time", value: "The GSC describes 10-12 weeks as a typical processing period after an acceptance letter. This is not an assured timeline and may vary materially." },
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
            WhatsApp is the primary strategic intake. Prefer another channel? <Link href="/contact" className="underline underline-offset-4">Contact us here.</Link>
          </p>
        </div>
      </section>

    </main>
  );
}
