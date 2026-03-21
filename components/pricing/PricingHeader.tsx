"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeUpHeader } from "@/lib/animations";

export default function PricingHeader() {
	const t = useTranslations("PricingPage");
	return (
		<motion.div className="mb-14" variants={fadeUpHeader} initial="hidden" animate="visible">
			<h1 className="font-display text-3xl font-bold text-primary mb-4">
				{t("heading")} <br />
				<span className="text-coral">{t("headingAccent")}</span>
			</h1>
			<p className="text-[0.8rem] text-muted font-mono tracking-wider uppercase mb-3">{t("tagline")}</p>
			<p className="text-[1rem] text-secondary max-w-140 leading-relaxed mb-6">{t("description")}</p>
		</motion.div>
	);
}
