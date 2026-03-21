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
│       ├── layout.tsx           # LocaleProvider + StarBackground + ThemeToggle + LanguageToggle + Footer + Toaster
│       ├── page.tsx             # Landing principal (Server Component)
│       ├── [type]/
│       │   └── page.tsx         # /projects + /clients — generateStaticParams: ["projects","clients"]
│       ├── pricing/
│       │   └── page.tsx         # Server Component (metadata + FAQ schema JSON-LD)
│       └── creator/
│           └── [id]/
│               └── page.tsx     # SSG: generateStaticParams → ids de creators
├── components/
│   ├── layout/                  # Inyectados globalmente en el locale layout
│   │   ├── Footer.tsx
│   │   ├── LanguageToggle.tsx
│   │   └── ThemeToggle.tsx
│   ├── ui/                      # Primitivos sin lógica de dominio — usables en cualquier contexto
│   │   ├── BackLink.tsx         # "← Volver al inicio" (self-translating, Navigation.backToHome)
│   │   ├── Badge.tsx
│   │   ├── ContactIcon.tsx
│   │   ├── ExternalLinkButton.tsx  # Botón coral con ExternalLink icon (ProjectModal + CompanyModal)
│   │   ├── FeatureCard.tsx      # Card icon+título+descripción con hover accentuado (Services + MaintenanceGrid)
│   │   ├── MaintenanceIcon.tsx
│   │   ├── Modal.tsx            # Base modal reutilizable (bottomSheet: true por defecto)
│   │   ├── PageHeading.tsx      # h1 + subtitle — recibe strings del Server Component padre
│   │   ├── Section.tsx
│   │   ├── ServiceIcon.tsx
│   │   ├── StarBackground.tsx
│   │   └── TechIcon.tsx
│   ├── common/                  # Componentes usados en 2+ páginas distintas
│   │   ├── CompanyCard.tsx      # FeaturedWork (home) + ItemGallery (clients)
│   │   ├── CompanyModal.tsx     # FeaturedWork (home) + ItemGallery (clients)
│   │   ├── ProjectCard.tsx      # FeaturedWork (home) + ItemGallery (projects + creator)
│   │   └── ProjectModal.tsx     # FeaturedWork (home) + ItemGallery (projects + creator)
│   ├── gallery/                 # Galería interactiva con modal (grid + estado)
│   │   └── ItemGallery.tsx      # type="projects"|"clients", creatorId opcional para filtrar
│   ├── home/                    # Exclusivos de la landing page
│   │   ├── ContactUs.tsx
│   │   ├── FeaturedWork.tsx     # Carousel infinito proyectos Pyrux + clientes
│   │   ├── Hero.tsx
│   │   ├── HeroButtons.tsx
│   │   ├── Services.tsx         # Grid de servicios usando FeatureCard
│   │   ├── Team.tsx
│   │   └── TechStack.tsx
│   ├── creator/                 # Exclusivos de /creator/[id]
│   │   └── CreatorHeader.tsx    # Foto, nombre, rol, bio, social buttons (GitHub/LinkedIn/email)
│   └── pricing/                 # Exclusivos de /pricing
│       ├── FAQAccordion.tsx
│       ├── FAQSection.tsx       # Self-contained (data + i18n interna)
│       ├── MaintenanceGrid.tsx  # Grid de FeatureCard con colores por planColor
│       ├── PackageCard.tsx
│       ├── PackageCarousel.tsx  # Carousel mobile de paquetes
│       ├── PackageSection.tsx   # Estado interactivo: tabs + paquetes + CTA + mantenimiento
│       ├── PricingHeader.tsx    # h1, tagline, descripción animados (self-translating)
│       └── ProcessSection.tsx   # Self-contained (data + i18n interna)
├── data/
│   ├── companies.ts             # Record<Locale, Company[]> — clientes/empresas
│   ├── contacts.ts              # Info de contacto
│   ├── creators.ts              # Record<Locale, Creator[]> — perfiles de Gino y Juan
│   ├── faq.ts                   # Record<Locale, FAQItem[]>
│   ├── packages.ts              # Record<Locale, ServicePackage[]> — planes con precios
│   ├── projects.ts              # Record<Locale, Project[]> + getProjectsByCreator()
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
│   ├── animations.ts            # Variants reutilizables: staggerContainer, staggerContainerFast, fadeUpItem, fadeUpHeader
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

### Patrón general de páginas

Cada ruta es un **Server Component** que se encarga de:
1. `generateMetadata` + structured data (JSON-LD)
2. Llamar `getTranslations` para pasar strings a `PageHeading`
3. Renderizar el `<main>` wrapper y componer los componentes de la página directamente

No existe el patrón `*PageClient.tsx`. La lógica interactiva vive en Client Components con nombres descriptivos.

```tsx
// Ejemplo: app/[locale]/[type]/page.tsx
export default async function GalleryPage({ params }) {
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  return (
    <main className="...">
      <BackLink />                                    // Client — self-translating
      <PageHeading title={t("title")} subtitle={t("subtitle")} />  // puro, recibe strings
      <ItemGallery type="projects" creatorId="pyrux" /> // Client — estado + modal
    </main>
  );
}
```

### Landing Page

```tsx
// app/[locale]/page.tsx
<main>
  <Hero />           // animación de entrada
  <HeroButtons />    // CTAs: Contacto | Precios
  <FeaturedWork />   // Carousel proyectos Pyrux + carousel clientes
  <Services />       // Grid de servicios → /pricing
  <Team />           // Creadores con modal
  <ContactUs />      // Info de contacto
  <TechStack />      // Tecnologías expandibles con tabs
</main>
```

StarBackground y Footer se inyectan desde `app/[locale]/layout.tsx`, no desde cada página.

### Página de Pricing

```tsx
// app/[locale]/pricing/page.tsx
<main>
  <BackLink />         // self-translating
  <PricingHeader />    // h1 + tagline + descripción (animado, self-translating)
  <PackageSection />   // estado: tabs categoría + paquetes + CTA + mantenimiento
  <ProcessSection />   // self-contained
  <FAQSection />       // self-contained
</main>
```

### Página de Creator

```tsx
// app/[locale]/creator/[id]/page.tsx
<main>
  <BackLink />
  <CreatorHeader creatorId={id} />              // foto + bio + social (Client)
  <ItemGallery type="projects" creatorId={id} /> // proyectos filtrados por creador
</main>
```

### Componentes self-contained

`ProcessSection`, `FAQSection`, `PricingHeader`, `BackLink` y `CreatorHeader` obtienen sus propios datos y traducciones internamente via `useLocale()` + `useTranslations()`. No reciben props de contenido desde el padre — eliminan el prop drilling.

### Navegación

No hay navbar. La navegación ocurre a través de:
- `HeroButtons`: landing → `/pricing`, landing → `#contacto`
- Links "Ver todos" en secciones → `/projects`, `/clients`, `/pricing`
- `BackLink` en páginas internas → `/`
- `ThemeToggle` + `LanguageToggle` absolutos en top-left del locale layout

### i18n

- `app/page.tsx` detecta `navigator.language` y hace redirect a `/es` o `/en`
- `vercel.json` redirige `/` → `/es` en Vercel
- Textos de UI en `messages/es.json` y `messages/en.json`
- Datos bilingüales en formato `Record<Locale, T[]>` en `data/`
- Server Components usan `getTranslations` (next-intl/server)
- Client Components usan `useTranslations` + `useLocale()`

### Filtrado de proyectos

Los proyectos tienen `creatorId`. Los proyectos del estudio usan `creatorId: "pyrux"`, los personales usan el ID del creador.

- `/projects` y el carousel de la landing → `getProjectsByCreator("pyrux", locale)`
- `/creator/[id]` → `getProjectsByCreator(id, locale)`
- `ItemGallery` recibe `creatorId` opcional y filtra automáticamente

---

## Rutas

| Ruta                | Tipo   | Descripción                               |
| ------------------- | ------ | ----------------------------------------- |
| `/`                 | Client | Redirect automático → `/es` o `/en`       |
| `/es` · `/en`       | SSG    | Landing principal con todas las secciones |
| `/es/projects`      | SSG    | Grid de proyectos Pyrux (creatorId=pyrux) |
| `/es/clients`       | SSG    | Grid de todos los clientes                |
| `/es/pricing`       | SSG    | Paquetes y precios (3 categorías)         |
| `/es/creator/[id]`  | SSG    | Perfil de creador — ids en `data/creators.ts` |
| `/_not-found`       | Static | 404                                       |

`/projects` y `/clients` comparten `app/[locale]/[type]/page.tsx`. Next.js genera ambas rutas via `generateStaticParams`.

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
interface Project { id, title, description, shortDescription, technologies: string[], images: string[], liveUrl?, featured, date, creators: string[] }
interface Company { id, name, logo, logoDark?, summary, workDescription, testimonial?, websiteUrl, featured }
interface Technology { id, name, icon: string, category: TechnologyCategory, featured }
interface Creator { id, name, role, bio, shortBio, image, socialLinks: SocialLinks, featuredProjects: string[] }
interface SocialLinks { linkedin?, github?, email?, whatsapp?, instagram?, website? }
interface ServiceItem { title, desc, icon: string }

// types/pricing.types.ts
interface ServicePackage { number, name, price, maintenancePrice, deliveryTime, popular, category: PlanCategory, planColor: PlanColor, features: Feature[], maintenanceCards: MaintenanceItem[] }
interface MaintenanceItem { icon, title, description }
interface FAQItem { question, answer }
type PlanCategory = "estandar" | "ecommerce" | "personalizado"
type PlanColor = "growth" | "pro" | "business" | "custom"
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

### Variants de animación

Usar siempre las variantes de `lib/animations.ts` antes de definir locales:

| Export               | Uso                                           |
| -------------------- | --------------------------------------------- |
| `staggerContainer`   | Contenedor con stagger 0.08s                  |
| `staggerContainerFast` | Contenedor con stagger 0.06s               |
| `fadeUpItem`         | Card/item estándar (opacity 0→1, y 20→0, 0.4s) |
| `fadeUpHeader`       | Heading de página (opacity 0→1, y 20→0, 0.5s) |

Variantes locales solo si tienen lógica única (ej: `custom` prop, `scale`, easing específico).

### FeatureCard

Usar `FeatureCard` de `ui/` para cualquier card con estructura icono+título+descripción+hover:

```tsx
<FeatureCard
  title="..."
  description="..."
  icon={<SomeIcon className="text-coral" />}
  accentClass="hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
/>
```

### Logos con tema claro/oscuro

Cuando una empresa tiene `logoDark`, renderizar ambos con las clases `logo-for-light` / `logo-for-dark`:

```tsx
const logos = company.logoDark
  ? [
      { src: company.logo, className: "logo-for-light w-full h-full object-contain" },
      { src: company.logoDark, className: "logo-for-dark w-full h-full object-contain" },
    ]
  : [{ src: company.logo, className: "w-full h-full object-contain" }];

logos.map(({ src, className }) => <Image key={src} src={src} ... className={className} />)
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
| WhatsApp  | `https://wa.me/5493416941225`                 |
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
| OG image sin `type` | `app/layout.tsx`, páginas | Falta `type: "image/png"` en los metadatos de OG |
| Imágenes en modales sin placeholder | `components/common/ProjectModal.tsx` | En conexiones lentas aparece espacio en blanco — agregar `placeholder="blur"` o skeleton |
| `<section>` sin `aria-label` | `components/ui/Section.tsx` | Impacta lectores de pantalla |
| Sin Error Boundaries | Modales y componentes client | Un dato roto causa pantalla en blanco |
| Creator OG image genérica | `app/[locale]/creator/[id]/page.tsx` | Al compartir un perfil, muestra el logo de Pyrux en vez de la foto del creador |
| Carousel mobile de planes | `components/pricing/PackageCarousel.tsx` | Revisar comportamiento en iOS Safari |
| OurServices en 350px | `components/home/Services.tsx` | Layout roto en viewports muy angostos |

---

## TODOLIST — Ordenada por Fase de Desarrollo

### Fase 1 — Bugs y fixes (hacer primero)

- [ ] **Fix: Project modal — posición de "Ver en vivo"**: moverlo junto a las tecnologías y la fecha, hay demasiado espacio vacío
- [ ] **Fix: bug carousel de planes en mobile** — revisar `PackageCarousel.tsx`, comportamiento roto en iOS Safari
- [ ] **Fix: sección Services en pantallas 350px** — texto o layout roto en viewports muy angostos
- [ ] **Fix: Apple touch icon** — agregar `public/apple-touch-icon.png` (180×180 PNG) y actualizar `icons.apple` en `layout.tsx`
- [ ] **Fix: OG image** — agregar `type: "image/png"` en metadatos de todas las rutas
- [ ] **Fix: OG image creator** — mostrar foto del creador al compartir su perfil, actualmente muestra logo genérico — `app/[locale]/creator/[id]/page.tsx`

### Fase 2 — Contenido y calidad visual

- [ ] **Imágenes de mayor calidad**: proyectos y fotos de los developers — subir a Cloudinary y usar como CDN
- [ ] **Creator page — foto de mayor resolución**: actualizar `public/creators/`
- [ ] **Datos bilingüales de proyectos**: verificar que todos los proyectos en `data/projects.ts` tengan `title` y `description` en es y en
- [ ] **Pricing — lenguaje más accesible**: verificar que los textos de los planes sean comprensibles para no técnicos

### Fase 3 — UX y features de interacción

- [ ] **Error Boundaries**: wrappear modales y componentes client con `ErrorBoundary`
- [ ] **Imágenes en ProjectModal**: agregar `placeholder="blur"` o skeleton para conexiones lentas
- [ ] **Preview de imagen en modal**: click en imagen del carousel → lightbox con resolución completa y botones prev/next
- [ ] **Modal swipe a página**: en mobile, swipe del título "Nuestros clientes" → navega a `/clients` (y análogo para proyectos)
- [ ] **Hover/touch en mobile**: cards de Services, MaintenanceGrid y ProcessSection — replicar efecto hover en touch
- [ ] **Floating CTA / WhatsApp button**: botón siempre visible en mobile para contacto directo
- [ ] **Proceso en landing**: versión resumida (3 pasos) visible en la landing sin ir a /pricing
- [ ] **Navbar con scroll-aware**: aparece al scrollear hacia arriba, se oculta al bajar — con links a secciones
- [ ] **Scroll-to-top button**: aparece después de 300px de scroll
- [ ] **Reduced motion**: respetar `prefers-reduced-motion` en todas las animaciones de Framer Motion

### Fase 4 — Conversión y contenido comercial

- [ ] **Stats bar / números de impacto**: sección con "X proyectos entregados · Y% satisfacción · Z clientes"
- [ ] **Testimonials destacados**: carousel o grid de quotes de clientes reales con foto, nombre y empresa
- [ ] **Case studies**: modals con resultado cuantificado ("aumentamos las ventas un X%")
- [ ] **Comparación Pyrux vs Agencia vs Freelancer**: tabla con diferenciadores concretos
- [ ] **Multi-step contact form**: nombre + email + qué necesitan — captura de leads
- [ ] **Partners / tech badges**: logos de Vercel, Next.js, Tailwind como señal de credibilidad
- [ ] **Newsletter / lead capture**: campo simple de suscripción
- [ ] **Página de proyectos**: agregar filtros por tipo/tecnología
- [ ] **Video demo / reel**: corto (15-30s) mostrando proyectos en uso real

### Fase 5 — SEO, Analytics e Infraestructura

- [ ] **GA4 custom events**: trackear clicks en CTAs, WhatsApp, email, pricing page views, plan seleccionado
- [ ] **Hotjar / Microsoft Clarity**: heatmaps para entender el comportamiento del usuario
- [ ] **Conversion goals**: configurar objetivos en GA4
- [ ] **sitemap.xml completo**: incluir todas las rutas localizadas con `hreflang` correcto
- [ ] **hreflang**: verificar implementación en `generateMetadata` de todas las rutas
- [ ] **Structured data**: agregar schemas `FAQPage`, `Service`, `Person`, `Review`
- [ ] **Google Search Console**: conectar, verificar, monitorear errores de indexación
- [ ] **Privacy Policy y Terms**: páginas legales (`/es/privacidad`, `/es/terminos`) — requerido para GA4/GDPR
- [ ] **Cookie consent**: banner minimalista para GA4
- [ ] **Cloudinary**: migrar imágenes de proyectos y creadores a CDN (si no se hizo en Fase 2)
- [ ] **Uptime monitoring**: UptimeRobot o similar
- [ ] **Error monitoring**: Sentry o similar para errores JS en producción
- [ ] **Lighthouse CI**: agregar a GitHub Actions para que el build falle si el score baja del umbral

### Fase 6 — Accesibilidad (WCAG 2.1 AA)

- [ ] **`aria-label` en todas las secciones**: `components/ui/Section.tsx` — impacta toda la landing
- [ ] **`alt` descriptivos en todas las imágenes**: logos de empresas, fotos de creadores, imágenes de proyectos
- [ ] **Focus indicators visibles**: `:focus-visible` en todos los elementos interactivos
- [ ] **Keyboard navigation**: toda la UI navegable con Tab/Enter/Escape
- [ ] **Color contrast**: verificar ratios en modo dark y light (mínimo 4.5:1)
- [ ] **Skip navigation link**: link "Saltar al contenido" para lectores de pantalla

### Fase 7 — Testing y limpieza final (hacer último)

- [ ] **PageSpeed Insights**: correr audit → objetivo score > 90 en mobile. Optimizar lo que se pueda
- [ ] **Cross-browser testing**: Chrome, Firefox, Safari, Edge (desktop + mobile)
- [ ] **Mobile testing**: iOS (Safari) y Android (Chrome) — especialmente 350px viewports
- [ ] **Limpiar console.logs, comentarios de debug y código muerto**

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
- ❌ Patrón `*PageClient.tsx` — las pages llaman componentes directamente
- ❌ Componentes nombrados `*Content` que solo mueven la lógica sin dividirla
- ❌ Variants de Framer Motion duplicadas — usar `lib/animations.ts`
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
| Static export | Vercel gratis. Sin cold starts. |
| Manrope | Tipografía geométrica, moderna, excelente legibilidad en pantalla. |
| next-intl | i18n server-first, compatible con static export, tipado de mensajes. |
| `[type]/page.tsx` | `/projects` y `/clients` comparten exactamente la misma estructura — un solo archivo evita duplicación. |
| `getProjectsByCreator("pyrux")` | Los proyectos personales de los creadores no aparecen en la galería ni en el carousel de la empresa. |
| Self-contained components | `BackLink`, `PricingHeader`, `ProcessSection`, `FAQSection` obtienen sus propios datos/traducciones — eliminan prop drilling innecesario. |
