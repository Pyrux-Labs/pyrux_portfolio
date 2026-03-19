// ═══════════════════════════════════════════════
// Page /projects - all projects
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
	title: "Proyectos — Pyrux",
	description:
		"Todos los proyectos desarrollados por Pyrux. Desarrollo web, sistemas a medida y soluciones digitales.",
	alternates: {
		canonical: "https://www.pyrux.com.ar/projects",
		languages: {
			es: "https://www.pyrux.com.ar/projects",
			en: "https://www.pyrux.com.ar/projects",
			"x-default": "https://www.pyrux.com.ar/projects",
		},
	},
	openGraph: {
		title: "Proyectos — Pyrux",
		description:
			"Todos los proyectos desarrollados por Pyrux. Desarrollo web, sistemas a medida y soluciones digitales.",
		url: "https://www.pyrux.com.ar/projects",
		images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Proyectos — Pyrux" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Proyectos — Pyrux",
		description:
			"Todos los proyectos desarrollados por Pyrux. Desarrollo web, sistemas a medida y soluciones digitales.",
		images: ["/og-image.png"],
	},
};

const breadcrumb = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.pyrux.com.ar" },
		{ "@type": "ListItem", position: 2, name: "Proyectos", item: "https://www.pyrux.com.ar/projects" },
	],
});

export default function ProjectsPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<ProjectsPageClient />
		</>
	);
}
