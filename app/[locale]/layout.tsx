import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { LocaleProvider } from "@/i18n/locale-provider";
import ThemeToggle from "@/components/layout/ThemeToggle";
import LanguageToggle from "@/components/layout/LanguageToggle";
import Footer from "@/components/layout/Footer";
import StarBackground from "@/components/ui/StarBackground";
import { Toaster } from "sonner";
import type { Locale } from "@/i18n/config";
import { PageTransitionProvider, AnimatedPage } from "@/lib/page-transition";

interface LocaleLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) notFound();

	const messages =
		locale === "es"
			? (await import("@/messages/es.json")).default
			: (await import("@/messages/en.json")).default;

	return (
		<LocaleProvider locale={locale as Locale} messages={messages as Record<string, unknown>}>
			<PageTransitionProvider>
				<StarBackground />
				<div className="relative z-1 w-full min-h-screen flex flex-col overflow-x-clip">
					<div className="absolute top-3 left-3 z-50 flex gap-2">
						<ThemeToggle />
						<LanguageToggle />
					</div>
					<AnimatedPage>{children}</AnimatedPage>
					<Footer />
				</div>
				<Toaster
				position="bottom-center"
				toastOptions={{
					style: {
						background: "var(--bg-elevated)",
						color: "var(--text-primary)",
						border: "1px solid var(--border-subtle)",
					},
				}}
			/>
			</PageTransitionProvider>
		</LocaleProvider>
	);
}
