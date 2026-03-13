"use client";

import { motion } from "framer-motion";
import MaintenanceIcon from "@/components/ui/MaintenanceIcon";
import type { MaintenanceItem } from "@/types/pricing.types";

interface MaintenanceCardProps {
	item: MaintenanceItem;
}

export default function MaintenanceCard({ item }: MaintenanceCardProps) {
	return (
		<motion.div
			className="block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)] cursor-default group"
			variants={{
				hidden: { opacity: 0, y: 16 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.35, ease: "easeOut" },
				},
			}}
			whileHover={{ y: -6 }}>
			<div className="flex items-center justify-center mb-3 transition-transform duration-200 ease-in-out group-hover:scale-110">
				<MaintenanceIcon iconName={item.icon} className="text-coral" />
			</div>
			<h3 className="font-display text-base font-semibold text-primary mb-1.5 text-center">
				{item.title}
			</h3>
			<p className="text-[0.85rem] text-muted leading-normal text-center">
				{item.description}
			</p>
		</motion.div>
	);
}
