"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { ServicePackage } from "@/types/pricing.types";

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

interface PackageCardProps {
	pkg: ServicePackage;
	isSelected: boolean;
	onClick: () => void;
}

export default function PackageCard({
	pkg,
	isSelected,
	onClick,
}: PackageCardProps) {
	return (
		<motion.div
			variants={cardVariants}
			onClick={onClick}
			className={`relative flex flex-col p-5 rounded-xl border backdrop-blur-sm cursor-pointer transition-[border-color,box-shadow] duration-200
				${
					isSelected
						? "border-coral shadow-[0_0_30px_var(--shadow-coral-soft)]"
						: "border-border hover:border-coral/40"
				} bg-card-strong`}>
			{/* Selected indicator */}
			{isSelected && (
				<span className="absolute top-3 right-3 text-[0.65rem] font-mono text-coral border border-coral/30 rounded-full px-2 py-0.5 bg-coral/5">
					seleccionado
				</span>
			)}

			<h3 className="font-display text-xl font-bold text-primary mb-2">
				{pkg.name}
			</h3>

			<div className="mb-2">
				<span className="font-display text-2xl font-bold text-coral">
					{pkg.price}
				</span>
			</div>

			{/* Delivery time */}
			<div className="text-[0.8rem] text-muted mb-2">
				Entrega:{" "}
				<span className="text-coral font-semibold">{pkg.deliveryTime}</span>
			</div>

			{/* Maintenance badge */}
			<span className="inline-flex self-start px-2.5 py-1 rounded-full bg-cyan-soft-bg border border-cyan-mid/30 text-cyan text-[0.7rem] font-medium mb-4">
				Mant. {pkg.maintenancePrice}
			</span>

			<div className="border-t border-border my-3" />

			<ul className="flex flex-col gap-2 flex-1">
				{pkg.features.map((f) => (
					<li
						key={f.text}
						className={`flex items-start gap-2 text-[0.85rem] ${f.included ? "text-secondary" : "text-muted line-through opacity-50"}`}>
						{f.included ? (
							<span className="text-coral mt-0.5 shrink-0">→</span>
						) : (
							<X size={14} className="mt-0.5 shrink-0" />
						)}
						{f.text}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
