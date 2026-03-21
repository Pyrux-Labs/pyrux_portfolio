# CLAUDE.md — Pyrux Portfolio

Archivo único de contexto, convenciones y tareas para el proyecto. Todo lo que necesitás saber para trabajar en este codebase.

---

## Proyecto

Landing page + portfolio web de **Pyrux**, estudio de dos personas (Gino + Juan). Muestra proyectos, clientes, tecnologías, perfiles de los creadores y una página de precios con paquetes de servicios. La UI pública está en **español e inglés** (i18n con next-intl).

**URL producción:** https://www.pyrux.com.ar
**Repo:** https://github.com/Pyrux-Labs/pyrux_portfolio
**Google Analytics:** G-XD1K5TMVZ9

---

## Comandos

Todos desde la raíz del repo (`~/Proyectos/pyrux_portfolio/`):

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Build + exportación estática → out/
npm run lint     # ESLint
```

No hay test suite. `npm run build` es la validación principal.

---

## Stack

| Categoría   | Tecnología                                          |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 16.1.6 — App Router, `output: 'export'`    |
| React       | 19.2.3 + React Compiler (`babel-plugin-react-compiler`) |
| Lenguaje    | TypeScript 5 — strict mode                         |
| Estilos     | Tailwind CSS v4 (`@tailwindcss/postcss`)            |
| Animaciones | Framer Motion 12.34.3                               |
| i18n        | next-intl 4.8.3 — locales: `es` (default), `en`    |
| Iconos      | Lucide React + React Icons                          |
| Toasts      | Sonner 2.0.7                                        |
| Fuente      | Manrope (Google Fonts)                              |
| Deploy      | Vercel — static export, `vercel.json` en repo root  |
| Analytics   | Google Analytics 4 (G-XD1K5TMVZ9)                  |

---

## Estructura de Carpetas

```
pyrux_portfolio/                 ← RAÍZ del proyecto (Next.js aquí)
├── app/
│   ├── globals.css              # Variables CSS, temas dark/light
│   ├── layout.tsx               # Layout raíz (Manrope, anti-FOUC, JSON-LD)
│   ├── not-found.tsx            # 404
│   ├── page.tsx                 # Redirect → /{locale} según navigator.language
│   ├── sitemap.ts
│   └── [locale]/
│       ├── layout.tsx           # Locale layout: LocaleProvider, ThemeToggle, LanguageToggle, Toaster
│       ├── page.tsx             # Landing principal
│       ├── pricing/
│       │   ├── page.tsx         # Server Component (metadata)
│       │   └── PricesPageClient.tsx  # Página completa de precios
│       ├── clients/
│       │   ├── page.tsx
│       │   └── ClientsPageClient.tsx
│       ├── projects/
│       │   ├── page.tsx
│       │   └── ProjectsPageClient.tsx
│       └── creator/
│           └── [id]/
│               ├── page.tsx     # SSG: generateStaticParams → ["gino", "juan"]
│               └── CreatorPageClient.tsx
├── components/
│   ├── layout/                  # Inyectados globalmente en todos los layouts
│   │   ├── Footer.tsx
│   │   ├── LanguageToggle.tsx
│   │   └── ThemeToggle.tsx
│   ├── ui/                      # Primitivos sin afiliación de página
│   │   ├── Badge.tsx
│   │   ├── ContactIcon.tsx
│   │   ├── MaintenanceIcon.tsx
│   │   ├── Modal.tsx            # Base modal reutilizable
│   │   ├── Section.tsx
│   │   ├── ServiceIcon.tsx
│   │   ├── StarBackground.tsx
│   │   └── TechIcon.tsx
│   ├── common/                  # Usados en 2+ páginas distintas
│   │   ├── CompanyCard.tsx      # clients + home (OurProjects)
│   │   ├── CompanyModal.tsx     # clients + home (OurProjects)
│   │   ├── ProjectCard.tsx      # projects + creator + home (OurProjects)
│   │   └── ProjectModal.tsx     # projects + creator + home (OurProjects)
│   ├── home/                    # Exclusivos de la landing page
│   │   ├── Hero.tsx
│   │   ├── HeroButtons.tsx
│   │   ├── OurProjects.tsx
│   │   ├── OurServices.tsx
│   │   ├── OurTeam.tsx
│   │   ├── OurStack.tsx
│   │   └── ContactUs.tsx
│   └── pricing/                 # Exclusivos de /pricing
│       ├── FAQAccordion.tsx
│       ├── FAQSection.tsx
│       ├── MaintenanceCard.tsx
│       ├── MaintenanceGrid.tsx
│       ├── PackageCard.tsx
│       └── ProcessSection.tsx
├── data/
│   ├── companies.ts             # Clientes/empresas
│   ├── contacts.ts              # Info de contacto
│   ├── creators.ts              # Perfiles de Gino y Juan
│   ├── faq.ts                   # Record<Locale, FAQItem[]>
│   ├── packages.ts              # Record<Locale, ServicePackage[]> — planes con precios
│   ├── projects.ts              # Todos los proyectos (studio con creatorId:"pyrux" + personales)
│   ├── services.ts              # Record<Locale, ServiceItem[]>
│   ├── steps.ts                 # Pasos del proceso
│   └── technologies.ts          # Stack tecnológico con categorías
├── hooks/
│   ├── useCopyToClipboard.ts
│   ├── useDragScroll.ts
│   └── useDraggableMarquee.ts
├── i18n/
│   ├── config.ts               # locales: ["es", "en"], defaultLocale: "es"
│   ├── locale-provider.tsx
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
├── lib/
│   ├── animations.ts            # Variants reutilizables de Framer Motion
│   └── utils.ts
├── messages/
│   ├── es.json                  # Traducciones español
│   └── en.json                  # Traducciones inglés
├── public/
│   ├── Pyrux-logo.svg
│   ├── og-image.png
│   ├── robots.txt
│   ├── companies/               # Logos SVG de clientes
│   └── projects/                # Imágenes WebP organizadas por proyecto
│       ├── cms_medmind/
│       ├── goal_planner/
│       ├── medmind_landing_page/
│       └── pyrux_portfolio/
├── types/
│   ├── index.ts                 # Project, Company, Technology, Creator, SocialLinks, Value, ServiceItem
│   └── pricing.types.ts         # ServicePackage, MaintenanceItem, FAQItem, ProcessStep
├── .gitignore
├── eslint.config.mjs
├── global.d.ts
├── next.config.ts               # output: 'export', reactCompiler: true, withNextIntl
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── vercel.json                  # Redirect: / → /es
```

---

## Arquitectura

### Patrón Server/Client

Cada ruta interactiva sigue:

```
app/[locale]/ruta/page.tsx          → Server Component (metadata only)
app/[locale]/ruta/RutaPageClient.tsx → Client Component ("use client", lógica + UI)
```

### Landing Page — Composición de secciones

```tsx
// app/[locale]/page.tsx → solo metadata + <HomePageContent />
// app/[locale]/HomePageContent.tsx → layout de la landing
<StarBackground />
<main>
  <Hero />
  <HeroButtons />    // CTA: Contacta con nosotros | Precios
  <OurProjects />    // Proyectos destacados + empresas/clientes en marquee
  <OurServices />    // 6 servicios, link → /pricing
  <OurTeam />        // Creadores con modals
  <ContactUs />      // Info de contacto
  <OurStack />       // Tecnologías expandibles con tabs por categoría
  <Footer />
</main>
```

### Navegación

No hay navbar. La navegación ocurre a través de:
- `HeroButtons`: landing → `/pricing`, landing → `#contacto`
- Links "Ver todos" en secciones → `/projects`, `/clients`, `/pricing`
- Botones "Volver al inicio" en páginas internas → `/`
- `ThemeToggle` + `LanguageToggle` absolutos en top-left del locale layout

### i18n

- `app/page.tsx` detecta `navigator.language` y hace redirect a `/es` o `/en`
- `vercel.json` redirige `/` → `/es` en Vercel (para SSR/edge)
- `app/[locale]/layout.tsx` valida el locale con `hasLocale()` y provee mensajes via `LocaleProvider`
- Textos de UI en `messages/es.json` y `messages/en.json`
- Datos bilingüales (servicios, paquetes, FAQ) en formato `Record<Locale, T[]>` en `data/`

---

## Rutas

| Ruta                | Tipo   | Descripción                               |
| ------------------- | ------ | ----------------------------------------- |
| `/`                 | Client | Redirect automático → `/es` o `/en`       |
| `/es` · `/en`       | Static | Landing principal con todas las secciones |
| `/es/projects`      | Static | Grid de todos los proyectos               |
| `/es/clients`       | Static | Grid de todos los clientes                |
| `/es/pricing`       | Static | Paquetes y precios (3 categorías)         |
| `/es/creator/[id]`  | SSG    | Perfil de creador — ids: `gino`, `juan`   |
| `/_not-found`       | Static | 404                                       |

---

## Pricing — Planes actuales

**Categoría Estándar:**
- Growth — $300 USD · $40/mes mantenimiento · 2 semanas
- Pro — $500 USD · $50/mes · 3-4 semanas
- Business — Desde $800 USD · $70/mes · 4+ semanas

**Categoría E-Commerce:**
- E-Commerce Básico — $800 USD · $50/mes · 4 semanas
- E-Commerce Pro — $2.000 USD · $200/mes · 6-8 semanas
- E-Commerce Enterprise — Consultar

**Categoría Personalizado:**
- Personalizado — Consultar (sistemas a medida, IA, integraciones)

---

## Tipos Principales

```typescript
// types/index.ts
interface Project { id, title, description, shortDescription, technologies: string[], images: string[], liveUrl?, featured, creators: string[] }
interface Company { id, name, logo, description, testimonial?, website?, featured }
interface Technology { id, name, icon: string, category: TechnologyCategory, featured }
interface Creator { id, name, role, bio, shortBio, photo, socialLinks: SocialLinks, featuredProjects: string[] }
interface SocialLinks { linkedin?, github?, email?, whatsapp?, instagram?, website? }
interface ServiceItem { title, desc, icon: string }

// types/pricing.types.ts
interface ServicePackage { number, name, price, maintenancePrice, deliveryTime, popular, category, planColor, features: Feature[], maintenanceCards: MaintenanceItem[] }
interface MaintenanceItem { icon, title, description }
interface FAQItem { question, answer }
```

---

## Convenciones de Código

- TypeScript estricto — nunca `any`, `as any`, `@ts-ignore`
- Props siempre tipadas con interfaces
- Tailwind CSS para todos los estilos — **nunca CSS inline**
- Mobile first en todos los componentes
- Framer Motion para animaciones — **nunca `useEffect` para animar**
- Datos desde `data/` — nunca fetch, nunca backend
- `"use client"` solo cuando el componente necesita `useState`, `useEffect`, Framer Motion, o event handlers
- No librerías fuera del stack definido

### Patrón de Animación (stagger + whileInView)

```tsx
import { containerVariants, itemVariants } from "@/lib/animations";

<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants} />
  ))}
</motion.div>
```

### Tema Dark/Light

- Variables CSS en `globals.css` (`--color-bg`, `--color-text`, etc.)
- Anti-FOUC script en `app/layout.tsx` — lee `localStorage` antes del primer render
- `ThemeToggle` en locale layout — sin follow al scroll, visible solo en top

---

## Datos de Contacto (hardcodeados en componentes)

| Canal     | Valor                                         |
| --------- | --------------------------------------------- |
| LinkedIn  | `https://linkedin.com/company/pyrux`          |
| Email     | `pyrux@pyrux.com.ar`                          |
| WhatsApp  | `https://wa.me/5491112345678`                 |
| Instagram | `https://www.instagram.com/pyrux_labs`        |
| Base URL  | `https://www.pyrux.com.ar`                    |

---

## Deploy

- **Plataforma:** Vercel
- **Modo:** Static export (`output: 'export'`) — todo pre-renderizado, sin servidor
- **`vercel.json`:** redirige `/` → `/es`
- **Imágenes:** `unoptimized: true` (requerido para static export)
- El build genera la carpeta `out/`

---

## Bugs Conocidos

| Bug | Archivo | Descripción |
|-----|---------|-------------|
| Apple touch icon SVG | `app/layout.tsx` | iOS no soporta SVG como icono de pantalla de inicio. Necesita `apple-touch-icon.png` 180×180 |
| OG image sin `type` | `app/layout.tsx`, `app/[locale]/page.tsx` | Falta `type: "image/png"` en los metadatos de OG |
| Imágenes en modales sin placeholder | `components/modals/ProjectModal.tsx` | En conexiones lentas aparece espacio en blanco — agregar `placeholder="blur"` o skeleton |
| `<section>` sin `aria-label` | `components/ui/Section.tsx` | Impacta lectores de pantalla — todas las secciones de la landing |
| Sin Error Boundaries | Modales y page clients | Un dato roto causa pantalla en blanco |
| Creator OG image genérica | `app/[locale]/creator/[id]/page.tsx` | Al compartir un perfil, muestra el logo de Pyrux en vez de la foto del creador |

---

## TODOLIST — Completa y Ordenada por Prioridad

### 🔴 Crítico — Pre-Launch

- [ ] **Cross-browser testing**: Chrome, Firefox, Safari, Edge (desktop + mobile)
- [ ] **Mobile testing**: iOS (Safari) y Android (Chrome) — especialmente 350px viewports
- [ ] **Limpiar console.logs, comentarios de debug y código muerto**
- [ ] **Fix: bug carousel de planes en mobile** — revisar `useDraggableMarquee`
- [ ] **Fix: sección OurServices en pantallas 350px** — texto o layout roto
- [ ] **Fix: Apple touch icon** — agregar `public/apple-touch-icon.png` (180×180 PNG) y actualizar `icons.apple` en `layout.tsx`
- [ ] **Fix: OG image** — agregar `type: "image/png"` en metadatos de todas las rutas

### 🟠 Alta Prioridad — Calidad y Conversión

- [ ] **Hover/touch en mobile**: cards de Qué Hacemos, Mantenimiento y Proceso — replicar el efecto hover de desktop en touch
- [ ] **Modal swipe a página**: en mobile, tocar el título "Nuestros clientes" y arrastrarlo → navega a `/clients` (y análogamente para proyectos)
- [ ] **Imágenes de mayor calidad**: proyectos y fotos de los developers — subir a Cloudinary y usar como CDN
- [ ] **Preview de imagen en modal**: click en imagen del carousel → abre lightbox con resolución completa y botones prev/next
- [ ] **Creator page — foto de mayor resolución**: actualizar `public/creators/`
- [ ] **Creator page — project cards**: mostrar las cards de proyectos del creador además del modal
- [ ] **Project modal — posición de "Ver en vivo"**: moverlo junto a las tecnologías y la fecha (menos espacio vacío)
- [ ] **OG image creator**: mostrar foto del creador al compartir su perfil — `app/[locale]/creator/[id]/page.tsx`

### 🟡 Importante — UX y Contenido

- [ ] **Error Boundaries**: wrappear modales y page-level clients con `ErrorBoundary`
- [ ] **Imágenes en ProjectModal**: agregar `placeholder="blur"` o skeleton para conexiones lentas
- [ ] **Datos bilingüales de proyectos**: verificar que todos los proyectos en `data/projects.ts` tengan `title` y `description` en es y en
- [ ] **PageSpeed Insights**: correr audit → objetivo score > 90 en mobile. Optimizar lo que se pueda
- [ ] **Pricing — lenguaje más accesible**: verificar que los textos de los planes sean comprensibles para no técnicos (ya actualizado parcialmente en `data/packages.ts`)

### 🟢 Mejoras — Para Lanzamiento Comercial Multinacional

#### SEO & Discoverability
- [ ] **sitemap.xml completo**: incluir todas las rutas localizadas (`/es`, `/en`, `/es/pricing`, etc.) con `hreflang` correcto
- [ ] **hreflang**: verificar implementación en `generateMetadata` — `es` y `en` con `x-default: /es`
- [ ] **Structured data**: agregar schemas `FAQPage`, `Service`, `Person`, `Review` a las páginas correspondientes
- [ ] **FAQ Schema**: agregar `FAQPage` JSON-LD en la página de pricing
- [ ] **Google Search Console**: conectar, verificar, monitorear errores de indexación

#### Tracking & Analytics
- [ ] **GA4 custom events**: trackear clicks en CTAs, WhatsApp, email, pricing page views, plan seleccionado
- [ ] **Hotjar / Microsoft Clarity**: heatmaps para entender el comportamiento del usuario en la landing
- [ ] **Conversion goals**: configurar objetivos en GA4 (inicio de contacto, click en pricing)

#### Trust & Social Proof (crítico para multinacional)
- [ ] **Stats bar / números de impacto**: sección con "X proyectos entregados · Y% satisfacción · Z clientes" (animados al hacer scroll)
- [ ] **Testimonials destacados**: carousel o grid de quotes de clientes reales con foto, nombre y empresa
- [ ] **Case studies**: páginas o modals con resultado cuantificado ("aumentamos las ventas un X%", "redujimos el tiempo de carga en Y segundos")
- [ ] **Partners / tech badges**: logos de Vercel, Next.js, Tailwind, etc. como señal de credibilidad técnica
- [ ] **"As featured in" / prensa**: si hay menciones externas, mostrarlas (blog posts, entrevistas, etc.)

#### Conversión
- [ ] **Floating CTA / WhatsApp button**: botón siempre visible en mobile para contacto directo
- [ ] **Comparación Pyrux vs Agencia vs Freelancer**: tabla o sección visual con diferenciadores concretos
- [ ] **Multi-step contact form**: en vez de solo links, un form corto (nombre + email + qué necesitan) para capturar leads
- [ ] **Newsletter / lead capture**: "Suscribite para recibir tips de diseño web" — agregar campo simple

#### UX & Diseño Premium
- [ ] **Navbar con scroll-aware**: aparece al scrollear hacia arriba, se oculta al bajar — con links a las secciones
- [ ] **Scroll-to-top button**: aparece después de 300px de scroll
- [ ] **Reduced motion**: respetar `prefers-reduced-motion` en todas las animaciones de Framer Motion
- [ ] **Proceso en landing**: versión resumida (3 pasos) de "Nuestro proceso" visible en la landing sin tener que ir a /pricing
- [ ] **Video demo / reel**: corto (15-30s) mostrando proyectos en uso real — hero o sección dedicada
- [ ] **Custom cursor**: efecto de cursor premium (opcional, refuerza identidad tech)

#### Accesibilidad (WCAG 2.1 AA)
- [ ] **`aria-label` en todas las secciones**: `components/ui/Section.tsx` — impacta toda la landing
- [ ] **`alt` descriptivos en todas las imágenes**: revisar logos de empresas, fotos de creadores, imágenes de proyectos
- [ ] **Focus indicators visibles**: asegurarse de que los elementos interactivos tengan `:focus-visible` visible
- [ ] **Keyboard navigation**: toda la UI navegable con Tab/Enter/Escape
- [ ] **Color contrast**: verificar ratios en modo dark y light (mínimo 4.5:1)
- [ ] **Skip navigation link**: link "Saltar al contenido" para lectores de pantalla

#### Infraestructura y Confiabilidad
- [ ] **Cloudinary**: subir todas las imágenes de proyectos y creadores, usar URLs de Cloudinary en `data/`
- [ ] **Uptime monitoring**: configurar UptimeRobot o similar para alertas si el sitio cae
- [ ] **Error monitoring**: Sentry o similar para trackear errores JS en producción
- [ ] **Lighthouse CI**: agregar a GitHub Actions para que el build falle si el score baja de umbral
- [ ] **Privacy Policy y Terms**: páginas legales mínimas (`/es/privacidad`, `/es/terminos`) — requerido para GDPR/LGPD
- [ ] **Cookie consent**: banner minimalista para cumplir con normativas (si usan GA4)

#### Contenido
- [ ] **Blog / Insights**: sección con 2-3 artículos técnicos — refuerza SEO y credibilidad
- [ ] **"Por qué nosotros" dedicada**: sección con diferenciadores concretos y prueba (no solo texto)
- [ ] **Página de proyectos**: agregar filtros por tipo/tecnología — mejorar discovery
- [ ] **Vídeos de casos de uso**: demostrar proyectos en uso real (screen recording corto)

---

## Anti-patrones (NO hacer)

- ❌ `any`, `as any`, `@ts-ignore`
- ❌ CSS inline — siempre Tailwind
- ❌ `useEffect` para animaciones — siempre Framer Motion
- ❌ Fetch de datos — todo viene de `data/`
- ❌ Librerías que no están en el stack
- ❌ Server Components con interactividad
- ❌ Client Components innecesarios
- ❌ Hardcodear strings de UI — usar `messages/` + `useTranslations`
- ❌ Componentes sin tipado de props
- ❌ Diseño sin considerar mobile first
- ❌ Asumir la estructura de un componente sin leerlo primero

---

## Decisiones de Diseño

| Decisión | Razón |
|----------|-------|
| Sin navbar | Navegación integrada en secciones + botones de cada página. La landing es el hub. |
| Sin backend | Static export = máxima performance. Todo pre-renderizado. |
| Framer Motion | API declarativa, stagger animations nativas, sin `useEffect`. |
| Dark theme default | Portfolio tech: highlights de color más impactantes. Sistema anti-FOUC para respetar preferencia guardada. |
| App Router | Futuro de Next.js. Server Components por defecto. Layouts compartidos. |
| Static export | Vercel gratis. GitHub Pages posible. Sin cold starts. |
| Manrope | Tipografía geométrica, moderna, excelente legibilidad en pantalla. |
| next-intl | i18n server-first, compatible con static export, tipado de mensajes. |
