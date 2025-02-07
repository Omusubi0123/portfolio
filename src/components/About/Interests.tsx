import type React from "react"
import { motion } from "framer-motion"
import { SiHuggingface, SiFastapi, SiRobotframework } from "react-icons/si"

const Interest: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
        {icon}
        <span>{name}</span>
    </div>
)

const Interests: React.FC = () => (
    <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
    >
        <Interest icon={<SiHuggingface />} name="AI Engineer" />
        <Interest icon={<SiFastapi />} name="Backend Engineer" />
        <Interest icon={<SiRobotframework />} name="Research & Development" />
    </motion.div>
)

export default Interests

