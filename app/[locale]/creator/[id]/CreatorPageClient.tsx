// ═══════════════════════════════════════════════
// creator/[id] —  creator page client
// ═══════════════════════════════════════════════

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { getCreatorById } from "@/data/creators";
import { getProjectsByCreator } from "@/data/projects";
import { getTechnologyById } from "@/data/technologies";
import Badge from "@/components/ui/Badge";
import ProjectModal from "@/components/common/ProjectModal";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import type { Project } from "@/types";
import { fadeUpHeader, fadeUpItem, staggerContainerFast } from "@/lib/animations";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface CreatorPageClientProps {
	creatorId: string;
}


export default function CreatorPageClient({
	creatorId,
}: CreatorPageClientProps) {
	const t = useTranslations("CreatorPage");
	const { locale } = useLocale();
	const { copy } = useCopyToClipboard();
	const creator = getCreatorById(creatorId, locale);
	const creatorProjects = useMemo(
		() => getProjectsByCreator(creatorId, locale),
		[creatorId, locale],
	);

	// Initialize modal from ?project= URL param on first render
	const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
		if (typeof window === "undefined") return null;
		const projectId = new URLSearchParams(window.location.search).get("project");
		return creatorProjects.find((p) => p.id === projectId) ?? null;
	});

	if (!creator) {
		return (
			<>
				<StarBackground />
				<main className="relative z-1 max-w-content mx-auto min-h-screen flex flex-col items-center justify-center px-4">
					<h1 className="font-display text-2xl font-bold text-primary mb-4">
						{t("notFoundTitle")}
					</h1>
					<Link
						href="/"
						className="text-coral no-underline hover:text-cyan transition-colors">
						{t("backToHomeAlt")}
					</Link>
				</main>
			</>
		);
	}

	const handleEmailCopy = async () => {
		if (!creator.socialLinks.email) return;
		await copy(creator.socialLinks.email);
		toast.success(t("toastSuccess"), {
			description: creator.socialLinks.email,
			duration: 2500,
		});
	};

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-content mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Header */}
				<motion.div
					className="mb-8"
					variants={fadeUpHeader}
					initial="hidden"
					animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-coral no-underline mb-4 hover:text-cyan">
						<ArrowLeft size={16} />
						{t("backToHome")}
					</Link>

					{/* Creator info */}
					<div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between sm:gap-8 sm:items-start mb-6">
						<div className="flex-1 text-center sm:text-left">
							<h1 className="font-display text-3xl font-bold text-primary mb-1">
								{creator.name}
							</h1>
							<p className="text-coral text-[0.95rem] font-medium mb-3">
								{creator.role}
							</p>
							<p className="text-secondary leading-relaxed max-w-xl mx-auto sm:mx-0">
								{creator.bio}
							</p>

							{/* Social links */}
							<div className="flex gap-3 mt-4 justify-center sm:justify-start">
								{creator.socialLinks.github && (
									<a
										href={creator.socialLinks.github}
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary no-underline transition-all duration-200 hover:border-coral hover:text-coral"
										aria-label={t("githubAria")}>
										<Github size={16} />
									</a>
								)}
								{creator.socialLinks.linkedin && (
									<a
										href={creator.socialLinks.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary no-underline transition-all duration-200 hover:border-coral hover:text-coral"
										aria-label={t("linkedinAria")}>
										<Linkedin size={16} />
									</a>
								)}
								{creator.socialLinks.email && (
									<button
										onClick={handleEmailCopy}
										className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary no-underline transition-all duration-200 hover:border-coral hover:text-coral cursor-pointer"
										aria-label={t("emailAria")}>
										<Mail size={16} />
									</button>
								)}
							</div>
						</div>
						<Image
							src={creator.image}
							alt={creator.name}
							width={160}
							height={160}
							className="shrink-0 rounded-full object-cover"
						/>
					</div>
				</motion.div>

				{/* Projects grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
					variants={staggerContainerFast}
					initial="hidden"
					animate="visible">
					{creatorProjects.map((project) => (
						<motion.div
							key={project.id}
							className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card-strong backdrop-blur-sm cursor-pointer hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
							variants={fadeUpItem}
							whileHover={{ y: -4 }}
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
									{new Date(project.date).toLocaleDateString(locale === "es" ? "es-AR" : "en-US", {
										year: "numeric",
										month: "short",
									})}
								</span>
								{project.featured && (
									<Badge
										label={t("featured")}
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
