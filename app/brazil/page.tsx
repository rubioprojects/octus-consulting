import Link from "next/link";
import { CTA_DISCUSS_LABEL, WHATSAPP_DISCUSS_URL } from "../../lib/cta";
import { CtaLink } from "../../components/system/CtaButton";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Brazil",
  description:
    "Regulatory structuring, compliance and corporate architecture for regulated operations entering or operating in Brazil.",
  path: "/brazil",
});

const areaLinks = [
  { label: "Regulatory Structuring", href: "/solutions/regulatory-structuring" },
  { label: "Compliance & Risk", href: "/solutions/compliance-risk" },
  { label: "Corporate Structuring", href: "/solutions/corporate-structuring" },
  { label: "Banking & Payments", href: "/solutions/banking-payments-infrastructure" },
  { label: "Remediation & Readiness", href: "/solutions/remediation-readiness" },
];

export default function BrazilPage() {
  return (
    <main>
      {/* Who this is for */}
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Brazil</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] sp-headline">
            Brazil&apos;s regulated market
            <br />
            <span className="text-white/40">requires a different architecture.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            For international operators, Brazil-facing suppliers and groups building local presence
            under SPA/MF — Octus coordinates regulatory, corporate, compliance and banking
            workstreams inside Brazilian processes since 2019.
          </p>
          <div className="mt-12">
            <CtaLink href={WHATSAPP_DISCUSS_URL} variant="on-dark" target="_blank" rel="noopener noreferrer">
              {CTA_DISCUSS_LABEL}
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Regulatory entry */}
          <div className="mb-16">
            <span className="label">Regulatory entry</span>
            <h2 className="heading-section mt-4 max-w-2xl">Entering Brazil as a regulated operator.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              International licence alone does not satisfy SPA/MF requirements. Pathway design,
              corporate prerequisites and compliance readiness must be sequenced before filings.
            </p>
          </div>

          {/* SPA/MF */}
          <div className="mb-16 border-t border-border pt-16">
            <span className="label">SPA / MF</span>
            <h2 className="heading-section mt-4 max-w-2xl">Sports betting and gaming under SPA/MF.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              Licensing, recertification, B2B registration and regulatory coordination under the
              Secretaria de Prêmios e Apostas and Ministério da Fazenda framework — coordinated
              with corporate and compliance layers.
            </p>
          </div>

          {/* B2B / supplier */}
          <div className="mb-16 border-t border-border pt-16">
            <span className="label">B2B &amp; supplier</span>
            <h2 className="heading-section mt-4 max-w-2xl">Supplier and B2B registration paths.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              Platform providers, laboratories and B2B suppliers face registration dependencies
              sequenced with operator licensing programmes.
            </p>
          </div>

          {/* Corporate / local presence */}
          <div className="mb-16 border-t border-border pt-16">
            <span className="label">Corporate &amp; local presence</span>
            <h2 className="heading-section mt-4 max-w-2xl">Local entities and group coherence.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              CNPJ registration, local corporate structure and alignment with international group
              architecture — designed for regulatory and banking scrutiny.
            </p>
          </div>

          {/* Compliance / AML */}
          <div className="mb-16 border-t border-border pt-16">
            <span className="label">Compliance &amp; AML</span>
            <h2 className="heading-section mt-4 max-w-2xl">LGPD, AML and operational compliance.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              Data protection, AML/KYC frameworks and compliance operations aligned to how the
              Brazil operation actually runs — not paper compliance for the application pack alone.
            </p>
          </div>

          {/* Banking / payments */}
          <div className="mb-16 border-t border-border pt-16">
            <span className="label">Banking &amp; payments</span>
            <h2 className="heading-section mt-4 max-w-2xl">Payment infrastructure in Brazil.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              Payment institution structuring, Bacen coordination and banking readiness sequenced
              with licensing and compliance — routed through{" "}
              <Link href="/solutions/banking-payments-infrastructure" className="text-primary no-underline">
                Banking &amp; Payments infrastructure
              </Link>
              .
            </p>
          </div>

          {/* Tax / finance */}
          <div className="mb-16 border-t border-border pt-16">
            <span className="label">Tax &amp; finance</span>
            <h2 className="heading-section mt-4 max-w-2xl">Corporate and operational finance coordination.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              Corporate tax planning and finance coordination for Brazil-facing groups — integrated
              with corporate structuring, not standalone tax advice.
            </p>
          </div>

          {/* Links to service areas */}
          <div className="mb-16 border-t border-border pt-16">
            <span className="label">Service areas</span>
            <h2 className="heading-section mt-4 max-w-2xl">Where Brazil workstreams live.</h2>
            <ul className="mt-6 flex list-none flex-wrap gap-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-sm border border-border px-3 py-1.5 font-sans text-sm no-underline hover:border-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brazil Insights */}
          <div className="border-t border-border pt-16">
            <span className="label">Brazil Insights</span>
            <h2 className="heading-section mt-4 max-w-2xl">Intelligence on Brazil regulation.</h2>
            <p className="body-large mt-4 max-w-2xl text-muted-foreground">
              Analysis and updates on SPA/MF, betting regulation and Brazil market entry — from the
              Octus Intelligence library.
            </p>
            <Link
              href="/insights"
              className="mt-6 inline-block font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
            >
              Explore Insights →
            </Link>
          </div>
        </div>
      </section>

      <section className="surface-dark py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <OctusEditorialDivider className="mb-10 opacity-30" />
          <h2 className="mb-8 font-heading text-2xl font-semibold text-white md:text-3xl">
            Discuss your Brazil operation.
          </h2>
          <CtaLink href={WHATSAPP_DISCUSS_URL} variant="on-dark" target="_blank" rel="noopener noreferrer">
            {CTA_DISCUSS_LABEL}
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
