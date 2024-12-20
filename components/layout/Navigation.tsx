import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: number
  onSectionChange: (index: number) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
      {[0, 1, 2, 3].map((index) => (
        <motion.button
          key={index}
          onClick={() => onSectionChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300`}
          initial={false}
          animate={{
            scale: activeSection === index ? 1.2 : 1,
            backgroundColor: activeSection === index 
              ? 'rgb(96, 165, 250)' 
              : 'rgb(82, 82, 91)'
          }}
          whileHover={{
            scale: 1.2,
            backgroundColor: 'rgb(96, 165, 250)'
          }}
        />
      ))}
    </div>
  )
} 