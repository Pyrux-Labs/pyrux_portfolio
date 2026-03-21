"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import BackLink from "@/components/ui/BackLink";
import PageHeading from "@/components/ui/PageHeading";
import { fadeUpHeader } from "@/lib/animations";

interface BrowseGridProps<T extends { id: string }> {
	items: T[];
	title: string;
	subtitle: string;
	backLabel: string;
	gridClass: string;
	stagger: number;
	renderCard: (item: T, onSelect: (item: T) => void) => ReactNode;
	renderModal: (selected: T | null, onClose: () => void) => ReactNode;
}

const gridVariants = (stagger: number) => ({
	hidden: {},
	visible: { transition: { staggerChildren: stagger } },
});

export default function BrowseGrid<T extends { id: string }>({
	items,
	title,
	subtitle,
	backLabel,
	gridClass,
	stagger,
	renderCard,
	renderModal,
}: BrowseGridProps<T>) {
	const [selected, setSelected] = useState<T | null>(null);

	return (
		<>
			<main className="max-w-content mx-auto flex-1 flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				<motion.div className="mb-8" variants={fadeUpHeader} initial="hidden" animate="visible">
					<BackLink label={backLabel} />
					<PageHeading title={title} subtitle={subtitle} />
				</motion.div>

				<motion.div
					className={`grid ${gridClass}`}
					variants={gridVariants(stagger)}
					initial="hidden"
					animate="visible">
					{items.map((item) => renderCard(item, setSelected))}
				</motion.div>
			</main>

			{renderModal(selected, () => setSelected(null))}
		</>
	);
}
