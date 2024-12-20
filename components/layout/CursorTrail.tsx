import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Point {
  x: number
  y: number
  timestamp: number
}

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([])
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
      
      setPoints((prevPoints) => [
        ...prevPoints.slice(-15),
        { x: ev.clientX, y: ev.clientY, timestamp: Date.now() }
      ])
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  // Clean up old points
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now()
      setPoints(prevPoints => prevPoints.filter(point => now - point.timestamp < 500))
    }, 50)

    return () => clearInterval(cleanup)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Main cursor */}
      <motion.div
        className="w-4 h-4 bg-blue-500 rounded-full fixed mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />

      {/* Cursor trail */}
      <AnimatePresence mode="popLayout">
        {points.map((point, i) => (
          <motion.div
            key={point.timestamp}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: 'fixed',
              left: point.x - 8,
              top: point.y - 8,
              width: '16px',
              height: '16px',
            }}
            className="rounded-full bg-blue-400/30 mix-blend-difference"
          />
        ))}
      </AnimatePresence>
    </div>
  )
} 