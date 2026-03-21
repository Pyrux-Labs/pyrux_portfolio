// ═══════════════════════════════════════════════
// Datos de proyectos — Pyrux Portfolio
// creatorId: "pyrux" para proyectos del estudio,
//            ID del creador para proyectos personales
// ═══════════════════════════════════════════════

import type { Project } from "@/types";
import type { Locale } from "@/i18n/config";

export const projects: Record<Locale, Project[]> = {
	es: [
		// ── Proyectos del estudio (Pyrux) ─────────────
		{
			id: "landing_page_medmind",
			title: "Landing Page MedMind",
			description:
				"Landing page moderna y responsive para MedMind, una empresa de servicios de traducción profesional. Diseñada para comunicar confianza y generar consultas de clientes de forma efectiva, con animaciones fluidas y optimización SEO completa.",
			shortDescription:
				"Landing page moderna para empresa de traducción profesional.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: [
				"/projects/medmind_landing_page/1.webp",
				"/projects/medmind_landing_page/2.webp",
				"/projects/medmind_landing_page/3.webp",
				"/projects/medmind_landing_page/4.webp",
				"/projects/medmind_landing_page/5.webp",
			],
			liveUrl: "https://www.medmind.com.ar",
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},
		{
			id: "cms_medmind",
			title: "CMS MedMind",
			description:
				"Aplicación web de gestión de contenido desarrollada a medida para MedMind. Permite al equipo administrar traducciones, clientes y facturación desde un panel privado. Incluye integración con Stripe para la gestión de pagos y se despliega en contenedores Docker para máxima portabilidad.",
			shortDescription:
				"Panel de administración con pagos Stripe y despliegue en Docker.",
			technologies: ["nodejs", "express", "stripe", "postgresql", "docker"],
			images: [
				"/projects/cms_medmind/1.webp",
				"/projects/cms_medmind/2.webp",
				"/projects/cms_medmind/3.webp",
				"/projects/cms_medmind/4.webp",
			],
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},
		{
			id: "pyrux_portfolio",
			title: "Portfolio Pyrux",
			description:
				"Este mismo sitio. Portfolio web de Pyrux diseñado y desarrollado íntegramente por el estudio. Muestra proyectos, clientes, integrantes y planes de precios. Construido con Next.js App Router, Tailwind CSS v4 y Framer Motion, con exportación estática y deploy automático en Vercel.",
			shortDescription:
				"Portfolio web del estudio, con animaciones y deploy estático.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: ["/projects/pyrux_portfolio/1.webp"],
			liveUrl: "https://www.pyrux.com.ar",
			featured: true,
			date: "2026-02-01",
			creatorId: "pyrux",
		},
		{
			id: "goal_planner",
			title: "Goal Planner",
			description:
				"Aplicación web de calendario de metas personales. Permite a los usuarios crear objetivos, organizarlos en un calendario interactivo y hacer seguimiento de su progreso semana a semana. Construida con Next.js y Supabase para persistencia en tiempo real.",
			shortDescription:
				"Calendario de metas con seguimiento semanal y persistencia en tiempo real.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion", "supabase"],
			images: [
				"/projects/goal_planner/1.webp",
				"/projects/goal_planner/2.webp",
				"/projects/goal_planner/3.webp",
				"/projects/goal_planner/4.webp",
			],
			liveUrl: "https://www.goalplanner.com.ar",
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},

		// ── Proyectos personales — Juan ───────────────
		{
			id: "job_finder",
			title: "Job Finder",
			description:
				"Aplicación web para buscar y guardar ofertas de trabajo. Permite filtrar por tecnología, modalidad y salario. Incluye sistema de favoritos, notas por postulación y recordatorios de seguimiento.",
			shortDescription:
				"App para buscar, filtrar y hacer seguimiento de ofertas laborales.",
			technologies: ["react", "typescript", "nodejs", "postgresql"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/job-finder",
			featured: false,
			date: "2025-08-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "task_api",
			title: "Task API",
			description:
				"API REST para gestión de tareas personales con autenticación JWT, roles de usuario y endpoints para crear, priorizar y archivar tareas. Dockerizada y documentada con Swagger.",
			shortDescription:
				"API REST con autenticación JWT para gestión de tareas.",
			technologies: ["nodejs", "express", "postgresql", "docker"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/task-api",
			featured: false,
			date: "2025-05-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "auth_boilerplate",
			title: "Auth Boilerplate",
			description:
				"Boilerplate de autenticación con registro, login, refresh tokens y recuperación de contraseña. Pensado para arrancar proyectos sin repetir la misma lógica de auth cada vez.",
			shortDescription:
				"Boilerplate de autenticación completo con JWT y refresh tokens.",
			technologies: ["nodejs", "typescript", "postgresql", "express"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/auth-boilerplate",
			featured: false,
			date: "2025-02-01",
			creatorId: "juan-manuel-garcia",
		},

		// ── Proyectos personales — Gino ───────────────
		{
			id: "ui_kit",
			title: "UI Kit",
			description:
				"Sistema de componentes reutilizables construido con React y Tailwind CSS. Incluye botones, inputs, modales, tooltips y cards documentados con variantes de color, tamaño y estado.",
			shortDescription:
				"Sistema de diseño con componentes React documentados.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: [],
			githubUrl: "https://github.com/ginogiorgi/ui-kit",
			featured: false,
			date: "2025-09-01",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "personal_portfolio",
			title: "Portfolio Personal",
			description:
				"Portfolio personal con animaciones de entrada, modo oscuro/claro y transiciones de página. Diseñado para mostrar proyectos y habilidades con un estilo minimalista y moderno.",
			shortDescription:
				"Portfolio personal con animaciones y modo oscuro.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: [],
			githubUrl: "https://github.com/ginogiorgi/portfolio",
			featured: false,
			date: "2025-06-01",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "analytics_dashboard",
			title: "Analytics Dashboard",
			description:
				"Dashboard de métricas con gráficos interactivos, filtros por fecha y exportación a CSV. Construido para visualizar datos de uso de una aplicación web en tiempo real.",
			shortDescription:
				"Dashboard de métricas con gráficos interactivos y exportación.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: [],
			githubUrl: "https://github.com/ginogiorgi/analytics-dashboard",
			featured: false,
			date: "2025-03-01",
			creatorId: "gino-ruben-giorgi",
		},
	],
	en: [
		// ── Studio projects (Pyrux) ───────────────────
		{
			id: "landing_page_medmind",
			title: "MedMind Landing Page",
			description:
				"Modern and responsive landing page for MedMind, a professional translation services company. Designed to communicate trust and effectively generate client inquiries, with smooth animations and full SEO optimization.",
			shortDescription:
				"Modern landing page for a professional translation company.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: [
				"/projects/medmind_landing_page/1.webp",
				"/projects/medmind_landing_page/2.webp",
				"/projects/medmind_landing_page/3.webp",
				"/projects/medmind_landing_page/4.webp",
				"/projects/medmind_landing_page/5.webp",
			],
			liveUrl: "https://www.medmind.com.ar",
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},
		{
			id: "cms_medmind",
			title: "MedMind CMS",
			description:
				"Custom-built content management web application for MedMind. Allows the team to manage translations, clients, and billing from a private dashboard. Includes Stripe integration for payment management and deploys in Docker containers for maximum portability.",
			shortDescription:
				"Admin panel with Stripe payments and Docker deployment.",
			technologies: ["nodejs", "express", "stripe", "postgresql", "docker"],
			images: [
				"/projects/cms_medmind/1.webp",
				"/projects/cms_medmind/2.webp",
				"/projects/cms_medmind/3.webp",
				"/projects/cms_medmind/4.webp",
			],
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},
		{
			id: "pyrux_portfolio",
			title: "Pyrux Portfolio",
			description:
				"This very site. Pyrux's web portfolio designed and developed entirely by the studio. Showcases projects, clients, team members, and pricing plans. Built with Next.js App Router, Tailwind CSS v4, and Framer Motion, with static export and automatic deployment on Vercel.",
			shortDescription:
				"Studio web portfolio with animations and static deployment.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: ["/projects/pyrux_portfolio/1.webp"],
			liveUrl: "https://www.pyrux.com.ar",
			featured: true,
			date: "2026-02-01",
			creatorId: "pyrux",
		},
		{
			id: "goal_planner",
			title: "Goal Planner",
			description:
				"Personal goal calendar web application. Allows users to create objectives, organize them in an interactive calendar, and track their progress week by week. Built with Next.js and Supabase for real-time persistence.",
			shortDescription:
				"Goal calendar with weekly tracking and real-time persistence.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion", "supabase"],
			images: [
				"/projects/goal_planner/1.webp",
				"/projects/goal_planner/2.webp",
				"/projects/goal_planner/3.webp",
				"/projects/goal_planner/4.webp",
			],
			liveUrl: "https://www.goalplanner.com.ar",
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},

		// ── Personal projects — Juan ──────────────────
		{
			id: "job_finder",
			title: "Job Finder",
			description:
				"Web application for searching and saving job offers. Allows filtering by technology, work mode, and salary. Includes a favorites system, notes per application, and follow-up reminders.",
			shortDescription:
				"App for searching, filtering, and tracking job offers.",
			technologies: ["react", "typescript", "nodejs", "postgresql"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/job-finder",
			featured: false,
			date: "2025-08-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "task_api",
			title: "Task API",
			description:
				"REST API for personal task management with JWT authentication, user roles, and endpoints to create, prioritize, and archive tasks. Dockerized and documented with Swagger.",
			shortDescription:
				"REST API with JWT authentication for task management.",
			technologies: ["nodejs", "express", "postgresql", "docker"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/task-api",
			featured: false,
			date: "2025-05-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "auth_boilerplate",
			title: "Auth Boilerplate",
			description:
				"Authentication boilerplate with registration, login, refresh tokens, and password recovery. Designed to start projects without repeating the same auth logic every time.",
			shortDescription:
				"Complete authentication boilerplate with JWT and refresh tokens.",
			technologies: ["nodejs", "typescript", "postgresql", "express"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/auth-boilerplate",
			featured: false,
			date: "2025-02-01",
			creatorId: "juan-manuel-garcia",
		},

		// ── Personal projects — Gino ──────────────────
		{
			id: "ui_kit",
			title: "UI Kit",
			description:
				"Reusable component system built with React and Tailwind CSS. Includes buttons, inputs, modals, tooltips, and cards documented with color, size, and state variants.",
			shortDescription:
				"Design system with documented React components.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: [],
			githubUrl: "https://github.com/ginogiorgi/ui-kit",
			featured: false,
			date: "2025-09-01",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "personal_portfolio",
			title: "Personal Portfolio",
			description:
				"Personal portfolio with entry animations, dark/light mode, and page transitions. Designed to showcase projects and skills with a minimalist, modern style.",
			shortDescription:
				"Personal portfolio with animations and dark mode.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: [],
			githubUrl: "https://github.com/ginogiorgi/portfolio",
			featured: false,
			date: "2025-06-01",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "analytics_dashboard",
			title: "Analytics Dashboard",
			description:
				"Metrics dashboard with interactive charts, date filters, and CSV export. Built to visualize web application usage data in real time.",
			shortDescription:
				"Metrics dashboard with interactive charts and export.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: [],
			githubUrl: "https://github.com/ginogiorgi/analytics-dashboard",
			featured: false,
			date: "2025-03-01",
			creatorId: "gino-ruben-giorgi",
		},
	],
};

// ── Funciones auxiliares ─────────────────────────

export function getProjectById(id: string, locale: Locale): Project | undefined {
	return projects[locale].find((p) => p.id === id);
}

export function getFeaturedProjects(locale: Locale): Project[] {
	return projects[locale].filter((p) => p.featured);
}

export function getStudioProjects(locale: Locale): Project[] {
	return projects[locale].filter((p) => p.creatorId === "pyrux");
}

export function getProjectsByCreator(creatorId: string, locale: Locale): Project[] {
	return projects[locale].filter((p) => p.creatorId === creatorId);
}

export function getProjectsByTechnology(techId: string, locale: Locale): Project[] {
	return projects[locale].filter((p) => p.technologies.includes(techId));
}
