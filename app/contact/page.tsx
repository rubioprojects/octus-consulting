import {
  CTA_DIAGNOSTIC_LABEL,
  CTA_DISCUSS_LABEL,
  MAILTO_INFO,
  WHATSAPP_DIAGNOSTIC_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";

import { pageSocialMeta } from "../../lib/pageMeta";

export const metadata = pageSocialMeta({
  title: "Contact",
  description:
    "Discuss your regulated operation with Octus. High-ticket consultancy intake via WhatsApp or email: no mass forms.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <span className="label">Contact</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            Discuss your operation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Octus is a high-ticket consultancy. We prioritize qualified conversations, not mass lead
            capture. Reach us on WhatsApp or email.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-10 text-base font-medium tracking-wide text-primary transition-colors hover:bg-white/90"
            >
              {CTA_DISCUSS_LABEL}
            </a>
            <a
              href={MAILTO_INFO}
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-transparent px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              info@octusconsulting.com
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4 block">What happens next</p>
          <h2 className="heading-section mb-8">A conversation, not a ticket.</h2>
          <ol className="flex list-none flex-col gap-8">
            {[
              {
                n: "01",
                t: "You reach out",
                b: "WhatsApp or email: briefly describe the operation and where it is stuck.",
              },
              {
                n: "02",
                t: "We assess fit",
                b: "If we can help structurally, we schedule a diagnostic conversation.",
              },
              {
                n: "03",
                t: "Scope with clarity",
                b: "If there is a path forward, we define scope, model and timeline without ambiguity.",
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
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_DIAGNOSTIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {CTA_DIAGNOSTIC_LABEL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
