# TODO - Pyrux Portfolio Website

## 📋 FASE 1: CONFIGURACIÓN Y SETUP INICIAL

### Configuración del Proyecto

- [x] Instalar dependencias necesarias (framer-motion, react-icons, etc.)
- [x] Configurar Tailwind CSS con tema personalizado
- [x] Configurar sistema de tipografía y colores base
- [x] Configurar ESLint y Prettier

### Infraestructura y Tooling

- [x] Configurar TypeScript strict mode

---

## 🎨 FASE 2: DISEÑO Y ASSETS

### Recursos Visuales

- [x] Diseñar/obtener logo o icono de Pyrux
- [x] Crear paleta de colores definitiva (inspirada en OpenClaw)
- [x] Seleccionar tipografías (headings y body)
- [ ] Preparar imágenes de proyectos (optimizadas para web)
- [x] Preparar fotos de los creadores
- [x] Crear iconos SVG personalizados
- [x] Crear favicon y meta images (OG images)

### Sistema de Diseño

- [x] Definir spacing system
- [x] Definir breakpoints responsive
- [x] Crear guía de componentes base (buttons, cards, inputs)
- [x] Definir sistema de animaciones y transiciones

---

## 🏗️ FASE 3: COMPONENTES BASE

### Componentes Reutilizables

- [x] Button component (variantes: primary, secondary, outline) — `components/ui/Button.tsx`
- [x] Card component (variantes: project, company, value, profile)
- [x] Modal component (base reutilizable)
- [x] Tab component (para tecnologías)
- [x] Carousel/Slider component (base)
- [x] Icon component wrapper
- [x] Badge/Tag component (para tecnologías)

### Layout Components

- [x] Footer
- [x] Container/Section wrapper
- [x] Grid system components

---

## 🎯 FASE 4: SECCIONES PRINCIPALES

### 1. Hero Section (Top)

- [x] Layout con título, subtítulo y descripción alineados a la derecha
- [x] Icono/logo a la derecha
- [x] Animación de entrada del icono
- [x] Interacción hover en el icono (estilo OpenClaw)
- [x] Efectos de parallax o glassmorphism
- [x] Responsive para mobile/tablet

### 2. Contact Button (Floating/Fixed)

- [x] Botón flotante o en header
- [x] Smooth scroll al footer
- [x] Animación del botón
- [x] Estado hover y active
- [x] ThemeToggle visible en todas las páginas (movido a layout.tsx)
- [x] Tema aplicado globalmente con prevención de FOUC

### 3. Content Carousel (Proyectos y Empresas)

- [x] Carousel superior - Proyectos
  - [x] Diseño de cards de proyecto
- [x] Carousel inferior - Empresas/Clientes
  - [x] Diseño de cards de empresa
  - [x] Navegación del carousel
- [x] Botones "View All" (2 botones separados)
- [x] Modal/Card expandida al hacer click
  - [x] Card de Proyecto:
    - [x] Título
    - [x] Descripción
    - [x] Badges de tecnologías
    - [x] Carousel de imágenes del proyecto
    - [x] Link a página en vivo
    - [x] Link a repositorio GitHub
    - [x] Botón de cerrar
  - [x] Card de Empresa:
    - [x] Nombre de empresa
    - [x] Resumen de la empresa
    - [x] Descripción del trabajo realizado
    - [x] Link a página de la empresa
    - [x] Botón de cerrar

### 4. Páginas "View All"

- [x] Página `/projects` - Todos los proyectos
  - [x] Grid layout de cards
  - [x] Filtros por tecnología
  - [x] Búsqueda
  - [x] Click abre modal con info completa
- [x] Página `/companies` - Todas las empresas
  - [x] Grid layout de cards
  - [x] Filtros
  - [x] Click abre modal con info completa

### 5. Tecnologías Section

- [x] Tabs component (Frontend, Backend, Tools, etc.)
- [x] Mostrar 10-15 tecnologías principales
- [x] Grid de iconos con nombres
- [x] Animación hover en cada tecnología
- [x] Modal o expansión "View All"
  - [x] Todas las tecnologías organizadas por categoría
  - [x] Frontend
  - [x] Backend
  - [x] Databases
  - [x] DevOps/Tools
  - [x] Mobile
  - [x] Other

### 7. Quiénes Somos Section

- [ ] Hover effect - fotos salen de la carpeta
- [x] Click abre modal con info del creador
  - [x] Imagen/foto
  - [x] Nombre
  - [x] Descripción CV/bio
  - [x] Grid de 6 proyectos destacados (estilo GitHub)
  - [x] Botón "Show All"
- [x] Página `/creator/[id]` - Todos los proyectos del creador
  - [x] Grid de todos los proyectos
  - [x] Filtros y búsqueda

### 8. Contact Us Section

- [x] Links de contacto con iconos
  - [x] LinkedIn (link externo)
  - [x] Email (click para copiar al portapapeles + toast notification)
  - [x] WhatsApp (link con número)
  - [x] Instagram (link externo)
- [x] Hover effects en cada link
- [x] Feedback visual al copiar email
- [x] Copyright y año actual

---

## 📊 FASE 6: DATOS Y CONTENIDO

### Estructura de Datos

- [x] Crear types/interfaces TypeScript
  - [x] Project type
  - [x] Company type
  - [x] Technology type
  - [x] Creator type
  - [x] Social link type
- [x] Crear archivo de datos mock o JSON
  - [x] projects.json/ts
  - [x] companies.json/ts
  - [x] technologies.json/ts
  - [x] creators.json/ts
  - [x] values.json/ts

### Content Management

- [x] Agregar todos los proyectos (títulos, descripciones, imágenes)
- [x] Agregar todas las empresas/clientes
- [x] Listar todas las tecnologías por categoría
- [x] Escribir bio de cada creador
- [x] Definir valores de la empresa (3)
- [x] Preparar meta descriptions para SEO

### Assets

- [ ] Optimizar todas las imágenes (WebP/AVIF)
- [ ] Crear versiones responsive de imágenes
- [ ] Iconos de tecnologías (SVG o PNGs optimizados)
- [ ] Logos de empresas clientes

---

## 🔧 FASE 7: FUNCIONALIDADES AVANZADAS

### Routing

- [x] Configurar routes en Next.js App Router
  - [x] `/` - Homepage
  - [x] `/projects` - Todos los proyectos
  - [x] `/clients` - Todas las empresas
- [x] Configurar dynamic routes
- [x] Configurar metadata por página

### SEO y Performance

- [x] Configurar metadata tags en cada página
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] sitemap.xml
- [x] robots.txt
- [ ] Configurar next/image optimization
- [ ] Code splitting
- [ ] Preload critical resources

### Accesibilidad

- [x] Aria labels
- [x] Keyboard navigation
- [x] Focus management en modals
- [x] Semantic HTML
- [ ] Alt texts en imágenes
- [ ] Color contrast compliance (WCAG AA)
- [ ] Screen reader testing

### Analytics y Tracking

- [ ] Google Analytics 4 setup
- [ ] Event tracking (clicks, modal views, etc.)
- [ ] Conversion tracking
- [ ] Error tracking (Sentry o similar)

---

## 🧪 FASE 8: TESTING

### Tests Unitarios

- [ ] Tests para componentes base
- [ ] Tests para utilities/helpers
- [ ] Tests para hooks personalizados

### Tests de Integración

- [ ] Tests de navegación entre páginas
- [ ] Tests de funcionalidad de carousel
- [ ] Tests de modals
- [ ] Tests de formularios (si hay)

### Tests E2E

- [ ] Setup de Playwright o Cypress
- [ ] Test de flujo completo de usuario
- [ ] Test de responsive en diferentes viewports
- [ ] Test de navegación principal

### Testing Manual

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS y Android)
- [ ] Tablet testing
- [ ] Testing de performance con Lighthouse

---

## ⚡ FASE 9: OPTIMIZACIÓN

### Performance

- [ ] Optimizar bundle size (analizar con @next/bundle-analyzer)
- [ ] Implementar dynamic imports donde sea necesario
- [ ] Optimizar imágenes (formato, tamaño, lazy loading)
- [ ] Configurar caching headers
- [ ] Minificar CSS y JS
- [ ] Eliminar código no usado
- [x] Lighthouse score > 90 en todas las categorías

### UX/UI Polish

- [x] Revisar spacing y alineación en todas las secciones
- [x] 404 page personalizada
- [x] Ajustes finales de responsive

---

## 🚀 FASE 10: DEPLOYMENT Y PRODUCCIÓN

### Pre-deployment

- [x] Configurar variables de entorno para producción
- [x] Remover console.logs y código de debug
- [x] Build de producción local (npm run build)
- [x] Verificar que no hay errores en build
- [x] Test de producción local (npm start)

### Hosting Setup

- [ ] Elegir proveedor de hosting
  - Opciones: Vercel, Netlify, AWS Amplify, DigitalOcean, etc.
- [ ] Configurar cuenta y proyecto
- [ ] Conectar repositorio Git
- [ ] Configurar build settings
- [ ] Configurar variables de entorno en hosting

### Dominio Personalizado

- [x] Comprar dominio (GoDaddy, Namecheap, Google Domains, etc.)
- [ ] Configurar DNS records
- [ ] Agregar dominio personalizado al hosting
- [ ] Configurar SSL/TLS (HTTPS)
- [x] Verificar propagación de DNS
- [x] Setup de subdominios si es necesario

### CI/CD

- [x] Configurar GitHub Actions o similar
- [x] Pipeline de build automático
- [x] Pipeline de tests
- [x] Deploy automático en merge a main
- [x] Preview deployments para PRs

### Monitoreo y Maintenance

- [x] Configurar uptime monitoring (UptimeRobot, etc.)
- [x] Configurar alerts de errores
- [x] Setup de backups
- [x] Configurar Google Search Console
- [x] Submit sitemap a Google
- [x] Configurar Web Analytics

---

## 📝 FASE 11: CONTENIDO Y DOCUMENTACIÓN

### Documentación

- [x] README.md completo
  - [x] Descripción del proyecto
  - [x] Stack tecnológico
  - [x] Instrucciones de instalación
  - [x] Comandos disponibles
  - [x] Estructura del proyecto
- [x] Documentar componentes principales
- [x] Documentar estructura de datos
- [x] Guía de contribución (si aplica)

---

## 🔍 FASE 12: POST-LAUNCH

### Marketing y Promoción

- [x] Compartir en redes sociales
- [x] Agregar a portfolio personal
- [x] Submit a directorios de diseño web
- [x] Crear case study del proyecto

### Optimización Continua

- [x] Revisar analytics después de 1 semana
- [x] A/B testing de CTAs
- [x] Optimizar SEO basado en performance
- [x] Recopilar feedback de usuarios
- [x] Iterar mejoras

### Mantenimiento

- [x] Plan de actualización de dependencias
- [x] Backups regulares de contenido
- [x] Monitoring de uptime
- [x] Renovación de dominio (recordatorio anual)
- [x] Actualización de certificados SSL (auto-renovar)

---

## 🎯 COMPONENTES ESPECÍFICOS - DETALLE

### Component: Hero Section

- [x] Layout container con grid de 2 columnas
- [x] Texto alineado a la derecha (título, subtítulo, descripción)
- [x] Icon/logo columna izquierda
- [x] Framer Motion para animación de entrada del icono
- [x] Dual animation: float + gradient shift simultáneos
- [x] SVG glow animation con filter drop-shadow
- [x] SVG gradient rotation con animateTransform
- [x] Hover state interactivo (scale, glow intensificado)
- [x] Responsive: stack vertical en mobile
- [x] Gradient background o efectos visuales

### Component: ContactButton

- [x] Botón flotante fixed position
- [x] Smooth scroll to footer con `scrollIntoView` o framer-motion
- [x] Z-index apropiado
- [x] Animación de pulso o bounce
- [x] Hide/show según scroll position

### Component: ProjectCarousel

- [x] Swiper o custom carousel
- [x] Autoplay con pausa en hover
- [x] Navigation arrows
- [x] Pagination dots
- [x] Responsive: 3 items desktop, 2 tablet, 1 mobile
- [x] Click handler para abrir modal
- [x] Lazy load de imágenes

### Component: CompanyCarousel

- [x] Similar a ProjectCarousel
- [x] Logos de empresas
- [x] Hover effects
- [x] Click para modal con info

### Component: ProjectModal

- [x] Overlay con backdrop blur
- [x] Título del proyecto
- [x] Descripción completa
- [x] Tags de tecnologías
- [x] Image carousel interno
- [x] Botones para:
  - [x] Link a sitio en vivo
  - [x] Link a GitHub repo
- [x] Botón close (X)
- [x] Close al click fuera
- [x] Escape key para cerrar
- [x] Animación de entrada/salida

### Component: CompanyModal

- [x] Similar structure a ProjectModal
- [x] Logo de empresa
- [x] Resumen de empresa
- [x] Descripción trabajo realizado
- [x] Link a página de empresa
- [x] Testimonial (opcional)

### Component: TechnologyTabs

- [x] Tab navigation (Frontend, Backend, DevOps, etc.)
- [x] Mostrar top 10-15 por tab
- [x] Grid de iconos con labels
- [x] Hover effects (scale, shadow)
- [x] Tooltip con nombre completo
- [x] Botón "View All"
- [x] Expandir para mostrar todas las tecnologías
  - [x] Organized por categorías
  - [x] Collapsible sections
  - [x] Búsqueda/filtro

### Component: ValueCards

- [x] Container con 3 cards
- [x] Icon + title + description
- [x] Staggered animation on scroll
- [x] Hover elevation effect
- [x] Responsive: stack vertical en mobile

### Component: CreatorFolders (Quiénes Somos)

- [x] 2 folders estilo Windows
- [x] Diseño de folder icon/visual
- [ ] Hover state:
  - [ ] Fotos que salen de la carpeta
  - [ ] Animación con Framer Motion
  - [ ] 3-4 fotos por creador
- [x] Click handler para abrir modal
- [x] CreatorModal:
  - [x] Imagen principal
  - [x] Nombre
  - [x] Bio/CV style description
  - [x] Grid de 6 proyectos destacados (estilo GitHub cards)
    - [x] Nombre proyecto
    - [x] Descripción breve
    - [x] Tech stack
    - [x] Stars/metrics
  - [x] Botón "Show All Projects"
- [x] Página `/creator/[id]` - Todos los proyectos
  - [x] Grid completo de proyectos
  - [x] Filtros por tecnología
  - [x] Back button

### Component: ContactSection

- [x] Grid de links de contacto
- [x] Icons sociales
- [x] LinkedIn - link externo con icon
- [x] Email - click to copy functionality
  - [x] navigator.clipboard.writeText()
  - [x] Toast/notification de "Copiado!"
  - [x] Fallback para navegadores antiguos
- [x] WhatsApp - link con número
- [x] Instagram - link externo
- [x] Hover effects en cada item
- [x] Animación de entrada

---

## 🗃️ DATA STRUCTURE

### Crear archivos de datos:

- [x] `data/projects.ts` - Array de proyectos

  ```typescript
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
  ```

- [x] `data/companies.ts` - Array de empresas

  ```typescript
  interface Company {
  	id: string;
  	name: string;
  	logo: string;
  	summary: string;
  	workDescription: string;
  	websiteUrl: string;
  	testimonial?: string;
  }
  ```

- [x] `data/technologies.ts` - Array de tecnologías

  ```typescript
  interface Technology {
  	id: string;
  	name: string;
  	icon: string;
  	category:
  		| "frontend"
  		| "backend"
  		| "database"
  		| "devops"
  		| "mobile"
  		| "other";
  	featured: boolean;
  }
  ```

- [x] `data/creators.ts` - Array de creadores

  ```typescript
  interface Creator {
  	id: string;
  	name: string;
  	bio: string;
  	image: string;
  	photos: string[];
  	role: string;
  	socialLinks: SocialLinks;
  	featuredProjects: string[]; // IDs
  }
  ```

- [x] `data/values.ts` - 3 valores de la empresa

---

## 🎨 ESTILO Y THEMING (Inspirado en OpenClaw)

### Elementos de Diseño

- [x] Dark theme con acentos de color
- [x] Glassmorphism effects
- [x] Gradient backgrounds
- [x] Blur effects (backdrop-filter)
- [x] Subtle animations
- [x] Grid patterns o dots en background
- [x] Glow effects en hover
- [x] Smooth shadows

### Inspiración OpenClaw

- [x] Estudiar componentes clave de openclaw.ai
- [x] Adaptar su sistema de colores
- [x] Replicar efectos de hover
- [x] Adaptar animaciones de scroll
- [x] Typography similar

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

- [x] Mobile: < 640px
- [x] Tablet: 640px - 1024px
- [x] Desktop: > 1024px
- [x] Large Desktop: > 1440px

### Ajustes por Dispositivo

- [x] Hero: stack vertical en mobile
- [x] Modals: full screen en mobile
- [x] Grid layouts: ajustar columnas
- [x] Typography scaling
- [x] Touch targets > 44px en mobile

---

## 🌐 INTERNACIONALIZACIÓN (Opcional)

- [x] Setup de i18n (next-intl o similar)
- [x] Contenido en español
- [x] Contenido en inglés
- [x] Language switcher
- [x] Locale routing

---

## ✅ CHECKLIST PRE-LAUNCH

### Funcional

- [x] Todos los links funcionan
- [x] Todas las imágenes cargan
- [x] Modals abren y cierran correctamente
- [x] Carousels navegan correctamente
- [x] Botón de contacto scrollea correctamente
- [x] Email copy to clipboard funciona
- [x] Navegación entre páginas funciona
- [x] Filtros y búsquedas funcionan

### Visual

- [x] Sin errores de layout en ninguna página
- [x] Responsive perfecto en mobile/tablet/desktop
- [x] Animaciones fluidas (60fps)
- [x] Sin flickering o layout shifts
- [x] Consistencia de estilos
- [x] Tipografía correcta en todos los viewports

### Performance

- [x] Lighthouse Performance > 90
- [x] Lighthouse Accessibility > 90
- [x] Lighthouse Best Practices > 90
- [x] Lighthouse SEO > 90
- [x] First Contentful Paint < 1.5s
- [x] Time to Interactive < 3.5s
- [x] Cumulative Layout Shift < 0.1

### SEO

- [x] Title tags únicos por página
- [x] Meta descriptions en todas las páginas
- [x] OG images configuradas
- [x] Sitemap.xml generado
- [x] robots.txt configurado
- [x] Canonical URLs
- [x] Schema.org markup (opcional)

### Compatibilidad

- [ ] Chrome (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Edge (últimas 2 versiones)
- [ ] iOS Safari
- [ ] Chrome Android

---

## 🎉 LAUNCH

- [ ] Deploy final a producción
- [ ] Verificar dominio personalizado funciona
- [ ] Verificar SSL activo
- [ ] Test final de todos los flujos
- [ ] Monitoring activo
- [ ] Analytics funcionando
- [ ] Anunciar lanzamiento

---

## 📈 POST-LAUNCH

### Semana 1

- [ ] Monitorear errores
- [ ] Revisar analytics
- [ ] Fix bugs críticos
- [ ] Recopilar feedback inicial

### Mes 1

- [ ] Análisis de métricas
- [ ] Optimizaciones basadas en datos
- [ ] Actualizar contenido si es necesario
- [ ] SEO adjustments

### Mantenimiento Continuo

- [ ] Actualizar proyectos nuevos
- [ ] Actualizar tecnologías
- [ ] Mantener dependencias actualizadas
- [ ] Renovar certificados y dominio
- [ ] Responder a feedback de usuarios

---

## 🛠️ STACK TECNOLÓGICO SUGERIDO

### Core

- [x] Next.js 14+ (App Router)
- [x] React 18+
- [x] TypeScript
- [x] Tailwind CSS

### Librerías Recomendadas

- [x] Framer Motion (animaciones)
- [x] React Icons o Lucide Icons
- [ ] Radix UI o HeadlessUI (components accesibles)
- [ ] Sharp (optimización de imágenes)

### Development

- [x] ESLint
- [x] Prettier
- [x] TypeScript strict mode
- [x] Git + GitHub

### Deployment

- [ ] Vercel (recomendado para Next.js)
- [ ] Dominio personalizado
- [ ] SSL incluido
- [ ] CDN global

---

## 💡 NOTAS Y CONSIDERACIONES

### Performance Tips

- Usar next/image para todas las imágenes
- Lazy load componentes pesados (dynamic import)
- Minimizar uso de librerías grandes
- Considerar AVIF sobre WebP cuando sea posible

### UX Tips

- Indicadores de estado siempre visibles
- Feedback inmediato en todas las acciones
- Loading states profesionales
- Transiciones de menos de 300ms

### Accesibilidad

- Keyboard navigation en todos los componentes interactivos
- Focus visible en todos los elementos
- Aria labels descriptivos
- Contraste de color suficiente

---

**Prioridad de Desarrollo:**

1. ✅ Setup inicial y configuración
2. 🎨 Componentes base y sistema de diseño
3. 🏗️ Secciones principales de la homepage
4. 🔗 Páginas secundarias (/projects, /companies, /creator)
5. ✨ Animaciones y polish
6. 🧪 Testing y optimización
7. 🚀 Deployment y producción
8. 📈 Post-launch y mantenimiento
