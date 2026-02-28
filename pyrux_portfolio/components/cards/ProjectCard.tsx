// ═══════════════════════════════════════════════
// Card de Proyecto — para carousels y grids
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

export default function ProjectCard({
	project,
	onClick,
	index = 0,
}: ProjectCardProps) {
	return (
		<motion.div
			className="flex flex-col gap-3 p-4 min-w-72 max-w-80 max-[480px]:min-w-64 max-[480px]:max-w-72 max-[480px]:p-3 rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary transition-all duration-250 ease-in-out shrink-0 cursor-pointer hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
			onClick={onClick}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.05, duration: 0.4 }}
			whileHover={{ y: -4 }}
			tabIndex={0}
			role="button"
			aria-label={`Ver detalles de ${project.title}`}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick?.();
				}
			}}>
			{/* Título */}
			<h3 className="font-display text-[1rem] font-semibold text-primary leading-tight">
				{project.title}
			</h3>

			{/* Descripción corta */}
			<p className="text-[0.85rem] text-secondary leading-normal line-clamp-2">
				{project.shortDescription}
			</p>

			{/* Tecnologías (máximo 4) */}
			<div className="flex flex-wrap gap-1.5 mt-auto">
				{project.technologies.slice(0, 4).map((techId) => {
					const tech = getTechnologyById(techId);
					return (
						<Badge
							key={techId}
							label={tech?.name ?? techId}
							className="text-[0.7rem] px-2 py-0.5"
						/>
					);
				})}
				{project.technologies.length > 4 && (
					<Badge
						label={`+${project.technologies.length - 4}`}
						variant="coral"
						className="text-[0.7rem] px-2 py-0.5"
					/>
				)}
			</div>
		</motion.div>
	);
}
