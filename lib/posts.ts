import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  category: string
  summary: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.(mdx|md)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || 'Insights',
        summary: data.summary || '',
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  const mdPath = path.join(postsDirectory, `${slug}.md`)
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    category: data.category || 'Insights',
    summary: data.summary || '',
    content,
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => f.replace(/\.(mdx|md)$/, ''))
}
