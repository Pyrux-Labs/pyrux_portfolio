// ═══════════════════════════════════════════════
// Sección Qué Hacemos — servicios de Pyrux
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
	House,
	MessageCircle,
	TreeDeciduous,
	Globe,
	SquareTerminal,
	Puzzle,
} from "lucide-react";
import type { ReactNode } from "react";

interface ServiceItem {
	title: string;
	desc: string;
	icon: ReactNode;
}

const features: ServiceItem[] = [
	{
		title: "Desarrollo Web",
		desc: "Diseñamos y desarrollamos sitios web modernos y responsivos que ayudan a tu negocio a destacarse y atraer nuevos clientes.",
		icon: <House size={28} className="text-coral" />,
	},
	{
		title: "Software a Medida",
		desc: "Creamos sistemas personalizados adaptados a tus procesos para mejorar la organización, la eficiencia y el trabajo diario.",
		icon: <MessageCircle size={28} className="text-coral" />,
	},
	{
		title: "Automatización de Procesos",
		desc: "Automatizamos tareas repetitivas, integraciones y comunicaciones para que tu empresa ahorre tiempo y reduzca trabajo manual.",
		icon: <TreeDeciduous size={28} className="text-coral" />,
	},
	{
		title: "Diseño UI y Experiencia Digital",
		desc: "Interfaces limpias e intuitivas pensadas para mejorar la experiencia de usuario y la percepción profesional de tu marca.",
		icon: <Globe size={28} className="text-coral" />,
	},
	{
		title: "Optimización y Rendimiento",
		desc: "Mejoramos sitios y sistemas existentes para que sean más rápidos, confiables y efectivos para tus objetivos.",
		icon: <SquareTerminal size={28} className="text-coral" />,
	},
	{
		title: "Mantenimiento y Soporte",
		desc: "Actualizaciones, seguridad y soporte técnico continuo para que tus productos digitales funcionen sin problemas.",
		icon: <Puzzle size={28} className="text-coral" />,
	},
];

// Variantes para stagger de cards
const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

export default function OurServices() {
	return (
		<Section title="Qué hacemos">
			<motion.div
				className="grid grid-cols-2 sm:grid-cols-3 gap-4"
				variants={gridVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}>
				{features.map((f) => (
					<motion.div
						key={f.title}
						className="block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ease-in-out cursor-default hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
						variants={cardVariants}
						whileHover={{ y: -6 }}>
						<div className="flex items-center justify-center mb-3">
							{f.icon}
						</div>
						<h3 className="font-display text-base font-semibold text-primary mb-1.5 text-center">
							{f.title}
						</h3>
						<p className="text-[0.85rem] text-muted leading-normal text-center">
							{f.desc}
						</p>
					</motion.div>
				))}
			</motion.div>
		</Section>
	);
}
