'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, Trash2 } from 'lucide-react'

const initialItems = [
  { id: '1', name: 'Kurz React', price: 1290, qty: 1 },
  { id: '2', name: 'Šablona E-shop', price: 4990, qty: 1 },
  { id: '3', name: 'Konzultace 1h', price: 800, qty: 1 },
]

export function CartDemo() {
  const [items, setItems] = useState(initialItems)

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    )
  }

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="space-y-2">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-[hsl(var(--background))]/50 px-2 py-1.5"
          >
            <span className="truncate text-xs font-medium">{item.name}</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => updateQty(item.id, -1)}
                className="rounded p-0.5 text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/20"
              >
                <Minus size={12} />
              </button>
              <span className="min-w-[1rem] text-center text-xs">{item.qty}</span>
              <button
                type="button"
                onClick={() => updateQty(item.id, 1)}
                className="rounded p-0.5 text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/20"
              >
                <Plus size={12} />
              </button>
              <button
                type="button"
                onClick={() => remove(item.id)}
                className="rounded p-0.5 text-red-400/80 hover:bg-red-500/20"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.div
        layout
        className="flex justify-between border-t border-white/10 pt-2 text-xs font-medium"
      >
        <span>Celkem</span>
        <span className="text-[hsl(var(--accent))]">{total.toLocaleString('cs-CZ')} Kč</span>
      </motion.div>
    </div>
  )
}
