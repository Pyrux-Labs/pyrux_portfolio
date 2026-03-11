# Contexto del Proyecto — Pyrux Portfolio (v2)

## Qué es esto

Portfolio web para Pyrux, una empresa/estudio de dos creadores. Muestra proyectos, empresas/clientes, tecnologías, perfiles de los creadores, y una página de precios y paquetes de servicios. Toda la UI está en español.

---

## Stack Técnico

| Categoría   | Tecnología                                     |
| ----------- | ---------------------------------------------- |
| Framework   | Next.js 16.1.6 (App Router, Turbopack)         |
| React       | 19.2.3                                         |
| Lenguaje    | TypeScript 5                                   |
| Estilos     | Tailwind CSS v4 (`@tailwindcss/postcss`)       |
| Animaciones | Framer Motion 12.34.3                          |
| Iconos      | Lucide React + React Icons (tech icons)        |
| Toasts      | Sonner 2.0.7                                   |
| Fuente      | Manrope (Google Fonts)                         |
| Deploy      | Exportación estática (`output: 'export'`)      |
| Analytics   | Google Analytics (G-XD1K5TMVZ9)                |
| Compilador  | React Compiler (`babel-plugin-react-compiler`) |

---

## Estructura de Carpetas

```
pyrux_portfolio/
├── app/
│   ├── globals.css          # Variables CSS, temas dark/light
│   ├── layout.tsx           # Layout global (ThemeToggle, GA, anti-FOUC, Manrope)
│   ├── not-found.tsx        # Página 404
│   ├── page.tsx             # Landing principal (Server Component)
│   ├── clients/
│   │   ├── page.tsx         # Server Component con metadata
│   │   └── ClientsPageClient.tsx
│   ├── creator/
│   │   └── [id]/
│   │       ├── page.tsx     # SSG con generateStaticParams (juan, gino)
│   │       └── CreatorPageClient.tsx
│   ├── prices/
│   │   ├── page.tsx         # Server Component con metadata
│   │   └── PreciosPageClient.tsx  # Página de precios y paquetes
│   └── projects/
│       ├── page.tsx         # Server Component con metadata
│       └── ProjectsPageClient.tsx
├── components/
│   ├── cards/
│   │   ├── CompanyCard.tsx
│   │   └── ProjectCard.tsx  # Max 3 techs visibles + "+N"
│   ├── layout/
│   │   └── Footer.tsx       # Footer compartido (LinkedIn, email, WhatsApp, Instagram)
│   ├── modals/
│   │   ├── CompanyModal.tsx
│   │   ├── CreatorModal.tsx
│   │   └── ProjectModal.tsx # Sin GitHub link, "Ver en vivo" alineado derecha, ImageCarousel
│   ├── sections/
│   │   ├── ContactUs.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroButtons.tsx  # Botones: "Contacta con nosotros" + "Precios"
│   │   ├── OurProjects.tsx  # "Ver todos" (traducido)
│   │   ├── OurServices.tsx  # Link a /precios
│   │   ├── OurStack.tsx     # Tabs ocultos cuando colapsado
│   │   └── OurTeam.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Modal.tsx
│       ├── Section.tsx      # viewAllLabel default: "Ver todos"
│       ├── StarBackground.tsx
│       ├── TechIcon.tsx
│       └── ThemeToggle.tsx  # Mobile: top-left, Desktop: top-right
├── data/
│   ├── companies.ts
│   ├── creators.ts
│   ├── projects.ts
│   └── technologies.ts
├── hooks/
│   └── useCopyToClipboard.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── companies/           # Logos de empresas
│   └── creators/            # Fotos de creadores
└── types/
    └── index.ts
```

---

## Rutas de la Aplicación

| Ruta            | Tipo   | Descripción                               |
| --------------- | ------ | ----------------------------------------- |
| `/`             | Static | Landing principal con todas las secciones |
| `/projects`     | Static | Grid de todos los proyectos               |
| `/clients`      | Static | Grid de todas las empresas/clientes       |
| `/creator/[id]` | SSG    | Perfil de creador (juan, gino)            |
| `/prices`       | Static | Paquetes y precios de servicios           |
| `/_not-found`   | Static | Página 404                                |

---

## Arquitectura de Componentes

### Patrón Server/Client Component

Cada ruta con interactividad sigue el patrón:

```
app/ruta/page.tsx          → Server Component (metadata, imports)
app/ruta/RutaPageClient.tsx → Client Component ("use client", lógica, UI)
```

### Landing Page — Composición de Secciones

```tsx
// app/page.tsx
<StarBackground />
<Hero />
<HeroButtons />       // "Contacta con nosotros" + "Precios"
<OurProjects />       // Proyectos destacados + empresas/clientes
<OurServices />       // 6 servicios, link a /precios
<OurTeam />           // Creadores con modals
<OurStack />          // Tecnologías expandibles con tabs
<ContactUs />         // Formulario/info de contacto
<Footer />            // Links sociales
```

### Navegación

No hay navbar. La navegación se hace a través de:

- Botones en HeroButtons (landing → contacto, landing → precios)
- Links "Ver todos" en secciones (→ /projects, → /clients, → /precios)
- Botones "Volver al inicio" (← /) en páginas internas

---

## Tipos Principales

```typescript
// types/index.ts
interface Project {
	id;
	title;
	description;
	shortDescription;
	technologies: string[]; // IDs de Technology
	images: string[]; // URLs de imágenes
	liveUrl?;
	githubUrl?;
	featured: boolean;
	creators: string[]; // IDs de Creator
}

interface Company {
	id;
	name;
	logo;
	description;
	testimonial?;
	website?;
	featured: boolean;
}

type TechnologyCategory =
	| "frontend"
	| "backend"
	| "database"
	| "devops"
	| "mobile"
	| "other";

interface Technology {
	id;
	name;
	icon: string; // Nombre del icono de react-icons
	category: TechnologyCategory;
	featured: boolean;
}

interface Creator {
	id;
	name;
	role;
	bio;
	shortBio;
	photo;
	socialLinks: SocialLinks;
	featuredProjects: string[];
}

interface SocialLinks {
	linkedin?;
	github?;
	email?;
	whatsapp?;
	instagram?;
	website?;
}

interface Value {
	title;
	description;
	icon: string;
}
```

---

## Convenciones de Código

### General

- TypeScript estricto — nunca `any`, `as any`, ni `@ts-ignore`
- Props siempre tipadas con interfaces
- Tailwind CSS para todos los estilos — nunca CSS inline
- Mobile first (responsive design)
- Framer Motion para animaciones — nunca `useEffect` para animar
- Datos desde `data/` — nunca fetch ni backend
- `"use client"` solo cuando se necesita interactividad

### Patrones de Animación

```tsx
// Stagger con whileInView
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
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

### Tema Dark/Light

- Variables CSS en `globals.css` (`--color-bg`, `--color-text`, etc.)
- Script anti-FOUC en `layout.tsx` (lee localStorage antes del render)
- `ThemeToggle` en layout global — mobile top-left, desktop top-right

---

## Datos de Contacto (hardcoded)

| Canal     | Valor                                    |
| --------- | ---------------------------------------- |
| LinkedIn  | `https://linkedin.com/company/pyrux`     |
| Email     | `pyrux@pyrux.com.ar` (copy-to-clipboard) |
| WhatsApp  | `https://wa.me/5491112345678`            |
| Instagram | `https://instagram.com/pyrux.dev`        |

---

## Estado Actual — Cambios Recientes

### Traducciones a español

- "View all" → "Ver todos" (Section, OurProjects)
- "View More" / "View Less" → "Ver más" / "Ver menos" (OurStack)
- Toda la UI pública en español

### ProjectModal — Cambios

- Link a GitHub **eliminado** (no se muestra más)
- "Ver en vivo" alineado a la derecha
- **ImageCarousel** agregado entre descripción y tecnologías (carousel de imágenes del proyecto)

### ProjectCard — Tech badges

- Máximo 3 tecnologías visibles
- Texto más pequeño (`0.6rem`) con `opacity-70`
- Sin wrap, indicador `+N` si hay más de 3

### OurStack — Tabs

- Tabs de categorías **ocultos** cuando la sección está colapsada
- Se muestran solo al expandir

### ProjectsPageClient — Filtros eliminados

- Search bar eliminado
- Filtros de tecnología eliminados
- Se muestran todos los proyectos directamente

### ThemeToggle — Posición mobile

- Mobile: esquina superior izquierda (`left-2.5`)
- Desktop: esquina superior derecha (`sm:right-4 sm:left-auto`)

### HeroButtons — Botón de precios

- Segundo botón "Precios" que enlaza a `/precios`

### OurServices — Link a precios

- `viewAllHref="/precios"` con label "Ver paquetes y precios"

### Página de Precios (`/prices`)

- Página completa con 11 secciones: header, trust bar, propuesta de valor, 3 paquetes de servicio, proyectos especiales, mantenimiento, proceso de trabajo, stack tecnológico, FAQ con acordeones, CTA
- Server Component (`page.tsx`) + Client Component (`PreciosPageClient.tsx`)

### Footer en todas las páginas

- Footer compartido presente en: landing, projects, clients, creator/[id], prices

---

## 🐛 Bugs Conocidos

### Ruta de precios desalineada

- **Problema:** Los links en `HeroButtons` y `OurServices` apuntan a `/precios`, pero la carpeta real es `app/prices/` (ruta `/prices`).
- **Solución pendiente:** Renombrar `app/prices/` a `app/precios/` para que coincida con los links, O actualizar los links a `/prices`.

---

## Tareas Pendientes

### 🟢 Pre-deployment

- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile testing (iOS y Android)
- Limpiar console.logs
- Eliminar código inservible
- Eliminar comentarios de debug
- Eliminar estilos no usados
- Corregir bug de ruta `/precios` vs `/prices`

---

## ❌ Anti-patrones (NO hacer)

- ❌ NO uses `any`, ni `as any`, ni `@ts-ignore`
- ❌ NO crees componentes sin tipar las props
- ❌ NO uses CSS inline, siempre Tailwind
- ❌ NO uses librerías que no están en el stack definido
- ❌ NO asumas que un componente existe, preguntá primero
- ❌ NO uses `useEffect` para animaciones, usá Framer Motion
- ❌ NO hagas fetch de datos, todo viene de `data/`
- ❌ NO uses Server Components si el componente necesita interactividad
- ❌ NO pongas `"use client"` en componentes que no lo necesitan
- ❌ NO crees componentes sin pensar en responsive (mobile first)

---

## Decisiones de Diseño

### Por qué no hay backend

- MVP rápido con contenido estático
- Deploy en Vercel/GitHub Pages (`output: 'export'`)
- Performance óptimo (todo pre-renderizado)

### Por qué Framer Motion

- Animaciones complejas más fáciles
- Stagger animations out-of-the-box
- API declarativa más mantenible

### Por qué dark theme

- Inspiración en OpenClaw
- Mejor para portfolios tech
- Highlights de color más impactantes

### Por qué App Router

- Futuro de Next.js
- Server Components por defecto
- Layouts compartidos más simples

### Por qué no hay navbar

- Navegación integrada en secciones (links "Ver todos", botones "Volver al inicio")
- La landing es el hub principal — se accede a todo desde ahí
- Menos complejidad UI

---

## Workflow de trabajo con IA

### Antes de pedir código

- Describir qué necesito en lenguaje natural
- Mencionar dependencias con otros componentes
- Indicar dónde va a vivir en la estructura
- Mencionar si necesita ser responsive

### Al recibir código

- Verificar que siga las convenciones de este documento
- Verificar que no use librerías no listadas
- Checkear tipos correctos
- Confirmar Server/Client Component apropiado
- Verificar que sea responsive

### Para debugging

- Compartir el error completo
- Indicar en qué navegador/dispositivo ocurre

---

## Instrucciones para la IA

1. Seguí siempre las convenciones de este archivo
2. Usá los tipos ya definidos, no los redefinas sin razón
3. Si el componente usa datos, importalos desde `data/`
4. Si necesitás un componente que no existe, avisame antes
5. Nunca uses `any`
6. Framer Motion para todas las animaciones complejas
7. Verificá Server o Client Component apropiadamente
8. Al crear componentes nuevos, verificá si ya existe uno similar
9. TODOS los componentes deben ser responsive (mobile, tablet, desktop)

---

## Recursos útiles

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [OpenClaw (inspiración)](https://openclaw.ai)
