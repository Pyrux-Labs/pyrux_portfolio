# Phase 1: Fixes and Content - Research

**Researched:** 2026-03-19
**Domain:** Bug fixes, static content updates, data corrections in a Next.js 16 + React 19 portfolio
**Confidence:** HIGH

## Summary

Phase 1 is entirely about fixing observable bugs and updating static content strings. No new features, no architectural changes. The codebase is well-structured with clear data/component separation: all content lives in `data/*.ts` files, all types in `types/`, and components follow a Server/Client split pattern. The fixes range from trivial string replacements (FAQ answers, maintenance card descriptions) to moderate component-level changes (theme-aware logo rendering, AnimatePresence timing).

The biggest technical risk is BUG-01 (modal backdrop flicker with StarBackground). The root cause is that StarBackground is a sibling component that gets affected by the modal's AnimatePresence mounting/unmounting cycle. BUG-02 (E-Commerce mobile carousel) is a scroll synchronization issue in the pricing page's useEffect/onScroll logic. BUG-03 (company logo on /clients page) has a solved pattern already in CompanyCard.tsx that just needs to be replicated.

**Primary recommendation:** Tackle data-only changes first (FAQ, maintenance cards, technologies, currency labels), then string replacements in components (BUG-04, BUG-05), then the three component-level bug fixes (BUG-01, BUG-02, BUG-03), and finally the cleanup tasks (A11Y-04, A11Y-05).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- BUG-01: Fix AnimatePresence timing in Modal.tsx to prevent StarBackground flicker
- BUG-02: Fix useEffect/scroll logic in PricesPageClient.tsx for E-Commerce mobile carousel
- BUG-03: Display real company logo in ClientsPageClient.tsx using same circular avatar slot (w-11 h-11 rounded-full), auto-switching between company.logo (light) and company.logoDark (dark) via data-theme attribute
- BUG-04: Replace "Click to view profile ->" with Spanish equivalent in OurTeam.tsx:81
- BUG-05: Replace "Featured projects" and "View all projects" in CreatorModal.tsx:105,143
- FAQ-01: Update answer for "Que necesito tener listo antes de empezar?" to exact copy provided
- FAQ-02: Update answer for "Puedo actualizar el contenido yo mismo?" to exact copy provided
- FAQ-03: Update answer for "Que pasa si no quiero contratar mantenimiento?" to exact copy provided
- FAQ-04: "Por que Pyrux y no una agencia?" already matches required copy -- verify only
- FAQ-05: Monitoring card description unified to "Arreglamos los problemas antes de que el usuario los vea."
- FAQ-06: Backups card description unified to "Intervalo de copias dependiente de tu plan." across ALL tiers
- DATA-01: Set exactly 10 featured technologies (Next.js, TypeScript, Tailwind CSS, Node.js, Supabase, Vercel, Linux, GitHub, Figma, Google Search Console)
- DATA-02: Add 5 new technology entries (Vite, Three.js, GitHub Pages, Django, Render) with featured: false
- DATA-03: Change "USD" to "dolares" in pricing-related visible strings
- A11Y-04: Remove all console.log debug statements site-wide
- A11Y-05: Add priority prop to above-the-fold images; add sizes prop to carousel images

### Claude's Discretion
- Exact AnimatePresence fix approach for modal flicker (BUG-01)
- Exact scroll/useEffect fix for E-Commerce mobile carousel (BUG-02)
- Spanish phrasing for the "Click to view profile" replacement in OurTeam (BUG-04) -- must be natural Argentine Spanish
- Icon fallback choice for Google Search Console if SiGooglesearchconsole doesn't exist

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| BUG-01 | Modal backdrop (StarBackground) stops flickering when any modal opens/closes | StarBackground is a pure CSS component (no state). Flicker comes from AnimatePresence remounting. Fix approach documented in Architecture Patterns. |
| BUG-02 | E-Commerce packages render correctly on mobile carousel in pricing page | Carousel logic in PricesPageClient.tsx uses useEffect + scrollIntoView + onScroll. The scroll handler's index detection logic is the likely culprit. |
| BUG-03 | /clients page shows real company logo instead of Building2 icon | CompanyCard.tsx already implements theme-aware logo switching via CSS classes logo-for-light/logo-for-dark. Same pattern must be applied to ClientsPageClient.tsx. |
| BUG-04 | "Click to view profile" in OurTeam replaced with Spanish text | Single string at OurTeam.tsx:81. |
| BUG-05 | "Featured projects" and "View all projects" in CreatorModal replaced with Spanish text | Two strings at CreatorModal.tsx:105 and :143. |
| FAQ-01 | FAQ answer updated for "Que necesito tener listo antes de empezar?" | String in data/faq.ts line 27. Current text is close but not exact match -- needs update. |
| FAQ-02 | FAQ answer updated for "Puedo actualizar el contenido yo mismo?" | String in data/faq.ts line 32. Currently says "Plan Pro" instead of "Plan Standard". |
| FAQ-03 | FAQ answer updated for "Que pasa si no quiero contratar mantenimiento?" | String in data/faq.ts line 37. Currently close but slightly different phrasing. |
| FAQ-04 | FAQ answer for "Por que Pyrux y no una agencia?" verified | String in data/faq.ts line 7. Already matches required copy exactly. |
| FAQ-05 | Monitoring card text updated | Monitoring card description in data/packages.ts. Already correct for all tiers -- verify only. |
| FAQ-06 | Backups card text unified across all tiers | data/packages.ts lines 22, 55, 88. Growth says "cada 14 dias", Pro/Business say "cada 7 dias" -- must be unified. |
| DATA-01 | OurStack featured technologies set to exactly 10 | data/technologies.ts. Currently 10 featured but wrong set. Must flip featured flags for 14+ entries. |
| DATA-02 | 5 new technologies added | data/technologies.ts. All 5 SiXxx icons verified as existing in react-icons/si. |
| DATA-03 | "USD" changed to "dolares" in visible pricing strings | data/packages.ts (5 occurrences), data/faq.ts (1 occurrence), app/pricing/page.tsx metadata (2 occurrences in meta descriptions). |
| A11Y-04 | All console.log removed | Grep found 0 console.log statements. Already clean -- verify only. |
| A11Y-05 | Above-the-fold images have priority; carousel images have sizes | OurTeam.tsx has Image without priority. Hero.tsx uses no next/image at all. CreatorModal.tsx Image lacks priority. ProjectCard and CompanyCard images in carousels lack sizes prop. |
</phase_requirements>

## Standard Stack

No new libraries needed for Phase 1. All changes use existing dependencies.

### Core (already installed)
| Library | Version | Purpose | Relevant to |
|---------|---------|---------|-------------|
| Next.js | 16.1.6 | App Router, Image component (priority/sizes) | A11Y-05, BUG-03 |
| React | 19 | Component model | All |
| Framer Motion | 12 | AnimatePresence for modals | BUG-01 |
| react-icons | installed | SiXxx technology icons | DATA-01, DATA-02 |
| Tailwind CSS | v4 | All styling (logo-for-light/dark classes) | BUG-03 |

### No New Dependencies
Phase 1 requires zero npm installs. All work is edits to existing data files and components.

## Architecture Patterns

### Pattern 1: Data File Content Updates (FAQ, packages, technologies)
**What:** All content is in `data/*.ts`. Changes are pure string/boolean edits.
**Files:** `data/faq.ts`, `data/packages.ts`, `data/technologies.ts`
**Risk:** LOW -- these are static data exports with no side effects.

```typescript
// data/faq.ts -- exact string replacement
{
  question: "Que necesito tener listo antes de empezar?",
  answer: "Un manual de marca hecho por un profesional seria ideal, pero no es obligatorio."
}
```

### Pattern 2: Theme-Aware Logo Rendering (BUG-03)
**What:** CompanyCard.tsx already implements dual-image rendering with CSS visibility classes.
**Pattern:** Render both `<Image>` tags (light and dark), use CSS classes `logo-for-light` and `logo-for-dark` defined in `globals.css` to toggle visibility based on `html[data-theme]`.

```typescript
// Established pattern from CompanyCard.tsx -- replicate in ClientsPageClient.tsx
{company.logoDark ? (
  <>
    <Image src={company.logo} alt={`${company.name} logo`} width={44} height={44}
      className="logo-for-light w-full h-full object-contain" />
    <Image src={company.logoDark} alt={`${company.name} logo`} width={44} height={44}
      className="logo-for-dark w-full h-full object-contain" />
  </>
) : (
  <>
    <Image src={company.logo} alt={`${company.name} logo`} width={44} height={44}
      className="w-full h-full object-contain"
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.nextElementSibling?.classList.remove("hidden");
      }} />
    <Building2 size={20} className="text-coral hidden" />
  </>
)}
```

### Pattern 3: AnimatePresence Modal Fix (BUG-01)
**What:** StarBackground uses `fixed inset-0 z-0` positioning. Modal overlay uses `fixed inset-0 z-50`. The flicker happens because the modal AnimatePresence cycle triggers React re-renders that cascade to StarBackground.
**Root cause analysis:** StarBackground is a pure render component (no state, no "use client"). It should NOT re-render when modal state changes. The issue is likely that StarBackground is rendered inside the same parent that manages modal state (e.g., page-level client component), causing it to re-render on every state change.
**Approach options (Claude's discretion):**
1. Wrap StarBackground in `React.memo()` to prevent unnecessary re-renders
2. Ensure the modal's `AnimatePresence` exit duration matches the overlay fade-out (currently overlay exits immediately via "hidden" variant while modal content takes 0.2s)
3. Add `mode="wait"` to AnimatePresence if needed

### Pattern 4: Mobile Carousel Scroll Fix (BUG-02)
**What:** The E-Commerce category has 3 packages but they may not render in the mobile carousel correctly.
**Root cause analysis:** The carousel uses `scrollIntoView` in a `useEffect` keyed on `[selectedPkg, selectedCategory]`. The `handleCarouselScroll` function detects the active card by comparing `offsetLeft` to `scrollLeft + clientWidth / 2`. When switching categories (e.g., to "ecommerce"), the `selectedPkg` resets to 0 but the scroll position may not update correctly because the DOM hasn't re-rendered with the new category's children yet.
**Approach options (Claude's discretion):**
1. Add a short `requestAnimationFrame` delay before scrollIntoView to ensure DOM has updated
2. Reset scroll position to 0 when category changes
3. Guard the scroll handler against stale children array length

### Anti-Patterns to Avoid
- **Do NOT use useEffect for theme detection in BUG-03:** The CSS-class approach (`logo-for-light`/`logo-for-dark` in globals.css) is already established and does not require JavaScript. Using `useEffect` to read `localStorage` or `data-theme` would be slower and cause flash.
- **Do NOT add "use client" to StarBackground:** It is currently a pure server-compatible component. Keep it that way.
- **Do NOT modify FAQ or pricing type interfaces:** The types in `types/pricing.types.ts` already support all needed data shapes.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Theme-aware images | JS-based theme detection hook | CSS classes (logo-for-light/logo-for-dark) | Already established pattern, no FOUC, no hydration mismatch |
| Technology icon resolution | Manual icon imports | Existing `react-icons/si` dynamic resolution via string IDs | Pattern already in use across the codebase |
| Clipboard copy | Manual Clipboard API | Existing `useCopyToClipboard` hook | Already in hooks/ directory |

## Common Pitfalls

### Pitfall 1: FAQ Answer Text Mismatch
**What goes wrong:** The existing FAQ answers are very close to the target but subtly different (e.g., "Plan Pro" vs "Plan Standard", missing "Un" prefix).
**Why it happens:** Copy was updated in discussion but never applied to code.
**How to avoid:** Diff each FAQ answer character-by-character against CONTEXT.md. Use exact copy-paste.
**Warning signs:** Tests pass but business text is wrong -- only visual review catches this.

### Pitfall 2: Backup Card Description Not Unified
**What goes wrong:** Only one tier's backup description gets updated, others retain tier-specific text ("cada 14 dias", "cada 7 dias").
**Why it happens:** Three separate arrays (growthMaintenanceCards, proMaintenanceCards, businessMaintenanceCards) each have their own copy of the HardDrive card.
**How to avoid:** Grep for all occurrences of "HardDrive" or "Backups" in packages.ts and update ALL.
**Warning signs:** Different backup descriptions showing for different pricing tiers.

### Pitfall 3: USD in Metadata (DATA-03)
**What goes wrong:** "USD" is replaced in data files but forgotten in page.tsx metadata strings.
**Why it happens:** `app/pricing/page.tsx` has "Precios en USD" in both `description` and `openGraph.description`.
**How to avoid:** Grep for "USD" across the entire pyrux_portfolio directory, not just data/.
**Specific locations found:**
- `data/packages.ts`: 5 occurrences in `price` fields ("USD 300", "USD 500", etc.)
- `data/faq.ts`: 1 occurrence ("Se cotizan en USD")
- `app/pricing/page.tsx`: 2 occurrences in metadata descriptions

### Pitfall 4: Technology Featured Count Off By One
**What goes wrong:** After toggling featured flags, the count is not exactly 10.
**Why it happens:** Currently 10 are featured but the wrong 10. Need to flip 6 off and 6 on (including 1 new entry).
**How to avoid:** After changes, run `technologies.filter(t => t.featured).length` and verify it equals 10.
**Current featured (must be unfeatured):** React, JavaScript, Express, PostgreSQL, Docker, Git
**Must become featured:** Supabase, Vercel, Linux, GitHub, Figma, Google Search Console (new entry)

### Pitfall 5: Google Search Console Icon Name
**What goes wrong:** Assumed icon name doesn't exist in react-icons.
**Resolution:** VERIFIED -- `SiGooglesearchconsole` EXISTS in the installed version of react-icons/si. Use it directly.
**Confidence:** HIGH (verified via Node.js require check)

### Pitfall 6: A11Y-04 Already Clean
**What goes wrong:** Time wasted searching for console.log that doesn't exist.
**Resolution:** VERIFIED -- grep found 0 `console.log` statements in app/, components/, data/, hooks/. This requirement is already satisfied.
**Confidence:** HIGH (verified via grep)

### Pitfall 7: A11Y-05 Image Priority/Sizes Scope
**What goes wrong:** Adding priority to images that are NOT above-the-fold, or missing carousel images.
**Current Image usage found:**
- `OurTeam.tsx` -- creator profile images in cards (above fold on landing) -- add `priority`
- `CreatorModal.tsx` -- creator photo in modal (NOT above fold) -- no priority needed
- `CompanyCard.tsx` -- company logos in carousel cards -- add `sizes`
- `ProjectCard.tsx` -- project images in carousel cards -- add `sizes`
- `ClientsPageClient.tsx` -- after BUG-03 fix, will have images -- add `sizes`
- Hero.tsx -- no `<Image>` component used (uses SVG inline) -- nothing to do

## Code Examples

### FAQ Answer Updates (data/faq.ts)
```typescript
// FAQ-01: Line ~25-27
{
  question: "Que necesito tener listo antes de empezar?",
  answer: "Un manual de marca hecho por un profesional seria ideal, pero no es obligatorio."
}

// FAQ-02: Line ~30-32 -- NOTE: "Plan Standard" not "Plan Pro"
{
  question: "Puedo actualizar el contenido yo mismo?",
  answer: "El plan Standard en adelante incluyen una aplicacion web para que puedas cambiar el contenido por vos mismo; mientras que en el plan Growth van por el mantenimiento mensual."
}

// FAQ-03: Line ~35-37
{
  question: "Que pasa si no quiero contratar mantenimiento?",
  answer: "Te entregamos la aplicacion lista, para que los realices por tu cuenta."
}
```

### Backup Card Unification (data/packages.ts)
All three maintenance card arrays must have:
```typescript
{
  icon: "HardDrive",
  title: "Backups automaticos",
  description: "Intervalo de copias dependiente de tu plan."
}
```
Lines to change: growthMaintenanceCards[2] (line ~22), proMaintenanceCards[2] (line ~55), businessMaintenanceCards[2] (line ~88).

### Technology Featured Flag Changes (data/technologies.ts)
```typescript
// Set featured: false for these existing entries:
// react, javascript, express, postgresql, docker, git

// Set featured: true for these existing entries:
// supabase, vercel, linux, github, figma

// Add new entry:
{
  id: "google-search-console",
  name: "Google Search Console",
  icon: "SiGooglesearchconsole",
  category: "other",
  featured: true,
}

// Add 5 new non-featured entries:
{ id: "vite", name: "Vite", icon: "SiVite", category: "frontend", featured: false },
{ id: "threejs", name: "Three.js", icon: "SiThreedotjs", category: "frontend", featured: false },
{ id: "github-pages", name: "GitHub Pages", icon: "SiGithubpages", category: "devops", featured: false },
{ id: "django", name: "Django", icon: "SiDjango", category: "backend", featured: false },
{ id: "render", name: "Render", icon: "SiRender", category: "devops", featured: false },
```

### USD to Dolares (DATA-03)
```typescript
// data/packages.ts: change price strings
// "USD 300" -> "300 dolares"
// "USD 500" -> "500 dolares"
// "Desde USD 800" -> "Desde 800 dolares"
// "USD 800" -> "800 dolares"
// "USD 2.000" -> "2.000 dolares"

// data/faq.ts: change answer
// "Se cotizan en USD" -> "Se cotizan en dolares"

// app/pricing/page.tsx: change metadata
// "Precios en USD" -> "Precios en dolares"
```

### BUG-04 Spanish Replacement (OurTeam.tsx:81)
```typescript
// Replace:
"Click to view profile →"
// With (Argentine Spanish, natural):
"Ver perfil completo →"
```

### BUG-05 Spanish Replacements (CreatorModal.tsx)
```typescript
// Line 105: Replace "Featured projects" with "Proyectos destacados"
// Line 143: Replace "View all projects" with "Ver todos los proyectos"
```

## State of the Art

No technology changes or version upgrades needed for Phase 1. All work uses the existing stack exactly as-is.

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Building2 fallback for company logos | Theme-aware dual Image with CSS toggle | BUG-03 fix uses established pattern |

## Open Questions

1. **BUG-01 exact fix approach**
   - What we know: StarBackground is stateless, flicker is caused by modal AnimatePresence lifecycle
   - What's unclear: Whether React.memo alone solves it, or if AnimatePresence mode/timing needs adjustment
   - Recommendation: Try React.memo on StarBackground first; if insufficient, adjust AnimatePresence exit timing to sync overlay and content animations

2. **BUG-02 exact carousel fix**
   - What we know: E-Commerce packages exist in data (3 packages). Carousel logic uses scrollIntoView + onScroll detection.
   - What's unclear: Whether the bug is in scroll detection or in initial rendering when switching to "ecommerce" tab
   - Recommendation: Debug by checking if `visiblePackages` updates correctly for "ecommerce" category, then verify scroll position resets on category change

3. **DATA-03 scope for metadata strings**
   - What we know: page.tsx metadata has "USD" in description strings
   - What's unclear: Whether metadata/SEO strings should also change (they're not user-visible on the page itself)
   - Recommendation: Change them -- CONTEXT.md says "pricing-related content" and metadata describes pricing

## Sources

### Primary (HIGH confidence)
- Codebase inspection: All files read directly
- react-icons/si exports: Verified via Node.js require() -- all 7 icon names confirmed present
- console.log grep: Zero matches confirmed across app/, components/, data/, hooks/
- CSS theme classes: logo-for-light/logo-for-dark pattern verified in globals.css

### Secondary (MEDIUM confidence)
- BUG-01 root cause: Inferred from component architecture (StarBackground as sibling to modal state), not directly debugged in browser
- BUG-02 root cause: Inferred from scroll logic analysis, not reproduced on device

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- no new dependencies, all verified in package.json
- Architecture: HIGH -- all patterns observed directly in codebase
- Pitfalls: HIGH -- all verified via grep and file inspection
- Bug fix approaches: MEDIUM -- root causes inferred from code, not browser-debugged

**Research date:** 2026-03-19
**Valid until:** 2026-04-19 (stable -- no external dependencies changing)
