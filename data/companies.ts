// ═══════════════════════════════════════════════
// Datos de empresas/clientes — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Company } from "@/types";
import type { Locale } from "@/i18n/config";

export const companies: Record<Locale, Company[]> = {
	es: [
		{
			id: "medmind",
			name: "MedMind",
			logo: "medmind_g9qz2p",
			logoDark: "medmind_blanco_ips9x1",
			summary: "Empresa de traducción especializada en medicina y educación, entre español e inglés. Trabajan con instituciones de salud, clínicas, universidades y profesionales con documentación sensible. Precisión técnica y confidencialidad en cada traducción.",
			workDescription:
				"Sitio web institucional bilingüe con landing page, sección sobre la empresa, formulario de contacto y blog de artículos gestionado desde un CMS a medida.",
			websiteUrl: "https://medmind.com.ar",
			testimonial:
				"Desde el primer contacto demostraron ser un equipo profesional y comprometido. Cumplieron los tiempos, comunicaron claro y el resultado superó nuestras expectativas. Los recomendamos sin dudarlo.",
		},
	],
	en: [
		{
			id: "medmind",
			name: "MedMind",
			logo: "medmind_g9qz2p",
			logoDark: "medmind_blanco_ips9x1",
			summary: "Translation company specialized in medicine and education, between Spanish and English. They work with health institutions, clinics, universities, and professionals with sensitive documentation. Technical accuracy and confidentiality in every translation.",
			workDescription:
				"Bilingual institutional website with landing page, about section, contact form, and an article blog managed through a custom-built CMS.",
			websiteUrl: "https://medmind.com.ar",
			testimonial:
				"From the first contact they proved to be a professional and committed team. They met deadlines, communicated clearly, and the result exceeded our expectations. We recommend them without hesitation.",
		},
	],
};

// Funciones auxiliares
export function getCompanyById(id: string, locale: Locale): Company | undefined {
	return companies[locale].find((c) => c.id === id);
}
