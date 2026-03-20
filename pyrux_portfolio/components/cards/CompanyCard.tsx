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

function LogoImage({ company }: { company: Company }) {
	return (
		<div className="w-14 h-14 rounded-full border-2 border-border bg-elevated flex items-center justify-center shrink-0 overflow-hidden">
			{company.logoDark ? (
				<>
					<Image
						src={company.logo}
						alt={`${company.name} logo`}
						width={56}
						height={56}
						className="logo-for-light w-full h-full object-contain"
						sizes="56px"
					/>
					<Image
						src={company.logoDark}
						alt={`${company.name} logo`}
						width={56}
						height={56}
						className="logo-for-dark w-full h-full object-contain"
						sizes="56px"
					/>
				</>
			) : (
				<>
					<Image
						src={company.logo}
						alt={`${company.name} logo`}
						width={56}
						height={56}
						className="w-full h-full object-contain"
						sizes="56px"
						onError={(e) => {
							e.currentTarget.style.display = "none";
							e.currentTarget.nextElementSibling?.classList.remove("hidden");
						}}
					/>
					<Building2 size={22} className="text-coral hidden" />
				</>
			)}
		</div>
	);
}

export default function CompanyCard({ company, onClick, fullWidth = false }: CompanyCardProps) {
	const t = useTranslations("CompanyCard");
	return (
		<motion.div
			className={`rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary cursor-pointer transition-[border-color,box-shadow] duration-200 ease-in-out shrink-0 hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] ${
				fullWidth
					? "flex flex-col gap-3 p-5 w-full"
					: "flex items-center gap-4 p-4 min-w-72 max-w-80 max-[480px]:min-w-64 max-[480px]:max-w-72 max-[480px]:p-3"
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
			<LogoImage company={company} />

			{fullWidth ? (
				/* Grid layout (/clients page) — detailed */
				<>
					<h3 className="font-display text-[1.05rem] font-semibold text-primary">
						{company.name}
					</h3>
					<p className="text-[0.9rem] text-secondary leading-relaxed line-clamp-2">
						{company.summary}
					</p>
					<p className="text-[0.85rem] text-muted leading-relaxed line-clamp-2">
						{company.workDescription}
					</p>
					{company.testimonial && (
						<div className="flex items-start gap-2 pt-2 border-t border-border">
							<Quote size={14} className="text-coral shrink-0 mt-0.5 rotate-180" />
							<p className="text-[0.8rem] text-muted italic line-clamp-1">
								{company.testimonial}
							</p>
							<Quote size={14} className="text-coral shrink-0 mt-0.5" />
						</div>
					)}
				</>
			) : (
				/* Carousel layout — compact horizontal */
				<div className="flex flex-col gap-1 min-w-0">
					<h3 className="font-display text-[0.95rem] font-semibold text-primary leading-tight">
						{company.name}
					</h3>
					<p className="text-[0.8rem] text-secondary leading-normal line-clamp-2">
						{company.summary}
					</p>
				</div>
			)}
		</motion.div>
	);
}
