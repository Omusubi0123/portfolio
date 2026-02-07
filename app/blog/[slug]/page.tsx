import { getBlogPostMetadata } from '@/lib/blog'
import BlogSlugRedirectClient from './BlogSlugRedirectClient'

export async function generateStaticParams() {
  const ja = getBlogPostMetadata('ja')
  const en = getBlogPostMetadata('en')
  const slugs = [...new Set([...ja.map((p) => p.id), ...en.map((p) => p.id)])]
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogSlugRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <BlogSlugRedirectClient slug={slug} />
}
