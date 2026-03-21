"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { companies } from "@/data/companies";
import CompanyCard from "@/components/common/CompanyCard";
import CompanyModal from "@/components/common/CompanyModal";
import BrowseGrid from "@/components/common/BrowseGrid";

export default function CompanyBrowser() {
	const t = useTranslations("ClientsPage");
	const { locale } = useLocale();

	return (
		<BrowseGrid
			items={companies[locale]}
			title={t("title")}
			subtitle={t("subtitle")}
			backLabel={t("backToHome")}
			gridClass="grid-cols-1 sm:grid-cols-2 gap-5"
			stagger={0.08}
			renderCard={(company, onSelect) => (
				<CompanyCard key={company.id} company={company} fullWidth onClick={() => onSelect(company)} />
			)}
			renderModal={(selected, onClose) => (
				<CompanyModal company={selected} isOpen={selected !== null} onClose={onClose} />
			)}
		/>
	);
}
