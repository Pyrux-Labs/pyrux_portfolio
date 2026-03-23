// ═══════════════════════════════════════════════
// Projects & Clients - carousels
// ═══════════════════════════════════════════════

"use client";

import { useState, useRef, useCallback } from "react";
import { useDraggableMarquee } from "@/hooks/useDraggableMarquee";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/common/ProjectCard";
import CompanyCard from "@/components/common/CompanyCard";
import ProjectModal from "@/components/common/ProjectModal";
import CompanyModal from "@/components/common/CompanyModal";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { getProjectsByCreator } from "@/data/projects";
import { companies } from "@/data/companies";
import type { Project, Company } from "@/types";
import { usePageTransition } from "@/lib/page-transition";
import { useSwipeTrigger } from "@/hooks/useSwipeTrigger";

export default function FeaturedWork() {
	const t = useTranslations("OurProjects");
	const { locale } = useLocale();
	const { trigger } = usePageTransition();

	// Modal states
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

	// Swipe-to-navigate on section titles (mobile only)
	const projectsSwipe = useSwipeTrigger({
		direction: "right",
		onSwipe: useCallback(() => trigger(`/${locale}/projects`, "right"), [trigger, locale]),
	});
	const clientsSwipe = useSwipeTrigger({
		direction: "left",
		onSwipe: useCallback(() => trigger(`/${locale}/clients`, "left"), [trigger, locale]),
	});

	const localeProjects = getProjectsByCreator("pyrux", locale);
	const localeCompanies = companies[locale];

	const projectsRef = useDraggableMarquee({ speed: 60, direction: "left" });
	const companiesRef = useDraggableMarquee({ speed: 60, direction: "right" });
	const clientsHeaderRef = useRef<HTMLDivElement>(null);
	const clientsHeaderInView = useInView(clientsHeaderRef, { once: true, amount: 0 });

	// Duplicate cards for infinite scroll effect
	// Projects: 4x copies so total width matches companies (12 cards each) → same 110s duration = same speed
	const projectCards = [...localeProjects, ...localeProjects, ...localeProjects, ...localeProjects];
	// 12x copies to maintain carousel density while companies.ts has only real entries
	const companyCards = Array(12)
		.fill(null)
		.flatMap(() => localeCompanies);

	return (
		<>
			{/* Projects carousel */}
			<Section
				id="proyectos"
				title={t("sectionTitle")}
				viewAllHref="/projects"
				viewAllLabel={t("viewAll")}
				headerSwipeProps={projectsSwipe}>
				<div
					className="flex flex-col gap-2 -mx-6 max-[480px]:-mx-4 overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.7) 16%, black 24%, black 86%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0.3) 96%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.7) 16%, black 24%, black 86%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0.3) 96%, transparent)",
					}}>
					<div
						ref={projectsRef}
						className="flex gap-4 w-max py-2 cursor-grab select-none [touch-action:pan-y] [&_img]:pointer-events-none [&_img]:select-none">
						{projectCards.map((project, i) => (
							<ProjectCard
								key={`p-${i}`}
								project={project}
								onClick={() => setSelectedProject(project)}
								priority={i === 0}
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
						ref={companiesRef}
						className="flex gap-4 w-max py-2 cursor-grab select-none [touch-action:pan-y] [&_img]:pointer-events-none [&_img]:select-none">
						{companyCards.map((company, i) => (
							<CompanyCard
								key={`c-${i}`}
								company={company}
								onClick={() => setSelectedCompany(company)}
								priority={i === 0}
							/>
						))}
					</div>
				</div>

				<motion.div
					ref={clientsHeaderRef}
					className="flex justify-end items-center mb-5 mt-5 max-[480px]:pl-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: clientsHeaderInView ? 1 : 0 }}
					transition={{ duration: 0.5 }}
					{...clientsSwipe}>
					<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
						{t("clientsTitle")} <span className="text-coral font-bold">⟨</span>
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
