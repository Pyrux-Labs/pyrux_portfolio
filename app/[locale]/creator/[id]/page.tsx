// ═══════════════════════════════════════════════
// Page /[locale]/creator/[id]
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { creators } from "@/data/creators";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";
import BackLink from "@/components/ui/BackLink";
import CreatorHeader from "@/components/creator/CreatorHeader";
import ItemGallery from "@/components/gallery/ItemGallery";

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

	const ogImage = creator
		? { url: `${BASE_URL}${creator.image}`, type: "image/webp", width: 800, height: 800, alt: creator.name }
		: { url: `${BASE_URL}/og-image.png`, type: "image/png", width: 1200, height: 630 };

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
			images: [ogImage],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [`${BASE_URL}${creator ? creator.image : "/og-image.png"}`],
		},
	};
}

export default async function CreatorPage({ params }: CreatorPageProps) {
	const { locale, id } = await params;
	const isEs = locale === "es";
	const creator = creators[locale as Locale]?.find((c) => c.id === id);
	if (!creator) notFound();

	const url = `${BASE_URL}/${locale}/creator/${id}`;

	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
			{ "@type": "ListItem", position: 2, name: creator.name, item: url },
		],
	});

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<main className="w-full max-w-content mx-auto flex-1 flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				<BackLink />
				<CreatorHeader creatorId={id} />
				<ItemGallery type="projects" creatorId={id} />
			</main>
		</>
	);
}
