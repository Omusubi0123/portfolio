import { BlogPost } from './blog'
import { siteConfig, createImageUrl } from './config'

export function generateBlogPostLD(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.thumbnail ? createImageUrl(post.thumbnail) : createImageUrl(siteConfig.ogImage),
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: url,
    keywords: post.tags.join(', '),
  }
}

export function generatePersonLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    jobTitle: 'Computer Science Student',
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      // ここにSNSのURLなどを追加
    ],
  }
}

export function generateWebsiteLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
  }
}
