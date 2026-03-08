'use client'

import { motion } from 'framer-motion'
import { Sparkles, Cpu, Ruler, Zap } from 'lucide-react'

const points = [
  {
    icon: Cpu,
    title: 'Analytické myšlení z fyziky',
    text: 'Fyzika mě naučila rozkládat problémy na menší díly a nacházet elegantní řešení. V kódu i při doučování.',
  },
  {
    icon: Ruler,
    title: 'Preciznost ve front-endu',
    text: 'Každý pixel, každá mezera – když už to dělám, ať to sedí. Čitelný kód a přístupné rozhraní.',
  },
  {
    icon: Zap,
    title: 'Logika + tvořivost',
    text: 'Miluju strukturu i stavění věcí od nuly. Kód, který funguje. Učivo, které dává smysl.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function ProcJa() {
  return (
    <section id="proc-ja" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <Sparkles className="h-8 w-8 text-[hsl(var(--accent))]" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Proč já?
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
            Holka v IT, co miluje logiku, matiku a stavění věcí. Analytické myšlení z fyziky
            + precizní front-end = weby, co fungují, a doučování, co dává smysl.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {points.map((point) => (
            <motion.div
              key={point.title}
              variants={item}
              className="flex gap-6 rounded-2xl border border-[hsl(var(--muted))] bg-[hsl(var(--muted))]/20 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/15">
                <point.icon className="h-6 w-6 text-[hsl(var(--accent))]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))]">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
