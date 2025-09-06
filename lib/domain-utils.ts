import fs from 'fs'
import path from 'path'
import { siteConfig } from './config'

/**
 * CNAMEファイルからドメインを読み取る（サーバーサイドのみ）
 */
export function getDomainFromCNAME(): string {
  try {
    const cnamePath = path.join(process.cwd(), 'CNAME')
    if (fs.existsSync(cnamePath)) {
      const domain = fs.readFileSync(cnamePath, 'utf8').trim()
      return domain
    }
  } catch (error) {
    console.warn('CNAME file could not be read:', error)
  }
  
  // フォールバック
  return siteConfig.url
}

/**
 * 環境に応じたドメインを取得
 */
export function getCurrentDomain(): string {
  // 1. 環境変数から取得（最優先）
  if (process.env.NEXT_PUBLIC_SITE_DOMAIN) {
    return process.env.NEXT_PUBLIC_SITE_DOMAIN
  }
  
  // 2. CNAMEファイルから取得（サーバーサイドのみ）
  if (typeof window === 'undefined') {
    return getDomainFromCNAME()
  }
  
  // 3. フォールバック（クライアントサイド）
  return siteConfig.url
}
