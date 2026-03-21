// ═══════════════════════════════════════════════
// Project Modal - base modal component
// ═══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { getTechnologyById } from "@/data/technologies";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types";
import Image from "next/image";

interface ProjectModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

function ImageCarousel({
	images,
	prevLabel,
	nextLabel,
	imageAltFn,
}: {
	images: string[];
	projectTitle: string;
	prevLabel: string;
	nextLabel: string;
	imageAltFn: (index: number) => string;
}) {
	const scrollRef = useDragScroll();
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const hasArrows = images.length >= 4;
	const [canScrollRight, setCanScrollRight] = useState(hasArrows);

	const updateScrollState = () => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 0);
		setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	};

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;
		const amount = el.clientWidth * 0.7;
		el.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	};

	if (images.length === 0) return null;

	return (
		<div className="relative mb-5">
			<div
				ref={scrollRef}
				onScroll={updateScrollState}
				className="flex gap-2 overflow-x-auto scrollbar-hide cursor-grab select-none [&_img]:pointer-events-none [&_img]:select-none"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
				{images.map((img, i) => (
					<div
						key={i}
						className="shrink-0 w-40 h-28 2xl:w-56 2xl:h-40 rounded-lg overflow-hidden border border-border bg-elevated">
						<Image
							src={img}
							alt={imageAltFn(i + 1)}
							className="w-full h-full object-cover"
							loading="lazy"
							width={224}
							height={160}
							sizes="(min-width: 1536px) 224px, 160px"
						/>
					</div>
				))}
			</div>
			{hasArrows && canScrollLeft && (
				<button
					onClick={() => scroll("left")}
					className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 grid place-items-center rounded-full border border-coral bg-card-strong text-coral cursor-pointer transition-colors duration-200 hover:bg-coral hover:text-white"
					aria-label={prevLabel}>
					<ChevronLeft size={14} />
				</button>
			)}
			{hasArrows && canScrollRight && (
				<button
					onClick={() => scroll("right")}
					className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 grid place-items-center rounded-full border border-coral bg-card-strong text-coral cursor-pointer transition-colors duration-200 hover:bg-coral hover:text-white"
					aria-label={nextLabel}>
					<ChevronRight size={14} />
				</button>
			)}
		</div>
	);
}

export default function ProjectModal({
	project,
	isOpen,
	onClose,
}: ProjectModalProps) {
	const t = useTranslations("ProjectModal");
	const { locale } = useLocale();

	if (!project) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={project.title} closeLabel={t("closeModal")}>
			{/* Description */}
			<p className="text-secondary leading-relaxed mb-5">
				{project.description}
			</p>

			{/* Image carousel */}
			{project.images.length > 0 && (
				<ImageCarousel
					images={project.images}
					projectTitle={project.title}
					prevLabel={t("prevAria")}
					nextLabel={t("nextAria")}
					imageAltFn={(index: number) =>
						t("imageAlt", { title: project.title, index })
					}
				/>
			)}

			{/* Technologies */}
			<div className="flex flex-wrap gap-2 mb-6">
				{project.technologies.map((techId) => {
					const tech = getTechnologyById(techId);
					return (
						<Badge key={techId} label={tech?.name ?? techId} variant="coral" />
					);
				})}
			</div>

			{/* Date */}
			<p className="text-[0.8rem] text-muted mb-6">
				{new Date(project.date).toLocaleDateString(
					locale === "es" ? "es-AR" : "en-US",
					{
						year: "numeric",
						month: "long",
					},
				)}
			</p>

			{/* Links */}
			<div className="flex justify-end">
				{project.liveUrl && (
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-coral bg-coral-soft-bg text-coral text-[0.9rem] font-medium no-underline transition-all duration-200 hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] hover:-translate-y-0.5">
						<ExternalLink size={16} />
						{t("viewLive")}
					</a>
				)}
			</div>
		</Modal>
	);
}
