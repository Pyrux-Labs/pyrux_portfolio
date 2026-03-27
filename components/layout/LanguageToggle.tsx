"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { usePathname } from "@/i18n/navigation";

export default function LanguageToggle() {
	const t = useTranslations("LanguageToggle");
	const { locale } = useLocale();
	const pathname = usePathname();

	const handleToggle = () => {
		const newLocale = locale === "es" ? "en" : "es";
		window.location.href = newLocale === "en" ? `/en${pathname}` : pathname;
	};

	return (
		<button
			className="group w-9 h-9 sm:w-10 sm:h-10 grid place-items-center p-0 rounded-full border border-border bg-card-strong cursor-pointer backdrop-blur-[10px] transition-all duration-200 ease-in-out hover:border-border-accent hover:-translate-y-px hover:shadow-[0_10px_24px_var(--shadow-coral-soft)] focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2"
			type="button"
			onClick={handleToggle}
			aria-label={
				locale === "es" ? t("switchToEnglish") : t("switchToSpanish")
			}
			title={locale === "es" ? t("switchToEnglish") : t("switchToSpanish")}
		>
			<span className="text-[0.75rem] leading-none font-semibold text-secondary transition-[transform,color] duration-200 ease-in-out group-hover:text-primary group-hover:scale-[1.04]">
				{locale === "es" ? "EN" : "ES"}
			</span>
		</button>
	);
}
