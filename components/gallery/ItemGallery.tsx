"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { projects, getProjectsByCreator } from "@/data/projects";
import { companies } from "@/data/companies";
import ProjectCard from "@/components/common/ProjectCard";
import ProjectModal from "@/components/common/ProjectModal";
import CompanyCard from "@/components/common/CompanyCard";
import CompanyModal from "@/components/common/CompanyModal";
import type { Project, Company } from "@/types";

interface ItemGalleryProps {
	type: "projects" | "clients";
	creatorId?: string;
}

export default function ItemGallery({ type, creatorId }: ItemGalleryProps) {
	const { locale } = useLocale();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

	if (type === "projects") {
		const displayProjects = creatorId ? getProjectsByCreator(creatorId, locale) : projects[locale];
		return (
			<div className="mt-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{displayProjects.map((project) => (
						<ProjectCard key={project.id} project={project} fullWidth onClick={() => setSelectedProject(project)} />
					))}
				</div>
				<ProjectModal project={selectedProject} isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} />
			</div>
		);
	}

	return (
		<div className="mt-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				{companies[locale].map((company) => (
					<CompanyCard key={company.id} company={company} fullWidth onClick={() => setSelectedCompany(company)} />
				))}
			</div>
			<CompanyModal company={selectedCompany} isOpen={selectedCompany !== null} onClose={() => setSelectedCompany(null)} />
		</div>
	);
}
