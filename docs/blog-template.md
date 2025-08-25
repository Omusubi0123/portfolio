# ブログ記事追加ガイド

## 新しい記事を追加する方法

1. `src/components/Blog/blogData.ts` ファイルを開く
2. `blogPosts` 配列に新しい記事オブジェクトを追加
3. サイトをビルド・デプロイ

## 記事の構造

```typescript
{
  id: 'article-unique-id',          // ユニークなID（URL用）
  title: '記事のタイトル',            // 記事タイトル
  summary: '記事の要約',             // 一覧ページで表示される要約
  content: `マークダウンコンテンツ`,    // 記事本文（Markdown記法）
  date: '2024-01-15',              // 投稿日（YYYY-MM-DD形式）
  tags: ['タグ1', 'タグ2'],          // タグ（配列）
  thumbnail: '/image.png'          // サムネイル画像（オプション）
}
```

## Markdown記法のサポート機能

### 基本的な記法
- **太字**: `**太字**`
- *斜体*: `*斜体*`
- `インラインコード`: `` `コード` ``
- [リンク](https://example.com): `[リンク](https://example.com)`

### 見出し
```markdown
# H1見出し
## H2見出し
### H3見出し
```

### リスト
```markdown
- 箇条書き
- 項目2

1. 番号付きリスト
2. 項目2
```

### コードブロック
```markdown
\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`
```

### 数式（KaTeX）
- インライン数式: `$x^2 + y^2 = z^2$`
- ブロック数式:
```markdown
$$
E = mc^2
$$
```

### 画像
```markdown
![代替テキスト](/path/to/image.png)
```

### 動画
```html
<video src="/path/to/video.mp4" controls></video>
```

### 表
```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| データ1 | データ2 | データ3 |
| データ4 | データ5 | データ6 |
```

### 引用
```markdown
> これは引用文です。
> 複数行の引用も可能です。
```

## 記事追加の例

```typescript
{
  id: 'my-new-article',
  title: '新しい技術について学んだこと',
  summary: '最近学んだ新しい技術についてまとめました。実際の経験を踏まえて解説します。',
  content: `# 新しい技術について学んだこと

この記事では、最近学んだ新しい技術について紹介します。

## 学習のきっかけ

プロジェクトで必要になったことがきっかけでした...

## 実際に使ってみた感想

\`\`\`javascript
const example = () => {
  console.log('Hello, World!');
};
\`\`\`

数式の例：$f(x) = x^2 + 2x + 1$

## まとめ

非常に有用な技術でした！`,
  date: '2024-01-20',
  tags: ['技術', '学習', 'プログラミング'],
  thumbnail: '/technology.png'
}
```

## 注意事項

1. **idは必ずユニーク**にしてください
2. **日付は降順**で並べることをお勧めします（新しい記事が上に表示される）
3. **タグは検索**に使用されるので、適切に設定してください
4. **画像パス**は`public`フォルダからの相対パスで指定してください
5. **数式でバックスラッシュ**を使う場合は、エスケープ（`\\`）してください

## ディレクトリ構成

```
src/components/Blog/
├── types.ts           # TypeScript型定義
├── blogData.ts        # 記事データ（ここを編集）
├── BlogList.tsx       # ブログ一覧ページ
├── BlogPost.tsx       # 記事詳細ページ
└── BlogCard.tsx       # 記事カードコンポーネント
```
