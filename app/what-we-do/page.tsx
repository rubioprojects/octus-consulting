import { Metadata } from 'next'
import Link from 'next/link'
import CTABlock from '@/components/CTABlock'
import { services, industries } from '@/data/services'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'How Octus structures regulated operations — 7 modules, multiple industries, single coordination layer.',
}

const layers = [
  { n: '01', title: 'Regulatory', desc: 'Licensing, jurisdiction, authorization. The entry point to any regulated market.' },
  { n: '02', title: 'Compliance', desc: 'KYC, AML, policies, certifications. The ongoing framework that keeps operations running.' },
  { n: '03', title: 'Legal', desc: 'Contracts, documentation, legal architecture. The backbone behind the operation.' },
  { n: '04', title: 'Corporate', desc: 'Structure, governance, holding design. The foundation that enables scale and protection.' },
]

const whenClients = [
  'Entering a new regulated market for the first time',
  'License approved but no bank account',
  'Regulatory process stalled without explanation',
  'Expanding across multiple jurisdictions simultaneously',
  'Audit or regulatory inspection imminent',
  'Corporate structure not aligned with regulatory requirements',
  'PSPs or payment providers refusing to onboard',
  'Operation under pressure with no clear path forward',
]

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="tag-blue">What we do</span>
          <h1 className="heading-xl wwd-headline">
            We structure and fix operations<br />in highly regulated markets.
          </h1>
          <p className="body-lg wwd-sub">
            Every regulated operation relies on four critical layers working together: regulatory, compliance, legal and corporate. When these layers are fragmented, operations fail. Octus builds and repairs the structure that connects them.
          </p>
        </div>
      </section>

      {/* Four layers */}
      <div className="section-dark section-padded">
        <div className="container">
          <span className="label">The structure behind every operation</span>
          <h2 className="heading-md">Four layers. All must work together.</h2>
          <p className="text-faint wwd-layers-sub">When these layers don&apos;t work together, operations fail. This is where Octus operates.</p>
          <div className="tile-grid grid-4 wwd-layers-grid">
            {layers.map(l => (
              <div key={l.n} className="card-grid">
                <span className="label wwd-layer-num">{l.n}</span>
                <div className="heading-card wwd-layer-title">{l.title}</div>
                <p className="body-sm">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7 modules */}
      <section className="section-padded wwd-modules-section">
        <div className="container">
          <span className="label">The 7 modules</span>
          <h2 className="heading-md">What we do — and for whom.</h2>
          <p className="text-faint wwd-modules-sub">Each module is a working unit. Together, they cover every layer of a regulated operation.</p>
          <div className="tile-grid wwd-modules-table">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="wwd-module-row">
                <span className="label wwd-module-num">{s.num}</span>
                <div>
                  <div className="heading-card wwd-module-title">{s.title}</div>
                  <div className="wwd-col-label">For whom</div>
                  {s.forWhom.map((f, i) => (
                    <div key={i} className="dash-list"><div className="dash-list-item"><span>–</span>{f}</div></div>
                  ))}
                </div>
                <div>
                  <div className="wwd-col-label">When you need this</div>
                  <p className="body-sm">{s.when}</p>
                  <div className="wwd-col-label wwd-col-label-mt">What we resolve</div>
                  <p className="body-sm">{s.resolves}</p>
                </div>
                <div>
                  <div className="wwd-col-label">Relevant industries</div>
                  <div className="chip-row wwd-module-chips">
                    {s.industries.map(ind => <span key={ind} className="chip">{ind}</span>)}
                  </div>
                  <span className="wwd-module-link">See full details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <div className="section-dark section-padded">
        <div className="container">
          <span className="label">Industries we operate in</span>
          <h2 className="heading-md">Highly regulated markets. Multiple sectors.</h2>
          <p className="text-faint wwd-industries-sub">iGaming is where Octus started. Today we apply the same execution depth across every regulated industry.</p>
          <div className="grid-2 wwd-industries-grid">
            {industries.map(ind => (
              <div key={ind.name} className="card-lg">
                <div className="heading-sm wwd-industry-name">{ind.name}</div>
                <p className="body wwd-industry-desc">{ind.desc}</p>
                <div className="wwd-col-label">Relevant modules</div>
                <div className="chip-row">
                  {ind.modules.map(m => <span key={m} className="chip-blue">{m}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* When clients come */}
      <section className="section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">When clients come to us</span>
            <h2 className="heading-md">Real situations.<br />Real pressure.</h2>
            <p className="body wwd-when-body">
              Most clients come with an active problem — not a vague request. Licensing stalled. Bank refusing. Regulator escalating. Expansion blocked. We are built for exactly these situations.
            </p>
          </div>
          <ul className="check-list">
            {whenClients.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <div className="section-blue section-padded">
        <div className="container wwd-closing">
          <span className="label wwd-closing-label">How it works in practice</span>
          <h2 className="heading-md wwd-closing-title">Clients don&apos;t hire modules.<br />They hire a structure.</h2>
          <p className="body-lg wwd-closing-body">
            In most real cases, multiple modules are activated simultaneously. A company entering Brazil needs regulatory structuring, compliance setup, legal architecture and corporate restructuring — all coordinated through a single point of contact.
          </p>
          <Link href="/#contact" className="btn-primary">
            Start a diagnostic — we map what you need
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      <CTABlock />
    </>
  )
}
