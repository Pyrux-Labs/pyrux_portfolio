"use client";

import { motion, AnimatePresence } from "framer-motion";
import FeatureCard from "@/components/ui/FeatureCard";
import MaintenanceIcon from "@/components/ui/MaintenanceIcon";
import type { MaintenanceItem, PlanColor } from "@/types/pricing.types";

interface MaintenanceGridProps {
	cards: MaintenanceItem[];
	animKey: number;
	planColor: PlanColor;
}

const colorTokens: Record<PlanColor, { text: string; border: string; shadow: string }> = {
	growth: {
		text: "text-[var(--pkg-growth)]",
		border: "hover:border-[var(--pkg-growth)]",
		shadow: "hover:shadow-[0_12px_40px_var(--pkg-growth-soft)]",
	},
	pro: {
		text: "text-coral",
		border: "hover:border-coral",
		shadow: "hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]",
	},
	business: {
		text: "text-[var(--pkg-business)]",
		border: "hover:border-[var(--pkg-business)]",
		shadow: "hover:shadow-[0_12px_40px_var(--pkg-business-soft)]",
	},
	custom: {
		text: "text-[var(--pkg-custom)]",
		border: "hover:border-[var(--pkg-custom)]",
		shadow: "hover:shadow-[0_12px_40px_var(--pkg-custom-soft)]",
	},
};

export default function MaintenanceGrid({ cards, animKey, planColor }: MaintenanceGridProps) {
	const c = colorTokens[planColor];

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={animKey}
				className="grid grid-cols-1 min-[481px]:grid-cols-2 sm:grid-cols-3 gap-4"
				initial="hidden"
				animate="visible"
				exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
				variants={{
					hidden: { opacity: 0, y: 10 },
					visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.06 } },
				}}>
				{cards.map((item) => (
					<FeatureCard
						key={item.title}
						title={item.title}
						description={item.description}
						icon={<MaintenanceIcon iconName={item.icon} className={c.text} />}
						accentClass={`${c.border} ${c.shadow}`}
					/>
				))}
			</motion.div>
		</AnimatePresence>
	);
}
