import { motion } from "framer-motion"
import { TimelineItem } from "@/components/TimelineItem"
import { Language } from "@/lib/types/language"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface JourneyProps {
  language: Language
}

export function Journey({ language }: JourneyProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    margin: "-100px",
    amount: 0.3,
    once: false // This makes it animate every time it comes into view
  })

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen relative py-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container relative mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-zinc-200 mb-20 
            hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
            hover:from-blue-400 hover:to-purple-500 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Journey So Far
        </motion.h2>

        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TimelineItem language={language} />
        </motion.div>
      </div>
    </motion.section>
  )
} 