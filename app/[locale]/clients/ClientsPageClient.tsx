// ═══════════════════════════════════════════════
// Clients page client component
// ═══════════════════════════════════════════════
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { ArrowLeft } from "lucide-react";
import { companies } from "@/data/companies";
import CompanyCard from "@/components/common/CompanyCard";
import CompanyModal from "@/components/common/CompanyModal";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import type { Company } from "@/types";
import { Link } from "@/i18n/navigation";

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
						className="inline-flex items-center gap-2 text-[0.9rem] text-coral no-underline mb-4 hover:text-cyan">
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
						<CompanyCard
							key={company.id}
							company={company}
							fullWidth
							onClick={() => setSelectedCompany(company)}
						/>
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
