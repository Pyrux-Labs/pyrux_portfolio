// ═══════════════════════════════════════════════
// CompanyCard — for carousels and grids
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building2, Quote } from "lucide-react";
import Image from "next/image";
import type { Company } from "@/types";
import { cdnFull } from "@/lib/cloudinary";

interface CompanyCardProps {
	company: Company;
	onClick?: () => void;
	priority?: boolean;
	headingLevel?: 2 | 3;
}

function CompanyLogo({ company, size, priority = false }: { company: Company; size: number; priority?: boolean }) {
	const logos = company.logoDark
		? [
				{ src: cdnFull(company.logo), className: "logo-for-light w-full h-full object-contain" },
				{ src: cdnFull(company.logoDark), className: "logo-for-dark w-full h-full object-contain" },
			]
		: [{ src: cdnFull(company.logo), className: "w-full h-full object-contain" }];

	const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.style.display = "none";
		e.currentTarget.nextElementSibling?.classList.remove("hidden");
	};

	return (
		<div
			className="rounded-full border-2 border-border bg-elevated flex items-center justify-center shrink-0 overflow-hidden"
			style={{ width: size, height: size }}>
			{logos.map(({ src, className }, i) => (
				<Image
					key={src}
					src={src}
					alt={`${company.name} logo`}
					width={size}
					height={size}
					className={className}
					sizes={`${size}px`}
					priority={i === 0 ? priority : undefined}
					loading={i === 0 ? undefined : "eager"}
					onError={!company.logoDark ? handleError : undefined}
				/>
			))}
			{!company.logoDark && <Building2 size={size * 0.4} className="text-coral hidden" />}
		</div>
	);
}

function Testimonial({ text, wrapClass, textClass }: { text: string; wrapClass: string; textClass: string }) {
	return (
		<div className={`flex gap-2 border-t border-border ${wrapClass}`}>
			<Quote size={14} className="text-coral shrink-0 rotate-180 mt-0.5" />
			<p className={`text-[0.8rem] ${textClass}`}>{text}</p>
			<Quote size={14} className="text-coral shrink-0 mt-0.5" />
		</div>
	);
}

export default function CompanyCard({ company, onClick, priority = false, headingLevel = 3 }: CompanyCardProps) {
	const Heading = `h${headingLevel}` as "h2" | "h3";
	const t = useTranslations("CompanyCard");

	const motionProps = {
		onClick,
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		whileHover: { y: -4 },
		whileTap: { scale: 0.98 },
		tabIndex: onClick ? 0 : undefined,
		role: onClick ? ("button" as const) : undefined,
		"aria-label": onClick ? t("viewDetailsAria", { name: company.name }) : undefined,
		onKeyDown: onClick
			? (e: React.KeyboardEvent) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onClick();
					}
				}
			: undefined,
	};

	const baseClass =
		"rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary transition-[border-color,box-shadow] duration-200 ease-in-out" +
		(onClick ? " cursor-pointer hover:border-coral hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]" : "");

	return (
		<motion.div
			className={`${baseClass} flex flex-col gap-2 p-4 h-56 overflow-hidden shrink-0 min-w-72 max-w-80 max-[480px]:min-w-64 max-[480px]:max-w-72 max-[480px]:p-3`}
			{...motionProps}>
			<div className="flex items-start gap-3 flex-1 mt-2">
				<div className="flex flex-col gap-1.5 min-w-0 flex-1">
					<Heading className="font-display text-[0.95rem] font-semibold text-primary leading-tight line-clamp-1">
						{company.name}
					</Heading>
					<p className="text-[0.8rem] text-secondary leading-relaxed line-clamp-2">{company.summary}</p>
					<p className="text-[0.7rem] text-muted italic leading-normal line-clamp-1">{company.workDescription}</p>
				</div>
				<div className="flex items-center justify-center shrink-0">
					<CompanyLogo company={company} size={52} priority={priority} />
				</div>
			</div>
			{company.testimonial && (
				<Testimonial
					text={company.testimonial}
					wrapClass="items-center pt-4 mb-2"
					textClass="text-primary font-medium leading-relaxed line-clamp-2"
				/>
			)}
		</motion.div>
	);
}
