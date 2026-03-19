// ═══════════════════════════════════════════════
// Packages data — service packages and pricing
// ═══════════════════════════════════════════════

import type { MaintenanceItem, ServicePackage } from "../types/pricing.types";

// ── Shared maintenance card sets (by tier) ──────
const growthMaintenanceCards: MaintenanceItem[] = [
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
		description: "Intervalo de copias dependiente de tu plan.",
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
];

const proMaintenanceCards: MaintenanceItem[] = [
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
		description: "Intervalo de copias dependiente de tu plan.",
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
];

const businessMaintenanceCards: MaintenanceItem[] = [
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
		description: "Intervalo de copias dependiente de tu plan.",
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
];

// ── Packages ────────────────────────────────────
export const packages: ServicePackage[] = [
	// ── Básico ──────────────────────────────────
	{
		number: "01",
		name: "Growth",
		price: "300 dólares",
		maintenancePrice: "$40/mes",
		deliveryTime: "2 semanas",
		popular: false,
		category: "estandar",
		planColor: "growth",
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
		maintenanceCards: growthMaintenanceCards,
	},
	{
		number: "02",
		name: "Pro",
		price: "500 dólares",
		maintenancePrice: "$50/mes",
		deliveryTime: "3-4 semanas",
		popular: false,
		category: "estandar",
		planColor: "pro",
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
		maintenanceCards: proMaintenanceCards,
	},
	{
		number: "03",
		name: "Business",
		price: "Desde 800 dólares",
		maintenancePrice: "$70/mes",
		deliveryTime: "4+ semanas",
		popular: false,
		category: "estandar",
		planColor: "business",
		features: [
			{ text: "Todo Pro incluido", included: true },
			{ text: "Páginas ilimitadas", included: true },
			{ text: "Funcionalidades custom (reservas, cotizador, etc.)", included: true },
			{ text: "Animaciones y diseño premium", included: true },
			{ text: "Multi-idioma", included: true },
			{ text: "Integraciones APIs externas", included: true },
			{ text: "Capacitación para usar el CMS", included: true },
			{ text: "Soporte prioritario hasta 4hs/mes", included: true },
			{ text: "3 rondas de revisiones", included: true },
		],
		maintenanceCards: businessMaintenanceCards,
	},

	// ── E-Commerce ──────────────────────────────
	{
		number: "01",
		name: "E-Commerce Básico",
		price: "800 dólares",
		maintenancePrice: "$50/mes",
		deliveryTime: "4 semanas",
		popular: false,
		category: "ecommerce",
		planColor: "growth",
		features: [
			{ text: "Todo lo incluido en el plan Pro", included: true },
			{ text: "Catálogo de productos", included: true },
			{ text: "Carrito de compras y checkout", included: true },
			{ text: "Integración con medios de pago", included: true },
			{ text: "Gestión de pedidos", included: true },
			{ text: "Configuración de envíos", included: true },
			{ text: "Integración con Mercado Pago", included: true },
			{ text: "WhatsApp para consultas rápidas", included: true },
		],
		maintenanceCards: proMaintenanceCards,
	},
	{
		number: "02",
		name: "E-Commerce Pro",
		price: "2.000 dólares",
		maintenancePrice: "$200/mes",
		deliveryTime: "6-8 semanas",
		popular: false,
		category: "ecommerce",
		planColor: "pro",
		features: [
			{ text: "Todo el E-Commerce Básico incluido", included: true },
			{ text: "Gestión avanzada de inventario", included: true },
			{ text: "Integración con múltiples medios de pago", included: true },
			{ text: "Gestión de clientes (CRM básico)", included: true },
			{ text: "Escalabilidad profesional", included: true },
			{ text: "Seguimiento de envío (MercadoPago, Correo Arg., Andreani)", included: true },
			{ text: "Infraestructura para +1.500 clientes mensuales", included: true },
			{ text: "Seguridad avanzada", included: true },
		],
		maintenanceCards: businessMaintenanceCards,
	},
	{
		number: "03",
		name: "E-Commerce Enterprise",
		price: "Consultar",
		maintenancePrice: "Consultar",
		deliveryTime: "A convenir",
		popular: false,
		category: "ecommerce",
		planColor: "business",
		features: [
			{ text: "Todo el E-Commerce Pro incluido", included: true },
			{ text: "Multi-tienda o multi-idioma", included: true },
			{ text: "Integración con ERP / sistema de facturación", included: true },
			{ text: "Panel de analytics avanzado con conversiones", included: true },
			{ text: "App mobile (PWA)", included: true },
			{ text: "SLA de soporte garantizado", included: true },
			{ text: "Infraestructura para +10.000 productos", included: true },
			{ text: "Soporte dedicado", included: true },
		],
		maintenanceCards: businessMaintenanceCards,
	},

	// ── Personalizado ────────────────────────────
	{
		number: "01",
		name: "Personalizado",
		price: "Consultar",
		maintenancePrice: "",
		deliveryTime: "A convenir",
		popular: false,
		category: "personalizado",
		planColor: "custom",
		features: [
			{ text: "Sistemas a medida", included: true },
			{ text: "Chatbots e integraciones IA", included: true },
			{ text: "Aplicaciones web complejas", included: true },
			{ text: "Integraciones con plataformas externas", included: true },
			{ text: "Automatizaciones de procesos", included: true },
			{ text: "Arquitectura y consultoría técnica", included: true },
			{ text: "Alcance, precio y tiempo a definir juntos", included: true },
		],
		maintenanceCards: [],
	},
];
