import CTABlock from './CTABlock'

interface Phase {
  title: string
  items: string[]
}

interface ServicePageProps {
  tag: string
  headline: string
  subheadline?: string
  sub: string
  whenItems: string[]
  forWhom: string[]
  whatWeDo: string
  phases: Phase[]
  outcomes: string[]
  industries: string[]
  jurisdictions?: string[]
}

const engagementModels = [
  { title: 'Project-based', sub: 'For licensing, structuring & market entry', desc: 'Fixed scope, defined deliverables and clear timeline.' },
  { title: 'Ongoing Support', sub: 'For compliance & regulatory maintenance', desc: 'Continuous coverage without building an internal team.' },
  { title: 'Hour Package', sub: 'For recurring, predictable demands', desc: 'Pre-paid or post-paid hours with flexible scope.' },
]

export default function ServicePage({
  tag, headline, subheadline, sub,
  whenItems, forWhom, whatWeDo,
  phases, outcomes, industries, jurisdictions,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="tag-blue">{tag}</span>
          <h1 className="heading-xl sp-headline">{headline}</h1>
          {subheadline && <p className="heading-md sp-subheadline">{subheadline}</p>}
          <p className="body-lg sp-sub">{sub}</p>
        </div>
      </section>

      {/* When + For whom */}
      <div className="section-dark section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">When you need this</span>
            <ul className="check-list">
              {whenItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div>
            <span className="label">Who this is for</span>
            <ul className="check-list">
              {forWhom.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* What we do */}
      <section className="section-padded sp-what">
        <div className="container">
          <span className="label">What we do</span>
          <p className="body-lg sp-what-body">{whatWeDo}</p>
        </div>
      </section>

      {/* Phases */}
      <div className="section-dark section-padded">
        <div className="container">
          <span className="label">What we deliver</span>
          <h2 className="heading-md sp-phases-title">Phase by phase.</h2>
          <div className="grid-auto sp-phases-grid">
            {phases.map((phase, i) => (
              <div key={i} className="card">
                <span className="label sp-phase-num">Phase {String(i + 1).padStart(2, '0')}</span>
                <div className="heading-card sp-phase-title">{phase.title}</div>
                <ul className="dash-list">
                  {phase.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcomes + Industries + Jurisdictions */}
      <section className="section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">Expected outcomes</span>
            <h2 className="heading-md sp-outcomes-title">What you get.</h2>
            <ul className="check-list-out">
              {outcomes.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div>
            <span className="label">Relevant industries</span>
            <div className="chip-row sp-industries">
              {industries.map(ind => <span key={ind} className="chip-blue">{ind}</span>)}
            </div>
            {jurisdictions && (
              <>
                <span className="label sp-juris-label">Where we operate</span>
                <div className="juris-strip">
                  <div className="chip-row">
                    {jurisdictions.map(j => <span key={j} className="chip-juris">{j}</span>)}
                    <span className="chip-juris-more">+more on request</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <div className="section-dark section-padded">
        <div className="container">
          <span className="label">How we work</span>
          <h2 className="heading-md sp-models-title">Three engagement models.</h2>
          <p className="text-faint sp-models-sub">Every operation requires a different level of involvement.</p>
          <div className="tile-grid grid-3 sp-models-grid">
            {engagementModels.map(m => (
              <div key={m.title} className="card-grid">
                <div className="heading-card">{m.title}</div>
                <div className="sp-model-sub">{m.sub}</div>
                <p className="body-sm">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-faint sp-models-note">
            All models include direct access to the Octus team — no account managers, no ticket systems.
          </p>
        </div>
      </div>

      <CTABlock />
    </>
  )
}
