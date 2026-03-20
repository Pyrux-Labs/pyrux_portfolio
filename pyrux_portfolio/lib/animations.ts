import type { Variants } from "framer-motion";

// Stagger containers — orchestrate children, no own opacity transition
export const staggerContainer: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

export const staggerContainerFast: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

// Fade-up item — standard card/item entrance
export const fadeUpItem: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

// Fade-up header — slightly slower, used for section/page headings
export const fadeUpHeader: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};
