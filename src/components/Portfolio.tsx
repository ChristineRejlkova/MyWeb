'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  FileCode,
  Layout,
  GitBranch,
  Boxes,
  Sparkles,
  Cpu,
  Braces,
} from 'lucide-react'

const techIcons = [
  { Icon: Code2, label: 'Code' },
  { Icon: Braces, label: 'TS' },
  { Icon: FileCode, label: 'File' },
  { Icon: Layout, label: 'Layout' },
  { Icon: GitBranch, label: 'Git' },
  { Icon: Boxes, label: 'Components' },
  { Icon: Cpu, label: 'Engine' },
  { Icon: Sparkles, label: 'Motion' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[hsl(var(--foreground))] sm:text-3xl">
            Portfolio
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {/* 1. Recent Work – device mockups */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col rounded-2xl border border-[hsl(var(--foreground))]/15 bg-[hsl(var(--muted))]/50 p-6 sm:col-span-2"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-[hsl(var(--foreground))]/80">
              Recent Work
            </p>
            <div className="flex flex-1 flex-wrap items-end justify-center gap-6 sm:justify-start sm:gap-8">
              {/* MacBook mockup */}
              <div className="flex flex-col items-center">
                <div className="h-2 w-14 rounded-t bg-[hsl(var(--foreground))]/20" />
                <div className="w-[220px] overflow-hidden rounded-b-lg border border-[hsl(var(--foreground))]/20 border-t-0 bg-[hsl(var(--background))] shadow-lg">
                  <div className="aspect-video w-full bg-[hsl(var(--muted))]/50" />
                  <div className="space-y-2 p-3">
                    <div className="h-2 w-3/4 rounded bg-[hsl(var(--muted))]" />
                    <div className="h-2 w-full rounded bg-[hsl(var(--muted))]/80" />
                    <div className="h-2 w-5/6 rounded bg-[hsl(var(--muted))]/60" />
                  </div>
                </div>
              </div>
              {/* iPhone mockup */}
              <div className="flex flex-col items-center">
                <div className="h-[280px] w-[120px] overflow-hidden rounded-[2rem] border-4 border-[hsl(var(--foreground))]/20 bg-[hsl(var(--foreground))]/10 shadow-xl">
                  <div className="mt-8 h-full w-full overflow-hidden rounded-[1.25rem] bg-[hsl(var(--background))] px-2 pb-2">
                    <div className="mt-4 h-3 w-8 rounded-full bg-[hsl(var(--muted))]" />
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-full rounded bg-[hsl(var(--muted))]" />
                      <div className="h-2 w-full rounded bg-[hsl(var(--muted))]/80" />
                      <div className="h-2 w-4/5 rounded bg-[hsl(var(--muted))]/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Tech Stack – ikony s jemným pohybem */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col rounded-2xl border border-[hsl(var(--foreground))]/15 bg-[hsl(var(--muted))]/50 p-6"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-[hsl(var(--foreground))]/80">
              Tech Stack
            </p>
            <div className="grid grid-cols-4 gap-4">
              {techIcons.map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                  whileHover={{ y: -2 }}
                  animate={{
                    y: [0, -2, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: i * 0.2,
                    },
                  }}
                >
                  <Icon
                    className="h-6 w-6 text-[hsl(var(--foreground))]"
                    strokeWidth={1.5}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3. The Logic – kód */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="sm:col-span-3"
          >
            <div className="rounded-2xl border border-[hsl(var(--foreground))]/15 bg-[hsl(var(--muted))]/50 p-6 sm:p-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[hsl(var(--foreground))]/80">
                The Logic
              </p>
              <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]">
                <code>
                  <span className="text-[hsl(var(--muted-foreground))]">{'// DPH z ceny s DPH'}</span>
                  {'\n'}
                  <span className="text-[hsl(var(--muted-foreground))]">function getVatFromGross</span>
                  <span className="text-[hsl(var(--foreground))]">{'<'}</span>
                  <span className="text-[hsl(var(--foreground))]">{'T extends number'}</span>
                  <span className="text-[hsl(var(--foreground))]">{'>'}</span>
                  <span className="text-[hsl(var(--foreground))]">{'('}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-[hsl(var(--muted-foreground))]">gross</span>
                  <span className="text-[hsl(var(--foreground))]">: T, </span>
                  <span className="text-[hsl(var(--muted-foreground))]">rate</span>
                  <span className="text-[hsl(var(--foreground))]"> = 0.21</span>
                  {'\n'}
                  <span className="text-[hsl(var(--foreground))]">): number {'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-[hsl(var(--muted-foreground))]">return</span>
                  <span className="text-[hsl(var(--foreground))]"> Number(</span>
                  {'\n'}
                  {'    '}
                  <span className="text-[hsl(var(--foreground))]">(gross - gross / (1 + rate)).toFixed(2)</span>
                  {'\n'}
                  {'  '}
                  <span className="text-[hsl(var(--foreground))]">);</span>
                  {'\n'}
                  <span className="text-[hsl(var(--foreground))]">{'}'}</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
