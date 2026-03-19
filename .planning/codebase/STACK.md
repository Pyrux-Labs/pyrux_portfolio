# Technology Stack

**Analysis Date:** 2026-03-19

## Languages

**Primary:**
- **TypeScript 5** (strict mode) - All application code, configuration, and type definitions
  - Target: ES2017
  - JSX support via react-jsx
  - No `any` types enforced project-wide

**Secondary:**
- **JavaScript/Node.js** - Package management and build tooling

## Runtime

**Environment:**
- **Node.js 20** - Development and CI/CD environments (specified in `.github/workflows/deploy.yml`)
  - npm lockfile: `package-lock.json` (present)

**Package Manager:**
- **npm** (Node Package Manager)
  - Lockfile: `package-lock.json` present
  - Install method: `npm ci` (in CI), `npm install` (development)

## Frameworks

**Core:**
- **Next.js 16.1.6** - Full-stack React framework with App Router
  - Output mode: Static export (`output: 'export'`)
  - React Compiler enabled (`reactCompiler: true`)
  - Image optimization disabled for static export
  - Uses `next/font/google` for custom fonts (Manrope)
  - Uses `next/image` for optimized images (unoptimized due to static export)

**UI & Styling:**
- **React 19.2.3** - UI framework
  - Strict mode enabled
  - Function components with hooks
- **Tailwind CSS v4** - Utility-first CSS framework
  - PostCSS integration via `@tailwindcss/postcss`
  - Custom CSS variables for design tokens (colors, shadows, gradients)
  - No inline styles - all styling via utility classes
- **Framer Motion 12.34.3** - Animation library
  - Used for all motion effects, stagger animations, scroll triggers
  - Never uses `useEffect` for animations

**Animation & Interactive:**
- **Sonner 2.0.7** - Toast notification component library
  - Used for user feedback (e.g., "Email copiado al portapapeles")
- **Lucide React 0.575.0** - Icon library
  - SVG-based icons
- **React Icons 5.5.0** - Additional icon set
  - Complementary icon library

**Build/Development:**
- **Babel** with React Compiler plugin (`babel-plugin-react-compiler` 1.0.0)
  - Automatic optimization of React components
- **TypeScript Compiler** - Type checking
- **ESLint 9** - Code linting
  - Config: `eslint-config-next` (16.1.6)
  - Uses Next.js Core Web Vitals preset
  - Uses Next.js TypeScript preset
  - Config file: `eslint.config.mjs`
- **PostCSS 8+** - CSS preprocessing
  - Config: `postcss.config.mjs`

## Key Dependencies

**Critical:**
- **framer-motion** - All animations and motion effects
- **tailwindcss** - Complete styling system
- **next** - Framework and build system
- **react** - Component rendering

**UI Components:**
- **lucide-react** - Primary icon system
- **react-icons** - Supplementary icons
- **sonner** - Toast notifications

## Configuration

**Environment:**
- Development: `npm run dev` (Turbopack bundler)
- Production: `npm run build` (static export to `./out/`)
- Linting: `npm run lint` (ESLint across codebase)
- Language: Spanish (UI content only, all code in English)
- Theme: Dark mode (default) with light mode toggle
  - Theme persistence via `localStorage` (key: `oc-theme`)
  - FOUC prevention script in `layout.tsx` applies theme before first render
  - CSS variable overrides in `:root` selector

**Build:**
- Config file: `next.config.ts`
- TypeScript config: `tsconfig.json`
  - `paths` alias: `@/*` → `./` (project root)
  - Module: `esnext`
  - `isolatedModules: true`
  - `noEmit: true` (type checking only)
- PostCSS config: `postcss.config.mjs`
- ESLint config: `eslint.config.mjs`

**Font:**
- **Manrope** (Google Fonts)
  - Weights: 400, 500, 600, 700
  - Subsets: Latin
  - CSS variable: `--font-manrope`
  - Display strategy: `swap` (system font immediately)

## Platform Requirements

**Development:**
- Node.js 20+
- npm 10+
- Git (for version control)
- Modern browser with ES2017 support

**Production:**
- **GitHub Pages** - Deployment target
- Deployment method: Static HTML/CSS/JS export
- Browser support (from `browserslist`):
  - Production: Chrome ≥92, Firefox ≥90, Safari ≥15, Edge ≥92
  - Development: Latest 1 version of major browsers

**CI/CD:**
- **GitHub Actions** (`.github/workflows/deploy.yml`)
  - Triggered on: push to `main` branch or manual workflow dispatch
  - Build artifact path: `./pyrux_portfolio/out/`
  - Deploy to: GitHub Pages

---

*Stack analysis: 2026-03-19*
