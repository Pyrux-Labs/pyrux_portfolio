// ═══════════════════════════════════════════════
// Project Modal - base modal component
// ═══════════════════════════════════════════════

"use client";

import { useState, useCallback } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { getTechnologyById } from "@/data/technologies";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";
import type { Project } from "@/types";
import Image from "next/image";
import { cdnThumb } from "@/lib/cloudinary";
import ImagePreview from "@/components/common/ImagePreview";

interface ProjectModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

function CarouselImage({ src, alt, onClick, eager }: { src: string; alt: string; onClick: () => void; eager?: boolean }) {
	const [loaded, setLoaded] = useState(false);
	const handleLoad = useCallback(() => setLoaded(true), []);

	return (
		<div
			onClick={onClick}
			className="relative shrink-0 w-40 h-28 2xl:w-56 2xl:h-40 rounded-lg overflow-hidden border border-border bg-elevated cursor-zoom-in transition-[border-color] duration-200 hover:border-coral">
			{!loaded && (
				<div className="absolute inset-0 bg-elevated animate-pulse" />
			)}
			<Image
				src={src}
				alt={alt}
				className="w-full h-full object-cover"
				loading={eager ? "eager" : "lazy"}
				width={224}
				height={160}
				sizes="(min-width: 1536px) 224px, 160px"
				onLoad={handleLoad}
			/>
		</div>
	);
}

function ImageCarousel({
	images,
	prevLabel,
	nextLabel,
	imageAltFn,
	onImageClick,
}: {
	images: string[];
	projectTitle: string;
	prevLabel: string;
	nextLabel: string;
	imageAltFn: (index: number) => string;
	onImageClick: (index: number) => void;
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
				className="overflow-x-auto scrollbar-hide cursor-grab select-none"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
				<div className="flex gap-2 justify-center min-w-full w-max [&_img]:pointer-events-none [&_img]:select-none [&_img]:[-webkit-user-drag:none]">
					{images.map((img, i) => (
						<CarouselImage
							key={i}
							src={cdnThumb(img)}
							alt={imageAltFn(i + 1)}
							onClick={() => onImageClick(i)}
							eager={i === 0}
						/>
					))}
				</div>
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
	const [previewIndex, setPreviewIndex] = useState<number | null>(null);

	if (!project) return null;

	return (
		<>
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
						onImageClick={setPreviewIndex}
					/>
				)}

				{/* Technologies + Date + Live link */}
				<div className="flex items-center justify-between gap-4 flex-wrap">
					<div>
						<div className="flex flex-wrap gap-2 mb-2">
							{project.technologies.map((techId) => {
								const tech = getTechnologyById(techId);
								return (
									<Badge key={techId} label={tech?.name ?? techId} variant="coral" />
								);
							})}
						</div>
						<p className="text-[0.8rem] text-muted">
							{new Date(project.date).toLocaleDateString(
								locale === "es" ? "es-AR" : "en-US",
								{
									year: "numeric",
									month: "long",
								},
							)}
						</p>
					</div>
					{project.liveUrl && (
						<div className="ml-auto">
							<ExternalLinkButton href={project.liveUrl} label={t("viewLive")} />
						</div>
					)}
				</div>
			</Modal>

			{previewIndex !== null && (
				<ImagePreview
					images={project.images}
					initialIndex={previewIndex}
					alt={project.title}
					onClose={() => setPreviewIndex(null)}
				/>
			)}
		</>
	);
}
