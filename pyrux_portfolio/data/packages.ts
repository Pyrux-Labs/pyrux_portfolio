// ═══════════════════════════════════════════════
// Packages data — service packages and pricing
// ═══════════════════════════════════════════════

import type { ServicePackage } from "../types/pricing.types";

export const packages: ServicePackage[] = [
	{
		number: "01",
		name: "Growth",
		price: "USD 300",
		maintenancePrice: "$40/mes",
		deliveryTime: "2 semanas",
		popular: false,
		features: [
			{ text: "Landing 1-3 páginas", included: true },
			{ text: "Diseño responsive", included: true },
			{ text: "Formulario de contacto", included: true },
			{ text: "SEO básico", included: true },
			{ text: "Google Analytics", included: true },
			{ text: "SSL incluido", included: true },
			{ text: "Integración redes sociales", included: true },
			{ text: "Revisiones ilimitadas antes del lanzamiento", included: true },
			{ text: "Blog o sección noticias", included: true },
		],
		maintenanceCards: [
			{
				icon: "Server",
				title: "Hosting y SSL",
				description: "Sitio en línea con HTTPS activo y dominio configurado",
			},
			{
				icon: "SatelliteDish",
				title: "Monitoreo constante",
				description: "Arreglamos los problemas antes de que el usuario los vea",
			},
			{
				icon: "HardDrive",
				title: "Backups automáticos",
				description: "Intervalo de copias cada 14 días",
			},
			{
				icon: "Pencil",
				title: "Cambios menores",
				description: "Actualizar textos e imágenes sin costo extra",
			},
			{
				icon: "Shield",
				title: "Actualizaciones de seguridad",
				description: "Parches y dependencias al día",
			},
			{
				icon: "Clock",
				title: "Soporte básico",
				description: "Consultas por canal directo, respuesta en 48hs",
			},
		],
	},
	{
		number: "02",
		name: "Pro",
		price: "USD 500",
		maintenancePrice: "$50/mes",
		deliveryTime: "3-4 semanas",
		popular: false,
		features: [
			{ text: "Todo Growth incluido", included: true },
			{ text: "Panel de administración CMS", included: true },
			{ text: "Blog o sección de noticias", included: true },
			{ text: "Integración WhatsApp", included: true },
			{ text: "Optimización de performance", included: true },
			{ text: "2 rondas de revisiones", included: true },
			{ text: "Reporte mensual de tráfico", included: true },
			{ text: "Soporte técnico hasta 2hs/mes", included: true },
		],
		maintenanceCards: [
			{
				icon: "Server",
				title: "Hosting y SSL",
				description: "Sitio en línea con HTTPS activo y dominio configurado",
			},
			{
				icon: "SatelliteDish",
				title: "Monitoreo constante",
				description: "Arreglamos los problemas antes de que el usuario los vea",
			},
			{
				icon: "HardDrive",
				title: "Backups automáticos",
				description: "Intervalo de copias cada 7 días",
			},
			{
				icon: "Pencil",
				title: "Cambios menores",
				description: "Actualizar textos e imágenes sin costo extra",
			},
			{
				icon: "BarChart2",
				title: "Reporte mensual",
				description: "Visitas, métricas y comportamiento de usuarios",
			},
			{
				icon: "Wrench",
				title: "Soporte técnico",
				description: "Canal directo, resolución de problemas hasta 2hs/mes",
			},
		],
	},
	{
		number: "03",
		name: "Business",
		price: "USD 800-1200",
		maintenancePrice: "$70/mes",
		deliveryTime: "4+ semanas",
		popular: false,
		features: [
			{ text: "Todo Pro incluido", included: true },
			{ text: "Páginas ilimitadas", included: true },
			{
				text: "Funcionalidades custom (reservas, cotizador, etc.)",
				included: true,
			},
			{ text: "Animaciones y diseño premium", included: true },
			{ text: "Multi-idioma", included: true },
			{ text: "Integraciones APIs externas", included: true },
			{ text: "Capacitación para usar el CMS", included: true },
			{ text: "Soporte prioritario hasta 4hs/mes", included: true },
			{ text: "3 rondas de revisiones", included: true },
		],
		maintenanceCards: [
			{
				icon: "Server",
				title: "Hosting y SSL",
				description: "Infraestructura de alta disponibilidad con HTTPS activo",
			},
			{
				icon: "SatelliteDish",
				title: "Monitoreo constante",
				description: "Arreglamos los problemas antes de que el usuario los vea",
			},
			{
				icon: "HardDrive",
				title: "Backups automáticos",
				description: "Intervalo de copias cada 7 días",
			},
			{
				icon: "RefreshCw",
				title: "Actualizaciones continuas",
				description: "Mejoras, nuevas secciones y ajustes sin costo extra",
			},
			{
				icon: "BarChart2",
				title: "Reporte mensual detallado",
				description: "Métricas avanzadas, conversiones y comportamiento",
			},
			{
				icon: "HeadphonesIcon",
				title: "Soporte prioritario",
				description: "Respuesta en menos de 24hs, hasta 4hs/mes incluidas",
			},
		],
	},
];
