// ═══════════════════════════════════════════════
// Página /projects — todos los proyectos
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
	title: "Proyectos — Pyrux",
	description:
		"Todos los proyectos desarrollados por Pyrux. Desarrollo web, sistemas a medida y soluciones digitales.",
};

export default function ProjectsPage() {
	return <ProjectsPageClient />;
}
