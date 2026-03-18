// ═══════════════════════════════════════════════
// Component section — wrapper reutilizable
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
	id?: string;
	title?: string;
	titleNode?: ReactNode;
	accentClassName?: string;
	titleRight?: boolean;
	viewAllHref?: string;
	viewAllLabel?: string;
	children: ReactNode;
	className?: string;
}

// Animation variants for the section
const sectionVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

export default function Section({
	id,
	title,
	titleNode,
	accentClassName = "text-coral font-bold",
	titleRight,
	viewAllHref,
	viewAllLabel = "Ver todos",
	children,
	className = "",
}: SectionProps) {
	const hasTitle = title || titleNode;

	return (
		<motion.section
			id={id}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15 }}
			className={`mb-14 scroll-mt-[30vh] ${className}`}>
			{hasTitle && (
				<div
					className={`flex items-center mb-5 gap-2.5 ${
						titleRight ? "justify-end" : "justify-between"
					}`}>
					{!titleRight && (
						<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
							<span className={accentClassName}>⟩</span> {titleNode ?? title}
						</h2>
					)}
					{viewAllHref && !titleRight && (
						<a
							href={viewAllHref}
							className="text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
							{viewAllLabel} <span aria-hidden="true">→</span>
						</a>
					)}
					{titleRight && viewAllHref && (
						<a
							href={viewAllHref}
							className="text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
							{viewAllLabel} <span aria-hidden="true">→</span>
						</a>
					)}
					{titleRight && (
						<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
							{titleNode ?? title} <span className={accentClassName}>⟨</span>
						</h2>
					)}
				</div>
			)}
			{children}
		</motion.section>
	);
}
