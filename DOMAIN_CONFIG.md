# ドメイン設定ガイド

このプロジェクトでは、ドメインの変更を簡単に行えるよう設定システムを実装しています。

## 🚀 ドメイン変更方法

### 方法1: CNAMEファイルを更新（推奨）
```bash
echo "new-domain.com" > CNAME
```

システムが自動的にCNAMEファイルからドメインを読み取り、すべてのURL参照を更新します。

### 方法2: 環境変数を使用
```bash
# .env.local ファイルを作成
NEXT_PUBLIC_SITE_DOMAIN=new-domain.com
```

### 方法3: 設定ファイルを直接編集
`lib/config.ts` の `domain` プロパティを変更。

## 📁 設定ファイル構造

- `lib/config.ts` - メイン設定ファイル
- `lib/domain-utils.ts` - ドメイン自動取得ユーティリティ
- `CNAME` - GitHub Pages用ドメイン設定

## 🔄 自動更新される項目

✅ SEOメタデータ（title, description, OG tags）
✅ 構造化データ（JSON-LD）
✅ サイトマップ（sitemap.xml）
✅ ロボッツファイル（robots.txt）
✅ すべての内部URL参照

## 🛠️ カスタマイズ可能な設定

`lib/config.ts` で以下を変更可能：

- サイト名とタイトル
- 作者情報
- SEOキーワード
- OG画像
- ファビコン

## 🚦 使用例

```typescript
import { siteConfig, createPageUrl, createBlogPostUrl } from '@/lib/config'

// 基本情報
console.log(siteConfig.url) // https://www.omusubiy.com
console.log(siteConfig.name) // Yoshihiro Izawa Portfolio

// URL生成
createPageUrl('/about') // https://www.omusubiy.com/about
createBlogPostUrl('my-post') // https://www.omusubiy.com/blog/my-post
```

これで、ドメイン変更時に1つのファイルを更新するだけで、すべてのURL参照が自動的に更新されます！
