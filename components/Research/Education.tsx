"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations, useLocale } from "next-intl"
import Section from "../Section"
import { getEducation } from "@/data"
import { FaGraduationCap } from "react-icons/fa"

const Education: React.FC = () => {
  const locale = useLocale()
  const education = getEducation(locale as 'ja' | 'en')
  const t = useTranslations('research')
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  React.useEffect(() => {
    controls.start(inView ? "visible" : "hidden")
  }, [controls, inView])

  if (education.length === 0) return null

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
      id="education"
      title={t('education')}
      className="bg-transparent py-16"
      titleColor="shine-gold-text"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg border border-gray-500/50 overflow-hidden">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`grid grid-cols-[auto_1fr_1fr_auto_auto] md:grid-cols-[24px_180px_1fr_120px_auto] items-center gap-x-4 px-4 md:px-6 py-3 hover:bg-white/5 transition-colors duration-200 ${
                  index > 0 ? 'border-t border-gray-700/50' : ''
                }`}
              >
                <FaGraduationCap className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold text-white text-sm md:text-base whitespace-nowrap">
                  {edu.institution}
                </span>
                <span className="text-gray-400 text-sm truncate">
                  {edu.department}{edu.lab ? ` / ${edu.lab}` : ''}
                </span>
                <span className="text-xs text-gray-500 text-right whitespace-nowrap">{edu.period}</span>
                <span className="w-[60px] text-center">
                  {edu.current && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-green-600/20 to-green-400/20 text-green-300 border border-green-500/30">
                      Current
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Education
