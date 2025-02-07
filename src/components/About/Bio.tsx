import type React from "react"
import { motion } from "framer-motion"

const Bio: React.FC = () => (
  <>
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      izawa
    </motion.h1>
    <motion.p
      className="text-lg mb-6 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      Passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences.
      Constantly exploring new technologies and pushing the boundaries of what's possible in web development.
    </motion.p>
  </>
)

export default Bio

