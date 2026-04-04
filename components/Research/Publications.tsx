"use client"

import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations, useLocale } from "next-intl"
import Section from "../Section"
import PublicationPopup from "./PublicationPopup"
import { getPublications } from "@/data"
import type { Publication } from "@/data"
import { FaExternalLinkAlt } from "react-icons/fa"

const LINK_COLORS: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
  arXiv:      { bg: 'bg-red-600/20',    text: 'text-red-300',    border: 'border-red-500/40',    hoverBg: 'hover:bg-red-600/30' },
  Code:       { bg: 'bg-green-600/20',   text: 'text-green-300',  border: 'border-green-500/40',  hoverBg: 'hover:bg-green-600/30' },
  OpenReview: { bg: 'bg-purple-600/20',  text: 'text-purple-300', border: 'border-purple-500/40', hoverBg: 'hover:bg-purple-600/30' },
}

const DEFAULT_LINK_COLOR = { bg: 'bg-white/5', text: 'text-gray-300', border: 'border-gray-600/50', hoverBg: 'hover:bg-white/10' }

function getLinkColor(label: string) {
  return LINK_COLORS[label] || DEFAULT_LINK_COLOR
}

const PublicationCard: React.FC<{ pub: Publication; index: number; onClick: () => void }> = ({ pub, index, onClick }) => {
  const t = useTranslations('research')
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })
  const controls = useAnimation()

  React.useEffect(() => {
    controls.start(inView ? "visible" : "hidden")
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" as const },
    },
  }

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      <article
        className="bg-black/20 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-gray-500/50 hover:border-gray-400/70 transition-all duration-300 hover:bg-black/30 cursor-pointer transform hover:scale-[1.01]"
        onClick={onClick}
      >
        <div className="flex flex-col md:flex-row gap-5">
          {pub.thumbnail && (
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
              <div className="aspect-[16/10] rounded-lg overflow-hidden border border-gray-600/50">
                <img
                  src={pub.thumbnail}
                  alt={pub.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex-grow min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
              {pub.title}
            </h3>

            <p className="text-sm text-gray-300 mb-3">
              {pub.authors.map((author, i) => (
                <React.Fragment key={author}>
                  {i > 0 && ', '}
                  <span className={author === pub.highlightAuthor ? 'font-bold text-white' : ''}>
                    {author}
                  </span>
                </React.Fragment>
              ))}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              {pub.isFirstAuthor && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-600/30 to-yellow-400/30 text-yellow-300 border border-yellow-500/40">
                  First Author
                </span>
              )}
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600/30 to-blue-400/30 text-blue-300 border border-blue-500/40">
                {pub.venueShort}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {pub.links.map((link) => {
                const color = getLinkColor(link.label)
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md ${color.bg} ${color.text} border ${color.border} ${color.hoverBg} hover:brightness-110 transition-all duration-200`}
                  >
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    {link.label}
                  </a>
                )
              })}
              {pub.citations !== undefined && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 text-gray-400 border border-gray-600/50">
                  {t('citations')}: {pub.citations}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  )
}

const Publications: React.FC = () => {
  const locale = useLocale()
  const publications = getPublications(locale as 'ja' | 'en')
  const t = useTranslations('research')
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null)

  return (
    <Section
      id="publications"
      title={t('publications')}
      className="bg-transparent py-16"
      titleColor="shine-gold-text"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <PublicationCard
              key={pub.id}
              pub={pub}
              index={index}
              onClick={() => setSelectedPub(pub)}
            />
          ))}
        </div>
      </div>

      {selectedPub && (
        <PublicationPopup pub={selectedPub} onClose={() => setSelectedPub(null)} />
      )}
    </Section>
  )
}

export default Publications
