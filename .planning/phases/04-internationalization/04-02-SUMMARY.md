---
phase: 04-internationalization
plan: 02
subsystem: i18n
tags: [next-intl, i18n, translation, locale-keyed-data, bilingual]

# Dependency graph
requires:
  - phase: 04-internationalization
    provides: i18n infrastructure (next-intl, LocaleProvider, Locale type, scaffold message files)
provides:
  - Complete es.json and en.json with 27 namespaces covering all UI components
  - All 9 data files converted to Record<Locale, DataType[]> bilingual exports
  - Helper functions (getProjectById, getCompanyById, getCreatorById, etc.) accept locale parameter
affects: [04-03-PLAN]

# Tech tracking
tech-stack:
  added: []
  patterns: [locale-keyed data exports, ICU interpolation syntax in message files]

key-files:
  created: []
  modified:
    - pyrux_portfolio/messages/es.json
    - pyrux_portfolio/messages/en.json
    - pyrux_portfolio/data/projects.ts
    - pyrux_portfolio/data/companies.ts
    - pyrux_portfolio/data/creators.ts
    - pyrux_portfolio/data/services.ts
    - pyrux_portfolio/data/contacts.ts
    - pyrux_portfolio/data/faq.ts
    - pyrux_portfolio/data/steps.ts
    - pyrux_portfolio/data/packages.ts
    - pyrux_portfolio/data/personalProjects.ts

key-decisions:
  - "Maintenance card sets in packages.ts use nested Record<Locale, MaintenanceItem[]> to avoid duplicating entire card arrays per package"
  - "contactItems typed as Record<Locale, ContactItem[]> while CONTACT_EMAIL stays as standalone string export (not locale-keyed)"

patterns-established:
  - "Data file pattern: export const data: Record<Locale, Type[]> = { es: [...], en: [...] }"
  - "Helper function pattern: getXById(id: string, locale: Locale) accessing data[locale]"
  - "Message namespace pattern: one namespace per component with exact Spanish strings and natural English translations"

requirements-completed: [I18N-02, I18N-03, I18N-04]

# Metrics
duration: 7min
completed: 2026-03-19
---

# Phase 04 Plan 02: Translation Content Summary

**27-namespace translation files (es.json/en.json) with all UI strings plus 9 data files converted to Record<Locale> bilingual exports**

## Performance

- **Duration:** 7 min
- **Started:** 2026-03-19T19:00:51Z
- **Completed:** 2026-03-19T19:07:57Z
- **Tasks:** 2
- **Files modified:** 11

## Accomplishments
- Created complete es.json with 27 namespaces extracting every hardcoded Spanish string from all UI components
- Created matching en.json with identical key structure and natural English translations using ICU interpolation
- Converted all 9 data files to locale-keyed Record<Locale, DataType[]> format with complete English translations
- Updated all helper functions (getProjectById, getCompanyById, getCreatorById, getFeaturedProjects, getProjectsByTechnology, getPersonalProjectsByCreator) to accept locale parameter

## Task Commits

Each task was committed atomically:

1. **Task 1: Create complete es.json and en.json message files** - `708d7b3` (feat)
2. **Task 2: Convert all data files to locale-keyed bilingual exports** - `117f332` (feat)

## Files Created/Modified
- `pyrux_portfolio/messages/es.json` - Complete Spanish translations for all 27 UI component namespaces
- `pyrux_portfolio/messages/en.json` - Complete English translations mirroring es.json structure
- `pyrux_portfolio/data/projects.ts` - Record<Locale, Project[]> with 4 projects translated
- `pyrux_portfolio/data/companies.ts` - Record<Locale, Company[]> with 1 company translated
- `pyrux_portfolio/data/creators.ts` - Record<Locale, Creator[]> with 2 creators translated
- `pyrux_portfolio/data/services.ts` - Record<Locale, ServiceItem[]> with 6 services translated
- `pyrux_portfolio/data/contacts.ts` - Record<Locale, ContactItem[]> with 4 contact items translated
- `pyrux_portfolio/data/faq.ts` - Record<Locale, FAQItem[]> with 8 FAQ items translated
- `pyrux_portfolio/data/steps.ts` - Record<Locale, Step[]> with 5 process steps translated
- `pyrux_portfolio/data/packages.ts` - Record<Locale, ServicePackage[]> with 7 packages and 3 maintenance card sets translated
- `pyrux_portfolio/data/personalProjects.ts` - Record<Locale, PersonalProject[]> with 6 personal projects translated

## Decisions Made
- Maintenance card sets in packages.ts use nested Record<Locale, MaintenanceItem[]> rather than duplicating arrays per package, keeping DRY
- CONTACT_EMAIL stays as standalone export since email addresses are not locale-dependent
- Technology names (Next.js, TypeScript, etc.) kept identical across locales as they are language-agnostic

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All translation content exists in both languages for Plan 03 to wire into components
- Expected TypeScript errors in consuming components (they still import old array format) will be resolved in Plan 03
- Message namespace keys match component names for straightforward useTranslations() wiring

## Self-Check: PASSED

All 11 modified files verified on disk. Both task commits (708d7b3, 117f332) verified in git log.

---
*Phase: 04-internationalization*
*Completed: 2026-03-19*
