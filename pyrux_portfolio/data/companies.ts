// ═══════════════════════════════════════════════
// Datos de empresas/clientes — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Company } from "@/types";

export const companies: Company[] = [
	{
		id: "techflow",
		name: "TechFlow Solutions",
		logo: "/companies/techflow.svg",
		summary:
			"Startup de tecnología enfocada en soluciones SaaS para empresas medianas.",
		workDescription:
			"Desarrollamos su plataforma principal de gestión empresarial, incluyendo módulo de facturación, CRM integrado y dashboard de métricas en tiempo real.",
		websiteUrl: "https://example.com",
		testimonial:
			"Pyrux entendió nuestras necesidades desde el primer día. El resultado superó nuestras expectativas.",
	},
	{
		id: "greenmarket",
		name: "GreenMarket",
		logo: "/companies/greenmarket.svg",
		summary:
			"Cadena de tiendas orgánicas con presencia en varias ciudades.",
		workDescription:
			"Creamos su tienda online con catálogo dinámico, sistema de pedidos, integración con logística y panel de administración para gestionar sucursales.",
		websiteUrl: "https://example.com",
		testimonial:
			"Un equipo profesional que cumple plazos y entrega calidad. Muy recomendados.",
	},
	{
		id: "medicore",
		name: "MediCore",
		logo: "/companies/medicore.svg",
		summary:
			"Clínica médica con múltiples especialidades y sistema de turnos.",
		workDescription:
			"Implementamos un sistema de turnos online, historial clínico digital y portal de pacientes con notificaciones automatizadas por email y WhatsApp.",
		websiteUrl: "https://example.com",
	},
	{
		id: "urbanfit",
		name: "UrbanFit Gym",
		logo: "/companies/urbanfit.svg",
		summary:
			"Cadena de gimnasios con modelo de suscripción y clases online.",
		workDescription:
			"Desarrollamos la plataforma de reservas de clases, sistema de membresías, streaming de clases en vivo y app de seguimiento de rutinas.",
		websiteUrl: "https://example.com",
		testimonial:
			"Gracias a Pyrux pudimos digitalizar todo nuestro negocio en tiempo récord.",
	},
	{
		id: "logistica-express",
		name: "Logística Express",
		logo: "/companies/logistica.svg",
		summary:
			"Empresa de logística y distribución con operaciones nacionales.",
		workDescription:
			"Automatizamos sus procesos de despacho, tracking de envíos en tiempo real y dashboards operativos para mejorar la eficiencia en un 40%.",
		websiteUrl: "https://example.com",
	},
	{
		id: "estudio-legal",
		name: "Estudio Legal Martínez",
		logo: "/companies/legal.svg",
		summary:
			"Estudio jurídico especializado en derecho comercial y corporativo.",
		workDescription:
			"Creamos su sitio web corporativo con sistema de consultas online, blog de novedades legales y gestión interna de casos.",
		websiteUrl: "https://example.com",
		testimonial:
			"Profesionales serios y comprometidos. El sitio nos genera consultas todos los días.",
	},
];

// Funciones auxiliares
export function getCompanyById(id: string): Company | undefined {
	return companies.find((c) => c.id === id);
}
