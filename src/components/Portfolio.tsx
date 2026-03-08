'use client'

import { motion } from 'framer-motion'
import { FolderPlus } from 'lucide-react'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Portfolio / Reference
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[hsl(var(--muted))] bg-[hsl(var(--muted))]/20"
        >
          <FolderPlus className="mb-4 h-16 w-16 text-[hsl(var(--muted-foreground))]" strokeWidth={1} />
          <p className="text-lg font-medium text-[hsl(var(--muted-foreground))]">
            Připravuji ukázky projektů
          </p>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]/80">
            Brzy budou k dispozici reference z webových projektů a e-shopů.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
