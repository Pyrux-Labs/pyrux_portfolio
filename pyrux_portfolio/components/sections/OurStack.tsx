// ═══════════════════════════════════════════════
// OurStack component — expandible con featured/all
// ═══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "@/components/ui/Section";
import TechIcon from "@/components/ui/TechIcon";
import { technologies, technologyCategories } from "@/data/technologies";
import type { TechnologyCategory } from "@/types";

// Animation variants
const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3, ease: "easeOut" as const },
	},
	exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
};

export default function OurStack() {
	const [activeTab, setActiveTab] = useState<TechnologyCategory | "all">("all");
	const [isExpanded, setIsExpanded] = useState(false);

	// Base: solo featured o todas según el estado expandido
	const baseTechs = isExpanded
		? technologies
		: technologies.filter((t) => t.featured);

	// Aplicar filtro de categoría sobre la base
	const displayedTechs =
		activeTab === "all"
			? baseTechs
			: baseTechs.filter((t) => t.category === activeTab);

	// Cantidad total vs featured para mostrar en el botón
	const totalCount = technologies.length;
	const featuredCount = technologies.filter((t) => t.featured).length;

	return (
		<Section title="Nuestro Stack">
			{/* Tabs */}
			<div className="flex flex-wrap gap-2 mb-6 justify-center">
				<button
					onClick={() => setActiveTab("all")}
					className={`px-3.5 py-1.5 rounded-full text-[0.85rem] font-medium border transition-[border-color,box-shadow] duration-200 cursor-pointer ${
						activeTab === "all"
							? "border-coral bg-coral-soft-bg text-coral"
							: "border-border bg-card text-secondary hover:border-coral hover:text-coral"
					}`}>
					Todas
				</button>
				{technologyCategories.map((cat) => (
					<button
						key={cat.id}
						onClick={() => setActiveTab(cat.id)}
						className={`px-3.5 py-1.5 rounded-full text-[0.85rem] font-medium border transition-[border-color,box-shadow] duration-200 cursor-pointer ${
							activeTab === cat.id
								? "border-coral bg-coral-soft-bg text-coral"
								: "border-border bg-card text-secondary hover:border-coral hover:text-coral"
						}`}>
						{cat.label}
					</button>
				))}
			</div>

			{/* Technologies grid */}
			<AnimatePresence mode="wait">
				<motion.div
					key={`${activeTab}-${isExpanded}`}
					className="flex flex-wrap gap-2.5 justify-center"
					variants={gridVariants}
					initial="hidden"
					animate="visible"
					exit="hidden">
					{displayedTechs.map((tech) => (
						<motion.span
							key={tech.id}
							className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[20px] border border-border bg-card backdrop-blur-sm text-[0.85rem] text-secondary transition-[border-color,box-shadow] duration-250 ease-in-out cursor-default hover:border-coral hover:text-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
							variants={itemVariants}
							whileHover={{ y: -3, scale: 1.03 }}>
							<TechIcon iconName={tech.icon} size={16} />
							<span>{tech.name}</span>
						</motion.span>
					))}

					{/* Mensaje si no hay para la categoría seleccionada */}
					{displayedTechs.length === 0 && (
						<motion.p
							className="text-[0.85rem] text-muted py-4"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}>
							Expandí para ver más tecnologías en esta categoría.
						</motion.p>
					)}
				</motion.div>
			</AnimatePresence>

			{/* Botón View More / View Less */}
			<div className="flex justify-center mt-6">
				<motion.button
					onClick={() => setIsExpanded(!isExpanded)}
					className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-secondary text-[0.9rem] font-medium transition-all duration-200 hover:border-coral hover:text-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] cursor-pointer"
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}>
					{isExpanded
						? "View Less"
						: `View More (${totalCount - featuredCount}+)`}
					<motion.span
						className="inline-flex"
						animate={{ rotate: isExpanded ? 180 : 0 }}
						transition={{ duration: 0.3 }}>
						<ChevronDown size={16} />
					</motion.span>
				</motion.button>
			</div>
		</Section>
	);
}
