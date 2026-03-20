// ═══════════════════════════════════════════════
// CompanyCard — for carousels and grids
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building2, Quote } from "lucide-react";
import Image from "next/image";
import type { Company } from "@/types";

interface CompanyCardProps {
	company: Company;
	onClick?: () => void;
	fullWidth?: boolean;
}

export default function CompanyCard({ company, onClick, fullWidth = false }: CompanyCardProps) {
	const t = useTranslations("CompanyCard");
	return (
		<motion.div
			className={`flex flex-col gap-3 p-5 rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary cursor-pointer transition-[border-color,box-shadow] duration-200 ease-in-out shrink-0 hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] ${
				fullWidth
					? "w-full"
					: "min-w-72 max-w-80 h-56 overflow-hidden max-[480px]:min-w-64 max-[480px]:max-w-72"
			}`}
			onClick={onClick}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			whileHover={{ y: -4 }}
			whileTap={{ scale: 0.98 }}
			tabIndex={0}
			role="button"
			aria-label={t("viewDetailsAria", { name: company.name })}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick?.();
				}
			}}>
			{/* Logo + name */}
			<div className="flex items-center gap-3">
				<div className="w-11 h-11 rounded-full border-2 border-border bg-elevated flex items-center justify-center shrink-0 overflow-hidden">
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
				<h3 className="font-display text-[1.05rem] font-semibold text-primary">
					{company.name}
				</h3>
			</div>

			{/* Summary */}
			<p className="text-[0.9rem] text-secondary leading-relaxed line-clamp-2">
				{company.summary}
			</p>

			{/* Work description */}
			<p className="text-[0.85rem] text-muted leading-relaxed line-clamp-2">
				{company.workDescription}
			</p>

			{/* Testimonial */}
			{company.testimonial && (
				<div className="flex items-start gap-2 pt-2 border-t border-border">
					<Quote size={14} className="text-coral shrink-0 mt-0.5 rotate-180" />
					<p className="text-[0.8rem] text-muted italic line-clamp-1">
						{company.testimonial}
					</p>
					<Quote size={14} className="text-coral shrink-0 mt-0.5" />
				</div>
			)}
		</motion.div>
	);
}
