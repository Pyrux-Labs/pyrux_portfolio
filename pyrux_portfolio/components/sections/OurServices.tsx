// ═══════════════════════════════════════════════
// What We Do section — Pyrux services
// ═══════════════════════════════════════════════

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import Section from "@/components/ui/Section";
import { services } from "@/data/services";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { staggerContainer } from "@/lib/animations";

const cardVariants = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: "easeOut" as const },
	},
};

export default function OurServices() {
	const t = useTranslations("OurServices");
	const { locale } = useLocale();
	const localeServices = services[locale];
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0 });
	return (
		<Section
			title={t("sectionTitle")}
			viewAllHref="/pricing"
			viewAllLabel={t("viewAllLabel")}>
			<motion.div
				ref={ref}
				key={locale}
				className="grid grid-cols-1 min-[481px]:grid-cols-2 sm:grid-cols-3 gap-4"
				variants={staggerContainer}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}>
				{localeServices.map((f) => (
					<motion.div
						key={f.title}
						className="block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)] cursor-default group"
						variants={cardVariants}
						whileHover={{ y: -6 }}
						whileTap={{ y: -4 }}>
						<div className="flex items-center justify-center mb-3 transition-transform duration-200 ease-in-out group-hover:scale-110">
							<ServiceIcon iconName={f.icon} className="text-coral" />
						</div>
						<h3 className="font-display text-base font-semibold text-primary mb-1.5 text-center">
							{f.title}
						</h3>
						<p className="text-[0.85rem] text-muted leading-normal text-center">
							{f.desc}
						</p>
					</motion.div>
				))}
			</motion.div>
		</Section>
	);
}
