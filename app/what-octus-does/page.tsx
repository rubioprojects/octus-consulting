import Link from "next/link";
import {
  CTA_DISCUSS_LABEL,
  CTA_EMAIL_LABEL,
  MAILTO_DISCUSS,
  WHATSAPP_DISCUSS_URL,
} from "../../lib/cta";
import OctusSymbolMarker from "../../components/system/OctusSymbolMarker";
import OctusEditorialDivider from "../../components/system/OctusEditorialDivider";

export const metadata = {
  title: "What Octus Does",
  description:
    "A plain-language explanation of Octus: who we help, when to contact us, what we coordinate and execute, and how we differ from a law firm, consultancy, license shop or software vendor.",
  openGraph: {
    title: "What Octus Does | Octus Consulting",
    description:
      "Plain-language positioning for regulated companies — licensing, banking, compliance, structure and remediation under one accountable team.",
    url: "https://octusconsulting.com/what-octus-does",
    images: [
      {
        url: "https://octusconsulting.com/brand/social/octus-og-default.png",
        width: 1200,
        height: 630,
        alt: "Octus Consulting",
      },
    ],
  },
  alternates: {
    canonical: "https://octusconsulting.com/what-octus-does",
  },
};

const DOMAINS = [
  { n: "01", t: "Regulatory and licensing", b: "Market entry strategy, filings, dossiers and coordination with authorities." },
  { n: "02", t: "Banking and payments", b: "Structure and documentation so licensed operations can open and keep accounts and PSP access." },
  { n: "03", t: "Compliance", b: "AML, KYC, controls and programmes built to survive real scrutiny — not a policies folder." },
  { n: "04", t: "Corporate structuring", b: "Entities and holdings designed for license, bank and cross-border pressure." },
  { n: "05", t: "Tax coordination", b: "Sequencing tax workstreams with local professionals — Octus coordinates; reserved tax advice stays with licensed advisers where required." },
  { n: "06", t: "Legal and contractual architecture", b: "Contracts and structures that support the operation — Octus is not a substitute law firm for reserved legal work." },
  { n: "07", t: "Remediation", b: "When licensing, banking or compliance is already failing — diagnose structure and rebuild." },
];

const SITUATIONS = [
  "Entering a regulated market without a clear structural path",
  "License stuck or incomplete dossier",
  "Licensed but unable to bank or keep a PSP",
  "Compliance that exists on paper but fails under audit",
  "Expansion that breaks entity, banking or reporting design",
  "Regulatory or banking pressure requiring remediation",
];

export default function WhatOctusDoesPage() {
  return (
    <main className="authority-asset">
      <article className="authority-asset__doc">
        <header className="authority-asset__hero surface-dark">
          <div className="authority-asset__inner">
            <OctusSymbolMarker tone="white" size={20} />
            <p className="label text-white/70">Authority asset · Plain language</p>
            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
              What Octus Does
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              A short explanation you can forward to a colleague, board member or partner — without
              jargon.
            </p>
            <p className="authority-asset__print-hint mt-4 font-sans text-xs text-white/45 print:hidden">
              Tip: use your browser&apos;s Print → Save as PDF for a shareable copy.
            </p>
          </div>
        </header>

        <div className="authority-asset__inner authority-asset__body bg-background py-16 md:py-20">
          <section className="authority-asset__section">
            <span className="editorial-numeral editorial-numeral--sm">01</span>
            <h2 className="heading-section mt-3">What Octus is</h2>
            <p className="body-large mt-4">
              Octus is an execution partner for companies that operate under heavy regulation. We
              help them enter markets, obtain or preserve licenses, structure companies and banking,
              stay compliant, and fix problems when something goes wrong.
            </p>
            <p className="body-text mt-4">
              We do not sell software packages. We sell judgment, coordination and accountable
              execution across regulatory, banking, compliance and corporate workstreams.
            </p>
          </section>

          <OctusEditorialDivider className="my-12 ml-0 mr-auto" />

          <section className="authority-asset__section">
            <span className="editorial-numeral editorial-numeral--sm">02</span>
            <h2 className="heading-section mt-3">Who Octus helps</h2>
            <p className="body-large mt-4">
              Operators and groups in regulated digital sectors — especially iGaming and betting,
              fintech, and other high-risk businesses that need licenses, banks and compliance to
              function together.
            </p>
            <p className="body-text mt-4">
              Typical readers of this page: founders, general counsel, compliance leads, CFOs and
              partners preparing an internal decision.
            </p>
          </section>

          <OctusEditorialDivider className="my-12 ml-0 mr-auto" />

          <section className="authority-asset__section">
            <span className="editorial-numeral editorial-numeral--sm">03</span>
            <h2 className="heading-section mt-3">When companies contact Octus</h2>
            <ul className="mt-6 flex list-none flex-col gap-3">
              {SITUATIONS.map((s) => (
                <li
                  key={s}
                  className="border-l-[3px] border-l-primary bg-primary/5 px-5 py-3 font-sans text-sm text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <OctusEditorialDivider className="my-12 ml-0 mr-auto" />

          <section className="authority-asset__section">
            <span className="editorial-numeral editorial-numeral--sm">04</span>
            <h2 className="heading-section mt-3">What Octus coordinates and executes</h2>
            <p className="body-text mt-4 mb-8">
              Octus often acts as lead contractor: one accountable layer across specialists and
              jurisdictions. Local reserved activities (for example courtroom advocacy or local tax
              opinions) remain with licensed professionals where the law requires it.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {DOMAINS.map((d) => (
                <div key={d.n} className="rounded-sm border border-border p-5">
                  <p className="font-heading text-xs font-bold tracking-widest text-primary">{d.n}</p>
                  <h3 className="mt-2 font-sans text-base font-semibold text-primary">{d.t}</h3>
                  <p className="body-sm mt-2">{d.b}</p>
                </div>
              ))}
            </div>
          </section>

          <OctusEditorialDivider className="my-12 ml-0 mr-auto" />

          <section className="authority-asset__section">
            <span className="editorial-numeral editorial-numeral--sm">05</span>
            <h2 className="heading-section mt-3">How Octus differs</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="authority-asset__table w-full text-left font-sans text-sm">
                <thead>
                  <tr>
                    <th scope="col">Not this</th>
                    <th scope="col">Octus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Traditional law firm</td>
                    <td>Coordinates legal architecture; does not replace reserved legal practice</td>
                  </tr>
                  <tr>
                    <td>Accounting firm</td>
                    <td>Coordinates tax and corporate workstreams; local tax advice stays local</td>
                  </tr>
                  <tr>
                    <td>Licensing reseller</td>
                    <td>Builds structure so a license can bank and operate — not a paper license alone</td>
                  </tr>
                  <tr>
                    <td>Generic consultancy</td>
                    <td>Enters live operations and stays accountable for structural outcomes</td>
                  </tr>
                  <tr>
                    <td>Software / SaaS</td>
                    <td>People and execution — not a product dashboard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <OctusEditorialDivider className="my-12 ml-0 mr-auto" />

          <section className="authority-asset__section">
            <span className="editorial-numeral editorial-numeral--sm">06</span>
            <h2 className="heading-section mt-3">How engagement begins</h2>
            <ol className="mt-6 flex list-none flex-col gap-6">
              {[
                { n: "01", t: "Reach out", b: "WhatsApp or email — describe the operation and the pressure point." },
                { n: "02", t: "Fit assessment", b: "We confirm whether the problem is structural and whether Octus is the right layer." },
                { n: "03", t: "Scope", b: "If we proceed, we define model, scope and timeline with clarity — no ambiguity theatre." },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-[48px_1fr] gap-4">
                  <span className="font-heading text-xs font-bold tracking-widest text-primary">{s.n}</span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-primary">{s.t}</h3>
                    <p className="body-sm mt-1">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="body-sm mt-6 text-muted-foreground">
              More detail:{" "}
              <Link href="/how-we-engage" className="text-primary no-underline hover:underline">
                How we engage
              </Link>
              .
            </p>
          </section>

          <section className="authority-asset__cta mt-14 border-t border-border pt-10 print:hidden">
            <h2 className="heading-sm mb-4">Next step</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_DISCUSS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {CTA_DISCUSS_LABEL}
              </a>
              <a
                href={MAILTO_DISCUSS}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 text-base font-medium text-primary transition-colors hover:bg-secondary"
              >
                {CTA_EMAIL_LABEL}
              </a>
              <Link
                href="/resources/igaming-operator-readiness"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 text-base font-medium text-primary transition-colors hover:bg-secondary no-underline"
              >
                iGaming checklist →
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
