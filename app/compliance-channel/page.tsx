export const metadata = {
  title: "Compliance Channel",
  description: "Octus Consulting compliance and ethics reporting channel. Confidential reporting for internal and external stakeholders.",
};

export default function ComplianceChannelPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">Compliance</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">Compliance Channel</h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "560px" }}>
            A confidential channel for reporting compliance concerns, ethical
            issues or potential irregularities related to Octus operations or
            client engagements.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <span className="label">About this channel</span>
          <h2 className="heading-section" style={{ margin: "24px 0 20px" }}>
            Independent, confidential and secure.
          </h2>
          <p className="body-lg" style={{ marginBottom: "20px" }}>
            All internal team members and external stakeholders may use this
            channel to report: anonymously if preferred: any violation or
            suspected violation of applicable law, international regulation, or
            Octus internal policies, including our Code of Ethics and Conduct.
          </p>
          <p className="body-text">
            Reports are managed in an independent, secure environment monitored
            by our designated Compliance Officer. Confidentiality and anonymity
            are guaranteed.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "760px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {[
              {
                label: "Submit a report",
                desc: "Use our secure external reporting platform, operated independently by BeCompliance.",
                action: "Access the reporting platform →",
                href: "https://iratisantosadvocacia.becompliance.com/canal-etica/canal-denuncias",
                external: true,
              },
              {
                label: "Direct contact",
                desc: "For compliance enquiries or to follow up on an existing report, contact us directly.",
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
              Compliance Officer & DPO
            </p>
            <p className="body-sm">
              Reports submitted through the platform are independently managed
              and monitored. To track an existing report, use the protocol
              number generated at the time of submission.
            </p>
          </div>

          <p className="body-sm mt-8 text-muted-foreground">
            This channel is governed by our{" "}
            <a href="/privacy" className="text-primary underline">
              Privacy Policy
            </a>{" "}
            and applicable data protection law, including GDPR and LGPD where
            relevant.
          </p>
        </div>
      </section>
    </main>
  );
}
