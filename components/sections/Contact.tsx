import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, MessageSquare, ExternalLink } from "lucide-react"
import { Language } from "@/lib/types/language"
import Image from 'next/image'

interface ContactProps {
  language: Language
  t: any
}

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
  color: string
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/yourusername",
    color: "hover:bg-zinc-700"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    color: "hover:bg-blue-600"
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
    href: "https://twitter.com/yourusername",
    color: "hover:bg-sky-500"
  }
]

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications with modern technologies",
    price: "Contact me for custom solutions"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and functional user interfaces",
    price: "Let's discuss your design needs"
  },
  {
    title: "Consulting",
    description: "Technical consulting and architecture design",
    price: "Reach out for personalized consulting"
  }
]

export function Contact({ language, t }: ContactProps) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
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
        <h2 className="h2 text-center text-zinc-200 mb-16">{t.contact.title}</h2>
        
        {/* Discord-like Profile Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-zinc-900/50 backdrop-blur-xl border border-zinc-800">
            {/* Banner */}
            <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
              {/* Raining emojis background */}
              <div className="absolute inset-0 pointer-events-none select-none">
                {[...Array(15)].map((_, i) => (
                  <span 
                    key={i}
                    className="absolute text-xl animate-rain opacity-50"
                    style={{ 
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  >
                    {['💀', '🔥', '👾', '🚀', '💻', '⚡️'][Math.floor(Math.random() * 6)]}
                  </span>
                ))}
              </div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
                <div 
                  className="text-[1rem] sm:text-[1.25rem] md:text-[1.8rem] font-bold text-white 
                    mix-blend-overlay transform hover:scale-105 transition-transform
                    font-papyrus tracking-[0.2em] uppercase relative group text-center
                    animate-[wiggle_1s_ease-in-out_infinite] whitespace-nowrap"
                  style={{
                    textShadow: `
                      2px 2px 0 #ff00ff,
                      -2px -2px 0 #00ffff,
                      2px -2px 0 #ff00ff,
                      -2px 2px 0 #00ffff,
                      0 2px 0 #ff00ff,
                      2px 0 0 #00ffff,
                      0 -2px 0 #ff00ff,
                      -2px 0 0 #00ffff,
                      4px 4px 10px rgba(255,0,255,0.5),
                      -4px -4px 10px rgba(0,255,255,0.5)
                    `,
                    transform: `rotate(-6deg) perspective(500px) rotateX(10deg)`,
                    WebkitTextStroke: '0.5px black'
                  }}
                >
                  <span className="inline-block hover:animate-spin transition-all duration-300">F</span>
                  <span className="inline-block hover:animate-bounce">r</span>
                  <span className="inline-block hover:animate-ping">e</span>
                  <span className="inline-block hover:animate-spin">a</span>
                  <span className="inline-block hover:animate-bounce">k</span>
                  <span className="inline-block hover:animate-ping">y</span>
                  <span className="inline-block">&nbsp;</span>
                  <span className="inline-block hover:animate-spin">P</span>
                  <span className="inline-block hover:animate-bounce">r</span>
                  <span className="inline-block hover:animate-ping">o</span>
                  <span className="inline-block hover:animate-spin">g</span>
                  <span className="inline-block hover:animate-bounce">r</span>
                  <span className="inline-block hover:animate-ping">a</span>
                  <span className="inline-block hover:animate-spin">m</span>
                  <span className="inline-block hover:animate-bounce">m</span>
                  <span className="inline-block hover:animate-ping">e</span>
                  <span className="inline-block hover:animate-spin">r</span>
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="px-8 pb-8">
              {/* Avatar */}
              <div className="relative -mt-16 mb-4">
                <div className="w-32 h-32 rounded-full border-4 border-zinc-900 overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-200">Json</h3>
                  <p className="text-zinc-400">Full Stack Developer & UI Designer</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => window.open('https://discord.com/users/yourid', '_blank')}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Add Friend
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = 'mailto:your@email.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </Button>
                </div>
              </div>

              {/* About */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-zinc-200 mb-2">About Me</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Passionate about creating beautiful and functional web applications. 
                  Specialized in React, Next.js, and modern web technologies. 
                  Always excited to take on new challenges and collaborate on interesting projects.
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full justify-start ${link.color}`}
                    onClick={() => window.open(link.href, '_blank')}
                  >
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                    <ExternalLink className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                ))}
              </div>

              {/* Services/Commission Info */}
              <div>
                <h4 className="text-lg font-semibold text-zinc-200 mb-4">Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600/50 transition-colors"
                    >
                      <h5 className="font-medium text-zinc-200 mb-2">{service.title}</h5>
                      <p className="text-sm text-zinc-400 mb-3">{service.description}</p>
                      <p className="text-sm font-medium text-blue-400">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
} 