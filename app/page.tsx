import Link from 'next/link'
import CTABlock from '@/components/CTABlock'
import { services, jurisdictions } from '@/data/services'
import { problems, problemCards, cases, stats, models } from '@/data/home'

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="tag-blue">Regulated Operations</div>
          <h1 className="heading-xl hero-headline">
            Your operation is not failing<br />
            <span className="hero-headline-dim">because of product.</span>
          </h1>
          <p className="heading-lg hero-fix">
            It is failing because the<br />structure doesn&apos;t work.
          </p>
          <p className="body-lg hero-sub">
            We fix regulatory, licensing and banking problems in highly regulated markets — and build the structures that prevent them from happening again.
          </p>
          <p className="hero-fix-cta">We fix it.</p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn-primary btn-primary-lg">
              Start a diagnostic
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/about" className="btn-ghost">See how we work ↓</Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE OPERATIONS BREAK ─── */}
      <div className="section-dark section-sm">
        <div className="container grid-2">
          <div>
            <span className="label">The problem</span>
            <h2 className="heading-md">Where operations break</h2>
            <p className="body break-desc">
              Most companies don&apos;t fail because of product or demand. They fail because their regulatory, legal and financial structure is not aligned with how markets actually work.
            </p>
          </div>
          <ul className="problem-list">
            {problems.map((item, i) => (
              <li key={i}>
                <span className="problem-dot" aria-hidden="true" />
                <span dangerouslySetInnerHTML={{ __html: item.replace(/^([^.]+\.)/, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
          <div className="break-conclusion">
            <span className="break-line" aria-hidden="true" />
            <p className="heading-sm">
              This is where most companies fail.{' '}
              <span className="break-accent">This is where we operate.</span>
            </p>
          </div>
        </div>
      </div>

      {/* ─── WE DON'T ADVISE. WE FIX. ─── */}
      <section className="section grid-2 fix-section">
        <div className="heading-lg fix-statement">
          We don&apos;t advise.<br /><span className="fix-accent">We fix.</span>
        </div>
        <div>
          <p className="body-lg fix-line">We identify what is broken — and fix it.</p>
          <p className="body fix-body">
            Octus designs, executes and takes responsibility for the structure behind your operation. Across licensing, compliance, banking and corporate architecture.
          </p>
          <p className="body fix-strong">Your point of contact is always Octus.</p>
          <Link href="/#contact" className="btn-primary fix-cta">Start a diagnostic →</Link>
        </div>
      </section>

      {/* ─── WHY MOST FAIL ─── */}
      <div className="container why-fail-wrap">
        <div className="why-fail-box">
          <h3 className="heading-sm why-fail-title">Why most operations fail</h3>
          <div className="compare-grid">
            <div>
              <div className="label compare-label">How other firms work</div>
              <ul className="dash-list">
                {['Licensing handled separately from banking', 'Compliance built after the fact', 'Legal and corporate not integrated', 'Multiple providers, no coordination'].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="compare-divider" aria-hidden="true" />
            <div>
              <div className="label compare-label">How Octus works</div>
              <ul className="dash-list dash-list-blue">
                {['License + banking + compliance — built together', 'Compliance from day one, not as afterthought', 'All layers integrated into one structure', 'Single point of contact, full execution'].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROBLEMS WE SOLVE ─── */}
      <div className="section-dark section-sm problem-cards-section">
        <div className="container">
          <span className="label">Problems we solve</span>
          <h2 className="heading-md problem-cards-title">Find your situation.</h2>
          <div className="grid-auto-lg">
            {problemCards.map((p, i) => (
              <Link key={i} href={p.href} className="card-lg problem-card">
                <div className="heading-card problem-card-q">{p.q}</div>
                <p className="body-sm problem-card-desc">{p.desc}</p>
                <span className="problem-card-link">See how we solve this →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 7 MODULES ─── */}
      <section className="section modules-section">
        <div className="container">
          <span className="label">What we do</span>
          <h2 className="heading-md">Seven operational modules.</h2>
          <p className="text-faint modules-sub">One working structure.</p>
          <div className="tile-grid grid-auto modules-grid">
            {services.map(m => (
              <Link key={m.href} href={m.href} className="card-grid module-card">
                <span className="label module-num">{m.num}</span>
                <div className="heading-card module-title">{m.title}</div>
                <p className="body-sm module-desc">{m.shortTitle !== m.title ? m.shortTitle : ''}</p>
                <div className="chip-row module-chips">
                  {m.industries.slice(0, 3).map(tag => <span key={tag} className="chip">{tag}</span>)}
                </div>
                <span className="module-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE OPERATE ─── */}
      <div className="section-dark operate-section">
        <div className="container operate-grid">
          <div>
            <span className="label">Our approach</span>
            <h2 className="heading-md operate-title">Most firms advise.<br />We execute.</h2>
            <p className="body operate-body">
              Octus acts as the execution layer behind your operation — designing, building and stabilizing everything required for it to work.
              <br /><br />
              We came from iGaming — one of the most complex regulated environments in the world. Since 2019, inside regulatory transitions, laboratory certifications, banking structures and cross-border operations.
              <br /><br />
              Today, we apply that same execution depth across every regulated industry.
            </p>
          </div>
          <div>
            <div className="tile-grid grid-2 operate-stats">
              {stats.map((s, i) => (
                <div key={i} className="card-grid operate-stat">
                  <div className="stat-num">{s.n}<span className="accent">{s.accent}</span></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="juris-strip operate-juris">
              <div className="juris-strip-label">Where we operate</div>
              <div className="chip-row">
                {jurisdictions.map(j => <span key={j} className="chip-juris">{j}</span>)}
                <span className="chip-juris-more">+more on request</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 48H ─── */}
      <section className="section grid-2 speed-section">
        <div>
          <span className="label">Speed & execution</span>
          <div className="heading-md speed-quote">
            If we don&apos;t have the answer,<br /><span className="speed-accent">we find it.</span>
          </div>
          <div className="speed-anchor">
            We work with operators building serious, regulated businesses — where failure has real financial and regulatory consequences.
          </div>
        </div>
        <div>
          <p className="body speed-body">
            We operate through a global network of regulators, specialists and providers across multiple jurisdictions.
          </p>
          <p className="body speed-body">
            If the solution is not immediately clear, we structure it. We move faster than traditional firms — because delays in regulated markets are expensive.
          </p>
          <Link href="/#contact" className="btn-primary speed-cta">Start a diagnostic →</Link>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <div className="section-dark cases-section">
        <div className="container">
          <div className="cases-eyebrow">Real situations · Real outcomes</div>
          <h2 className="heading-md cases-title">Not theory.</h2>
          <p className="text-faint cases-sub">Real operations under pressure.</p>
          <div className="grid-3 cases-grid">
            {cases.map((c, i) => (
              <div key={i} className="card-lg case-card">
                <span className="case-tag">{c.tag}</span>
                <div className="heading-card case-title">{c.title}</div>
                <p className="body-sm case-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MODELS ─── */}
      <section className="section models-outer">
        <div className="container">
          <span className="label">How we work</span>
          <h2 className="heading-md">Three ways to work with us.</h2>
          <p className="text-faint models-sub-home">Every operation requires a different level of involvement.</p>
          <div className="tile-grid grid-3 models-grid-home">
            {models.map(m => (
              <div key={m.title} className="card-grid model-card-home">
                <div className="model-icon-home" aria-hidden="true">{m.icon}</div>
                <div className="heading-card">{m.title}</div>
                <div className="model-sub-home">{m.sub}</div>
                <p className="body-sm">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-faint models-note-home">
            All models include direct access to the Octus team — no account managers, no ticket systems.
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
