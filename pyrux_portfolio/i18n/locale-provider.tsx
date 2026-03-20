"use client";

import { createContext, useContext } from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Locale } from "@/i18n/config";

interface LocaleContextValue {
	locale: Locale;
}

const LocaleContext = createContext<LocaleContextValue>({ locale: "es" });

export function useLocale() {
	return useContext(LocaleContext);
}

interface LocaleProviderProps {
	locale: Locale;
	messages: Record<string, unknown>;
	children: React.ReactNode;
}

export function LocaleProvider({ locale, messages, children }: LocaleProviderProps) {
	return (
		<LocaleContext.Provider value={{ locale }}>
			<NextIntlClientProvider locale={locale} messages={messages}>
				{children}
			</NextIntlClientProvider>
		</LocaleContext.Provider>
	);
}
