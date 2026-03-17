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

export default function ProjectsPage() {
	return <ProjectsPageClient />;
}
