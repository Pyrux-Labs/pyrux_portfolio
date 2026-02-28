// ═══════════════════════════════════════════════
// Datos de proyectos — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Project } from "@/types";

export const projects: Project[] = [
	{
		id: "ecommerce-moderno",
		title: "E-Commerce Moderno",
		description:
			"Tienda online completa con carrito de compras, pasarela de pagos, panel de administración y sistema de inventario en tiempo real. Diseñada para ofrecer una experiencia de compra fluida y moderna.",
		shortDescription:
			"Tienda online con carrito, pagos y panel de administración.",
		technologies: ["react", "nextjs", "typescript", "tailwindcss", "postgresql", "stripe"],
		images: ["/projects/ecommerce-1.webp", "/projects/ecommerce-2.webp"],
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/pyrux/ecommerce",
		creatorId: "juan",
		featured: true,
		date: "2025-12-15",
	},
	{
		id: "dashboard-analytics",
		title: "Dashboard de Analytics",
		description:
			"Panel de control con visualización de datos en tiempo real, gráficos interactivos, reportes exportables y sistema de alertas. Ideal para monitorear métricas clave del negocio.",
		shortDescription:
			"Panel de métricas en tiempo real con gráficos interactivos.",
		technologies: ["react", "typescript", "nodejs", "express", "postgresql", "docker"],
		images: ["/projects/dashboard-1.webp", "/projects/dashboard-2.webp"],
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/pyrux/dashboard",
		creatorId: "gino",
		featured: true,
		date: "2025-11-20",
	},
	{
		id: "app-gestion-inventario",
		title: "Sistema de Gestión de Inventario",
		description:
			"Aplicación web para gestionar inventarios, proveedores y órdenes de compra. Incluye sistema de alertas por stock bajo, reportes automáticos y trazabilidad completa de productos.",
		shortDescription:
			"Gestión de inventarios con alertas y reportes automáticos.",
		technologies: ["nextjs", "typescript", "nodejs", "postgresql", "tailwindcss"],
		images: ["/projects/inventario-1.webp", "/projects/inventario-2.webp"],
		githubUrl: "https://github.com/pyrux/inventario",
		creatorId: "juan",
		featured: true,
		date: "2025-10-05",
	},
	{
		id: "landing-corporativa",
		title: "Landing Page Corporativa",
		description:
			"Sitio web corporativo con diseño moderno, animaciones fluidas, formulario de contacto y optimización SEO completa. Pensada para generar confianza y convertir visitantes en clientes.",
		shortDescription:
			"Landing corporativa con animaciones y SEO optimizado.",
		technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
		images: ["/projects/landing-1.webp", "/projects/landing-2.webp"],
		liveUrl: "https://example.com",
		creatorId: "gino",
		featured: true,
		date: "2025-09-18",
	},
	{
		id: "sistema-reservas",
		title: "Sistema de Reservas Online",
		description:
			"Plataforma de reservas con calendario interactivo, notificaciones por email, panel de administración y sistema de pagos. Perfecto para restaurantes, consultorios y servicios.",
		shortDescription:
			"Plataforma de reservas con calendario y notificaciones.",
		technologies: ["react", "nodejs", "express", "postgresql", "docker"],
		images: ["/projects/reservas-1.webp", "/projects/reservas-2.webp"],
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/pyrux/reservas",
		creatorId: "juan",
		featured: false,
		date: "2025-08-10",
	},
	{
		id: "chatbot-ia",
		title: "Chatbot con IA",
		description:
			"Chatbot inteligente integrado con modelos de lenguaje, capaz de responder consultas de clientes, agendar citas y escalar tickets. Reduce tiempos de respuesta y mejora la atención.",
		shortDescription:
			"Chatbot inteligente para atención al cliente automatizada.",
		technologies: ["typescript", "nodejs", "react", "tailwindcss", "docker"],
		images: ["/projects/chatbot-1.webp", "/projects/chatbot-2.webp"],
		githubUrl: "https://github.com/pyrux/chatbot",
		creatorId: "gino",
		featured: false,
		date: "2025-07-22",
	},
	{
		id: "portal-educativo",
		title: "Portal Educativo",
		description:
			"Plataforma de cursos online con sistema de progreso, evaluaciones interactivas, certificados automáticos y foro de discusión. Diseñada para instituciones educativas.",
		shortDescription:
			"Plataforma de cursos con evaluaciones y certificados.",
		technologies: ["nextjs", "typescript", "postgresql", "tailwindcss", "nodejs"],
		images: ["/projects/educativo-1.webp", "/projects/educativo-2.webp"],
		liveUrl: "https://example.com",
		creatorId: "juan",
		featured: false,
		date: "2025-06-30",
	},
	{
		id: "crm-ventas",
		title: "CRM de Ventas",
		description:
			"Sistema CRM completo para gestión de clientes, pipeline de ventas, reportes de rendimiento y automatización de seguimientos. Mejora la productividad del equipo comercial.",
		shortDescription:
			"CRM para gestión de clientes y pipeline de ventas.",
		technologies: ["react", "typescript", "nodejs", "express", "postgresql"],
		images: ["/projects/crm-1.webp", "/projects/crm-2.webp"],
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/pyrux/crm",
		creatorId: "gino",
		featured: false,
		date: "2025-05-14",
	},
];

// Funciones auxiliares para filtrar proyectos
export function getProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
	return projects.filter((p) => p.featured);
}

export function getProjectsByCreator(creatorId: string): Project[] {
	return projects.filter((p) => p.creatorId === creatorId);
}

export function getProjectsByTechnology(techId: string): Project[] {
	return projects.filter((p) => p.technologies.includes(techId));
}
