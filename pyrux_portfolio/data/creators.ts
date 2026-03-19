// ═══════════════════════════════════════════════
// Datos de creadores — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Creator } from "@/types";
import type { Locale } from "@/i18n/config";

export const creators: Record<Locale, Creator[]> = {
	es: [
		{
			id: "juan-manuel-garcia",
			name: "Juan Manuel García",
			bio: "Desarrollador full-stack. Con experiencia en desarrollo web moderno, sistemas a medida y automatización de procesos. Siempre buscando aprender y aplicar nuevas herramientas para crear soluciones eficientes y de calidad.",
			image: "/creators/Juan-Manuel-Garcia.webp",
			photos: ["/creators/Juan-Manuel-Garcia.webp"],
			role: "Full-Stack Developer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/juan-manuel-garcia-99952b270/",
				github: "https://github.com/LittleBigPants",
				email: "juanmanuelgarcia@pyrux.com.ar",
			},
			featuredProjects: [
				"cms-medmind",
				"landing-page-medmind",
				"pyrux-portfolio",
			],
		},
		{
			id: "gino-ruben-giorgi",
			name: "Gino Ruben Giorgi",
			bio: "Desarrollador creativo con enfoque en experiencias de usuario excepcionales. Especializado en frontend moderno, diseño de interfaces y optimización de rendimiento. Combina diseño y código para crear productos digitales que destacan.",
			image: "/creators/Gino-Ruben-Giorgi.webp",
			photos: ["/creators/Gino-Ruben-Giorgi.webp"],
			role: "Frontend Developer & UI Designer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/ginorubengiorgi/",
				github: "https://github.com/ginogiorgi",
				email: "ginorubengiorgi@pyrux.com.ar",
			},
			featuredProjects: [
				"landing-page-medmind",
				"pyrux-portfolio",
				"cms-medmind",
			],
		},
	],
	en: [
		{
			id: "juan-manuel-garcia",
			name: "Juan Manuel García",
			bio: "Full-stack developer with experience in modern web development, custom systems, and process automation. Always looking to learn and apply new tools to create efficient, high-quality solutions.",
			image: "/creators/Juan-Manuel-Garcia.webp",
			photos: ["/creators/Juan-Manuel-Garcia.webp"],
			role: "Full-Stack Developer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/juan-manuel-garcia-99952b270/",
				github: "https://github.com/LittleBigPants",
				email: "juanmanuelgarcia@pyrux.com.ar",
			},
			featuredProjects: [
				"cms-medmind",
				"landing-page-medmind",
				"pyrux-portfolio",
			],
		},
		{
			id: "gino-ruben-giorgi",
			name: "Gino Ruben Giorgi",
			bio: "Creative developer focused on exceptional user experiences. Specialized in modern frontend, interface design, and performance optimization. Combines design and code to create standout digital products.",
			image: "/creators/Gino-Ruben-Giorgi.webp",
			photos: ["/creators/Gino-Ruben-Giorgi.webp"],
			role: "Frontend Developer & UI Designer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/ginorubengiorgi/",
				github: "https://github.com/ginogiorgi",
				email: "ginorubengiorgi@pyrux.com.ar",
			},
			featuredProjects: [
				"landing-page-medmind",
				"pyrux-portfolio",
				"cms-medmind",
			],
		},
	],
};

// Funciones auxiliares
export function getCreatorById(id: string, locale: Locale): Creator | undefined {
	return creators[locale].find((c) => c.id === id);
}
