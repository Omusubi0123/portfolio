import type React from "react"
import { Box } from "@mui/material"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaMapMarkerAlt, FaUniversity, FaLaptopCode, FaQuoteLeft } from "react-icons/fa"

const Bio: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const bioItems = [
    { icon: <FaMapMarkerAlt />, label: "From", content: "Saitama, Japan" },
    { icon: <FaUniversity />, label: "Current", content: "UT EEIC 4th grade" },
    { icon: <FaLaptopCode />, label: "Major", content: "Computer Science and Electronics" },
    { icon: <FaQuoteLeft />, label: "Favorite Quote", content: "The rise and fall of fortunes is inevitable." },
  ]

  return (
    <Box sx={{ position: "relative" }}>
      <motion.div
        className="absolute inset-0  rounded-lg filter blur-xl mb-5 mt-5 mr-5 ml-5"
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
      <Box
        sx={{
          position: "relative",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
          borderRadius: "8px",
          padding: "32px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
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
                  <span className="text-xl mr-3 text-[#FFBF00]">{item.icon}</span>
                  <h2 className="text-xl font-semibold shine-pink-text">{item.label}</h2>
                </div>
                <p className="ios-white">{item.content}</p>
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
      </Box>
    </Box>
  )
}

export default Bio

