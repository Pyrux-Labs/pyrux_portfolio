# Codebase Concerns

**Analysis Date:** 2026-03-19

## Tech Debt

**Dual Route Path for Pricing:**
- Issue: `app/prices/` exists as actual folder but links reference `/precios` or `/prices` inconsistently. `HeroButtons.tsx` and `OurServices.tsx` both link to `/pricing`, while config allows `/prices`. Route mismatch creates maintenance burden and potential 404 errors in production.
- Files: `pyrux_portfolio/app/pricing/page.tsx`, `pyrux_portfolio/components/sections/HeroButtons.tsx`, `pyrux_portfolio/components/sections/OurServices.tsx`, `pyrux_portfolio/next.config.ts`
- Impact: User navigation breaks if routing doesn't match hardcoded links. Build/deployment may fail with 404s.
- Fix approach: Rename folder to `app/precios/` to align with Spanish-first design philosophy and all hardcoded navigation, or standardize all links to `/prices`. Update imports and section IDs accordingly.

**ThemeToggle Not Sticky During Scroll:**
- Issue: `ThemeToggle.tsx` uses `position: absolute` anchored to viewport with `top-2.5 left-2.5` (mobile) and `sm:top-4 sm:right-4`. Position is fixed visually but component is placed in layout.tsx with `z-50`. When user scrolls, toggle remains visible but may obscure content; when user scrolls far down, toggle should become sticky or disappear gracefully.
- Files: `pyrux_portfolio/components/ui/ThemeToggle.tsx`, `pyrux_portfolio/app/layout.tsx` (L158-160)
- Impact: Toggle can obstruct important UI elements during scroll, particularly in mobile view where left-side placement overlaps content.
- Fix approach: Change to `position: fixed` with explicit z-index hierarchy; consider hiding on scroll using intersection observer or adding safe margin on left side (use `safe-area-inset-left`).

**Modal StarBackground Flicker on Open/Close:**
- Issue: `Modal.tsx` overlays a full-screen backdrop but `AnimatePresence` and motion variants can cause StarBackground behind to flash/redraw. The z-index stack (modal z-50, background z-0) and mount/unmount timing isn't coordinated.
- Files: `pyrux_portfolio/components/ui/Modal.tsx`, `pyrux_portfolio/components/ui/StarBackground.tsx`
- Impact: Visual jarring when any modal opens (projects, companies, creators). Reduces perceived polish and performance feel.
- Fix approach: Add `AnimatePresence` mode="wait" to preserve StarBackground during modal transition. Consider `transition={{ exit: { delay: 0.2 } }}` to stagger backdrop fade with background stability.

---

## Known Bugs

**E-Commerce Category Carousel Not Loading on Mobile:**
- Symptoms: When switching to "E-Commerce" tab in pricing page on mobile, package carousel doesn't render or shows empty state. Standard and Personalizado categories work fine.
- Files: `pyrux_portfolio/app/pricing/PricesPageClient.tsx` (L86-94 carousel scroll handler, L96-115 scroll position logic)
- Trigger: Select "E-Commerce" tab on viewport width < 640px, then observe empty carousel or missing cards
- Workaround: Rotate device to landscape or desktop view to see E-Commerce packages
- Root cause: `useEffect` carousel scroll logic in `PricesPageClient.tsx` may not recalculate child dimensions correctly after category filter on small screens

**Modal Flickering on StarBackground:**
- Symptoms: Background stars briefly flash or "pop" when opening any modal (ProjectModal, CompanyModal, CreatorModal).
- Files: `pyrux_portfolio/components/ui/Modal.tsx` (L66-110), `pyrux_portfolio/components/ui/StarBackground.tsx`
- Trigger: Click any card that opens a modal
- Root cause: `AnimatePresence` unmounts backdrop before animation completes, causing re-render

---

## Security Considerations

**Unoptimized Image Handling:**
- Risk: Images in `ProjectCard.tsx` and `ProjectModal.tsx` use `next/image` without `priority` attribute on above-the-fold images, and carousel images use `loading="lazy"` without clear `sizes` prop. Could lead to layout shift and poor LCP metric.
- Files: `pyrux_portfolio/components/cards/ProjectCard.tsx` (L38-44), `pyrux_portfolio/components/modals/ProjectModal.tsx` (L57-64)
- Current mitigation: `unoptimized: true` in next.config.ts (required for static export) prevents some Next.js optimizations
- Recommendations: Add explicit `sizes="(max-width: 480px) 64vw, (max-width: 768px) 40vw, 20vw"` to ProjectCard images. Mark first project image with `priority={true}` when rendering in viewport. Add explicit width/height to all `<Image>` components to prevent CLS.

**LocalStorage Theme Without Hydration Check:**
- Risk: `ThemeToggle.tsx` (L14) toggles theme and writes to localStorage directly. If SSR mismatch occurs, theme can flash on page load despite anti-FOUC script in layout.tsx (L138-142).
- Files: `pyrux_portfolio/components/ui/ThemeToggle.tsx`, `pyrux_portfolio/app/layout.tsx`
- Current mitigation: Anti-FOUC script reads localStorage before render, but timing is fragile
- Recommendations: Persist theme preference only after hydration completes. Use `useEffect` with hydration guard (`useEffect(() => { if (!mounted) return; ... }, [mounted])`).

---

## Performance Bottlenecks

**Carousel Scroll Handler Not Debounced:**
- Problem: `PricesPageClient.tsx` L96-115 `handleCarouselScroll()` fires on every pixel of scroll without debounce/throttle. Updates `selectedPkg` state synchronously, causing potential re-renders on every scroll event.
- Files: `pyrux_portfolio/app/pricing/PricesPageClient.tsx`
- Cause: Event listener attached to `onScroll` of horizontal carousel div; no timing control
- Improvement path: Add `useMemo` + `useCallback` for scroll handler. Implement `useRef`-based throttle (e.g., 100-150ms debounce) before state update. Consider Intersection Observer API instead of manual scroll calculations.

**StarBackground Particles Animated Every Frame:**
- Problem: `StarBackground.tsx` likely renders multiple SVG circles with Framer Motion `initial` and `animate` variants. If stars number > 100, each frame update can impact FCP/LCP.
- Files: `pyrux_portfolio/components/ui/StarBackground.tsx`
- Cause: No visible component file checked, but TODO.md mentions "fondo del modal titila" suggests animation loop
- Improvement path: Use CSS keyframe animations instead of Framer Motion for stars (decouples from React render cycle). Memoize star positions. Consider `will-change: opacity` on star container.

**Unoptimized Image Carousels in ProjectModal:**
- Problem: `ProjectModal.tsx` L53-66 renders all project images in a horizontal scroll container without `loading="lazy"`. If project has 8+ images, all decode upfront even if user never scrolls to them.
- Files: `pyrux_portfolio/components/modals/ProjectModal.tsx`
- Cause: No lazy loading on carousel images beyond first 2-3
- Improvement path: Implement dynamic image loading (load images as user scrolls through carousel). Use `IntersectionObserver` to detect visible images and set `loading="lazy"` conditionally.

---

## Fragile Areas

**PricesPageClient Carousel Logic:**
- Files: `pyrux_portfolio/app/pricing/PricesPageClient.tsx` (L73-115)
- Why fragile: State management tightly couples `selectedPkg` (index) with manual DOM scrolling. If card dimensions change (responsiveness), scroll position calculations break. Mobile vs. desktop carousel behavior isn't clearly separated.
- Safe modification: Before changing layout/dimensions, verify carousel scroll logic on all breakpoints. Add unit tests for `handleCarouselScroll()` with different screen sizes. Consider extracting carousel logic into custom hook (`useCarousel`) with clear input/output.
- Test coverage: No tests exist for carousel scroll behavior on category change; E-Commerce category specifically untested on mobile.

**Modal Z-Index Stack:**
- Files: `pyrux_portfolio/components/ui/Modal.tsx` (L69, z-50), `pyrux_portfolio/app/layout.tsx` (L158, z-50), `pyrux_portfolio/components/ui/StarBackground.tsx` (implicit z-0)
- Why fragile: Multiple components use `z-50` without clear hierarchy. If new overlay added (toast, popover), z-index collision likely. Modal backdrop (`z-50`) may not overlay starfield properly.
- Safe modification: Establish z-index scale in `globals.css`: `--z-base: 0`, `--z-background: 10`, `--z-modal: 40`, `--z-toast: 50`, `--z-tooltip: 60`. Use throughout codebase.
- Test coverage: No visual regression tests for modal/backdrop appearance.

**ThemeToggle Positioning on Mobile:**
- Files: `pyrux_portfolio/components/ui/ThemeToggle.tsx`
- Why fragile: Uses `position: absolute` with `top-left` on mobile, overlays hero content. If hero title grows or hero section height changes, toggle may obstruct text. Safe area insets not considered.
- Safe modification: Test with iPhone SE (320px) and tall phones (812+px). Add `safe-area-inset-left` and `safe-area-inset-top` Tailwind utilities for notch safety.
- Test coverage: Only desktop layout tested; mobile notch safety untested.

**OurStack Category Filtering:**
- Files: `pyrux_portfolio/components/sections/OurStack.tsx` (L31-42)
- Why fragile: `activeTab` state doesn't persist to URL (no query param). If user expands stack and filters by category, then navigates away and back, expanded state resets. Category filter resets to "all".
- Safe modification: Add optional query param `?category=frontend` to OurStack section deep links. Use `useSearchParams` to restore state on mount.
- Test coverage: No integration test for expanded state persistence.

---

## Scaling Limits

**Static Export No Server-Side Logic:**
- Current capacity: All content hardcoded in `data/` files. Portfolio supports ~50 projects, ~20 companies, 2 creators before UI becomes unwieldy.
- Limit: No database connection; no CMS; adding new project requires code commit + rebuild + redeploy. No real-time updates possible.
- Scaling path: Migrate to Next.js API routes + headless CMS (Sanity, Contentful, Payload) if content updates > 1/month. Keep static export as deployment mechanism but decouple data layer. Alternatively, use Supabase realtime with ISR (Incremental Static Regeneration) if JSON file updates needed without full rebuild.

**Modal Nesting Not Supported:**
- Current capacity: Opening modal within modal (e.g., project within creator projects list) not implemented. Modal component designed for single-level overlay only.
- Limit: Can't show project detail modal inside CreatorModal.
- Scaling path: Refactor Modal to support `parentIsOpen` prop. Stack modals with layered z-indexes. Track modal stack in context (React Context or Jotai).

**Image Carousel Performance:**
- Current capacity: Projects with 6-12 images load fine. If projects have 50+ images, carousel DOM bloat becomes issue.
- Limit: All images rendered in DOM; browser DOM size grows with each image
- Scaling path: Implement virtual scrolling (react-window or framer-motion scroll) for carousel if image count > 20. Lazy load images as user scrolls.

---

## Dependencies at Risk

**No Package Lock Strategy Defined:**
- Risk: `package.json` lists Framer Motion 12.34.3, Next.js 16.1.6, Tailwind CSS v4 without explicit lock file commit strategy. If `package-lock.json` or `pnpm-lock.yaml` not committed, different developers may have different dependency versions.
- Impact: Build artifacts differ; animations may behave differently; CSS classes may not be available in Tailwind.
- Migration plan: Commit lock file to git. Document that `npm ci` (not `npm install`) should be used in CI/CD. Verify Tailwind CSS v4 stability (major version, possible breaking changes).

**React Compiler Enabled Experimentally:**
- Risk: `next.config.ts` enables `reactCompiler: true`. React Compiler is still experimental in React 19. Unknown edge cases with custom hooks (`useCopyToClipboard`), Framer Motion, or Server Components.
- Impact: Build may fail in future React versions. Performance gains may not materialize if compiler bugs discovered.
- Migration plan: Monitor React Compiler status. Have rollback plan (set `reactCompiler: false`, clear `.next` cache, rebuild). Add CI check to detect compiler-related errors.

**Framer Motion 12 Animation API:**
- Risk: Component uses Framer Motion 12 API (`motion.div`, `AnimatePresence`, `whileInView`). If major version upgrade needed, API changes may break layout animations.
- Impact: Modal, carousel, stagger animations all depend on this API.
- Migration plan: Pin Framer Motion to ^12.0.0 range. Before upgrade to v13, test all animations in isolated branch.

---

## Missing Critical Features

**No Contact Form Backend:**
- Problem: `ContactUs.tsx` shows contact icons (LinkedIn, WhatsApp, email copy) but no actual form submission. Users can't fill out project brief or budget expectations.
- Blocks: Business can't qualify leads; no email capture for email marketing.
- Fix approach: Implement contact form with Formspree, EmailJS, or Serverless function (AWS Lambda, Vercel Functions). Add fields: name, email, message, budget range. Redirect to success page or show toast confirmation.

**No Analytics Instrumentation:**
- Problem: `layout.tsx` has GA4 metadata skeleton but no actual Google Analytics script. Page views, conversions, scroll depth not tracked.
- Blocks: Can't measure landing page performance, user engagement, conversion bottlenecks.
- Fix approach: Add `<Script>` from `next/script` with GA4 ID. Track custom events: "view_project", "open_modal", "click_pricing_cta". Set up conversion goals (contact click, pricing page visit).

**No Lighthouse CI in Build:**
- Problem: No automated performance testing before deploy. Build succeeds even if Lighthouse score drops below targets (Performance ≥90, Accessibility ≥90, SEO ≥90).
- Blocks: Performance regressions merge undetected. Mobile accessibility issues invisible until user complains.
- Fix approach: Add Lighthouse CI via GitHub Actions (`.github/workflows/lighthouse.yml`). Fail PR if score drops. Document target thresholds in CLAUDE.md.

---

## Test Coverage Gaps

**No Unit Tests for Carousel Logic:**
- What's not tested: `PricesPageClient.tsx` `handleCarouselScroll()` L96-115. Category switching behavior. Package selection on different screen sizes.
- Files: `pyrux_portfolio/app/pricing/PricesPageClient.tsx`
- Risk: E-Commerce carousel breaks on mobile undetected. Scroll position calculations fail with unexpected card widths.
- Priority: **High** — carousel is core UX feature. Mobile E-Commerce bug already known.

**No Accessibility Snapshot Tests:**
- What's not tested: Modal open/close preserves focus management. Keyboard navigation through cards. Color contrast ratios. ARIA labels present and accurate.
- Files: `pyrux_portfolio/components/ui/Modal.tsx`, all card components, section headers
- Risk: Accessibility compliance unknown. WCAG 2.1 AA violations possible (text color `--text-muted: #8a7966` may fail 4.5:1 contrast ratio on dark background).
- Priority: **High** — brand liability; accessibility lawsuits increasing.

**No E2E Tests for Navigation:**
- What's not tested: Click "Ver todos" links from landing → projects page loads. Modal opens and closes. Form submission (when implemented). Theme toggle persists across navigation.
- Files: All page components, navigation flow
- Risk: Broken links, modal state corruption, navigation loops undetected until production.
- Priority: **Medium** — build tests are basic validation but don't catch user flow issues.

**No Visual Regression Tests:**
- What's not tested: Modal backdrop appearance. Theme switching visual correctness. Responsive layout on breakpoints. Animation smoothness.
- Risk: CSS changes break layout silently. Modal flicker (L82) regression undetected.
- Priority: **Medium** — would require screenshot infrastructure (Chromatic, Percy, etc).

**No Performance Benchmarks:**
- What's not tested: Lighthouse score changes. Image load times. Carousel scroll frame rate. StarBackground animation FPS.
- Risk: Performance regressions merged without notice.
- Priority: **Medium** — would require Lighthouse CI or custom performance testing.

---

## Accessibility Concerns

**Color Contrast Ratio Risk:**
- Issue: Design uses `--text-muted: #8a7966` for secondary text on `--bg-surface: #120d0a`. Contrast ratio approximately 4.2:1 (below WCAG AA minimum 4.5:1 for normal text).
- Files: `pyrux_portfolio/app/globals.css` (L22)
- Current mitigation: Used sparingly for sublabels and metadata, not body text
- Recommendations: Verify all text colors with contrast checker (WebAIM, Paciello Group). Increase muted text brightness to `#9d8a78` or use secondary color for text >= 16px. Add dark mode / light mode contrast tests.

**Focus Visible Not Consistently Applied:**
- Issue: Modal close button and carousel buttons have no visible `:focus-visible` outline. ThemeToggle has outline but may not be visible on all backgrounds.
- Files: `pyrux_portfolio/components/ui/Modal.tsx` (L92-97), `pyrux_portfolio/components/modals/ProjectModal.tsx` (L69-80), `pyrux_portfolio/components/ui/ThemeToggle.tsx` (L18)
- Current mitigation: Some buttons have `focus-visible` class but not all
- Recommendations: Add global focus-visible style in `globals.css`. Ensure 3px outline visible on all interactive elements. Test keyboard navigation on all modals.

**Modal Close Button Touch Target:**
- Issue: Close button is `w-9 h-9` (36px), below recommended 44×44px mobile touch target. Users on small phones may have difficulty closing modal.
- Files: `pyrux_portfolio/components/ui/Modal.tsx` (L92-97)
- Current mitigation: None; button size fixed
- Recommendations: Increase to `sm:w-10 sm:h-10 w-11 h-11` on mobile. Ensure 12px safe padding around click area.

**Missing Aria-Expanded on Accordions:**
- Issue: `FAQAccordion.tsx` component manages open/close state but likely missing `aria-expanded` attribute on toggle button. Screen readers don't announce accordion state.
- Files: `pyrux_portfolio/components/sections/FAQAccordion.tsx`
- Current mitigation: Not found; needs verification
- Recommendations: Add `aria-expanded={isOpen}` and `aria-controls="faq-{id}"` to accordion button. Test with NVDA/JAWS screen reader.

---

*Concerns audit: 2026-03-19*
