import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiHuggingface, SiFastapi, SiRobotframework } from "react-icons/si"

interface InterestItemProps {
  icon: React.ReactNode
  name: string
  description: string
}

const InterestItem: React.FC<InterestItemProps> = ({ icon, name, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleInteraction = () => {
    if (isMobile) {
      setIsClicked(!isClicked)
    }
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (isMobile && isClicked) {
      const target = e.target as HTMLElement
      if (!target.closest(".interest-item")) {
        setIsClicked(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobile, isClicked])

  return (
    <div
      className="relative interest-item"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleInteraction}
    >
      <motion.div
        className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
        <span>{name}</span>
      </motion.div>
      <AnimatePresence>
        {((isMobile && isClicked) || (!isMobile && isHovered)) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-64"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const interestsData = [
  {
    icon: <SiHuggingface className="text-2xl text-red-500" />,
    name: "AI Engineer",
    description: "Specializing in developing and implementing cutting-edge AI models and algorithms.",
  },
  {
    icon: <SiFastapi className="text-2xl text-blue-500" />,
    name: "Backend Engineer",
    description: "Building robust and scalable server-side applications and APIs.",
  },
  {
    icon: <SiRobotframework className="text-2xl text-purple-500" />,
    name: "Research & Development",
    description: "Exploring new technologies and methodologies to drive innovation in software development.",
  },
]

const Interests: React.FC = () => (
  <motion.div
    className="flex flex-wrap gap-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    {interestsData.map((interest, index) => (
      <InterestItem key={index} {...interest} />
    ))}
  </motion.div>
)

export default Interests

