// ═══════════════════════════════════════════════
// What We Do section — Pyrux services
// ═══════════════════════════════════════════════

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";
import { staggerContainer } from "@/lib/animations";

export default function Services() {
	const t = useTranslations("OurServices");
	const { locale } = useLocale();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0 });

	return (
		<Section title={t("sectionTitle")} viewAllHref="/pricing" viewAllLabel={t("viewAllLabel")}>
			<motion.div
				ref={ref}
				key={locale}
				className="grid grid-cols-1 min-[481px]:grid-cols-2 sm:grid-cols-3 gap-4"
				variants={staggerContainer}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}>
				{services[locale].map((f) => (
					<FeatureCard
						key={f.title}
						title={f.title}
						description={f.desc}
						icon={<ServiceIcon iconName={f.icon} className="text-coral" />}
						accentClass="hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
					/>
				))}
			</motion.div>
		</Section>
	);
}
