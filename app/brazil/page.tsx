import { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'

export const metadata: Metadata = {
  title: 'Brazil — Regulated Market',
  description: 'Brazil is one of the most complex and fastest-moving regulated markets in the world. Octus has been operating inside it since before the regulations were finalized.',
}

export default function BrazilPage() {
  return (
    <>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="tag-blue">Brazil</span>
          <h1 className="heading-xl brazil-headline">
            One of the most complex regulated markets in the world.
          </h1>
          <p className="body-lg brazil-sub">
            Brazil&apos;s regulatory environment — from sports betting (SPA/MF) to fintech (BACEN) and crypto — is moving fast. Octus has been operating inside it since before the regulations were finalized.
          </p>
        </div>
      </section>

      <div className="section-dark section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">What we do in Brazil</span>
            <h2 className="heading-md">Full execution,<br />not just advisory.</h2>
            <p className="body brazil-body">
              We have been inside the Brazilian regulatory process from the beginning — directly involved in licensing structuring, certification coordination and corporate setup for operators entering the market.
            </p>
          </div>
          <ul className="check-list">
            {[
              'Sports betting licensing (SPA/MF) — full application management',
              'Corporate structuring for Brazilian regulated operations',
              'Compliance and AML frameworks aligned with BACEN requirements',
              'Certification coordination with GLI and local bodies',
              'Banking and payment infrastructure for regulated operators',
              'Legal architecture and contract framework for BR operations',
              'Ongoing regulatory monitoring as rules evolve',
            ].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>

      <section className="section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">The regulatory context</span>
            <h2 className="heading-md">What operators need to know.</h2>
          </div>
          <div>
            {[
              { title: 'License cost', body: 'BRL 30 million (~EUR 5 million) for a five-year term, paid upfront to the SPA.' },
              { title: 'Local entity required', body: 'A Brazilian subsidiary is mandatory. Offshore structures alone are not sufficient.' },
              { title: 'Platform certification', body: 'GLI-accredited lab certification required before go-live. Typically 3–6 months.' },
              { title: 'Realistic timeline', body: '12–18 months from decision to operation for most operators starting from scratch.' },
            ].map((item, i) => (
              <div key={i} className="card brazil-fact-card">
                <div className="heading-card brazil-fact-title">{item.title}</div>
                <p className="body-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Operating in Brazil?"
        sub="We have been inside the process since before the regulations were final."
        cta="Start a diagnostic →"
      />
    </>
  )
}
