import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { projects } from "@/lib/data/projects"
import { Language } from "@/lib/types/language"

interface ProjectsProps {
  language: Language
  t: any
}

export function Projects({ language, t }: ProjectsProps) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div 
        className="w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="h2 text-center text-zinc-200 mb-16">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="glass-card overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-zinc-200">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-zinc-700 text-zinc-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-zinc-400 hover:text-zinc-200 group-hover:translate-x-1 transition-transform"
                  >
                    {t.projects.viewProject} →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
} 