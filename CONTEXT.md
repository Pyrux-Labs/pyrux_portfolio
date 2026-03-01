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

**Layout**

- Header/Navigation, Footer, 404 page

**Secciones principales**

- Hero Section con animación del icono
- Contact Button flotante
- Carousels de proyectos y empresas
- Modals (ProjectModal, CompanyModal)
- Tecnologías Section con tabs (muestra todas las tecnologías actualmente)
- Quiénes Somos con modal de creador
- Contact Section con copy-to-clipboard

**Páginas secundarias**

- `/projects` con filtros y búsqueda (⚠️ filtrado con bug)
- `/clients` con filtros
- `/creator/[id]` con grid de proyectos

**Datos y contenido**

- Todos los archivos de datos creados y poblados
- Types definidos

**SEO básico**

- Metadata, OG tags, sitemap.xml, robots.txt

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

2. **Fix bug de filtrado en Projects Page**
   - Archivo: `app/projects/ProjectPageClient.tsx`
   - Problema: El filtrado por tecnología no funciona correctamente
   - Revisar lógica de filtros
   - Revisar cómo se combinan búsqueda + filtros

#### 🟡 PRIORIDAD ALTA

3. **Refactor de Tecnologías Section (expandir/colapsar)**
   - Mostrar solo tecnologías featured (~13) por defecto
   - Botón "View More" que expande inline
   - Al expandir: muestra TODAS las tecnologías
   - Al expandir: botón cambia a "View Less"
   - NO crear página separada `/stack`
   - Animación smooth con Framer Motion (height: 0 → auto)
   - Mantener tabs de categorías en ambos estados
   - El contenido expandido debe estar en el mismo componente

4. **Button Component reutilizable**
   - Variantes: primary, secondary, outline
   - Usar el mismo estilo de los botones de Hero Section
   - Props: variant, size, onClick, disabled, children
   - Reutilizar en toda la app (reemplazar botones hardcodeados)

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

## 🎯 Especificaciones de Features Pendientes

### Feature: Tecnologías Section Expandible

**Comportamiento actual (❌):**

- Muestra TODAS las tecnologías en la homepage
- No hay opción de ver menos

**Comportamiento deseado (✅):**

- Por defecto: muestra solo tecnologías con `featured: true` (~13 tecnologías)
- Botón "View More" al final de la sección
- Al hacer click en "View More":
  - El contenido se expande con animación
  - Muestra TODAS las tecnologías (featured + no featured)
  - El botón cambia a "View Less"
- Al hacer click en "View Less":
  - El contenido se colapsa con animación
  - Vuelve a mostrar solo las featured
  - El botón vuelve a "View More"

**Implementación técnica:**

```tsx
// Estado
const [isExpanded, setIsExpanded] = useState(false);

// Filtrar tecnologías
const featuredTechs = technologies.filter(t => t.featured);
const displayedTechs = isExpanded ? technologies : featuredTechs;

// Botón
<button onClick={() => setIsExpanded(!isExpanded)}>
  {isExpanded ? "View Less" : "View More"}
</button>

// Grid con AnimatePresence
<AnimatePresence>
  <motion.div
    initial={{ height: "auto" }}
    animate={{ height: "auto" }}
    exit={{ height: 0 }}
    transition={{ duration: 0.3 }}
  >
    {displayedTechs.map(tech => <TechCard />)}
  </motion.div>
</AnimatePresence>
```

**Ubicación:**

- En la homepage, sección "Our Stack"
- NO crear página separada

---

### Bug: Filtrado en Projects Page

**Archivo afectado:**

- `app/projects/ProjectPageClient.tsx`

**Síntomas:**

- Los filtros por tecnología no funcionan bien
- Posible problema con la lógica de combinación de búsqueda + filtros
- Revisar cómo se filtran los proyectos cuando hay múltiples filtros activos

**Debugging sugerido:**

```tsx
// Verificar que los filtros se apliquen correctamente
const filteredProjects = projects.filter((project) => {
	// 1. Filtro de búsqueda
	const matchesSearch =
		searchQuery === "" ||
		project.title.toLowerCase().includes(searchQuery.toLowerCase());

	// 2. Filtro de tecnología
	const matchesTech =
		selectedTech === "all" || project.technologies.includes(selectedTech);

	// Ambos filtros deben cumplirse
	return matchesSearch && matchesTech;
});
```

---

### Feature: Button Component

**Props interface:**

```tsx
interface ButtonProps {
	variant: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
	disabled?: boolean;
	children: React.ReactNode;
	className?: string; // Para overrides específicos
}
```

**Estilos base (igual a botones de Hero):**

- Primary: fondo con color principal, hover con glow
- Secondary: fondo semi-transparente, hover con scale
- Outline: borde con color, hover con fill
- Todos con Framer Motion para hover effects

**Uso:**

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
	View More
</Button>
```

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
