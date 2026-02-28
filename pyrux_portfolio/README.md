# Pyrux Portfolio

Portfolio web para **Pyrux**, un estudio de desarrollo de dos creadores. Muestra proyectos, clientes, stack tecnológico y perfiles de los fundadores.

## Stack Tecnológico

- **Next.js 16** — App Router, exportación estática
- **React 19** — Con React Compiler habilitado
- **TypeScript** — Modo strict
- **Tailwind CSS v4** — Sistema de diseño con variables CSS
- **Framer Motion** — Animaciones de entrada, hover y transiciones
- **Lucide React** — Iconografía consistente
- **React Icons** — Iconos de tecnologías (Simple Icons)
- **Sonner** — Notificaciones toast

## Estructura del Proyecto

```
app/
  page.tsx              → Homepage (Hero, proyectos, servicios, stack, equipo, valores, contacto)
  layout.tsx            → Layout raíz con SEO metadata
  not-found.tsx         → Página 404 personalizada
  projects/             → /projects — Todos los proyectos con filtros
  clients/              → /clients — Todas las empresas/clientes
  creator/[id]/         → /creator/juan, /creator/gino — Proyectos por creador
components/             → Componentes reutilizables (Section, Modal, Badge, Cards, etc.)
data/                   → Datos locales (projects, companies, technologies, creators, values)
types/                  → Interfaces TypeScript globales
hooks/                  → Hooks personalizados (useCopyToClipboard)
lib/                    → Utilidades (cn)
public/                 → Assets estáticos, robots.txt, sitemap.xml
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción (exportación estática)
npm run build

# Lint
npm run lint
```

## Páginas

| Ruta            | Descripción                                                       |
| --------------- | ----------------------------------------------------------------- |
| `/`             | Homepage con todas las secciones                                  |
| `/projects`     | Grid de todos los proyectos con búsqueda y filtros por tecnología |
| `/clients`      | Grid de todas las empresas/clientes con modales de detalle        |
| `/creator/[id]` | Perfil del creador con sus proyectos                              |

## Diseño

- Tema oscuro con acentos coral (#ff4d4d) y cyan (#00e5cc)
- Tipografías: Clash Display (headings) y Satoshi (body) via FontShare
- Glassmorphism, backdrop blur, glow effects
- Animaciones Framer Motion con stagger en listas
- Responsive: mobile (<640px), tablet (640-1024px), desktop (>1024px)

## Deploy

Configurado para exportación estática (`output: 'export'`). Compatible con cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run build
# Los archivos estáticos se generan en /out
```
