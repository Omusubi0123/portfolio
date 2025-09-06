"use client"

import type React from 'react';
import { useState } from 'react';
import BlogCard from './BlogCard';
import type { BlogPostMetadata } from '@/lib/blog';

interface BlogListProps {
  posts: BlogPostMetadata[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // 全てのタグを取得
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  // タグでフィルタリング
  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;
  
  // 日付順でソート（新しい順）
  const sortedPosts = filteredPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold shine-gold-text mb-4"
            style={{ fontFamily: "Georgia, 'Caveat', cursive" }}
          >
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            技術的な学習記録や活動報告、日々の出来事を気ままに呟きます
          </p>
        </div>

        {/* タグフィルター */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedTag === null
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold'
                  : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-gray-600'
              }`}
            >
              すべて
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold'
                    : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* ブログ記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* 記事がない場合の表示 */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              {selectedTag ? `「${selectedTag}」タグの記事はまだありません` : '記事がまだありません'}
            </p>
          </div>
        )}
      </div>
  );
};

export default BlogList;
