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
	const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	// Scroll to card when selectedPkg changes (dot tap) — skip if already there
	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;
		const children = Array.from(el.children) as HTMLElement[];
		const card = children[selectedPkg];
		if (!card) return;
		const targetLeft = card.offsetLeft - el.offsetLeft;
		if (Math.abs(el.scrollLeft - targetLeft) < 1) return; // already at target
		el.scrollTo({ left: targetLeft, behavior: "smooth" });
	}, [selectedPkg]);

	// Detect swipe end via scrollend (+ debounce fallback for older browsers)
	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;

		function detectCard() {
			if (!el) return;
			const { scrollLeft, clientWidth } = el;
			const children = Array.from(el.children) as HTMLElement[];
			let idx = 0;
			for (let i = 0; i < children.length; i++) {
				if ((children[i] as HTMLElement).offsetLeft <= scrollLeft + clientWidth / 2) idx = i;
			}
			onSelect(idx);
		}

		function clearFallback() {
			if (fallbackTimer.current) {
				clearTimeout(fallbackTimer.current);
				fallbackTimer.current = null;
			}
		}

		function onScrollEnd() {
			clearFallback();
			detectCard();
		}

		function onScroll() {
			clearFallback();
			// Long timeout so momentum scroll fully settles before detecting card
			fallbackTimer.current = setTimeout(onScrollEnd, 500);
		}

		el.addEventListener("scrollend", onScrollEnd);
		el.addEventListener("scroll", onScroll);
		return () => {
			el.removeEventListener("scrollend", onScrollEnd);
			el.removeEventListener("scroll", onScroll);
			clearFallback();
		};
	}, [onSelect]);

	return (
		<div className="sm:hidden">
			<motion.div key={animKey} variants={staggerContainerFast} initial="hidden" animate="visible">
				<div
					ref={carouselRef}
					className="-mx-4 px-4 pr-[10vw] flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
					{visiblePackages.map((pkg, idx) => (
						<div key={`${pkg.category}-${pkg.number}`} className="snap-center shrink-0 w-[85vw]">
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
