import { Metadata } from 'next'
import Link from 'next/link'
import CTABlock from '@/components/CTABlock'
import { jurisdictions } from '@/data/services'

export const metadata: Metadata = {
  title: 'About',
  description: 'Octus is an execution layer for businesses operating in highly regulated markets.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero section-padded">
        <div className="container">
          <span className="tag-blue">About Octus</span>
          <h1 className="heading-xl about-headline">
            We don&apos;t operate as a<br />traditional advisory firm.
          </h1>
          <p className="body-lg about-sub">
            We work inside complex, regulated operations — fixing what prevents them from working and building structures that hold under pressure.
          </p>
        </div>
      </section>

      {/* What Octus is */}
      <div className="section-dark section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">What Octus is</span>
            <h2 className="heading-md">Not a law firm.<br />Not a consultancy.<br />An execution layer.</h2>
          </div>
          <div>
            <p className="body-lg about-what-body">
              Octus is an execution layer for businesses operating in highly regulated markets. We step in when structure fails — across licensing, compliance, banking and corporate architecture — and take responsibility for making it work.
            </p>
            <p className="body about-what-strong">
              We identify what is broken. We fix it. Your point of contact is always Octus.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="section-padded about-stats-section">
        <div className="container">
          <div className="tile-grid grid-4">
            {[
              { n: '15', a: '+', l: 'Jurisdictions where we\'ve structured operations' },
              { n: '2019', a: '', l: 'Operating in regulated markets since' },
              { n: '3', a: '', l: 'Engagement models to fit every operation' },
              { n: '24', a: 'h', l: 'Response time for every diagnostic' },
            ].map((s, i) => (
              <div key={i} className="card-grid about-stat">
                <div className="stat-num">{s.n}<span className="accent">{s.a}</span></div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <div className="section-dark section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">How we work</span>
            <h2 className="heading-md">Integration, not silos.</h2>
            <p className="body about-how-body">
              Most firms operate in separate tracks — legal, compliance, corporate, regulatory. The result is fragmentation. Licenses approved without banking. Compliance built after the fact. Structures that don&apos;t scale.
            </p>
            <p className="body about-how-body">
              Octus integrates all critical layers into a single working structure — designed to pass regulatory approval, connect to banking and sustain real operations.
            </p>
          </div>
          <div>
            <ul className="check-list">
              {[
                'License + banking + compliance — built together from day one',
                'All layers coordinated under a single point of contact',
                'Execution, not just advice — we take responsibility for outcomes',
                'Full process management from structuring to post-approval',
                'Speed — because delays in regulated markets are expensive',
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Where it started */}
      <section className="section-padded">
        <div className="container">
          <span className="label">Where it started</span>
          <h2 className="heading-md about-origin-title">
            We came from one of the most complex regulated environments.
          </h2>
          <div className="grid-2">
            <p className="body">
              Octus started in iGaming — one of the most demanding regulatory environments in the world, with offshore licensing structures, cross-border operations, banking constraints and rapid transitions from unregulated to regulated markets.
              <br /><br />
              This is where we learned how operations actually break — and how to fix them. We have been inside regulatory transitions, laboratory certifications, banking structures and cross-border operations since 2019.
            </p>
            <div>
              <p className="body about-origin-strong">
                We don&apos;t observe regulatory change. We operate inside it.
              </p>
              <ul className="check-list">
                {[
                  'Migration from offshore to regulated market structures',
                  'Direct involvement in Brazil\'s sports betting regulation (SPA/MF)',
                  'Coordination with certification laboratories and regulatory authorities',
                  'Licensing and structuring across more than 15 jurisdictions worldwide',
                  'Banking and payment infrastructure for high-risk operations',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where we operate */}
      <div className="section-dark section-padded">
        <div className="container">
          <span className="label">Where we operate today</span>
          <h2 className="heading-md">15+ jurisdictions. Multiple sectors.</h2>
          <p className="body about-juris-body">
            We have structured operations across more than 15 jurisdictions — from established offshore markets to newly regulated environments.
          </p>
          <div className="juris-strip about-juris-strip">
            <div className="chip-row">
              {jurisdictions.map(j => <span key={j} className="chip-juris">{j}</span>)}
              <span className="chip-juris-more">+more on request</span>
            </div>
          </div>
          <div className="grid-2">
            <p className="body">
              Today, we apply this experience across multiple regulated industries: iGaming and betting, fintech and payments, crypto and digital assets, and other regulated sectors.
            </p>
            <p className="body about-sector-strong">
              The industry changes. The structural problem does not.
            </p>
          </div>
        </div>
      </div>

      {/* What makes us different */}
      <section className="section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">What makes us different</span>
            <h2 className="heading-md">We fix what is preventing your operation from working.</h2>
            <p className="body about-diff-body">
              Most firms advise, draft documents and interpret regulation. We move faster than traditional firms — because delays in regulated markets are expensive.
            </p>
          </div>
          <div>
            <span className="label">That includes</span>
            <ul className="check-list">
              {[
                'Licensing structures that don\'t get approved',
                'Operations that can\'t access banking',
                'Compliance that fails under scrutiny',
                'Corporate structures that don\'t scale',
                'Regulatory transitions without execution support',
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <div className="section-dark section-padded">
        <div className="container grid-2">
          <div>
            <span className="label">Who we work with</span>
            <h2 className="heading-md">Serious operators.<br />Not experimental setups.</h2>
            <p className="body about-who-body">
              We work with operators building serious businesses in regulated environments — where failure has real financial and regulatory consequences.
            </p>
          </div>
          <div>
            <ul className="check-list">
              {[
                'Companies entering new regulated markets',
                'Operations under regulatory or banking pressure',
                'Businesses restructuring for compliance or scale',
                'Groups expanding across jurisdictions',
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <CTABlock />
    </>
  )
}
