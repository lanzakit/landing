"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

export function Waitlist() {
  // Mailerlite injects markup (e.g. <style> tags) into the embed div, which
  // the server never rendered. Rendering the div only after mount keeps it
  // out of hydration entirely.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="waitlist" className="px-4 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          No te pierdas lo que viene
        </h2>
        <p className="mt-4 text-fg-muted">
          Nuevas tools, guías de testing con IA y acceso anticipado a features.
        </p>
        {/* min-h reserves space so the page doesn't jump when the form appears */}
        <div className="mx-auto mt-10 min-h-[120px] w-full max-w-[500px]">
          {/* Script is loaded in app/layout.tsx (next/script, afterInteractive) */}
          {mounted && <div className="ml-embedded" data-form="dz4U0c" />}
        </div>
        <p className="mt-4 text-xs text-fg-muted">
          Sin spam. Solo updates que valgan la pena.
        </p>
      </Reveal>
    </section>
  );
}
