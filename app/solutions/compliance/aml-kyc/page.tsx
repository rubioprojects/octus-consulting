import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";
import DarkHeroAtmosphere from "../../../../components/system/DarkHeroAtmosphere";
import { pageSocialMeta } from "../../../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "AML & KYC Framework. Compliance That Holds | Octus",
  description:
    "AML/KYC compliance frameworks for regulated operations. Built to survive real audit, not to sit in a folder. Transaction monitoring, risk assessment and regulatory reporting.",
  path: "/solutions/compliance/aml-kyc",
});

export default function SolutionsAMLKYCPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section className="octus-dark-hero surface-dark relative flex min-h-[70vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[80vh] md:pt-32 md:pb-24">
        <DarkHeroAtmosphere />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Services · Compliance · AML & KYC</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">
            Your AML framework looks good on paper.
            <br />
            <span style={{ color: "var(--white-40)" }}>
              The question is whether it survives an audit.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "640px" }}>
            Most compliance frameworks are built to check a box. They pass
            internal review. They don&apos;t pass regulatory scrutiny, banking
            due diligence, or a real-world audit. We build the ones that do.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
            <Link
              href="/solutions/compliance-risk"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Full compliance services →
            </Link>
          </div>
        </div>
        <div className="octus-dark-hero__seam" aria-hidden="true" />
      </section>

      {/* ─── THE REAL PROBLEM ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Why most AML frameworks fail.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            They were written by lawyers who never operated a compliance desk.
            The policies exist. The procedures are documented. But when the
            regulator asks for evidence of implementation: transaction
            monitoring logs, SAR filing records, training completion records,
            risk assessment updates. There&apos;s nothing there.
          </p>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            The framework existed. The compliance function didn&apos;t.
          </p>
          <p
            className="heading-sm text-foreground"
            style={{ borderTop: "1px solid var(--border-solid)", paddingTop: "24px", marginTop: "8px" }}
          >
            Policies are not compliance.{" "}
            <span className="text-primary">Evidence is.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT WE BUILD ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">What we build</p>
          <h2 className="heading-section" style={{ marginBottom: "40px" }}>
            A compliance function. Not a document set.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "AML policy & program design",
                desc: "Tailored to your sector, jurisdiction and risk profile. Not a template. A framework designed for your specific regulatory environment.",
              },
              {
                title: "KYC & customer onboarding",
                desc: "Risk-based customer due diligence, enhanced due diligence, PEP/sanctions screening and ongoing monitoring procedures.",
              },
              {
                title: "Transaction monitoring",
                desc: "Rules, thresholds, escalation procedures and reporting workflows. Designed to catch what matters, not generate noise.",
              },
              {
                title: "Risk assessment",
                desc: "Business-wide risk assessment, customer risk scoring and product/channel risk analysis. Updated periodically, not once.",
              },
              {
                title: "SAR/STR reporting",
                desc: "Suspicious activity identification, internal escalation, regulatory reporting procedures and documentation standards.",
              },
              {
                title: "Training & awareness",
                desc: "Staff training program, completion tracking, refresher cycles and role-specific compliance education.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED MANDATES ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Selected mandates</p>
          <h2 className="heading-section" style={{ marginBottom: "32px" }}>
            Real operations. Real outcomes.
          </h2>
          <div className="grid gap-6 md:grid-cols-1">
            {[
              {
                title: "iGaming operator: compliance remediation",
                body: "Flagged by regulator for compliance gaps. Full AML/KYC rebuild covering policies, procedures, monitoring rules and the evidence register so the programme could return to regulatory review.",
              },
              {
                title: "Fintech: banking due diligence recovery",
                body: "Rejected by 3 banks for inadequate AML framework. We rebuilt the program, aligned it with banking risk requirements and coordinated re-application. Accounts opened.",
              },
              {
                title: "Multi-jurisdiction operator: unified framework",
                body: "Compliance framework harmonized across 3 jurisdictions with local adaptations. Single policy architecture, jurisdiction-specific procedures.",
              },
              {
                title: "GLI audit preparation",
                body: "Full evidence register, compliance documentation and readiness pack prepared for audit entry with a complete documentation set.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <h3 className="mb-4 font-sans text-lg font-semibold text-primary">{m.title}</h3>
                <p className="body-text">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Who this is for</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Operations where compliance is not optional.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Compliance framework exists but doesn't hold under real scrutiny",
              "Bank or payment provider rejected you for AML gaps",
              "Regulatory inquiry or audit scheduled, not prepared",
              "Expanding to a new jurisdiction and need a compliant framework from day one",
              "Operating without a dedicated compliance function",
              "Existing framework is template-based, not tailored to your operation",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <div className="grid-3">
            {[
              { title: "Compliance & Risk", desc: "Full compliance services beyond AML.", href: "/solutions/compliance-risk" },
              { title: "Remediation & Readiness", desc: "Prepared for scrutiny before it arrives.", href: "/solutions/remediation-readiness" },
              { title: "iGaming Operations", desc: "Compliance in the iGaming context.", href: "/markets/igaming" },
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
            Compliance is not a document. It&apos;s an operational function.
          </p>
          <h2 className="heading-lg cta-block__title">
            Build it to survive. Not to check a box.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">Continue this discussion →</a>
          <p className="body-sm cta-block__note" style={{ color: "var(--white-25)" }}>
            Reach us on WhatsApp. We assess operational fit before recommending a path.
          </p>
        </div>
      </section>

    </main>
  );
}
