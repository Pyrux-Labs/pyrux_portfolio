// ═══════════════════════════════════════════════
// Project card — for carousels and grids
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { getTechnologyById } from "@/data/technologies";
import type { Project } from "@/types";

interface ProjectCardProps {
	project: Project;
	onClick?: () => void;
	index?: number;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
	return (
		<motion.div
			className="flex flex-col gap-3 p-4 min-w-72 max-w-80 h-40 overflow-hidden max-[480px]:min-w-64 max-[480px]:max-w-72 max-[480px]:p-3 rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary cursor-pointer transition-[border-color,box-shadow] duration-200 ease-out hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
			onClick={onClick}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover={{ y: -2 }}
			viewport={{ once: true }}
			tabIndex={0}
			role="button"
			aria-label={`Ver detalles de ${project.title}`}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick?.();
				}
			}}>
			{/* Title */}
			<h3 className="font-display text-[1rem] font-semibold text-primary leading-tight">
				{project.title}
			</h3>

			{/* Short description */}
			<p className="text-[0.85rem] text-secondary leading-normal line-clamp-3">
				{project.shortDescription}
			</p>

			{/* Technologies (max 3, single line) */}
			<div className="flex gap-1 mt-auto overflow-hidden">
				{project.technologies.slice(0, 3).map((techId) => {
					const tech = getTechnologyById(techId);
					return (
						<Badge
							key={techId}
							label={tech?.name ?? techId}
							className="text-[0.6rem] px-1.5 py-0.5 opacity-70 shrink-0"
						/>
					);
				})}
				{project.technologies.length > 3 && (
					<Badge
						label={`+${project.technologies.length - 3}`}
						variant="coral"
						className="text-[0.6rem] px-1.5 py-0.5 opacity-70 shrink-0"
					/>
				)}
			</div>
		</motion.div>
	);
}
