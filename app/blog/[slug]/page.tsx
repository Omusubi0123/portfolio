import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import BlogPost from '@/components/Blog/BlogPost'
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog'
import { generateBlogPostLD } from '@/lib/structured-data'
import { siteConfig, createBlogPostUrl } from '@/lib/config'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getBlogPostMetadata()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const publishedTime = new Date(post.date).toISOString()
  
  return {
    title: `${post.title} | ${siteConfig.author.name}`,
    description: post.summary,
    keywords: [...post.tags, siteConfig.author.name, 'blog', 'tech'],
    authors: [{ name: siteConfig.author.name }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
              url: createBlogPostUrl(slug),
      publishedTime,
      authors: [siteConfig.author.name],
      tags: post.tags,
      images: post.thumbnail ? [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.thumbnail ? [post.thumbnail] : [siteConfig.ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const postUrl = createBlogPostUrl(slug)
  const structuredData = generateBlogPostLD(post, postUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Layout header={<Header />}>
        <BlogPost post={post} />
      </Layout>
    </>
  )
}
