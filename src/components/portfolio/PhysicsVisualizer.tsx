'use client'

import { useEffect, useRef, useState } from 'react'

export function PhysicsVisualizer() {
  const [gravity, setGravity] = useState(0.4)
  const [elasticity, setElasticity] = useState(0.85)
  const [running, setRunning] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef({ y: 20, vy: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const ground = canvas.height - 24
    let raf = 0

    const tick = () => {
      const s = stateRef.current
      if (!running) {
        raf = requestAnimationFrame(tick)
        return
      }
      s.vy += gravity
      s.y += s.vy
      if (s.y >= ground) {
        s.y = ground
        s.vy = -s.vy * elasticity
        if (Math.abs(s.vy) < 0.5) s.vy = 0
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [gravity, elasticity, running])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const ground = canvas.height - 24

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'hsl(var(--muted))'
      ctx.fillRect(0, ground, canvas.width, canvas.height - ground)
      ctx.fillStyle = 'hsl(var(--accent))'
      ctx.beginPath()
      ctx.arc(canvas.width / 2, stateRef.current.y, 14, 0, Math.PI * 2)
      ctx.fill()
      requestAnimationFrame(draw)
    }
    draw()
  }, [])

  const reset = () => {
    stateRef.current = { y: 20, vy: 0 }
    setRunning(true)
  }

  return (
    <div className="space-y-3">
      <canvas
        ref={canvasRef}
        width={240}
        height={140}
        className="w-full max-w-full rounded-lg border border-white/10 bg-[hsl(var(--background))]/50"
      />
      <div className="flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-xs">
          <span className="text-[hsl(var(--muted-foreground))]">g</span>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={gravity}
            onChange={(e) => setGravity(Number(e.target.value))}
            className="w-20 accent-[hsl(var(--accent))]"
          />
        </label>
        <label className="flex items-center gap-2 text-xs">
          <span className="text-[hsl(var(--muted-foreground))]">e</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={elasticity}
            onChange={(e) => setElasticity(Number(e.target.value))}
            className="w-20 accent-[hsl(var(--accent))]"
          />
        </label>
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="rounded bg-[hsl(var(--accent))]/20 px-2 py-1 text-xs font-medium text-[hsl(var(--accent))]"
        >
          {running ? 'Pauza' : 'Start'}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded bg-[hsl(var(--accent))]/20 px-2 py-1 text-xs font-medium text-[hsl(var(--accent))]"
        >
          Reset
        </button>
      </div>
      <pre className="overflow-x-auto rounded bg-black/30 px-2 py-1.5 font-mono text-[10px] text-[hsl(var(--muted-foreground))]">
        {`v_new = -e * v_old  // odraz`}
        {`y += v; v += g      // pád`}
      </pre>
    </div>
  )
}
