"use client"

import type React from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import BlogCard from './BlogCard';
import type { BlogPostMetadata } from '@/lib/blog';

interface BlogListProps {
  posts: BlogPostMetadata[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const t = useTranslations('blog');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;
  const sortedPosts = filteredPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold shine-gold-text mb-4"
            style={{ fontFamily: "Georgia, 'Caveat', cursive" }}
          >
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

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
              {t('all')}
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

        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              {selectedTag ? t('noPostsForTag', { tag: selectedTag }) : t('noPosts')}
            </p>
          </div>
        )}
      </div>
  );
};

export default BlogList;
