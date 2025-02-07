"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Section from "../Section"
import Popup from "./Popup"
import WorkItem from "./WorkItem"
import { works } from "./worksData"
import type { Work } from "./types"

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work)
  }

  const handleClosePopup = () => {
    setSelectedWork(null)
  }

  // Define the animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjust this value to control the delay between each item
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <Section id="works" title="My Works" className="bg-transparent flex justify-center py-8">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {works.map((work) => (
          <motion.div key={work.id} variants={itemVariants}>
            <WorkItem work={work} onClick={() => handleWorkClick(work)} />
          </motion.div>
        ))}
      </motion.div>

      {selectedWork && (
        <Popup
          title={selectedWork.title}
          description={selectedWork.description}
          media={selectedWork.media}
          isVideo={selectedWork.isVideo}
          onClose={handleClosePopup}
          link={selectedWork.link}
          github={selectedWork.github}
          my_skills={selectedWork.my_skills}
          other_skills={selectedWork.other_skills}
          cd_skills={selectedWork.cd_skills}
        />
      )}
    </Section>
  )
}

