# Coding Conventions

**Analysis Date:** 2025-03-19

## Naming Patterns

**Files:**
- Components: `PascalCase.tsx` (e.g., `ProjectCard.tsx`, `Hero.tsx`)
- Data files: `camelCase.ts` (e.g., `projects.ts`, `companies.ts`)
- Utility/lib files: `camelCase.ts` (e.g., `utils.ts`)
- Modal components: `*Modal.tsx` suffix (e.g., `ProjectModal.tsx`, `CompanyModal.tsx`)
- Type definitions: `index.ts` in `types/` directory, or `*.types.ts` (e.g., `pricing.types.ts`)
- Page routes: `page.tsx` for Server Components, `*PageClient.tsx` for Client Components (e.g., `PreciosPageClient.tsx`)

**Functions:**
- Component functions: `PascalCase` (exported as default)
- Helper/utility functions: `camelCase` (exported as named)
- Example: `function ProjectCard()`, `export function cn(...)`

**Variables:**
- Constants: `camelCase` (e.g., `projectCards`, `containerVariants`)
- State hooks: `camelCase` (e.g., `selectedProject`, `isOpen`)
- Motion/animation variants: `camelCase` with descriptive suffix (e.g., `containerVariants`, `textVariants`, `iconVariants`)

**Types & Interfaces:**
- Interfaces: `PascalCase` with suffix pattern (e.g., `ProjectCardProps`, `ModalProps`, `FAQItem`)
- Type aliases: `PascalCase` (e.g., `TechnologyCategory`)
- Always use explicit interface declarations for component props — never use anonymous inline types

## Code Style

**Formatting:**
- No formatter configured (ESLint only)
- Indentation: 2 spaces (inferred from existing code)
- Line length: No hard limit enforced

**Linting:**
- Tool: `eslint` v9 with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Config file: `eslint.config.mjs` (using flat config format)
- Command: `npm run lint`
- Key rules enforced:
  - TypeScript strict mode enabled (`strict: true` in `tsconfig.json`)
  - No `any` types allowed
  - No `@ts-ignore` or `as any` permitted
  - No unused variables
  - Web Vitals best practices from Next.js ESLint config

**TypeScript:**
- Target: `ES2017`
- Strict mode: Enabled
- No `any`, `as any`, or `@ts-ignore` — ever
- Always type component props with explicit interfaces
- Module resolution: `bundler`
- Path aliases: `@/*` maps to root (configured in `tsconfig.json`)

## Import Organization

**Order:**
1. External React/Next.js imports (`react`, `next/image`, `next/font/google`, etc.)
2. Third-party library imports (`framer-motion`, `lucide-react`, `sonner`, etc.)
3. Internal type imports (`import type { ... }` from `@/types`)
4. Internal component imports (`@/components/*`)
5. Internal utility imports (`@/lib/utils`)
6. Internal data imports (`@/data/*`)
7. Internal hook imports (if any)

**Path Aliases:**
- `@/*` resolves to project root
- Use for all internal imports — never relative imports like `../../../`
- Example: `import ProjectCard from "@/components/cards/ProjectCard"`

## Error Handling

**Patterns:**
- Components return `null` for missing required props (defensive check at top of component)
  - Example: `if (!project) return null;` in `ProjectModal.tsx`
- No try-catch blocks in client components (static data only, no runtime errors)
- Image onError handlers in cards: `onError={(e) => { ... }}` (e.g., in `CompanyCard.tsx`)
- Validation happens at data layer before passing to components
- No error boundaries — not implemented in codebase

## Logging

**Framework:** `console` (no logging library)

**Patterns:**
- No logging statements found in production code
- Logging not used — treat as anti-pattern in this codebase

## Comments

**When to Comment:**
- Section headers with decorative separators (3-line header block)
  ```typescript
  // ═══════════════════════════════════════════════
  // Component Name — brief description
  // ═══════════════════════════════════════════════
  ```
- Inline comments only for non-obvious logic (e.g., carousel animation duration math)
- No comment for every line — code should be self-documenting

**JSDoc/TSDoc:**
- Not used in this codebase
- Only `cn()` utility has a brief JSDoc description
- No function documentation comments beyond section headers

## Function Design

**Size:**
- Kept relatively small — most components are 50-150 lines
- Complex components delegate to sub-components (e.g., `ProjectModal` has nested `ImageCarousel`)
- Helper functions extracted into separate files (`getTechnologyById` in `data/technologies.ts`)

**Parameters:**
- Component props always typed with explicit interface
- Destructure props directly in function signature
- Example: `function ProjectCard({ project, onClick }: ProjectCardProps)`

**Return Values:**
- Components return JSX or `null`
- Utility functions return typed values (string, boolean, etc.)
- Defensive returns early: check for missing data before rendering

## Module Design

**Exports:**
- Components exported as `default` export
- Data arrays exported as named exports (`export const projects`)
- Types exported as named exports (`export interface Project`)
- Utilities exported as named exports (`export function cn()`)

**Barrel Files:**
- No barrel files (index.ts) used for exports
- Only `types/index.ts` exists as central type definition file
- Other directories import directly from file paths

## Styling Patterns

**Tailwind CSS v4:**
- All styling through Tailwind classes — no inline styles except for CSS variables
- CSS variables defined in `globals.css` (design tokens like `--coral-bright`, `--text-primary`)
- Responsive classes use Tailwind breakpoints: `max-[480px]:` for mobile overrides
- Theme colors accessed via CSS variables: `text-primary`, `bg-card-strong`, `border-coral`
- Line clamping: `line-clamp-2` (exact count specified, e.g., `line-clamp-2` for 2 lines max)

**Shadow & Effects:**
- Shadow values use CSS variable references: `shadow-[0_12px_40px_var(--shadow-coral-soft)]`
- Gradients defined in CSS: `bg-[linear-gradient(...)]` or `var(--surface-card)`
- Backdrop blur used for glass-morphism effect: `backdrop-blur-sm`

## Animation Patterns

**Framework:** Framer Motion (version 12)

**Core Pattern — Staggered Container with whileInView:**
```typescript
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

<motion.div
	variants={containerVariants}
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true }}>
	{items.map((item) => (
		<motion.div key={item.id} variants={itemVariants} />
	))}
</motion.div>
```

**Key Rules:**
- Use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations (not `useEffect`)
- Spring animations for interactive elements: `type: "spring"` with `damping` and `stiffness`
- Stagger children with `staggerChildren: 0.1` (10ms per item) in container
- Ease functions: `"easeOut"` or `"easeInOut"` as strings (cast as const when needed in objects)
- Duration: 600ms+ for visibility animations (smooth, not jarring)
- Never use `useEffect` for animation — always use Framer Motion props

## Component Pattern — Server/Client Split

**Server Component (page.tsx):**
- No `"use client"` directive
- Renders metadata, layouts, static sections
- Imports and composes Client Components
- Example: `app/page.tsx` is Server, imports `Hero`, `OurProjects`, etc. as Client

**Client Component (*PageClient.tsx or *Modal.tsx):**
- `"use client"` at top of file
- Contains `useState`, `useRef`, event handlers, motion components
- Imports data and passes as props to presentation components
- Example: `OurProjects.tsx` has `"use client"`, manages modal state, maps data

## Image Handling

**Pattern:**
- Use Next.js `Image` component from `next/image`
- Always set `width` and `height` props (required for static export)
- Use `loading="lazy"` for below-fold images
- Always provide meaningful `alt` text in Spanish
- Example: `alt={`${projectTitle} — captura ${i + 1}`}`

## Accessibility

**ARIA & Semantic HTML:**
- Use `role="button"` on interactive divs (e.g., project cards)
- Use `tabIndex={0}` on clickable elements to enable keyboard navigation
- Buttons handle `Enter` and `Space` key presses in `onKeyDown`
- Modals use `role="dialog"` and `aria-modal="true"`
- Expanded state tracked with `aria-expanded={open}` (accordion patterns)
- Labels for buttons: `aria-label="Cerrar modal"` in Spanish

**Examples:**
```typescript
<motion.div
	role="button"
	tabIndex={0}
	aria-label={`Ver detalles de ${project.title}`}
	onKeyDown={(e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onClick?.();
		}
	}}
/>
```

## Type Safety

**Strict Mode Enforcement:**
- TypeScript `strict: true` in `tsconfig.json`
- Every component receives typed props interface
- No prop spread without explicit typing
- Data arrays maintain type consistency (`Project[]`, `Company[]`)
- Optional properties marked with `?`: `liveUrl?: string`

**Type Definition Location:**
- Global types in `types/index.ts` (Project, Company, Creator, Technology, etc.)
- Page-specific types in dedicated files (e.g., `types/pricing.types.ts` for pricing page)
- Component-specific interfaces defined inline above component export

---

*Convention analysis: 2025-03-19*
