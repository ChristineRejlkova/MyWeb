'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const C_PATH = 'M20 9c-5 0-9 3.5-9 7s4 7 9 7'

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Domů"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <motion.path
          d={C_PATH}
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0.001 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="group-hover:stroke-white transition-colors duration-200"
        />
        <motion.circle
          cx="21"
          cy="9"
          r="2"
          className="fill-[hsl(var(--accent))] group-hover:fill-white transition-colors duration-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
        <motion.circle
          cx="21"
          cy="23"
          r="2"
          className="fill-[hsl(var(--accent))] group-hover:fill-white transition-colors duration-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
      </svg>
      <div className="flex flex-col leading-tight">
      <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#9966FF] transition-colors">
  hristine
</span>
        <span className="text-xs font-light tracking-[0.2em] text-neutral-500">
          REJLKOVA
        </span>
      </div>
    </Link>
  )
}
