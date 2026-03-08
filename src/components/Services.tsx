'use client'

import { motion } from 'framer-motion'
import { Code2, GraduationCap } from 'lucide-react'

const techHeadline = 'Od čistého kódu po konverzní e-shopy'
const techDescription = 'Weby a e-shopy, co nejen vypadají, ale hlavně fungují. Čistý kód, rychlé načítání, UX, který bere zákazníka za ruku.'

const techServices = [
  'Weby na zakázku (Next.js, React)',
  'E-shopy s ohledem na konverze',
  'Responzivní, přístupné rozhraní',
  'Code review & refaktoring',
]

const eduHeadlines = {
  matika: 'Matika bez stresu',
  fyzika: 'Fyzika v souvislostech',
}
const eduDescription = 'ZŠ až VŠ – vysvětluju to tak, aby to sedlo. Ne biflování, ale pochopení.'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <section id="sluzby" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Služby
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[hsl(var(--muted))] bg-[hsl(var(--muted))]/30 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/20">
                <Code2 className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-semibold">Tech</h3>
            </div>
            <p className="mb-4 text-lg font-medium text-[hsl(var(--foreground))]">
              {techHeadline}
            </p>
            <p className="mb-6 text-[hsl(var(--muted-foreground))]">
              {techDescription}
            </p>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {techServices.map((service) => (
                <motion.li key={service} variants={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                  {service}
                </motion.li>
              ))}
            </motion.ul>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
              Next.js, React, TypeScript, Tailwind CSS
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[hsl(var(--muted))] bg-[hsl(var(--muted))]/30 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--gradient-end))]/20">
                <GraduationCap className="h-6 w-6 text-[hsl(var(--gradient-end))]" />
              </div>
              <h3 className="text-xl font-semibold">Edu</h3>
            </div>
            <div className="mb-6 flex flex-wrap gap-x-4 gap-y-1">
              <span className="text-lg font-medium text-[hsl(var(--foreground))]">
                {eduHeadlines.matika}
              </span>
              <span className="text-[hsl(var(--muted-foreground))]">·</span>
              <span className="text-lg font-medium text-[hsl(var(--foreground))]">
                {eduHeadlines.fyzika}
              </span>
            </div>
            <p className="mb-6 text-[hsl(var(--muted-foreground))]">
              {eduDescription}
            </p>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {['ZŠ až VŠ – individuální přístup', 'Maturity, přijímačky, reparáty', 'Matematika i fyzika', 'Online i prezenčně'].map((service) => (
                <motion.li key={service} variants={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--gradient-end))]" />
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
