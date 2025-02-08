import type React from "react"
import { motion } from "framer-motion"

const ProfileImage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-100 group-hover:opacity-200 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <a href="https://github.com/Omusubi0123" target="_blank" rel="noopener noreferrer" className="relative block">
      <img src="/icon.png" alt="Icon" className="w-40 h-40 md:w-60 md:h-60 rounded-full" />
    </a>
  </motion.div>
)

export default ProfileImage

