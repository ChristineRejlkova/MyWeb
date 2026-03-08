'use client'

import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Domů">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <rect
          width="32"
          height="32"
          rx="8"
          className="fill-[hsl(var(--accent))]/12"
        />
        <path
          d="M20 9c-5 0-9 3.5-9 7s4 7 9 7"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="21" cy="9" r="1.5" className="fill-[hsl(var(--accent))]" />
      </svg>
      <span className="text-lg font-medium tracking-tight">
      </span>
    </Link>
  )
}
