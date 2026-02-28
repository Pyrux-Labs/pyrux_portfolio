// ═══════════════════════════════════════════════
// OurStack component
// ═══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import TechIcon from "@/components/ui/TechIcon";
import {
	technologies,
	technologyCategories,
	getTechnologiesByCategory,
} from "@/data/technologies";
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

	const displayedTechs =
		activeTab === "all" ? technologies : getTechnologiesByCategory(activeTab);

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
					key={activeTab}
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
				</motion.div>
			</AnimatePresence>
		</Section>
	);
}
