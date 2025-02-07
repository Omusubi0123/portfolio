import type React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const SocialLinks: React.FC = () => (
  <motion.div
    className="flex space-x-4 mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <a
      href="https://github.com/Omusubi0123"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-pink-500 transition-colors"
    >
      <FaGithub size={24} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
      <FaTwitter size={24} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
      <FaLinkedin size={24} />
    </a>
  </motion.div>
)

export default SocialLinks

