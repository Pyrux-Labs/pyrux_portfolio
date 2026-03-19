---
phase: 01-fixes-and-content
plan: 02
subsystem: ui
tags: [framer-motion, next-image, a11y, modal, carousel, i18n-es]

# Dependency graph
requires: []
provides:
  - "Flicker-free modal open/close with AnimatePresence mode=wait"
  - "Theme-aware company logos on /clients page"
  - "All English strings replaced with Spanish in OurTeam and CreatorModal"
  - "Image priority prop on above-the-fold creator photos"
  - "Image sizes prop on carousel cards (ProjectCard, CompanyCard)"
  - "Mobile carousel scroll fix for category switching"
affects: [02-ui-polish, 04-i18n]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "AnimatePresence mode=wait for overlay/modal exit sync"
    - "requestAnimationFrame for post-render DOM scroll"
    - "Theme-aware logo pattern with logo-for-light/logo-for-dark CSS classes"

key-files:
  created: []
  modified:
    - pyrux_portfolio/components/ui/Modal.tsx
    - pyrux_portfolio/app/clients/ClientsPageClient.tsx
    - pyrux_portfolio/components/sections/OurTeam.tsx
    - pyrux_portfolio/components/modals/CreatorModal.tsx
    - pyrux_portfolio/app/pricing/PricesPageClient.tsx
    - pyrux_portfolio/components/cards/ProjectCard.tsx
    - pyrux_portfolio/components/cards/CompanyCard.tsx
    - pyrux_portfolio/components/cards/PackageCard.tsx

key-decisions:
  - "Used requestAnimationFrame for carousel scroll timing instead of setTimeout"
  - "Kept Building2 icon as fallback for companies without logo assets"

patterns-established:
  - "Image sizes prop: always specify sizes on carousel/grid images to avoid oversized downloads"
  - "Image priority prop: use on above-the-fold images for LCP optimization"

requirements-completed: [BUG-01, BUG-02, BUG-03, BUG-04, BUG-05, A11Y-05]

# Metrics
duration: 2min
completed: 2026-03-19
---

# Phase 01 Plan 02: Bug Fixes and Image Performance Summary

**Fixed modal backdrop flicker, mobile carousel scroll, company logo theme switching, English string remnants, and added image performance props (priority, sizes)**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-19T12:44:51Z
- **Completed:** 2026-03-19T12:46:54Z
- **Tasks:** 2
- **Files modified:** 8

## Accomplishments
- Modal backdrop fades out smoothly on close via AnimatePresence mode="wait" and explicit exit animations
- /clients page shows real company logos with automatic light/dark theme switching
- All English strings in OurTeam and CreatorModal replaced with Spanish equivalents
- Mobile carousel correctly resets scroll position when switching categories
- Above-the-fold creator photos have priority prop for LCP optimization
- Carousel images have sizes prop for responsive loading

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix bugs -- modal flicker, company logos, English strings** - `2e3f488` (fix)
2. **Task 2: Fix mobile carousel and add image performance props** - `e97a5bb` (fix)

## Files Created/Modified
- `pyrux_portfolio/components/ui/Modal.tsx` - AnimatePresence mode="wait", backdrop exit animation
- `pyrux_portfolio/app/clients/ClientsPageClient.tsx` - Theme-aware company logos replacing Building2 icon
- `pyrux_portfolio/components/sections/OurTeam.tsx` - Spanish hover text, priority prop on images
- `pyrux_portfolio/components/modals/CreatorModal.tsx` - Spanish text for headings and links
- `pyrux_portfolio/app/pricing/PricesPageClient.tsx` - Carousel scroll fix with requestAnimationFrame
- `pyrux_portfolio/components/cards/ProjectCard.tsx` - sizes prop on thumbnail image
- `pyrux_portfolio/components/cards/CompanyCard.tsx` - sizes prop on all logo images
- `pyrux_portfolio/components/cards/PackageCard.tsx` - Selected indicator layout fix

## Decisions Made
- Used requestAnimationFrame for carousel scroll timing to ensure DOM has re-rendered with new category children before scrolling
- Kept Building2 icon as hidden fallback for companies without valid logo assets (graceful degradation)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed CTA bar responsive layout**
- **Found during:** Task 2
- **Issue:** CTA bar did not wrap properly on mobile, WhatsApp button could overflow
- **Fix:** Added flex-wrap to CTA container and w-full min-[400px]:w-auto to button
- **Files modified:** pyrux_portfolio/app/pricing/PricesPageClient.tsx
- **Committed in:** e97a5bb (Task 2 commit)

**2. [Rule 1 - Bug] Fixed PackageCard selected indicator causing title jump**
- **Found during:** Task 2
- **Issue:** Selected indicator used absolute positioning causing layout shift when toggled
- **Fix:** Reserved fixed height space for indicator to prevent content jump
- **Files modified:** pyrux_portfolio/components/cards/PackageCard.tsx
- **Committed in:** e97a5bb (Task 2 commit)

---

**Total deviations:** 2 auto-fixed (2 bugs)
**Impact on plan:** Both fixes improve mobile UX without scope creep.

## Issues Encountered
None - all changes applied cleanly, build passes.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All observable bugs fixed, ready for UI polish (Phase 02)
- Image performance optimized with priority and sizes props
- All user-facing text is in Spanish, ready for i18n extraction (Phase 04)

---
*Phase: 01-fixes-and-content*
*Completed: 2026-03-19*
