"use client"

import { useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { Language, translations } from "@/lib/types/language"

// Layout Components
import { Background } from "@/components/layout/Background"
import { Navigation } from "@/components/layout/Navigation"
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher"
import { ProgressIndicator } from "@/components/layout/ProgressIndicator"

// Section Components
import { Hero } from "@/components/sections/Hero"
import { Journey } from "@/components/sections/Journey"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

const TOTAL_SECTIONS = 4

export default function Home() {
  // Language state
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]
  
  // Scroll and animation states
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.3])

  // Section refs
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    journey: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  }

  // Active section state
  const [activeSection, setActiveSection] = useState(0)

  // Navigation handler
  const handleSectionChange = (index: number) => {
    const sections = [
      sectionRefs.hero,
      sectionRefs.journey,
      sectionRefs.projects,
      sectionRefs.contact
    ]
    sections[index].current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    })
    setActiveSection(index)
  }

  return (
    <main className="min-h-screen bg-zinc-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <div className="relative">
          {/* Layout Components */}
          <Background opacity={opacity} />
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange} 
          />
          <LanguageSwitcher onLanguageChange={setLanguage} />
          <ProgressIndicator 
            currentSection={activeSection} 
            totalSections={TOTAL_SECTIONS} 
          />

          {/* Main Content */}
          <div className="relative z-10">
            <div ref={sectionRefs.hero}>
              <Hero language={language} t={t} />
            </div>
            <div ref={sectionRefs.journey}>
              <Journey language={language} />
            </div>
            <div ref={sectionRefs.projects}>
              <Projects language={language} t={t} />
            </div>
            <div ref={sectionRefs.contact}>
              <Contact language={language} t={t} />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  )
}
