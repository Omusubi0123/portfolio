import { BlogPost } from './blog'
import { getSiteConfig, createImageUrl } from './config'

type SiteConfigLike = ReturnType<typeof getSiteConfig>

export function generateBlogPostLD(post: BlogPost, url: string, config: SiteConfigLike = getSiteConfig('ja')) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.thumbnail ? createImageUrl(post.thumbnail) : createImageUrl(config.ogImage),
    author: {
      '@type': 'Person',
      name: config.author.name,
      url: config.url,
    },
    publisher: {
      '@type': 'Person',
      name: config.author.name,
      url: config.url,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: url,
    keywords: post.tags.join(', '),
  }
}

export function generatePersonLD(config: SiteConfigLike = getSiteConfig('ja')) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.author.name,
    alternateName: [
      '井澤慶広',
      '井澤 慶広',
      'いざわ よしひろ',
      'いざわよしひろ'
    ],
    jobTitle: 'Computer Science Student',
    description: config.description,
    url: config.url,
    sameAs: [],
  }
}

export function generateWebsiteLD(config: SiteConfigLike = getSiteConfig('ja')) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: config.name,
    description: config.description,
    url: config.url,
    author: {
      '@type': 'Person',
      name: config.author.name,
    },
  }
}
