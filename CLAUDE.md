# Lanzakit - Landing Page

Landing page oficial de Lanzakit Tester, un MCP server open-source que 
genera y valida tests pytest con Claude.

## Contexto del producto

- **Producto principal**: `lanzakit-tester` (paquete Python en PyPI)
- **Repo del producto**: github.com/lanzakit/starter-kit
- **Página PyPI**: pypi.org/project/lanzakit-tester
- **Autora**: Raquel, instructora Python y full-stack dev en Bolivia

## Objetivo de esta landing

1. Presentar el producto a devs hispanohablantes
2. Capturar emails en waitlist (via Mailerlite)
3. Linkear a GitHub y PyPI
4. Servir como portfolio premium para CV

## Stack técnico

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animaciones)
- Lucide React (iconos)
- Mailerlite (waitlist embed)
- Deploy en Vercel

## Diseño

- **Tema**: dark mode por default
- **Colores base**: negro profundo (#0F0F13) + blanco (#FAFAFA)
- **Acento**: violeta eléctrico (#A78BFA)
- **Tipografía**: sans-serif moderna (Geist o Inter)
- **Estilo**: minimalista premium, inspirado en Vercel/Supabase/Linear
- **Idioma**: español neutro LATAM

## Mailerlite embed code

```html
<script>
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '2788873');
</script>

<div class="ml-embedded" data-form="dz4U0c"></div>
```

## Comandos

- Dev: `npm run dev`
- Build: `npm run build`
- Deploy: automático vía Vercel al hacer push a main

## Estado actual

**Última actualización**: 2026-11-11 (post-sesión 1)

- Landing v1 construida y funcional en localhost
- Todas las secciones implementadas: Nav, Hero, Terminal, Features,
  Installation, Stats, Waitlist, Footer
- El repo ya es público

### Pendiente para la próxima sesión

- [ ] Deploy en Vercel
- [ ] Ajustar `metadataBase` (en `app/layout.tsx`) al dominio real
- [ ] Conectar el dominio lanzakit.dev desde Porkbun
- [ ] Verificar perfiles reales de X y LinkedIn (hoy son placeholders en
      `lib/links.ts`)
