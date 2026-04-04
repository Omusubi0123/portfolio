"use client"

import type React from "react"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslations } from "next-intl"
import { FaUniversity, FaFlask, FaMicroscope } from "react-icons/fa"
import Section from "../Section"

const ResearchAbout: React.FC = () => {
  const t = useTranslations('research')
  const controls = useAnimation()
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
        {/* Profile image */}
        <motion.div variants={itemVariants} className="flex justify-center items-center w-full md:w-auto h-full">
          <div className="flex flex-col items-center mt-20">
            <div className="relative p-2 rounded-full bg-gradient-to-r from-[#B39855] via-[#E0E0E0] to-[#B39855] transform transition-transform duration-300 hover:scale-105">
              <img
                src="/research_icon.png"
                alt="Research Icon"
                className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-white brightness-95 transition-all duration-300 hover:brightness-100"
              />
            </div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#B39855] via-[#E0E0E0] to-[#B39855]"
              style={{ fontFamily: "Georgia, 'Caveat', cursive" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('aboutName')}
            </motion.h1>
          </div>
        </motion.div>

        {/* Info */}
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
                {/* Affiliation */}
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <FaUniversity className="text-xl mr-3 text-[#FFBF00]" />
                    <h2 className="text-xl font-semibold shine-pink-text">{t('affiliationLabel')}</h2>
                  </div>
                  <p className="ios-white">{t('aboutAffiliation')}</p>
                  <p className="text-gray-400 text-sm mt-1">{t('aboutLab')}</p>
                </div>

                {/* Research field */}
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <FaMicroscope className="text-xl mr-3 text-[#FFBF00]" />
                    <h2 className="text-xl font-semibold shine-pink-text">{t('fieldLabel')}</h2>
                  </div>
                  <p className="ios-white">{t('aboutField')}</p>
                </div>

                {/* Intro */}
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <FaFlask className="text-xl mr-3 text-[#FFBF00]" />
                    <h2 className="text-xl font-semibold shine-pink-text">About</h2>
                  </div>
                  <p className="ios-white text-sm leading-relaxed">{t('aboutIntro')}</p>
                </div>
              </div>
            </div>
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
