"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

type Line = { text: string; kind: "cmd" | "info" | "success" };

const LINES: Line[] = [
  { text: "pip install lanzakit-tester", kind: "cmd" },
  { text: "lanzakit-tester", kind: "cmd" },
  { text: "→ Analizando calculadora.py...", kind: "info" },
  { text: "→ Generando tests con Claude...", kind: "info" },
  { text: "→ Validando sintaxis...", kind: "info" },
  { text: "→ Ejecutando pytest...", kind: "info" },
  { text: "✓ 8 tests generados y pasaron en 0.9s", kind: "success" },
];

const LINE_DELAY = 500;
const CHAR_DELAY = 35;
const RESTART_AFTER = 8000;

export function TerminalDemo() {
  const reduceMotion = useReducedMotion();
  // Number of fully shown lines, plus characters typed on the current command line.
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => timers.push(setTimeout(resolve, ms)));

    async function run() {
      while (!cancelled) {
        setShown(0);
        setTyped(0);
        for (let i = 0; i < LINES.length && !cancelled; i++) {
          await wait(LINE_DELAY);
          if (LINES[i].kind === "cmd") {
            for (let c = 1; c <= LINES[i].text.length && !cancelled; c++) {
              setTyped(c);
              await wait(CHAR_DELAY);
            }
          }
          setTyped(0);
          setShown(i + 1);
        }
        await wait(RESTART_AFTER);
      }
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  const visible = reduceMotion ? LINES.length : shown;
  const typing = !reduceMotion && visible < LINES.length && LINES[visible].kind === "cmd" && typed > 0;

  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-xl border border-accent/25 bg-bg-terminal shadow-[0_0_60px_-20px_var(--accent-glow)]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-fg-muted">
              ~/mi-proyecto
            </span>
          </div>
          <div
            className="min-h-[260px] space-y-1.5 overflow-x-auto p-5 font-mono text-sm leading-relaxed sm:p-6"
            aria-label="Demo de lanzakit-tester en la terminal"
          >
            {LINES.slice(0, visible).map((line, i) => (
              <TerminalLine key={i} line={line} />
            ))}
            {typing && (
              <TerminalLine
                line={{ ...LINES[visible], text: LINES[visible].text.slice(0, typed) }}
                cursor
              />
            )}
            {!typing && visible < LINES.length && (
              <span className="inline-block h-4 w-2 animate-pulse bg-fg-muted align-middle" />
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TerminalLine({ line, cursor }: { line: Line; cursor?: boolean }) {
  const color =
    line.kind === "cmd"
      ? "text-success/90"
      : line.kind === "success"
        ? "text-success font-semibold"
        : "text-fg-muted";
  return (
    <div className={`whitespace-pre ${color}`}>
      {line.kind === "cmd" && <span className="text-fg-muted">$ </span>}
      {line.text}
      {cursor && (
        <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-fg-muted align-middle" />
      )}
    </div>
  );
}
