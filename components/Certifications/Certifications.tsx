"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations } from "next-intl"
import Section from "../Section"
import { FaGraduationCap, FaLanguage, FaLaptopCode } from "react-icons/fa"

interface Certification {
  title: string
  date: string
  icon: React.ReactNode
  color: string
}

const certKeys = ['dlCourse', 'ap', 'toeic'] as const
const certIcons = [<FaGraduationCap key="g" />, <FaLaptopCode key="l" />, <FaLanguage key="lang" />]
const certColors = ['bg-green-600', 'bg-blue-500', 'bg-yellow-500']

const CertificationItem: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center w-full mb-8`}
    >
      <div className={`w-5 h-5 rounded-full ${cert.color} shadow-lg`} />
      <div
        className={`flex-grow border-t-2 ${cert.color} ${index % 2 === 0 ? "border-l-2 pl-4" : "border-r-2 pr-4"}`}
      />
      <div
        className={`w-64 p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl ${
          index % 2 === 0 ? "text-right" : "text-left"
        }`}
      >
        <div className={`text-2xl ${cert.color.replace("bg-", "text-")} mb-2`}>{cert.icon}</div>
        <h3 className="text-lg font-semibold shine-silver-text mb-1">{cert.title}</h3>
        <p className="text-sm shine-silver-text">{cert.date}</p>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const t = useTranslations('section')
  const tCert = useTranslations('certifications')
  const certifications: Certification[] = certKeys.map((key, i) => ({
    title: tCert(`${key}.title`),
    date: tCert(`${key}.date`),
    icon: certIcons[i],
    color: certColors[i],
  }))
  return (
    <Section
      id="certifications"
      title={t('certifications')}
      className="bg-transparent flex justify-center py-16 overflow-hidden"
      titleColor="shine-gold-text"
    >
      <div className="w-full max-w-4xl">
        {certifications.map((cert, index) => (
          <CertificationItem key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </Section>
  )
}

