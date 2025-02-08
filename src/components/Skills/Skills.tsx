import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Section from "../Section"

interface Skill {
  name: string
  icon: string
  comment: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Main",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        comment: "My go-to language for AI and data science projects",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        comment: "Proficient in low-level programming and system optimization",
      },
      {
        name: "Transformers",
        icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        comment: "Experienced in building and fine-tuning state-of-the-art NLP models",
      },
      {
        name: "PyTorch",
        icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
        comment: "Skilled in deep learning model development and deployment",
      },
    ],
  },
  {
    title: "Backend + DB",
    skills: [
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        comment: "Building high-performance APIs with ease",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
        comment: "Proficient in complex database design and optimization",
      },
      {
        name: "Firestore",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
        comment: "Experienced in real-time database management",
      },
    ],
  },
  {
    title: "Infra + Network",
    skills: [
      {
        name: "Cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
        comment: "Implementing robust security and performance solutions",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
        comment: "Containerizing applications for consistent deployment",
      },
      {
        name: "GCP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        comment: "Leveraging cloud services for scalable solutions",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        comment: "Architecting and deploying cloud-native applications",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg",
        comment: "Rapid deployment and hosting for web projects",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        comment: "Crafting semantic and accessible web structures",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        comment: "Styling with modern CSS techniques and frameworks",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        comment: "Building interactive and dynamic web applications",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        comment: "Enhancing code quality with static typing",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        comment: "Creating efficient and reusable UI components",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
        comment: "Lightning-fast build tool for modern web development",
      },
    ],
  },
]

const SkillItem: React.FC<{ skill: Skill; index: number; isMobile: boolean }> = ({ skill, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center justify-center space-y-2 p-4 bg-gray-1000 rounded-lg shadow-md transition-transform hover:scale-105"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered(!isHovered)}
    >
      <img
        src={skill.icon || "/placeholder.svg"}
        alt={skill.name}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />
      <span className="text-sm sm:text-base shine-gold-text md:text-lg font-medium text-center">{skill.name}</span>
      <AnimatePresence>
        {isHovered && (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black shine-gold-text text-sm rounded-md shadow-lg z-10 w-48 text-center"
            >
            <p className="text-xs sm:text-sm">{skill.comment}</p>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const SkillCategory: React.FC<{ category: SkillCategory; index: number; isMobile: boolean }> = ({
  category,
  index,
  isMobile,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-8"
    >
      <h2 className="text-xl sm:text-2xl font-semibold shine-gold-text mb-4 border-b-2 border-gray-300 pb-2">
        {category.title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 shine-gold-text font-bold">
        {category.skills.map((skill, i) => (
          <SkillItem key={i} skill={skill} index={i} isMobile={isMobile} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <Section
      id="skills"
      title="Skills"
      className="bg-transparent flex justify-center py-8"
      titleColor="shine-gold-text"
    >
      <div className="w-full max-w-5xl px-4">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} isMobile={isMobile} />
        ))}
      </div>
    </Section>
  )
}

