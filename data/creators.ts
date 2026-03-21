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
			image: "/creators/juan/Juan_Manuel_Garcia.webp",
			photos: ["/creators/juan/Juan_Manuel_Garcia.webp"],
			role: "Full-Stack Developer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/juan-manuel-garcia-99952b270/",
				github: "https://github.com/LittleBigPants",
				email: "juanmanuelgarcia@pyrux.com.ar",
			},
		},
		{
			id: "gino-ruben-giorgi",
			name: "Gino Ruben Giorgi",
			bio: "Ingeniero en sistemas enfocado en desarrollo frontend y arquitectura web. Experiencia construyendo productos digitales, priorizando performance, escalabilidad y experiencia de usuario. Experto en sistemas operativos y en creación de sistemas de automatización avanzados.",
			image: "/creators/gino/Gino_Ruben_Giorgi.webp",
			photos: ["/creators/gino/Gino_Ruben_Giorgi.webp"],
			role: "System Engineer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/ginorubengiorgi/",
				github: "https://github.com/ginogiorgi",
				email: "ginorubengiorgi@pyrux.com.ar",
			},
		},
	],
	en: [
		{
			id: "juan-manuel-garcia",
			name: "Juan Manuel García",
			bio: "Full-stack developer with experience in modern web development, custom systems, and process automation. Always looking to learn and apply new tools to create efficient, high-quality solutions.",
			image: "/creators/juan/Juan_Manuel_Garcia.webp",
			photos: ["/creators/juan/Juan_Manuel_Garcia.webp"],
			role: "Full-Stack Developer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/juan-manuel-garcia-99952b270/",
				github: "https://github.com/LittleBigPants",
				email: "juanmanuelgarcia@pyrux.com.ar",
			},
		},
		{
			id: "gino-ruben-giorgi",
			name: "Gino Ruben Giorgi",
			bio: "Systems engineer focused on frontend development and web architecture. Experienced in building digital products with a priority on performance, scalability, and user experience. Expert in operating systems and advanced automation systems.",
			image: "/creators/gino/Gino_Ruben_Giorgi.webp",
			photos: ["/creators/gino/Gino_Ruben_Giorgi.webp"],
			role: "System Engineer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/ginorubengiorgi/",
				github: "https://github.com/ginogiorgi",
				email: "ginorubengiorgi@pyrux.com.ar",
			},
		},
	],
};

// Funciones auxiliares
export function getCreatorById(id: string, locale: Locale): Creator | undefined {
	return creators[locale].find((c) => c.id === id);
}
