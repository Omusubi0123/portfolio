import type React from "react"
import { useState, useEffect, useRef } from "react"
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
        comment: "たぶん一番書いてます",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        comment: "高専５年間はこれがメインです",
      },
      {
        name: "Transformers",
        icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        comment: "モデル作ったりいじったりするのに使ってます",
      },
      {
        name: "PyTorch",
        icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
        comment: "Deep Learning基礎講座や大学の実験，インターンで使いました",
      },
    ],
  },
  {
    title: "Backend + DB",
    skills: [
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        comment: "ハッカソンでbackend開発するときは大体これ使います",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
        comment: "Life Dialogをの継続開発でFirestoreからPostgresに移行しました 他のハッカソンでも使いました",
      },
      {
        name: "Firestore",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
        comment: "ハッカソン期間のLife Dialogの開発に使いました",
      },
    ],
  },
  {
    title: "Infra + Network",
    skills: [
      {
        name: "Cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
        comment: "自宅サーバーでデプロイする時にお世話になってます",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
        comment: "ハッカソンやインターンで結構使ってます かなり好きです",
      },
      {
        name: "GCP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        comment: "backendサービスをGCPでデプロイしました",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        comment: "S3やSagemakerを少し触りました まだ人に教えられるレベルではないです",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg",
        comment: "Worksのデプロイは基本的にvercelでやってます",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        comment: "ネットレンドの開発とこのサイトで使いました",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        comment: "ネットレンドの開発とこのサイトで使いました",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        comment: "ネットレンドの開発で使いました 結構頑張りました",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        comment: "このサイトで使いました まだまだ勉強中です",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        comment: "このサイトで使いました まだまだ勉強中です",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
        comment: "このサイトで使いました まだまだ勉強中です",
      },
    ],
  },
]

const SkillItem: React.FC<{
  skill: Skill
  index: number
  isMobile: boolean
  isActive: boolean
  onActivate: () => void
}> = ({ skill, index, isMobile, isActive, onActivate }) => {
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile && isActive) {
      const handleScroll = () => {
        if (itemRef.current) {
          const rect = itemRef.current.getBoundingClientRect()
          if (rect.top < 0 || rect.bottom > window.innerHeight) {
            onActivate()
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile, isActive, onActivate])

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center justify-center space-y-2 p-4 bg-gray-1000 rounded-lg shadow-md transition-transform hover:scale-105"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && onActivate()}
    >
      <img
        src={skill.icon || "/placeholder.svg"}
        alt={skill.name}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />
      <span className="text-sm sm:text-base shine-gold-text md:text-lg font-medium text-center">{skill.name}</span>
      <AnimatePresence>
        {((!isMobile && isHovered) || (isMobile && isActive)) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full transform -translate-x-1/2 mb-2 p-2 bg-black text-sm rounded-md shadow-lg z-10 w-48 text-center"
          >
            <p className="text-xs sm:text-sm shine-silver-text">{skill.comment}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const SkillCategory: React.FC<{
  category: SkillCategory
  index: number
  isMobile: boolean
  activeSkill: string | null
  setActiveSkill: (skill: string | null) => void
}> = ({ category, index, isMobile, activeSkill, setActiveSkill }) => {
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
          <SkillItem
            key={i}
            skill={skill}
            index={i}
            isMobile={isMobile}
            isActive={activeSkill === skill.name}
            onActivate={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (skillsRef.current && !skillsRef.current.contains(e.target as Node)) {
          setActiveSkill(null)
        }
      }
      document.addEventListener("click", handleOutsideClick)
      return () => document.removeEventListener("click", handleOutsideClick)
    }
  }, [isMobile])

  return (
    <Section
      id="skills"
      title="Skills"
      className="bg-transparent flex justify-center py-8"
      titleColor="shine-gold-text"
    >
      <div ref={skillsRef} className="w-full max-w-5xl px-4">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            category={category}
            index={index}
            isMobile={isMobile}
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
          />
        ))}
      </div>
    </Section>
  )
}
