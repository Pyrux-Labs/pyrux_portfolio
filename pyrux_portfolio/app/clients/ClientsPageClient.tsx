// ═══════════════════════════════════════════════
// Clients page client component
// ═══════════════════════════════════════════════
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { ArrowLeft, Building2, Quote } from "lucide-react";
import { companies } from "@/data/companies";
import CompanyModal from "@/components/modals/CompanyModal";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import type { Company } from "@/types";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

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
	visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

export default function ClientsPageClient() {
	const t = useTranslations("ClientsPage");
	const { locale } = useLocale();
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
	const localeCompanies = companies[locale];

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-content mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Header */}
				<motion.div
					className="mb-8"
					variants={headerVariants}
					initial="hidden"
					animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-secondary no-underline mb-4 hover:text-coral">
						<ArrowLeft size={16} />
						{t("backToHome")}
					</Link>
					<h1 className="font-display text-3xl font-bold text-primary mb-2">
						{t("title")}
					</h1>
					<p className="text-secondary">
						{t("subtitle")}
					</p>
				</motion.div>

				{/* Company grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 gap-5"
					variants={gridVariants}
					initial="hidden"
					animate="visible">
					{localeCompanies.map((company) => (
						<motion.div
							key={company.id}
							className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card-strong backdrop-blur-xl cursor-pointer hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]"
							variants={cardVariants}
							whileHover={{ y: -4 }}
							whileTap={{ scale: 0.98 }}
							onClick={() => setSelectedCompany(company)}
							role="button"
							tabIndex={0}
							aria-label={t("viewDetailsAria", { name: company.name })}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									setSelectedCompany(company);
								}
							}}>
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
											/>
											<Image
												src={company.logoDark}
												alt={`${company.name} logo`}
												width={44}
												height={44}
												className="logo-for-dark w-full h-full object-contain"
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
												onError={(e) => {
													e.currentTarget.style.display = "none";
													e.currentTarget.nextElementSibling?.classList.remove("hidden");
												}}
											/>
											<Building2 size={20} className="text-coral hidden" />
										</>
									)}
								</div>
								<div>
									<h3 className="font-display text-[1.05rem] font-semibold text-primary">
										{company.name}
									</h3>
								</div>
							</div>
							<p className="text-[0.9rem] text-secondary leading-relaxed">
								{company.summary}
							</p>
							<p className="text-[0.85rem] text-muted leading-relaxed">
								{company.workDescription}
							</p>
							{company.testimonial && (
								<div className="flex items-start gap-2 pt-2 border-t border-border">
									<Quote
										size={14}
										className="text-coral shrink-0 mt-0.5 rotate-180"
									/>
									<p className="text-[0.8rem] text-muted italic line-clamp-2">
										{company.testimonial}
									</p>
									<Quote size={14} className="text-coral shrink-0 mt-0.5" />
								</div>
							)}
						</motion.div>
					))}
				</motion.div>

				<Footer />
			</main>

			<CompanyModal
				company={selectedCompany}
				isOpen={selectedCompany !== null}
				onClose={() => setSelectedCompany(null)}
			/>
		</>
	);
}
