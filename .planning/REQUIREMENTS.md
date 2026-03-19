# Requirements: Pyrux Portfolio — Milestone 1

**Defined:** 2026-03-19
**Core Value:** Every page view is a potential client — fix every visible rough edge and add full English support so international visitors aren't turned away.

## v1 Requirements

### Bug Fixes

- [ ] **BUG-01**: Modal backdrop (StarBackground) stops flickering when any modal opens/closes
- [ ] **BUG-02**: E-Commerce packages render correctly on mobile carousel in pricing page
- [ ] **BUG-03**: `/clients` page shows real company logo (same as CompanyCard) instead of Building2 icon
- [ ] **BUG-04**: "Click to view profile →" in OurTeam replaced with Spanish text
- [ ] **BUG-05**: "Featured projects" and "View all projects" in CreatorModal replaced with Spanish text

### UI Polish

- [ ] **UI-01**: Mobile modals (project, company, creator) use bottom sheet pattern — slide from bottom, handle bar, internal scroll
- [ ] **UI-02**: Project card description clamped to 3 lines (line-clamp-3)
- [ ] **UI-03**: Project and company carousel cards have equal height
- [ ] **UI-04**: Project modal shows all technologies without truncation
- [ ] **UI-05**: Technology badges in OurStack fade in when expanding ("Ver más")
- [ ] **UI-06**: OurStack category selector hidden in expanded state
- [ ] **UI-07**: Project modal image carousel: larger images, draggable, arrows at container edges, visible with 2+ images
- [ ] **UI-08**: "Ver en vivo" button and date displayed on same row in project modal
- [ ] **UI-09**: ThemeToggle is static (not sticky) — only visible when user is at top of page
- [ ] **UI-10**: Process section redesigned with vertical timeline, SVG icons per step, large semi-transparent background numbers, staggered scroll animations
- [ ] **UI-11**: Contact section content vertically centered in viewport when navigated to directly
- [ ] **UI-12**: Contact section animations use minimum 600ms duration with ease-in-out easing
- [ ] **UI-13**: Footer includes logo, tagline, internal nav links (Proyectos, Clientes, Precios, Contacto), and dynamic copyright year
- [ ] **UI-14**: Orange promotional banner displayed at top of landing page (before header)
- [ ] **UI-15**: WhatsApp floating CTA button fixed on screen
- [ ] **UI-16**: Maintenance card hover animation matches project card hover effect

### Pricing Page

- [ ] **PRICE-01**: "Único" plan removed from pricing page
- [ ] **PRICE-02**: Plan name font size increased to be visually prominent
- [ ] **PRICE-03**: "Mantenimiento" text fully visible on mobile (no truncation/cutoff)
- [ ] **PRICE-04**: Mobile layout: Maintenance block appears between delivery time and plan items
- [ ] **PRICE-05**: MercadoPago payment option removed from pricing/checkout
- [ ] **PRICE-06**: Package descriptions rewritten in non-technical language for non-developer clients

### FAQ

- [ ] **FAQ-01**: "¿Qué tenés que tener listo antes de empezar?" answer updated to new copy
- [ ] **FAQ-02**: "¿Puedo actualizar el contenido yo mismo?" answer updated to new copy
- [ ] **FAQ-03**: "¿Qué pasa si no quiero contratar mantenimiento?" answer updated to new copy
- [ ] **FAQ-04**: "¿Por qué Pyrux y no una agencia?" answer updated to new copy
- [ ] **FAQ-05**: Monitoring card text updated ("Monitoreo constante — arreglamos los problemas antes de que el usuario los vea.")
- [ ] **FAQ-06**: Backups card text updated ("Intervalo de copias dependiente de tu plan.")

### Data & Content

- [ ] **DATA-01**: OurStack featured technologies set to: Next.js, TypeScript, Tailwind, Supabase, Vercel, Linux, GitHub, Figma, Node.js, plus one Google tool
- [ ] **DATA-02**: Technologies added: Vite, Three.js, GitHub Pages, Django, Render
- [ ] **DATA-03**: Pricing descriptions use "dólares" instead of "USD"

### Accessibility & Performance

- [ ] **A11Y-01**: All interactive elements have touch targets ≥ 44×44px
- [ ] **A11Y-02**: FAQ accordion buttons have correct aria-expanded attribute
- [ ] **A11Y-03**: All images have descriptive alt text (no empty or generic alts)
- [ ] **A11Y-04**: All console.log debug statements removed
- [ ] **A11Y-05**: Above-the-fold images have priority prop; carousel images have correct sizes prop

### Internationalization

- [ ] **I18N-01**: Browser language auto-detected on mount (navigator.language starts with "es" → Spanish, otherwise → English)
- [ ] **I18N-02**: All hardcoded Spanish strings extracted to translation keys
- [ ] **I18N-03**: `messages/es.json` created with complete Spanish translations
- [ ] **I18N-04**: `messages/en.json` created with complete English translations
- [ ] **I18N-05**: next-intl configured for static export (client-side locale detection, no middleware routing)
- [ ] **I18N-06**: All sections, cards, modals, and data labels render in detected language
- [ ] **I18N-07**: Language toggle button available on site for manual override

## v2 Requirements

### Conversion

- Contact form backend (Formspree or EmailJS)
- Calendly booking link
- Exit intent popup

### Marketing

- Blog / case studies section
- Client trust bar (logos) below hero

### Infrastructure

- Google Analytics 4 instrumentation
- Lighthouse CI in GitHub Actions
- Visual regression tests

## Out of Scope

| Feature | Reason |
|---------|--------|
| Real project photos / Gino photo | Requires real assets from client — content change, not code |
| Contact form backend | No server; static export; separate milestone |
| Popup / exit intent | Marketing feature, future milestone |
| E2E or unit test suite | No test infrastructure; out of scope for this milestone |
| `/precios` or `/prices` route | Folder is correct at `/pricing`; ignore this concern |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| BUG-01 | Phase 1 | Pending |
| BUG-02 | Phase 1 | Pending |
| BUG-03 | Phase 1 | Pending |
| BUG-04 | Phase 1 | Pending |
| BUG-05 | Phase 1 | Pending |
| UI-01 | Phase 2 | Pending |
| UI-02 | Phase 2 | Pending |
| UI-03 | Phase 2 | Pending |
| UI-04 | Phase 2 | Pending |
| UI-05 | Phase 2 | Pending |
| UI-06 | Phase 2 | Pending |
| UI-07 | Phase 2 | Pending |
| UI-08 | Phase 2 | Pending |
| UI-09 | Phase 2 | Pending |
| UI-10 | Phase 2 | Pending |
| UI-11 | Phase 2 | Pending |
| UI-12 | Phase 2 | Pending |
| UI-13 | Phase 2 | Pending |
| UI-14 | Phase 2 | Pending |
| UI-15 | Phase 2 | Pending |
| UI-16 | Phase 2 | Pending |
| PRICE-01 | Phase 3 | Pending |
| PRICE-02 | Phase 3 | Pending |
| PRICE-03 | Phase 3 | Pending |
| PRICE-04 | Phase 3 | Pending |
| PRICE-05 | Phase 3 | Pending |
| PRICE-06 | Phase 3 | Pending |
| FAQ-01 | Phase 1 | Pending |
| FAQ-02 | Phase 1 | Pending |
| FAQ-03 | Phase 1 | Pending |
| FAQ-04 | Phase 1 | Pending |
| FAQ-05 | Phase 1 | Pending |
| FAQ-06 | Phase 1 | Pending |
| DATA-01 | Phase 1 | Pending |
| DATA-02 | Phase 1 | Pending |
| DATA-03 | Phase 1 | Pending |
| A11Y-01 | Phase 2 | Pending |
| A11Y-02 | Phase 2 | Pending |
| A11Y-03 | Phase 2 | Pending |
| A11Y-04 | Phase 1 | Pending |
| A11Y-05 | Phase 1 | Pending |
| I18N-01 | Phase 4 | Pending |
| I18N-02 | Phase 4 | Pending |
| I18N-03 | Phase 4 | Pending |
| I18N-04 | Phase 4 | Pending |
| I18N-05 | Phase 4 | Pending |
| I18N-06 | Phase 4 | Pending |
| I18N-07 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 48 total
- Mapped to phases: 48
- Unmapped: 0

---
*Requirements defined: 2026-03-19*
*Last updated: 2026-03-19 after roadmap creation*
