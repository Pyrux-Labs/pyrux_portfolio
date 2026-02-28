# Contexto del Proyecto — Pyrux Portfolio

## Qué es esto
Portfolio web para Pyrux, una empresa/estudio de dos creadores. Muestra proyectos, empresas/clientes, tecnologías y los perfiles de los creadores.

## Stack
- Next.js 14+ con App Router
- TypeScript en modo strict (nunca usar `any`)
- Tailwind CSS para estilos
- Framer Motion para animaciones
- React Icons / Lucide Icons

## Estructura de carpetas
```
src/
  app/               → rutas (App Router)
    page.tsx         → homepage
    projects/        → página todos los proyectos
    clients/         → página todas las empresas
    creator/[id]/    → página proyectos por creador
  components/        → componentes reutilizables
  data/              → archivos de datos locales (.ts)
    projects.ts
    companies.ts
    technologies.ts
    creators.ts
    values.ts
```

## Datos
Todo el contenido viene de archivos locales en `data/`. No hay backend ni base de datos. Los tipos están definidos en cada archivo de datos.

Tipos principales:
- `Project` → id, title, description, shortDescription, technologies, images, liveUrl, githubUrl, creatorId, featured, date
- `Company` → id, name, logo, summary, workDescription, websiteUrl, testimonial?
- `Technology` → id, name, icon, category, featured
- `Creator` → id, name, bio, image, photos, role, socialLinks, featuredProjects[]

## Convenciones de código
- Componentes: PascalCase → `ProjectCard.tsx`
- Funciones/variables: camelCase → `getProjectById()`
- Archivos de datos y utilidades: camelCase → `projects.ts`
- Comentarios en español
- Siempre tipar todo, sin `any`
- Server Components por defecto, "use client" solo cuando sea necesario (interactividad, hooks, framer-motion)

## Animaciones
- Framer Motion para todas las animaciones
- Transiciones menores a 300ms
- Stagger en listas/grids
- Animaciones de entrada en scroll con whileInView
- Hover effects con whileHover

## Diseño
- Dark theme
- Inspirado en openclaw.ai
- Glassmorphism y blur effects
- Glow en hover
- Responsive: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- Touch targets mínimo 44px en mobile

## Estado actual del proyecto

### ✅ Hecho
- Setup inicial (Next.js, TypeScript, Tailwind, ESLint)
- TypeScript strict mode
- Logo/icono de Pyrux
- Paleta de colores (inspirada en OpenClaw)
- Tipografías definidas
- Fotos de los creadores
- Iconos SVG personalizados
- Favicon y OG images
- Spacing system y breakpoints
- Sistema de animaciones definido
- Carousel de proyectos (cards diseñadas)
- Carousel de empresas (estructura)
- Botones "View All" (x2)
- Hover en el icono del Hero (estilo OpenClaw)
- React Icons instalado

### 🚧 Falta construir
- Hero Section completa (layout, animación de entrada, texto)
- Componentes base: Button, Card, Modal, Tab, Badge, Image lazy load
- Header/Navigation y Footer
- Modal de Proyecto (carousel interno, links live/github)
- Modal de Empresa
- Cards de empresa en carousel
- Sección Tecnologías con tabs por categoría
- Sección Quiénes Somos (folders con fotos, modal de creador)
- Sección Contacto (copy email al portapapeles, links sociales)
- Páginas /projects, /clients, /creator/[id]
- Archivos de datos en data/
- SEO, accesibilidad, performance
- Deploy en Vercel

## Instrucciones para la IA
- Seguí siempre las convenciones de este archivo
- Usá los tipos ya definidos, no los redefinas
- Si el componente usa datos, importalos desde data/
- Si necesitás un componente que todavía no existe, avisame antes de asumirlo
- Marcá con // TODO: lo que queda pendiente dentro del código
- Nunca uses any
- Framer Motion para todas las animaciones, nunca CSS transitions para cosas complejas
