"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  GitBranch,
  Globe,
  Plug,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

type Feature = {
  icon: LucideIcon | ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    title: "Generación con IA",
    description: "Claude analiza tu código y escribe tests idiomáticos.",
  },
  {
    icon: CheckCircle2,
    title: "Validación automática",
    description: "Verifica sintaxis y ejecuta pytest antes de entregarte nada.",
  },
  {
    icon: Plug,
    title: "MCP nativo",
    description: "Funciona con Claude Desktop y cualquier cliente MCP.",
  },
  {
    icon: GitBranch,
    title: "Análisis con AST",
    description: "Entiende funciones, clases y firmas de tu código.",
  },
  {
    icon: Globe,
    title: "Español first",
    description: "Comentarios de tests y docs en español neutro.",
  },
  {
    icon: GithubIcon,
    title: "Open source",
    description: "Licencia MIT, sin lock-in, código auditable.",
  },
];

export function Features() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tests que puedes confiar
          </h2>
          <p className="mt-4 text-fg-muted">
            Nada llega a tu repo sin haber pasado por pytest primero.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-bg-elevated p-6 transition-shadow duration-300 hover:glow-accent"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-glow text-accent">
                <Icon size={20} />
              </div>
              <h3 className="font-medium text-fg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
