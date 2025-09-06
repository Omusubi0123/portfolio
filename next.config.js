import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  
  // 画像最適化（静的エクスポートでは制限あり）
  images: {
    unoptimized: true
  },
  
  // ESLint設定
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  
  // パフォーマンス最適化
  compiler: {
    // 未使用のimportを削除
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 実験的最適化機能（安全なもののみ）
  experimental: {
    // CSS最適化
    optimizeCss: false, // 静的エクスポートでは無効にする
  },
  
  // Webpack設定カスタマイズ
  webpack: (config, { dev, isServer }) => {
    // 本番環境でのバンドル最適化
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // 重いライブラリを別チャンクに分離
          markdown: {
            name: 'markdown',
            test: /[\\/]node_modules[\\/](react-markdown|remark-|rehype-).*[\\/]/,
            chunks: 'all',
            priority: 20,
          },
          // フレーマーモーションを別チャンクに
          motion: {
            name: 'motion',
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            chunks: 'all',
            priority: 15,
          },
          // KaTeX/Highlight.jsを別チャンクに
          blog: {
            name: 'blog',
            test: /[\\/]node_modules[\\/](katex|highlight\.js)[\\/]/,
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    
    return config;
  },
}

export default withBundleAnalyzer(nextConfig)