import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import CTABlock from '@/components/CTABlock'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Not found' }
  return {
    title: post.title,
    description: post.summary,
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  } catch { return dateStr }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  // Use marked for robust markdown parsing
  // This is a markdown-based blog — posts are .mdx files treated as standard markdown
  // (MDX JSX component syntax is not supported in this publishing flow)
  const htmlContent = marked.parse(post.content) as string

  return (
    <>
      <section className="page-hero section-padded">
        <div className="container">
          <Link href="/insights" className="post-back">← Back to Insights</Link>
          <div className="post-meta">
            <span className="chip-blue">{post.category}</span>
            <span className="post-date">{formatDate(post.date)}</span>
          </div>
          <h1 className="heading-xl post-title">{post.title}</h1>
          <p className="body-lg post-summary">{post.summary}</p>
        </div>
      </section>

      <section className="section-padded post-body-section">
        <div className="container">
          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      <CTABlock
        title="Need help with this?"
        sub="Start a diagnostic and we will map what your operation needs."
        cta="Start a diagnostic →"
      />
    </>
  )
}
