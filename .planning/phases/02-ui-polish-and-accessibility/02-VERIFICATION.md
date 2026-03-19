---
phase: 02-ui-polish-and-accessibility
verified: 2026-03-19T16:00:00Z
status: gaps_found
score: 17/19 must-haves verified
re_verification: false
gaps:
  - truth: "There is only one Toaster instance in the entire app (in layout.tsx)"
    status: failed
    reason: "OurTeam.tsx still contains a <Toaster> instance that was not removed during plan 02-02. ContactUs.tsx and Footer.tsx had their Toasters removed, but OurTeam.tsx was missed. Two Toaster instances now exist: WhatsAppFAB.tsx and OurTeam.tsx."
    artifacts:
      - path: "pyrux_portfolio/components/sections/OurTeam.tsx"
        issue: "Lines 10 and 94-103 — import and render of <Toaster> must be removed; the consolidated Toaster in WhatsAppFAB.tsx already covers all toast notifications app-wide"
    missing:
      - "Remove `import { Toaster } from 'sonner'` from OurTeam.tsx"
      - "Remove the `<Toaster position='bottom-center' toastOptions={{...}} />` JSX block from OurTeam.tsx (lines 94-103)"
      - "Remove the wrapping `<>...</>` fragment and replace with a direct `<Section>` + `<CreatorModal>` render if needed"

  - truth: "OurStack technology badges fade in when expanding via Ver mas"
    status: partial
    reason: "containerVariants with staggerChildren: 0.05 is set on the wrapper motion.div, but child motion.span elements each declare their own explicit `initial='hidden' animate='visible'` props. In Framer Motion, explicit initial/animate on children override parent stagger orchestration. When the user clicks 'Ver mas', new badges enter via AnimatePresence and animate individually (fade+scale), but they fire simultaneously rather than with the intended 50ms stagger delay between each badge."
    artifacts:
      - path: "pyrux_portfolio/components/sections/OurStack.tsx"
        issue: "Lines 93-94: each motion.span has explicit `initial='hidden' animate='visible'` which bypasses the parent containerVariants stagger. Remove explicit initial/animate from the motion.span children and let them inherit from the parent container variants to restore the staggered entry."
    missing:
      - "Remove explicit `initial='hidden'` and `animate='visible'` from each `motion.span` in OurStack.tsx (lines 93-94) — children should inherit from parent containerVariants to get the stagger"
      - "The `exit='exit'` prop on each motion.span can remain (AnimatePresence needs it for exit animation)"
human_verification:
  - test: "Open landing page on a mobile viewport (<640px) and tap a project card"
    expected: "Modal slides up from the bottom, visible handle bar at top, internal scroll works, dragging down more than ~100px closes the modal"
    why_human: "Bottom sheet interaction requires touch/gesture testing that cannot be verified programmatically"
  - test: "Navigate to landing page and scroll down past the header area"
    expected: "The ThemeToggle button scrolls away with the page and is no longer visible — it does NOT follow the user as a fixed/sticky element"
    why_human: "Scroll-position behavior requires visual browser testing"
  - test: "Open the OurStack section and click 'Ver mas'"
    expected: "Technology badges appear one by one in a staggered sequence (50ms apart) rather than all appearing at the exact same time"
    why_human: "Stagger animation timing requires visual inspection to confirm the perceived effect"
  - test: "Scroll to the Contact section via anchor link (#contacto)"
    expected: "The contact cards appear vertically centered within the viewport, not flush against the top"
    why_human: "Viewport centering requires visual confirmation in a browser"
---

# Phase 2: UI Polish and Accessibility Verification Report

**Phase Goal:** Polish all UI components to production quality — mobile-first bottom sheets, premium Process section redesign, card consistency, accessibility compliance (44px touch targets, aria-expanded, alt text), and layout completeness (banner, FAB, footer).
**Verified:** 2026-03-19T16:00:00Z
**Status:** gaps_found
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| #  | Truth | Status | Evidence |
|----|-------|--------|---------|
| 1  | On mobile, tapping a project/company/creator card opens a bottom sheet that slides up from bottom with a visible handle bar | VERIFIED | Modal.tsx lines 40-50: `bottomSheetVariants` with `y: "100%"`, line 106: `drag="y"`, line 117-120: handle bar `sm:hidden w-10 h-1 rounded-full bg-border` |
| 2  | The bottom sheet can be dismissed by dragging down past 100px | VERIFIED | Modal.tsx line 110-112: `onDragEnd` handler checks `info.offset.y > 100` |
| 3  | On desktop, modals still appear as centered dialogs — no regression | VERIFIED | Modal.tsx line 83: `items-end sm:items-center`, line 101: `sm:h-auto sm:max-h-[85vh] sm:rounded-2xl sm:border` |
| 4  | Project modal shows all technologies without truncation | VERIFIED | ProjectModal.tsx line 106-113: `flex flex-wrap gap-2 mb-6` maps all `project.technologies` |
| 5  | Project modal image carousel shows arrows when 2+ images exist | VERIFIED | ProjectModal.tsx line 24: `const hasArrows = images.length >= 2` |
| 6  | Project modal date and Ver en vivo button appear on the same row | VERIFIED | ProjectModal.tsx lines 116-133: single `flex items-center justify-between` div |
| 7  | Process section uses vertical timeline with connector line, step number bubbles, Lucide icons, large semi-transparent background numbers, and staggered scroll animations | VERIFIED | ProcessSection.tsx: `stepVariants` (x: -20, delay: i*0.15), `left-[1.75rem]` connector, `w-14 h-14` bubbles, `text-[5rem] text-coral/5` bg numbers, `MessageCircle Palette Code Rocket HeartHandshake` icons |
| 8  | An orange promotional banner appears at the very top of the landing page before the theme toggle | VERIFIED | PromoBanner.tsx: `bg-[#F97316]`; layout.tsx line 160: `<PromoBanner />` before ThemeToggle div |
| 9  | A WhatsApp floating action button is fixed at the bottom-right corner on all pages | VERIFIED | WhatsAppFAB.tsx: `fixed bottom-6 right-6 z-50`, `wa.me/5493416941225`, `whileHover={{ scale: 1.08 }}`; layout.tsx line 165: `<WhatsAppFAB />` after `{children}` |
| 10 | The Footer shows a logo, tagline, nav links (Proyectos, Clientes, Precios, Contacto), and dynamic copyright year | VERIFIED | Footer.tsx: Image `Pyrux-logo.svg`, tagline, nav with Proyectos/Clientes/Precios/Contacto, `currentYear` dynamic |
| 11 | The Contact section content is vertically centered in the viewport | VERIFIED | page.tsx lines 21-23: `<div className="min-h-screen flex items-center justify-center">` wrapping `<ContactUs />` |
| 12 | Contact section animations use minimum 600ms duration with easeInOut easing | VERIFIED | ContactUs.tsx lines 22-27: `duration: 0.6, ease: "easeInOut"` |
| 13 | The ThemeToggle is not sticky/fixed — it scrolls away with the page | VERIFIED | ThemeToggle.tsx: `absolute` positioning inside `<div className="relative z-50">` — not fixed or sticky |
| 14 | There is only one Toaster instance in the entire app (in layout.tsx) | FAILED | Two Toaster instances exist: WhatsAppFAB.tsx (lines 5,10-19) AND OurTeam.tsx (lines 10,94-103). The latter was not removed during plan 02-02. |
| 15 | Project card descriptions are clamped to exactly 3 lines | VERIFIED | ProjectCard.tsx line 57: `line-clamp-3` |
| 16 | Project and company carousel cards have equal height | VERIFIED | ProjectCard.tsx line 20: `h-56`; CompanyCard.tsx line 20: `h-56` |
| 17 | MaintenanceCard hover animation matches ProjectCard hover effect | VERIFIED | MaintenanceCard.tsx line 49: `whileHover={{ y: -2 }}` matching ProjectCard; `hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]` via colorTokens |
| 18 | OurStack technology badges fade in when expanding via Ver mas | PARTIAL | `containerVariants` with `staggerChildren: 0.05` is present (OurStack.tsx lines 31-34), but child `motion.span` elements have explicit `initial="hidden" animate="visible"` (lines 93-94) that bypass parent stagger orchestration. Badges animate individually via AnimatePresence but not in staggered sequence. |
| 19 | All interactive elements have touch targets of at least 44x44px | VERIFIED | Modal.tsx close button: `w-11 h-11`; ThemeToggle.tsx: `w-11 h-11`; ProjectModal.tsx carousel arrows: `w-11 h-11`; CreatorModal.tsx social links: `w-11 h-11` |
| 20 | FAQ accordion buttons have correct aria-expanded attribute | VERIFIED | FAQAccordion.tsx line 20: `aria-expanded={open}` |
| 21 | All images have descriptive alt text (no empty or generic alts) | VERIFIED | ProjectCard: `Captura de pantalla de ${project.title}`; CreatorModal/OurTeam: `Foto de ${creator.name}`; CompanyCard: `${company.name} logo`; no empty `alt=""` found across codebase |

**Score:** 19/21 truths verified (17 fully VERIFIED, 1 PARTIAL, 1 FAILED)

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `pyrux_portfolio/components/ui/Modal.tsx` | Bottom sheet mobile variant with drag-to-dismiss | VERIFIED | Contains `drag="y"`, `dragConstraints={{ top: 0 }}`, `bottomSheetVariants`, handle bar, `h-[90vh]` mobile / `sm:h-auto` desktop |
| `pyrux_portfolio/components/modals/ProjectModal.tsx` | Carousel arrow threshold change + date/link same row | VERIFIED | `images.length >= 2`, `w-56 h-40`, `width={224} height={160}`, `flex items-center justify-between` row |
| `pyrux_portfolio/components/sections/ProcessSection.tsx` | Vertical timeline redesign | VERIFIED | `stepVariants`, `w-14 h-14` bubbles, `text-[5rem]` bg numbers, `text-coral/5`, `left-[1.75rem]` line, `whileInView` stagger, no `sm:flex-row` |
| `pyrux_portfolio/components/layout/PromoBanner.tsx` | Orange promotional banner | VERIFIED | `bg-[#F97316]`, text, no "use client" — pure Server Component |
| `pyrux_portfolio/components/layout/WhatsAppFAB.tsx` | Floating WhatsApp CTA button | VERIFIED | `wa.me/5493416941225`, `fixed bottom-6 right-6 z-50`, `whileHover={{ scale: 1.08 }}`, `aria-label` |
| `pyrux_portfolio/components/layout/Footer.tsx` | Enhanced footer with logo, nav links, tagline | VERIFIED | `Pyrux-logo.svg`, `Proyectos`/`Clientes`/`Precios`/`Contacto` nav, tagline, `currentYear`, no `<Toaster>` |
| `pyrux_portfolio/components/cards/ProjectCard.tsx` | 3-line clamp on description, equal height | VERIFIED | `line-clamp-3`, `h-56`, `flex-1` on content div |
| `pyrux_portfolio/components/cards/CompanyCard.tsx` | Equal height matching ProjectCard | VERIFIED | `h-56` |
| `pyrux_portfolio/components/cards/MaintenanceCard.tsx` | Matching hover animation | VERIFIED | `whileHover={{ y: -2 }}` |
| `pyrux_portfolio/components/ui/Modal.tsx` (close button) | 44px close button | VERIFIED | `w-11 h-11` on close button |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `app/layout.tsx` | `PromoBanner.tsx` | Import and render before ThemeToggle | VERIFIED | layout.tsx line 4: `import PromoBanner`, line 160: `<PromoBanner />` before ThemeToggle div |
| `app/layout.tsx` | `WhatsAppFAB.tsx` | Import and render after children | VERIFIED | layout.tsx line 5: `import WhatsAppFAB`, line 165: `<WhatsAppFAB />` after `{children}` |
| `Modal.tsx` | All three modal components | bottomSheetVariants propagates automatically | VERIFIED | ProjectModal, CompanyModal, CreatorModal all use `<Modal>` wrapper — bottom sheet pattern inherited |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|---------|
| UI-01 | Plan 02-01 | Mobile modals use bottom sheet pattern | SATISFIED | Modal.tsx: `bottomSheetVariants`, `drag="y"`, handle bar |
| UI-02 | Plan 02-03 | Project card description clamped to 3 lines | SATISFIED | ProjectCard.tsx: `line-clamp-3` |
| UI-03 | Plan 02-03 | Project and company carousel cards have equal height | SATISFIED | ProjectCard.tsx: `h-56`; CompanyCard.tsx: `h-56` |
| UI-04 | Plan 02-01 | Project modal shows all technologies without truncation | SATISFIED | ProjectModal.tsx: `flex flex-wrap gap-2` over all technologies |
| UI-05 | Plan 02-03 | Technology badges in OurStack fade in when expanding | PARTIAL | containerVariants present but stagger bypassed by explicit child initial/animate props |
| UI-06 | Plan 02-03 | OurStack category selector hidden in expanded state | SATISFIED | OurStack.tsx line 55: `{isExpanded && (` wraps entire tabs section |
| UI-07 | Plan 02-01 | Project modal carousel: larger images, arrows visible with 2+ images | SATISFIED | `images.length >= 2`, `w-56 h-40`, `width={224} height={160}` |
| UI-08 | Plan 02-01 | Ver en vivo button and date on same row | SATISFIED | ProjectModal.tsx: `flex items-center justify-between` row |
| UI-09 | Plan 02-02 | ThemeToggle is static (not sticky) | SATISFIED | ThemeToggle uses `absolute` inside `relative z-50` div — scrolls away |
| UI-10 | Plan 02-02 | Process section vertical timeline redesign | SATISFIED | ProcessSection.tsx: full redesign with connector, icons, bg numbers, stagger |
| UI-11 | Plan 02-02 | Contact section vertically centered in viewport | SATISFIED | page.tsx: `min-h-screen flex items-center justify-center` wrapper |
| UI-12 | Plan 02-02 | Contact animations 600ms easeInOut | SATISFIED | ContactUs.tsx: `duration: 0.6, ease: "easeInOut"` |
| UI-13 | Plan 02-02 | Footer with logo, tagline, nav links, dynamic year | SATISFIED | Footer.tsx: all elements present |
| UI-14 | Plan 02-02 | Orange banner at top of landing page | SATISFIED | PromoBanner.tsx + layout.tsx |
| UI-15 | Plan 02-02 | WhatsApp FAB fixed on screen | SATISFIED | WhatsAppFAB.tsx: `fixed bottom-6 right-6 z-50` |
| UI-16 | Plan 02-03 | Maintenance card hover matches project card hover | SATISFIED | MaintenanceCard.tsx: `whileHover={{ y: -2 }}`, matching border/shadow |
| A11Y-01 | Plan 02-03 | All interactive elements have 44px touch targets | SATISFIED | Modal close: `w-11 h-11`; ThemeToggle: `w-11 h-11`; carousel arrows: `w-11 h-11`; CreatorModal links: `w-11 h-11` |
| A11Y-02 | Plan 02-03 | FAQ accordion buttons have aria-expanded | SATISFIED | FAQAccordion.tsx: `aria-expanded={open}` |
| A11Y-03 | Plan 02-03 | All images have descriptive alt text | SATISFIED | Spanish descriptive alt text across all image components, no empty alts |

**Orphaned requirements check:** A11Y-04 (console.log removal) and A11Y-05 (image priority/sizes props) are mapped to Phase 1 in REQUIREMENTS.md — no orphaned requirements for Phase 2.

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `pyrux_portfolio/components/sections/OurTeam.tsx` | 10, 94-103 | Duplicate `<Toaster>` instance — plan 02-02 claimed this was consolidated but OurTeam.tsx was missed | Warning | Two simultaneous Toaster instances may cause duplicate toast notifications when the email copy action fires from the OurTeam section or the CreatorModal |

### Human Verification Required

### 1. Mobile Bottom Sheet Interaction

**Test:** Open landing page on a mobile viewport (<640px), tap a project card to open its modal, then attempt to drag the modal down past 100px
**Expected:** Modal slides up from the bottom with a visible grey handle bar. Internal content scrolls. Dragging down ~100px+ dismisses the modal with a slide-down animation.
**Why human:** Touch gesture drag-to-dismiss behavior cannot be verified programmatically.

### 2. ThemeToggle Non-Sticky Scroll Behavior

**Test:** Load the landing page in a browser, then scroll down past the header area.
**Expected:** The theme toggle button (sun/moon icon) disappears off-screen as the page scrolls — it does NOT remain fixed in the viewport corner while scrolling.
**Why human:** Scroll position behavior requires a live browser to confirm the visual result.

### 3. OurStack Stagger Animation on Expand

**Test:** Open the landing page, scroll to the "Nuestro Stack" section, then click "Ver mas".
**Expected:** Technology badges should appear in a staggered sequence — each badge appearing ~50ms after the previous one, creating a wave effect.
**Note:** Based on code analysis, the stagger may not work as intended (see Gaps Summary). The badges will animate individually but likely appear simultaneously rather than sequentially.
**Why human:** Animation timing subtleties require visual confirmation.

### 4. Contact Section Viewport Centering

**Test:** On the landing page, click a "Contacto" anchor link (or scroll to the #contacto section).
**Expected:** The four contact cards (LinkedIn, Email, WhatsApp, Instagram) appear vertically centered in the visible viewport, not flush against the top of the screen.
**Why human:** Viewport centering requires visual confirmation in a browser at different screen heights.

### Gaps Summary

Two gaps were found:

**Gap 1 — Duplicate Toaster (Blocker):** The plan 02-02 SUMMARY claimed that Toaster instances were consolidated from ContactUs.tsx and Footer.tsx into WhatsAppFAB.tsx. This consolidation was executed correctly for those two files, but OurTeam.tsx was not on the plan's explicit file list and was missed. OurTeam.tsx still imports and renders its own `<Toaster>` (lines 10 and 94-103). The result is two simultaneous Toaster providers in the React tree. This can cause duplicate toast notifications or unexpected stacking behavior when the email copy action fires.

**Gap 2 — OurStack Stagger Bypass (Partial):** The `containerVariants` with `staggerChildren: 0.05` was added to the wrapper `motion.div` in OurStack.tsx. However, each child `motion.span` also has explicit `initial="hidden" animate="visible"` props. In Framer Motion's variant propagation model, explicit `initial` and `animate` props on children override the parent's orchestration props (including `staggerChildren`). The practical effect: when the user clicks "Ver mas", new badges animate individually via `AnimatePresence mode="popLayout"` (fade+scale entry), but all fire simultaneously rather than in the intended 50ms staggered sequence. UI-05 is partially satisfied (badges do animate on expand) but the visual stagger effect is not working.

---

_Verified: 2026-03-19T16:00:00Z_
_Verifier: Claude (gsd-verifier)_
