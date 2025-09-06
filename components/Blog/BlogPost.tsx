"use client"

import type React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import type { BlogPost as BlogPostType } from '@/lib/blog';
import './blog-styles.css';

// 動画ファイルかどうかを判定する関数
const isVideoFile = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.mov', '.avi', '.webm', '.ogg'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-20">
      {/* 戻るリンク */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        ブログ一覧
      </Link>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold shine-gold-text mb-4"
          style={{ fontFamily: "Georgia, 'Caveat', cursive" }}
        >
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
          <time className="text-sm md:text-base">
            {new Date(post.date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 text-yellow-300 border border-yellow-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {post.thumbnail && (
          <div className="rounded-xl overflow-hidden mb-8">
            {isVideoFile(post.thumbnail) ? (
              <video
                src={post.thumbnail}
                className="w-full object-contain"
                style={{ maxHeight: '350px' }}
                controls
                muted
                loop
              >
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            ) : (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full md:w-120 object-contain"
                style={{ maxHeight: '350px' }}
              />
            )}
          </div>
        )}
      </header>

      {/* 記事本文 */}
      <article className="prose prose-lg prose-invert max-w-none">
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl md:text-3xl font-bold shine-gold-text mb-6 mt-8 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl md:text-2xl font-bold shine-silver-text mb-4 mt-8">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg md:text-xl font-bold text-yellow-300 mb-3 mt-6">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-sm md:text-base">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-400 my-4">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="bg-gray-800/80 text-yellow-300 px-1 py-0.5 rounded text-sm">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className={className}>
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-gray-900/90 rounded-lg p-4 overflow-x-auto my-4 border border-gray-700">
                  {children}
                </pre>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 underline transition-colors duration-300"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <div className="my-6 flex flex-col items-center">
                  <img
                    src={src}
                    alt={alt}
                    className="max-w-md w-full rounded-lg border border-gray-700 shadow-lg"
                  />
                  {alt && (
                    <p className="text-center text-gray-500 text-sm mt-2">
                      {alt}
                    </p>
                  )}
                </div>
              ),
              // Custom video component for video support
              video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
                <div className="my-6 flex justify-center">
                  <video
                    controls
                    muted={props.muted !== undefined ? props.muted : false}
                    className="max-w-lg w-full rounded-lg border border-gray-700 shadow-lg"
                    style={{ maxHeight: '350px' }}
                    {...props}
                  >
                    お使いのブラウザは動画タグをサポートしていません。
                  </video>
                </div>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border border-gray-700 rounded-lg">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-800/50">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-2 text-left text-yellow-300 border-b border-gray-700">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 text-gray-300 border-b border-gray-700/50">
                  {children}
                </td>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* 記事の最後 */}
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <div className="flex justify-center">
          <Link 
            href="/blog" 
            className="px-5 py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Read Other Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;