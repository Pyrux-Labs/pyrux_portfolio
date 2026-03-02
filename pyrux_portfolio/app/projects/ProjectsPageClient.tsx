// ═══════════════════════════════════════════════
// Client component /projects - with filters and modals
// ═══════════════════════════════════════════════

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";
import { getTechnologyById } from "@/data/technologies";
import Badge from "@/components/ui/Badge";
import ProjectModal from "@/components/modals/ProjectModal";
import StarBackground from "@/components/ui/StarBackground";
import type { Project } from "@/types";

// Animation variants
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
	const [search, setSearch] = useState("");
	const [selectedTech, setSelectedTech] = useState<string | null>(null);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	// Technologies used in projects (for filters)
	const usedTechs = useMemo(() => {
		const techIds = new Set(projects.flatMap((p) => p.technologies));
		return technologies.filter((t) => techIds.has(t.id));
	}, []);

	// Filter projects
	const filtered = useMemo(() => {
		return projects.filter((p) => {
			const matchesSearch =
				!search ||
				p.title.toLowerCase().includes(search.toLowerCase()) ||
				p.shortDescription.toLowerCase().includes(search.toLowerCase());
			const matchesTech =
				!selectedTech || p.technologies.includes(selectedTech);
			return matchesSearch && matchesTech;
		});
	}, [search, selectedTech]);

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Page header */}
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
					<h1 className="font-display text-3xl font-bold text-primary mb-2">
						Nuestros Proyectos
					</h1>
					<p className="text-secondary">
						Todos los proyectos desarrollados por Pyrux
					</p>
				</motion.div>

				{/* Search bar */}
				<motion.div
					className="mb-6"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15, duration: 0.4 }}>
					<div className="relative">
						<Search
							size={18}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
						/>
						<input
							type="text"
							placeholder="Buscar proyectos..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-primary text-[0.9rem] placeholder:text-muted outline-none transition-[border-color,box-shadow] duration-200 focus:border-coral focus:shadow-[0_0_0_3px_var(--shadow-coral-soft)]"
						/>
					</div>
				</motion.div>

				{/* Technology filters */}
				<motion.div
					className="flex flex-wrap gap-2 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}>
					<button
						onClick={() => setSelectedTech(null)}
						className={`px-3 py-1.5 rounded-full text-[0.8rem] font-medium border transition-[border-color,box-shadow] duration-200 cursor-pointer ${
							!selectedTech
								? "border-coral bg-coral-soft-bg text-coral"
								: "border-border bg-card text-secondary hover:border-coral"
						}`}>
						Todos
					</button>
					{usedTechs.map((tech) => (
						<button
							key={tech.id}
							onClick={() =>
								setSelectedTech(selectedTech === tech.id ? null : tech.id)
							}
							className={`px-3 py-1.5 rounded-full text-[0.8rem] font-medium border transition-[border-color,box-shadow] duration-200 cursor-pointer ${
								selectedTech === tech.id
									? "border-coral bg-coral-soft-bg text-coral"
									: "border-border bg-card text-secondary hover:border-coral"
							}`}>
							{tech.name}
						</button>
					))}
				</motion.div>

				{/* Project grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
					variants={gridVariants}
					initial="hidden"
					animate="visible">
					<AnimatePresence mode="popLayout">
						{filtered.map((project) => (
							<motion.div
								key={project.id}
								className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card-strong backdrop-blur-sm cursor-pointer transition-all hover:-translate-y-1 duration-200 hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
								variants={cardVariants}
								initial="hidden"
								animate="visible"
								exit={{
									opacity: 0,
									scale: 0.95,
									transition: { duration: 0.2 },
								}}
								layout
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
								<span className="text-[0.75rem] text-muted">
									{new Date(project.date).toLocaleDateString("es-AR", {
										year: "numeric",
										month: "short",
									})}
								</span>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{/* No results */}
				{filtered.length === 0 && (
					<div className="text-center py-16">
						<p className="text-secondary text-lg">
							No se encontraron proyectos
						</p>
						<p className="text-muted text-[0.9rem] mt-2">
							Intentá con otros filtros o términos de búsqueda
						</p>
					</div>
				)}
			</main>

			<ProjectModal
				project={selectedProject}
				isOpen={selectedProject !== null}
				onClose={() => setSelectedProject(null)}
			/>
		</>
	);
}
