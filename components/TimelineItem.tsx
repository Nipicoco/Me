import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Terminal, Code2, Users, Trophy, Play, Pause } from 'lucide-react'
import { Language, translations } from "@/lib/types/language"

const icons = {
  Terminal: <Terminal className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />
}

interface TimelineItemProps {
  language: Language
}

export function TimelineItem({ language }: TimelineItemProps) {
  const t = translations[language]
  const journeySections = t.journey.sections

  const [currentSection, setCurrentSection] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null)
  const lastProgressRef = useRef(0)
  const containerRef = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(containerRef, {
    margin: "-100px 0px -100px 0px",
    amount: 0.3
  })
  const isCardInView = useInView(cardRef, { once: true })

  const startProgressBar = (startFrom: number = lastProgressRef.current) => {
    if (progressInterval.current) clearInterval(progressInterval.current)
    
    if (startFrom === 0) {
      setProgress(0)
      lastProgressRef.current = 0
    } else {
      setProgress(startFrom)
    }
    
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 0.3
        if (newProgress >= 100) {
          const nextIndex = (currentSection + 1) % journeySections.length
          setCurrentSection(nextIndex)
          lastProgressRef.current = 0
          return 0
        }
        lastProgressRef.current = newProgress
        return newProgress
      })
    }, 30)
  }

  const toggleAutoplay = () => {
    setIsAutoplayPaused(prev => !prev)
  }

  const goToSection = (index: number) => {
    if (index === currentSection) return
    
    setCurrentSection(index)
    lastProgressRef.current = 0
    setProgress(0)
    
    if (!isAutoplayPaused && isInView) {
      startProgressBar(0)
    }
  }

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current)
      if (autoplayInterval.current) clearInterval(autoplayInterval.current)
    }
  }, [])

  useEffect(() => {
    lastProgressRef.current = progress
  }, [progress])

  useEffect(() => {
    if (!isInView || isAutoplayPaused) {
      if (progressInterval.current) clearInterval(progressInterval.current)
      if (autoplayInterval.current) clearInterval(autoplayInterval.current)
    } else {
      startProgressBar(lastProgressRef.current)
      
      autoplayInterval.current = setInterval(() => {
        const nextIndex = (currentSection + 1) % journeySections.length
        setCurrentSection(nextIndex)
        lastProgressRef.current = 0
        setProgress(0)
      }, 5000)
    }

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current)
      if (autoplayInterval.current) clearInterval(autoplayInterval.current)
    }
  }, [currentSection, isAutoplayPaused, isInView, journeySections.length, progress])

  return (
    <div 
      ref={containerRef}
      className="min-h-[80vh] flex items-start justify-center py-20"
    >
      <div className="w-full max-w-5xl">
        {/* Timeline Navigation */}
        <div className="mb-8 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-zinc-800 -translate-y-1/2" />
          <div className="relative flex justify-between">
            {journeySections.map((section, idx) => (
              <motion.div
                key={idx}
                className="relative group cursor-pointer"
                onClick={() => goToSection(idx)}
                whileHover="hover"
              >
                {/* Connecting Line */}
                <motion.div
                  className={`absolute top-1/2 left-1/2 h-0.5 -translate-y-1/2 origin-left
                    ${idx === currentSection ? 'bg-blue-500' : 'bg-zinc-700'}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: idx === currentSection ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Year Marker */}
                <motion.div
                  className={`relative flex flex-col items-center transition-transform
                    ${idx === currentSection ? 'scale-110' : 'scale-100'}`}
                >
                  <motion.div
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-300
                      ${idx === currentSection 
                        ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/20' 
                        : 'bg-zinc-800 border-zinc-700 group-hover:border-zinc-600'}`}
                    variants={{
                      hover: { scale: 1.2 }
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-10 bg-zinc-800/90 backdrop-blur-sm rounded-lg px-4 py-2
                      opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
                    initial={{ y: 10 }}
                    variants={{
                      hover: { y: 0 }
                    }}
                  >
                    <span className="text-base font-semibold bg-gradient-to-r from-white to-zinc-200 bg-clip-text text-transparent">
                      {section.year}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Journey Card */}
        <motion.div
          ref={cardRef}
          className="glass-card relative overflow-hidden rounded-xl border border-zinc-800/50
            shadow-2xl shadow-zinc-900/20 backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.23, 1, 0.32, 1]
          }}
          style={{ perspective: '1000px' }}
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-800/50 backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500"
              style={{ 
                width: `${progress}%`,
                transition: 'width 0.025s linear',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="space-y-8"
              >
                {/* Header with improved layout */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div
                        className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20
                          shadow-lg shadow-blue-500/5"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 0.5 }}
                      >
                        {icons[journeySections[currentSection].id === 1 ? 'Terminal' : 
                               journeySections[currentSection].id === 2 ? 'Code2' :
                               journeySections[currentSection].id === 3 ? 'Users' : 'Trophy']}
                      </motion.div>
                      <Badge 
                        variant="secondary" 
                        className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-base
                          shadow-lg shadow-blue-500/5 hover:bg-blue-500/20 transition-all duration-300"
                      >
                        {journeySections[currentSection].year}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-white via-white to-zinc-200 
                      bg-clip-text leading-tight mb-2">
                      {journeySections[currentSection].title}
                    </h3>
                    <p className="text-zinc-400 text-lg">
                      {journeySections[currentSection].subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {journeySections[currentSection].description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {journeySections[currentSection].stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50
                        backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300
                        hover:border-zinc-600/50 group"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r 
                        from-blue-400 to-blue-500 bg-clip-text group-hover:to-blue-400
                        transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-zinc-400 mt-1 group-hover:text-zinc-300
                        transition-all duration-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {journeySections[currentSection].highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 text-zinc-400 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-blue-500 mt-1.5 transition-all duration-300
                        group-hover:text-blue-400 transform group-hover:scale-110">◆</span>
                      <span className="group-hover:text-zinc-300 transition-all duration-300">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-700/30">
                  {journeySections[currentSection].skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="border-zinc-700/50 text-zinc-300 hover:border-blue-500/50 hover:text-blue-400
                          transition-all duration-300 px-3 py-1 text-sm backdrop-blur-sm
                          hover:bg-blue-500/5"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Autoplay toggle button */}
          <motion.button
            className={`absolute bottom-6 right-6 p-3 rounded-xl 
              ${isAutoplayPaused || !isInView
                ? 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800/70' 
                : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'} 
              backdrop-blur-sm transition-all duration-300 border border-zinc-700/50
              hover:border-zinc-600/50 shadow-lg`}
            onClick={toggleAutoplay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoplayPaused || !isInView ? (
              <Play className="h-5 w-5" />
            ) : (
              <Pause className="h-5 w-5" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}