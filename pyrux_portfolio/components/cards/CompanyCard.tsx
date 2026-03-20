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

function CompanyLogo({ company, size }: { company: Company; size: number }) {
	return (
		<div
			className="rounded-full border-2 border-border bg-elevated flex items-center justify-center shrink-0 overflow-hidden"
			style={{ width: size, height: size }}>
			{company.logoDark ? (
				<>
					<Image
						src={company.logo}
						alt={`${company.name} logo`}
						width={size}
						height={size}
						className="logo-for-light w-full h-full object-contain"
						sizes={`${size}px`}
					/>
					<Image
						src={company.logoDark}
						alt={`${company.name} logo`}
						width={size}
						height={size}
						className="logo-for-dark w-full h-full object-contain"
						sizes={`${size}px`}
					/>
				</>
			) : (
				<>
					<Image
						src={company.logo}
						alt={`${company.name} logo`}
						width={size}
						height={size}
						className="w-full h-full object-contain"
						sizes={`${size}px`}
						onError={(e) => {
							e.currentTarget.style.display = "none";
							e.currentTarget.nextElementSibling?.classList.remove("hidden");
						}}
					/>
					<Building2 size={size * 0.4} className="text-coral hidden" />
				</>
			)}
		</div>
	);
}

export default function CompanyCard({ company, onClick, fullWidth = false }: CompanyCardProps) {
	const t = useTranslations("CompanyCard");

	const motionProps = {
		onClick,
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		whileHover: { y: -4 },
		whileTap: { scale: 0.98 },
		tabIndex: 0,
		role: "button" as const,
		"aria-label": t("viewDetailsAria", { name: company.name }),
		onKeyDown: (e: React.KeyboardEvent) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				onClick?.();
			}
		},
	};

	const baseClass =
		"rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary cursor-pointer transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]";

	if (fullWidth) {
		/* ── /clients page — layout vertical con todo el contenido ── */
		return (
			<motion.div className={`${baseClass} flex flex-col gap-3 p-5 w-full`} {...motionProps}>
				<div className="flex items-center gap-3">
					<CompanyLogo company={company} size={44} />
					<h3 className="font-display text-[1.05rem] font-semibold text-primary">
						{company.name}
					</h3>
				</div>
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
			</motion.div>
		);
	}

	/* ── Carousel — h-56, nombre+desc a la izquierda, logo a la derecha ── */
	return (
		<motion.div
			className={`${baseClass} flex flex-col gap-2 p-4 h-56 overflow-hidden shrink-0 min-w-72 max-w-80 max-[480px]:min-w-64 max-[480px]:max-w-72 max-[480px]:p-3`}
			{...motionProps}>
			{/* Sección superior: texto izquierda / logo derecha */}
			<div className="flex items-start gap-3 flex-1">
				{/* Izquierda: nombre + descripción */}
				<div className="flex flex-col gap-1.5 min-w-0 flex-1">
					<h3 className="font-display text-[0.95rem] font-semibold text-primary leading-tight line-clamp-1">
						{company.name}
					</h3>
					<p className="text-[0.8rem] text-secondary leading-relaxed line-clamp-2">
						{company.summary}
					</p>
					<p className="text-[0.7rem] text-muted italic leading-normal line-clamp-1">
						{company.workDescription}
					</p>
				</div>
				{/* Derecha: logo centrado */}
				<div className="flex items-center justify-center shrink-0">
					<CompanyLogo company={company} size={52} />
				</div>
			</div>

			{/* Comentario */}
			{company.testimonial && (
				<div className="flex items-center gap-2 pt-2 border-t border-border">
					<Quote size={14} className="text-coral shrink-0 rotate-180" />
					<p className="text-[0.8rem] text-white font-medium leading-relaxed line-clamp-2">
						{company.testimonial}
					</p>
					<Quote size={14} className="text-coral shrink-0" />
				</div>
			)}
		</motion.div>
	);
}
