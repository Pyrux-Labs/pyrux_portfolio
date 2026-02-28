// ═══════════════════════════════════════════════
// Project Modal - base modal component
// ═══════════════════════════════════════════════

"use client";

import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { getTechnologyById } from "@/data/technologies";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function ProjectModal({
	project,
	isOpen,
	onClose,
}: ProjectModalProps) {
	if (!project) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={project.title}>
			{/* Description */}
			<p className="text-secondary leading-relaxed mb-5">
				{project.description}
			</p>

			{/* Technologies */}
			<div className="flex flex-wrap gap-2 mb-6">
				{project.technologies.map((techId) => {
					const tech = getTechnologyById(techId);
					return (
						<Badge key={techId} label={tech?.name ?? techId} variant="coral" />
					);
				})}
			</div>

			{/* Date */}
			<p className="text-[0.8rem] text-muted mb-6">
				{new Date(project.date).toLocaleDateString("es-AR", {
					year: "numeric",
					month: "long",
				})}
			</p>

			{/* Links */}
			<div className="flex gap-3">
				{project.liveUrl && (
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-coral bg-coral-soft-bg text-coral text-[0.9rem] font-medium no-underline transition-all duration-200 hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] hover:-translate-y-0.5">
						<ExternalLink size={16} />
						Ver en vivo
					</a>
				)}
				{project.githubUrl && (
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card text-primary text-[0.9rem] font-medium no-underline transition-all duration-200 hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] hover:-translate-y-0.5">
						<Github size={16} />
						GitHub
					</a>
				)}
			</div>
		</Modal>
	);
}
