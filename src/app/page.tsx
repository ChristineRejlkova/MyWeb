import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { ProcJa } from '@/components/ProcJa'
import { TechStack } from '@/components/TechStack'
import { Portfolio } from '@/components/Portfolio'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Hero />
      <Services />
      <ProcJa />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
