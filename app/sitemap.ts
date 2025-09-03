import { MetadataRoute } from 'next'
import { getBlogPostMetadata } from '@/lib/blog'
import { siteConfig, createPageUrl, createBlogPostUrl } from '@/lib/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  
  // 静的ページ
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: createPageUrl('/blog'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // ブログ記事ページ
  const blogPosts = getBlogPostMetadata().map((post) => ({
    url: createBlogPostUrl(post.id),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}
