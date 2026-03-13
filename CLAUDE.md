# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio web for Pyrux, a two-person studio. Shows projects, clients, creator profiles, and a pricing page. All public UI is in **Spanish**.

The Next.js app lives in the `pyrux_portfolio/` subdirectory. Run all commands from there.

## Commands

```bash
cd pyrux_portfolio

npm run dev      # Dev server (Turbopack)
npm run build    # Static export → out/
npm run lint     # ESLint
```

No test suite exists. Build (`npm run build`) is the main validation step.

## Stack

- **Next.js 16.1.6** — App Router, static export (`output: 'export'`)
- **React 19** with React Compiler (`babel-plugin-react-compiler`)
- **TypeScript 5** — strict, no `any`
- **Tailwind CSS v4** — all styling; no inline styles ever
- **Framer Motion 12** — all animations; never `useEffect` for animation
- **Lucide React** + **React Icons** — icons
- **Sonner** — toasts
- Deploy: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), outputs to `pyrux_portfolio/out/`

## Architecture

### Server/Client Component Pattern

Every interactive route follows:

```
app/ruta/page.tsx             → Server Component (metadata only)
app/ruta/RutaPageClient.tsx   → Client Component ("use client", all logic/UI)
```

### Data Layer

All content is static — imported from `data/` files (`projects.ts`, `companies.ts`, `creators.ts`, `technologies.ts`). No fetching, no backend.

### Navigation

No navbar. Navigation happens through:

- `HeroButtons` on landing → `/contacto`, `/precios`
- "Ver todos" links in sections → `/projects`, `/clients`, `/precios`
- "Volver al inicio" buttons on inner pages → `/`

### Known Bug

Links in `HeroButtons` and `OurServices` point to `/precios`, but the route folder is `app/prices/` (→ `/prices`). The `app/pricing/` directory also exists in the working tree (untracked). This needs resolution before deployment.

## Code Conventions

- TypeScript: never `any`, `as any`, or `@ts-ignore`; always type component props with interfaces
- Use `"use client"` only when the component needs interactivity
- Mobile-first responsive design on all components
- Animation pattern — stagger with `whileInView`:

```tsx
const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

<motion.div
	variants={containerVariants}
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true }}>
	{items.map((item) => (
		<motion.div key={item.id} variants={itemVariants} />
	))}
</motion.div>;
```

- Theme: CSS variables in `globals.css` (`--color-bg`, `--color-text`, etc.); anti-FOUC script in `layout.tsx` reads localStorage before render

## Key Types (`types/index.ts`)

`Project`, `Company`, `Technology` (with `TechnologyCategory`), `Creator`, `SocialLinks`, `Value` — use these, never redefine them.

<role>
Eres un desarrollador frontend senior con expertise en React, Next.js, Tailwind CSS y animaciones web. Tu tarea es implementar una lista de mejoras precisas sobre una landing page existente llamada Pyrux. Conoces el codebase, el diseño, y entiendes el contexto de negocio de la empresa.
</role>

<context>
Pyrux es una empresa de desarrollo web que ofrece servicios de diseño y desarrollo de sitios web, con planes que incluyen mantenimiento mensual. La landing page tiene secciones: Hero, Proyectos, Clientes/Empresas, Equipo/Integrantes, Pricing, Proceso, FAQ y Contacto. La app incluye modales para proyectos, clientes e integrantes, modo oscuro/claro, y un sistema de cards con animaciones. Antes de tocar cualquier archivo, leé el código relevante para entender la implementación actual.
</context>

<investigate_before_answering>
Antes de implementar cada mejora, abrí y leé los archivos relevantes. Nunca asumas la estructura del código sin haberlo visto. Investigá el componente antes de modificarlo.
</investigate_before_answering>

<instructions>
Implementá todas las siguientes mejoras en orden. Agrupá los cambios por sección/componente para minimizar archivos tocados. Después de cada grupo, confirmá qué archivos modificaste y qué cambios realizaste.

<grupo id="1" nombre="Layout general y navegación">
1. Arreglá el padding/espaciado entre la sección "Contacta con nosotros" y "Nuestros proyectos" para que tengan una separación visual consistente con el resto del sitio.
2. Arreglá la ruta de la sección Pricing para que el link de navegación lleve correctamente a esa sección.
3. El botón de cambiar modo noche/día NO debe seguir al usuario al hacer scroll. Fijalo en la posición superior de la landing (position: sticky o static dentro del header), de modo que quede visible solo cuando el usuario está arriba.
</grupo>

<grupo id="2" nombre="Sección Contacto">
4. Cuando el usuario navega a la sección "Contáctanos", el contenido debe aparecer centrado verticalmente en el viewport, no pegado al tope.
5. Reducí la agresividad de las animaciones de la sección "Contáctanos": aumentá las duraciones de transición (mínimo 600ms) y usá easing suave (ease-in-out o similar) para que los elementos entren con más calma.
</grupo>

<grupo id="3" nombre="Sección Pricing">
6. Eliminá el plan "Único" de la sección de precios.
7. Aumentá el tamaño del texto de los nombres de los planes para que sean visualmente prominentes, similar al estilo de Claude Code (tipografía grande, bold, jerárquica).
8. En el plan "Mantenimiento", asegurate de que el nombre completo "Mantenimiento" se lea sin cortes ni truncados.
9. En mobile: reorganizá el orden visual del plan de modo que el bloque de "Mantenimiento" aparezca entre el tiempo de entrega y los ítems del plan.
10. Eliminá la opción de pago "Vía MercadoPago" de la sección de precios o del checkout.
11. Agregá el mismo efecto hover/animación que tienen las cards de proyectos a las cards de "Mantenimiento incluido".
</grupo>

<grupo id="4" nombre="Sección FAQ">
12. En la pregunta "¿Qué tenés que tener listo antes de empezar?", cambiá la respuesta por: "Un manual de marca hecho por un profesional sería ideal, pero no es obligatorio."
13. En la pregunta "¿Puedo actualizar el contenido yo mismo?", cambiá la respuesta por: "El plan Standard en adelante incluyen una aplicación web para que puedas cambiar el contenido por vos mismo; mientras que en el plan Growth van por el mantenimiento mensual."
14. En la pregunta "¿Qué pasa si no quiero contratar mantenimiento?", cambiá la respuesta por: "Te entregamos la aplicación lista, para que los realices por tu cuenta."
15. En la pregunta "¿Por qué Pyrux y no una agencia?", cambiá la respuesta por: "Las agencias cobran un 200% más que nuestros precios, y tercerizan tu proyecto a un programador inexperto. En Pyrux, asegurás que hablás directamente con los profesionales que realizarán tu proyecto, manteniendo una calidad y personalización que no vas a tener en ninguna otra empresa."
</grupo>

<grupo id="5" nombre="Cards de monitoreo y copias">
16. En la card "Monitoreo 24/7 - Alertas automáticas si el sitio cae", cambiá el texto por: "Monitoreo constante — arreglamos los problemas antes de que el usuario los vea."
17. En la card "Copias semanales, contenido siempre a salvo", cambiá el texto por: "Intervalo de copias dependiente de tu plan."
</grupo>

<grupo id="6" nombre="Sección Proyectos y Empresas">
18. Igualá el tamaño de las cards de proyectos y de empresas/clientes para que tengan la misma altura y ancho.
19. En las cards de proyectos, limitá la descripción a exactamente 3 líneas usando CSS (`-webkit-line-clamp: 3`).
20. En "Ver todos los proyectos", las tecnologías de cada proyecto deben mostrarse en una sola línea (sin wrap), con overflow hidden y scroll horizontal si es necesario.
21. Cuando abrís el modal de un proyecto desde "Ver todos", mostrá todas las tecnologías directamente en el modal sin truncar.
22. Agregá una animación mínima (fade-in o scale suave) a los badges de tecnologías cuando el usuario hace click en "Ver más".
</grupo>

<grupo id="7" nombre="Cards de empresas/clientes">
23. Cuando se toca la card de una empresa, en el div del comentario reducí el ancho máximo (por ejemplo, `max-w-sm` o similar) para que el texto no ocupe todo el ancho del modal.
24. En ese mismo modal, invertí el SVG de las comillas (rotación 180° o `scale(-1, -1)`) para que apunten hacia abajo como comillas de cierre.
</grupo>

<grupo id="8" nombre="Modal de integrantes">
25. En el modal de integrante, mostrá la foto en formato circular (border-radius: 50%) posicionada a la derecha del nombre, en la misma línea.
26. En el modal de integrante, cuando el usuario toca el email, mostrá un Toast component con el mensaje "Email copiado al portapapeles" y copiá el email al clipboard automáticamente.
27. En "Ver todos los proyectos de un integrante", eliminá el número de proyectos del título o encabezado.
28. En "Ver todos los proyectos de un integrante", mostrá la foto del integrante también en esa vista.
</grupo>

<grupo id="9" nombre="Sección Proceso">
29. Rediseñá completamente la sección "Nuestro proceso". El nuevo diseño debe ser visualmente distinto del actual: usá un layout de timeline vertical con línea conectora, íconos representativos por etapa, y animaciones de entrada escalonadas (staggered) al hacer scroll. Hacé que cada paso tenga un número grande de fondo semitransparente como elemento decorativo. El resultado debe sorprender y verse premium.
</grupo>

<grupo id="10" nombre="Venda/Banner">
30. Agregá una venda (banner strip) de color naranja en la parte superior de la landing page, antes del header. El banner debe tener texto breve centrado (por ejemplo, un mensaje promocional o de urgencia), fondo naranja (#F97316 o similar), texto blanco, y ser responsive.
</grupo>

<grupo id="11" nombre="Modales mobile">
31. En mobile, mejorá el modal de proyecto: usá bottom sheet pattern (slide desde abajo), con handle bar visible, scroll interno, y padding adecuado para pantallas pequeñas.
32. En mobile, aplicá el mismo tratamiento de bottom sheet al modal de "Nuestros clientes".
33. En mobile, aplicá el mismo tratamiento de bottom sheet al modal de "Integrante".
</grupo>
</instructions>

<workflow>
Para cada grupo:
1. Leé los archivos relevantes antes de modificar.
2. Implementá todos los cambios del grupo.
3. Verificá que no rompiste comportamiento existente.
4. Reportá: archivos modificados, resumen de cambios, y si hay alguna dependencia que el desarrollador deba revisar manualmente (por ejemplo, si el nombre exacto de una sección en el FAQ no coincide con lo que encontraste en el código).
</workflow>

<output_format>
Por cada grupo completado, respondé con:

- ✅ **Grupo [N] — [nombre]**: completado
- 📁 Archivos modificados: [lista]
- 📝 Cambios: [resumen breve de cada cambio]
- ⚠️ Notas: [cualquier ambigüedad encontrada o decisión tomada]
  </output_format>
