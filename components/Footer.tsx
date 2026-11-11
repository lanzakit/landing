import { LINKS } from "@/lib/links";
import { LinkedinIcon, XIcon } from "./BrandIcons";

const links = [
  { label: "Docs", href: LINKS.docs },
  { label: "GitHub", href: LINKS.github },
  { label: "PyPI", href: LINKS.pypi },
  { label: "Changelog", href: LINKS.changelog },
];

const social = [
  { label: "X", href: LINKS.x, Icon: XIcon },
  { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-4 pt-14 pb-8 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="font-mono text-lg font-semibold">lanzakit</div>
          <p className="mt-2 max-w-xs text-sm text-fg-muted">
            Construido en Bolivia 🇧🇴 para devs hispanohablantes
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted md:justify-center">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 md:justify-end">
          {social.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-fg-muted transition-colors hover:text-fg"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-center text-xs text-fg-muted">
        © 2026 Lanzakit · MIT License
      </p>
    </footer>
  );
}
