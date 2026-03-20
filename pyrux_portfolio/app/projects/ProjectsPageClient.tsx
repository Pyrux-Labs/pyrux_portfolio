"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectModal from "@/components/modals/ProjectModal";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import type { Project } from "@/types";
import { Link } from "@/i18n/navigation";

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
	const t = useTranslations("ProjectsPage");
	const { locale } = useLocale();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const localeProjects = projects[locale];

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-content mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
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
						{t("backToHome")}
					</Link>
					<h1 className="font-display text-3xl font-bold text-primary mb-2">
						{t("title")}
					</h1>
					<p className="text-secondary">
						{t("subtitle")}
					</p>
				</motion.div>

				{/* Project grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
					variants={gridVariants}
					initial="hidden"
					animate="visible">
					{localeProjects.map((project) => (
						<motion.div
							key={project.id}
							className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card-strong backdrop-blur-sm cursor-pointer hover:-translate-y-1 hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]" // ← sin transition-* ni duration-*
							variants={cardVariants}
							whileHover={{ y: -4 }} // ← el hover lo maneja Framer, no Tailwind
							whileTap={{ scale: 0.98 }}
							onClick={() => setSelectedProject(project)}
							role="button"
							tabIndex={0}
							aria-label={t("viewDetailsAria", { title: project.title })}
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
							<div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
								<Image
									src={project.images[0]}
									alt={project.title + " project image"}
									fill
									className="object-cover"
								/>
							</div>
							<span className="text-[0.75rem] text-muted">
								{new Date(project.date).toLocaleDateString(locale === "es" ? "es-AR" : "en-US", {
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
