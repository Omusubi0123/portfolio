"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLocale, useTranslations } from "next-intl"
import { FaUniversity, FaFlask, FaMicroscope } from "react-icons/fa"
import Section from "../Section"
import SocialLinks from "../About/SocialLinks"

interface HoverInfoCardProps {
  id: string
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  hoveredItem: string | null
  setHoveredItem: (id: string | null) => void
}

const HoverInfoCard: React.FC<HoverInfoCardProps> = ({
  id,
  icon,
  label,
  children,
  hoveredItem,
  setHoveredItem,
}) => (
  <motion.div
    className="relative group h-full"
    onMouseEnter={() => setHoveredItem(id)}
    onMouseLeave={() => setHoveredItem(null)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="bg-white/10 rounded-lg p-4 transition-all duration-300 group-hover:bg-white/20 h-full flex flex-col">
      <div className="flex items-center mb-2">
        <span className="text-xl mr-3 text-[#FFBF00]">{icon}</span>
        <h2 className="text-xl font-semibold shine-pink-text">{label}</h2>
      </div>
      <div className="ios-white">{children}</div>
    </div>
    <AnimatePresence>
      {hoveredItem === id && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  </motion.div>
)

const ResearchAbout: React.FC = () => {
  const locale = useLocale()
  const t = useTranslations('research')
  const controls = useAnimation()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden")
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  }

  return (
    <Section id="research-about" title="" className="bg-transparent flex justify-center py-8 relative overflow-hidden">
      <Particles />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
      >
        <motion.div variants={itemVariants} className="flex justify-center items-center w-full md:w-auto h-full">
          <div className="flex flex-col items-center mt-20">
            <div className="relative p-2 rounded-full bg-gradient-to-r from-[#B39855] via-[#E0E0E0] to-[#B39855] transform transition-transform duration-300 hover:scale-105">
              <a
                href="https://github.com/Omusubi0123"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src="/research_icon.png"
                  alt="Research Icon"
                  className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-white brightness-95 transition-filter duration-300 hover:brightness-100"
                />
              </a>
            </div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#B39855] via-[#E0E0E0] to-[#B39855]"
              style={{
                fontFamily: locale === "ja"
                  ? '"Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif'
                  : "Georgia, 'Caveat', cursive",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('aboutName')}
            </motion.h1>
            {locale === "ja" && (
              <motion.p
                className="name-subtitle mt-1 text-sm md:text-base italic tracking-[0.28em]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                yoshihiro izawa
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-lg">
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-lg filter blur-xl mb-5 mt-5 mr-5 ml-5"
              animate={{ scale: [1, 1.02, 1], rotate: [0, 1, -1, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <div
              className="relative rounded-lg p-6 md:p-8"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="space-y-4">
                <HoverInfoCard
                  id="affiliation"
                  icon={<FaUniversity />}
                  label={t('affiliationLabel')}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                >
                  <p>{t('aboutAffiliation')}</p>
                  <p className="text-gray-400 text-sm mt-1">{t('aboutLab')}</p>
                </HoverInfoCard>

                <HoverInfoCard
                  id="field"
                  icon={<FaMicroscope />}
                  label={t('fieldLabel')}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                >
                  <p>{t('aboutField')}</p>
                </HoverInfoCard>

                <HoverInfoCard
                  id="about"
                  icon={<FaFlask />}
                  label="About"
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                >
                  <p className="text-sm leading-relaxed">{t('aboutIntro')}</p>
                </HoverInfoCard>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <SocialLinks />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

const Particles: React.FC = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-20 animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </>
)

export default ResearchAbout
