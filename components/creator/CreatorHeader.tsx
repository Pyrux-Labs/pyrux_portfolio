"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { getCreatorById } from "@/data/creators";
import { fadeUpHeader } from "@/lib/animations";

interface CreatorHeaderProps {
	creatorId: string;
}

export default function CreatorHeader({ creatorId }: CreatorHeaderProps) {
	const t = useTranslations("CreatorPage");
	const { locale } = useLocale();
	const { copy } = useCopyToClipboard();
	const creator = getCreatorById(creatorId, locale);

	if (!creator) return null;

	const handleEmailCopy = async () => {
		if (!creator.socialLinks.email) return;
		await copy(creator.socialLinks.email);
		toast.success(t("toastSuccess"), { description: creator.socialLinks.email, duration: 2500 });
	};

	return (
		<motion.div className="mb-8" variants={fadeUpHeader} initial="hidden" animate="visible">
			<div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between sm:gap-8 sm:items-start mb-6">
				<div className="flex-1 text-center sm:text-left">
					<h1 className="font-display text-3xl font-bold text-primary mb-1">{creator.name}</h1>
					<p className="text-coral text-[0.95rem] font-medium mb-3">{creator.role}</p>
					<p className="text-secondary leading-relaxed max-w-xl mx-auto sm:mx-0">{creator.bio}</p>

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
								className="w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral cursor-pointer"
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
	);
}
