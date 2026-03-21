"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { X, ArrowRight } from "lucide-react";
import type { PlanColor, ServicePackage } from "@/types/pricing.types";
import { fadeUpItem } from "@/lib/animations";

const colorTokens: Record<
	PlanColor,
	{
		border: string;
		shadow: string;
		text: string;
		bg: string;
		borderHover: string;
	}
> = {
	growth: {
		border: "border-[var(--pkg-growth)]",
		shadow: "shadow-[0_0_30px_var(--pkg-growth-soft)]",
		text: "text-[var(--pkg-growth)]",
		bg: "bg-[var(--pkg-growth-soft)]",
		borderHover: "hover:border-[var(--pkg-growth-mid)]",
	},
	pro: {
		border: "border-coral",
		shadow: "shadow-[0_0_30px_var(--shadow-coral-soft)]",
		text: "text-coral",
		bg: "bg-[var(--color-coral-soft-bg)]",
		borderHover: "hover:border-coral/40",
	},
	business: {
		border: "border-[var(--pkg-business)]",
		shadow: "shadow-[0_0_30px_var(--pkg-business-soft)]",
		text: "text-[var(--pkg-business)]",
		bg: "bg-[var(--pkg-business-soft)]",
		borderHover: "hover:border-[var(--pkg-business-mid)]",
	},
	custom: {
		border: "border-[var(--pkg-custom)]",
		shadow: "shadow-[0_0_30px_var(--pkg-custom-soft)]",
		text: "text-[var(--pkg-custom)]",
		bg: "bg-[var(--pkg-custom-soft)]",
		borderHover: "hover:border-[var(--pkg-custom-mid)]",
	},
};

interface PackageCardProps {
	pkg: ServicePackage;
	isSelected: boolean;
	onClick: () => void;
}

function LegendaryCard({ pkg }: { pkg: ServicePackage }) {
	const t = useTranslations("PackageCard");
	return (
		<motion.div
			variants={fadeUpItem}
			className="relative flex flex-col p-7 rounded-2xl border border-(--pkg-custom) bg-card-strong backdrop-blur-sm animate-legendary-pulse w-full max-w-md min-h-160"
			style={{
				background:
					"radial-gradient(ellipse 80% 60% at 50% 0%, var(--pkg-custom-soft), transparent 70%)",
			}}>
			{/* Title + tagline */}
			<h3 className="font-display text-3xl font-bold text-primary mb-1">
				{pkg.name}
			</h3>
			<p className="text-[0.9rem] text-secondary mb-5 leading-snug">
				{t("customTagline")}
			</p>

			<div className="border-t border-(--pkg-custom)/20" />

			{/* Features */}
			<ul className="flex flex-col gap-2.5 flex-1 mb-6">
				{pkg.features.map((f) => (
					<li
						key={f.text}
						className="flex items-start gap-2 text-[0.9rem] text-secondary">
						<span className="text-(--pkg-custom) mt-0.5 shrink-0">→</span>
						{f.text}
					</li>
				))}
			</ul>

			<div className="border-t border-(--pkg-custom)/20 mb-5" />

			{/* CTA */}
			<a
				href="https://wa.me/5493416941225"
				target="_blank"
				rel="noopener noreferrer"
				onClick={(e) => e.stopPropagation()}
				className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl border border-(--pkg-custom) bg-(--pkg-custom-soft) text-(--pkg-custom) font-semibold text-[0.95rem] hover:bg-(--pkg-custom) hover:text-white transition-all duration-200 no-underline group">
				{t("customCta")}
				<ArrowRight
					size={16}
					className="transition-transform duration-200 group-hover:translate-x-1"
				/>
			</a>
		</motion.div>
	);
}

export default function PackageCard({
	pkg,
	isSelected,
	onClick,
}: PackageCardProps) {
	const t = useTranslations("PackageCard");
	if (pkg.planColor === "custom") {
		return <LegendaryCard pkg={pkg} />;
	}

	const c = colorTokens[pkg.planColor];

	return (
		<motion.div
			variants={fadeUpItem}
			onClick={onClick}
			className={`relative flex flex-col p-5 rounded-xl border backdrop-blur-sm cursor-pointer transition-[border-color,box-shadow] duration-200 min-h-160 h-full
				${isSelected ? `${c.border} ${c.shadow}` : `border-border ${c.borderHover}`}
				bg-card-strong`}>
			{/* Selected indicator — reserva espacio fijo para evitar salto del título */}
			<div className="h-5 flex justify-end mb-1">
				{isSelected && (
					<span
						className={`text-[0.65rem] font-mono border rounded-full px-2 py-0.5 ${c.text} ${c.bg} border-current/30`}>
						{t("selected")}
					</span>
				)}
			</div>

			<h3 className="font-display text-xl font-bold text-primary mb-2">
				{pkg.name}
			</h3>

			<div className="mb-2">
				<span className={`font-display text-2xl font-bold ${c.text}`}>
					{pkg.price}
				</span>
			</div>

			{/* Delivery time */}
			<div className="text-[0.8rem] text-muted mb-2">
				{t("deliveryLabel")}{" "}
				<span className={`font-semibold ${c.text}`}>{pkg.deliveryTime}</span>
			</div>

			{/* Maintenance badge */}
			{pkg.maintenancePrice && (
				<span
					className={`inline-flex self-start px-2.5 py-1 rounded-full border text-[0.7rem] font-medium mb-4 ${c.text} ${c.bg} border-current/30`}>
					{t("maintenancePrefix")} {pkg.maintenancePrice}
				</span>
			)}

			<div className="border-t border-border my-3" />

			<ul className="flex flex-col gap-2 flex-1">
				{pkg.features.map((f) => (
					<li
						key={f.text}
						className={`flex items-start gap-2 text-[0.85rem] ${f.included ? "text-secondary" : "text-muted line-through opacity-50"}`}>
						{f.included ? (
							<span className={`mt-0.5 shrink-0 ${c.text}`}>→</span>
						) : (
							<X size={14} className="mt-0.5 shrink-0" />
						)}
						{f.text}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
