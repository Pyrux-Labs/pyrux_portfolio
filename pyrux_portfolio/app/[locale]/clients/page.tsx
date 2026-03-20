// ═══════════════════════════════════════════════
// Page /[locale]/clients
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import ClientsPageClient from "@/app/clients/ClientsPageClient";

interface ClientsPageProps {
	params: Promise<{ locale: string }>;
}

const BASE_URL = "https://www.pyrux.com.ar";

export async function generateMetadata({ params }: ClientsPageProps): Promise<Metadata> {
	const { locale } = await params;
	const isEs = locale === "es";
	const url = `${BASE_URL}/${locale}/clients`;

	return {
		title: isEs ? "Clientes — Pyrux" : "Clients — Pyrux",
		description: isEs
			? "Empresas y clientes que confiaron en Pyrux para sus proyectos digitales."
			: "Companies and clients that trusted Pyrux for their digital projects.",
		alternates: {
			canonical: url,
			languages: {
				es: `${BASE_URL}/es/clients`,
				en: `${BASE_URL}/en/clients`,
				"x-default": `${BASE_URL}/es/clients`,
			},
		},
		openGraph: {
			title: isEs ? "Clientes — Pyrux" : "Clients — Pyrux",
			description: isEs
				? "Empresas y clientes que confiaron en Pyrux."
				: "Companies and clients that trusted Pyrux.",
			url,
			locale: isEs ? "es_AR" : "en_US",
			images: [{ url: "/og-image.png", width: 1200, height: 630, alt: isEs ? "Clientes — Pyrux" : "Clients — Pyrux" }],
		},
		twitter: {
			card: "summary_large_image",
			title: isEs ? "Clientes — Pyrux" : "Clients — Pyrux",
			description: isEs
				? "Empresas y clientes que confiaron en Pyrux."
				: "Companies and clients that trusted Pyrux.",
			images: ["/og-image.png"],
		},
	};
}

export default async function ClientsPage({ params }: ClientsPageProps) {
	const { locale } = await params;
	const isEs = locale === "es";
	const url = `${BASE_URL}/${locale}/clients`;

	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
			{ "@type": "ListItem", position: 2, name: isEs ? "Clientes" : "Clients", item: url },
		],
	});

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<ClientsPageClient />
		</>
	);
}
