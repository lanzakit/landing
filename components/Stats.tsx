"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const GITHUB_REPO_API = "https://api.github.com/repos/lanzakit/starter-kit";

function warnInDev(reason: string) {
  if (process.env.NODE_ENV === "development") {
    console.warn(
      `[Stats] GitHub stars no disponibles (${reason}): ${GITHUB_REPO_API}. Se muestra "—".`,
    );
  }
}

function formatCount(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(n);
}

export function Stats() {
  // undefined = loading, null = failed
  const [stars, setStars] = useState<number | null | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStars() {
      try {
        const res = await fetch(GITHUB_REPO_API, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!res.ok) {
          warnInDev(`la API respondió ${res.status}`);
          setStars(null);
          return;
        }
        const data: { stargazers_count?: unknown } = await res.json();
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        } else {
          warnInDev("la respuesta no trae stargazers_count");
          setStars(null);
        }
      } catch {
        if (controller.signal.aborted) return;
        warnInDev("no se pudo conectar con la API");
        setStars(null);
      }
    }

    loadStars();
    return () => controller.abort();
  }, []);

  const metrics = [
    {
      label: "GitHub stars",
      value: stars === undefined ? "…" : stars === null ? "—" : formatCount(stars),
    },
    // TODO: traer descargas reales desde la API de pypistats.org
    { label: "Descargas en PyPI", value: "500+" },
    // TODO: reemplazar con métrica real cuando haya telemetría opt-in
    { label: "Tests generados", value: "2.4k+" },
  ];

  return (
    <section className="border-y border-border bg-bg-elevated/50 px-4 py-14 sm:px-6">
      <Reveal className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
              {m.value}
            </div>
            <div className="mt-2 text-xs text-fg-muted sm:text-sm">{m.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
