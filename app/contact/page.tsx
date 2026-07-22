import {
  CTA_ASSESS_LABEL,
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_ASSESS,
  MAILTO_DISCUSS,
  OCTUS_EMAIL,
  WHATSAPP_ASSESS_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "Discuss your regulated operation with Octus. WhatsApp for fast conversation, or email info@octusconsulting.com for institutional contact — no mass forms.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Contact Octus</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            Discuss your operation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Octus is a high-ticket consultancy. We prioritize qualified conversations — not mass lead
            capture. Use WhatsApp for a fast path, or email for a formal institutional trail.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-10 text-base font-medium tracking-wide text-primary transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {CTA_DISCUSS_LABEL}
            </a>
            <a
              href={MAILTO_DISCUSS}
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {CTA_EMAIL_LABEL}
            </a>
          </div>
          <p className="mt-6 font-sans text-sm text-white/50">
            Professional email:{" "}
            <a
              href={MAILTO_DISCUSS}
              className="text-white/75 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {OCTUS_EMAIL}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">How to reach us</p>
          <h2 className="heading-section mb-8">Two paths. Same standard.</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-sm border border-border p-6">
              <p className="section-label mb-2 block">Primary</p>
              <h3 className="mb-3 font-sans text-lg font-semibold text-primary">Discuss your operation</h3>
              <p className="body-text mb-4">
                For commercial conversations about market entry, licensing, banking, compliance or
                structure. WhatsApp is often fastest for Brazil and LATAM; email works for
                international and institutional buyers.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_DISCUSS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  {CTA_DISCUSS_LABEL}
                </a>
                <a
                  href={MAILTO_DISCUSS}
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  {CTA_EMAIL_LABEL}
                </a>
              </div>
            </article>
            <article className="rounded-sm border border-border p-6">
              <p className="section-label mb-2 block">Crisis / remediation</p>
              <h3 className="mb-3 font-sans text-lg font-semibold text-primary">Assess your situation</h3>
              <p className="body-text mb-4">
                When the operation is already blocked — stalled license, banking failure, regulatory
                pressure or structural exposure. Same accountability; different entry framing.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_ASSESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  {CTA_ASSESS_LABEL}
                </a>
                <a
                  href={MAILTO_ASSESS}
                  className="font-sans text-sm font-medium text-primary no-underline hover:underline"
                >
                  Email for assessment →
                </a>
              </div>
            </article>
          </div>

          <ol className="mt-16 flex list-none flex-col gap-8">
            <p className="section-label mb-0 block">What happens next</p>
            {[
              {
                n: "01",
                t: "You reach out",
                b: "WhatsApp or email — briefly describe the operation and where it is stuck.",
              },
              {
                n: "02",
                t: "We assess fit",
                b: "If we can help structurally, we schedule a diagnostic conversation.",
              },
              {
                n: "03",
                t: "Scope with clarity",
                b: "If there is a path forward, we define scope, model and timeline — without ambiguity.",
              },
            ].map((s) => (
              <li key={s.n} className="grid grid-cols-[48px_1fr] gap-6 border-b border-border pb-8 last:border-0">
                <span className="font-heading text-xs font-bold tracking-widest text-primary">{s.n}</span>
                <div>
                  <h3 className="mb-2 font-sans text-lg font-semibold text-primary">{s.t}</h3>
                  <p className="body-text">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-10">
            <Link
              href="/what-octus-does"
              className="font-sans text-sm font-medium text-primary no-underline hover:underline"
            >
              What Octus does →
            </Link>
            <Link
              href="/resources/igaming-operator-readiness"
              className="font-sans text-sm font-medium text-primary no-underline hover:underline"
            >
              iGaming Operator Readiness Checklist →
            </Link>
            <Link
              href="/how-we-engage"
              className="font-sans text-sm font-medium text-primary no-underline hover:underline"
            >
              How we engage →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
