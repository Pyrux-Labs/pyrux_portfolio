// ═══════════════════════════════════════════════
// Component section — wrapper reutilizable
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

interface HeaderSwipeProps {
	onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
	onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
}

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
	headerSwipeProps?: HeaderSwipeProps;
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
	viewAllLabel,
	children,
	className = "mb-14",
	headerSwipeProps,
}: SectionProps) {
	const t = useTranslations("Section");
	const resolvedViewAllLabel = viewAllLabel ?? t("viewAllLabel");
	const hasTitle = title || titleNode;

	return (
		<motion.section
			id={id}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15 }}
			className={`scroll-mt-[30vh] ${className}`}>
			{hasTitle && (
				<div
					className={`flex items-center mb-5 gap-2.5 ${
						titleRight ? "justify-end" : "justify-between"
					}`}
					{...headerSwipeProps}>
					{!titleRight && (
						<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
							<span className={accentClassName}>⟩</span> {titleNode ?? title}
						</h2>
					)}
					{viewAllHref && !titleRight && (
						<Link
							href={viewAllHref as Parameters<typeof Link>[0]["href"]}
							className="hidden min-[481px]:inline text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
							{resolvedViewAllLabel} <span aria-hidden="true">→</span>
						</Link>
					)}
					{titleRight && viewAllHref && (
						<Link
							href={viewAllHref as Parameters<typeof Link>[0]["href"]}
							className="text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
							{resolvedViewAllLabel} <span aria-hidden="true">→</span>
						</Link>
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
