// ═══════════════════════════════════════════════
// Page /[locale]/projects
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import ProjectBrowser from "@/components/common/ProjectBrowser";

interface ProjectsPageProps {
	params: Promise<{ locale: string }>;
}

const BASE_URL = "https://www.pyrux.com.ar";

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
	const { locale } = await params;
	const isEs = locale === "es";
	const url = `${BASE_URL}/${locale}/projects`;

	return {
		title: isEs ? "Proyectos — Pyrux" : "Projects — Pyrux",
		description: isEs
			? "Todos los proyectos desarrollados por Pyrux. Desarrollo web, sistemas a medida y soluciones digitales."
			: "All projects developed by Pyrux. Web development, custom systems and digital solutions.",
		alternates: {
			canonical: url,
			languages: {
				es: `${BASE_URL}/es/projects`,
				en: `${BASE_URL}/en/projects`,
				"x-default": `${BASE_URL}/es/projects`,
			},
		},
		openGraph: {
			title: isEs ? "Proyectos — Pyrux" : "Projects — Pyrux",
			description: isEs
				? "Todos los proyectos desarrollados por Pyrux."
				: "All projects developed by Pyrux.",
			url,
			locale: isEs ? "es_AR" : "en_US",
			images: [{ url: "/og-image.png", width: 1200, height: 630, alt: isEs ? "Proyectos — Pyrux" : "Projects — Pyrux" }],
		},
		twitter: {
			card: "summary_large_image",
			title: isEs ? "Proyectos — Pyrux" : "Projects — Pyrux",
			description: isEs
				? "Todos los proyectos desarrollados por Pyrux."
				: "All projects developed by Pyrux.",
			images: ["/og-image.png"],
		},
	};
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
	const { locale } = await params;
	const isEs = locale === "es";
	const url = `${BASE_URL}/${locale}/projects`;

	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
			{ "@type": "ListItem", position: 2, name: isEs ? "Proyectos" : "Projects", item: url },
		],
	});

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<ProjectBrowser />
		</>
	);
}
