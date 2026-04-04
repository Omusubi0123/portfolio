"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations, useLocale } from "next-intl"
import Section from "../Section"
import { getAwards } from "@/data"
import { FaTrophy } from "react-icons/fa"

const Awards: React.FC = () => {
  const locale = useLocale()
  const awards = getAwards(locale as 'ja' | 'en')
  const t = useTranslations('research')
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  React.useEffect(() => {
    controls.start(inView ? "visible" : "hidden")
  }, [controls, inView])

  if (awards.length === 0) return null

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  return (
    <Section
      id="awards"
      title={t('awards')}
      className="bg-transparent py-16"
      titleColor="shine-gold-text"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg border border-gray-500/50 overflow-hidden">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className={`flex items-center gap-3 px-4 md:px-6 py-3 hover:bg-white/5 transition-colors duration-200 ${
                  index > 0 ? 'border-t border-gray-700/50' : ''
                }`}
              >
                <FaTrophy className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="font-semibold text-white text-sm md:text-base flex-shrink-0">
                  {award.title}
                </span>
                <span className="text-gray-500 hidden md:inline">—</span>
                <span className="text-gray-400 text-sm truncate hidden md:inline">
                  {award.organization}
                </span>
                <span className="ml-auto text-xs text-gray-500 flex-shrink-0">{award.year}</span>
                {award.category && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 text-yellow-300 border border-yellow-500/30 flex-shrink-0">
                    {award.category}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Awards
