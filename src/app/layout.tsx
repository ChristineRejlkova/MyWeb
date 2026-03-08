import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Varela_Round } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeScript } from '@/components/ThemeScript'
import { Toaster } from '@/components/Toaster'
import { Navbar } from '@/components/Navbar'
import './globals.css'

const varelaRound = Varela_Round({ weight: '400', subsets: ['latin'], variable: '--font-round' })

const siteUrl = 'https://christinerejlkova.com'

export const metadata: Metadata = {
  title: 'Christine Rejlková | FE Vývojářka & Lektorka Matiky a Fyziky',
  description:
    'Profesionální tvorba webů na zakázku v React/Next.js a individuální doučování matematiky a fyziky pro všechny úrovně.',
  keywords: [
    'freelance front-end vývojářka',
    'tvorba webů Next.js',
    'doučování matematiky a fyziky Praha',
    'doučování matematiky online',
    'doučování fyziky Praha',
    'React vývojář',
    'web na zakázku',
  ],
  authors: [{ name: 'Christine Rejlková', url: siteUrl }],
  creator: 'Christine Rejlková',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: siteUrl,
    siteName: 'Christine Rejlková',
    title: 'Christine Rejlková | FE Vývojářka & Lektorka Matiky a Fyziky',
    description:
      'Profesionální tvorba webů na zakázku v React/Next.js a individuální doučování matematiky a fyziky pro všechny úrovně.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <ThemeScript />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${varelaRound.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
