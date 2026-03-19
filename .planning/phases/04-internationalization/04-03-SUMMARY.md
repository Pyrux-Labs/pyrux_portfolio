---
phase: 04-internationalization
plan: 03
subsystem: i18n
tags: [next-intl, useTranslations, locale-provider, react-context, i18n-wiring]

requires:
  - phase: 04-internationalization (plan 01)
    provides: "next-intl infrastructure, LocaleProvider, LanguageToggle"
  - phase: 04-internationalization (plan 02)
    provides: "bilingual message files (es.json, en.json), locale-keyed data files"
provides:
  - "All 25+ components wired to useTranslations for UI strings"
  - "All data consumers use locale-keyed access (data[locale])"
  - "Language toggle switches all visible text across all pages"
  - "Server components use defaultLocale for static generation"
affects: []

tech-stack:
  added: []
  patterns:
    - "useTranslations('Namespace') for UI strings in every component"
    - "useLocale() from locale-provider for data file access"
    - "defaultLocale import for server components accessing locale-keyed data"
    - "t('key', { param: value }) for interpolated strings"

key-files:
  modified:
    - "pyrux_portfolio/components/sections/Hero.tsx"
    - "pyrux_portfolio/components/sections/OurProjects.tsx"
    - "pyrux_portfolio/components/sections/OurServices.tsx"
    - "pyrux_portfolio/components/sections/OurTeam.tsx"
    - "pyrux_portfolio/components/sections/OurStack.tsx"
    - "pyrux_portfolio/components/sections/ContactUs.tsx"
    - "pyrux_portfolio/components/sections/ProcessSection.tsx"
    - "pyrux_portfolio/components/sections/FAQSection.tsx"
    - "pyrux_portfolio/components/layout/Footer.tsx"
    - "pyrux_portfolio/components/ui/Section.tsx"
    - "pyrux_portfolio/app/not-found.tsx"
    - "pyrux_portfolio/components/cards/ProjectCard.tsx"
    - "pyrux_portfolio/components/cards/CompanyCard.tsx"
    - "pyrux_portfolio/components/cards/PackageCard.tsx"
    - "pyrux_portfolio/components/modals/ProjectModal.tsx"
    - "pyrux_portfolio/components/modals/CompanyModal.tsx"
    - "pyrux_portfolio/components/modals/CreatorModal.tsx"
    - "pyrux_portfolio/app/projects/ProjectsPageClient.tsx"
    - "pyrux_portfolio/app/clients/ClientsPageClient.tsx"
    - "pyrux_portfolio/app/creator/[id]/CreatorPageClient.tsx"
    - "pyrux_portfolio/app/creator/[id]/page.tsx"
    - "pyrux_portfolio/app/pricing/PricesPageClient.tsx"
    - "pyrux_portfolio/app/layout.tsx"
    - "pyrux_portfolio/app/sitemap.ts"
    - "pyrux_portfolio/components/ui/LanguageToggle.tsx"

key-decisions:
  - "Server components (layout.tsx, page.tsx, sitemap.ts) use defaultLocale for static data access since useLocale() is client-only"
  - "Section.tsx default viewAllLabel resolved via useTranslations at render time instead of parameter default"
  - "Footer.tsx ContactItem type fixed from indexed access to explicit import after data became Record<Locale>"
  - "ImageCarousel in ProjectModal receives translated strings via props from parent rather than using its own hook"

patterns-established:
  - "Component translation pattern: import useTranslations, call at top of function, replace strings with t() calls"
  - "Data access pattern: const localeData = data[locale] before iterating"
  - "Server component locale access: import defaultLocale from config, use data[defaultLocale]"

requirements-completed: [I18N-06]

duration: 10min
completed: 2026-03-19
---

# Phase 04 Plan 03: Component i18n Wiring Summary

**All 25+ components wired to next-intl useTranslations with locale-keyed data access, completing full bilingual site support**

## Performance

- **Duration:** 10 min
- **Started:** 2026-03-19T20:15:54Z
- **Completed:** 2026-03-19T20:25:59Z
- **Tasks:** 2
- **Files modified:** 26

## Accomplishments
- Every section component (Hero, OurProjects, OurServices, OurTeam, OurStack, ContactUs, ProcessSection, FAQSection) uses useTranslations for UI strings and locale-keyed data
- All cards (ProjectCard, CompanyCard, PackageCard), modals (ProjectModal, CompanyModal, CreatorModal), and subpages (ProjectsPage, ClientsPage, CreatorPage, PricingPage) fully translated
- Server components (layout.tsx, page.tsx, sitemap.ts) fixed to use defaultLocale for static data access
- npm run build passes with zero TypeScript errors and successful static export

## Task Commits

Each task was committed atomically:

1. **Task 1: Wire landing page sections** - `cfd50c7` (feat)
2. **Task 2: Wire cards, modals, and subpages** - `30463f5` (feat)

## Files Created/Modified
- `pyrux_portfolio/components/sections/*.tsx` - All 8 section components wired to useTranslations
- `pyrux_portfolio/components/layout/Footer.tsx` - Footer with translated copyright and toast
- `pyrux_portfolio/components/ui/Section.tsx` - Default viewAllLabel from translation
- `pyrux_portfolio/components/ui/LanguageToggle.tsx` - Translated aria-labels
- `pyrux_portfolio/app/not-found.tsx` - 404 page fully translated
- `pyrux_portfolio/components/cards/*.tsx` - Cards with translated labels
- `pyrux_portfolio/components/modals/*.tsx` - Modals with translated headings
- `pyrux_portfolio/app/*/PageClient.tsx` - All subpages with locale data access
- `pyrux_portfolio/app/layout.tsx` - Server-side FAQ schema uses defaultLocale
- `pyrux_portfolio/app/creator/[id]/page.tsx` - Static params use defaultLocale
- `pyrux_portfolio/app/sitemap.ts` - Sitemap uses defaultLocale for creators

## Decisions Made
- Server components cannot use useLocale() (client-only hook), so they import defaultLocale from config.ts and access data[defaultLocale]
- Section.tsx viewAllLabel default changed from hardcoded string to runtime translation lookup via useTranslations
- Footer.tsx handler parameter type changed from indexed access `(typeof contactItems)[0]` to explicit `ContactItem` import after data structure changed to Record<Locale>
- ProjectModal's ImageCarousel receives translated alt text and aria labels via props from the parent component

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Fixed server component data access after locale-keyed data migration**
- **Found during:** Task 2
- **Issue:** layout.tsx, creator/[id]/page.tsx, and sitemap.ts directly accessed locale-keyed data (Record<Locale, T[]>) as if they were arrays, causing TypeScript errors
- **Fix:** Imported defaultLocale and used data[defaultLocale] in all server components
- **Files modified:** app/layout.tsx, app/creator/[id]/page.tsx, app/sitemap.ts
- **Verification:** npm run build passes
- **Committed in:** 30463f5

**2. [Rule 1 - Bug] Fixed Footer.tsx type error from data structure change**
- **Found during:** Task 1
- **Issue:** Footer's handleClick parameter typed as (typeof contactItems)[0] no longer valid after contactItems became Record<Locale, ContactItem[]>
- **Fix:** Changed to explicit ContactItem type import
- **Files modified:** components/layout/Footer.tsx
- **Verification:** TypeScript check passes
- **Committed in:** cfd50c7

---

**Total deviations:** 2 auto-fixed (1 blocking, 1 bug)
**Impact on plan:** Both fixes were necessary consequences of the data restructuring done in Plan 02. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 04 (internationalization) is now complete
- All components use useTranslations and locale-keyed data
- The language toggle switches all visible text across the entire site
- The site builds successfully with static export

---
*Phase: 04-internationalization*
*Completed: 2026-03-19*

## Self-Check: PASSED
