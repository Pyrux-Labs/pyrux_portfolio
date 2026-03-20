// ═══════════════════════════════════════════════
// Sitemap dinámico — generado en build
// ═══════════════════════════════════════════════

import type { MetadataRoute } from "next";
import { creators } from "@/data/creators";
import { locales, defaultLocale } from "@/i18n/config";

export const dynamic = "force-static";

const BASE_URL = "https://www.pyrux.com.ar";

const routes = ["/", "/projects", "/pricing", "/clients"];
const LAST_MODIFIED = new Date("2026-03-20");

export default function sitemap(): MetadataRoute.Sitemap {
	const localeRoutes = locales.flatMap((locale) =>
		routes.map((route) => ({
			url: `${BASE_URL}/${locale}${route === "/" ? "" : route}`,
			lastModified: LAST_MODIFIED,
			changeFrequency: "monthly" as const,
			priority: route === "/" ? 1.0 : 0.8,
		}))
	);

	const creatorRoutes = locales.flatMap((locale) =>
		creators[defaultLocale].map((creator) => ({
			url: `${BASE_URL}/${locale}/creator/${creator.id}`,
			lastModified: LAST_MODIFIED,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}))
	);

	return [...localeRoutes, ...creatorRoutes];
}
