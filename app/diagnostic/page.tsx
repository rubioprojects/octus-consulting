import {
  CTA_DIAGNOSTIC_LABEL,
  CTA_DISCUSS_LABEL,
  MAILTO_INFO,
  WHATSAPP_DIAGNOSTIC_URL,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";

export const metadata = {
  title: "Regulatory Diagnostic",
  description:
    "Request a structural diagnostic conversation with Octus — regulatory exposure, jurisdiction fit and readiness, via WhatsApp.",
};

export default function DiagnosticPage() {
  return (
    <main>
      <section className="surface-dark relative flex min-h-[70vh] flex-col justify-center pt-24 pb-16 md:min-h-[80vh] md:pt-28 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="label">Regulatory diagnostic</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            A structured conversation.
            <br />
            <span className="text-white/70">Not a form.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            We evaluate regulatory exposure, jurisdiction fit and structural readiness before recommending
            a path. Start on WhatsApp — we respond with a diagnostic conversation when there is fit.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_DIAGNOSTIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-10 text-base font-medium tracking-wide text-primary transition-colors hover:bg-white/90"
            >
              {CTA_DIAGNOSTIC_LABEL}
            </a>
            <a
              href={WHATSAPP_DISCUSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 px-10 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              {CTA_DISCUSS_LABEL}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="body-large mb-8">
            Prefer email? Write to{" "}
            <a href={MAILTO_INFO} className="text-primary underline-offset-4 hover:underline">
              info@octusconsulting.com
            </a>
            .
          </p>
          <p className="body-text text-muted-foreground">
            We do not operate mass lead-capture forms. Octus engages through qualified conversations.
          </p>
        </div>
      </section>
    </main>
  );
}
