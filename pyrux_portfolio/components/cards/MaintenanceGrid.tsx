"use client";

import { motion, AnimatePresence } from "framer-motion";
import MaintenanceCard from "./MaintenanceCard";
import type { MaintenanceItem } from "@/types/pricing.types";

interface MaintenanceGridProps {
	cards: MaintenanceItem[];
	animKey: number;
}

export default function MaintenanceGrid({
	cards,
	animKey,
}: MaintenanceGridProps) {
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
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.3, staggerChildren: 0.06 },
					},
				}}>
				{cards.map((item) => (
					<MaintenanceCard key={item.title} item={item} />
				))}
			</motion.div>
		</AnimatePresence>
	);
}
