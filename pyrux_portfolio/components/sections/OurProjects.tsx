// ═══════════════════════════════════════════════
// Sección de Proyectos y Clientes — carousels
// ═══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/cards/ProjectCard";
import CompanyCard from "@/components/cards/CompanyCard";
import ProjectModal from "@/components/modals/ProjectModal";
import CompanyModal from "@/components/modals/CompanyModal";
import { projects } from "@/data/projects";
import { companies } from "@/data/companies";
import type { Project, Company } from "@/types";

export default function OurProjects() {
	// Estado para modales
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

	// Duplicar cards para efecto de scroll infinito
	const projectCards = [...projects, ...projects];
	const companyCards = [...companies, ...companies];

	return (
		<>
			{/* Carousel de proyectos */}
			<Section
				id="proyectos"
				title="Nuestros proyectos"
				viewAllHref="/projects"
				viewAllLabel="View all">
				<div
					className="flex flex-col gap-2 -mx-6 max-[480px]:-mx-4 overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
					}}>
					<div
						className="flex gap-4 w-max py-2 animate-scroll-right hover:[animation-play-state:paused]"
						style={{ "--duration": "100s" } as React.CSSProperties}>
						{projectCards.map((project, i) => (
							<ProjectCard
								key={`p-${i}`}
								project={project}
								onClick={() => setSelectedProject(project)}
							/>
						))}
					</div>
				</div>

				{/* Título de clientes (abajo del carousel de proyectos) */}
				<motion.div
					className="flex justify-between items-center mb-5 mt-5 max-[480px]:pl-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<a
						href="/clients"
						className="text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
						View all <span aria-hidden="true">→</span>
					</a>
					<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
						Nuestros clientes <span className="text-coral font-bold">⟨</span>
					</h2>
				</motion.div>

				{/* Carousel de clientes */}
				<div
					className="flex flex-col gap-2 -mx-6 max-[480px]:-mx-4 overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
					}}>
					<div
						className="flex gap-4 w-max py-2 animate-scroll-left hover:[animation-play-state:paused]"
						style={{ "--duration": "110s" } as React.CSSProperties}>
						{companyCards.map((company, i) => (
							<CompanyCard
								key={`c-${i}`}
								company={company}
								onClick={() => setSelectedCompany(company)}
							/>
						))}
					</div>
				</div>
			</Section>

			{/* Modales */}
			<ProjectModal
				project={selectedProject}
				isOpen={selectedProject !== null}
				onClose={() => setSelectedProject(null)}
			/>
			<CompanyModal
				company={selectedCompany}
				isOpen={selectedCompany !== null}
				onClose={() => setSelectedCompany(null)}
			/>
		</>
	);
}
