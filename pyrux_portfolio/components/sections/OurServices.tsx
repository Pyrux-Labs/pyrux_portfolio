// ═══════════════════════════════════════════════
// Sección Qué Hacemos — servicios de Pyrux
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { services } from "@/data/services";
import ServiceIcon from "@/components/ui/ServiceIcon";

// Variantes para stagger de cards
const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: "easeOut" as const },
	},
};

export default function OurServices() {
	return (
		<Section
			title="Qué hacemos"
			viewAllHref="/pricing"
			viewAllLabel="Ver paquetes y precios">
			<motion.div
				className="grid grid-cols-1 min-[481px]:grid-cols-2 sm:grid-cols-3 gap-4"
				variants={gridVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}>
				{services.map((f) => (
					<motion.div
						key={f.title}
						className="block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)] cursor-default group"
						variants={cardVariants}
						whileHover={{ y: -6 }}>
						<div className="flex items-center justify-center mb-3 transition-transform duration-200 ease-in-out group-hover:scale-110">
							<ServiceIcon iconName={f.icon} className="text-coral" />
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
