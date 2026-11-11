import { LINKS } from "@/lib/links";

const items = [
  { label: "Docs", href: LINKS.docs },
  { label: "GitHub", href: LINKS.github },
  { label: "PyPI", href: LINKS.pypi },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="font-mono text-lg font-semibold tracking-tight text-fg"
        >
          lanzakit
        </a>
        <ul className="flex items-center gap-5 text-sm text-fg-muted sm:gap-7">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
