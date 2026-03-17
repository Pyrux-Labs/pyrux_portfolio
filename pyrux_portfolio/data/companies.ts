// ═══════════════════════════════════════════════
// Datos de empresas/clientes — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Company } from "@/types";

export const companies: Company[] = [
		{
		id: "medmind",
		name: "MedMind",
		logo: "/companies/medmind.svg",
		summary:
			"Empresa de servicios de traducción profesional.",
		workDescription:
			"Creación de una landing page moderna y responsive para promocionar los servicios de traducción de MedMind.",
		websiteUrl: "https://medmind.com.ar",
		testimonial:
			"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
	},
			{
		id: "medmind",
		name: "MedMind",
		logo: "/companies/medmind.svg",
		summary:
			"Empresa de servicios de traducción profesional.",
		workDescription:
			"Creación de una landing page moderna y responsive para promocionar los servicios de traducción de MedMind.",
		websiteUrl: "https://medmind.com.ar",
		testimonial:
			"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
	},
			{
		id: "medmind",
		name: "MedMind",
		logo: "/companies/medmind.svg",
		summary:
			"Empresa de servicios de traducción profesional.",
		workDescription:
			"Creación de una landing page moderna y responsive para promocionar los servicios de traducción de MedMind.",
		websiteUrl: "https://medmind.com.ar",
		testimonial:
			"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
	},
			{
		id: "medmind",
		name: "MedMind",
		logo: "/companies/medmind.svg",
		summary:
			"Empresa de servicios de traducción profesional.",
		workDescription:
			"Creación de una landing page moderna y responsive para promocionar los servicios de traducción de MedMind.",
		websiteUrl: "https://medmind.com.ar",
		testimonial:
			"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
	},
			{
		id: "medmind",
		name: "MedMind",
		logo: "/companies/medmind.svg",
		summary:
			"Empresa de servicios de traducción profesional.",
		workDescription:
			"Creación de una landing page moderna y responsive para promocionar los servicios de traducción de MedMind.",
		websiteUrl: "https://medmind.com.ar",
		testimonial:
			"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
	},
			{
		id: "medmind",
		name: "MedMind",
		logo: "/companies/medmind.svg",
		summary:
			"Empresa de servicios de traducción profesional.",
		workDescription:
			"Creación de una landing page moderna y responsive para promocionar los servicios de traducción de MedMind.",
		websiteUrl: "https://medmind.com.ar",
		testimonial:
			"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
	},
	
	];

// Funciones auxiliares
export function getCompanyById(id: string): Company | undefined {
	return companies.find((c) => c.id === id);
}
