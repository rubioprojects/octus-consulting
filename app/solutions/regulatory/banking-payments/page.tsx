import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../../../lib/cta";

export const metadata = {
  title: "Banking & Payments",
  description:
    "Banks do not reject your business. They reject your structure. Octus designs banking strategy, compliance documentation and payment infrastructure for regulated and high-risk operations.",
};

export default function BankingPaymentsPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Solutions · Regulatory · Banking & Payments</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Banks do not reject your business.
            <br />
            <span style={{ color: "var(--white-40)" }}>They reject your structure.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "660px" }}>
            Banking access for regulated and high-risk operations depends on
            corporate design, compliance documentation, licensing status and
            jurisdiction. When banking fails, it is almost never the bank. It
            is the structure the bank is evaluating.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Why banking fails</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            The account is not the problem. The structure behind it is.
          </h2>
          <div className="grid-auto-lg">
            {[
              {
                title: "AML documentation designed for the regulator, not for the bank.",
                body: "Banks apply their own threshold. Below it, the account is declined or terminated.",
              },
              {
                title: "Corporate structure creates risk flags.",
                body: "Offshore entities, nominee directors and complex UBO chains trigger enhanced due diligence.",
              },
              {
                title: "Single provider dependency.",
                body: "One bank. One PSP. One acquirer. When any exits, the operation stops.",
              },
              {
                title: "Licensing does not unlock banking automatically.",
                body: "Banks evaluate the licence, the compliance, the structure and the substance independently.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="body-text" style={{ marginTop: "28px" }}>
            Most operators respond by looking for another bank. The pattern repeats.
            Because the structure has not changed.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Execution</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            Banking strategy designed before the first application.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              ["Banking readiness assessment", "Gap analysis between current structure and what banking partners require."],
              ["Compliance documentation", "AML/KYC, transaction monitoring, SAR procedures rebuilt to banking standards. Not regulatory standards — banking standards."],
              ["Corporate restructuring", "Entity design, jurisdiction, governance and UBO alignment optimised for banking risk assessment."],
              ["Multi-bank strategy", "Parallel coordination with multiple banking partners. No single point of failure. If one exits, operations continue."],
              ["PSP and acquirer alignment", "Payment processor onboarding coordinated with compliance and licensing status."],
              ["Safeguarding arrangements", "Client fund segregation structured for EMI/PI requirements and banking partner expectations."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
          <p className="body-text mt-6">
            Banking is not the last step. It is a design constraint that shapes every structural decision from the beginning.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Consequence</p>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            What happens if you get this wrong.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Accounts declined or terminated without explanation.",
              "PSP churn — every new provider applies the same assessment to the same structure.",
              "Operations halted with no contingency.",
              "Licensing investment wasted because the operation cannot process payments.",
              "Months of searching for banking that the structure will never unlock.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <p className="label">Situation patterns</p>
          <p className="body-text mb-8 text-muted-foreground">
            Illustrative patterns — not published timelines, guarantees or client results.
          </p>
          <div className="grid gap-6 md:grid-cols-1">
            {[
              ["iGaming · Banking", "Licence active. No operational account.", "AML and corporate documentation did not meet banking standards. Work focused on compliance rebuild and coordinated outreach to institutions."],
              ["Payments · Cross-border", "PSP terminated. Operations at risk.", "Single-provider dependency with no contingency. Work focused on restructuring payment access across providers and jurisdictions."],
              ["Fintech · Banking", "Licensed EMI. Banks refused onboarding.", "Safeguarding and AML documentation insufficient for due diligence. Work focused on rebuilding the compliance layer with specialist partners."],
            ].map(([tag, title, body]) => (
              <div
                key={title}
                className="flex flex-col rounded-lg border border-y border-r border-border/50 border-l-[3px] border-l-primary bg-background p-6 md:p-8"
              >
                <span className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-accent">{tag}</span>
                <h3 className="mb-4 font-sans text-lg font-semibold text-primary">{title}</h3>
                <p className="body-text">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <h2 className="heading-section" style={{ marginBottom: "24px" }}>
            This is for operations where banking is a structural constraint.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              "Banking declined or terminated and the pattern repeats.",
              "Payment processing dependent on a single provider.",
              "Licensed but banking remains blocked.",
              "Expanding and need banking in place before launch.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--blue-light)", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>Not for you if</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Looking for a bank that does not ask questions.",
              "Unwilling to restructure compliance or corporate design.",
              "Banking difficulty caused by activity that is not licensable.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span className="mt-0.5 shrink-0 text-muted-foreground">—</span>
                <p className="body-text text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="label">Related</p>
          <p className="body-sm text-muted-foreground mb-5">
            Where banking becomes the constraint:{" "}
            <Link href="/jurisdictions/uae" style={{ color: "var(--blue-light)" }}>UAE</Link>
            {" · "}
            <Link href="/jurisdictions/anjouan" style={{ color: "var(--blue-light)" }}>Anjouan</Link>
          </p>
          <div className="grid-auto-lg">
            {[
              { title: "iGaming Licensing", desc: "Banking integral to licensing", href: "/solutions/regulatory/igaming-licensing" },
              { title: "Fintech Licensing", desc: "EMI/PI banking and safeguarding", href: "/solutions/regulatory/fintech-licensing" },
              { title: "Compliance-as-a-Service", desc: "Compliance banks accept", href: "/solutions/compliance/compliance-as-a-service" },
              { title: "AML/KYC", desc: "Documentation to banking standards", href: "/solutions/compliance/aml-kyc" },
              { title: "High-Risk Operations", desc: "Banking under classification pressure", href: "/markets/high-risk" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-grid" style={{ padding: "28px" }}>
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "8px" }}>{item.title}</h3>
                <p className="body-sm" style={{ marginBottom: "12px" }}>{item.desc}</p>
                <span style={{ color: "var(--blue-light)", fontSize: "13px" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <p className="body-text" style={{ color: "var(--white-40)", marginBottom: "16px" }}>
            If banking keeps failing, the structure keeps failing.
          </p>
          <h2 className="heading-lg cta-block__title">
            Fix the structure. The banking follows.
          </h2>
          <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
        </div>
      </section>
    </main>
  );
}
