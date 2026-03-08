# christinerejlkova.com

Osobní reprezentativní web – front-end vývojářka, tvorba webů a doučování.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** – utility-first styling
- **Geist** – typografie (sans + mono)
- **Lucide React** – ikony
- **Framer Motion** – animace

## Struktura projektu

```
src/
├── app/
│   ├── layout.tsx    # Root layout, metadata, theme
│   ├── page.tsx      # Hlavní stránka
│   └── globals.css   # CSS proměnné, Tailwind
└── components/
    ├── Navbar.tsx       # Navigace + přepínač dark/light
    ├── Hero.tsx         # Úvodní sekce
    ├── Services.tsx     # Tech + Edu služby
    ├── TechStack.tsx    # Grid dovedností
    ├── Portfolio.tsx    # Placeholder pro projekty
    ├── Contact.tsx      # Formulář + sociální sítě
    ├── Footer.tsx       # Patička
    ├── ThemeProvider.tsx
    └── ThemeScript.tsx
```

## Vývoj

```bash
npm run dev    # Spustí dev server na http://localhost:3000
npm run build  # Production build
npm run start  # Production server
```

## Design

- Dark mode jako výchozí (přepínatelné)
- Jemné fialové/tyrkysové akcenty
- Hodně bílého místa, čistá typografie
- Responzivní layout
