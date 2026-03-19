# Phase 1: Fixes and Content - Context

**Gathered:** 2026-03-19
**Status:** Ready for planning

<domain>
## Phase Boundary

Eliminate every observable bug, update all copy to match the latest business messaging, and clean the codebase of debug artifacts. No new capabilities are added — every feature that exists must simply work correctly and display the right content.

</domain>

<decisions>
## Implementation Decisions

### Bug Fixes

**BUG-01 — Modal backdrop flicker:**
- The `StarBackground` component flickers when any modal opens or closes
- Fix the `AnimatePresence` timing in `Modal.tsx` — approach is Claude's discretion (e.g., coordinate exit animation duration, prevent StarBackground remount)

**BUG-02 — E-Commerce mobile carousel:**
- E-Commerce packages do not render on mobile carousel
- Fix the `useEffect`/scroll logic in `PricesPageClient.tsx` — approach is Claude's discretion

**BUG-03 — Company logo on /clients page:**
- `ClientsPageClient.tsx` hardcodes `<Building2>` icon; must use real company logo
- Display logo in the **same circular avatar slot** (`w-11 h-11 rounded-full`) as the current icon
- **Auto-switch** between `company.logo` (light mode) and `company.logoDark` (dark mode)
- Read the current theme the same way the anti-FOUC script in `layout.tsx` does (e.g., `data-theme` attribute on `<html>` or `localStorage.getItem("theme")`)

**BUG-04 — English text in OurTeam:**
- `OurTeam.tsx:81`: "Click to view profile →" must be replaced with Spanish equivalent (e.g., "Ver perfil completo →")

**BUG-05 — English text in CreatorModal:**
- `CreatorModal.tsx:105`: "Featured projects" → "Proyectos destacados"
- `CreatorModal.tsx:143`: "View all projects" → "Ver todos los proyectos"

### FAQ Content Updates

All changes are in `data/faq.ts`. Questions identified by their text key:

- **FAQ-01** ("¿Qué necesito tener listo antes de empezar?"):
  Answer → `"Un manual de marca hecho por un profesional sería ideal, pero no es obligatorio."`

- **FAQ-02** ("¿Puedo actualizar el contenido yo mismo?"):
  Answer → `"El plan Standard en adelante incluyen una aplicación web para que puedas cambiar el contenido por vos mismo; mientras que en el plan Growth van por el mantenimiento mensual."`

- **FAQ-03** ("¿Qué pasa si no quiero contratar mantenimiento?"):
  Answer → `"Te entregamos la aplicación lista, para que los realices por tu cuenta."`

- **FAQ-04** ("¿Por qué Pyrux y no una agencia?"): Already matches required copy — no change needed.

### Maintenance Card Text (data/packages.ts)

Two card descriptions must be updated across all maintenance card arrays (growthMaintenanceCards, proMaintenanceCards, businessMaintenanceCards, etc.):

- **Monitoring card** (icon: "SatelliteDish", title: "Monitoreo constante"):
  description → `"Arreglamos los problemas antes de que el usuario los vea."`
  *(Already correct in packages.ts — verify all tiers match)*

- **Backups card** (icon: "HardDrive", title: "Backups automáticos"):
  description → `"Intervalo de copias dependiente de tu plan."`
  *(Currently different per tier: "cada 14 días" for Growth, "cada 7 días" for Pro — must be unified)*

### OurStack Featured Technologies (DATA-01)

Update `featured` flags in `data/technologies.ts` so exactly these 10 are featured:

| Technology | Action |
|---|---|
| Next.js | Already featured ✓ |
| TypeScript | Already featured ✓ |
| Tailwind CSS | Already featured ✓ |
| Node.js | Already featured ✓ |
| Supabase | Change featured: false → true |
| Vercel | Change featured: false → true |
| Linux | Change featured: false → true |
| GitHub | Change featured: false → true |
| Figma | Change featured: false → true |
| Google Search Console | Add new entry (category: "other", featured: true) |

Technologies to **remove** from featured (set featured: false):
- React, JavaScript, Express, PostgreSQL, Docker, Git

**Google Search Console icon:** No dedicated react-icons/si icon exists. Use `SiGoogle` as a fallback, or check if `SiGooglesearchconsole` exists in the installed version — if not, use the generic Google icon.

### New Technologies (DATA-02)

Add these 5 entries to `data/technologies.ts` with `featured: false`:

| id | name | icon | category |
|---|---|---|---|
| vite | Vite | SiVite | frontend |
| threejs | Three.js | SiThreedotjs | frontend |
| github-pages | GitHub Pages | SiGithubpages | devops |
| django | Django | SiDjango | backend |
| render | Render | SiRender | devops |

*(Verify icon names exist in `react-icons/si` before committing)*

### Pricing Currency Label (DATA-03)

In pricing-related content (package descriptions, FAQ answers, or any visible "USD" string on the pricing page), change `"USD"` to `"dólares"`. Check `data/packages.ts` and `data/faq.ts` for occurrences.

### Cleanup

**A11Y-04 — Remove console.log:**
- Remove all `console.log` debug statements site-wide. Grep for `console.log` across `app/`, `components/`, `data/`, `hooks/`.

**A11Y-05 — Image performance props:**
- Above-the-fold images (hero, creator profile photos in OurTeam): add `priority` prop
- Carousel images: add appropriate `sizes` prop (e.g., `sizes="(max-width: 640px) 85vw, 50vw"`)

### Claude's Discretion

- Exact AnimatePresence fix approach for modal flicker (BUG-01)
- Exact scroll/useEffect fix for E-Commerce mobile carousel (BUG-02)
- Spanish phrasing for the "Click to view profile" replacement in OurTeam (BUG-04) — must be natural Argentine Spanish
- Icon fallback choice for Google Search Console if `SiGooglesearchconsole` doesn't exist

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements
- `.planning/REQUIREMENTS.md` — Full requirement list with IDs (BUG-01 through A11Y-05); Phase 1 requirements are BUG-01, BUG-02, BUG-03, BUG-04, BUG-05, FAQ-01, FAQ-02, FAQ-03, FAQ-04, FAQ-05, FAQ-06, DATA-01, DATA-02, DATA-03, A11Y-04, A11Y-05

### Project context
- `.planning/PROJECT.md` — Stack, constraints, key decisions (static export, no backend, Tailwind-only, Framer Motion-only)
- `CLAUDE.md` — Code conventions, architecture pattern (Server/Client components), stack versions

No external specs or ADRs — all requirements are captured in REQUIREMENTS.md and the decisions above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/ui/Modal.tsx` — Base modal with AnimatePresence; BUG-01 fix happens here
- `components/ui/StarBackground.tsx` — Background that flickers; coordinate with Modal.tsx fix
- `data/technologies.ts` — Single source for tech data; DATA-01 and DATA-02 changes here
- `data/faq.ts` — Single source for FAQ; FAQ-01 through FAQ-04 changes here
- `data/packages.ts` — Maintenance card arrays per tier; FAQ-05 and FAQ-06 changes here
- `hooks/useCopyToClipboard.ts` — Clipboard hook already in place

### Established Patterns
- Tech icons use `react-icons/si` string IDs stored in `Technology.icon` — the component resolves them at render time. New tech entries must use valid `SiXxx` names
- Company data has both `logo` and `logoDark` fields already populated for existing companies
- Theme detection: `layout.tsx` anti-FOUC script reads `localStorage.getItem("theme")` and sets `data-theme` on `<html>` — logo switching should use `document.documentElement.dataset.theme` or a `useEffect` reading localStorage

### Integration Points
- `ClientsPageClient.tsx:89-91` — Replace Building2 with theme-aware `<Image>` using company.logo / company.logoDark
- `OurTeam.tsx:81` — Replace English hover text
- `CreatorModal.tsx:105,143` — Replace two English strings
- `data/faq.ts` — FAQ-01, FAQ-02, FAQ-03 answer strings
- `data/packages.ts` — Backup description strings across all tier arrays
- `data/technologies.ts` — featured flags for 14 existing techs + 5 new entries + 1 Google Search Console entry

</code_context>

<specifics>
## Specific Ideas

- Google Search Console chosen as the 10th featured technology (not Google Analytics or Google Fonts)
- Backup card description must be unified to "Intervalo de copias dependiente de tu plan." across ALL tiers (Growth, Pro, Business, E-Commerce, etc.) — not per-tier wording
- Company logo must auto-switch light/dark exactly like the rest of the theme system does (read `data-theme` attribute)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-fixes-and-content*
*Context gathered: 2026-03-19*
