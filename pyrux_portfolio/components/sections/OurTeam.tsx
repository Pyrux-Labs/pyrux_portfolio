// ═══════════════════════════════════════════════
//
// Our team section
// ═══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import Section from "@/components/ui/Section";
import CreatorModal from "@/components/modals/CreatorModal";
import { creators } from "@/data/creators";
import Image from "next/image";
import type { Creator } from "@/types";

// Animation variants
const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
	}),
};

export default function OurTeam() {
	const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

	return (
		<>
			<Section title="Nuestro Equipo">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{creators.map((creator, i) => (
						<motion.div
							key={creator.id}
							className="group flex flex-col items-center gap-4 px-7 py-6 rounded-2xl border border-border bg-card-strong backdrop-blur-xl text-primary text-center cursor-pointer transition-[border-color,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							custom={i}
							onClick={() => setSelectedCreator(creator)}
							role="button"
							tabIndex={0}
							aria-label={`Ver perfil de ${creator.name}`}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									setSelectedCreator(creator);
								}
							}}>
							{/* Profile image */}
							<div className="relative">
								<Image
									src={creator.image}
									alt={creator.name}
									width={64}
									height={64}
									className="w-16 h-16 rounded-full"
								/>
							</div>

							{/* Name */}
							<span className="font-display text-[1.1rem] font-semibold text-primary tracking-[0.02em]">
								{creator.name}
							</span>

							{/* Role */}
							<span className="text-[0.85rem] text-coral font-medium">
								{creator.role}
							</span>

							{/* Bio short */}
							<p className="text-[0.85rem] text-secondary leading-normal line-clamp-3">
								{creator.bio}
							</p>

							{/* Click indicator */}
							<span className="text-[0.8rem] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
								Ver perfil completo →
							</span>
						</motion.div>
					))}
				</div>
			</Section>

			<CreatorModal
				creator={selectedCreator}
				isOpen={selectedCreator !== null}
				onClose={() => setSelectedCreator(null)}
			/>
			<Toaster
				position="bottom-center"
				toastOptions={{
					style: {
						background: "var(--bg-elevated)",
						color: "var(--text-primary)",
						border: "1px solid var(--border-subtle)",
					},
				}}
			/>
		</>
	);
}
