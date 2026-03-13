"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowLeft,
	ChevronDown,
	X,
	Wrench,
	Pencil,
	SatelliteDish,
	HardDrive,
	Server,
	Shield,
	Clock,
	RefreshCw,
	HeadphonesIcon,
	BarChart2,
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

interface MaintenanceCard {
	icon: React.ReactNode;
	title: string;
	description: string;
}

interface ServicePackage {
	number: string;
	name: string;
	price: string;
	maintenancePrice: string;
	deliveryTime: string;
	popular: boolean;
	features: PackageFeature[];
	maintenanceCards: MaintenanceCard[];
}

const packages: ServicePackage[] = [
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
				icon: <Server size={28} className="text-coral" />,
				title: "Hosting y SSL",
				description: "Sitio en línea con HTTPS activo y dominio configurado",
			},
			{
				icon: <SatelliteDish size={28} className="text-coral" />,
				title: "Monitoreo constante",
				description: "Arreglamos los problemas antes de que el usuario los vea",
			},
			{
				icon: <HardDrive size={28} className="text-coral" />,
				title: "Backups automáticos",
				description: "Intervalo de copias cada 14 días",
			},
			{
				icon: <Pencil size={28} className="text-coral" />,
				title: "Cambios menores",
				description: "Actualizar textos e imágenes sin costo extra",
			},
			{
				icon: <Shield size={28} className="text-coral" />,
				title: "Actualizaciones de seguridad",
				description: "Parches y dependencias al día",
			},
			{
				icon: <Clock size={28} className="text-coral" />,
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
				icon: <Server size={28} className="text-coral" />,
				title: "Hosting y SSL",
				description: "Sitio en línea con HTTPS activo y dominio configurado",
			},
			{
				icon: <SatelliteDish size={28} className="text-coral" />,
				title: "Monitoreo constante",
				description: "Arreglamos los problemas antes de que el usuario los vea",
			},
			{
				icon: <HardDrive size={28} className="text-coral" />,
				title: "Backups automáticos",
				description: "Intervalo de copias cada 7 días",
			},
			{
				icon: <Pencil size={28} className="text-coral" />,
				title: "Cambios menores",
				description: "Actualizar textos e imágenes sin costo extra",
			},
			{
				icon: <BarChart2 size={28} className="text-coral" />,
				title: "Reporte mensual",
				description: "Visitas, métricas y comportamiento de usuarios",
			},
			{
				icon: <Wrench size={28} className="text-coral" />,
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
				icon: <Server size={28} className="text-coral" />,
				title: "Hosting y SSL",
				description: "Infraestructura de alta disponibilidad con HTTPS activo",
			},
			{
				icon: <SatelliteDish size={28} className="text-coral" />,
				title: "Monitoreo constante",
				description: "Arreglamos los problemas antes de que el usuario los vea",
			},
			{
				icon: <HardDrive size={28} className="text-coral" />,
				title: "Backups automáticos",
				description: "Intervalo de copias cada 2 días",
			},
			{
				icon: <RefreshCw size={28} className="text-coral" />,
				title: "Actualizaciones continuas",
				description: "Mejoras, nuevas secciones y ajustes sin costo extra",
			},
			{
				icon: <BarChart2 size={28} className="text-coral" />,
				title: "Reporte mensual detallado",
				description: "Métricas avanzadas, conversiones y comportamiento",
			},
			{
				icon: <HeadphonesIcon size={28} className="text-coral" />,
				title: "Soporte prioritario",
				description: "Respuesta en menos de 24hs, hasta 4hs/mes incluidas",
			},
		],
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
			"Se cotizan en USD, se pueden pagar en pesos al tipo de cambio del día.",
	},
	{
		question: "¿Qué necesito tener listo antes de empezar?",
		answer:
			"Manual de marca hecho por un profesional sería ideal, pero no es obligatorio. Con textos, logo e imágenes básicas es suficiente para arrancar.",
	},
	{
		question: "¿Puedo actualizar el contenido yo mismo?",
		answer:
			"El plan Pro en adelante incluye una aplicación web para que puedas cambiar el contenido por vos mismo; mientras que en el plan Growth va por el mantenimiento mensual.",
	},
	{
		question: "¿Qué pasa si no quiero contratar mantenimiento?",
		answer:
			"Te entregamos la aplicación lista para que los realices por tu cuenta.",
	},
	{
		question: "¿Cuánto tarda realmente un proyecto?",
		answer:
			"Los tiempos son desde que tenemos todo el contenido. Si hay demoras del cliente, el plazo se extiende. Cronograma acordado desde el inicio.",
	},
	{
		question: "¿Por qué Pyrux y no una agencia?",
		answer:
			"Las agencias cobran un 200% más que nuestros precios, y tercerizan tu proyecto a un programador inexperto. En Pyrux, asegurás que hablás directamente con los profesionales que realizarán tu proyecto, manteniendo una calidad y personalización que no vas a tener en ninguna otra empresa.",
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
	const [selectedPkg, setSelectedPkg] = useState<number>(0);

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
						Tu negocio merece una <br />
						<span className="text-coral">presencia digital que venda.</span>
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
				<Section id="paquetes" className="mb-6" title="Nuestros paquetes">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
						variants={gridVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}>
						{packages.map((pkg, idx) => (
							<motion.div
								key={pkg.number}
								variants={cardVariants}
								onClick={() => setSelectedPkg(idx)}
								className={`relative flex flex-col p-5 rounded-xl border backdrop-blur-sm cursor-pointer transition-[border-color,box-shadow] duration-200
									${
										selectedPkg === idx
											? "border-coral shadow-[0_0_30px_var(--shadow-coral-soft)]"
											: "border-border hover:border-coral/40"
									} bg-card-strong`}>
								{/* Selected indicator */}
								{selectedPkg === idx && (
									<span className="absolute top-3 right-3 text-[0.65rem] font-mono text-coral border border-coral/30 rounded-full px-2 py-0.5 bg-coral/5">
										seleccionado
									</span>
								)}

								<h3 className="font-display text-xl font-bold text-primary mb-2">
									{pkg.name}
								</h3>

								<div className="mb-2">
									<span className="font-display text-2xl font-bold text-coral">
										{pkg.price}
									</span>
								</div>

								{/* Delivery time */}
								<div className="text-[0.8rem] text-muted mb-2">
									Entrega:{" "}
									<span className="text-coral font-semibold">
										{pkg.deliveryTime}
									</span>
								</div>

								{/* Maintenance badge */}
								<span className="inline-flex self-start px-2.5 py-1 rounded-full bg-cyan-soft-bg border border-cyan-mid/30 text-cyan text-[0.7rem] font-medium mb-4">
									Mant. {pkg.maintenancePrice}
								</span>

								<div className="border-t border-border my-3" />

								<ul className="flex flex-col gap-2 flex-1">
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
							</motion.div>
						))}
					</motion.div>
				</Section>

				{/* Mantenimiento — cards del plan seleccionado */}
				<Section
					className="mb-14"
					title={`Mantenimiento incluido — ${packages[selectedPkg].name}`}>
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedPkg}
							className="grid grid-cols-1 min-[481px]:grid-cols-2 sm:grid-cols-3 gap-4"
							initial="hidden"
							animate="visible"
							exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
							variants={{
								hidden: { opacity: 0, y: 10 },
								visible: {
									opacity: 1,
									y: 0,
									transition: { duration: 0.3, staggerChildren: 0.06 },
								},
							}}>
							{packages[selectedPkg].maintenanceCards.map((item) => (
								<motion.div
									key={item.title}
									className="block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-200 ease-in-out hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_12px_40px_var(--shadow-coral-soft)] cursor-default group"
									variants={{
										hidden: { opacity: 0, y: 16 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.35, ease: "easeOut" },
										},
									}}>
									<div className="flex items-center justify-center mb-3 transition-transform duration-200 ease-in-out group-hover:scale-110">
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
					</AnimatePresence>
				</Section>

				{/* Proceso */}
				<Section className="mb-14" title="Nuestro proceso">
					<div className="flex flex-col sm:flex-row gap-0 sm:gap-0 overflow-hidden">
						{steps.map((step, i) => (
							<motion.div
								key={step.number}
								className="relative flex-1 flex flex-col"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.4 }}>
								{/* Connector line — de borde a borde, sin cruzar los círculos */}
								{i < steps.length - 1 && (
									<div
										className="hidden sm:block absolute top-4 h-px bg-border-accent z-0"
										style={{
											left: "calc(50% + 16px)",
											right: "calc(-50% + 16px)",
										}}
									/>
								)}

								<div className="relative z-10 flex flex-col items-center text-center px-3">
									{/* Step number circle */}
									<div className="w-8 h-8 rounded-full border border-coral bg-card-strong grid place-items-center mb-3 shrink-0">
										<span className="text-[0.65rem] text-coral font-bold font-mono">
											{step.number}
										</span>
									</div>
									<h3 className="font-display text-[0.9rem] font-semibold text-primary mb-1 leading-snug">
										{step.title}
									</h3>
									<p className="text-[0.8rem] text-muted leading-normal">
										{step.description}
									</p>
								</div>

								{/* Mobile: vertical connector */}
								{i < steps.length - 1 && (
									<div className="sm:hidden w-px h-6 bg-border-accent mx-auto my-2" />
								)}
							</motion.div>
						))}
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
