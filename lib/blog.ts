import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// フォールバック用のブログデータ
const fallbackBlogPosts = [
  {
    id: 'first-hackathon',
    title: 'ハッカソンを振り返る1/3（UMP-JUST）',
    summary: '初めて参加したハッカソンについて今更ですが振り返ります．',
    date: '2025-08-26',
    tags: ['ハッカソン'],
    thumbnail: '/blog/first-hackathon/demo.MP4'
  },
  {
    id: 'develop-blog',
    title: 'ブログを開設しました',
    summary: 'ポートフォリオサイトにブログ機能を追加しました．気ままに発信していきます．',
    date: '2025-08-25',
    tags: ['お知らせ'],
    thumbnail: '/portfolio.png'
  }
]

// フォールバック記事の詳細コンテンツ
const fallbackBlogContent: Record<string, string> = {
  'first-hackathon': `# ハッカソンを振り返る1/3（UMP-JUST）

初めて参加したハッカソンについて今更ですが振り返ります．

## TL;DR;
- UMP-JUSTハッカソンの参加記録をまとめました
- 技術賞とcotomi賞を受賞することができました
- チームメンバーとさらに仲良くなりました

## 感想
ハッカソンは開発期間が短くて大変だけど，期間が短いが故に技術も急成長すると感じました．

同じチームで参加してくれた友人に大感謝．

ハッカソン楽しかったです．`,
  
  'develop-blog': `# ブログを開設しました

ポートフォリオサイトにブログ機能を追加しました．

## このブログについて

このブログでは以下のような内容を投稿していく予定です：

- **技術学習の記録**: 新しく学んだ技術やツールについて
- **プロジェクトの進捗報告**: 現在取り組んでいるプロジェクトの状況
- **開発での気づき**: 開発中に発見した小技やハマったポイント
- **活動記録**: ハッカソンやインターン，学会発表などの活動記録
- **その他の雑記**: 日々の思考や発見について

## 今後の予定
どのくらいの頻度になるかは分かりませんが，気ままに更新していく予定です．`
}

export interface BlogPost {
  id: string
  title: string
  summary: string
  content: string
  date: string
  tags: string[]
  thumbnail?: string
}

export interface BlogPostMetadata {
  id: string
  title: string
  summary: string
  date: string
  tags: string[]
  thumbnail?: string
}

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getBlogPostMetadata(): BlogPostMetadata[] {
  // contentディレクトリが存在しない場合はフォールバックデータを返す
  if (!fs.existsSync(blogDirectory)) {
    return fallbackBlogPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
  }

  try {
    const fileNames = fs.readdirSync(blogDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(blogDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          id,
          title: matterResult.data.title,
          summary: matterResult.data.summary,
          date: matterResult.data.date,
          tags: matterResult.data.tags || [],
          thumbnail: matterResult.data.thumbnail,
        }
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return fallbackBlogPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
  }
}

export function getBlogPost(id: string): BlogPost | undefined {
  // 最初にMarkdownファイルからの読み込みを試行
  if (fs.existsSync(blogDirectory)) {
    try {
      const fullPath = path.join(blogDirectory, `${id}.md`)
      
      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          id,
          title: matterResult.data.title,
          summary: matterResult.data.summary,
          content: matterResult.content,
          date: matterResult.data.date,
          tags: matterResult.data.tags || [],
          thumbnail: matterResult.data.thumbnail,
        }
      }
    } catch (error) {
      console.error(`Error reading blog post ${id}:`, error)
    }
  }
  
  // Markdownファイルが見つからない場合はフォールバックデータを使用
  const fallbackPost = fallbackBlogPosts.find(post => post.id === id)
  if (fallbackPost && fallbackBlogContent[id]) {
    return {
      ...fallbackPost,
      content: fallbackBlogContent[id]
    }
  }

  return undefined
}

export function getAllBlogPostIds() {
  // contentディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      }
    })
}
