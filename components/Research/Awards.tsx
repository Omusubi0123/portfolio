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
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} className="space-y-4">
          {awards.map((award) => (
            <motion.article
              key={award.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              className="group relative overflow-hidden rounded-lg border border-gray-500/50 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 md:p-6"
            >
              <div className="relative z-10 flex items-start gap-4">
                <FaTrophy className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <div className="min-w-0 space-y-2">
                  <h3 className="font-semibold text-base leading-relaxed text-white md:text-lg">{award.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300 md:text-base">{award.organization}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 md:text-sm">
                    <span>{award.year}</span>
                    {award.category && (
                      <span className="rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 px-2 py-0.5 text-xs text-yellow-300">
                        {award.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Awards
