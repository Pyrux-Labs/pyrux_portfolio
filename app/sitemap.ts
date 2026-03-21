// ═══════════════════════════════════════════════
// Dynamic sitemap — generated at build
// ═══════════════════════════════════════════════

import type { MetadataRoute } from "next";
import { creators } from "@/data/creators";
import { locales, defaultLocale } from "@/i18n/config";

export const dynamic = "force-static";

const BASE_URL = "https://www.pyrux.com.ar";

const routes = ["/", "/projects", "/pricing", "/clients"];

export default function sitemap(): MetadataRoute.Sitemap {
	const localeRoutes = locales.flatMap((locale) =>
		routes.map((route) => ({
			url: `${BASE_URL}/${locale}${route === "/" ? "" : route}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: route === "/" ? 1.0 : 0.8,
		}))
	);

	const creatorRoutes = locales.flatMap((locale) =>
		creators[defaultLocale].map((creator) => ({
			url: `${BASE_URL}/${locale}/creator/${creator.id}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}))
	);

	return [...localeRoutes, ...creatorRoutes];
}
