// ═══════════════════════════════════════════════
// Proyectos personales por integrante — Pyrux
// ═══════════════════════════════════════════════

import type { PersonalProject } from "@/types";
import type { Locale } from "@/i18n/config";

export const personalProjects: Record<Locale, PersonalProject[]> = {
	es: [
		// ── Juan ────────────────────────────────────
		{
			id: "job-finder",
			title: "Job Finder",
			description:
				"Aplicación web para buscar y guardar ofertas de trabajo. Permite filtrar por tecnología, modalidad y salario. Incluye sistema de favoritos, notas por postulación y recordatorios de seguimiento.",
			shortDescription:
				"App para buscar, filtrar y hacer seguimiento de ofertas laborales.",
			technologies: ["react", "typescript", "nodejs", "postgresql"],
			images: ["/projects/personal/job-finder-1.webp"],
			githubUrl: "https://github.com/LittleBigPants/job-finder",
			featured: false,
			creatorId: "juan-manuel-garcia",
			date: "2025-08-01",
		},
		{
			id: "task-api",
			title: "Task API",
			description:
				"API REST para gestión de tareas personales con autenticación JWT, roles de usuario y endpoints para crear, priorizar y archivar tareas. Dockerizada y documentada con Swagger.",
			shortDescription:
				"API REST con autenticación JWT para gestión de tareas.",
			technologies: ["nodejs", "express", "postgresql", "docker"],
			images: ["/projects/personal/task-api-1.webp"],
			githubUrl: "https://github.com/LittleBigPants/task-api",
			featured: false,
			creatorId: "juan-manuel-garcia",
			date: "2025-05-01",
		},
		{
			id: "auth-boilerplate",
			title: "Auth Boilerplate",
			description:
				"Boilerplate de autenticación con registro, login, refresh tokens y recuperación de contraseña. Pensado para arrancar proyectos sin repetir la misma lógica de auth cada vez.",
			shortDescription:
				"Boilerplate de autenticación completo con JWT y refresh tokens.",
			technologies: ["nodejs", "typescript", "postgresql", "express"],
			images: ["/projects/personal/auth-boilerplate-1.webp"],
			githubUrl: "https://github.com/LittleBigPants/auth-boilerplate",
			featured: false,
			creatorId: "juan-manuel-garcia",
			date: "2025-02-01",
		},

		// ── Gino ────────────────────────────────────
		{
			id: "ui-kit",
			title: "UI Kit",
			description:
				"Sistema de componentes reutilizables construido con React y Tailwind CSS. Incluye botones, inputs, modales, tooltips y cards documentados con variantes de color, tamaño y estado.",
			shortDescription:
				"Sistema de diseño con componentes React documentados.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: ["/projects/personal/ui-kit-1.webp"],
			githubUrl: "https://github.com/ginogiorgi/ui-kit",
			featured: false,
			creatorId: "gino-ruben-giorgi",
			date: "2025-09-01",
		},
		{
			id: "personal-portfolio",
			title: "Portfolio Personal",
			description:
				"Portfolio personal con animaciones de entrada, modo oscuro/claro y transiciones de página. Diseñado para mostrar proyectos y habilidades con un estilo minimalista y moderno.",
			shortDescription:
				"Portfolio personal con animaciones y modo oscuro.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: ["/projects/personal/personal-portfolio-1.webp"],
			githubUrl: "https://github.com/ginogiorgi/portfolio",
			featured: false,
			creatorId: "gino-ruben-giorgi",
			date: "2025-06-01",
		},
		{
			id: "analytics-dashboard",
			title: "Analytics Dashboard",
			description:
				"Dashboard de métricas con gráficos interactivos, filtros por fecha y exportación a CSV. Construido para visualizar datos de uso de una aplicación web en tiempo real.",
			shortDescription:
				"Dashboard de métricas con gráficos interactivos y exportación.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: ["/projects/personal/analytics-dashboard-1.webp"],
			githubUrl: "https://github.com/ginogiorgi/analytics-dashboard",
			featured: false,
			creatorId: "gino-ruben-giorgi",
			date: "2025-03-01",
		},
	],
	en: [
		// ── Juan ────────────────────────────────────
		{
			id: "job-finder",
			title: "Job Finder",
			description:
				"Web application for searching and saving job offers. Allows filtering by technology, work mode, and salary. Includes a favorites system, notes per application, and follow-up reminders.",
			shortDescription:
				"App for searching, filtering, and tracking job offers.",
			technologies: ["react", "typescript", "nodejs", "postgresql"],
			images: ["/projects/personal/job-finder-1.webp"],
			githubUrl: "https://github.com/LittleBigPants/job-finder",
			featured: false,
			creatorId: "juan-manuel-garcia",
			date: "2025-08-01",
		},
		{
			id: "task-api",
			title: "Task API",
			description:
				"REST API for personal task management with JWT authentication, user roles, and endpoints to create, prioritize, and archive tasks. Dockerized and documented with Swagger.",
			shortDescription:
				"REST API with JWT authentication for task management.",
			technologies: ["nodejs", "express", "postgresql", "docker"],
			images: ["/projects/personal/task-api-1.webp"],
			githubUrl: "https://github.com/LittleBigPants/task-api",
			featured: false,
			creatorId: "juan-manuel-garcia",
			date: "2025-05-01",
		},
		{
			id: "auth-boilerplate",
			title: "Auth Boilerplate",
			description:
				"Authentication boilerplate with registration, login, refresh tokens, and password recovery. Designed to start projects without repeating the same auth logic every time.",
			shortDescription:
				"Complete authentication boilerplate with JWT and refresh tokens.",
			technologies: ["nodejs", "typescript", "postgresql", "express"],
			images: ["/projects/personal/auth-boilerplate-1.webp"],
			githubUrl: "https://github.com/LittleBigPants/auth-boilerplate",
			featured: false,
			creatorId: "juan-manuel-garcia",
			date: "2025-02-01",
		},

		// ── Gino ────────────────────────────────────
		{
			id: "ui-kit",
			title: "UI Kit",
			description:
				"Reusable component system built with React and Tailwind CSS. Includes buttons, inputs, modals, tooltips, and cards documented with color, size, and state variants.",
			shortDescription:
				"Design system with documented React components.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: ["/projects/personal/ui-kit-1.webp"],
			githubUrl: "https://github.com/ginogiorgi/ui-kit",
			featured: false,
			creatorId: "gino-ruben-giorgi",
			date: "2025-09-01",
		},
		{
			id: "personal-portfolio",
			title: "Personal Portfolio",
			description:
				"Personal portfolio with entry animations, dark/light mode, and page transitions. Designed to showcase projects and skills with a minimalist, modern style.",
			shortDescription:
				"Personal portfolio with animations and dark mode.",
			technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
			images: ["/projects/personal/personal-portfolio-1.webp"],
			githubUrl: "https://github.com/ginogiorgi/portfolio",
			featured: false,
			creatorId: "gino-ruben-giorgi",
			date: "2025-06-01",
		},
		{
			id: "analytics-dashboard",
			title: "Analytics Dashboard",
			description:
				"Metrics dashboard with interactive charts, date filters, and CSV export. Built to visualize web application usage data in real time.",
			shortDescription:
				"Metrics dashboard with interactive charts and export.",
			technologies: ["react", "typescript", "tailwindcss"],
			images: ["/projects/personal/analytics-dashboard-1.webp"],
			githubUrl: "https://github.com/ginogiorgi/analytics-dashboard",
			featured: false,
			creatorId: "gino-ruben-giorgi",
			date: "2025-03-01",
		},
	],
};

export function getPersonalProjectsByCreator(creatorId: string, locale: Locale): PersonalProject[] {
	return personalProjects[locale].filter((p) => p.creatorId === creatorId);
}
