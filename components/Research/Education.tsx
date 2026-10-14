"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations, useLocale } from "next-intl"
import Section from "../Section"
import { getEducation } from "@/data"
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa"

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
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} className="space-y-4">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="rounded-lg border border-gray-500/50 bg-black/20 p-5 backdrop-blur-sm transition-colors duration-200 hover:bg-white/5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <div className="min-w-0 space-y-2">
                  <div>
                    {edu.institutionUrl ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-base text-white transition-colors hover:text-yellow-300 md:text-lg"
                      >
                        {edu.institution}
                        <FaExternalLinkAlt className="ml-2 inline h-2.5 w-2.5 text-gray-500" />
                      </a>
                    ) : (
                      <span className="font-semibold text-base text-white md:text-lg">{edu.institution}</span>
                    )}
                  </div>

                  <div className="text-sm leading-relaxed text-gray-300 md:text-base">
                    {edu.departmentUrl ? (
                      <a
                        href={edu.departmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-yellow-300"
                      >
                        {edu.department}
                        <FaExternalLinkAlt className="ml-2 inline h-2.5 w-2.5 text-gray-500" />
                      </a>
                    ) : (
                      edu.department
                    )}
                    {edu.lab && <span className="text-gray-400"> / {edu.lab}</span>}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 md:text-sm">
                    <span>{edu.period}</span>
                    {edu.current && (
                      <span className="rounded-full border border-green-500/30 bg-gradient-to-r from-green-600/20 to-green-400/20 px-2 py-0.5 text-xs text-green-300">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Education
