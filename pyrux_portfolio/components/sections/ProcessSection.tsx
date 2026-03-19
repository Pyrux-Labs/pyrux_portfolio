"use client";

import { motion } from "framer-motion";
import { MessageCircle, Palette, Code, Rocket, HeartHandshake } from "lucide-react";
import Section from "@/components/ui/Section";
import type { Step } from "@/types/pricing.types";

interface ProcessSectionProps {
	steps: Step[];
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

export default function ProcessSection({ steps }: ProcessSectionProps) {
	return (
		<Section className="mb-14" title="Nuestro proceso">
			<div className="relative flex flex-col gap-0 max-w-xl mx-auto">
				{steps.map((step, i) => {
					const Icon = stepIcons[i] ?? MessageCircle;
					return (
						<motion.div
							key={step.number}
							className="relative flex gap-5 pb-10 last:pb-0"
							custom={i}
							variants={stepVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}>

							{/* Left: number bubble + connector below it */}
							<div className="relative shrink-0 w-18">
								<div className="w-18 h-18 rounded-full border-2 border-coral/40 bg-card-strong grid place-items-center">
									<span className="text-coral font-bold font-mono text-xl">{step.number}</span>
								</div>
								{/* Connector: starts below circle, extends through pb-10 to reach next circle */}
								{i < steps.length - 1 && (
									<div className="absolute left-1/2 -translate-x-1/2 top-[4.5rem] bottom-[-2.5rem] w-0.5 bg-border-accent" />
								)}
							</div>

							{/* Right: content card with large bg number */}
							<div className="relative flex-1 pt-3 pb-4 px-5 rounded-xl border border-border bg-card overflow-hidden">
								{/* Large decorative number */}
								<span className="absolute right-3 top-0 font-display text-[5rem] font-bold text-coral/5 leading-none select-none pointer-events-none">
									{step.number}
								</span>
								{/* Icon */}
								<div className="mb-2">
									<Icon size={20} className="text-coral" />
								</div>
								<h3 className="font-display text-[1rem] font-semibold text-primary mb-1">{step.title}</h3>
								<p className="text-[0.85rem] text-muted leading-normal">{step.description}</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</Section>
	);
}
