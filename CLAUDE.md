# CLAUDE.md — Pyrux Portfolio

Contexto, convenciones y tareas del proyecto.

---

## Proyecto

Landing page + portfolio web de **Pyrux**, estudio de dos personas (Gino + Juan). Muestra proyectos, clientes, tecnologías, perfiles de los creadores y una página de precios. La UI está en **español e inglés** (next-intl).

**Producción:** https://www.pyrux.com.ar
**Repo:** https://github.com/Pyrux-Labs/pyrux_portfolio
**GA4:** G-XD1K5TMVZ9

---

## Comandos

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Build → out/ (static export)
npm run lint     # ESLint
```

No hay test suite. `npm run build` es la validación principal.

---

## Stack

| Categoría   | Tecnología                                                  |
| ----------- | ----------------------------------------------------------- |
| Framework   | Next.js 16 — App Router, `output: 'export'`                 |
| React       | 19 + React Compiler                                         |
| Lenguaje    | TypeScript 5 — strict mode                                  |
| Estilos     | Tailwind CSS v4                                             |
| Animaciones | Framer Motion                                               |
| i18n        | next-intl — locales: `es` (default), `en`                   |
| Iconos      | Lucide React + React Icons                                  |
| Toasts      | Sonner                                                      |
| Fuente      | Manrope (Google Fonts)                                      |
| Deploy      | Vercel — static export                                      |
| Imágenes    | Cloudinary CDN (cloud: `dj95v7mro`) vía `lib/cloudinary.ts` |

---

## Estructura de Carpetas

```
pyrux_portfolio/
├── app/
│   ├── globals.css              # Variables CSS, temas dark/light, keyframes
│   ├── layout.tsx               # Layout raíz (Manrope, anti-FOUC, JSON-LD)
│   ├── not-found.tsx
│   ├── page.tsx                 # Redirect → /{locale}
│   ├── sitemap.ts
│   └── [locale]/
│       ├── layout.tsx           # LocaleProvider + StarBackground + ThemeToggle + LanguageToggle + Footer + Toaster
│       ├── page.tsx             # Landing principal (Server Component)
│       ├── [type]/page.tsx      # /projects + /clients
│       ├── pricing/page.tsx
│       └── creator/[id]/page.tsx
├── components/
│   ├── layout/                  # Footer, LanguageToggle, ThemeToggle
│   ├── ui/                      # Primitivos sin lógica de dominio
│   │   ├── BackLink.tsx         # "← Volver al inicio" (self-translating)
│   │   ├── Badge.tsx
│   │   ├── ContactIcon.tsx
│   │   ├── ExternalLinkButton.tsx
│   │   ├── FeatureCard.tsx      # icon+título+descripción+hover (Services, MaintenanceGrid)
│   │   ├── MaintenanceIcon.tsx
│   │   ├── Modal.tsx            # Base modal reutilizable
│   │   ├── PageHeading.tsx      # h1 + subtitle
│   │   ├── Section.tsx
│   │   ├── ServiceIcon.tsx
│   │   ├── StarBackground.tsx
│   │   └── TechIcon.tsx
│   ├── common/                  # Usados en 2+ páginas
│   │   ├── CompanyCard.tsx
│   │   ├── CompanyModal.tsx
│   │   ├── CreatorPreview.tsx   # Lightbox foto de creador (single image, z-60)
│   │   ├── ImagePreview.tsx     # Lightbox carousel de proyecto (prev/next, z-60)
│   │   ├── ProjectCard.tsx
│   │   └── ProjectModal.tsx
│   ├── gallery/
│   │   └── ItemGallery.tsx      # type="projects"|"clients", creatorId para filtrar
│   ├── home/                    # Exclusivos de la landing
│   │   ├── ContactUs.tsx
│   │   ├── FeaturedWork.tsx     # Carousel proyectos + clientes
│   │   ├── Hero.tsx
│   │   ├── HeroButtons.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   └── TechStack.tsx
│   ├── creator/
│   │   └── CreatorHeader.tsx    # Foto, nombre, rol, bio, social links
│   └── pricing/
│       ├── FAQAccordion.tsx
│       ├── FAQSection.tsx
│       ├── MaintenanceGrid.tsx
│       ├── PackageCard.tsx
│       ├── PackageCarousel.tsx
│       ├── PackageSection.tsx
│       ├── PricingHeader.tsx
│       └── ProcessSection.tsx
├── data/
│   ├── companies.ts             # Record<Locale, Company[]>
│   ├── contacts.ts
│   ├── creators.ts              # Record<Locale, Creator[]>
│   ├── faq.ts
│   ├── packages.ts              # Planes y precios
│   ├── projects.ts              # Record<Locale, Project[]> + getProjectsByCreator()
│   ├── services.ts
│   ├── steps.ts
│   └── technologies.ts
├── hooks/
│   ├── useCopyToClipboard.ts
│   ├── useDragScroll.ts         # Drag en carousel — setPointerCapture lazy (solo tras 5px de movimiento)
│   └── useDraggableMarquee.ts
├── i18n/
│   ├── config.ts
│   ├── locale-provider.tsx
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
├── lib/
│   ├── animations.ts            # Variants de Framer Motion reutilizables
│   ├── cloudinary.ts            # cdnThumb() y cdnFull() — helpers de Cloudinary CDN
│   ├── gtag.ts                  # GA4 custom events (window.gtag wrapper tipado)
│   ├── page-transition.tsx      # PageTransitionProvider + AnimatedPage (swipe navigation)
│   └── utils.ts
├── hooks/
│   ├── useCopyToClipboard.ts
│   ├── useDragScroll.ts         # Drag en carousel — setPointerCapture lazy (solo tras 5px de movimiento)
│   ├── useDraggableMarquee.ts
│   └── useSwipeTrigger.ts       # Swipe direction detector (mobile only, threshold 60px)
├── messages/
│   ├── es.json
│   └── en.json
├── public/
│   ├── Pyrux-logo.svg
│   ├── og-image.png
│   └── robots.txt
└── types/
    ├── index.ts                 # Project, Company, Creator, Technology, SocialLinks, ServiceItem
    └── pricing.types.ts         # ServicePackage, MaintenanceItem, FAQItem, ProcessStep
```

---

## Arquitectura

### Patrón de páginas

Cada ruta es un **Server Component** que genera metadata y compone componentes. No existe el patrón `*PageClient.tsx`. La lógica interactiva vive en Client Components con nombres descriptivos.

### Landing Page (`app/[locale]/page.tsx`)

```tsx
<main>
    <Hero />
    <HeroButtons /> // CTAs: Contacto | Precios
    <FeaturedWork /> // Carousel proyectos Pyrux + carousel clientes
    <Services />
    <Team />
    <ContactUs />
    <StatsBar />   // métricas: proyectos, clientes, años
    <TechStack />
</main>
```

StarBackground y Footer vienen del `locale/layout.tsx`, no de cada página.

### Filtrado de proyectos

`creatorId: "pyrux"` → proyectos del estudio (landing + /projects). `creatorId: "gino"` / `"juan"` → proyectos personales en sus perfiles. `ItemGallery` recibe `creatorId` y filtra automáticamente.

### i18n

- `app/page.tsx` detecta `navigator.language` → redirect a `/es` o `/en`
- `vercel.json` redirige `/` → `/es` en Vercel
- Server Components: `getTranslations` | Client Components: `useTranslations` + `useLocale()`
- Datos bilingüales: `Record<Locale, T[]>` en `data/`

### Imágenes

Todas en **Cloudinary** (cloud `dj95v7mro`). En `data/` se guardan los **public IDs** (sin URL). Los componentes aplican el helper correspondiente:

- `cdnThumb(id)` → `q_40,w_600,f_webp` — cards y thumbnails
- `cdnFull(id)` → `q_auto,f_auto` — modales, lightboxes, fotos de perfil

Paths que empiezan con `/` pasan sin transformación (fallback local).

### Logos de empresas con tema

Cuando `company.logoDark` existe, renderizar ambas imágenes con clases de visibilidad CSS:

```tsx
const logos = company.logoDark
    ? [
          {
              src: cdnFull(company.logo),
              className: "logo-for-light w-full h-full object-contain",
          },
          {
              src: cdnFull(company.logoDark),
              className: "logo-for-dark w-full h-full object-contain",
          },
      ]
    : [
          {
              src: cdnFull(company.logo),
              className: "w-full h-full object-contain",
          },
      ];
```

`.logo-for-dark` / `.logo-for-light` están definidas en `globals.css`.

---

## Convenciones de Código

- TypeScript estricto — nunca `any`, `as any`, `@ts-ignore`
- Tailwind CSS para todos los estilos — nunca CSS inline
- Framer Motion para animaciones — nunca `useEffect` para animar
- Datos desde `data/` — nunca fetch, nunca backend
- Mobile first en todos los componentes
- `"use client"` solo cuando el componente necesita estado, efectos, Framer Motion, o event handlers
- No librerías fuera del stack

### Variants de animación (`lib/animations.ts`)

| Export                 | Uso                                            |
| ---------------------- | ---------------------------------------------- |
| `staggerContainer`     | Contenedor con stagger 0.08s                   |
| `staggerContainerFast` | Contenedor con stagger 0.06s                   |
| `fadeUpItem`           | Card/item estándar (opacity 0→1, y 20→0, 0.4s) |
| `fadeUpHeader`         | Heading de página (opacity 0→1, y 20→0, 0.5s)  |

Variantes locales solo si tienen lógica única (scale, custom prop, easing específico).

---

## Design System — Variables CSS

Definidas en `app/globals.css`. Se usan via Tailwind (`text-coral`, `bg-elevated`) o `var()` directos.

### Colores base
| Variable | Valor dark | Significado |
|---|---|---|
| `--bg-deep` | `#0a0604` | Fondo más oscuro (body) |
| `--bg-surface` | `#120d0a` | Fondo de superficies |
| `--bg-elevated` | `#1a130f` | Fondo de cards elevadas |
| `--coral-bright` | `#ff7b3d` | Coral principal (CTAs, accents) |
| `--coral-mid` | `#e8641f` | Coral medio |
| `--coral-dark` | `#a84510` | Coral oscuro |
| `--gold-bright` | `#d4a574` | Dorado/ámbar (acento secundario) |
| `--gold-mid` | `#9d7045` | Dorado oscuro |
| `--text-primary` | `#fef7f0` | Texto principal |
| `--text-secondary` | `#c9b5a0` | Texto secundario |
| `--text-muted` | `#8a7966` | Texto atenuado |
| `--border-subtle` | `rgba(201,181,160,0.14)` | Borde sutil |
| `--border-accent` | `rgba(255,123,61,0.32)` | Borde coral |

### Surfaces y sombras
| Variable | Color real |
|---|---|
| `--surface-coral-tint` | `rgba(255,123,61,0.14)` — tinte coral |
| `--surface-gold-tint` | `rgba(212,165,116,0.12)` — tinte dorado |
| `--shadow-coral-soft/mid/strong` | Sombras coral en opacidades 0.18 / 0.28 / 0.4 |
| `--shadow-gold-soft` | `rgba(212,165,116,0.16)` — sombra dorada |

### Tokens Tailwind (`@theme`)
| Token CSS | Clase Tailwind |
|---|---|
| `--color-coral` | `text-coral`, `bg-coral`, `border-coral` |
| `--color-gold` | `text-gold`, `bg-gold`, `border-gold` |
| `--color-gold-mid` | `text-gold-mid` |
| `--color-primary/secondary/muted` | `text-primary`, `text-secondary`, `text-muted` |
| `--color-deep/surface/elevated` | `bg-deep`, `bg-surface`, `bg-elevated` |
| `--color-border` | `border-border` |
| `--color-card/card-strong` | `bg-card`, `bg-card-strong` |
| `--color-gold-tint` | `bg-[var(--color-gold-tint)]` |
| `--color-coral-tint` | `bg-[var(--color-coral-tint)]` |

### Colores de planes (`--pkg-*`)
| Plan | Color | Variable base |
|---|---|---|
| Growth | Verde `#22c55e` | `--pkg-growth` |
| Pro | Coral (alias de `--color-coral`) | `--pkg-pro` |
| Business | Violeta `#a855f7` | `--pkg-business` |
| Personalizado | Ámbar `#f59e0b` | `--pkg-custom` |

---

## Datos de Contacto

| Canal     | Valor                                  |
| --------- | -------------------------------------- |
| LinkedIn  | `https://linkedin.com/company/pyrux`   |
| Email     | `pyrux@pyrux.com.ar`                   |
| WhatsApp  | `https://wa.me/5493416941225`          |
| Instagram | `https://www.instagram.com/pyrux_labs` |

---

## Deploy

- **Vercel** — static export (`output: 'export'`), `unoptimized: true` para imágenes
- `vercel.json` redirige `/` → `/es`
- Build genera `out/`

---

## TODOLIST

### Fase 6 — Accesibilidad

- [ ] **Color contrast**: verificar ratios dark y light (mínimo 4.5:1)
- [ ] **Skip navigation link**: "Saltar al contenido"

### Fase 7 — Testing

- [ ] **PageSpeed Insights**: objetivo > 90 en mobile
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile**: iOS Safari + Android Chrome, especialmente 350px

---

## Anti-patrones

- ❌ `any`, `as any`, `@ts-ignore`
- ❌ CSS inline
- ❌ `useEffect` para animaciones
- ❌ Fetch de datos — todo viene de `data/`
- ❌ Librerías fuera del stack
- ❌ Hardcodear strings de UI — usar `messages/` + `useTranslations`
- ❌ Patrón `*PageClient.tsx`
- ❌ Variants de Framer Motion duplicadas — usar `lib/animations.ts`
- ❌ Asumir la estructura de un componente sin leerlo primero
