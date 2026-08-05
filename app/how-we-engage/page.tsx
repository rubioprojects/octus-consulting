import {
  CTA_DISCUSS_LABEL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import { ENGAGEMENT_MODELS } from "../../lib/commercial";
import PageHero from "../../components/system/PageHero";
import Link from "next/link";
import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "How We Engage",
  description:
    
    "How Octus engages on regulated mandates: diagnostic clarity, structured workstreams, accountable delivery and jurisdiction-aware execution.",
  path: "/how-we-engage",
});

export default function HowWeEngagePage() {
  return (
    <main>
      <PageHero
        eyebrow="How we engage"
        title="Lead contractor."
        titleSecondLine="Not one more provider."
        description="Octus assumes coordination across regulatory, compliance, banking and corporate layers: so you are not managing a fragmented stack of advisors."
        primaryCta={{ href: WHATSAPP_DISCUSS_URL, label: CTA_DISCUSS_LABEL, external: true }}
        secondaryCta={{ href: "/solutions", label: "Explore services", quiet: true }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Lead contractor</p>
          <h2 className="heading-section mb-6">What lead contractor means</h2>
          <p className="body-large mb-4">
            Most regulated operations fail because licensing, legal, compliance and banking move as
            separate workstreams with no single owner of the whole.
          </p>
          <p className="body-text mb-4">
            As lead contractor, Octus coordinates the structure that needs to hold and stays
            responsible for the execution mandate you agree. We do not promise regulator approvals,
            bank decisions or outcomes outside that mandate.
          </p>
        </div>
      </section>

      <section className="surface-elevated py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">International hub</p>
          <h2 className="heading-section mb-6">Local specialists. Central coordination.</h2>
          <p className="body-large mb-4">
            Cross-border mandates often require trusted local specialists and appropriate local
            representation. Octus identifies those partners, helps select them, and designs the
            international structure around the operating requirement.
          </p>
          <p className="body-text mb-4">
            Octus remains the central coordination point across jurisdictions so regulatory,
            compliance, corporate and banking workstreams stay sequenced under one operating
            mandate.
          </p>
          <Link
            href="/international-hub"
            className="mt-2 inline-flex font-sans text-sm font-medium text-primary no-underline hover:text-primary/80"
          >
            Explore International Hub →
          </Link>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">Engagement models</p>
          <h2 className="heading-section mb-4 max-w-2xl">How engagement scales</h2>
          <p className="body-text mb-12 max-w-2xl text-muted-foreground">
            These are operating models for coordination. They are not packaged products and do not
            promise regulatory, banking or audit outcomes.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ENGAGEMENT_MODELS.map((m) => (
              <article key={m.num} className="rounded-sm border border-border bg-background p-6 md:p-8">
                <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {m.num}
                </p>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{m.title}</h3>
                <p className="body-text text-muted-foreground">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-elevated py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="heading-section mb-4">Ready to discuss your operation?</h2>
          <p className="body-large mx-auto mb-8 max-w-xl text-muted-foreground">
            If the mandate needs a single coordination point across jurisdictions, start a
            conversation.
          </p>
          <a
            href={WHATSAPP_DISCUSS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {CTA_DISCUSS_LABEL}
          </a>
          <p className="mt-6">
            <Link
              href="/solutions/remediation-readiness"
              className="font-sans text-sm font-medium text-primary no-underline hover:underline"
            >
              Crisis or blocked operation? Open Remediation →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
