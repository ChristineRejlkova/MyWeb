'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function fib(n: number): number {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

export function FibonacciViz() {
  const [n, setN] = useState(6)
  const sequence = Array.from({ length: Math.min(n + 1, 12) }, (_, i) => fib(i))

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <label className="text-xs text-[hsl(var(--muted-foreground))]">n =</label>
        <input
          type="range"
          min="0"
          max="10"
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="flex-1 accent-[hsl(var(--accent))]"
        />
        <span className="min-w-[1.5rem] text-xs font-medium">{n}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <AnimatePresence mode="popLayout">
          {sequence.map((val, i) => (
            <motion.div
              key={`${n}-${i}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: i * 0.05 }}
              className="flex h-8 min-w-[2rem] items-center justify-center rounded bg-[hsl(var(--accent))]/20 px-2 font-mono text-xs font-medium text-[hsl(var(--accent))]"
            >
              {val}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <p className="text-[10px] text-[hsl(var(--muted-foreground))]">
        F(n) = F(n−1) + F(n−2)
      </p>
    </div>
  )
}
