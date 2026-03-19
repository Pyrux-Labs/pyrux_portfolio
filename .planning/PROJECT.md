# Pyrux Portfolio — Milestone 1: Polish + i18n

## What This Is

A deployed Next.js portfolio for Pyrux, a two-person web development studio based in Rosario, Argentina. The site showcases projects, clients, creator profiles, and service pricing. It is currently live on GitHub Pages and serves as the primary business card and lead-generation tool for the studio.

## Core Value

Every page view is a potential client. The site must look polished, load fast, and present the studio as a first-rate international agency — starting with fixing every visible rough edge and adding full English support so international visitors aren't turned away.

## Requirements

### Validated

- ✓ Next.js App Router with static export → GitHub Pages deploy — existing
- ✓ Dark/light theme with anti-FOUC localStorage script — existing
- ✓ Projects section with infinite carousel and modal — existing
- ✓ Clients/companies section with carousel and modal — existing
- ✓ Creator profiles with modal and dedicated `/creator/[id]` pages — existing
- ✓ Pricing page at `/pricing` with package cards and mobile carousel — existing
- ✓ FAQ accordion on pricing page — existing
- ✓ OurStack section with technology badges and expand/collapse — existing
- ✓ Contact section with social links and clipboard copy — existing
- ✓ Process section on pricing page — existing
- ✓ Fully Spanish UI — existing
- ✓ `next-intl` installed in dependencies — existing

### Active

**Bug Fixes (Critical):**
- [ ] Modal StarBackground flicker on open/close — fix AnimatePresence timing
- [ ] E-Commerce packages not loading on mobile carousel — fix useEffect/scroll logic
- [ ] ClientsPageClient shows Building2 icon instead of real company logo
- [ ] Three hardcoded English strings in OurTeam and CreatorModal

**UX / Visual Polish:**
- [ ] Bottom sheet modal pattern for mobile (projects, companies, creators)
- [ ] Project card description limited to 3 lines (line-clamp-3)
- [ ] Project + company carousel cards same height
- [ ] All technologies visible in project modal (no truncation)
- [ ] Technology badge fade-in animation when expanding OurStack
- [ ] OurStack category selector hidden when expanded
- [ ] Modal image carousel: bigger, draggable, arrows at edges, show with 2+ images
- [ ] "Ver en vivo" button and date on same row in project modal
- [ ] ThemeToggle non-sticky — static in page, only visible at top
- [ ] Process section redesigned: vertical timeline, SVG icons, large bg numbers, staggered scroll animation
- [ ] Contact section vertically centered in viewport, animations at 600ms ease-in-out
- [ ] Footer with logo, tagline, nav links, dynamic year
- [ ] Top banner (orange) with promotional message
- [ ] WhatsApp floating CTA button

**Pricing page:**
- [ ] "Único" plan removed
- [ ] Plan name font size increased
- [ ] "Mantenimiento" text no longer truncated on mobile
- [ ] E-Commerce mobile carousel bug fixed
- [ ] Maintenance card block order fixed on mobile
- [ ] MercadoPago payment option removed
- [ ] Hover animation on maintenance cards (same as project cards)
- [ ] Package descriptions rewritten in non-technical language

**FAQ text updates (7 answers):**
- [ ] FAQ answers updated to match new copy provided by user

**Data / content:**
- [ ] OurStack featured technologies updated (next, ts, tailwind, supabase, vercel, linux, github, figma, node + google tool)
- [ ] Add technologies: Vite, Three.js, GitHub Pages, Django, Render
- [ ] Pricing descriptions use "dólares" not "USD"

**Accessibility / Performance:**
- [ ] Touch targets ≥ 44px on all interactive elements
- [ ] aria-expanded on FAQ accordions
- [ ] alt text audit on all images
- [ ] console.log cleanup
- [ ] Image `sizes` prop and `priority` on above-the-fold images

**Internationalization (EN/ES):**
- [ ] Auto-detect browser language (navigator.language starts with "es" → ES, else → EN)
- [ ] All hardcoded Spanish strings extracted to translation keys
- [ ] `messages/es.json` — Spanish translations
- [ ] `messages/en.json` — English translations
- [ ] next-intl configured with locale detection middleware
- [ ] All pages, sections, cards, modals, and data labels translated

### Out of Scope

- Contact form backend (Formspree/EmailJS) — content/data change, not this milestone
- Real project photos / Gino photo — requires real assets from client
- Blog / case studies section — future milestone
- Calendly integration — future milestone
- Exit intent popup — future milestone
- Analytics (GA4) — future milestone
- Lighthouse CI in GitHub Actions — future milestone
- Visual regression or E2E tests — no test infrastructure exists

## Context

- Stack: Next.js 16.1.6, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion 12, next-intl (installed but unused)
- Deploy: GitHub Pages via GitHub Actions, static export (`output: 'export'`)
- Codebase: Brownfield — site is live, all content in `data/` files, no backend
- Pricing route confirmed as `/pricing` — ignore any concern about `/precios` or `/prices`
- No test suite — `npm run build` is the sole validation step

## Constraints

- **Static export**: No server-side runtime — next-intl must be configured for static export (no middleware for dynamic routing; use client-side locale detection)
- **No backend**: All data static; no form submissions, no database
- **Tailwind CSS only**: No inline styles ever
- **Framer Motion only**: No useEffect for animations
- **TypeScript strict**: Never `any`, always typed props

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| next-intl for i18n | Already in package.json; avoids adding new dependency | — Pending |
| Client-side locale detection | Static export forbids middleware-based routing; navigator.language checked on mount | — Pending |
| messages/es.json + messages/en.json | next-intl standard convention | — Pending |
| Pricing route stays at `/pricing` | Folder is `app/pricing/`, all links already correct | ✓ Good |

---
*Last updated: 2026-03-19 after initialization*
