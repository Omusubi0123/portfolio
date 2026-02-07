"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations, useLocale } from "next-intl"
import Section from "../Section"
import { FaBriefcase, FaCalendarAlt, FaTasks } from "react-icons/fa"
import { getCareerData } from "@/data"
import type { CareerItem } from "@/data"

function useDurationFormatter() {
  const t = useTranslations('carriers')
  return (startDate: Date, endDate: Date | null): string => {
    const end = endDate || new Date()
    const diffTime = Math.abs(end.getTime() - startDate.getTime())
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
    if (diffYears > 0) return t('yearsMonths', { years: diffYears, months: diffMonths })
    return t('months', { months: diffMonths })
  }
}

const CareerItemComponent: React.FC<{ item: CareerItem; formatDuration: (start: Date, end: Date | null) => string }> = ({ item, formatDuration }) => {
  const t = useTranslations('carriers')
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  }

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} className="mb-12 ml-6 relative">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-xl">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-black dark:text-white">
          <FaBriefcase className="mr-2" /> {item.title}{t('at')}{item.company}
        </h3>
        <time className="block mt-2 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
          <FaCalendarAlt className="inline-block mr-1" />
          {item.startDate.getFullYear()}.{item.startDate.getMonth() + 1} ~{" "}
          {item.endDate ? `${item.endDate.getFullYear()}.${item.endDate.getMonth() + 1}` : t('present')}（
          {formatDuration(item.startDate, item.endDate)}）
        </time>
        <p className="mb-4 text-base font-normal text-gray-400 dark:text-gray-300">{item.description}</p>
        <ul className="space-y-2">
          {item.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <FaTasks className="mr-2 mt-1 flex-shrink-0 text-blue-500" />
              <span className="text-gray-700 dark:text-gray-100">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const Carriers: React.FC = () => {
  const locale = useLocale()
  const careerData = getCareerData(locale as 'ja' | 'en')
  const t = useTranslations('section')
  const formatDuration = useDurationFormatter()
  return (
    <Section id="carriers" title={t('careerJourney')} className="bg-transparent py-16" titleColor="shine-blue-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l border-gray-200 dark:border-gray-700">
          {careerData.map((item, index) => (
            <CareerItemComponent key={index} item={item} formatDuration={formatDuration} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Carriers

