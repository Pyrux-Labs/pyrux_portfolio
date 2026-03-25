// ═══════════════════════════════════════════════
// Services data — service items
// ═══════════════════════════════════════════════

import type { ServiceItem } from "../types";
import type { Locale } from "@/i18n/config";

export const services: Record<Locale, ServiceItem[]> = {
	es: [
		{
			title: "Diseño Web",
			desc: "Tu sitio es la cara de tu empresa las 24 horas. Desarrollamos webs modernas, rápidas y pensadas para convertir visitantes en clientes reales.",
			icon: "House",
		},
		{
			title: "Software a Medida",
			desc: "Cuando ningún sistema del mercado se adapta a tu operación, lo construimos nosotros. Sistemas de gestión, portales o plataformas únicas para tu negocio.",
			icon: "MessageCircle",
		},
		{
			title: "Automatización e IA",
			desc: "Bots de WhatsApp, respuestas automáticas e integraciones inteligentes que trabajan mientras vos no estás. Más ventas, menos trabajo manual.",
			icon: "TreeDeciduous",
		},
		{
			title: "Diseño UI/UX",
			desc: "La diferencia entre un sitio que impresiona y uno que se olvida está en los detalles. Diseñamos interfaces que proyectan la calidad real de tu empresa.",
			icon: "Globe",
		},
		{
			title: "Optimización Web",
			desc: "Un sitio lento o desactualizado pierde clientes antes de que lean la primera línea. Auditamos y optimizamos tu presencia digital para que funcione a pleno.",
			icon: "SquareTerminal",
		},
		{
			title: "Mantenimiento y Soporte",
			desc: "Tu tecnología no descansa, y nosotros tampoco. Actualizaciones, seguridad y soporte técnico continuo para que tu negocio nunca se detenga.",
			icon: "Puzzle",
		},
	],
	en: [
		{
			title: "Web Design",
			desc: "Your website is your business's face around the clock. We build fast, modern sites designed to turn visitors into real clients.",
			icon: "House",
		},
		{
			title: "Custom Software",
			desc: "When no off-the-shelf system fits your operation, we build it. Management systems, internal portals, or custom platforms — exactly what your business needs.",
			icon: "MessageCircle",
		},
		{
			title: "Automation & AI",
			desc: "WhatsApp bots, automated replies, and smart integrations that work while you don't. More sales, less manual work.",
			icon: "TreeDeciduous",
		},
		{
			title: "UI/UX Design",
			desc: "The difference between a site that impresses and one that's forgotten is in the details. We design interfaces that reflect the real quality of your business.",
			icon: "Globe",
		},
		{
			title: "Web Optimization",
			desc: "A slow or outdated site loses clients before they read the first line. We audit and optimize your digital presence so it performs at its best.",
			icon: "SquareTerminal",
		},
		{
			title: "Maintenance & Support",
			desc: "Your technology never rests, and neither do we. Updates, security, and ongoing technical support so your business never stops.",
			icon: "Puzzle",
		},
	],
};
