// ═══════════════════════════════════════════════
// Projects & Clients - carousels
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
	// Modal states
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

	// Duplicate cards for infinite scroll effect
	// Projects: 4x copies so total width matches companies (12 cards each) → same 110s duration = same speed
	const projectCards = [...projects, ...projects, ...projects, ...projects];
	// 12x copies to maintain carousel density while companies.ts has only real entries
	const companyCards = Array(12)
		.fill(null)
		.flatMap(() => companies);

	return (
		<>
			{/* Projects carousel */}
			<Section
				id="proyectos"
				title="Nuestros proyectos"
				viewAllHref="/projects"
				viewAllLabel="Ver todos">
				<div
					className="flex flex-col gap-2 -mx-6 max-[480px]:-mx-4 overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.7) 16%, black 24%, black 86%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0.3) 96%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.7) 16%, black 24%, black 86%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0.3) 96%, transparent)",
					}}>
					<div
						className="flex gap-4 w-max py-2 animate-scroll-right hover:[animation-play-state:paused]"
						style={{ "--duration": "110s" } as React.CSSProperties}>
						{projectCards.map((project, i) => (
							<ProjectCard
								key={`p-${i}`}
								project={project}
								onClick={() => setSelectedProject(project)}
							/>
						))}
					</div>
				</div>

				{/* Clients carousel */}
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

				<motion.div
					className="flex justify-between items-center mb-5 mt-5 max-[480px]:pl-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<a
						href="/clients"
						className="text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
						Ver todos <span aria-hidden="true">→</span>
					</a>
					<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
						Nuestros clientes <span className="text-coral font-bold">⟨</span>
					</h2>
				</motion.div>
			</Section>

			{/* Modals */}
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
