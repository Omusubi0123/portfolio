"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations, useLocale } from "next-intl"
import Section from "../Section"
import { getSkills } from "@/data"
import type { Skill } from "@/data"

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategoryKeys = ['main', 'backendDb', 'infraNetwork', 'frontend'] as const

const SkillItem: React.FC<{
  skill: Skill
  index: number
  isMobile: boolean
  isActive: boolean
  onActivate: () => void
}> = ({ skill, index, isMobile, isActive, onActivate }) => {
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile && isActive) {
      const handleScroll = () => {
        if (itemRef.current) {
          const rect = itemRef.current.getBoundingClientRect()
          if (rect.top < 0 || rect.bottom > window.innerHeight) {
            onActivate()
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile, isActive, onActivate])

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center justify-center space-y-2 p-4 bg-gray-1000 rounded-lg shadow-md transition-transform hover:scale-105"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && onActivate()}
    >
      <img
        src={skill.icon || "/placeholder.svg"}
        alt={skill.name}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />
      <span className="text-sm sm:text-base shine-gold-text md:text-lg font-medium text-center">{skill.name}</span>
      <AnimatePresence>
        {((!isMobile && isHovered) || (isMobile && isActive)) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full transform -translate-x-1/2 mb-2 p-2 bg-black text-sm rounded-md shadow-lg z-10 w-48 text-center"
          >
            <p className="text-xs sm:text-sm shine-silver-text">{skill.comment}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const SkillCategory: React.FC<{
  category: SkillCategory
  index: number
  isMobile: boolean
  activeSkill: string | null
  setActiveSkill: (skill: string | null) => void
}> = ({ category, index, isMobile, activeSkill, setActiveSkill }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8"
    >
      <h2 className="text-xl sm:text-2xl font-semibold shine-gold-text mb-4 border-b-2 border-gray-300 pb-2">
        {category.title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 shine-gold-text font-bold">
        {category.skills.map((skill, i) => (
          <SkillItem
            key={i}
            skill={skill}
            index={i}
            isMobile={isMobile}
            isActive={activeSkill === skill.name}
            onActivate={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const locale = useLocale()
  const skillsData = getSkills(locale as 'ja' | 'en')
  const t = useTranslations('section')
  const tSkills = useTranslations('skills')
  const skillCategories: SkillCategory[] = skillsData.map((cat, i) => ({
    ...cat,
    title: tSkills(skillCategoryKeys[i]),
  }))
  const [isMobile, setIsMobile] = useState(false)
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (skillsRef.current && !skillsRef.current.contains(e.target as Node)) {
          setActiveSkill(null)
        }
      }
      document.addEventListener("click", handleOutsideClick)
      return () => document.removeEventListener("click", handleOutsideClick)
    }
  }, [isMobile])

  return (
    <Section
      id="skills"
      title={t('skills')}
      className="bg-transparent flex justify-center py-8"
      titleColor="shine-gold-text"
    >
      <div ref={skillsRef} className="w-full max-w-5xl px-4">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            category={category}
            index={index}
            isMobile={isMobile}
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
          />
        ))}
      </div>
    </Section>
  )
}
