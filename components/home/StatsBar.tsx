// ═══════════════════════════════════════════════
// Stats Bar — métricas del estudio
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { getProjectsByCreator } from "@/data/projects";
import { companies } from "@/data/companies";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

export default function StatsBar() {
	const t = useTranslations("StatsBar");
	const { locale } = useLocale();

	const projectCount = getProjectsByCreator("pyrux", locale).length;
	const clientCount = companies[locale].length;
	const yearsActive = Math.max(1, new Date().getFullYear() - 2025);

	const stats = [
		{ value: projectCount, label: t("projects") },
		{ value: clientCount, label: t("clients") },
		{ value: yearsActive, label: t("years") },
	];

	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			className="grid grid-cols-3 border-y border-border py-8 mb-14">
			{stats.map((stat, i) => (
				<motion.div
					key={i}
					variants={fadeUpItem}
					className={`flex flex-col items-center gap-1.5 ${i > 0 ? "border-l border-border" : ""}`}>
					<span className="font-display text-4xl min-[481px]:text-5xl font-bold text-coral">
						{stat.value}
					</span>
					<span className="text-text-secondary text-[0.75rem] min-[481px]:text-sm text-center px-3 leading-snug">
						{stat.label}
					</span>
				</motion.div>
			))}
		</motion.div>
	);
}
