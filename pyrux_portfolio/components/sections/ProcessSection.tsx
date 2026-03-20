"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Palette, Code, Rocket, HeartHandshake } from "lucide-react";
import Section from "@/components/ui/Section";
import type { Step } from "@/types/pricing.types";

interface ProcessSectionProps {
	steps: Step[];
}

const stepIcons = [MessageCircle, Palette, Code, Rocket, HeartHandshake];

export default function ProcessSection({ steps }: ProcessSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const inView = useInView(containerRef, { once: true, amount: 0 });

	return (
		<Section className="mb-14" title="Nuestro proceso">
			<div ref={containerRef} className="relative flex flex-col gap-0 max-w-xl mx-auto">

				{/* Vertical connector line — animates from top to bottom */}
				<motion.div
					className="absolute left-9 top-9 bottom-9 w-0.5 origin-top"
					style={{ background: "var(--border-accent)" }}
					initial={{ scaleY: 0 }}
					animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
					transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
				/>

				{steps.map((step, i) => {
					const Icon = stepIcons[i] ?? MessageCircle;
					return (
						<motion.div
							key={step.number}
							className="relative flex items-center gap-5 pb-10 last:pb-0"
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ delay: i * 0.18, duration: 0.3 }}>

							{/* Left: number bubble */}
							<motion.div
								className="relative shrink-0 z-10"
								initial={{ scale: 0, opacity: 0 }}
								animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
								transition={{
									delay: i * 0.18 + 0.1,
									type: "spring",
									stiffness: 300,
									damping: 18,
								}}>
								<div className="w-18 h-18 rounded-full border-2 border-coral/40 bg-card-strong grid place-items-center shadow-[0_0_16px_var(--shadow-coral-soft)]">
									<span className="text-coral font-bold font-mono text-xl">{step.number}</span>
								</div>
							</motion.div>

							{/* Right: content card */}
							<motion.div
								className="relative flex-1 pt-3 pb-4 px-5 rounded-xl border border-border bg-card overflow-hidden transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral/40 hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
								initial={{ opacity: 0, x: 24 }}
								animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
								transition={{ delay: i * 0.18 + 0.2, duration: 0.45, ease: "easeOut" }}
								whileHover={{ y: -6 }}
								whileTap={{ y: -4 }}>
								{/* Large decorative number */}
								<span className="absolute right-3 top-0 font-display text-[5rem] font-bold text-coral/5 leading-none select-none pointer-events-none">
									{step.number}
								</span>
								{/* Icon */}
								<motion.div
									className="mb-2"
									initial={{ scale: 0, rotate: -15 }}
									animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -15 }}
									transition={{
										delay: i * 0.18 + 0.35,
										type: "spring",
										stiffness: 260,
										damping: 16,
									}}>
									<Icon size={20} className="text-coral" />
								</motion.div>
								<h3 className="font-display text-[1rem] font-semibold text-primary mb-1">{step.title}</h3>
								<p className="text-[0.85rem] text-muted leading-normal">{step.description}</p>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</Section>
	);
}
