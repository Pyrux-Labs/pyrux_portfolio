// ═══════════════════════════════════════════════
// Page /[locale]/creator/[id]
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import { creators } from "@/data/creators";
import { routing } from "@/i18n/routing";
import CreatorContent from "@/components/creator/CreatorContent";
import type { Locale } from "@/i18n/config";

interface CreatorPageProps {
	params: Promise<{ locale: string; id: string }>;
}

const BASE_URL = "https://www.pyrux.com.ar";

export function generateStaticParams() {
	return routing.locales.flatMap((locale) =>
		creators[locale as Locale].map((c) => ({ locale, id: c.id }))
	);
}

export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
	const { locale, id } = await params;
	const creator = creators[locale as Locale]?.find((c) => c.id === id);
	const isEs = locale === "es";
	const title = creator ? `${creator.name} — Pyrux` : isEs ? "Creador no encontrado — Pyrux" : "Creator not found — Pyrux";
	const description = creator?.bio ?? (isEs ? "Perfil de creador en Pyrux" : "Creator profile at Pyrux");
	const url = `${BASE_URL}/${locale}/creator/${id}`;

	return {
		title,
		description,
		alternates: {
			canonical: url,
			languages: {
				es: `${BASE_URL}/es/creator/${id}`,
				en: `${BASE_URL}/en/creator/${id}`,
				"x-default": `${BASE_URL}/es/creator/${id}`,
			},
		},
		openGraph: {
			title,
			description,
			url,
			locale: isEs ? "es_AR" : "en_US",
			images: [{ url: "/og-image.png", width: 1200, height: 630 }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/og-image.png"],
		},
	};
}

export default async function CreatorPage({ params }: CreatorPageProps) {
	const { locale, id } = await params;
	const isEs = locale === "es";
	const creator = creators[locale as Locale]?.find((c) => c.id === id);
	const url = `${BASE_URL}/${locale}/creator/${id}`;

	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
			{ "@type": "ListItem", position: 2, name: creator?.name ?? id, item: url },
		],
	});

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<CreatorContent creatorId={id} />
		</>
	);
}
