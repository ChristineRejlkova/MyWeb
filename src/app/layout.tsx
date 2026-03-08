import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeScript } from '@/components/ThemeScript'
import { Toaster } from '@/components/Toaster'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Christine Rejlková | Front-end Developer',
  description: 'Front-end vývojářka – tvorba webů na zakázku, e-shopy (Next.js, React), doučování matematiky a fyziky.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
