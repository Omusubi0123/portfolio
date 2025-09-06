import { getCurrentDomain } from './domain-utils'

// サイト設定の中央管理
export const siteConfig = {
  // ドメイン設定 - CNAMEファイルまたは環境変数から自動取得
  domain: getCurrentDomain(),
  
  // 完全なURL
  get url() {
    return `https://${this.domain}`
  },
  
  // サイト基本情報
  name: 'Yoshihiro Izawa',
  title: 'Yoshihiro Izawa',
  description: 'A student of The University of Tokyo, pursuing a degree in Computer Science and Electronics. My Research major is Mechanistic Interpretability.',
  author: {
    name: 'Yoshihiro Izawa',
    email: 'your-email@example.com', // 必要に応じて設定
  },
  
  // ソーシャルリンク（将来的に追加可能）
  social: {
    twitter: '@luckypanchh0123', // 必要に応じて設定
    github: 'https://github.com/Omusubi0123', // 必要に応じて設定
  },
  
  // SEO設定
  keywords: ['Yoshihiro Izawa', '井澤慶広', 'いざわ よしひろ', 'portfolio', 'The University of Tokyo', 'EEIC', 'Mechanistic Interpretability'],
  
  // 画像設定
  ogImage: '/profile_icon.png',
  favicon: '/profile_icon.png',
}

// ページ別のURL生成ヘルパー
export const createPageUrl = (path: string = '') => {
  return `${siteConfig.url}${path}`
}

// ブログ記事のURL生成
export const createBlogPostUrl = (slug: string) => {
  return createPageUrl(`/blog/${slug}`)
}

// 画像のフルURL生成
export const createImageUrl = (imagePath: string) => {
  return `${siteConfig.url}${imagePath}`
}