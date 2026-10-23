import { getCurrentDomain } from './domain-utils'
import type { Locale } from './i18n'

// サイト設定の中央管理（共通）
const domain = getCurrentDomain()
const baseUrl = `https://${domain}`

export const siteConfig = {
  domain,
  get url() {
    return baseUrl
  },
  author: {
    name: 'Yoshihiro Izawa',
    email: 'your-email@example.com',
  },
  social: {
    twitter: '@luckypanchh0123',
    github: 'https://github.com/Omusubi0123',
  },
  ogImage: '/profile_icon.png',
  favicon: '/profile_icon.png',
}

const localeConfig: Record<Locale, { title: string; description: string; keywords: string[]; name: string }> = {
  ja: {
    name: '井澤慶広',
    title: '井澤慶広',
    description: '東京大学 情報理工学系研究科 電子情報学専攻 修士1年、山肩研究室に所属。AIモデルの解釈性（Mechanistic Interpretability）の研究に取り組んでいます。',
    keywords: [
      'Yoshihiro Izawa',
      '井澤慶広',
      '井澤 慶広',
      'いざわ よしひろ',
      'portfolio',
      '東京大学',
      'The University of Tokyo',
      'Mechanistic Interpretability',
      'EEIC',
    ],
  },
  en: {
    name: 'Yoshihiro Izawa',
    title: 'Yoshihiro Izawa',
    description: "I'm a first-year master's student at The University of Tokyo, supervised by Professor Yoko Yamakata. I'm interested in combining mechanistic interpretability with neuro/bio/cognitive science to develop more human-aligned AI models.",
    keywords: [
      'Yoshihiro Izawa',
      'portfolio',
      'The University of Tokyo',
      'Mechanistic Interpretability',
      'EEIC',
    ],
  },
}

export function getSiteConfig(locale: Locale) {
  return { ...siteConfig, ...localeConfig[locale] }
}

// ページ別のURL生成ヘルパー（locale なし：ルートリダイレクト用）
export const createPageUrl = (path: string = '') => {
  return `${baseUrl}${path}`
}

// locale 付きパス用
export const createLocalePageUrl = (locale: Locale, path: string = '') => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}/${locale}${normalized}`
}

// ブログ記事のURL生成（locale 付き）
export const createBlogPostUrl = (slug: string, locale?: Locale) => {
  if (locale) return createLocalePageUrl(locale, `/blog/${slug}`)
  return createPageUrl(`/blog/${slug}`)
}

// 画像のフルURL生成
export const createImageUrl = (imagePath: string) => {
  return `${baseUrl}${imagePath}`
}
