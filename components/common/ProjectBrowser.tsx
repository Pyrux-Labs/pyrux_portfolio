"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import ProjectModal from "@/components/common/ProjectModal";
import BrowseGrid from "@/components/common/BrowseGrid";

export default function ProjectBrowser() {
	const t = useTranslations("ProjectsPage");
	const { locale } = useLocale();

	return (
		<BrowseGrid
			items={projects[locale]}
			title={t("title")}
			subtitle={t("subtitle")}
			backLabel={t("backToHome")}
			gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
			stagger={0.06}
			renderCard={(project, onSelect) => (
				<ProjectCard key={project.id} project={project} fullWidth onClick={() => onSelect(project)} />
			)}
			renderModal={(selected, onClose) => (
				<ProjectModal project={selected} isOpen={selected !== null} onClose={onClose} />
			)}
		/>
	);
}
