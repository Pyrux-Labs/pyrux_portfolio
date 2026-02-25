# TODO - Pyrux Portfolio Website

## 📋 FASE 1: CONFIGURACIÓN Y SETUP INICIAL

### Configuración del Proyecto

- [ ] Configurar variables de entorno (.env.local)
- [ ] Instalar dependencias necesarias (framer-motion, react-icons, etc.)
- [ ] Configurar Tailwind CSS con tema personalizado
- [ ] Configurar sistema de tipografía y colores base
- [ ] Configurar ESLint y Prettier
- [ ] Setup de estructura de carpetas (components, lib, types, data, hooks)

### Infraestructura y Tooling

- [ ] Configurar TypeScript strict mode
- [ ] Setup de testing (Jest + React Testing Library)
- [ ] Configurar Storybook (opcional, para componentes)
- [ ] Setup de Git hooks (Husky + lint-staged)

---

## 🎨 FASE 2: DISEÑO Y ASSETS

### Recursos Visuales

- [ ] Diseñar/obtener logo o icono de Pyrux
- [ ] Crear paleta de colores definitiva (inspirada en OpenClaw)
- [ ] Seleccionar tipografías (headings y body)
- [ ] Preparar imágenes de proyectos (optimizadas para web)
- [ ] Preparar fotos de los creadores
- [ ] Crear iconos SVG personalizados
- [ ] Crear favicon y meta images (OG images)

### Sistema de Diseño

- [ ] Definir spacing system
- [ ] Definir breakpoints responsive
- [ ] Crear guía de componentes base (buttons, cards, inputs)
- [ ] Definir sistema de animaciones y transiciones

---

## 🏗️ FASE 3: COMPONENTES BASE

### Componentes Reutilizables

- [ ] Button component (variantes: primary, secondary, outline)
- [ ] Card component (variantes: project, company, value, profile)
- [ ] Modal component (base reutilizable)
- [ ] Tab component (para tecnologías)
- [ ] Carousel/Slider component (base)
- [ ] Icon component wrapper
- [ ] Badge/Tag component (para tecnologías)
- [ ] Image component con lazy loading

### Layout Components

- [ ] Header/Navigation
- [ ] Footer
- [ ] Container/Section wrapper
- [ ] Grid system components
- [ ] Scroll indicators

---

## 🎯 FASE 4: SECCIONES PRINCIPALES

### 1. Hero Section (Top)

- [ ] Layout con título, subtítulo y descripción alineados a la derecha
- [ ] Icono/logo a la izquierda
- [ ] Animación de entrada del icono
- [ ] Interacción hover en el icono (estilo OpenClaw)
- [ ] Efectos de parallax o glassmorphism
- [ ] Responsive para mobile/tablet

### 2. Contact Button (Floating/Fixed)

- [ ] Botón flotante o en header
- [ ] Smooth scroll al footer
- [ ] Animación del botón
- [ ] Estado hover y active

### 3. Content Carousel (Proyectos y Empresas)

- [ ] Carousel superior - Proyectos
    - [ ] Diseño de cards de proyecto
    - [ ] Navegación del carousel (flechas, dots)
    - [ ] Auto-play opcional
    - [ ] Touch gestures para mobile
- [ ] Carousel inferior - Empresas/Clientes
    - [ ] Diseño de cards de empresa
    - [ ] Navegación del carousel
- [ ] Botones "View All" (2 botones separados)
- [ ] Modal/Card expandida al hacer click
    - [ ] Card de Proyecto:
        - [ ] Título
        - [ ] Descripción
        - [ ] Badges de tecnologías
        - [ ] Carousel de imágenes del proyecto
        - [ ] Link a página en vivo
        - [ ] Link a repositorio GitHub
        - [ ] Botón de cerrar
    - [ ] Card de Empresa:
        - [ ] Nombre de empresa
        - [ ] Resumen de la empresa
        - [ ] Descripción del trabajo realizado
        - [ ] Link a página de la empresa
        - [ ] Botón de cerrar

### 4. Páginas "View All"

- [ ] Página `/projects` - Todos los proyectos
    - [ ] Grid layout de cards
    - [ ] Filtros por tecnología
    - [ ] Búsqueda
    - [ ] Ordenar por fecha/nombre
    - [ ] Click abre modal con info completa
- [ ] Página `/companies` - Todas las empresas
    - [ ] Grid layout de cards
    - [ ] Filtros
    - [ ] Click abre modal con info completa

### 5. Tecnologías Section

- [ ] Tabs component (Frontend, Backend, Tools, etc.)
- [ ] Mostrar 10-15 tecnologías principales
- [ ] Grid de iconos con nombres
- [ ] Animación hover en cada tecnología
- [ ] Modal o expansión "View All"
    - [ ] Todas las tecnologías organizadas por categoría
    - [ ] Frontend
    - [ ] Backend
    - [ ] Databases
    - [ ] DevOps/Tools
    - [ ] Mobile
    - [ ] Other

### 6. Cards de Valores

- [ ] Diseñar 3 cards simples con valores
- [ ] Iconos representativos
- [ ] Títulos y descripciones
- [ ] Animación de entrada (stagger)
- [ ] Hover effects

### 7. Quiénes Somos Section

- [ ] Diseño de "carpeta Windows" (2 carpetas)
- [ ] Hover effect - fotos salen de la carpeta
- [ ] Click abre modal con info del creador
    - [ ] Imagen/foto
    - [ ] Nombre
    - [ ] Descripción CV/bio
    - [ ] Grid de 6 proyectos destacados (estilo GitHub)
    - [ ] Botón "Show All"
- [ ] Página `/creator/[id]` - Todos los proyectos del creador
    - [ ] Grid de todos los proyectos
    - [ ] Filtros y búsqueda

### 8. Contact Us Section (Footer)

- [ ] Links de contacto con iconos
    - [ ] LinkedIn (link externo)
    - [ ] Email (click para copiar al portapapeles + toast notification)
    - [ ] WhatsApp (link con número)
    - [ ] Instagram (link externo)
- [ ] Hover effects en cada link
- [ ] Feedback visual al copiar email
- [ ] Copyright y año actual

---

## 🎭 FASE 5: ANIMACIONES E INTERACCIONES

### Animaciones Generales

- [ ] Scroll reveal animations (Framer Motion)
- [ ] Page transitions
- [ ] Micro-interactions en botones
- [ ] Loading states
- [ ] Skeleton loaders para contenido

### Animaciones Específicas

- [ ] Hero icon animation (entrada + hover)
- [ ] Carousel transitions
- [ ] Modal open/close animations
- [ ] Tab switching animations
- [ ] Folder hover effect (fotos saliendo)
- [ ] Card hover effects
- [ ] Smooth scrolling entre secciones

### Gestos e Interacciones

- [ ] Swipe en carousels para mobile
- [ ] Keyboard navigation (accesibilidad)
- [ ] Focus states
- [ ] Click outside para cerrar modals

---

## 📊 FASE 6: DATOS Y CONTENIDO

### Estructura de Datos

- [ ] Crear types/interfaces TypeScript
    - [ ] Project type
    - [ ] Company type
    - [ ] Technology type
    - [ ] Creator type
    - [ ] Social link type
- [ ] Crear archivo de datos mock o JSON
    - [ ] projects.json/ts
    - [ ] companies.json/ts
    - [ ] technologies.json/ts
    - [ ] creators.json/ts
    - [ ] values.json/ts

### Content Management

- [ ] Agregar todos los proyectos (títulos, descripciones, imágenes)
- [ ] Agregar todas las empresas/clientes
- [ ] Listar todas las tecnologías por categoría
- [ ] Escribir bio de cada creador
- [ ] Definir valores de la empresa (3)
- [ ] Preparar meta descriptions para SEO

### Assets

- [ ] Optimizar todas las imágenes (WebP/AVIF)
- [ ] Crear versiones responsive de imágenes
- [ ] Iconos de tecnologías (SVG o PNGs optimizados)
- [ ] Logos de empresas clientes

---

## 🔧 FASE 7: FUNCIONALIDADES AVANZADAS

### Routing

- [ ] Configurar routes en Next.js App Router
    - [ ] `/` - Homepage
    - [ ] `/projects` - Todos los proyectos
    - [ ] `/companies` - Todas las empresas
    - [ ] `/creator/[id]` - Proyectos por creador
    - [ ] `/project/[id]` - Detalle de proyecto (opcional)
- [ ] Configurar dynamic routes
- [ ] Configurar metadata por página

### SEO y Performance

- [ ] Configurar metadata tags en cada página
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] Configurar next/image optimization
- [ ] Lazy loading de componentes pesados
- [ ] Code splitting
- [ ] Preload critical resources

### Accesibilidad

- [ ] Aria labels
- [ ] Keyboard navigation
- [ ] Focus management en modals
- [ ] Semantic HTML
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
- [ ] Lighthouse score > 90 en todas las categorías

### UX/UI Polish

- [ ] Revisar spacing y alineación en todas las secciones
- [ ] Verificar consistencia de colores
- [ ] Smooth scrolling behavior
- [ ] Loading states para todas las interacciones
- [ ] Error states
- [ ] Empty states
- [ ] 404 page personalizada
- [ ] Ajustes finales de responsive

---

## 🚀 FASE 10: DEPLOYMENT Y PRODUCCIÓN

### Pre-deployment

- [ ] Configurar variables de entorno para producción
- [ ] Remover console.logs y código de debug
- [ ] Verificar que no hay API keys expuestas
- [ ] Build de producción local (npm run build)
- [ ] Verificar que no hay errores en build
- [ ] Test de producción local (npm start)

### Hosting Setup

- [ ] Elegir proveedor de hosting
    - Opciones: Vercel, Netlify, AWS Amplify, DigitalOcean, etc.
- [ ] Configurar cuenta y proyecto
- [ ] Conectar repositorio Git
- [ ] Configurar build settings
- [ ] Configurar variables de entorno en hosting

### Dominio Personalizado

- [ ] Comprar dominio (GoDaddy, Namecheap, Google Domains, etc.)
- [ ] Configurar DNS records
- [ ] Agregar dominio personalizado al hosting
- [ ] Configurar SSL/TLS (HTTPS)
- [ ] Verificar propagación de DNS
- [ ] Setup de subdominios si es necesario

### CI/CD

- [ ] Configurar GitHub Actions o similar
- [ ] Pipeline de build automático
- [ ] Pipeline de tests
- [ ] Deploy automático en merge a main
- [ ] Preview deployments para PRs

### Monitoreo y Maintenance

- [ ] Configurar uptime monitoring (UptimeRobot, etc.)
- [ ] Configurar alerts de errores
- [ ] Setup de backups
- [ ] Configurar Google Search Console
- [ ] Submit sitemap a Google
- [ ] Configurar Web Analytics

---

## 📝 FASE 11: CONTENIDO Y DOCUMENTACIÓN

### Documentación

- [ ] README.md completo
    - [ ] Descripción del proyecto
    - [ ] Stack tecnológico
    - [ ] Instrucciones de instalación
    - [ ] Comandos disponibles
    - [ ] Estructura del proyecto
- [ ] Documentar componentes principales
- [ ] Documentar estructura de datos
- [ ] Guía de contribución (si aplica)

### Legal y Compliance

- [ ] Página de Privacy Policy
- [ ] Página de Terms of Service
- [ ] Cookie consent (si es necesario)
- [ ] Copyright notices

---

## 🔍 FASE 12: POST-LAUNCH

### Marketing y Promoción

- [ ] Compartir en redes sociales
- [ ] Agregar a portfolio personal
- [ ] Submit a directorios de diseño web
- [ ] Crear case study del proyecto

### Optimización Continua

- [ ] Revisar analytics después de 1 semana
- [ ] A/B testing de CTAs
- [ ] Optimizar SEO basado en performance
- [ ] Recopilar feedback de usuarios
- [ ] Iterar mejoras

### Mantenimiento

- [ ] Plan de actualización de dependencias
- [ ] Backups regulares de contenido
- [ ] Monitoring de uptime
- [ ] Renovación de dominio (recordatorio anual)
- [ ] Actualización de certificados SSL (auto-renovar)

---

## 🎯 COMPONENTES ESPECÍFICOS - DETALLE

### Component: Hero Section

- [ ] Layout container con grid de 2 columnas
- [ ] Texto alineado a la derecha (título, subtítulo, descripción)
- [ ] Icon/logo columna izquierda
- [ ] Framer Motion para animación de entrada del icono
- [ ] Hover state interactivo (scale, rotate, glow)
- [ ] Responsive: stack vertical en mobile
- [ ] Gradient background o efectos visuales

### Component: ContactButton

- [ ] Botón flotante fixed position
- [ ] Smooth scroll to footer con `scrollIntoView` o framer-motion
- [ ] Z-index apropiado
- [ ] Animación de pulso o bounce
- [ ] Hide/show según scroll position

### Component: ProjectCarousel

- [ ] Swiper o custom carousel
- [ ] Autoplay con pausa en hover
- [ ] Navigation arrows
- [ ] Pagination dots
- [ ] Responsive: 3 items desktop, 2 tablet, 1 mobile
- [ ] Click handler para abrir modal
- [ ] Lazy load de imágenes

### Component: CompanyCarousel

- [ ] Similar a ProjectCarousel
- [ ] Logos de empresas
- [ ] Hover effects
- [ ] Click para modal con info

### Component: ProjectModal

- [ ] Overlay con backdrop blur
- [ ] Título del proyecto
- [ ] Descripción completa
- [ ] Tags de tecnologías
- [ ] Image carousel interno
- [ ] Botones para:
    - [ ] Link a sitio en vivo
    - [ ] Link a GitHub repo
- [ ] Botón close (X)
- [ ] Close al click fuera
- [ ] Escape key para cerrar
- [ ] Animación de entrada/salida

### Component: CompanyModal

- [ ] Similar structure a ProjectModal
- [ ] Logo de empresa
- [ ] Resumen de empresa
- [ ] Descripción trabajo realizado
- [ ] Link a página de empresa
- [ ] Testimonial (opcional)

### Component: TechnologyTabs

- [ ] Tab navigation (Frontend, Backend, DevOps, etc.)
- [ ] Mostrar top 10-15 por tab
- [ ] Grid de iconos con labels
- [ ] Hover effects (scale, shadow)
- [ ] Tooltip con nombre completo
- [ ] Botón "View All"
- [ ] Expandir para mostrar todas las tecnologías
    - [ ] Organized por categorías
    - [ ] Collapsible sections
    - [ ] Búsqueda/filtro

### Component: ValueCards

- [ ] Container con 3 cards
- [ ] Icon + title + description
- [ ] Staggered animation on scroll
- [ ] Hover elevation effect
- [ ] Responsive: stack vertical en mobile

### Component: CreatorFolders (Quiénes Somos)

- [ ] 2 folders estilo Windows
- [ ] Diseño de folder icon/visual
- [ ] Hover state:
    - [ ] Fotos que salen de la carpeta
    - [ ] Animación con Framer Motion
    - [ ] 3-4 fotos por creador
- [ ] Click handler para abrir modal
- [ ] CreatorModal:
    - [ ] Imagen principal
    - [ ] Nombre
    - [ ] Bio/CV style description
    - [ ] Grid de 6 proyectos destacados (estilo GitHub cards)
        - [ ] Nombre proyecto
        - [ ] Descripción breve
        - [ ] Tech stack
        - [ ] Stars/metrics
    - [ ] Botón "Show All Projects"
- [ ] Página `/creator/[id]` - Todos los proyectos
    - [ ] Grid completo de proyectos
    - [ ] Filtros por tecnología
    - [ ] Back button

### Component: ContactSection

- [ ] Grid de links de contacto
- [ ] Icons sociales
- [ ] LinkedIn - link externo con icon
- [ ] Email - click to copy functionality
    - [ ] navigator.clipboard.writeText()
    - [ ] Toast/notification de "Copiado!"
    - [ ] Fallback para navegadores antiguos
- [ ] WhatsApp - link con número
- [ ] Instagram - link externo
- [ ] Hover effects en cada item
- [ ] Animación de entrada

---

## 🗃️ DATA STRUCTURE

### Crear archivos de datos:

- [ ] `data/projects.ts` - Array de proyectos

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

- [ ] `data/companies.ts` - Array de empresas

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

- [ ] `data/technologies.ts` - Array de tecnologías

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

- [ ] `data/creators.ts` - Array de creadores

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

- [ ] `data/values.ts` - 3 valores de la empresa

---

## 🎨 ESTILO Y THEMING (Inspirado en OpenClaw)

### Elementos de Diseño

- [ ] Dark theme con acentos de color
- [ ] Glassmorphism effects
- [ ] Gradient backgrounds
- [ ] Blur effects (backdrop-filter)
- [ ] Subtle animations
- [ ] Grid patterns o dots en background
- [ ] Glow effects en hover
- [ ] Smooth shadows

### Inspiración OpenClaw

- [ ] Estudiar componentes clave de openclaw.ai
- [ ] Adaptar su sistema de colores
- [ ] Replicar efectos de hover
- [ ] Adaptar animaciones de scroll
- [ ] Typography similar

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

- [ ] Mobile: < 640px
- [ ] Tablet: 640px - 1024px
- [ ] Desktop: > 1024px
- [ ] Large Desktop: > 1440px

### Ajustes por Dispositivo

- [ ] Hero: stack vertical en mobile
- [ ] Carousels: 1 item en mobile, 2 en tablet, 3 en desktop
- [ ] Modals: full screen en mobile
- [ ] Navigation: hamburger menu en mobile
- [ ] Grid layouts: ajustar columnas
- [ ] Typography scaling
- [ ] Touch targets > 44px en mobile

---

## 🔐 SEGURIDAD

- [ ] Validar todos los inputs (si hay formularios)
- [ ] Sanitizar contenido generado por usuario
- [ ] Configurar Content Security Policy (CSP)
- [ ] Configurar headers de seguridad
- [ ] HTTPS enforced
- [ ] Rate limiting en APIs (si aplica)
- [ ] Proteger variables de entorno

---

## 🌐 INTERNACIONALIZACIÓN (Opcional)

- [ ] Setup de i18n (next-intl o similar)
- [ ] Contenido en español
- [ ] Contenido en inglés
- [ ] Language switcher
- [ ] Locale routing

---

## ✅ CHECKLIST PRE-LAUNCH

### Funcional

- [ ] Todos los links funcionan
- [ ] Todas las imágenes cargan
- [ ] Modals abren y cierran correctamente
- [ ] Carousels navegan correctamente
- [ ] Botón de contacto scrollea correctamente
- [ ] Email copy to clipboard funciona
- [ ] Navegación entre páginas funciona
- [ ] Filtros y búsquedas funcionan

### Visual

- [ ] Sin errores de layout en ninguna página
- [ ] Responsive perfecto en mobile/tablet/desktop
- [ ] Animaciones fluidas (60fps)
- [ ] Sin flickering o layout shifts
- [ ] Consistencia de estilos
- [ ] Tipografía correcta en todos los viewports

### Performance

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] Cumulative Layout Shift < 0.1

### SEO

- [ ] Title tags únicos por página
- [ ] Meta descriptions en todas las páginas
- [ ] OG images configuradas
- [ ] Sitemap.xml generado
- [ ] robots.txt configurado
- [ ] Canonical URLs
- [ ] Schema.org markup (opcional)

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

- [ ] Framer Motion (animaciones)
- [ ] React Icons o Lucide Icons
- [ ] Swiper o Embla Carousel
- [ ] Sonner o React Hot Toast (notifications)
- [ ] Radix UI o HeadlessUI (components accesibles)
- [ ] Next Themes (dark mode si aplica)
- [ ] Sharp (optimización de imágenes)

### Development

- [ ] ESLint
- [ ] Prettier
- [ ] TypeScript strict mode
- [ ] Git + GitHub

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
