# Phase 4: Internationalization - Research

**Researched:** 2026-03-19
**Domain:** i18n for Next.js static export with client-side locale detection
**Confidence:** HIGH

## Summary

This phase adds full English/Spanish bilingual support to a statically exported Next.js 16 site. The critical constraint is `output: 'export'` -- no server middleware runs at request time, so locale detection and switching must happen entirely on the client side.

The recommended approach uses **next-intl v4.8.3** in its "without i18n routing" configuration. Since all interactive pages already use the Server/Client component split pattern (`page.tsx` server + `*PageClient.tsx` client), the architecture wraps the app in a client-side `NextIntlClientProvider` whose `locale` and `messages` props are driven by React state. Browser language detection uses `navigator.language` on mount, with localStorage persistence and a manual toggle for override. No URL locale prefixes are needed -- the locale is a runtime client-side concern only.

The biggest implementation effort is string extraction. The codebase has Spanish strings in two locations: (1) hardcoded JSX text in ~27 client components and ~9 app files, and (2) structured data files (`data/*.ts`) containing Spanish content for projects, companies, creators, services, FAQ, steps, packages, and contacts. Both categories must be translated.

**Primary recommendation:** Use next-intl "without i18n routing" + a custom `LocaleProvider` wrapper that manages locale state, detects browser language, persists to localStorage, and passes locale/messages to `NextIntlClientProvider`. Data files should export locale-keyed objects (`{ es: {...}, en: {...} }`) or use translation keys that map to the message files.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| I18N-01 | Browser language auto-detected on mount (navigator.language starts with "es" -> Spanish, otherwise -> English) | LocaleProvider reads `navigator.language` in useEffect, falls back to localStorage, defaults to "es" |
| I18N-02 | All hardcoded Spanish strings extracted to translation keys | String extraction across ~27 client components, ~9 app files, ~10 data files |
| I18N-03 | `messages/es.json` created with complete Spanish translations | Structured JSON with namespaced keys matching component tree |
| I18N-04 | `messages/en.json` created with complete English translations | Mirror structure of es.json with English equivalents |
| I18N-05 | next-intl configured for static export (client-side locale detection, no middleware routing) | "Without i18n routing" setup + `createNextIntlPlugin` in next.config.ts |
| I18N-06 | All sections, cards, modals, and data labels render in detected language | `useTranslations` hook in every client component, data files use locale-keyed exports |
| I18N-07 | Language toggle button available on site for manual override | Toggle component calls `setLocale` on LocaleProvider context, persists to localStorage |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next-intl | 4.8.3 | i18n framework for Next.js | Official Next.js i18n solution; supports App Router, static export, client components; 4.8.3 supports Next.js 16 and React 19 |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next-intl/plugin | (bundled) | Next.js config plugin (`createNextIntlPlugin`) | Required in next.config.ts to enable next-intl's build integration |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| next-intl | react-intl (FormatJS) | Lower-level, no Next.js-specific integration, more manual setup |
| next-intl | i18next + react-i18next | More ecosystem but heavier, no native Next.js App Router support |
| next-intl | Manual context + JSON | No library overhead but lose pluralization, interpolation, type safety |

**Installation:**
```bash
cd pyrux_portfolio && npm install next-intl
```

**Version verification:** next-intl 4.8.3 confirmed current via `npm view next-intl version` on 2026-03-19. Peer dependencies: next >=12, react >=16.8, typescript ^5 -- all satisfied by the project.

## Architecture Patterns

### Recommended Project Structure
```
pyrux_portfolio/
  i18n/
    request.ts              # getRequestConfig (build-time, sets default locale)
    locale-provider.tsx     # "use client" — React context for runtime locale state
    config.ts               # Supported locales, default locale constants
  messages/
    es.json                 # Complete Spanish translations
    en.json                 # Complete English translations
  app/
    layout.tsx              # Wraps children with LocaleProvider + NextIntlClientProvider
  data/
    projects.ts             # Exports locale-keyed content: { es: [...], en: [...] }
    companies.ts            # Same pattern
    ...etc
```

### Pattern 1: Client-Side Locale Provider
**What:** A custom React context provider that manages locale state, detects browser language, persists preference to localStorage, and passes locale + messages to `NextIntlClientProvider`.
**When to use:** Always -- this is the core architecture for static export i18n without middleware.
**Example:**
```typescript
// i18n/locale-provider.tsx
"use client";

import { NextIntlClientProvider } from "next-intl";
import { createContext, useContext, useEffect, useState } from "react";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

type Locale = "es" | "en";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "es",
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

const messagesMap: Record<Locale, Record<string, unknown>> = {
  es: esMessages,
  en: enMessages,
};

interface LocaleProviderProps {
  children: React.ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const stored = localStorage.getItem("pyrux-locale") as Locale | null;
    if (stored && (stored === "es" || stored === "en")) {
      setLocaleState(stored);
      return;
    }
    const browserLang = navigator.language;
    const detected: Locale = browserLang.startsWith("es") ? "es" : "en";
    setLocaleState(detected);
    localStorage.setItem("pyrux-locale", detected);
  }, []);

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale);
    localStorage.setItem("pyrux-locale", newLocale);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messagesMap[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
```

### Pattern 2: Translation Key Namespacing
**What:** Message files structured by component/section name for organized key management.
**When to use:** For all UI strings in components.
**Example:**
```json
{
  "Hero": {
    "subtitle": "Desarrollo web y soluciones digitales.",
    "description": "Creamos paginas web modernas y sistemas a medida para llevar tu negocio al siguiente nivel."
  },
  "HeroButtons": {
    "contact": "Contactanos",
    "pricing": "Ver precios"
  },
  "OurProjects": {
    "title": "Nuestros proyectos",
    "viewAll": "Ver todos los proyectos"
  }
}
```

### Pattern 3: Bilingual Data Files
**What:** Data files export locale-keyed objects so the correct language content is selected at runtime.
**When to use:** For all data/*.ts files that contain user-facing Spanish text (projects, companies, creators, services, FAQ, steps, packages, contacts).
**Example:**
```typescript
// data/services.ts
import type { ServiceItem } from "@/types";

export const services: Record<string, ServiceItem[]> = {
  es: [
    { title: "Desarrollo Web", desc: "Disenamos y desarrollamos...", icon: "House" },
    // ...
  ],
  en: [
    { title: "Web Development", desc: "We design and develop...", icon: "House" },
    // ...
  ],
};
```

Components then consume: `const t = useLocale(); const items = services[t.locale];`

**Alternative for data:** Instead of locale-keyed exports, put all data strings into the message JSON files and use translation keys in the data files. This centralizes all translations but makes data files less readable. **Recommendation: Use locale-keyed data exports** for structured data (projects, packages, FAQ) because these arrays have complex nested structures that are easier to maintain as parallel objects than as flat translation keys.

### Pattern 4: Language Toggle Component
**What:** A button/dropdown that switches locale using the LocaleProvider context.
**When to use:** Placed near the ThemeToggle in the header area.
**Example:**
```typescript
"use client";

import { useLocale } from "@/i18n/locale-provider";

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="..."
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a espanol"}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
```

### Anti-Patterns to Avoid
- **Using middleware or server-side locale detection:** Does not work with `output: 'export'`. All detection must be client-side.
- **Putting all data strings into message JSON:** Creates deeply nested, hard-to-maintain JSON with hundreds of keys for structured data arrays. Use locale-keyed data exports instead.
- **Using `getTranslations` from `next-intl/server` in page components:** While this works at build time, it locks the locale at build time. Since we need runtime switching, all translation must happen in client components via `useTranslations`.
- **Importing messages dynamically with `import()`:** For two locales with a small site, importing both message files statically is simpler and avoids async loading states. Dynamic import is only needed for 5+ locales or very large message files.
- **Forgetting `html lang` attribute update:** The `<html lang="es">` must update dynamically when locale changes. Use an effect in LocaleProvider to set `document.documentElement.lang`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Translation message resolution | Custom key lookup with dot notation | `useTranslations` from next-intl | Handles nested keys, interpolation, pluralization, missing key fallbacks |
| ICU message format (plurals, selects) | Custom pluralization logic | next-intl's built-in ICU support | Edge cases in many languages; ICU is the standard |
| Type-safe translation keys | Manual key string constants | next-intl's TypeScript integration (global.d.ts) | Catches missing/wrong keys at compile time |

**Key insight:** next-intl handles the hard parts (message resolution, interpolation, type safety). The custom work is the locale state management wrapper and string extraction -- both are straightforward.

## Common Pitfalls

### Pitfall 1: Flash of Wrong Language (FOWL)
**What goes wrong:** Site renders in Spanish (default), then flips to English after `useEffect` detects browser language -- causing a visible flash.
**Why it happens:** `useState("es")` renders Spanish on first paint; `useEffect` runs after hydration.
**How to avoid:** Accept a minimal flash (unavoidable with static export) OR use the same localStorage-first approach as the theme toggle (read localStorage synchronously in a blocking script before React renders). Since the anti-FOUC script pattern already exists for theme, a similar pattern can be used for locale.
**Warning signs:** Content briefly appears in Spanish then switches to English for English-speaking visitors.

### Pitfall 2: Server Component Incompatibility
**What goes wrong:** `useTranslations` used in a Server Component causes build errors or locks locale at build time.
**Why it happens:** With `output: 'export'`, server components render once at build time. `useTranslations` in a server component reads the build-time locale from `i18n/request.ts`.
**How to avoid:** Use `useTranslations` only in client components (all `*PageClient.tsx` files and section components already have `"use client"`). Server components (`page.tsx` files) should only handle metadata and import client components.
**Warning signs:** Build errors mentioning "unable to find next-intl locale" or translations not switching language.

### Pitfall 3: Missing Strings in Data Files
**What goes wrong:** Data arrays (projects, packages, FAQ) still show Spanish text after switching to English.
**Why it happens:** Developer extracts component UI strings but forgets that data files also contain translatable text.
**How to avoid:** Audit every `data/*.ts` file systematically. The project has 10 data files, all containing Spanish text.
**Warning signs:** Section headings switch to English but card content stays in Spanish.

### Pitfall 4: Metadata Not Internationalized
**What goes wrong:** Page titles, descriptions, and OG tags stay in Spanish regardless of locale.
**Why it happens:** `metadata` in `layout.tsx` and `page.tsx` is evaluated at build time for static export. It cannot change at runtime.
**How to avoid:** Accept that HTML metadata (title, description, OG tags) will be in Spanish (the primary market language). Alternatively, set metadata to a neutral/bilingual format. Document this as a known limitation.
**Warning signs:** Google search results always show Spanish descriptions even for English visitors.

### Pitfall 5: JSON-LD Schema Not Updated
**What goes wrong:** Structured data (FAQPage, Organization schemas) in `layout.tsx` stays in Spanish.
**Why it happens:** JSON-LD is generated at build time in a Server Component.
**How to avoid:** Same as metadata -- accept this as a build-time limitation for static export. The FAQ schema imports from `data/faq.ts` which would need to export the build-time locale's content.
**Warning signs:** Schema validation tools show Spanish content regardless of page language.

### Pitfall 6: createNextIntlPlugin Compatibility with Static Export
**What goes wrong:** The `createNextIntlPlugin()` wrapper in `next.config.ts` may add configuration that conflicts with `output: 'export'`.
**Why it happens:** The plugin expects `i18n/request.ts` to exist and configures webpack aliases.
**How to avoid:** Test the build immediately after adding the plugin. The `i18n/request.ts` file must exist even if it just returns a static default locale. Keep `output: 'export'` in the config and verify `npm run build` still produces `out/`.
**Warning signs:** Build fails with "Cannot find module" or "output: export is not compatible".

## Code Examples

### next.config.ts Setup
```typescript
// Source: next-intl official docs - "without i18n routing" setup
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
```

### i18n/request.ts (Build-Time Config)
```typescript
// Source: next-intl docs - required even for client-side-only approach
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  return {
    locale: "es",
    messages: (await import("../messages/es.json")).default,
  };
});
```

### Using useTranslations in a Client Component
```typescript
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <motion.header>
      <h1>Pyrux</h1>
      <p>{t("subtitle")}</p>
      <p>{t("description")}</p>
    </motion.header>
  );
}
```

### Anti-FOWL Script (Locale Detection Before React)
```typescript
// In layout.tsx <head>, similar to existing theme anti-FOUC script
<script
  dangerouslySetInnerHTML={{
    __html: `(function(){
      var l=localStorage.getItem('pyrux-locale');
      if(!l){l=navigator.language&&navigator.language.startsWith('es')?'es':'en';localStorage.setItem('pyrux-locale',l);}
      document.documentElement.lang=l;
      document.documentElement.dataset.locale=l;
    })();`,
  }}
/>
```

### Type-Safe Translation Keys (global.d.ts)
```typescript
// Source: next-intl TypeScript integration docs
import es from "./messages/es.json";

type Messages = typeof es;

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| next-intl middleware routing | "Without i18n routing" for static export | next-intl 3.0+ (2023) | Enables static export without middleware |
| `IntlProvider` (react-intl) | `NextIntlClientProvider` | next-intl 3.0+ | Native Next.js App Router integration |
| Manual `t()` functions | `useTranslations` hook with TypeScript | next-intl 2.0+ | Type-safe keys, IDE autocompletion |
| Separate locale subpaths (/en, /es) | Client-side locale switching without URL change | N/A (architectural choice) | No duplicate static pages, simpler deploy |

**Deprecated/outdated:**
- `next-intl/link` and `next-intl/navigation`: Not needed without i18n routing
- `createSharedPathnamesNavigation`: Replaced by simpler approaches in v4
- `middleware.ts` for locale detection: Not compatible with `output: 'export'`

## Open Questions

1. **Bundle size impact of importing both locale message files**
   - What we know: Two JSON files (es.json + en.json) will both be included in the client bundle since they're imported statically
   - What's unclear: Exact size once all strings are extracted (estimate ~15-30KB per file for this small site)
   - Recommendation: Accept the tradeoff for simplicity. Only optimize with dynamic imports if messages exceed 100KB per locale

2. **React Compiler compatibility with next-intl**
   - What we know: The project uses `babel-plugin-react-compiler`. next-intl 4.8.3 lists React 19 as supported peer dep
   - What's unclear: Whether the React Compiler optimizes/breaks the `NextIntlClientProvider` context pattern
   - Recommendation: Test immediately after setup. If issues arise, exclude next-intl from compiler optimization

3. **SEO impact of client-side-only language switching**
   - What we know: Search engines see the build-time HTML (Spanish). English content only appears after JavaScript runs
   - What's unclear: Whether Google renders JS and indexes the English version
   - Recommendation: Accept Spanish as the indexed language. The primary market is Argentina. English is a convenience for international visitors, not an SEO target

## Sources

### Primary (HIGH confidence)
- [next-intl official docs - without i18n routing](https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing) - Complete setup guide for non-routed approach
- [next-intl official docs - server/client components](https://next-intl.dev/docs/environments/server-client-components) - NextIntlClientProvider behavior and props
- [next-intl official docs - request configuration](https://next-intl.dev/docs/usage/configuration) - getRequestConfig setup
- [next-intl official docs - middleware](https://next-intl.dev/docs/routing/middleware) - Static export limitations documented
- npm registry: `npm view next-intl version` = 4.8.3, peer deps verified

### Secondary (MEDIUM confidence)
- [GitHub Discussion #1096 - Switch locale without i18n routing](https://github.com/amannn/next-intl/discussions/1096) - Maintainer recommends cookie-based approach (adapted to localStorage for static export)
- [GitHub Issue #334 - Static export support](https://github.com/amannn/next-intl/issues/334) - Confirmed resolved, documentation updated
- [GitHub Discussion #975 - Without middleware](https://github.com/amannn/next-intl/discussions/975) - Community patterns for middleware-free setup

### Tertiary (LOW confidence)
- [Medium - Static generated app i18n](https://medium.com/@kitagolda/next-js-v13-multilingual-server-components-adding-internationalization-in-a-statically-exported-a94e1c927d49) - Older article (Next.js 13) but validates the general approach

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - next-intl 4.8.3 verified against npm registry, peer deps confirmed, official docs consulted
- Architecture: HIGH - "without i18n routing" is an officially documented and supported approach; static export limitations are well-documented
- Pitfalls: HIGH - Based on official docs, GitHub issues, and understanding of the static export constraint
- String extraction scope: HIGH - Direct codebase analysis of all 27 client components, 9 app files, and 10 data files

**Research date:** 2026-03-19
**Valid until:** 2026-04-19 (next-intl is stable; major version unlikely to change in 30 days)
