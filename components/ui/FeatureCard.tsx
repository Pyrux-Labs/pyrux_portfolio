"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureCardProps {
	title: string;
	description: string;
	icon: ReactNode;
	accentClass: string;
}

export default function FeatureCard({ title, description, icon, accentClass }: FeatureCardProps) {
	return (
		<motion.div
			className={`block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ease-in-out ${accentClass} cursor-default group`}
			variants={{
				hidden: { opacity: 0, y: 16 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
			}}
			whileHover={{ y: -6 }}
			whileTap={{ y: -4 }}>
			<div className="flex items-center justify-center mb-3 transition-transform duration-200 ease-in-out group-hover:scale-110">
				{icon}
			</div>
			<h3 className="font-display text-base font-semibold text-primary mb-1.5 text-center">{title}</h3>
			<p className="text-[0.85rem] text-muted leading-normal text-center">{description}</p>
		</motion.div>
	);
}
