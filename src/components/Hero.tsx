'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-[hsl(var(--accent))]/10 via-transparent to-transparent opacity-60"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-[hsl(var(--accent))]"
        >
          Front-end developer & lektorka
        </motion.p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Christina Rejlkova
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-[hsl(var(--muted-foreground))] sm:text-xl"
        >
          Miluju logiku, stavění věcí a když to funguje. Kód, matika i fyzika – 
          všude tam vidím elegantní řešení.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#sluzby"
            className="rounded-full bg-[hsl(var(--accent))] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Co nabízím
          </a>
          <a
            href="#kontakt"
            className="rounded-full border border-[hsl(var(--foreground))]/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-[hsl(var(--muted))]"
          >
            Kontakt
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
