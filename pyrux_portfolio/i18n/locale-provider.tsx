"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Locale } from "@/i18n/config";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "es",
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

const messagesMap: Record<Locale, Record<string, unknown>> = {
  es: esMessages as Record<string, unknown>,
  en: enMessages as Record<string, unknown>,
};

interface LocaleProviderProps {
  children: React.ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const stored = localStorage.getItem("pyrux-locale");
    if (stored === "es" || stored === "en") {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    } else {
      const detected: Locale = navigator.language.startsWith("es")
        ? "es"
        : "en";
      setLocaleState(detected);
      localStorage.setItem("pyrux-locale", detected);
      document.documentElement.lang = detected;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("pyrux-locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messagesMap[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
