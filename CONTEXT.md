# Contexto del Proyecto — Pyrux Portfolio

## Qué es esto

Portfolio web para Pyrux, una empresa/estudio de dos creadores. Muestra proyectos, empresas/clientes, tecnologías y los perfiles de los creadores.

---

## Stack Tecnológico

- **Next.js 14+** con App Router
- **TypeScript** en modo strict (nunca usar `any`)
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React Icons** / Lucide Icons

---

## Estructura de carpetas

```
src/
  app/                    → rutas (App Router)
    page.tsx              → homepage
    projects/             → página todos los proyectos
      ProjectPageClient.tsx  → ⚠️ TIENE BUG EN FILTRADO
    clients/              → página todas las empresas
    creator/[id]/         → página proyectos por creador
    not-found.tsx         → página 404 personalizada
  components/             → componentes reutilizables
  data/                   → archivos de datos locales (.ts)
    projects.ts
    companies.ts
    technologies.ts
    creators.ts
    values.ts
```

---

## Arquitectura de Componentes

### Jerarquía

```
Page (Server Component)
  └─> Section (Server Component)
      └─> ComponentWrapper (Server Component)
          └─> InteractiveComponent (Client Component)
```

### Regla de oro

- Mantené Server Components lo más arriba posible
- Solo usá `"use client"` en el componente más pequeño que necesite interactividad
- Si un componente usa hooks, eventos, o Framer Motion → necesita `"use client"`

---

## Datos y Tipos

### Origen de datos

Todo el contenido viene de archivos locales en `data/`. **No hay backend ni base de datos**.

### Tipos principales

```typescript
// Project
interface Project {
	id: string;
	title: string;
	description: string;
	shortDescription: string;
	technologies: string[];
	images: string[];
	liveUrl?: string;
	githubUrl?: string;
	creatorId: string;
	featured: boolean;
	date: string;
}

// Company
interface Company {
	id: string;
	name: string;
	logo: string;
	summary: string;
	workDescription: string;
	websiteUrl: string;
	testimonial?: string;
}

// Technology
interface Technology {
	id: string;
	name: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "devops" | "mobile" | "other";
	featured: boolean;
}

// Creator
interface Creator {
	id: string;
	name: string;
	bio: string;
	image: string;
	photos: string[];
	role: string;
	socialLinks: SocialLinks;
	featuredProjects: string[]; // IDs de proyectos
}
```

---

## Convenciones de Código

### Naming

- **Componentes**: PascalCase → `ProjectCard.tsx`
- **Funciones/variables**: camelCase → `getProjectById()`
- **Archivos de datos**: camelCase → `projects.ts`
- **Comentarios**: en español

### TypeScript

- Siempre tipar todo, **sin `any`**
- Usar interfaces para props de componentes
- Exportar tipos desde los archivos de datos

### Estilos

- Solo Tailwind CSS, no CSS inline
- Classes ordenadas: layout → spacing → colors → effects
- Usar las clases del tema personalizado

### Componentes

```tsx
// ✅ Estructura correcta de un Client Component
"use client";
import { motion } from "framer-motion";

interface ProjectCardProps {
	title: string;
	description: string;
	technologies: string[];
	onClick: () => void;
}

export function ProjectCard({
	title,
	description,
	technologies,
	onClick,
}: ProjectCardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.2 }}
			onClick={onClick}
			className="rounded-lg bg-gray-800 p-6">
			<h3 className="text-xl font-bold">{title}</h3>
			<p className="text-gray-400">{description}</p>
		</motion.div>
	);
}
```

### Importar datos

```tsx
import { projects } from "@/data/projects";
import { creators } from "@/data/creators";

// Filtrar datos
const featuredProjects = projects.filter((p) => p.featured);
const projectsByCreator = projects.filter((p) => p.creatorId === creatorId);
```

---

## Animaciones con Framer Motion

### Principios

- Transiciones menores a 300ms
- Stagger en listas/grids
- Animaciones de entrada en scroll con `whileInView`
- Hover effects con `whileHover`

### Ejemplos comunes

```tsx
// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>

// Slide up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
      {item}
    </motion.div>
  ))}
</motion.div>

// Scroll trigger
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>

// Expand/Collapse con AnimatePresence
import { AnimatePresence } from "framer-motion";

{isExpanded && (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* contenido colapsable */}
  </motion.div>
)}
```

---

## Diseño y UX

### Theme

- **Dark theme** principal
- Inspirado en openclaw.ai
- Glassmorphism y blur effects
- Glow effects en hover
- Gradient backgrounds

### Responsive (CRÍTICO)

- **Mobile**: < 640px → 1 columna, touch targets 44px mínimo
- **Tablet**: 640px - 1024px → 2 columnas
- **Desktop**: > 1024px → 3+ columnas
- **Todos los componentes DEBEN ser responsive**
- Hamburger menu en mobile si es necesario

### Accesibilidad

- Aria labels en elementos interactivos
- Keyboard navigation funcional
- Focus visible
- Semantic HTML

---

## Estado Actual del Proyecto

### ✅ Completado

**Setup y configuración**

- Next.js, TypeScript, Tailwind, ESLint configurados
- Sistema de colores, tipografía y spacing definidos

**Componentes base**

- Card, Modal, Tab, Carousel, Badge, Icon wrapper
- Button component reutilizable (primary, secondary, outline) — `components/ui/Button.tsx`

**Layout**

- Header/Navigation, Footer, 404 page
- ThemeToggle global en `layout.tsx` (visible en todas las páginas)
- Script anti-FOUC para tema persistente

**Secciones principales**

- Hero Section con animaciones duales (float + gradient shift simultáneos)
- Hero SVG con glow animado, gradient rotation y Framer Motion float
- Contact Button flotante
- Carousels de proyectos y empresas
- Modals (ProjectModal, CompanyModal)
- Tecnologías Section expandible (featured por defecto, View More/Less inline)
- Quiénes Somos con modal de creador
- Contact Section con copy-to-clipboard

**Páginas secundarias**

- `/projects` con filtros y búsqueda (corregido: AnimatePresence con popLayout)
- `/clients` con filtros
- `/creator/[id]` con grid de proyectos

**Datos y contenido**

- Todos los archivos de datos creados y poblados
- Types definidos

**SEO básico**

- Metadata, OG tags, sitemap.xml, robots.txt

**Arreglos recientes**

- Logo SVG (`public/Pyrux-logo.svg`) actualizado con gradient y glow (igual al hero)
- Bug de filtrado en `/projects` corregido (re-mount por AnimatePresence)
- Tema global aplicado en todas las páginas via layout.tsx

---

### 🚧 Próximos pasos (PRIORIDADES)

#### 🔴 PRIORIDAD MÁXIMA - URGENTE

1. **Responsive Design en TODOS los componentes**
   - ⚠️ Muchos componentes NO son responsive actualmente
   - Mobile (<640px): 1 columna, touch targets 44px mínimo, hamburger menu
   - Tablet (640-1024px): 2 columnas, layout intermedio
   - Desktop (>1024px): 3+ columnas, layout completo
   - Testear cada componente en diferentes viewports
   - Navigation adaptativa (hamburger en mobile)

2. ~~**Fix bug de filtrado en Projects Page**~~ ✅ COMPLETADO
   - Corregido: `AnimatePresence mode="wait"` con key causaba re-mount en cada keystroke
   - Solución: `AnimatePresence mode="popLayout"` con layout animations por item

#### 🟡 PRIORIDAD ALTA

3. ~~**Refactor de Tecnologías Section (expandir/colapsar)**~~ ✅ COMPLETADO
   - Implementado en `components/sections/OurStack.tsx`
   - Featured por defecto, botón View More/View Less con ChevronDown
   - AnimatePresence con tabs de categorías en ambos estados
   - Inline en la homepage, sin página separada

4. ~~**Button Component reutilizable**~~ ✅ COMPLETADO
   - Creado en `components/ui/Button.tsx`
   - Variantes: primary, secondary, outline
   - Tamaños: sm, md, lg
   - Framer Motion hover/tap, disabled state, focus-visible

#### 🟢 PRIORIDAD MEDIA

5. **Performance**
   - Code splitting
   - Lazy load de componentes pesados
   - Lighthouse score > 90

6. **Pre-deployment**
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Mobile testing (iOS y Android)
   - Limpiar console.logs
   - Build de producción sin errores

---

## 🎯 Especificaciones de Features Completadas

### ✅ Feature: Tecnologías Section Expandible — COMPLETADO

Implementado en `components/sections/OurStack.tsx`:

- Estado `isExpanded` controla featured vs todas
- Tabs de categorías funcionan en ambos estados
- Botón "View More (N+)" / "View Less" con ChevronDown animado
- AnimatePresence con stagger para animaciones suaves

---

### ✅ Bug: Filtrado en Projects Page — CORREGIDO

**Archivo:** `app/projects/ProjectsPageClient.tsx`

**Problema:** `AnimatePresence mode="wait"` con `key={search-selectedTech}` causaba que el grid completo se desmontara y remontara en cada keystroke, generando un efecto de flickering.

**Solución:** Cambiar a `AnimatePresence mode="popLayout"` envolviendo los items individuales con `layout` prop, animando entrada/salida por item sin re-montar el grid completo.

---

### ✅ Feature: Button Component — COMPLETADO

Creado en `components/ui/Button.tsx`:

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
	View More
</Button>
```

Props: variant (primary/secondary/outline), size (sm/md/lg), onClick, disabled, className, aria-label.

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

## Decisiones de Diseño (Por qué)

### Por qué no hay backend

- MVP rápido con contenido estático
- Fácil de deployar en Vercel
- Performance óptimo (todo pre-renderizado)

### Por qué Framer Motion

- Animaciones complejas más fáciles de implementar
- Mejor control sobre orchestration
- Stagger animations out-of-the-box
- API declarativa más mantenible

### Por qué dark theme

- Inspiración en OpenClaw
- Mejor para portfolios tech
- Los highlights de color son más impactantes

### Por qué App Router

- Futuro de Next.js
- Server Components por defecto (mejor performance)
- Layouts compartidos más simples

### Por qué expandir inline en lugar de página separada

- Menos clicks para el usuario
- Mantiene el contexto de la homepage
- Más rápido (no hay navegación)
- Consistente con UX modernas (acordeones, expand/collapse)

---

## 📊 Ejemplos de Estructura de Datos

### Technology con featured flag

```typescript
// technologies.ts
export const technologies: Technology[] = [
	{
		id: "react",
		name: "React",
		icon: "/icons/react.svg",
		category: "frontend",
		featured: true, // ← Se muestra por defecto
	},
	{
		id: "angular",
		name: "Angular",
		icon: "/icons/angular.svg",
		category: "frontend",
		featured: false, // ← Solo se ve al expandir
	},
	// ...
];

// Homepage - mostrar solo featured
const featuredTechs = technologies.filter((t) => t.featured);

// Al expandir - mostrar todas
const allTechs = technologies;
```

### Flujo de usuario (actualizado)

```
Usuario en Homepage
  ↓
Ve sección "Our Stack" con 13 tecnologías featured
  ↓
Click en "View More"
  ↓
Sección se expande inline con animación
  ↓
Ve TODAS las 50+ tecnologías
  ↓
Filtra por categoría "Backend" (tabs)
  ↓
Click en "View Less"
  ↓
Sección se colapsa, vuelve a mostrar solo featured
```

---

## Workflow de trabajo con IA

### 1. Antes de pedir código

- Describir qué necesito en lenguaje natural
- Mencionar si tiene dependencias con otros componentes
- Aclarar si necesito variantes o es un componente simple
- Indicar dónde va a vivir en la estructura
- **Mencionar si necesita ser responsive**

### 2. Al recibir código

- Revisar que siga las convenciones de este documento
- Verificar que no use librerías no listadas
- Checkear que los tipos estén correctos
- Confirmar que use Server/Client Component apropiadamente
- **Verificar que sea responsive**

### 3. Para debugging

- Compartir el error completo
- Mencionar qué ya intenté
- Indicar en qué navegador/dispositivo ocurre
- Adjuntar código relevante

### 4. Para refactoring

- Explicar qué no me gusta del código actual
- Dar contexto de por qué necesito cambiarlo
- Indicar restricciones (performance, accesibilidad, etc.)

---

## Glosario de términos

- **Featured**: Proyectos/tecnologías que se muestran por defecto (sin expandir)
- **Creator**: Los dos fundadores de Pyrux
- **Modal expandida**: Modal con toda la información vs card preview en carousel
- **Hero icon**: El logo/icono animado en la sección Hero
- **View More/Less**: Botón que expande/colapsa contenido inline
- **Glassmorphism**: Efecto visual con backdrop-blur y transparencia
- **Responsive**: Componente que funciona bien en mobile, tablet y desktop

---

## Instrucciones finales para la IA

1. **Seguí siempre las convenciones de este archivo**
2. **Usá los tipos ya definidos**, no los redefinas sin razón
3. **Si el componente usa datos**, importalos desde `data/`
4. **Si necesitás un componente que no existe**, avisame antes de asumirlo
5. **Marcá con `// TODO:`** lo que queda pendiente dentro del código
6. **Nunca uses `any`**
7. **Framer Motion** para todas las animaciones complejas
8. **Verificá que el componente sea Server o Client apropiadamente**
9. **Al crear componentes nuevos**, verificá primero si ya existe uno similar
10. **TODOS los componentes deben ser responsive** (mobile, tablet, desktop)
11. **Priorizá las tareas marcadas como 🔴 URGENTE** antes que nada

---

## Recursos útiles

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [OpenClaw (inspiración)](https://openclaw.ai)
