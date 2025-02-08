import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Section from "../Section"

interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Main",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
    ],
  },
  {
    title: "Backend + DB",
    skills: [
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"},
      { name: "Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"},
    ],
  },
  {
    title: "Infra + Network",
    skills: [
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg"},
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg"},
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    ],
  },
]

const SkillItem: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center space-y-2 p-4 bg-gray-1000 rounded-lg shadow-md transition-transform hover:scale-105"
    >
      <img
        src={skill.icon || "/placeholder.svg"}
        alt={skill.name}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />
      <span className="text-sm sm:text-base md:text-lg font-medium text-center">{skill.name}</span>
    </motion.div>
  )
}

const SkillCategory: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
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
      <h2 className="text-xl sm:text-2xl font-semibold ios-white mb-4 border-b-2 border-gray-300 pb-2">
        {category.title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {category.skills.map((skill, i) => (
          <SkillItem key={i} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" className="bg-transparent flex justify-center py-8">
      <div className="w-full max-w-5xl px-4">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </Section>
  )
}

