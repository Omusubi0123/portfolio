import { MetadataRoute } from 'next'
import { getBlogPostMetadata } from '@/lib/blog'
import { createLocalePageUrl } from '@/lib/config'
import { locales } from '@/lib/i18n'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    entries.push(
      {
        url: createLocalePageUrl(locale, '/'),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
      },
      {
        url: createLocalePageUrl(locale, '/blog'),
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }
    )
    const posts = getBlogPostMetadata(locale)
    for (const post of posts) {
      entries.push({
        url: createLocalePageUrl(locale, `/blog/${post.id}`),
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  return entries
}
