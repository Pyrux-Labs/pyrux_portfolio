"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowLeft,
	ChevronDown,
	X,
	ChartColumn,
	Wrench,
	Pencil,
	SatelliteDish,
	HardDrive,
	Server,
} from "lucide-react";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";

const headerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

interface PackageFeature {
	text: string;
	included: boolean;
}

interface ServicePackage {
	number: string;
	name: string;
	price: string;
	priceSuffix: string;
	maintenance: string;
	deliveryTime: string;
	popular: boolean;
	features: PackageFeature[];
}

const packages: ServicePackage[] = [
	{
		number: "01",
		name: "Growth",
		price: "USD 300",
		priceSuffix: "único",
		maintenance: "Mant. $40/mes",
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
	},
	{
		number: "02",
		name: "Pro",
		price: "USD 500",
		priceSuffix: "único",
		maintenance: "Mant. $50/mes",
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
	},
	{
		number: "03",
		name: "Business",
		price: "USD 800-1200",
		priceSuffix: "desde",
		maintenance: "Mant. $70/mes",
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
			{ text: "Integraciones MercadoPago y APIs externas", included: true },
			{ text: "Capacitación para usar el CMS", included: true },
			{ text: "Soporte prioritario hasta 4hs/mes", included: true },
			{ text: "3 rondas de revisiones", included: true },
		],
	},
];

interface MaintenanceItem {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const maintenanceItems: MaintenanceItem[] = [
	{
		icon: <Server size={28} className="text-coral" />,
		title: "Hosting y SSL",
		description: "Sitio en línea con HTTPS activo",
	},
	{
		icon: <SatelliteDish size={28} className="text-coral" />,
		title: "Monitoreo 24/7",
		description: "Alertas automáticas si el sitio cae",
	},
	{
		icon: <HardDrive size={28} className="text-coral" />,
		title: "Backups automáticos",
		description: "Copias semanales, contenido siempre a salvo",
	},
	{
		icon: <Pencil size={28} className="text-coral" />,
		title: "Cambios menores",
		description: "Actualizar textos e imágenes sin costo extra",
	},
	{
		icon: <ChartColumn size={28} className="text-coral" />,
		title: "Reporte mensual",
		description: "Visitas, métricas y comportamiento de usuarios (Standard+)",
	},
	{
		icon: <Wrench size={28} className="text-coral" />,
		title: "Soporte técnico",
		description:
			"Canal directo para consultas y resolución de problemas (Standard+)",
	},
];

interface Step {
	number: string;
	title: string;
	description: string;
}

const steps: Step[] = [
	{
		number: "01",
		title: "Consulta inicial gratis",
		description: "Cotización detallada en 72hs",
	},
	{
		number: "02",
		title: "Brief y propuesta de diseño",
		description: "Wireframes antes de escribir código",
	},
	{
		number: "03",
		title: "Desarrollo y revisiones",
		description: "Rondas incluidas, sin cobros sorpresa",
	},
	{
		number: "04",
		title: "Lanzamiento y configuración",
		description: "Dominio, SSL y Analytics listos",
	},
	{
		number: "05",
		title: "Mantenimiento continuo",
		description: "Sitio actualizado, monitoreado y con soporte",
	},
];

interface FAQItem {
	question: string;
	answer: string;
}

const faqItems: FAQItem[] = [
	{
		question: "¿Los precios son en dólares o en pesos?",
		answer:
			"Se cotizan en USD, se pueden pagar en pesos al tipo de cambio del día vía MercadoPago.",
	},
	{
		question: "¿Qué necesito tener listo antes de empezar?",
		answer:
			"Textos, logo e imágenes si tenés. Si no, ayudamos a organizar el contenido.",
	},
	{
		question: "¿Puedo actualizar el contenido yo mismo?",
		answer:
			"Sí, Standard y Business incluyen CMS. En Growth los cambios van por nosotros dentro del mantenimiento.",
	},
	{
		question: "¿Qué pasa si no quiero contratar mantenimiento?",
		answer:
			"Es opcional. Se entrega el repositorio completo. Pero el mantenimiento incluye hosting + SSL + monitoreo que por separado saldría similar o más.",
	},
	{
		question: "¿Cuánto tarda realmente un proyecto?",
		answer:
			"Los tiempos son desde que tenemos todo el contenido. Si hay demoras del cliente, el plazo se extiende. Cronograma acordado desde el inicio.",
	},
	{
		question: "¿Por qué Pyrux y no una agencia?",
		answer:
			"Las agencias cobran USD 800-2000 por proyectos similares y el trabajo lo hace un junior. Con Pyrux trabajás directo con el desarrollador, sin intermediarios.",
	},
];

function FAQAccordion({ item }: { item: FAQItem }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="border border-border rounded-xl overflow-hidden">
			<button
				onClick={() => setOpen(!open)}
				className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left bg-card cursor-pointer hover:bg-interactive-hover"
				aria-expanded={open}>
				<span className="font-display text-[0.95rem] font-semibold text-primary">
					{item.question}
				</span>
				<motion.span
					className="shrink-0 text-coral"
					animate={{ rotate: open ? 180 : 0 }}
					transition={{ duration: 0.3 }}>
					<ChevronDown size={18} />
				</motion.span>
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}>
						<div className="px-5 pb-4 text-[0.9rem] text-secondary leading-relaxed">
							{item.answer}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default function PreciosPageClient() {
	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Header */}
				<motion.div
					className="mb-14"
					variants={headerVariants}
					initial="hidden"
					animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-secondary no-underline mb-6 hover:text-coral">
						<ArrowLeft size={16} />
						Volver al inicio
					</Link>

					<h1 className="font-display text-3xl font-bold text-primary mb-4">
						Tu negocio merece una presencia digital que venda.
					</h1>
					<p className="text-[0.8rem] text-muted font-mono tracking-wider uppercase mb-3">
						Desarrollo Web Profesional — Rosario, Argentina
					</p>
					<p className="text-[1rem] text-secondary max-w-140 leading-relaxed mb-6">
						Diseñamos y desarrollamos sitios web a medida que posicionan tu
						marca, generan confianza y convierten visitantes en clientes.
					</p>
				</motion.div>

				{/* Paquetes */}
				<Section id="paquetes" className="mb-14" title="Nuestros paquetes">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
						variants={gridVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}>
						{packages.map((pkg) => (
							<div
								key={pkg.number}
								className={`relative flex flex-col p-5 rounded-xl border backdrop-blur-sm ${pkg.popular ? "border-coral shadow-[0_0_30px_var(--shadow-coral-soft)]" : "border-border"} bg-card-strong`}>
								<h3 className="font-display text-xl font-bold text-primary mb-2">
									{pkg.name}
								</h3>
								<div className="mb-2">
									<span className="font-display text-2xl font-bold text-coral">
										{pkg.price}
									</span>
									<span className="text-[0.8rem] text-muted ml-2">
										{pkg.priceSuffix}
									</span>
								</div>
								<span className="inline-flex self-start px-2.5 py-1 rounded-full bg-cyan-soft-bg border border-cyan-mid/30 text-cyan text-[0.7rem] font-medium mb-4">
									{pkg.maintenance}
								</span>
								<div className="border-t border-border my-3" />
								<ul className="flex flex-col gap-2 mb-5 flex-1">
									{pkg.features.map((f) => (
										<li
											key={f.text}
											className={`flex items-start gap-2 text-[0.85rem] ${f.included ? "text-secondary" : "text-muted line-through opacity-50"}`}>
											{f.included ? (
												<span className="text-coral mt-0.5 shrink-0">→</span>
											) : (
												<X size={14} className="mt-0.5 shrink-0" />
											)}
											{f.text}
										</li>
									))}
								</ul>
								<div className="pt-3 border-t border-border text-[0.8rem] text-muted">
									Tiempo de entrega:{" "}
									<span className="text-coral font-semibold">
										{pkg.deliveryTime}
									</span>
								</div>
							</div>
						))}
					</motion.div>
				</Section>

				<Section title="Mantenimiento incluido">
					<motion.div
						className="grid grid-cols-1 min-[481px]:grid-cols-2 sm:grid-cols-3 gap-4"
						variants={gridVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}>
						{maintenanceItems.map((item) => (
							<motion.div
								key={item.title}
								className="block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ease-in-out "
								variants={cardVariants}>
								<div className="flex items-center justify-center mb-3">
									{item.icon}
								</div>
								<h3 className="font-display text-base font-semibold text-primary mb-1.5 text-center">
									{item.title}
								</h3>
								<p className="text-[0.85rem] text-muted leading-normal text-center">
									{item.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</Section>

				{/* Proceso */}
				<Section className="mb-14" title="Nuestro proceso">
					<div className="relative pl-8 sm:pl-10">
						<div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-border-accent" />
						<div className="flex flex-col gap-8">
							{steps.map((step, i) => (
								<motion.div
									key={step.number}
									className="relative"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1, duration: 0.4 }}>
									<div className="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-md border border-border-accent bg-card-strong grid place-items-center">
										<span className="text-[0.65rem] sm:text-[0.7rem] text-coral font-bold font-mono">
											{step.number}
										</span>
									</div>
									<h3 className="font-display text-[1rem] font-semibold text-primary mb-1">
										{step.title}
									</h3>
									<p className="text-[0.85rem] text-muted leading-normal">
										{step.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</Section>

				{/* FAQ */}
				<Section className="mb-14" title="Preguntas frecuentes">
					<motion.div
						className="flex flex-col gap-3"
						variants={gridVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}>
						{faqItems.map((item, index) => (
							<motion.div
								key={item.question}
								variants={cardVariants}
								custom={index}>
								<FAQAccordion item={item} />
							</motion.div>
						))}
					</motion.div>
				</Section>

				<Footer />
			</main>
		</>
	);
}
