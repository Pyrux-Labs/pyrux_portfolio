"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import FAQAccordion from "./FAQAccordion";
import type { FAQItem } from "@/types/pricing.types";

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

interface FAQSectionProps {
	items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
	return (
		<Section className="mb-14" title="Preguntas frecuentes">
			<motion.div
				className="flex flex-col gap-3"
				variants={gridVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}>
				{items.map((item, index) => (
					<motion.div
						key={item.question}
						variants={cardVariants}
						custom={index}>
						<FAQAccordion item={item} />
					</motion.div>
				))}
			</motion.div>
		</Section>
	);
}
