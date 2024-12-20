"use client"

import { motion } from "framer-motion"
import { calculateAge } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  Globe, 
  Calendar,
  Mail,
  Github,
  Linkedin,
  Twitter
} from "lucide-react"

const birthDate = new Date('2002-01-01')
const age = calculateAge(birthDate)

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Git"
]

export default function Portfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 md:p-8 space-y-8 max-w-6xl mx-auto"
    >
      <section className="space-y-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-2"
        >
          <h1 className="h1 monospace gradient-text">Json</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Chile</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{age} years old</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            <span>English & Spanish</span>
          </div>
        </motion.div>
      </section>

      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="h2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="hover-card">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="h2">Contact</h2>
        <div className="flex flex-wrap gap-4">
          <Card className="hover-card">
            <CardContent className="flex items-center gap-2 p-4">
              <Mail className="h-4 w-4" />
              <span>your.email@example.com</span>
            </CardContent>
          </Card>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="hover-card">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-card">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-card">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
} 