// ═══════════════════════════════════════════════
// Services data — service items
// ═══════════════════════════════════════════════

import type { ServiceItem } from "../types";
import type { Locale } from "@/i18n/config";

export const services: Record<Locale, ServiceItem[]> = {
	es: [
		{
			title: "Desarrollo Web",
			desc: "Diseñamos y desarrollamos sitios web modernos y responsivos que ayudan a tu negocio a destacarse y atraer nuevos clientes.",
			icon: "House",
		},
		{
			title: "Software a Medida",
			desc: "Creamos sistemas personalizados adaptados a tus procesos para mejorar la organización, la eficiencia y el trabajo diario.",
			icon: "MessageCircle",
		},
		{
			title: "Automatización de Procesos",
			desc: "Automatizamos tareas repetitivas, integraciones y comunicaciones para que tu empresa ahorre tiempo y reduzca trabajo manual.",
			icon: "TreeDeciduous",
		},
		{
			title: "Diseño UI y Experiencia Digital",
			desc: "Interfaces limpias e intuitivas pensadas para mejorar la experiencia de usuario y la percepción profesional de tu marca.",
			icon: "Globe",
		},
		{
			title: "Optimización y Rendimiento",
			desc: "Mejoramos sitios y sistemas existentes para que sean más rápidos, confiables y efectivos para tus objetivos.",
			icon: "SquareTerminal",
		},
		{
			title: "Mantenimiento y Soporte",
			desc: "Actualizaciones, seguridad y soporte técnico continuo para que tus productos digitales funcionen sin problemas.",
			icon: "Puzzle",
		},
	],
	en: [
		{
			title: "Web Development",
			desc: "We design and develop modern, responsive websites that help your business stand out and attract new clients.",
			icon: "House",
		},
		{
			title: "Custom Software",
			desc: "We create custom systems tailored to your processes to improve organization, efficiency, and daily workflow.",
			icon: "MessageCircle",
		},
		{
			title: "Process Automation",
			desc: "We automate repetitive tasks, integrations, and communications so your company saves time and reduces manual work.",
			icon: "TreeDeciduous",
		},
		{
			title: "UI Design & Digital Experience",
			desc: "Clean, intuitive interfaces designed to enhance user experience and the professional perception of your brand.",
			icon: "Globe",
		},
		{
			title: "Optimization & Performance",
			desc: "We improve existing sites and systems to make them faster, more reliable, and more effective for your goals.",
			icon: "SquareTerminal",
		},
		{
			title: "Maintenance & Support",
			desc: "Updates, security, and ongoing technical support to keep your digital products running smoothly.",
			icon: "Puzzle",
		},
	],
};
