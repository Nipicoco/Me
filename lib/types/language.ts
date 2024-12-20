export type Language = 'en' | 'es'

export interface JourneySection {
  id: number
  title: string
  subtitle: string
  year: string
  description: string
  highlights: string[]
  skills: string[]
  stats: {
    label: string
    value: string
  }[]
}

export interface Translations {
  hero: {
    subtitle: string
    location: string
    age: string
    languages: string
  }
  skills: {
    title: string
    frontend: string
    backend: string
    tools: string
  }
  projects: {
    title: string
    viewProject: string
  }
  contact: {
    title: string
    email: string
  }
  achievements: {
    title: string
  }
  journey: {
    title: string
    sections: JourneySection[]
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      subtitle: "Full Stack Developer based in Chile",
      location: "Chile",
      age: "years old",
      languages: "English & Spanish"
    },
    skills: {
      title: "Technical Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & DevOps"
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project"
    },
    contact: {
      title: "Get in Touch",
      email: "your.email@example.com"
    },
    achievements: {
      title: "Achievements & Activities"
    },
    journey: {
      title: "Journey So Far",
      sections: [
        {
          id: 1,
          title: "Senior Full Stack Developer",
          subtitle: "Leading Development & Innovation",
          year: "2024",
          description: "Leading development of high-impact web applications and mentoring team members",
          highlights: [
            "Architected scalable solutions using Next.js and TypeScript",
            "Implemented real-time features with WebSocket",
            "Reduced loading times by 60%",
            "Led team of 5 developers"
          ],
          skills: ["Next.js", "TypeScript", "Supabase", "AWS"],
          stats: [
            { label: "Projects Delivered", value: "12+" },
            { label: "Team Size", value: "5" },
            { label: "Performance Improvement", value: "60%" }
          ]
        },
        {
          id: 2,
          title: "Open Source Contributor",
          subtitle: "Building for the Community",
          year: "2023",
          description: "Active contributor to open-source projects and developer tools",
          highlights: [
            "Created popular npm package with 10k+ downloads",
            "Contributed to Next.js documentation",
            "Built developer productivity tools",
            "Maintained multiple open source libraries"
          ],
          skills: ["React", "Node.js", "TypeScript", "GitHub Actions"],
          stats: [
            { label: "Weekly Downloads", value: "10k+" },
            { label: "GitHub Stars", value: "500+" },
            { label: "Pull Requests", value: "100+" }
          ]
        },
        {
          id: 3,
          title: "Technical Lead",
          subtitle: "Driving Innovation",
          year: "2022",
          description: "Led technical initiatives and mentored junior developers",
          highlights: [
            "Implemented CI/CD pipelines",
            "Developed automated testing framework",
            "Optimized database performance",
            "Conducted technical interviews"
          ],
          skills: ["Docker", "PostgreSQL", "Jest", "GitHub Actions"],
          stats: [
            { label: "Team Growth", value: "200%" },
            { label: "Deploy Time", value: "-70%" },
            { label: "Test Coverage", value: "90%" }
          ]
        },
        {
          id: 4,
          title: "Hackathon Winner",
          subtitle: "Innovation & Recognition",
          year: "2021",
          description: "Won first place in international hackathon with AI-powered solution",
          highlights: [
            "Built AI solution in 48 hours",
            "Led team to victory",
            "Implemented cutting-edge features",
            "Presented to industry experts"
          ],
          skills: ["Python", "OpenAI", "React", "Node.js"],
          stats: [
            { label: "Time Frame", value: "48h" },
            { label: "Teams Competed", value: "50+" },
            { label: "Prize", value: "$10k" }
          ]
        }
      ]
    }
  },
  es: {
    hero: {
      subtitle: "Desarrollador Full Stack basado en Chile",
      location: "Chile",
      age: "años",
      languages: "Inglés y Español"
    },
    skills: {
      title: "Habilidades Técnicas",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas y DevOps"
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto"
    },
    contact: {
      title: "Contacto",
      email: "tu.email@ejemplo.com"
    },
    achievements: {
      title: "Logros y Actividades"
    },
    journey: {
      title: "Mi Trayectoria",
      sections: [
        {
          id: 1,
          title: "Desarrollador Full Stack Senior",
          subtitle: "Liderando Desarrollo e Innovación",
          year: "2024",
          description: "Liderando el desarrollo de aplicaciones web de alto impacto y mentoreando miembros del equipo",
          highlights: [
            "Arquitectura de soluciones escalables con Next.js y TypeScript",
            "Implementación de funciones en tiempo real con WebSocket",
            "Reducción de tiempos de carga en un 60%",
            "Liderazgo de equipo de 5 desarrolladores"
          ],
          skills: ["Next.js", "TypeScript", "Supabase", "AWS"],
          stats: [
            { label: "Proyectos Entregados", value: "12+" },
            { label: "Tamaño del Equipo", value: "5" },
            { label: "Mejora de Rendimiento", value: "60%" }
          ]
        },
        {
          id: 2,
          title: "Contribuidor Open Source",
          subtitle: "Construyendo para la Comunidad",
          year: "2023",
          description: "Contribuidor activo en proyectos de código abierto y herramientas de desarrollo",
          highlights: [
            "Creación de paquete npm popular con 10k+ descargas",
            "Contribución a la documentación de Next.js",
            "Desarrollo de herramientas de productividad",
            "Mantenimiento de múltiples librerías open source"
          ],
          skills: ["React", "Node.js", "TypeScript", "GitHub Actions"],
          stats: [
            { label: "Descargas Semanales", value: "10k+" },
            { label: "Estrellas en GitHub", value: "500+" },
            { label: "Pull Requests", value: "100+" }
          ]
        },
        {
          id: 3,
          title: "Líder Técnico",
          subtitle: "Impulsando la Innovación",
          year: "2022",
          description: "Lideré iniciativas técnicas y mentoría de desarrolladores junior",
          highlights: [
            "Implementación de pipelines CI/CD",
            "Desarrollo de framework de pruebas automatizadas",
            "Optimización de rendimiento de base de datos",
            "Realización de entrevistas técnicas"
          ],
          skills: ["Docker", "PostgreSQL", "Jest", "GitHub Actions"],
          stats: [
            { label: "Crecimiento del Equipo", value: "200%" },
            { label: "Tiempo de Deploy", value: "-70%" },
            { label: "Cobertura de Tests", value: "90%" }
          ]
        },
        {
          id: 4,
          title: "Ganador de Hackathon",
          subtitle: "Innovación y Reconocimiento",
          year: "2021",
          description: "Primer lugar en hackathon internacional con solución basada en IA",
          highlights: [
            "Desarrollo de solución IA en 48 horas",
            "Liderazgo de equipo hacia la victoria",
            "Implementación de funciones innovadoras",
            "Presentación a expertos de la industria"
          ],
          skills: ["Python", "OpenAI", "React", "Node.js"],
          stats: [
            { label: "Tiempo de Desarrollo", value: "48h" },
            { label: "Equipos Competidores", value: "50+" },
            { label: "Premio", value: "$10k" }
          ]
        }
      ]
    }
  }
} 