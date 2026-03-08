export function ThemeScript() {
  const script = `
    (function() {
      const stored = localStorage.getItem('theme');
      const theme = stored || 'dark';
      document.documentElement.classList.toggle('dark', theme === 'dark');
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
