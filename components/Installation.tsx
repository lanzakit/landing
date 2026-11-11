import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";

const CLAUDE_CONFIG = `{
  "mcpServers": {
    "lanzakit-tester": {
      "command": "lanzakit-tester",
      "env": {
        "ANTHROPIC_API_KEY": "tu_key"
      }
    }
  }
}`;

const STEPS = [
  {
    n: "01",
    title: "Instala el paquete",
    description: "Disponible en PyPI. Requiere Python 3.10 o superior.",
    lang: "bash",
    code: "pip install lanzakit-tester",
  },
  {
    n: "02",
    title: "Configura tu API key",
    description: "Usa tu key de Anthropic para que Claude genere los tests.",
    lang: "bash",
    code: 'echo "ANTHROPIC_API_KEY=tu_key" > .env',
  },
  {
    n: "03",
    title: "Conecta con Claude Desktop",
    description: "Agrega el server a claude_desktop_config.json y reinicia la app.",
    lang: "json",
    code: CLAUDE_CONFIG,
  },
];

export function Installation() {
  return (
    <section id="instalacion" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Empieza en 30 segundos
          </h2>
        </Reveal>

        <ol className="space-y-12">
          {STEPS.map((step, i) => (
            <li key={step.n}>
              <Reveal
                delay={i * 0.05}
                className="grid gap-4 sm:grid-cols-[96px_1fr] sm:gap-8"
              >
                <span className="font-mono text-4xl font-semibold text-accent/80 sm:text-5xl">
                  {step.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{step.description}</p>
                  <div className="mt-4 overflow-hidden rounded-lg border border-border bg-bg-terminal">
                    <div className="flex items-center justify-between border-b border-border px-4 py-2">
                      <span className="font-mono text-xs text-fg-muted">
                        {step.lang}
                      </span>
                      <CopyButton text={step.code} />
                    </div>
                    <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-fg">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
