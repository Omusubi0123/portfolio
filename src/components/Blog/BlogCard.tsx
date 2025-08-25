import type React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPostMetadata } from './types';

interface BlogCardProps {
  post: BlogPostMetadata;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="block group transform transition-all duration-300 hover:scale-105"
    >
      <article className="bg-black/40 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-700/50 hover:border-gray-500/70 transition-all duration-300">
        {post.thumbnail && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        
        <div className="flex flex-col h-full">
          <h3 className="text-xl md:text-2xl font-bold shine-gold-text mb-3 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-3 flex-grow text-sm md:text-base">
            {post.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 text-yellow-300 border border-yellow-500/30"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-gray-600/20 text-gray-400">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
          
          <time className="text-sm text-gray-400">
            {new Date(post.date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
