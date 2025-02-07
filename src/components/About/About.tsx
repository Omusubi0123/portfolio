import type React from "react"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Section from "../Section"
import ProfileImage from "./ProfileImage"
import Bio from "./Bio"
import SocialLinks from "./SocialLinks"
import Interests from "./Interests"


const About: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <Section id="about" title="About Me" className="bg-transparent flex justify-center py-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white-500/10 via-pink-500/20 to-cyan-500/20"></div>
        <Particles />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
      >
        <motion.div variants={itemVariants}>
          <ProfileImage />
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-lg">
          <Bio />
          <SocialLinks />
          <Interests />
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

export default About


