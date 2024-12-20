import { motion } from "framer-motion"

interface ProgressIndicatorProps {
  currentSection: number
  totalSections: number
}

export function ProgressIndicator({ currentSection, totalSections }: ProgressIndicatorProps) {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 text-zinc-400"
      initial={false}
      animate={{ opacity: 1 }}
    >
      <span className="text-sm monospace">
        {(currentSection + 1).toString().padStart(2, '0')} / {totalSections.toString().padStart(2, '0')}
      </span>
    </motion.div>
  )
} 