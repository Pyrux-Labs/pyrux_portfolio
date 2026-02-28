// ═══════════════════════════════════════════════
// Card de Empresa — para carousels y grids
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import type { Company } from "@/types";

interface CompanyCardProps {
	company: Company;
	onClick?: () => void;
	index?: number;
}

export default function CompanyCard({
	company,
	onClick,
	index = 0,
}: CompanyCardProps) {
	return (
		<motion.div
			className="flex items-start gap-3 p-4 min-w-72 max-w-80 max-[480px]:min-w-64 max-[480px]:max-w-72 max-[480px]:p-3 rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary transition-all duration-250 ease-in-out shrink-0 cursor-pointer hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
			onClick={onClick}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.05, duration: 0.4 }}
			whileHover={{ y: -4 }}
			tabIndex={0}
			role="button"
			aria-label={`Ver detalles de ${company.name}`}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick?.();
				}
			}}>
			{/* Icono de empresa */}
			<div className="w-11 h-11 max-[480px]:w-9 max-[480px]:h-9 rounded-full shrink-0 border-2 border-border bg-elevated flex items-center justify-center">
				<Building2 size={20} className="text-coral" />
			</div>

			<div className="flex flex-col gap-1.5 min-w-0">
				{/* Nombre */}
				<h3 className="font-display text-[0.95rem] font-semibold text-primary">
					{company.name}
				</h3>

				{/* Resumen */}
				<p className="text-[0.85rem] text-secondary leading-normal line-clamp-2">
					{company.summary}
				</p>

				{/* Testimonial preview */}
				{company.testimonial && (
					<p className="text-[0.8rem] text-muted italic line-clamp-1 mt-1">
						&ldquo;{company.testimonial}&rdquo;
					</p>
				)}
			</div>
		</motion.div>
	);
}
