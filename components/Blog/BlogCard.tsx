"use client"

import type React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import type { BlogPostMetadata } from '@/lib/blog';
import ImageLightbox from './ImageLightbox';

interface BlogCardProps {
  post: BlogPostMetadata;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const locale = useLocale();
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <Link
        href={`/${locale}/blog/${post.id}`}
        className="block group transform transition-all duration-300 hover:scale-105"
      >
        <article className="bg-black/40 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-700/50 hover:border-gray-500/70 transition-all duration-300 flex flex-col">
          {post.thumbnail && (
            <div
              role="button"
              tabIndex={0}
              className="mb-4 block w-full cursor-zoom-in rounded-lg overflow-hidden text-left"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIsImageOpen(true);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  event.stopPropagation();
                  setIsImageOpen(true);
                }
              }}
              aria-label={`${post.title}の画像を拡大`}
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
        
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-bold shine-gold-text mb-3 line-clamp-2">
              {post.title}
            </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-3 flex-grow text-sm md:text-base">
            {post.summary}
          </p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="tag-yellow rounded-full px-2 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="tag-gray rounded-full px-2 py-1 text-xs font-medium">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
            
            <time className="text-sm text-gray-400">
              {new Date(post.date).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          </div>
        </article>
      </Link>
      {isImageOpen && post.thumbnail && (
        <ImageLightbox
          src={post.thumbnail}
          alt={post.title}
          onClose={() => setIsImageOpen(false)}
        />
      )}
    </>
  );
};

export default BlogCard;
