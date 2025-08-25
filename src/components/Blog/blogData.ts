import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: 'welcome-to-my-blog',
    title: 'ブログを開設しました',
    summary: 'ポートフォリオサイトにブログ機能を追加しました。技術的な学習記録や作業報告などを投稿していく予定です。',
    content: `# ブログを開設しました

ポートフォリオサイトにブログ機能を追加しました！

## このブログについて

このブログでは以下のような内容を投稿していく予定です：

- **技術学習の記録**: 新しく学んだ技術やツールについて
- **プロジェクトの進捗報告**: 現在取り組んでいるプロジェクトの状況
- **開発での気づき**: 開発中に発見した小技やハマったポイント
- **その他の雑記**: 日々の思考や発見について

## 技術スタック

このブログシステムは以下の技術で構築されています：

- **React + TypeScript**: フロントエンド開発
- **Tailwind CSS**: スタイリング
- **React Markdown**: Markdown記事の表示
- **React Router**: ページルーティング

## 今後の予定

定期的に更新していく予定です。特に現在進行中のプロジェクトについて詳しく記録を残していきたいと思います。

よろしくお願いします！`,
    date: '2024-01-15',
    tags: ['お知らせ', 'ブログ', 'ポートフォリオ'],
    thumbnail: '/portfolio.png'
  },
  {
    id: 'react-performance-optimization',
    title: 'React パフォーマンス最適化のベストプラクティス',
    summary: 'Reactアプリケーションのパフォーマンスを向上させるための実践的なテクニックをまとめました。',
    content: `# React パフォーマンス最適化のベストプラクティス

Reactアプリケーションのパフォーマンスを向上させるための実践的なテクニックをまとめました。

## 1. useMemo と useCallback の適切な使用

### useMemo
計算コストの高い処理をメモ化：

\`\`\`typescript
const ExpensiveComponent = ({ data }: { data: any[] }) => {
  const expensiveValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);

  return <div>{expensiveValue}</div>;
};
\`\`\`

### useCallback
関数の再生成を防ぐ：

\`\`\`typescript
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return <ChildComponent onClick={handleClick} />;
};
\`\`\`

## 2. React.memo の活用

不要な再レンダリングを防ぐ：

\`\`\`typescript
const ChildComponent = React.memo(({ name, onClick }: Props) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  );
});
\`\`\`

## 3. 仮想化 (Virtualization)

大量のリストを効率的に表示：

\`\`\`typescript
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }: { items: any[] }) => (
  <List
    height={600}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index].name}
      </div>
    )}
  </List>
);
\`\`\`

## 4. Code Splitting

動的インポートでバンドルサイズを削減：

\`\`\`typescript
const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
\`\`\`

## まとめ

これらのテクニックを適切に組み合わせることで、Reactアプリケーションのパフォーマンスを大幅に向上させることができます。

重要なのは、すべてを最適化するのではなく、**本当にボトルネックになっている部分を特定して対策する**ことです。`,
    date: '2024-01-10',
    tags: ['React', 'パフォーマンス', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'machine-learning-fundamentals',
    title: '機械学習の基礎：線形回帰から始めよう',
    summary: '機械学習の入門として線形回帰を数式と実装の両面から解説します。数学的な背景も含めて理解を深めましょう。',
    content: `# 機械学習の基礎：線形回帰から始めよう

機械学習の入門として、最もシンプルかつ重要な手法である**線形回帰**について学んでいきましょう。

## 線形回帰とは

線形回帰は、入力変数 $x$ と出力変数 $y$ の間の線形関係をモデル化する手法です。

### 数学的表現

単純線形回帰の場合、以下の式で表されます：

$$y = wx + b + \\epsilon$$

ここで：
- $w$: 重み（傾き）
- $b$: バイアス（切片）
- $\\epsilon$: 誤差項

## 損失関数

線形回帰では、**平均二乗誤差（MSE）**を損失関数として使用します：

$$L(w, b) = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - (wx_i + b))^2$$

この損失関数を最小化することで、最適なパラメータ $w$ と $b$ を求めます。

## 勾配降下法

損失関数を最小化するために、勾配降下法を使用します。

パラメータの更新式：

$$w := w - \\alpha \\frac{\\partial L}{\\partial w}$$
$$b := b - \\alpha \\frac{\\partial L}{\\partial b}$$

ここで $\\alpha$ は学習率です。

### 勾配の計算

偏微分を計算すると：

$$\\frac{\\partial L}{\\partial w} = \\frac{2}{n} \\sum_{i=1}^{n} (wx_i + b - y_i) x_i$$

$$\\frac{\\partial L}{\\partial b} = \\frac{2}{n} \\sum_{i=1}^{n} (wx_i + b - y_i)$$

## 実装例

Pythonでの実装例：

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

class LinearRegression:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
    
    def fit(self, X, y):
        # パラメータの初期化
        self.weight = 0
        self.bias = 0
        
        n_samples = X.shape[0]
        
        # 勾配降下法
        for i in range(self.n_iterations):
            # 予測値の計算
            y_pred = self.weight * X + self.bias
            
            # 損失の計算
            cost = (1 / n_samples) * np.sum((y - y_pred) ** 2)
            
            # 勾配の計算
            dw = (2 / n_samples) * np.sum(X * (y_pred - y))
            db = (2 / n_samples) * np.sum(y_pred - y)
            
            # パラメータの更新
            self.weight -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
    
    def predict(self, X):
        return self.weight * X + self.bias

# 使用例
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + 0.1 * np.random.randn(100)

model = LinearRegression(learning_rate=0.01, n_iterations=1000)
model.fit(X.flatten(), y)

print(f"学習された重み: {model.weight:.2f}")
print(f"学習されたバイアス: {model.bias:.2f}")
\`\`\`

## 多変量線形回帰

複数の特徴量がある場合は、以下のように拡張できます：

$$y = w_1x_1 + w_2x_2 + ... + w_nx_n + b$$

ベクトル形式で表現すると：

$$y = \\mathbf{w}^T\\mathbf{x} + b$$

## 正規方程式

勾配降下法以外にも、正規方程式を使って解析的に最適解を求めることができます：

$$\\mathbf{w} = (\\mathbf{X}^T\\mathbf{X})^{-1}\\mathbf{X}^T\\mathbf{y}$$

## まとめ

線形回帰は機械学習の基礎となる重要な手法です。シンプルながらも多くの実問題に適用でき、他の複雑な手法を理解するための土台となります。

次回は**ロジスティック回帰**について学んでいきましょう！`,
    date: '2024-01-12',
    tags: ['機械学習', '数学', 'Python', 'データサイエンス']
  }
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostMetadata = () => {
  return blogPosts.map(({ content, ...metadata }) => metadata);
};
