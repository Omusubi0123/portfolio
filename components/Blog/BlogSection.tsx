"use client"

import React from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations, useLocale } from 'next-intl';
import Section from '../Section';
import type { BlogPostMetadata } from '@/lib/blog';

interface BlogSectionProps {
  posts: BlogPostMetadata[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const t = useTranslations('section');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const displayPosts = posts
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
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <Section
      id="blog"
      title={t('recentBlogPosts')}
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
          {displayPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link
                href={`/${locale}/blog/${post.id}`}
                className="block group hover:no-underline"

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
                          {new Date(post.date).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="tag-purple px-2 py-1 text-xs rounded-full"
                            >
                              <span className="shine-purple-text">{tag}</span>
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
                      <div className="w-full md:w-36 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
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
            href={`/${locale}/blog`}
            className="purple-outline-button inline-flex items-center px-4 py-2 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="shine-purple-text">{tNav('viewAllPosts')}</span>
            <span aria-hidden="true" className="ml-3 text-2xl leading-none text-purple-200">→</span>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default BlogSection;
