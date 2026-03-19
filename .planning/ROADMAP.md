# Roadmap: Pyrux Portfolio — Milestone 1: Polish + i18n

## Overview

This milestone transforms the live Pyrux portfolio from a functional but rough draft into a polished, bilingual lead-generation site. Work flows from fixing broken things (bugs, stale copy), through visual improvements across all sections, then a focused pricing page overhaul, and finally wrapping every visible string in i18n so the site speaks English to international visitors. Each phase builds on the last: bugs must be gone before polish makes sense, polish must be done before i18n extracts every string.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Fixes and Content** - Eliminate all bugs, update FAQ/data copy, remove debug artifacts
- [ ] **Phase 2: UI Polish and Accessibility** - Visual improvements across all sections plus accessibility baseline
- [ ] **Phase 3: Pricing Overhaul** - Rebuild pricing page layout, plans, and descriptions
- [ ] **Phase 4: Internationalization** - Full EN/ES bilingual support with auto-detection

## Phase Details

### Phase 1: Fixes and Content
**Goal**: Every existing feature works correctly, all copy matches the latest business messaging, and the codebase is clean of debug noise
**Depends on**: Nothing (first phase)
**Requirements**: BUG-01, BUG-02, BUG-03, BUG-04, BUG-05, FAQ-01, FAQ-02, FAQ-03, FAQ-04, FAQ-05, FAQ-06, DATA-01, DATA-02, DATA-03, A11Y-04, A11Y-05
**Success Criteria** (what must be TRUE):
  1. All modals open and close without backdrop flicker on any device
  2. E-Commerce packages render and scroll correctly on mobile in the pricing carousel
  3. Company logos display on the /clients page (no generic Building2 icon)
  4. Every visible string on the site is in Spanish (no stray English text)
  5. FAQ answers, maintenance card descriptions, OurStack featured technologies, and pricing currency labels all match the latest copy provided by the user
**Plans**: TBD

Plans:
- [ ] 01-01: Bug fixes (modal flicker, mobile carousel, company logos, English strings)
- [ ] 01-02: Content updates (FAQ answers, maintenance cards, OurStack data, pricing currency, new technologies)
- [ ] 01-03: Cleanup (console.log removal, image priority/sizes props)

### Phase 2: UI Polish and Accessibility
**Goal**: Every section of the site feels polished, animations are smooth, mobile interactions use native-feeling patterns, and accessibility meets baseline standards
**Depends on**: Phase 1
**Requirements**: UI-01, UI-02, UI-03, UI-04, UI-05, UI-06, UI-07, UI-08, UI-09, UI-10, UI-11, UI-12, UI-13, UI-14, UI-15, UI-16, A11Y-01, A11Y-02, A11Y-03
**Success Criteria** (what must be TRUE):
  1. On mobile, tapping a project/company/creator card opens a bottom sheet that slides up from the bottom with a visible handle bar and internal scroll
  2. The landing page has an orange promotional banner at the top, a WhatsApp floating button, and a footer with logo, nav links, and dynamic copyright year
  3. The Process section on the pricing page uses a vertical timeline layout with icons, large background numbers, and staggered scroll animations
  4. All interactive elements (buttons, links, toggles, accordion triggers) have touch targets of at least 44x44px, FAQ accordions announce their expanded state to screen readers, and all images have descriptive alt text
  5. Project cards show 3-line descriptions, project and company carousel cards are equal height, the theme toggle stays at the top of the page (not sticky), and the contact section is vertically centered with slow ease-in-out animations
**Plans**: TBD

Plans:
- [ ] 02-01: Mobile bottom sheets and modal improvements (UI-01, UI-04, UI-07, UI-08)
- [ ] 02-02: Landing page additions and section redesigns (UI-09, UI-10, UI-11, UI-12, UI-13, UI-14, UI-15)
- [ ] 02-03: Card and carousel polish plus accessibility (UI-02, UI-03, UI-05, UI-06, UI-16, A11Y-01, A11Y-02, A11Y-03)

### Phase 3: Pricing Overhaul
**Goal**: The pricing page clearly communicates service tiers in non-technical language, with a clean mobile layout that highlights the right plan for each visitor
**Depends on**: Phase 2
**Requirements**: PRICE-01, PRICE-02, PRICE-03, PRICE-04, PRICE-05, PRICE-06
**Success Criteria** (what must be TRUE):
  1. The "Unico" plan no longer appears on the pricing page
  2. Plan names are large and bold, "Mantenimiento" is fully readable on mobile, and the maintenance block sits between delivery time and plan items in the mobile layout
  3. MercadoPago is not offered as a payment option anywhere on the site
  4. Package descriptions use plain, non-technical language that a business owner without dev knowledge can understand
**Plans**: TBD

Plans:
- [ ] 03-01: Pricing page restructure (remove Unico, reorder mobile layout, increase plan name size, fix Mantenimiento truncation, remove MercadoPago)
- [ ] 03-02: Package description rewrite (non-technical language for all plan descriptions)

### Phase 4: Internationalization
**Goal**: The site auto-detects visitor language and renders fully in English or Spanish, with a manual toggle for override
**Depends on**: Phase 3
**Requirements**: I18N-01, I18N-02, I18N-03, I18N-04, I18N-05, I18N-06, I18N-07
**Success Criteria** (what must be TRUE):
  1. A visitor whose browser is set to English sees the entire site in English on first load -- every section, card, modal, and data label
  2. A visitor whose browser is set to Spanish sees the site in Spanish (current behavior preserved)
  3. A language toggle button is visible on the site and switching it immediately re-renders all text without a page reload
  4. next-intl is configured for static export with client-side locale detection (no server middleware)
**Plans**: TBD

Plans:
- [ ] 04-01: i18n infrastructure (next-intl config, locale detection, language toggle, message file scaffolding)
- [ ] 04-02: String extraction and translation (extract all hardcoded strings, create es.json and en.json, wire all components)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 --> 2 --> 3 --> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Fixes and Content | 0/3 | Not started | - |
| 2. UI Polish and Accessibility | 0/3 | Not started | - |
| 3. Pricing Overhaul | 0/2 | Not started | - |
| 4. Internationalization | 0/2 | Not started | - |
