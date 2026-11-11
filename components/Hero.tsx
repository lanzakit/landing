"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { LINKS } from "@/lib/links";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
      {/* Radial violet gradient, centered slightly above the middle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_70%_60%_at_50%_38%,rgba(167,139,250,0.14),rgba(167,139,250,0.04)_45%,transparent_75%)]"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-fg-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Open source · v0.1.0
        </motion.div>

        <div className="relative">
          {/* Blurred violet halo behind the headline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-[0.12] blur-[80px] sm:blur-[120px]"
          />
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Tests pytest generados por IA.{" "}
            <span className="text-accent">Verificados</span> antes de que los
            veas.
          </motion.h1>
        </div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-fg-muted text-pretty sm:text-xl"
        >
          Análisis de código, generación con Claude, validación y ejecución
          en una sola llamada. Integrado nativamente con Model Context
          Protocol.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#instalacion"
            onClick={(e) => {
              const target = document.getElementById("instalacion");
              if (!target) return; // fall back to the native anchor jump
              e.preventDefault();
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 font-medium text-bg transition hover:brightness-110"
          >
            Empezar gratis
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 font-medium text-fg transition hover:border-white/20 hover:bg-white/5"
          >
            <GithubIcon size={18} />
            Ver en GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
