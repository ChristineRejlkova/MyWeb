'use client'

import { motion } from 'framer-motion'
import {
  FileCode,
  Boxes,
  Palette,
  GitBranch,
  Type,
  Layers,
  Layout,
  Smartphone,
} from 'lucide-react'

const skills = [
  { name: 'TypeScript', icon: Type },
  { name: 'React', icon: Boxes },
  { name: 'Next.js', icon: FileCode },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Framer Motion', icon: Layout },
  { name: 'Git', icon: GitBranch },
  { name: 'Responsive Design', icon: Smartphone },
  { name: 'Component Design', icon: Layers },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
}

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-[hsl(var(--muted-foreground))]"
        >
          Front-end zaměření
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="flex flex-col items-center gap-3 rounded-xl border border-[hsl(var(--muted))] bg-[hsl(var(--muted))]/20 p-6 transition-colors hover:border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))]/5"
            >
              <skill.icon className="h-8 w-8 text-[hsl(var(--accent))]" strokeWidth={1.5} />
              <span className="text-center text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
