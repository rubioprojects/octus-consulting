import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";

export const metadata = {
  title: "Brazil",
  description: "Regulatory structuring, compliance and corporate architecture for regulated operations entering or operating in Brazil.",
};

export default function BrazilPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Brazil</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Brazil&apos;s regulated market<br />
            <span style={{ color: "var(--white-40)" }}>requires a different architecture.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-2xl" style={{ maxWidth: "600px" }}>
            Brazil is one of the most complex regulated environments in the
            world — with its own licensing framework (SPA/MF), data protection
            regime (LGPD), banking infrastructure and corporate requirements.
            Octus has been operating inside Brazilian regulatory processes since
            2019.
          </p>
          <div style={{ marginTop: "48px" }}>
            <a href={WHATSAPP_DISCUSS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_DISCUSS_LABEL}</a>
          </div>
        </div>
      </section>
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">What we structure for Brazil</span>
          <div className="grid-3" style={{ marginTop: "48px" }}>
            {[
              { title: "SPA/MF Licensing", body: "Brazilian sports betting and gaming licensing under the Secretaria de Prêmios e Apostas and Ministério da Fazenda framework. From pre-application structuring to regulatory coordination." },
              { title: "LGPD Compliance", body: "Data protection framework design and implementation aligned with the Lei Geral de Proteção de Dados — including DPO coordination and operational compliance." },
              { title: "Corporate & Banking Setup", body: "Corporate structuring, CNPJ registration and banking access for international operators entering the Brazilian market." },
              { title: "Regulatory Monitoring", body: "Ongoing tracking of Brazil's evolving regulated gaming and fintech frameworks — ensuring structures adapt as the regulatory environment develops." },
              { title: "Payment & Fintech Access", body: "Payment institution structuring, Bacen coordination and fintech regulatory requirements for operators requiring Brazilian payment infrastructure." },
              { title: "Cross-border Coordination", body: "Alignment between Brazilian operations and international corporate structures — ensuring coherence across jurisdictions." },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-lg p-6 md:p-8 border border-transparent transition-all duration-300 hover:border-border">
                <h3 className="text-lg font-semibold text-primary font-sans" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body-text">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">Structure your Brazil operation.</h2>
          <a href={WHATSAPP_ASSESS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">{CTA_ASSESS_LABEL}</a>
        </div>
      </section>
    </main>
  );
}
