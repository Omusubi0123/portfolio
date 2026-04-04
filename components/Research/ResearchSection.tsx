"use client"

import React from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslations, useLocale } from 'next-intl'
import Section from '../Section'
import { getPublications } from '@/data'
import { FaExternalLinkAlt } from 'react-icons/fa'

const LINK_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  arXiv:      { bg: 'bg-red-600/20',    text: 'text-red-300',    border: 'border-red-500/40' },
  Code:       { bg: 'bg-green-600/20',   text: 'text-green-300',  border: 'border-green-500/40' },
  OpenReview: { bg: 'bg-purple-600/20',  text: 'text-purple-300', border: 'border-purple-500/40' },
}
const DEFAULT_COLOR = { bg: 'bg-white/5', text: 'text-gray-300', border: 'border-gray-600/50' }

const ResearchSection: React.FC = () => {
  const t = useTranslations('research')
  const locale = useLocale()
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 })

  const publications = getPublications(locale as 'ja' | 'en')
  const latestPub = publications[0]

  React.useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  }

  return (
    <Section
      id="research"
      title={t('title')}
      className="bg-transparent py-16"
      titleColor="shine-gold-text"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-4">
          {latestPub && (
            <motion.div variants={itemVariants}>
              <article className="bg-black/20 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-gray-500/50 hover:border-gray-400/70 transition-all duration-300 hover:bg-black/30 transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-4">
                  {latestPub.thumbnail && (
                    <div className="w-full md:w-40 flex-shrink-0">
                      <div className="aspect-[16/10] rounded-lg overflow-hidden border border-gray-600/50">
                        <img src={latestPub.thumbnail} alt={latestPub.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-base md:text-lg font-bold shine-gold-text mb-2 leading-snug">
                      {latestPub.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2">
                      {latestPub.authors.map((a, i) => (
                        <React.Fragment key={a}>
                          {i > 0 && ', '}
                          <span className={a === latestPub.highlightAuthor ? 'font-bold text-gray-200' : ''}>{a}</span>
                        </React.Fragment>
                      ))}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {latestPub.isFirstAuthor && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-600/30 to-yellow-400/30 text-yellow-300 border border-yellow-500/40">
                          First Author
                        </span>
                      )}
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600/30 to-blue-400/30 text-blue-300 border border-blue-500/40">
                        {latestPub.venueShort}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {latestPub.links.map((link) => {
                        const c = LINK_COLORS[link.label] || DEFAULT_COLOR
                        return (
                          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md ${c.bg} ${c.text} border ${c.border} hover:brightness-110 transition-all duration-200`}
                          >
                            <FaExternalLinkAlt className="w-2 h-2" />
                            {link.label}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="text-center mt-6" variants={itemVariants} initial="hidden" animate={controls}>
          <Link
            href={`/${locale}/research`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-900 to-yellow-700 text-gray-300 font-semibold rounded-lg hover:from-yellow-800 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>{t('viewResearch')}</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

export default ResearchSection
