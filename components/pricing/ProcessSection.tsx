"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Palette, Code, Rocket, HeartHandshake } from "lucide-react";
import Section from "@/components/ui/Section";
import type { Step } from "@/types/pricing.types";

interface ProcessSectionProps {
	steps: Step[];
	title: string;
}

const stepIcons = [MessageCircle, Palette, Code, Rocket, HeartHandshake];

const stepVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
	}),
};

export default function ProcessSection({ steps, title }: ProcessSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const inView = useInView(containerRef, { once: true, amount: 0 });

	return (
		<Section className="mb-14" title={title}>
			{/* 2-column grid: [circle col] [card col]
			    gap-y-10 = 40px between rows → connectors extend 1.25rem (20px) each side */}
			<div
				ref={containerRef}
				className="grid max-w-xl mx-auto gap-x-5 gap-y-10"
				style={{ gridTemplateColumns: "4.5rem 1fr" }}>
				{steps.map((step, i) => {
					const Icon = stepIcons[i] ?? MessageCircle;
					const isFirst = i === 0;
					const isLast = i === steps.length - 1;

					return (
						<Fragment key={step.number}>
							{/* ── Left cell: circle + split connectors ── */}
							<div className="relative flex items-center justify-center">
								{/* Top connector: gap midpoint → circle top
								    Starts 1.25rem above cell (= half of gap-y-10)
								    Ends at circle top (50% of cell - 2.25rem = half circle radius) */}
								{!isFirst && (
									<div
										className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-border-accent"
										style={{ top: "-1.25rem", height: "calc(50% - 1rem)" }}
									/>
								)}

								{/* Circle — z-10 + solid bg covers connector endpoints */}
								<div className="relative z-10 w-18 h-18 rounded-full border-2 border-coral/40 bg-card-strong grid place-items-center">
									<span className="text-coral font-bold font-mono text-xl">
										{step.number}
									</span>
								</div>

								{/* Bottom connector: circle bottom → gap midpoint
								    Starts at circle bottom (50% + 2.25rem)
								    Ends 1.25rem below cell (= half of gap-y-10) */}
								{!isLast && (
									<div
										className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-border-accent"
										style={{ top: "calc(50% + 2.25rem)", bottom: "-1.25rem" }}
									/>
								)}
							</div>

							{/* ── Right cell: content card ── */}
							<motion.div
								className="relative pt-3 pb-4 px-5 rounded-xl border border-border bg-card overflow-hidden transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral/40 hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
								custom={i}
								variants={stepVariants}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								whileHover={{ y: -6 }}
								whileTap={{ y: -4 }}>
								<span className="absolute right-3 top-0 font-display text-[5rem] font-bold text-coral/5 leading-none select-none pointer-events-none">
									{step.number}
								</span>
								<div className="mb-2">
									<Icon size={20} className="text-coral" />
								</div>
								<h3 className="font-display text-[1rem] font-semibold text-primary mb-1">
									{step.title}
								</h3>
								<p className="text-[0.85rem] text-muted leading-normal">
									{step.description}
								</p>
							</motion.div>
						</Fragment>
					);
				})}
			</div>
		</Section>
	);
}
