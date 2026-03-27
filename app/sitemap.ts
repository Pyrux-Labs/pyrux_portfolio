// ═══════════════════════════════════════════════
// Dynamic sitemap — generated at build
// ═══════════════════════════════════════════════

import type { MetadataRoute } from "next";
import { creators } from "@/data/creators";
import { locales, defaultLocale } from "@/i18n/config";

export const dynamic = "force-static";

const BASE_URL = "https://www.pyrux.com.ar";

const routes = ["/", "/projects", "/pricing", "/clients"];

function localeUrl(locale: string, path: string): string {
	return locale === defaultLocale
		? `${BASE_URL}${path}`
		: `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const localeRoutes = routes.flatMap((route) => {
		const path = route === "/" ? "" : route;
		const languages: Record<string, string> = {};
		locales.forEach((l) => { languages[l] = localeUrl(l, path); });

		return locales.map((locale) => ({
			url: localeUrl(locale, path),
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: route === "/" ? 1.0 : 0.8,
			alternates: { languages },
		}));
	});

	const creatorRoutes = locales.flatMap((locale) =>
		creators[defaultLocale].map((creator) => {
			const languages: Record<string, string> = {};
			locales.forEach((l) => { languages[l] = localeUrl(l, `/creator/${creator.id}`); });

			return {
				url: localeUrl(locale, `/creator/${creator.id}`),
				lastModified: new Date(),
				changeFrequency: "monthly" as const,
				priority: 0.7,
				alternates: { languages },
			};
		})
	);

	return [...localeRoutes, ...creatorRoutes];
}
