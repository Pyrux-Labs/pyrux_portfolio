// ═══════════════════════════════════════════════
// Datos de proyectos — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Project } from "@/types";

export const projects: Project[] = [
	{
		id: "landing-page-medmind",
		title: "Landing Page MedMind",
		description:
			"Landing page moderna y responsive para MedMind, una empresa de servicios de traducción profesional. Diseñada para comunicar confianza y generar consultas de clientes de forma efectiva, con animaciones fluidas y optimización SEO completa.",
		shortDescription:
			"Landing page moderna para empresa de traducción profesional.",
		technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
		images: [
			"/projects/medmind/1.webp",
			"/projects/medmind/2.webp",
			"/projects/medmind/3.webp",
			"/projects/medmind/4.webp",
			"/projects/medmind/5.webp",
		],
		liveUrl: "https://www.medmind.com.ar",
		featured: true,
		date: "2026-1-01",
	},
	{
		id: "cms-medmind",
		title: "CMS MedMind",
		description:
			"Aplicación web de gestión de contenido desarrollada a medida para MedMind. Permite al equipo administrar traducciones, clientes y facturación desde un panel privado. Incluye integración con Stripe para la gestión de pagos y se despliega en contenedores Docker para máxima portabilidad.",
		shortDescription:
			"Panel de administración con pagos Stripe y despliegue en Docker.",
		technologies: ["nodejs", "express", "stripe", "postgresql", "docker"],
		images: [
			"/projects/cms-medmind/1.webp",
			"/projects/cms-medmind/2.webp",
			"/projects/cms-medmind/3.webp",
			"/projects/cms-medmind/4.webp",
		],
		featured: true,
		date: "2026-1-01",
	},
	{
		id: "pyrux-portfolio",
		title: "Portfolio Pyrux",
		description:
			"Este mismo sitio. Portfolio web de Pyrux diseñado y desarrollado íntegramente por el estudio. Muestra proyectos, clientes, integrantes y planes de precios. Construido con Next.js App Router, Tailwind CSS v4 y Framer Motion, con exportación estática y deploy automático en GitHub Pages.",
		shortDescription:
			"Portfolio web del estudio, con animaciones y deploy estático.",
		technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
		images: ["/projects/pyrux-portfolio/1.webp"],
		liveUrl: "https://www.pyrux.com.ar",
		featured: true,
		date: "2026-2-01",
	},
	{
		id: "goal-planner",
		title: "Goal Planner",
		description:
			"Aplicación web de calendario de metas personales. Permite a los usuarios crear objetivos, organizarlos en un calendario interactivo y hacer seguimiento de su progreso semana a semana. Construida con Next.js y Supabase para persistencia en tiempo real.",
		shortDescription:
			"Calendario de metas con seguimiento semanal y persistencia en tiempo real.",
		technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion", "supabase"],
		images: [
			"/projects/goal-planner/1.webp",
			"/projects/goal-planner/2.webp",
			"/projects/goal-planner/3.webp",
			"/projects/goal-planner/4.webp",
		],
		liveUrl: "https://www.goalplanner.com.ar",
		featured: true,
		date: "2026-1-01",
	},
];

// Funciones auxiliares para filtrar proyectos
export function getProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
	return projects.filter((p) => p.featured);
}

export function getProjectsByTechnology(techId: string): Project[] {
	return projects.filter((p) => p.technologies.includes(techId));
}
