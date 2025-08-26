import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../Section';
import { getBlogPostMetadata } from './blogData';

// 動画ファイルかどうかを判定する関数
const isVideoFile = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.mov', '.avi', '.webm', '.ogg'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const BlogSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const posts = getBlogPostMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4); // 最新の4件のみ表示

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <Section
      id="blog"
      title="Recent Blog Posts"
      className="bg-transparent py-16"
      titleColor="shine-purple-text"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          ref={ref}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link
                to={`/blog/${post.id}`}
                className="block group hover:no-underline"
                onClick={() => window.scrollTo(0, 0)}
              >
                <article className="bg-black/20 backdrop-blur-sm rounded-lg p-4 md:p-4 border border-gray-500/50 hover:border-gray-400/70 transition-all duration-300 hover:bg-black/30 transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold shine-gold-text mb-2 group-hover:shine-silver-text transition-all duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base line-clamp-2 mb-3">
                        {post.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <time>
                          {new Date(post.date).toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600/20 to-purple-400/20 text-purple-300 border border-purple-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-xs text-gray-500">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {post.thumbnail && (
                      <div className="w-full md:w-24 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                        {isVideoFile(post.thumbnail) ? (
                          <video
                            src={post.thumbnail}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            muted
                            loop
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => {
                              e.currentTarget.pause();
                              e.currentTarget.currentTime = 0;
                            }}
                          />
                        ) : (
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ブログ一覧への誘導 */}
        <motion.div
          className="text-center mt-6"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-900 to-purple-700 text-gray-300 font-semibold rounded-lg hover:from-purple-800 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span>View All Posts</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default BlogSection;
