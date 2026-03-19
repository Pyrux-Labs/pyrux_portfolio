"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { ArrowLeft, MessageCircle } from "lucide-react";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";
import PackageCard from "@/components/cards/PackageCard";
import MaintenanceGrid from "@/components/cards/MaintenanceGrid";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import { packages } from "@/data/packages";
import { steps } from "@/data/steps";
import { faqItems } from "@/data/faq";
import type { PlanCategory, PlanColor } from "@/types/pricing.types";

const ctaColorTokens: Record<
	PlanColor,
	{ text: string; border: string; bg: string; glow: string }
> = {
	growth: {
		text: "text-[var(--pkg-growth)]",
		border: "border-[var(--pkg-growth)]",
		bg: "bg-[var(--pkg-growth-soft)]",
		glow: "shadow-[0_0_24px_var(--pkg-growth-soft)]",
	},
	pro: {
		text: "text-coral",
		border: "border-coral",
		bg: "bg-[var(--color-coral-soft-bg)]",
		glow: "shadow-[0_0_24px_var(--shadow-coral-soft)]",
	},
	business: {
		text: "text-[var(--pkg-business)]",
		border: "border-[var(--pkg-business)]",
		bg: "bg-[var(--pkg-business-soft)]",
		glow: "shadow-[0_0_24px_var(--pkg-business-soft)]",
	},
	custom: {
		text: "text-[var(--pkg-custom)]",
		border: "border-[var(--pkg-custom)]",
		bg: "bg-[var(--pkg-custom-soft)]",
		glow: "shadow-[0_0_24px_var(--pkg-custom-soft)]",
	},
};

const headerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

export default function PreciosPageClient() {
	const t = useTranslations("PricingPage");
	const tMaint = useTranslations("MaintenanceGrid");
	const { locale } = useLocale();
	const [selectedCategory, setSelectedCategory] =
		useState<PlanCategory>("estandar");
	const [selectedPkg, setSelectedPkg] = useState<number>(0);
	const carouselRef = useRef<HTMLDivElement>(null);

	const localePackages = packages[locale];
	const localeSteps = steps[locale];
	const localeFaqItems = faqItems[locale];

	const TABS: { id: PlanCategory; label: string }[] = [
		{ id: "estandar", label: t("tabStandard") },
		{ id: "ecommerce", label: t("tabEcommerce") },
		{ id: "personalizado", label: t("tabCustom") },
	];

	const visiblePackages = localePackages.filter(
		(p) => p.category === selectedCategory,
	);
	const activePkg = visiblePackages[selectedPkg] ?? visiblePackages[0];

	function handleCategoryChange(cat: PlanCategory) {
		setSelectedCategory(cat);
		setSelectedPkg(0);
	}

	// Scroll carousel to selectedPkg when it changes
	useEffect(() => {
		if (!carouselRef.current) return;
		// Reset scroll position when category changes, then scroll to selected package
		// Use requestAnimationFrame to ensure DOM has re-rendered with new children
		requestAnimationFrame(() => {
			if (!carouselRef.current) return;
			const children = Array.from(
				carouselRef.current.children,
			) as HTMLElement[];
			if (selectedPkg === 0) {
				carouselRef.current.scrollLeft = 0;
			} else {
				children[selectedPkg]?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "start",
				});
			}
		});
	}, [selectedPkg, selectedCategory]);

	function handleCarouselScroll() {
		if (!carouselRef.current) return;
		const { scrollLeft, clientWidth } = carouselRef.current;
		const children = Array.from(carouselRef.current.children) as HTMLElement[];
		let idx = 0;
		for (let i = 0; i < children.length; i++) {
			if (children[i].offsetLeft <= scrollLeft + clientWidth / 2) idx = i;
		}
		if (idx !== selectedPkg) setSelectedPkg(idx);
	}

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-content mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Header */}
				<motion.div
					className="mb-14"
					variants={headerVariants}
					initial="hidden"
					animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-secondary no-underline mb-6 hover:text-coral">
						<ArrowLeft size={16} />
						{t("backToHome")}
					</Link>

					<h1 className="font-display text-3xl font-bold text-primary mb-4">
						{t("heading")} <br />
						<span className="text-coral">{t("headingAccent")}</span>
					</h1>
					<p className="text-[0.8rem] text-muted font-mono tracking-wider uppercase mb-3">
						{t("tagline")}
					</p>
					<p className="text-[1rem] text-secondary max-w-140 leading-relaxed mb-6">
						{t("description")}
					</p>
				</motion.div>

				{/* Category toggle */}
				<motion.div
					className="flex gap-1 p-1 rounded-xl border border-border bg-card w-fit mb-8 self-center"
					variants={headerVariants}
					initial="hidden"
					animate="visible">
					{TABS.map((tab) => (
						<button
							key={tab.id}
							onClick={() => handleCategoryChange(tab.id)}
							className={`px-4 py-1.5 rounded-lg text-[0.85rem] font-medium transition-all duration-200 cursor-pointer
								${
									selectedCategory === tab.id
										? "bg-coral text-white shadow-sm"
										: "text-secondary hover:text-primary"
								}`}>
							{tab.label}
						</button>
					))}
				</motion.div>

				{/* Paquetes */}
				<Section id="paquetes" className="mb-6" title={t("packagesTitle")}>
					{/* Mobile — carrusel horizontal */}
					{selectedCategory !== "personalizado" && (
						<div className="sm:hidden">
							{/* Re-mount on category change so cards get fresh "visible"
							    propagation — without this, cards added after Section's
							    whileInView (once:true) fires get stuck at opacity:0 */}
							<motion.div
								key={`mobile-carousel-${selectedCategory}`}
								variants={gridVariants}
								initial="hidden"
								animate="visible">
								<div
									ref={carouselRef}
									onScroll={handleCarouselScroll}
									className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
									{visiblePackages.map((pkg, idx) => (
										<div
											key={`${pkg.category}-${pkg.number}`}
											className="snap-start shrink-0 w-[85vw]">
											<PackageCard
												pkg={pkg}
												isSelected={selectedPkg === idx}
												onClick={() => setSelectedPkg(idx)}
											/>
										</div>
									))}
								</div>
							</motion.div>
							{/* Dots */}
							<div className="flex justify-center gap-2 mt-4">
								{visiblePackages.map((_, idx) => (
									<button
										key={idx}
										onClick={() => setSelectedPkg(idx)}
										className={`rounded-full transition-all duration-200 cursor-pointer ${
											selectedPkg === idx
												? `w-5 h-2 ${ctaColorTokens[visiblePackages[idx].planColor].bg} border ${ctaColorTokens[visiblePackages[idx].planColor].border}`
												: "w-2 h-2 bg-border"
										}`}
									/>
								))}
							</div>
						</div>
					)}

					{/* Desktop + mobile personalizado */}
					<motion.div
						key={`${selectedCategory}-${locale}`}
						className={
							selectedCategory === "personalizado"
								? "flex justify-center"
								: "hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
						}
						variants={gridVariants}
						initial="hidden"
						animate="visible">
						{visiblePackages.map((pkg, idx) => (
							<PackageCard
								key={`${pkg.category}-${pkg.number}`}
								pkg={pkg}
								isSelected={selectedPkg === idx}
								onClick={() => setSelectedPkg(idx)}
							/>
						))}
					</motion.div>
				</Section>

				{/* CTA bar — aparece al seleccionar un plan */}
				{selectedCategory !== "personalizado" && activePkg && (
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className={`flex flex-wrap items-center justify-between gap-4 mb-10 px-5 py-4 rounded-xl border backdrop-blur-sm ${ctaColorTokens[activePkg.planColor].border} ${ctaColorTokens[activePkg.planColor].bg}`}>
						<div className="flex flex-col min-[481px]:flex-row min-[481px]:items-center gap-1 min-[481px]:gap-3">
							<span className="text-[0.8rem] text-muted">
								{t("selectedPlan")}
							</span>
							<span
								className={`font-display font-bold text-[1rem] ${ctaColorTokens[activePkg.planColor].text}`}>
								{activePkg.name}
							</span>
						</div>
						<a
							href={`https://wa.me/5493416941225?text=${encodeURIComponent(t("whatsAppMessage", { name: activePkg.name }))}`}
							target="_blank"
							rel="noopener noreferrer"
							className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-[0.85rem] font-semibold transition-all duration-200 shrink-0 w-full min-[400px]:w-auto no-underline hover:brightness-110 hover:scale-[1.02]
									${ctaColorTokens[activePkg.planColor].text}
									${ctaColorTokens[activePkg.planColor].border}
									${ctaColorTokens[activePkg.planColor].bg}`}>
							<MessageCircle size={15} />
							{t("ctaWhatsApp")}
						</a>
					</motion.div>
				)}

				{/* Mantenimiento — solo si el plan tiene cards */}
				{activePkg && activePkg.maintenanceCards.length > 0 && (
					<Section
						className="mb-14"
						accentClassName={`${ctaColorTokens[activePkg.planColor].text} font-bold`}
						titleNode={
							<span className="flex flex-col leading-tight">
								<span>{tMaint("heading")}</span>
								<span
									className={`text-[1rem] font-normal ${ctaColorTokens[activePkg.planColor].text}`}>
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

				{/* Proceso */}
				<ProcessSection steps={localeSteps} />

				{/* FAQ */}
				<FAQSection items={localeFaqItems} />

				<Footer />
			</main>
		</>
	);
}
