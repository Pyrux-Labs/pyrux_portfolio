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
			summary: "Empresa de servicios de traducción profesional.",
			workDescription:
				"Creación de una landing page moderna y responsive para promocionar los servicios de traducción de MedMind.",
			websiteUrl: "https://medmind.com.ar",
			testimonial:
				"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
		},
	],
	en: [
		{
			id: "medmind",
			name: "MedMind",
			logo: "medmind_g9qz2p",
			logoDark: "medmind_blanco_ips9x1",
			summary: "Professional translation services company.",
			workDescription:
				"Creation of a modern and responsive landing page to promote MedMind's translation services.",
			websiteUrl: "https://medmind.com.ar",
			testimonial:
				"Serious and committed professionals. The site generates inquiries for us every day.",
		},
	],
};

// Funciones auxiliares
export function getCompanyById(id: string, locale: Locale): Company | undefined {
	return companies[locale].find((c) => c.id === id);
}
