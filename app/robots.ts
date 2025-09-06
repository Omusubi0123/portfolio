import { MetadataRoute } from 'next'
import { createPageUrl } from '@/lib/config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: createPageUrl('/sitemap.xml'),
  }
}
