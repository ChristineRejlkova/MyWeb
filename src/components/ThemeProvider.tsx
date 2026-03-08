'use client'

import * as React from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const ThemeProvider = ({ children, defaultTheme = 'dark', storageKey = 'theme' }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Theme | null
    const initialTheme = stored ?? defaultTheme
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [storageKey, defaultTheme])

  const toggleTheme = React.useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem(storageKey, next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }, [theme, storageKey])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeContext = React.createContext<{ theme: Theme; toggleTheme: () => void } | null>(null)

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export { ThemeProvider }
