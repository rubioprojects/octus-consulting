import Link from "next/link";

export const metadata = {
  title: "Brazil — Octus Consulting",
  description: "Regulatory structuring, compliance and corporate architecture for regulated operations entering or operating in Brazil.",
};

export default function BrazilPage() {
  return (
    <main>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="label">Brazil</span>
          <h1 className="heading-xl sp-headline">
            Brazil&apos;s regulated market<br />
            <span style={{ color: "var(--white-40)" }}>requires a different architecture.</span>
          </h1>
          <p className="body-lg sp-sub" style={{ maxWidth: "600px" }}>
            Brazil is one of the most complex regulated environments in the
            world — with its own licensing framework (SPA/MF), data protection
            regime (LGPD), banking infrastructure and corporate requirements.
            Octus has been operating inside Brazilian regulatory processes since
            2019.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/contact" className="btn-primary btn-primary-lg">Discuss your Brazil operation →</Link>
          </div>
        </div>
      </section>
      <section className="section-dark section-padded">
        <div className="container">
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
              <div key={item.title} className="card-lg">
                <h3 className="heading-card" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-block">
        <div className="cta-block__bg" />
        <div className="cta-block__inner">
          <h2 className="heading-lg cta-block__title">Structure your Brazil operation.</h2>
          <Link href="/contact" className="btn-primary btn-primary-lg">Request a diagnostic →</Link>
        </div>
      </section>
    </main>
  );
}
