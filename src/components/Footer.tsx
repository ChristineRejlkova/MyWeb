import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[hsl(var(--muted))] py-8 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          © {year} Christina Rejlkova
        </p>
        <Link
          href="/"
          className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
        >
          christinerejlkova.com
        </Link>
      </div>
    </footer>
  )
}
