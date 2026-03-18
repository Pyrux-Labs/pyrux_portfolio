// ═══════════════════════════════════════════════
// Clients page client component
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import ClientsPageClient from "./ClientsPageClient";

export const metadata: Metadata = {
	title: "Clientes — Pyrux",
	description:
		"Empresas y clientes que confiaron en Pyrux para sus proyectos digitales.",
	alternates: {
		canonical: "https://www.pyrux.com.ar/clients",
	},
	openGraph: {
		title: "Clientes — Pyrux",
		description:
			"Empresas y clientes que confiaron en Pyrux para sus proyectos digitales.",
		url: "https://www.pyrux.com.ar/clients",
		images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Clientes — Pyrux" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Clientes — Pyrux",
		description:
			"Empresas y clientes que confiaron en Pyrux para sus proyectos digitales.",
		images: ["/og-image.png"],
	},
};

const breadcrumb = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.pyrux.com.ar" },
		{ "@type": "ListItem", position: 2, name: "Clientes", item: "https://www.pyrux.com.ar/clients" },
	],
});

export default function ClientsPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<ClientsPageClient />
		</>
	);
}
