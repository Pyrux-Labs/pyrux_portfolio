"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import type { Step } from "@/types/pricing.types";

interface ProcessSectionProps {
	steps: Step[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
	const t = useTranslations("ProcessSection");
	return (
		<Section className="mb-14" title={t("sectionTitle")}>
			<div className="flex flex-col sm:flex-row gap-0 sm:gap-0 overflow-hidden">
				{steps.map((step, i) => (
					<motion.div
						key={step.number}
						className="relative flex-1 flex flex-col"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1, duration: 0.4 }}>
						{/* Connector line — de borde a borde, sin cruzar los círculos */}
						{i < steps.length - 1 && (
							<div
								className="hidden sm:block absolute top-4 h-px bg-border-accent z-0"
								style={{
									left: "calc(50% + 16px)",
									right: "calc(-50% + 16px)",
								}}
							/>
						)}

						<div className="relative z-10 flex flex-col items-center text-center px-3">
							{/* Step number circle */}
							<div className="w-8 h-8 rounded-full border border-coral bg-card-strong grid place-items-center mb-3 shrink-0">
								<span className="text-[0.65rem] text-coral font-bold font-mono">
									{step.number}
								</span>
							</div>
							<h3 className="font-display text-[0.9rem] font-semibold text-primary mb-1 leading-snug">
								{step.title}
							</h3>
							<p className="text-[0.8rem] text-muted leading-normal">
								{step.description}
							</p>
						</div>

						{/* Mobile: vertical connector */}
						{i < steps.length - 1 && (
							<div className="sm:hidden w-px h-6 bg-border-accent mx-auto my-2" />
						)}
					</motion.div>
				))}
			</div>
		</Section>
	);
}
