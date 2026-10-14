"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations, useLocale } from "next-intl"
import Section from "../Section"
import { getPresentations } from "@/data"
import type { Presentation } from "@/data"
import { FaExternalLinkAlt } from "react-icons/fa"

const PresentationCard: React.FC<{ pres: Presentation; index: number }> = ({ pres, index }) => {
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
      <a
        href={pres.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-lg border border-gray-500/50 bg-black/20 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-gray-400/70 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80 md:p-5"
        aria-label={`${pres.title} - ${t('viewPdf')}`}
        onMouseEnter={(event) => {
          const overlay = event.currentTarget.querySelector<HTMLElement>('[data-presentation-overlay]')
          if (overlay) overlay.scrollTop = 0
        }}
        onFocus={(event) => {
          const overlay = event.currentTarget.querySelector<HTMLElement>('[data-presentation-overlay]')
          if (overlay) overlay.scrollTop = 0
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <div className="w-full flex-shrink-0 sm:w-48 lg:w-56">
            <div className="aspect-[16/10] overflow-hidden rounded-lg border border-gray-600/50 bg-black/30">
              <img
                src={pres.thumbnail}
                alt={`${pres.title} slide preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="min-w-0 flex-grow">
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-400">
              <span>{pres.event}</span>
              <span aria-hidden="true" className="text-gray-600">•</span>
              <span>{pres.date}</span>
            </div>

            <h3 className="mb-3 text-base font-bold leading-snug text-white md:text-lg">
              {pres.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {pres.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-600/30 to-blue-400/30 px-2.5 py-0.5 text-xs font-semibold text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {pres.description && (
          <div
            data-presentation-overlay
            className="pointer-events-none absolute inset-0 flex max-h-full items-start overflow-y-auto overscroll-contain bg-black/85 p-5 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:opacity-100 md:p-8"
          >
            <div className="max-w-3xl">
              <p className="mb-2 text-base font-bold leading-snug shine-gold-text md:text-lg">
                {pres.title}
              </p>
              <p className="text-sm leading-relaxed text-gray-100 md:text-base">
                {pres.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-gray-300">
                <FaExternalLinkAlt className="h-2.5 w-2.5" />
                {t('viewPdf')}
              </span>
            </div>
          </div>
        )}
      </a>
    </motion.div>
  )
}

const Presentations: React.FC = () => {
  const locale = useLocale()
  const presentations = getPresentations(locale as 'ja' | 'en')
  const t = useTranslations('research')

  return (
    <Section
      id="presentations"
      title={t('presentations')}
      className="bg-transparent py-16"
      titleColor="shine-gold-text"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {presentations.length > 0 ? (
          <div className="space-y-6">
            {presentations.map((pres, index) => (
              <PresentationCard key={pres.id} pres={pres} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-8 text-center">
            <p className="text-lg text-gray-400">{t('comingSoon')}</p>
          </div>
        )}
      </div>
    </Section>
  )
}

export default Presentations
