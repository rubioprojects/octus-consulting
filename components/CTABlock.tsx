import Link from 'next/link'

interface CTABlockProps {
  title?: string
  sub?: string
  cta?: string
  href?: string
}

export default function CTABlock({
  title = "You don't need more providers.",
  sub = 'You need a structure that works.',
  cta = 'Start a diagnostic →',
  href = '/#contact',
}: CTABlockProps) {
  return (
    <section className="cta-block" id="contact">
      <div className="cta-block__bg" aria-hidden="true" />
      <div className="cta-block__inner">
        <h2 className="heading-lg cta-block__title">{title}</h2>
        <p className="body-lg cta-block__sub">{sub}</p>
        <Link href={href} className="btn-primary btn-primary-lg">
          {cta}
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
        <p className="text-faint cta-block__note">
          We respond within 24 hours · info@octusconsulting.com
        </p>
      </div>
    </section>
  )
}
