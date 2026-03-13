// ═══════════════════════════════════════════════
// creator/[id] —  creator page client
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
import Footer from "@/components/layout/Footer";
import type { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface CreatorPageClientProps {
	creatorId: string;
}

const headerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

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
					<Link
						href="/"
						className="text-coral no-underline hover:text-cyan transition-colors">
						← Volver al inicio
					</Link>
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
					variants={headerVariants}
					initial="hidden"
					animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-secondary no-underline mb-4 hover:text-coral">
						<ArrowLeft size={16} />
						Volver al inicio
					</Link>

					{/* Creator info */}
					<div className="flex items-start gap-5 mb-6">
						<Image
							src={creator.image}
							alt={creator.name}
							width={80}
							height={80}
							className="w-20 h-20 rounded-full object-cover shrink-0"
						/>
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

							{/* Social links */}
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
				</motion.div>

				{/* Projects grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
					variants={gridVariants}
					initial="hidden"
					animate="visible">
					{creatorProjects.map((project) => (
						<motion.div
							key={project.id}
							className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card-strong backdrop-blur-sm cursor-pointer hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
							variants={cardVariants}
							whileHover={{ y: -4 }}
							whileTap={{ scale: 0.98 }}
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
				<Footer />
			</main>

			<ProjectModal
				project={selectedProject}
				isOpen={selectedProject !== null}
				onClose={() => setSelectedProject(null)}
			/>
		</>
	);
}
