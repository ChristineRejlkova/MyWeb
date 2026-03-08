'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Send, Github, Linkedin, Mail, Loader2 } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/ChristineRejlkova', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/christinerejlkova', icon: Linkedin, label: 'LinkedIn' },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isSubmitting) return

    const toastId = toast.loading('Odesílání...')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error ?? 'Něco se pokazilo.')
      }

      toast.success('Zpráva odeslána. Brzy se ozvu!', { id: toastId })
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Chyba při odesílání.', {
        id: toastId,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="relative py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Kontakt
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-[hsl(var(--muted-foreground))]"
        >
          Napište mi pro spolupráci nebo dotazy k doučování.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Jméno
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full rounded-lg border border-[hsl(var(--muted))] bg-[hsl(var(--background))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/60 focus:border-[hsl(var(--accent))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--accent))] disabled:opacity-50"
              placeholder="Vaše jméno"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full rounded-lg border border-[hsl(var(--muted))] bg-[hsl(var(--background))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/60 focus:border-[hsl(var(--accent))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--accent))] disabled:opacity-50"
              placeholder="vas@email.cz"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Zpráva
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full resize-none rounded-lg border border-[hsl(var(--muted))] bg-[hsl(var(--background))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/60 focus:border-[hsl(var(--accent))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--accent))] disabled:opacity-50"
              placeholder="Napište mi..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
            {isSubmitting ? 'Odesílání...' : 'Odeslat'}
          </button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-6 border-t border-[hsl(var(--muted))] pt-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full p-3 text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
              aria-label={link.label}
            >
              <link.icon size={22} />
            </a>
          ))}
          <a
            href="mailto:hello@christinerejlkova.com"
            className="flex items-center gap-2 rounded-full p-3 text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
            aria-label="E-mail"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
