"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { getTechnologyById } from "@/data/technologies";
import Badge from "@/components/ui/Badge";
import ProjectModal from "@/components/modals/ProjectModal";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import type { Project } from "@/types";
import Link from "next/link";

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

export default function ProjectsPageClient() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Page header */}
				<motion.div
					className="mb-8"
					variants={headerVariants}
					initial="hidden"
					animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-secondary no-underline mb-4 hover:text-coral" // ← sin transition-* aquí
					>
						<ArrowLeft size={16} />
						Volver al inicio
					</Link>
					<h1 className="font-display text-3xl font-bold text-primary mb-2">
						Nuestros Proyectos
					</h1>
					<p className="text-secondary">
						Todos los proyectos desarrollados por Pyrux
					</p>
				</motion.div>

				{/* Project grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
					variants={gridVariants}
					initial="hidden"
					animate="visible">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card-strong backdrop-blur-sm cursor-pointer hover:-translate-y-1 hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]" // ← sin transition-* ni duration-*
							variants={cardVariants}
							whileHover={{ y: -4 }} // ← el hover lo maneja Framer, no Tailwind
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
							<p className="text-[0.85rem] text-secondary leading-normal line-clamp-3">
								{project.shortDescription}
							</p>
							<div
								className="flex gap-1.5 mt-auto pt-2 overflow-x-auto"
								style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
								{project.technologies.map((techId) => {
									const tech = getTechnologyById(techId);
									return (
										<Badge
											key={techId}
											label={tech?.name ?? techId}
											className="text-[0.7rem] px-2 py-0.5 shrink-0"
										/>
									);
								})}
							</div>
							<span className="text-[0.75rem] text-muted">
								{new Date(project.date).toLocaleDateString("es-AR", {
									year: "numeric",
									month: "short",
								})}
							</span>
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
