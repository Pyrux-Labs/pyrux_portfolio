"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";

export default function LanguageToggle() {
  const t = useTranslations("LanguageToggle");
  const { locale, setLocale } = useLocale();

  return (
    <button
      className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border bg-card-strong cursor-pointer backdrop-blur-[10px] transition-all duration-200 ease-in-out hover:border-border-accent hover:-translate-y-px hover:shadow-[0_10px_24px_var(--shadow-coral-soft)] focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2 px-0 py-0 text-sm font-semibold text-secondary hover:text-primary"
      type="button"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      aria-label={
        locale === "es" ? t("switchToEnglish") : t("switchToSpanish")
      }
      title={locale === "es" ? t("switchToEnglish") : t("switchToSpanish")}
    >
      <span className="text-[0.75rem] leading-none font-semibold">
        {locale === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}
