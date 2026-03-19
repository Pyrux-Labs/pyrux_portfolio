// ═══════════════════════════════════════════════
// Página /creator/[id] — proyectos de un creador
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import { creators } from "@/data/creators";
import { defaultLocale } from "@/i18n/config";
import CreatorPageClient from "./CreatorPageClient";

interface CreatorPageProps {
	params: Promise<{ id: string }>;
}

// Generar rutas estáticas para cada creador
export function generateStaticParams() {
	return creators[defaultLocale].map((c) => ({ id: c.id }));
}

// Metadata dinámica
export async function generateMetadata({
	params,
}: CreatorPageProps): Promise<Metadata> {
	const { id } = await params;
	const creator = creators[defaultLocale].find((c) => c.id === id);
	const title = creator ? `${creator.name} — Pyrux` : "Creador no encontrado — Pyrux";
	const description = creator?.bio ?? "Perfil de creador en Pyrux";
	const url = `https://www.pyrux.com.ar/creator/${id}`;
	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
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
	const { id } = await params;
	const creator = creators[defaultLocale].find((c) => c.id === id);
	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.pyrux.com.ar" },
			{
				"@type": "ListItem",
				position: 2,
				name: creator?.name ?? id,
				item: `https://www.pyrux.com.ar/creator/${id}`,
			},
		],
	});
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<CreatorPageClient creatorId={id} />
		</>
	);
}
