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
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} className="relative border-l border-gray-600/80">
          {awards.map((award) => (
            <motion.article
              key={award.id}
              className="relative mb-8 ml-6 rounded-lg border border-gray-600/60 bg-black/60 p-6 shadow-xl last:mb-0"
            >
              <div className="absolute -left-[2.05rem] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-200">
                <FaTrophy className="h-3 w-3 text-gray-700" />
              </div>
              <div className="min-w-0 space-y-3">
                  <h3 className="font-semibold text-lg leading-relaxed text-white md:text-xl">{award.title}</h3>
                  <p className="text-base font-semibold leading-relaxed text-gray-300 md:text-lg">{award.organization}</p>
                  <div className="flex flex-wrap items-center gap-3 text-base font-semibold text-gray-300 md:text-lg">
                    <span>{award.year}</span>
                    {award.category && (
                      <span className="rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 px-2 py-0.5 text-xs text-yellow-300">
                        {award.category}
                      </span>
                    )}
                  </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Awards
