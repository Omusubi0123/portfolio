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
  name: 'Yoshihiro Izawa Portfolio',
  title: 'Yoshihiro Izawa | Portfolio',
  description: 'Computer Science student and software developer portfolio showcasing projects, blog posts, and technical skills.',
  author: {
    name: 'Yoshihiro Izawa',
    email: 'your-email@example.com', // 必要に応じて設定
  },
  
  // ソーシャルリンク（将来的に追加可能）
  social: {
    twitter: '@your_twitter', // 必要に応じて設定
    github: 'https://github.com/your-username', // 必要に応じて設定
  },
  
  // SEO設定
  keywords: ['Yoshihiro Izawa', 'portfolio', 'software developer', 'computer science', 'React', 'TypeScript', 'Next.js'],
  
  // 画像設定
  ogImage: '/portfolio.png',
  favicon: '/icon.png',
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
