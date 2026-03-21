"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import Section from "@/components/ui/Section";
import FAQAccordion from "./FAQAccordion";
import { faqItems } from "@/data/faq";

const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

export default function FAQSection() {
	const t = useTranslations("FAQSection");
	const { locale } = useLocale();
	const items = faqItems[locale];
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0 });

	return (
		<Section title={t("sectionTitle")}>
			<motion.div
				ref={ref}
				key={locale}
				className="flex flex-col gap-3"
				variants={gridVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}>
				{items.map((item, index) => (
					<motion.div key={item.question} variants={cardVariants} custom={index}>
						<FAQAccordion item={item} />
					</motion.div>
				))}
			</motion.div>
		</Section>
	);
}
