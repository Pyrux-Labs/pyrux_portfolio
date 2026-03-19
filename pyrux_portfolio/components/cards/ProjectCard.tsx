// ═══════════════════════════════════════════════
// Project card — for carousels and grids
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
	project: Project;
	onClick?: () => void;
	index?: number;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
	return (
		<motion.div
			className="flex flex-col min-w-72 max-w-80 max-[480px]:min-w-64 max-[480px]:max-w-72 overflow-hidden rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary cursor-pointer transition-[border-color,box-shadow] duration-200 ease-out hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
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
			{/* Thumbnail */}
			{project.images[0] && (
				<div className="w-full h-36 overflow-hidden shrink-0 border-b border-coral/20">
					<Image
						src={project.images[0]}
						alt={project.title}
						width={320}
						height={144}
						className="w-full h-full object-cover"
						sizes="(max-width: 480px) 256px, 320px"
					/>
				</div>
			)}

			{/* Content */}
			<div className="flex flex-col gap-1.5 px-4 py-3">
				{/* Title */}
				<h3 className="font-display text-[0.95rem] font-semibold text-primary leading-tight">
					{project.title}
				</h3>

				{/* Short description */}
				<p className="text-[0.8rem] text-secondary leading-normal line-clamp-2">
					{project.shortDescription}
				</p>
			</div>
		</motion.div>
	);
}
