import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaMapMarkerAlt, FaUniversity, FaLaptopCode, FaQuoteLeft } from "react-icons/fa"

const Bio: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const bioItems = [
    { icon: <FaMapMarkerAlt />, label: "From", content: "Saitama, Japan" },
    { icon: <FaUniversity />, label: "Current", content: "UT EEIC 3rd grade" },
    { icon: <FaLaptopCode />, label: "Major", content: "Computer Science and Electronics" },
    { icon: <FaQuoteLeft />, label: "Favorite Quote", content: "The rise and fall of fortunes is inevitable." },
  ]

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-lg filter blur-xl"
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          style={{ fontFamily: "'Caveat', cursive" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          izawa
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {bioItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 rounded-lg p-4 transition-all duration-300 group-hover:bg-white/20">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3 text-pink-500">{item.icon}</span>
                  <h2 className="text-xl font-semibold text-white">{item.label}</h2>
                </div>
                <p className="text-gray-300">{item.content}</p>
              </div>
              <AnimatePresence>
                {hoveredItem === item.label && (
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
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Bio

