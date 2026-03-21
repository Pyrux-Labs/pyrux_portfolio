"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { ArrowLeft } from "lucide-react";
import { companies } from "@/data/companies";
import CompanyCard from "@/components/common/CompanyCard";
import CompanyModal from "@/components/common/CompanyModal";
import type { Company } from "@/types";
import { Link } from "@/i18n/navigation";
import { fadeUpHeader } from "@/lib/animations";

const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

export default function ClientsContent() {
	const t = useTranslations("ClientsPage");
	const { locale } = useLocale();
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
	const localeCompanies = companies[locale];

	return (
		<>
			<main className="max-w-content mx-auto flex-1 flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				<motion.div className="mb-8" variants={fadeUpHeader} initial="hidden" animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-coral no-underline mb-4 hover:text-cyan">
						<ArrowLeft size={16} />
						{t("backToHome")}
					</Link>
					<h1 className="font-display text-3xl font-bold text-primary mb-2">{t("title")}</h1>
					<p className="text-secondary">{t("subtitle")}</p>
				</motion.div>

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
			</main>

			<CompanyModal
				company={selectedCompany}
				isOpen={selectedCompany !== null}
				onClose={() => setSelectedCompany(null)}
			/>
		</>
	);
}
