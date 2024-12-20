import { motion } from "framer-motion"

interface BackgroundProps {
  opacity: any // Using any for the MotionValue type for simplicity
}

export function Background({ opacity }: BackgroundProps) {
  return (
    <div className="fixed inset-0 z-0">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-800"
        style={{ opacity }}
      />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-xl animate-blob animation-delay-4000" />
      </div>
    </div>
  )
} 