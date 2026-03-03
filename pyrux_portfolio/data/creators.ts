// ═══════════════════════════════════════════════
// Datos de creadores — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Creator } from "@/types";

export const creators: Creator[] = [
	{
		id: "juan",
		name: "Juan Manuel García",
		bio: "Desarrollador full-stack. Con experiencia en desarrollo web moderno, sistemas a medida y automatización de procesos. Siempre buscando aprender y aplicar nuevas herramientas para crear soluciones eficientes y de calidad.",
		image: "/creators/Juan-Manuel-Garcia.webp",
		photos: [
			"/creators/juan-1.webp",
			"/creators/juan-2.webp",
			"/creators/juan-3.webp",
		],
		role: "Full-Stack Developer",
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/juan-manuel-garcia-99952b270/",
			github: "https://github.com/LittleBigPants",
			email: "juanmanuelgarcia@pyrux.com.ar",
		},
		featuredProjects: [
			"ecommerce-moderno",
			"app-gestion-inventario",
			"sistema-reservas",
			"portal-educativo",
		],
	},
	{
		id: "gino",
		name: "Gino Ruben Giorgi",
		bio: "Desarrollador creativo con enfoque en experiencias de usuario excepcionales. Especializado en frontend moderno, diseño de interfaces y optimización de rendimiento. Combina diseño y código para crear productos digitales que destacan.",
		image: "/creators/Gino-Ruben-Giorgi.webp",
		photos: [
			"/creators/gino-1.webp",
			"/creators/gino-2.webp",
			"/creators/gino-3.webp",
		],
		role: "Frontend Developer & UI Designer",
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/ginorubengiorgi/",
			github: "https://github.com/ginogiorgi",
			email: "ginorubengiorgi@pyrux.com.ar",
		},
		featuredProjects: [
			"dashboard-analytics",
			"landing-corporativa",
			"chatbot-ia",
			"crm-ventas",
		],
	},
];

// Funciones auxiliares
export function getCreatorById(id: string): Creator | undefined {
	return creators.find((c) => c.id === id);
}
