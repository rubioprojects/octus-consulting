import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Regulatory updates, market analysis and operational insights from Octus Consulting.',
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch { return dateStr }
}

export default function InsightsPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="page-hero section-padded">
        <div className="container">
          <span className="tag-blue">Insights</span>
          <h1 className="heading-xl insights-headline">
            Regulatory updates.<br />Market intelligence.
          </h1>
          <p className="body-lg insights-sub">
            Analysis from inside regulated markets — iGaming, fintech, crypto, payments and Brazil.
          </p>
        </div>
      </section>

      <section className="section-padded insights-section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="card insights-empty">
              <p className="heading-sm insights-empty-label">Coming soon</p>
              <p className="body">
                Regulatory updates and market analysis will be published here regularly.{' '}
                <Link href="/#contact" className="insights-cta-link">Contact us</Link> to be notified.
              </p>
            </div>
          ) : (
            <div className="insights-grid">
              {posts.map(post => (
                <Link key={post.slug} href={`/insights/${post.slug}`} className="card-lg insights-card">
                  <div className="insights-card-top">
                    <span className="chip-blue">{post.category}</span>
                    <span className="insights-date">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="heading-card insights-card-title">{post.title}</h2>
                  <p className="body-sm insights-card-summary">{post.summary}</p>
                  <span className="insights-card-read">Read more →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
