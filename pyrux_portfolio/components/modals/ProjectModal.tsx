// ═══════════════════════════════════════════════
// Project Modal - base modal component
// ═══════════════════════════════════════════════

"use client";

import { useState, useRef } from "react";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { getTechnologyById } from "@/data/technologies";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types";
import Img from "next/image";

interface ProjectModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

function ImageCarousel({ images }: { images: string[] }) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(images.length > 4);

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
				className="flex gap-2 overflow-x-auto scrollbar-hide"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
				{images.map((img, i) => (
					<div
						key={i}
						className="shrink-0 w-40 h-28 rounded-lg overflow-hidden border border-border bg-elevated">
						<Img
							src={img}
							alt={`Imagen ${i + 1}`}
							className="w-full h-full object-cover"
							loading="lazy"
							width={160}
							height={112}
						/>
					</div>
				))}
			</div>
			{canScrollLeft && (
				<button
					onClick={() => scroll("left")}
					className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 grid place-items-center rounded-full border border-border bg-card-strong text-secondary cursor-pointer transition-colors duration-200 hover:border-coral hover:text-coral"
					aria-label="Anterior">
					<ChevronLeft size={14} />
				</button>
			)}
			{canScrollRight && (
				<button
					onClick={() => scroll("right")}
					className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 grid place-items-center rounded-full border border-border bg-card-strong text-secondary cursor-pointer transition-colors duration-200 hover:border-coral hover:text-coral"
					aria-label="Siguiente">
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
	if (!project) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={project.title}>
			{/* Description */}
			<p className="text-secondary leading-relaxed mb-5">
				{project.description}
			</p>

			{/* Image carousel */}
			{project.images.length > 0 && <ImageCarousel images={project.images} />}

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
				{new Date(project.date).toLocaleDateString("es-AR", {
					year: "numeric",
					month: "long",
				})}
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
						Ver en vivo
					</a>
				)}
			</div>
		</Modal>
	);
}
