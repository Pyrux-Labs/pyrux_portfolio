# Architecture

**Analysis Date:** 2026-03-19

## Pattern Overview

**Overall:** Server-Component-Driven Static Export with Client Islands

This is a **Next.js 16 App Router** application using **static export** (`output: 'export'`) architecture. The app follows a hybrid Server/Client Component pattern: most pages are Server Components that render metadata and structured data, while interactive features are isolated in Client Components (UI sections, modals, state management). All content is statically imported from TypeScript data files—no API calls, no database, fully pre-rendered.

**Key Characteristics:**
- **Static-first design**: No dynamic server routes; everything pre-renders to static HTML
- **Server/Client separation**: Clear boundary between metadata/layout (Server) and interactivity (Client)
- **Data-driven content**: Single source of truth in `data/` files with helper functions
- **Type-safe**: Strict TypeScript with centralized type definitions
- **Framer Motion for all animations**: No CSS animations or useEffect-based timing
- **CSS variables for theming**: Dark/light mode via localStorage and CSS variables
- **Modular components**: Reusable cards, sections, modals with explicit props

## Layers

**Presentation Layer (UI Components):**
- Purpose: Render UI using React, Framer Motion, and Tailwind CSS
- Location: `components/` (sections, cards, modals, UI primitives)
- Contains: React components, animation variants, styled with Tailwind classes
- Depends on: Types from `types/index.ts`, data via props
- Used by: Pages and other components

**Page Layer (Routes):**
- Purpose: Handle routing, metadata, and SEO (Server Components)
- Location: `app/*/page.tsx` (Server Components only)
- Contains: Metadata exports, JSON-LD structured data, component composition
- Depends on: Data files for meta generation, Client Components for rendering
- Used by: Next.js router; renders to static HTML during build

**Client Component Layer (Interactivity):**
- Purpose: Manage state, handle events, render interactive UI
- Location: `app/*/PageClient.tsx` and interactive components (marked with `"use client"`)
- Contains: useState, onClick handlers, modal state, animations
- Depends on: Types, data files, utility hooks
- Used by: Server Components via composition

**Data Layer (Static Content):**
- Purpose: Single source of truth for all content
- Location: `data/` (exported arrays and helper functions)
- Contains: `projects[]`, `companies[]`, `creators[]`, `technologies[]`, `services[]`, `packages[]`, `faq[]`, `steps[]`
- Depends on: Type definitions from `types/index.ts`
- Used by: Components and pages to render content

**Type Layer:**
- Purpose: Define domain models
- Location: `types/index.ts` (centralized)
- Contains: `Project`, `Company`, `Creator`, `Technology`, `SocialLinks`, `Value`, `ServiceItem`, `ContactItem`
- Depends on: Nothing (pure types)
- Used by: All components, pages, and data files

**Utility Layer:**
- Purpose: Helper functions, hooks, and utilities
- Location: `lib/` and `hooks/`
- Contains: `cn()` for class merging, `useCopyToClipboard` for clipboard operations
- Depends on: React, types
- Used by: Components throughout

**Layout Layer:**
- Purpose: Global structure, theme management, metadata
- Location: `app/layout.tsx` (Root Layout), `components/layout/Footer.tsx`
- Contains: HTML structure, theme toggle, fonts, JSON-LD schemas
- Depends on: Data (FAQ for schema), components
- Used by: All pages wrapped by Next.js

## Data Flow

**Homepage Render Flow:**

1. Request comes to `/` (Next.js router)
2. `app/page.tsx` (Server Component) executes—no interactivity logic
3. Page imports and renders section components (`Hero`, `OurProjects`, etc.)
4. Section components are mostly Client Components (`"use client"`)—they manage modal state and animations
5. Section components import data from `data/projects.ts`, `data/companies.ts`, etc.
6. Framer Motion animates on mount and scroll (via `whileInView`)
7. User clicks a project card → `setSelectedProject()` updates state → modal opens
8. Modal uses `components/modals/ProjectModal.tsx` to display rich content

**Detail Page Render Flow (e.g., `/creator/[id]`):**

1. Request to `/creator/juan`
2. `app/creator/[id]/page.tsx` (Server Component):
   - Calls `generateStaticParams()` to pre-render all creators
   - Calls `generateMetadata()` to create dynamic SEO metadata
   - Imports `CreatorPageClient` and passes `creatorId` prop
3. `CreatorPageClient` (marked `"use client"`):
   - Uses `getCreatorById(creatorId)` to fetch creator from data
   - Manages `selectedProject` state for modal
   - Renders creator info and project grid

**State Management:**
- **Local Component State**: Used for modal visibility and selected items (via `useState`)
- **URL Params**: Used to identify resources (e.g., `[id]` in dynamic routes)
- **localStorage**: Used to persist theme preference (dark/light mode)
- **No global state management**: The app is small and static; local state suffices

## Key Abstractions

**Section Component:**
- Purpose: Reusable wrapper for content sections with title, "View All" links, and animations
- Examples: `OurProjects`, `OurTeam`, `OurStack`, `ContactUs` (all wrap `<Section>`)
- Pattern: Receives `id`, `title`, `viewAllHref`, `children`; renders with fade-in animation
- File: `components/ui/Section.tsx`

**Modal Pattern:**
- Purpose: Display detailed content (project, creator, company) in a fullscreen-on-mobile, centered-on-desktop container
- Examples: `ProjectModal`, `CompanyModal`, `CreatorModal`
- Pattern: Generic `Modal` component handles animation, Escape key, backdrop; child components provide content
- Files: `components/ui/Modal.tsx`, `components/modals/*.tsx`

**Card Components:**
- Purpose: Reusable card designs for projects, companies, packages, services, maintenance items
- Examples: `ProjectCard`, `CompanyCard`, `PackageCard`, `MaintenanceCard`
- Pattern: Accept data object + onClick handler; handle own animations with Framer Motion
- Files: `components/cards/*.tsx`

**Animation Variants:**
- Purpose: Centralize Framer Motion configurations for consistency
- Pattern: Defined as objects (`containerVariants`, `itemVariants`) at component scope, reused in multiple `<motion.X>` elements
- Example (from `Hero.tsx`):
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

<motion.header variants={containerVariants} initial="hidden" animate="visible">
  <motion.h1 variants={textVariants}>Pyrux</motion.h1>
</motion.header>
```

**Data Helper Functions:**
- Purpose: Query data arrays without exposing raw arrays or logic in components
- Pattern: Exported from `data/*.ts` (e.g., `getProjectById()`, `getFeaturedProjects()`, `getTechnologyById()`)
- Benefit: Centralize filtering/lookup logic; simplify component code

**Badge & Icon Components:**
- Purpose: Small, reusable UI elements (tech badges, service icons)
- Files: `components/ui/Badge.tsx`, `components/ui/TechIcon.tsx`, `components/ui/ServiceIcon.tsx`
- Pattern: Accept type/category + optional styling; delegate rendering to Lucide React or Tailwind

## Entry Points

**`/` (Homepage):**
- Location: `app/page.tsx` (Server Component) + implicit `<RootLayout>`
- Triggers: Direct navigation to domain root
- Responsibilities: Render hero, projects carousel, clients carousel, services, team, contact, stack, footer; no state management at page level

**`/projects` (All Projects):**
- Location: `app/projects/page.tsx` (Server Component) + `ProjectsPageClient.tsx` (Client)
- Triggers: "Ver todos" link from projects carousel on homepage
- Responsibilities: Render project grid (3-column on desktop, 1 on mobile); manage modal state for project details

**`/clients` (All Clients):**
- Location: `app/clients/page.tsx` (Server Component) + `ClientsPageClient.tsx` (Client)
- Triggers: "Ver todos" link from clients carousel on homepage
- Responsibilities: Render company cards; manage modal state for testimonials

**`/pricing` (Pricing Page):**
- Location: `app/pricing/page.tsx` (Server Component) + `PricesPageClient.tsx` (Client)
- Triggers: "Planes" button in hero or navigation
- Responsibilities: Display pricing packages, maintenance grid, FAQ accordion

**`/creator/[id]` (Creator Profile):**
- Location: `app/creator/[id]/page.tsx` (Server Component) + `CreatorPageClient.tsx` (Client)
- Triggers: Team member link on homepage
- Responsibilities: Show creator bio, profile photo, social links, personal projects grid

**`app/layout.tsx` (Root Layout):**
- Purpose: Global wrapper for all pages
- Contains: HTML/head setup, theme toggle, fonts (Manrope), JSON-LD schemas (Organization, Website, FAQ), FOUC prevention script
- Key exports: Metadata for homepage

## Error Handling

**Strategy:** Graceful Degradation

- **Missing data**: Components check for existence before rendering (e.g., `if (creator)`)
- **Broken images**: Use Next.js `Image` with fallback to alt text; CSS ensures no layout shift
- **Not Found routes**: `app/not-found.tsx` provides a 404 page
- **TypeScript validation**: Strict mode prevents undefined property access at compile time

**Patterns:**
- Conditional rendering (e.g., `project.images[0] && <Image>`)
- Optional chaining and nullish coalescing (e.g., `creator?.bio ?? "default"`)
- Error boundaries via React error.tsx (not currently used; optional for dynamic routes)

## Cross-Cutting Concerns

**Logging:** Console-only; no external logging service. Development logs via `console.log()`.

**Validation:** TypeScript provides compile-time validation; runtime validation is minimal (arrays are manually maintained in data files).

**Authentication:** Not applicable; all content is public.

**Theme Management:**
- CSS variables (`--bg-deep`, `--text-primary`, etc.) in `app/globals.css`
- Dark/light themes defined via `html[data-theme="light"]` selector
- localStorage key: `oc-theme` (read on page load via FOUC-prevention script)
- Theme toggle: `ThemeToggle` component in Root Layout

**Animations:**
- Framer Motion used exclusively (no CSS @keyframes for interactive elements)
- All animations defined as motion component variants
- Scroll-triggered animations via `whileInView` prop
- No animation in `useEffect` (violates project convention)

**SEO:**
- JSON-LD structured data in layout and page-specific scripts
- Dynamic meta tags via `generateMetadata()` on dynamic routes
- Breadcrumb schema on inner pages
- Open Graph and Twitter card metadata throughout

---

*Architecture analysis: 2026-03-19*
