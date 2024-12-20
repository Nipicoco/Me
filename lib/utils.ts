import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

export const slideIn = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Date formatting utility
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

// Calculate age utility
export function calculateAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}

// Language utilities
export const languages = {
  en: "English",
  es: "Español"
} as const

export type Language = keyof typeof languages

// Theme utilities
export type Theme = "light" | "dark" | "system"

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "system"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

// Blur effect utility
export function applyGaussianBlur(element: HTMLElement, intensity: number = 10) {
  element.style.filter = `blur(${intensity}px)`
  return () => {
    element.style.filter = "none"
  }
}

export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  duration: 1
}

export const fadeTransition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
}

export const slideTransition = {
  duration: 0.8,
  ease: [0.43, 0.13, 0.23, 0.96]
}
