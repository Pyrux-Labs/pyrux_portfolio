// ═══════════════════════════════════════════════
// Creator modal — full profile
// ═══════════════════════════════════════════════

"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { getPersonalProjectsByCreator } from "@/data/personalProjects";
import { getTechnologyById } from "@/data/technologies";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import type { Creator } from "@/types";

interface CreatorModalProps {
	creator: Creator | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function CreatorModal({
	creator,
	isOpen,
	onClose,
}: CreatorModalProps) {
	const t = useTranslations("CreatorModal");
	const { locale } = useLocale();
	const { copy } = useCopyToClipboard();

	if (!creator) return null;

	// Get personal projects for the creator (up to 3 as preview)
	const personalProjects = getPersonalProjectsByCreator(creator.id, locale).slice(0, 3);

	const handleEmailCopy = async () => {
		if (!creator.socialLinks.email) return;
		await copy(creator.socialLinks.email);
		toast.success(t("toastSuccess"), {
			description: creator.socialLinks.email,
			duration: 2500,
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			{/* Header: name + role (left) / photo (right) */}
			<div className="flex items-center justify-between gap-4 mb-4 pr-10">
				<div>
					<h3 className="font-display text-xl font-bold text-primary">
						{creator.name}
					</h3>
					<p className="text-coral text-[0.9rem] font-medium mt-0.5">
						{creator.role}
					</p>
				</div>
				<Image
					src={creator.image}
					alt={creator.name}
					width={80}
					height={80}
					className="rounded-full object-cover shrink-0"
				/>
			</div>

			{/* Bio */}
			<p className="text-secondary leading-relaxed mb-6">{creator.bio}</p>

			{/* Links */}
			<div className="flex gap-3 mb-6">
				{creator.socialLinks.github && (
					<a
						href={creator.socialLinks.github}
						target="_blank"
						rel="noopener noreferrer"
						className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral"
						aria-label={t("githubAria")}>
						<Github size={16} />
					</a>
				)}
				{creator.socialLinks.linkedin && (
					<a
						href={creator.socialLinks.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral"
						aria-label={t("linkedinAria")}>
						<Linkedin size={16} />
					</a>
				)}
				{creator.socialLinks.email && (
					<button
						onClick={handleEmailCopy}
						className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral cursor-pointer"
						aria-label={t("emailAria")}>
						<Mail size={16} />
					</button>
				)}
			</div>

			{/* Personal projects preview */}
			{personalProjects.length > 0 && (
				<div>
					<h4 className="font-display text-[0.95rem] font-semibold text-primary mb-3">
						{t("featuredProjects")}
					</h4>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{personalProjects.map((project) => (
							<a
								key={project.id}
								href={`/creator/${creator.id}?project=${project.id}`}
								className="p-3 rounded-xl border border-border bg-card transition-all duration-200 hover:border-coral no-underline block">
								<h5 className="font-display text-[0.85rem] font-semibold text-primary mb-1">
									{project.title}
								</h5>
								<p className="text-[0.8rem] text-muted line-clamp-2 mb-2">
									{project.shortDescription}
								</p>
								<div className="flex flex-wrap gap-1">
									{project.technologies.slice(0, 3).map((techId) => {
										const tech = getTechnologyById(techId);
										return (
											<Badge
												key={techId}
												label={tech?.name ?? techId}
												className="text-[0.65rem] px-1.5 py-0.5"
											/>
										);
									})}
								</div>
							</a>
						))}
					</div>

					{/* View all button */}
					<a
						href={`/creator/${creator.id}`}
						className="inline-flex items-center gap-2 mt-4 text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 hover:text-cyan">
						<ExternalLink size={14} />
						{t("viewAllProjects")}
					</a>
				</div>
			)}
		</Modal>
	);
}
