---
phase: 04-internationalization
plan: 01
subsystem: i18n
tags: [next-intl, i18n, locale-detection, react-context]

# Dependency graph
requires:
  - phase: 01-fixes-and-content
    provides: stable codebase with finalized Spanish copy
provides:
  - next-intl infrastructure with client-side locale provider
  - browser language auto-detection and localStorage persistence
  - language toggle component
  - scaffold message files (es.json, en.json) with Hero namespace
  - type-safe translation keys via global.d.ts
affects: [04-02-PLAN, 04-03-PLAN]

# Tech tracking
tech-stack:
  added: [next-intl]
  patterns: [client-side locale context, anti-FOWL script, NextIntlClientProvider wrapping]

key-files:
  created:
    - pyrux_portfolio/i18n/config.ts
    - pyrux_portfolio/i18n/request.ts
    - pyrux_portfolio/i18n/locale-provider.tsx
    - pyrux_portfolio/global.d.ts
    - pyrux_portfolio/messages/es.json
    - pyrux_portfolio/messages/en.json
    - pyrux_portfolio/components/ui/LanguageToggle.tsx
  modified:
    - pyrux_portfolio/next.config.ts
    - pyrux_portfolio/app/layout.tsx

key-decisions:
  - "Client-side locale switching via React context (no middleware routing, compatible with static export)"
  - "Anti-FOWL script in head sets lang attribute from localStorage before React hydrates"
  - "LanguageToggle styled to match ThemeToggle pattern (round button, same size, backdrop blur)"

patterns-established:
  - "LocaleProvider pattern: wraps NextIntlClientProvider with custom context for locale get/set"
  - "useLocale hook from i18n/locale-provider for accessing and changing locale"
  - "Message files in messages/ directory with namespace-based organization"

requirements-completed: [I18N-01, I18N-05, I18N-07]

# Metrics
duration: 3min
completed: 2026-03-19
---

# Phase 04 Plan 01: i18n Infrastructure Summary

**next-intl setup with client-side locale detection, LocaleProvider context, language toggle, and scaffold message files for static export**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-19T18:56:08Z
- **Completed:** 2026-03-19T18:58:53Z
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments
- Installed next-intl and wired createNextIntlPlugin into next.config.ts
- Created full i18n infrastructure: config, request handler, locale provider with browser detection and localStorage persistence
- Added anti-FOWL script that sets html lang before React hydrates
- Created LanguageToggle component and wired it into layout next to ThemeToggle

## Task Commits

Each task was committed atomically:

1. **Task 1: Install next-intl and create i18n infrastructure files** - `945a5dd` (feat)
2. **Task 2: Wire LocaleProvider into layout and add anti-FOWL script** - `b746f72` (feat)

## Files Created/Modified
- `pyrux_portfolio/i18n/config.ts` - Locale constants (locales array, Locale type, defaultLocale)
- `pyrux_portfolio/i18n/request.ts` - Build-time getRequestConfig for next-intl
- `pyrux_portfolio/i18n/locale-provider.tsx` - Client-side LocaleContext with NextIntlClientProvider, browser detection, localStorage
- `pyrux_portfolio/global.d.ts` - Type-safe translation keys via AppConfig module augmentation
- `pyrux_portfolio/messages/es.json` - Scaffold Spanish messages (Hero, HeroButtons namespaces)
- `pyrux_portfolio/messages/en.json` - Scaffold English messages mirroring es.json
- `pyrux_portfolio/components/ui/LanguageToggle.tsx` - Toggle button switching between ES/EN
- `pyrux_portfolio/next.config.ts` - Added createNextIntlPlugin wrapper
- `pyrux_portfolio/app/layout.tsx` - Added LocaleProvider, LanguageToggle, anti-FOWL script

## Decisions Made
- Used client-side locale context (not middleware routing) since static export does not support middleware
- Anti-FOWL script sets both `lang` and `data-locale` on documentElement for CSS selectors
- LanguageToggle uses identical styling pattern as ThemeToggle (round, bordered, backdrop blur)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- i18n infrastructure ready for Plan 02 to extract all Spanish strings into message files
- useLocale hook available for any component to read/set locale
- Message namespace pattern established (Hero, HeroButtons) for Plan 02 to extend

## Self-Check: PASSED

All 7 created files verified on disk. Both task commits (945a5dd, b746f72) verified in git log.

---
*Phase: 04-internationalization*
*Completed: 2026-03-19*
