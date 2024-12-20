import { motion } from "framer-motion"
import { Globe, Calendar, Code2 } from "lucide-react"
import { calculateAge } from "@/lib/utils"
import { birthDate } from "@/lib/constants"
import { Language } from "@/lib/types/language"

interface HeroProps {
  language: Language
  t: any
}

const age = calculateAge(birthDate)

export function Hero({ language, t }: HeroProps) {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center p-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-center space-y-6"
        layout
      >
        <motion.h1 
          layout
          initial={{ fontSize: "15vw", y: 0 }}
          animate={{ 
            fontSize: "4rem",
            y: -50,
            transition: { delay: 0.2, duration: 0.8 }
          }}
          className="monospace gradient-text font-bold tracking-tight"
        >
          {"<Json />"}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1,
            height: "auto",
            transition: { delay: 0.8, duration: 0.5 }
          }}
        >
          <motion.p 
            className="text-xl md:text-2xl text-zinc-400 max-w-[600px] mx-auto monospace"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-zinc-400 mt-6"
          >
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>{t.hero.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{age} {t.hero.age}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              <span>{t.hero.languages}</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
} 