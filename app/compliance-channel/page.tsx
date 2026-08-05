import { pageSocialMeta } from "../../lib/pageMeta";
export const metadata = pageSocialMeta({
  title: "Compliance Channel",
  description:
    "Octus Consulting compliance and ethics reporting channel. Confidential reporting options for internal and external stakeholders.",
  path: "/compliance-channel",
});

export default function ComplianceChannelPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="mb-5 block text-xs font-medium uppercase tracking-[0.12em] text-white/65">Compliance</span>
          <h1 className="font-heading text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.005em] text-[color:var(--text-primary-on-dark)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] sp-headline">Compliance Channel</h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "560px" }}>
            A channel for reporting compliance concerns, ethical issues or potential
            irregularities related to Octus operations or client engagements.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">About this channel</span>
          <h2 className="heading-section" style={{ margin: "24px 0 20px" }}>
            Purpose and how to report.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            Internal team members and external stakeholders may use this channel to report
            suspected violations of applicable law, regulation, or Octus internal policies,
            including our Code of Ethics and Conduct. Where the external platform allows,
            you may submit without identifying yourself.
          </p>
          <p className="body-text">
            Reports submitted through the external platform are handled in that third-party
            environment. Octus treats reports as confidential to the extent permitted by law
            and the platform&apos;s design. Confidentiality and anonymity are not absolute
            guarantees: legal process, platform limits or information you choose to share may
            affect what can be protected. No response-time SLA, investigation outcome or
            regulator escalation is promised on this page.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                label: "Submit a report",
                desc: "Use the secure external reporting platform operated by BeCompliance (linked below). Platform features and anonymity options are defined by that provider.",
                action: "Access the reporting platform →",
                href: "https://iratisantosadvocacia.becompliance.com/canal-etica/canal-denuncias",
                external: true,
              },
              {
                label: "Direct contact",
                desc: "For compliance enquiries or to follow up on an existing report, contact compliance@octusconsulting.com. Response timing is not guaranteed.",
                action: "compliance@octusconsulting.com",
                href: "mailto:compliance@octusconsulting.com",
                external: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  className="label"
                  style={{ marginBottom: "12px" }}
                >
                  {item.label}
                </span>
                <p className="body-sm flex-grow mb-5 text-muted-foreground">
                  {item.desc}
                </p>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: "var(--font-unigeo), 'Unigeo64', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--blue-light)",
                    textDecoration: "none",
                    wordBreak: "break-all",
                  }}
                >
                  {item.action}
                </a>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "24px",
              background: "var(--card-bg)",
              border: "1px solid var(--border-solid)",
              borderRadius: "10px",
            }}
          >
            <p className="body-sm" style={{ color: "var(--white-40)", marginBottom: "8px" }}>
              Compliance contact
            </p>
            <p className="body-sm">
              Where the external platform issues a protocol number at submission, use that
              reference to track the report in the platform. This page does not invent a
              named Data Protection Officer appointment or investigation guarantees.
            </p>
          </div>

          <p className="body-sm mt-8 text-muted-foreground">
            This channel is governed by our{" "}
            <a href="/privacy" className="text-primary underline">
              Privacy Policy
            </a>{" "}
            and applicable data protection law, including GDPR and LGPD where relevant.
          </p>
        </div>
      </section>
    </main>
  );
}
