"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import Section from "@/components/ui/Section";
import FAQAccordion from "./FAQAccordion";
import { faqItems } from "@/data/faq";
import { staggerContainerFast, fadeUpItem } from "@/lib/animations";

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
				variants={staggerContainerFast}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}>
				{items.map((item, index) => (
					<motion.div key={item.question} variants={fadeUpItem} custom={index}>
						<FAQAccordion item={item} />
					</motion.div>
				))}
			</motion.div>
		</Section>
	);
}
