// ═══════════════════════════════════════════════
// Creator modal — full profile
// ═══════════════════════════════════════════════

"use client";

import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { getProjectById } from "@/data/projects";
import { getTechnologyById } from "@/data/technologies";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import type { Creator } from "@/types";

interface CreatorModalProps {
	creator: Creator | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function CreatorModal({
	creator,
	isOpen,
	onClose,
}: CreatorModalProps) {
	if (!creator) return null;

	// Get featured projects for the creator
	const featuredProjects = creator.featuredProjects
		.map((id) => getProjectById(id))
		.filter(Boolean);

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={creator.name}>
			{/* Role */}
			<p className="text-coral text-[0.9rem] font-medium -mt-2 mb-4">
				{creator.role}
			</p>

			{/* Bio */}
			<p className="text-secondary leading-relaxed mb-6">{creator.bio}</p>

			{/* Links */}
			<div className="flex gap-3 mb-6">
				{creator.socialLinks.github && (
					<a
						href={creator.socialLinks.github}
						target="_blank"
						rel="noopener noreferrer"
						className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral"
						aria-label="GitHub">
						<Github size={16} />
					</a>
				)}
				{creator.socialLinks.linkedin && (
					<a
						href={creator.socialLinks.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral"
						aria-label="LinkedIn">
						<Linkedin size={16} />
					</a>
				)}
				{creator.socialLinks.email && (
					<a
						href={`mailto:${creator.socialLinks.email}`}
						className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral"
						aria-label="Email">
						<Mail size={16} />
					</a>
				)}
			</div>

			{/* Featured projects */}
			{featuredProjects.length > 0 && (
				<div>
					<h4 className="font-display text-[0.95rem] font-semibold text-primary mb-3">
						Featured projects
					</h4>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{featuredProjects.map((project) => {
							if (!project) return null;
							return (
								<div
									key={project.id}
									className="p-3 rounded-xl border border-border bg-card transition-all duration-200 hover:border-coral">
									<h5 className="font-display text-[0.85rem] font-semibold text-primary mb-1">
										{project.title}
									</h5>
									<p className="text-[0.8rem] text-muted line-clamp-2 mb-2">
										{project.shortDescription}
									</p>
									<div className="flex flex-wrap gap-1">
										{project.technologies.slice(0, 3).map((techId) => {
											const tech = getTechnologyById(techId);
											return (
												<Badge
													key={techId}
													label={tech?.name ?? techId}
													className="text-[0.65rem] px-1.5 py-0.5"
												/>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>

					{/* View all button */}
					<a
						href={`/creator/${creator.id}`}
						className="inline-flex items-center gap-2 mt-4 text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 hover:text-cyan">
						<ExternalLink size={14} />
						View all projects
					</a>
				</div>
			)}
		</Modal>
	);
}
