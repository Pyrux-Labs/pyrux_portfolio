// ═══════════════════════════════════════════════
// Sitemap dinámico — generado en build
// ═══════════════════════════════════════════════

import type { MetadataRoute } from "next";
import { creators } from "@/data/creators";

export const dynamic = "force-static";

const BASE_URL = "https://www.pyrux.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
	const creatorRoutes = creators.map((creator) => ({
		url: `${BASE_URL}/creator/${creator.id}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1.0,
		},
		{
			url: `${BASE_URL}/projects`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/pricing`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/clients`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		...creatorRoutes,
	];
}
