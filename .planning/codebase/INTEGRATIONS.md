# External Integrations

**Analysis Date:** 2026-03-19

## APIs & External Services

**None detected** — This is a static portfolio site with no backend API integrations or external service SDKs.

**Google Fonts API:**
- Service: Google Fonts
- What it's used for: Load custom Manrope font family (weights 400, 500, 600, 700)
- Implementation: `next/font/google` in `app/layout.tsx`
- No authentication required

**Social Media Links:**
- Instagram: `https://www.instagram.com/pyrux_labs` (referenced in JSON-LD schema only)
- LinkedIn: `https://linkedin.com/company/pyrux` (referenced in JSON-LD schema only)
- No API integration; links only for SEO schema

## Data Storage

**None** — No persistent data storage or database.

**Static Content:**
- All content is hardcoded in data layer files:
  - `data/projects.ts` - Portfolio projects
  - `data/companies.ts` - Client testimonials
  - `data/creators.ts` - Team members
  - `data/technologies.ts` - Tech stack showcase
  - `data/packages.ts` - Pricing plans
  - `data/faq.ts` - Frequently asked questions
  - `data/services.ts` - Service offerings
  - `data/steps.ts` - Process steps
  - `data/personalProjects.ts` - Creator-specific projects
  - `data/contacts.ts` - Contact information

**File Storage:**
- **Local filesystem** - Images stored in `public/` directory
  - Avatar images: `public/creators/` (circular profile photos)
  - Project screenshots: `public/projects/`
  - Company logos: `public/companies/`
  - Favicon/branding: `public/Pyrux-logo.svg`, `public/og-image.png`
  - SVGs stored directly in `public/`

**Caching:**
- **localStorage** - Client-side theme preference
  - Key: `oc-theme`
  - Values: `'light'` | `'dark'` | undefined
  - Used in: `app/layout.tsx` for FOUC prevention and `ThemeToggle` component

## Authentication & Identity

**None** — No user authentication, no login system.

**Contact Form:**
- Status: Not implemented
- Contact information: Static links and manual email/WhatsApp
- Social links: Instagram, LinkedIn, WhatsApp available as contact methods

## Monitoring & Observability

**Error Tracking:**
- Not detected

**Logs:**
- Browser console only (development debugging)
- No server-side logging

**Performance:**
- No external performance monitoring
- Build time validation through GitHub Actions CI

## CI/CD & Deployment

**Hosting:**
- **GitHub Pages** - Static site hosting
  - Base URL: `https://www.pyrux.com.ar` (from `app/layout.tsx` metadata)
  - Repository: `littlepants/pyrux_portfolio`

**CI Pipeline:**
- **GitHub Actions** - Automated build and deploy
  - Workflow file: `.github/workflows/deploy.yml`
  - Trigger: Push to `main` branch or manual `workflow_dispatch`
  - Build steps:
    1. Checkout code
    2. Setup Node 20
    3. Configure GitHub Pages
    4. Install dependencies: `npm ci`
    5. Build: `npm run build` (generates `pyrux_portfolio/out/`)
    6. Upload artifact to GitHub Pages
    7. Deploy to live site

## Environment Configuration

**Required env vars:**
- None detected - this is a static site with no backend configuration

**Secrets location:**
- No secrets required for deployment
- No `.env` files needed
- GitHub Pages credentials handled by Actions workflow

**Build Configuration:**
- All config is committed to repo:
  - `next.config.ts` - Next.js settings
  - `tsconfig.json` - TypeScript compiler options
  - `eslint.config.mjs` - Linting rules
  - `postcss.config.mjs` - CSS processing

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- GitHub Pages deployment webhook (automatic, no custom implementation)

## External Resources

**Structured Data (JSON-LD):**
- Organization schema with contact info and location
  - Location: Rosario, Santa Fe, Argentina
  - Service areas: Rosario, Argentina
  - Brand colors and pricing info embedded for search engines
- Website schema for SEO
- FAQ schema for rich snippets

**Metadata & SEO:**
- OpenGraph tags for social media sharing
  - OG image: `og-image.png`
  - Locale: `es_AR` (Spanish, Argentina)
- Twitter card configuration
- Canonical URL: `https://www.pyrux.com.ar`
- Robots meta tags (index: true, follow: true)
- Theme color: `#F97316` (orange)

## Client-Side Only Features

**Clipboard Integration:**
- Native Clipboard API via `useCopyToClipboard` hook
  - Location: `hooks/useCopyToClipboard.ts`
  - Fallback for older browsers: `document.execCommand('copy')`
  - Used for email copying in creator modals

**Theme Toggle:**
- HTML `data-theme` attribute toggle
- Component: `components/ui/ThemeToggle`
- Persists to localStorage

---

*Integration audit: 2026-03-19*
