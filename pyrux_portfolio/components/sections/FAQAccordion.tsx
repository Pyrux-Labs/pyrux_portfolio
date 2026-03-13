"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types/pricing.types";

interface FAQAccordionProps {
	item: FAQItem;
}

export default function FAQAccordion({ item }: FAQAccordionProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="border border-border rounded-xl overflow-hidden">
			<button
				onClick={() => setOpen(!open)}
				className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left bg-card cursor-pointer hover:bg-interactive-hover"
				aria-expanded={open}>
				<span className="font-display text-[0.95rem] font-semibold text-primary">
					{item.question}
				</span>
				<motion.span
					className="shrink-0 text-coral"
					animate={{ rotate: open ? 180 : 0 }}
					transition={{ duration: 0.3 }}>
					<ChevronDown size={18} />
				</motion.span>
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}>
						<div className="px-5 pb-4 text-[0.9rem] text-secondary leading-relaxed">
							{item.answer}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
