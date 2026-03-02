// ═══════════════════════════════════════════════
// Cliente de /creator/[id] — proyectos del creador
// ═══════════════════════════════════════════════

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import { getCreatorById } from "@/data/creators";
import { getProjectsByCreator } from "@/data/projects";
import { getTechnologyById } from "@/data/technologies";
import Badge from "@/components/ui/Badge";
import ProjectModal from "@/components/modals/ProjectModal";
import StarBackground from "@/components/ui/StarBackground";
import type { Project } from "@/types";

interface CreatorPageClientProps {
	creatorId: string;
}

// Variantes de animación
const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

export default function CreatorPageClient({
	creatorId,
}: CreatorPageClientProps) {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const creator = getCreatorById(creatorId);
	const creatorProjects = useMemo(
		() => getProjectsByCreator(creatorId),
		[creatorId],
	);

	if (!creator) {
		return (
			<>
				<StarBackground />
				<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col items-center justify-center px-4">
					<h1 className="font-display text-2xl font-bold text-primary mb-4">
						Creador no encontrado
					</h1>
					<a
						href="/"
						className="text-coral no-underline hover:text-cyan transition-colors">
						← Volver al inicio
					</a>
				</main>
			</>
		);
	}

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Header */}
				<motion.div
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<a
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-secondary no-underline mb-4 transition-colors duration-200 hover:text-coral">
						<ArrowLeft size={16} />
						Volver al inicio
					</a>

					{/* Info del creador */}
					<div className="flex items-start gap-5 mb-6">
						<div>
							<h1 className="font-display text-3xl font-bold text-primary mb-1">
								{creator.name}
							</h1>
							<p className="text-coral text-[0.95rem] font-medium mb-3">
								{creator.role}
							</p>
							<p className="text-secondary leading-relaxed max-w-xl">
								{creator.bio}
							</p>

							{/* Links sociales */}
							<div className="flex gap-3 mt-4">
								{creator.socialLinks.github && (
									<a
										href={creator.socialLinks.github}
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary no-underline transition-all duration-200 hover:border-coral hover:text-coral"
										aria-label="GitHub">
										<Github size={16} />
									</a>
								)}
								{creator.socialLinks.linkedin && (
									<a
										href={creator.socialLinks.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary no-underline transition-all duration-200 hover:border-coral hover:text-coral"
										aria-label="LinkedIn">
										<Linkedin size={16} />
									</a>
								)}
								{creator.socialLinks.email && (
									<a
										href={`mailto:${creator.socialLinks.email}`}
										className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary no-underline transition-all duration-200 hover:border-coral hover:text-coral"
										aria-label="Email">
										<Mail size={16} />
									</a>
								)}
							</div>
						</div>
					</div>

					<h2 className="font-display text-xl font-semibold text-primary">
						Proyectos ({creatorProjects.length})
					</h2>
				</motion.div>

				{/* Grid de proyectos */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
					variants={gridVariants}
					initial="hidden"
					animate="visible">
					{creatorProjects.map((project) => (
						<motion.div
							key={project.id}
							className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card-strong backdrop-blur-sm cursor-pointer transition-all duration-250 hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
							variants={cardVariants}
							whileHover={{ y: -4 }}
							onClick={() => setSelectedProject(project)}
							role="button"
							tabIndex={0}
							aria-label={`Ver detalles de ${project.title}`}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									setSelectedProject(project);
								}
							}}>
							<h3 className="font-display text-[1.05rem] font-semibold text-primary">
								{project.title}
							</h3>
							<p className="text-[0.85rem] text-secondary leading-normal line-clamp-2">
								{project.shortDescription}
							</p>
							<div className="flex flex-wrap gap-1.5 mt-auto pt-2">
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
							</div>
							<div className="flex items-center justify-between">
								<span className="text-[0.75rem] text-muted">
									{new Date(project.date).toLocaleDateString("es-AR", {
										year: "numeric",
										month: "short",
									})}
								</span>
								{project.featured && (
									<Badge
										label="Destacado"
										variant="coral"
										className="text-[0.65rem]"
									/>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</main>

			<ProjectModal
				project={selectedProject}
				isOpen={selectedProject !== null}
				onClose={() => setSelectedProject(null)}
			/>
		</>
	);
}
