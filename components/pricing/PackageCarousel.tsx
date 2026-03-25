"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PackageCard from "@/components/pricing/PackageCard";
import { staggerContainerFast } from "@/lib/animations";
import type { ServicePackage, PlanColor } from "@/types/pricing.types";

const ctaColorTokens: Record<PlanColor, { border: string; bg: string }> = {
	growth: { border: "border-[var(--pkg-growth)]", bg: "bg-[var(--pkg-growth-soft)]" },
	pro: { border: "border-coral", bg: "bg-[var(--color-gold-tint)]" },
	business: { border: "border-[var(--pkg-business)]", bg: "bg-[var(--pkg-business-soft)]" },
	custom: { border: "border-[var(--pkg-custom)]", bg: "bg-[var(--pkg-custom-soft)]" },
};

interface PackageCarouselProps {
	packages: ServicePackage[];
	selectedPkg: number;
	onSelect: (idx: number) => void;
	animKey: string;
}

export default function PackageCarousel({
	packages: visiblePackages,
	selectedPkg,
	onSelect,
	animKey,
}: PackageCarouselProps) {
	const carouselRef = useRef<HTMLDivElement>(null);
	const touchStartX = useRef(0);
	const selectedPkgRef = useRef(selectedPkg);

	useEffect(() => {
		selectedPkgRef.current = selectedPkg;
	}, [selectedPkg]);

	// Scroll to card when selectedPkg changes (dot tap) — skip if already there
	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;
		const children = Array.from(el.children) as HTMLElement[];
		const card = children[selectedPkg];
		if (!card) return;
		const targetLeft = card.offsetLeft - el.offsetLeft;
		if (Math.abs(el.scrollLeft - targetLeft) < 1) return;
		el.scrollTo({ left: targetLeft, behavior: "smooth" });
	}, [selectedPkg]);

	// Touch handlers: always move exactly one card per swipe
	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;

		function scrollToIndex(idx: number) {
			if (!el) return;
			const card = el.children[idx] as HTMLElement;
			if (!card) return;
			const target = card.offsetLeft - el.offsetLeft;
			// Assign scrollLeft directly to cancel iOS momentum scroll immediately
			el.scrollLeft = target;
		}

		function onTouchStart(e: TouchEvent) {
			touchStartX.current = e.touches[0].clientX;
		}

		function onTouchEnd(e: TouchEvent) {
			const deltaX = e.changedTouches[0].clientX - touchStartX.current;
			const threshold = 30;
			const count = el!.children.length;
			const current = selectedPkgRef.current;
			let next = current;
			if (deltaX < -threshold) next = Math.min(current + 1, count - 1);
			else if (deltaX > threshold) next = Math.max(current - 1, 0);
			scrollToIndex(next);
			onSelect(next);
		}

		el.addEventListener("touchstart", onTouchStart, { passive: true });
		el.addEventListener("touchend", onTouchEnd, { passive: true });
		return () => {
			el.removeEventListener("touchstart", onTouchStart);
			el.removeEventListener("touchend", onTouchEnd);
		};
	}, [onSelect]);

	return (
		<div className="sm:hidden">
			<motion.div key={animKey} variants={staggerContainerFast} initial="hidden" animate="visible">
				<div
					ref={carouselRef}
					className="-mx-4 px-4 pr-[10vw] flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
					{visiblePackages.map((pkg, idx) => (
						<div key={`${pkg.category}-${pkg.number}`} className="snap-center snap-always shrink-0 w-[85vw]">
							<PackageCard pkg={pkg} isSelected={selectedPkg === idx} onClick={() => onSelect(idx)} />
						</div>
					))}
				</div>
			</motion.div>
			<div className="flex justify-center gap-2 mt-4">
				{visiblePackages.map((pkg, idx) => (
					<button
						key={idx}
						onClick={() => onSelect(idx)}
						className={`rounded-full transition-all duration-200 cursor-pointer ${
							selectedPkg === idx
								? `w-5 h-2 ${ctaColorTokens[pkg.planColor].bg} border ${ctaColorTokens[pkg.planColor].border}`
								: "w-2 h-2 bg-border"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
