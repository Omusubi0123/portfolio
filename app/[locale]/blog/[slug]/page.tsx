import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog'
import { generateBlogPostLD } from '@/lib/structured-data'
import { getSiteConfig, createBlogPostUrl } from '@/lib/config'
import { isValidLocale, type Locale } from '@/lib/i18n'

const BlogPost = dynamic(() => import('@/components/Blog/BlogPost'), {
  loading: () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-20">
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4" />
        <p className="text-gray-400">Loading article...</p>
      </div>
    </div>
  )
})

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const locales: Locale[] = ['ja', 'en']
  const all: { locale: string; slug: string }[] = []
  for (const locale of locales) {
    const posts = getBlogPostMetadata(locale)
    for (const post of posts) {
      all.push({ locale, slug: post.id })
    }
  }
  return all
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isValidLocale(locale)) return {}
  const config = getSiteConfig(locale as Locale)
  const post = getBlogPost(slug, locale as Locale)
  if (!post) return { title: 'Post Not Found' }

  const publishedTime = new Date(post.date).toISOString()
  const postUrl = createBlogPostUrl(slug, locale as Locale)

  return {
    title: `${post.title} | ${config.author.name}`,
    description: post.summary,
    keywords: [...post.tags, config.author.name, 'blog', 'tech'],
    authors: [{ name: config.author.name }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url: postUrl,
      publishedTime,
      authors: [config.author.name],
      tags: post.tags,
      images: post.thumbnail
        ? [{ url: post.thumbnail, width: 1200, height: 630, alt: post.title }]
        : [{ url: config.ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.thumbnail ? [post.thumbnail] : [config.ogImage],
    },
  }
}

export default async function LocaleBlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  if (!isValidLocale(locale)) notFound()

  const post = getBlogPost(slug, locale as Locale)
  if (!post) notFound()

  const config = getSiteConfig(locale as Locale)
  const postUrl = createBlogPostUrl(slug, locale as Locale)
  const structuredData = generateBlogPostLD(post, postUrl, config)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Layout header={<Header />}>
        <BlogPost post={post} />
      </Layout>
    </>
  )
}
