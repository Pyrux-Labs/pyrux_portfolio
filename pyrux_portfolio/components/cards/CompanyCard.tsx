// ═══════════════════════════════════════════════
// CompanyCard — for carousels and grids
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building2 } from "lucide-react";
import Image from "next/image";
import type { Company } from "@/types";

interface CompanyCardProps {
	company: Company;
	onClick?: () => void;
}

export default function CompanyCard({ company, onClick }: CompanyCardProps) {
	const t = useTranslations("CompanyCard");
	return (
		<motion.div
			className="flex items-start gap-3 p-4 min-w-72 max-w-80 h-40 overflow-hidden max-[480px]:min-w-64 max-[480px]:max-w-72 max-[480px]:p-3 rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary transition-[border-color,box-shadow] duration-200 ease-in-out shrink-0 cursor-pointer hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
			onClick={onClick}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			whileHover={{ y: -2 }}
			tabIndex={0}
			role="button"
			aria-label={t("viewDetailsAria", { name: company.name })}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick?.();
				}
			}}>
			{/* Company icon/logo */}
			<div className="w-11 h-11 max-[480px]:w-9 max-[480px]:h-9 rounded-full shrink-0 border-2 border-border bg-elevated flex items-center justify-center overflow-hidden">
				{company.logoDark ? (
					<>
						<Image
							src={company.logo}
							alt={`${company.name} logo`}
							width={44}
							height={44}
							className="logo-for-light w-full h-full object-contain"
							sizes="44px"
						/>
						<Image
							src={company.logoDark}
							alt={`${company.name} logo`}
							width={44}
							height={44}
							className="logo-for-dark w-full h-full object-contain"
							sizes="44px"
						/>
					</>
				) : (
					<>
						<Image
							src={company.logo}
							alt={`${company.name} logo`}
							width={44}
							height={44}
							className="w-full h-full object-contain"
							sizes="44px"
							onError={(e) => {
								e.currentTarget.style.display = "none";
								e.currentTarget.nextElementSibling?.classList.remove("hidden");
							}}
						/>
						<Building2 size={20} className="text-coral hidden" />
					</>
				)}
			</div>

			<div className="flex flex-col gap-1.5 min-w-0">
				{/* Company name */}
				<h3 className="font-display text-[0.95rem] font-semibold text-primary">
					{company.name}
				</h3>

				{/* Company summary */}
				<p className="text-[0.85rem] text-secondary leading-normal line-clamp-2">
					{company.summary}
				</p>

				{/* Company testimonial preview */}
				{company.testimonial && (
					<p className="text-[0.8rem] text-muted italic line-clamp-1 mt-1">
						&ldquo;{company.testimonial}&rdquo;
					</p>
				)}
			</div>
		</motion.div>
	);
}
