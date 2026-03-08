'use client'

import { Toaster as HotToaster } from 'react-hot-toast'

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'hsl(var(--muted))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--muted))',
        },
      }}
    />
  )
}
