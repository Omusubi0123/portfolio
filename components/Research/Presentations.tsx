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
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-gray-500/50 hover:border-green-500/50 transition-all duration-300 hover:bg-black/30">
        <h3 className="text-lg font-bold text-white mb-1">{pres.title}</h3>
        <p className="text-sm text-gray-300 mb-1">{pres.event}</p>
        <p className="text-xs text-gray-400 mb-2">{pres.date}</p>
        {pres.description && (
          <p className="text-sm text-gray-300 mb-3">{pres.description}</p>
        )}
        {pres.slideUrl && (
          <a
            href={pres.slideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-gray-600/50 hover:bg-white/10 hover:text-white hover:border-gray-400/70 transition-all duration-200"
          >
            <FaExternalLinkAlt className="w-2.5 h-2.5" />
            Slides
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Presentations: React.FC = () => {
  const locale = useLocale()
  const presentations = getPresentations(locale as 'ja' | 'en')
  const t = useTranslations('research')

  if (presentations.length === 0) {
    return (
      <Section
        id="presentations"
        title={t('presentations')}
        className="bg-transparent py-16"
        titleColor="shine-gold-text"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg">{t('comingSoon')}</p>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section
      id="presentations"
      title={t('presentations')}
      className="bg-transparent py-16"
      titleColor="shine-gold-text"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-4">
          {presentations.map((pres, index) => (
            <PresentationCard key={pres.id} pres={pres} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Presentations
