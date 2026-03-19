// ═══════════════════════════════════════════════
// Datos de proyectos — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Project } from "@/types";
import type { Locale } from "@/i18n/config";

export const projects: Record<Locale, Project[]> = {
	es: [
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
	],
	en: [
		{
			id: "landing-page-medmind",
			title: "MedMind Landing Page",
			description:
				"Modern and responsive landing page for MedMind, a professional translation services company. Designed to communicate trust and effectively generate client inquiries, with smooth animations and full SEO optimization.",
			shortDescription:
				"Modern landing page for a professional translation company.",
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
			title: "MedMind CMS",
			description:
				"Custom-built content management web application for MedMind. Allows the team to manage translations, clients, and billing from a private dashboard. Includes Stripe integration for payment management and deploys in Docker containers for maximum portability.",
			shortDescription:
				"Admin panel with Stripe payments and Docker deployment.",
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
			title: "Pyrux Portfolio",
			description:
				"This very site. Pyrux's web portfolio designed and developed entirely by the studio. Showcases projects, clients, team members, and pricing plans. Built with Next.js App Router, Tailwind CSS v4, and Framer Motion, with static export and automatic deployment on GitHub Pages.",
			shortDescription:
				"Studio web portfolio with animations and static deployment.",
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
				"Personal goal calendar web application. Allows users to create objectives, organize them in an interactive calendar, and track their progress week by week. Built with Next.js and Supabase for real-time persistence.",
			shortDescription:
				"Goal calendar with weekly tracking and real-time persistence.",
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
	],
};

// Funciones auxiliares para filtrar proyectos
export function getProjectById(id: string, locale: Locale): Project | undefined {
	return projects[locale].find((p) => p.id === id);
}

export function getFeaturedProjects(locale: Locale): Project[] {
	return projects[locale].filter((p) => p.featured);
}

export function getProjectsByTechnology(techId: string, locale: Locale): Project[] {
	return projects[locale].filter((p) => p.technologies.includes(techId));
}
