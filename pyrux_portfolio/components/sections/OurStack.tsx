// ═══════════════════════════════════════════════
// OurStack component — expandible con featured/all
// ═══════════════════════════════════════════════

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import Section from "@/components/ui/Section";
import TechIcon from "@/components/ui/TechIcon";
import { technologies } from "@/data/technologies";

const itemVariants = {
	hidden: { opacity: 0, scale: 0.88, y: 10 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.3, ease: [0.35, 0.46, 0.45, 0.94] as const },
	},
	exit: {
		opacity: 0,
		scale: 0.88,
		y: 10,
		transition: { duration: 0.3, ease: [0.35, 0.46, 0.45, 0.94] as const },
	},
};

export default function OurStack() {
	const t = useTranslations("OurStack");
	const [isExpanded, setIsExpanded] = useState(false);

	const displayedTechs = useMemo(
		() => (isExpanded ? technologies : technologies.filter((t) => t.featured)),
		[isExpanded]
	);

	const totalCount = technologies.length;
	const featuredCount = useMemo(() => technologies.filter((t) => t.featured).length, []);

	return (
		<Section title={t("sectionTitle")}>
			{/* Technologies grid */}
			<div className="flex flex-wrap gap-2.5 justify-center">
				<AnimatePresence mode="popLayout">
					{displayedTechs.map((tech) => (
						<motion.span
							key={tech.id}
							className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[20px] border border-border bg-card backdrop-blur-sm text-[0.85rem] text-secondary cursor-default [@media(hover:hover)]:hover:border-coral [@media(hover:hover)]:hover:text-coral [@media(hover:hover)]:hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							exit="exit">
							<TechIcon iconName={tech.icon} size={16} />
							<span>{tech.name}</span>
						</motion.span>
					))}
				</AnimatePresence>

				{displayedTechs.length === 0 && (
					<motion.p
						className="text-[0.85rem] text-muted py-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}>
						{t("emptyExpand")}
					</motion.p>
				)}
			</div>

			{/* Botón Ver más / Ver menos */}
			<div className="flex justify-center mt-6">
				<motion.button
					onClick={() => setIsExpanded(!isExpanded)}
					className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-secondary text-[0.9rem] font-medium hover:border-coral hover:text-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] cursor-pointer"
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}>
					{isExpanded
						? t("viewLess")
						: t("viewMore", { count: totalCount - featuredCount })}
					<motion.span
						className="inline-flex"
						animate={{ rotate: isExpanded ? 180 : 0 }}
						transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
						<ChevronDown size={16} />
					</motion.span>
				</motion.button>
			</div>
		</Section>
	);
}
