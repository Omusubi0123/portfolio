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
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} className="relative border-l border-gray-600/80">
          {education.map((edu) => (
            <motion.article
              key={edu.id}
              className="relative mb-8 ml-6 rounded-lg border border-gray-600/60 bg-black/60 p-6 shadow-xl last:mb-0"
            >
              <div className="absolute -left-[2.05rem] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-200">
                <FaGraduationCap className="h-3 w-3 text-gray-700" />
              </div>
              <div className="min-w-0 space-y-3">
                  <div>
                    {edu.institutionUrl ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-primary-link font-semibold text-lg md:text-xl"
                      >
                        {edu.institution}
                        <FaExternalLinkAlt className="ml-2 inline h-2.5 w-2.5 text-gray-500" />
                      </a>
                    ) : (
                      <span className="font-semibold text-lg text-white md:text-xl">{edu.institution}</span>
                    )}
                  </div>

                  <div className="text-base font-semibold leading-relaxed md:text-lg">
                    {edu.departmentUrl ? (
                      <a
                        href={edu.departmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-secondary-link"
                      >
                        {edu.department}
                        <FaExternalLinkAlt className="ml-2 inline h-2.5 w-2.5 text-gray-500" />
                      </a>
                    ) : (
                      edu.department
                    )}
                    {edu.lab && (
                      <>
                        <span className="text-gray-400"> / </span>
                        {edu.labUrl ? (
                          <a
                            href={edu.labUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="education-secondary-link"
                          >
                            {edu.lab}
                          </a>
                        ) : (
                          <span className="education-secondary-link">{edu.lab}</span>
                        )}
                      </>
                    )}
                  </div>

                  <div className="education-secondary-link flex flex-wrap items-center gap-3 text-base font-semibold md:text-lg">
                    <span>{edu.period}</span>
                    {edu.current && (
                      <span className="rounded-full border border-green-500/30 bg-gradient-to-r from-green-600/20 to-green-400/20 px-2 py-0.5 text-xs text-green-300">
                        Current
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

export default Education
