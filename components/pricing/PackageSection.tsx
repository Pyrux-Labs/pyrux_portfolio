"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { MessageCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import PackageCard from "@/components/pricing/PackageCard";
import PackageCarousel from "@/components/pricing/PackageCarousel";
import MaintenanceGrid from "@/components/pricing/MaintenanceGrid";
import { packages } from "@/data/packages";
import type { PlanCategory, PlanColor } from "@/types/pricing.types";
import { staggerContainerFast } from "@/lib/animations";
import { gtag } from "@/lib/gtag";

const ctaColorTokens: Record<PlanColor, { text: string; border: string; bg: string }> = {
	growth: {
		text: "text-[var(--pkg-growth)]",
		border: "border-[var(--pkg-growth)]",
		bg: "bg-[var(--pkg-growth-soft)]",
	},
	pro: {
		text: "text-coral",
		border: "border-coral",
		bg: "bg-[var(--color-gold-tint)]",
	},
	business: {
		text: "text-[var(--pkg-business)]",
		border: "border-[var(--pkg-business)]",
		bg: "bg-[var(--pkg-business-soft)]",
	},
	custom: {
		text: "text-[var(--pkg-custom)]",
		border: "border-[var(--pkg-custom)]",
		bg: "bg-[var(--pkg-custom-soft)]",
	},
};

export default function PackageSection() {
	const t = useTranslations("PricingPage");
	const tMaint = useTranslations("MaintenanceGrid");
	const { locale } = useLocale();
	const [selectedCategory, setSelectedCategory] = useState<PlanCategory>("estandar");
	const [selectedPkg, setSelectedPkg] = useState<number>(0);

	const localePackages = packages[locale];

	const TABS: { id: PlanCategory; label: string }[] = [
		{ id: "estandar", label: t("tabStandard") },
		{ id: "ecommerce", label: t("tabEcommerce") },
		{ id: "personalizado", label: t("tabCustom") },
	];

	const visiblePackages = localePackages.filter((p) => p.category === selectedCategory);
	const activePkg = visiblePackages[selectedPkg] ?? visiblePackages[0];

	function handleCategoryChange(cat: PlanCategory) {
		setSelectedCategory(cat);
		setSelectedPkg(0);
	}

	return (
		<>
			{/* Category toggle */}
			<div className="flex gap-1 p-1 rounded-xl border border-border bg-card w-fit mb-8 self-center">
				{TABS.map((tab) => (
					<button
						key={tab.id}
						onClick={() => handleCategoryChange(tab.id)}
						className={`px-4 py-1.5 rounded-lg text-[0.85rem] font-medium transition-all duration-200 cursor-pointer
							${selectedCategory === tab.id ? "bg-coral text-white shadow-sm" : "text-primary hover:text-white hover:bg-coral/20"}`}>
						{tab.label}
					</button>
				))}
			</div>

			{/* Packages */}
			<Section id="paquetes" className="mb-6" title={t("packagesTitle")}>
				{selectedCategory !== "personalizado" && (
					<PackageCarousel
						packages={visiblePackages}
						selectedPkg={selectedPkg}
						onSelect={setSelectedPkg}
						animKey={`mobile-carousel-${selectedCategory}`}
					/>
				)}
				<motion.div
					key={`${selectedCategory}-${locale}`}
					className={
						selectedCategory === "personalizado"
							? "flex justify-center"
							: "hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
					}
					variants={staggerContainerFast}
					initial="hidden"
					animate="visible">
					{visiblePackages.map((pkg, idx) => (
						<PackageCard
							key={`${pkg.category}-${pkg.number}`}
							pkg={pkg}
							isSelected={selectedPkg === idx}
							onClick={() => {
						setSelectedPkg(idx);
						gtag.selectPricingPlan(pkg.name, pkg.category);
					}}
						/>
					))}
				</motion.div>
			</Section>

			{/* CTA bar */}
			{selectedCategory !== "personalizado" && activePkg && (
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
					className={`flex flex-wrap items-center justify-between gap-4 mb-10 px-5 py-4 rounded-xl border backdrop-blur-sm ${ctaColorTokens[activePkg.planColor].border} ${ctaColorTokens[activePkg.planColor].bg}`}>
					<div className="flex flex-col min-[481px]:flex-row min-[481px]:items-center gap-1 min-[481px]:gap-3">
						<span className="text-[0.8rem] text-secondary">{t("selectedPlan")}</span>
						<span className={`font-display font-bold text-[1rem] ${ctaColorTokens[activePkg.planColor].text}`}>
							{activePkg.name}
						</span>
					</div>
					<a
						href={`https://wa.me/5493416941225?text=${encodeURIComponent(t("whatsAppMessage", { name: activePkg.name }))}`}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => gtag.clickWhatsAppPlan(activePkg.name)}
						className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-[0.85rem] font-semibold transition-all duration-200 shrink-0 w-full min-[400px]:w-auto no-underline hover:brightness-110 hover:scale-[1.02]
								${ctaColorTokens[activePkg.planColor].text}
								${ctaColorTokens[activePkg.planColor].border}
								${ctaColorTokens[activePkg.planColor].bg}`}>
						<MessageCircle size={15} />
						{t("ctaWhatsApp")}
					</a>
				</motion.div>
			)}

			{/* Maintenance */}
			{activePkg && activePkg.maintenanceCards.length > 0 && (
				<Section
					accentClassName={`${ctaColorTokens[activePkg.planColor].text} font-bold`}
					titleNode={
						<span className="flex flex-col leading-tight">
							<span>{tMaint("heading")}</span>
							<span className={`text-[1rem] font-normal ${ctaColorTokens[activePkg.planColor].text}`}>
								{activePkg.name}
							</span>
						</span>
					}>
					<MaintenanceGrid
						cards={activePkg.maintenanceCards}
						animKey={selectedPkg + visiblePackages.indexOf(activePkg) + (locale === "en" ? 1000 : 0)}
						planColor={activePkg.planColor}
					/>
				</Section>
			)}
		</>
	);
}
