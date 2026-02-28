// ═══════════════════════════════════════════════
// Sección Nuestro Equipo — cards de creadores
// ═══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import CreatorModal from "@/components/modals/CreatorModal";
import { creators } from "@/data/creators";
import { FolderOpen } from "lucide-react";
import type { Creator } from "@/types";

// Variantes de animación
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
							className="group flex flex-col items-center gap-4 px-7 py-6 rounded-2xl border border-border bg-card-strong backdrop-blur-xl text-primary transition-all duration-250 ease-in-out text-center cursor-pointer hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							custom={i}
							whileHover={{ y: -6 }}
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
							{/* Icono de carpeta */}
							<div className="relative">
								<FolderOpen
									size={32}
									className="text-coral transition-transform duration-300 group-hover:scale-110"
								/>
							</div>

							{/* Nombre */}
							<span className="font-display text-[1.1rem] font-semibold text-primary tracking-[0.02em]">
								{creator.name}
							</span>

							{/* Rol */}
							<span className="text-[0.85rem] text-coral font-medium">
								{creator.role}
							</span>

							{/* Bio corta */}
							<p className="text-[0.85rem] text-secondary leading-normal line-clamp-3">
								{creator.bio}
							</p>

							{/* Indicador de click */}
							<span className="text-[0.8rem] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
								Click para ver perfil →
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
		</>
	);
}
