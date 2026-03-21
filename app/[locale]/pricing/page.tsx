// ═══════════════════════════════════════════════
// Page /[locale]/pricing
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import PricingContent from "@/components/pricing/PricingContent";
import { faqItems } from "@/data/faq";
import type { Locale } from "@/i18n/config";

interface PricingPageProps {
	params: Promise<{ locale: string }>;
}

const BASE_URL = "https://www.pyrux.com.ar";

export async function generateMetadata({ params }: PricingPageProps): Promise<Metadata> {
	const { locale } = await params;
	const isEs = locale === "es";
	const url = `${BASE_URL}/${locale}/pricing`;

	return {
		title: isEs ? "Precios y Paquetes — Pyrux" : "Pricing & Packages — Pyrux",
		description: isEs
			? "Paquetes de desarrollo web profesional. Landing pages, sitios corporativos, e-commerce y más. Precios en dólares, código a medida, soporte incluido."
			: "Professional web development packages. Landing pages, corporate sites, e-commerce and more. USD pricing, custom code, support included.",
		alternates: {
			canonical: url,
			languages: {
				es: `${BASE_URL}/es/pricing`,
				en: `${BASE_URL}/en/pricing`,
				"x-default": `${BASE_URL}/es/pricing`,
			},
		},
		openGraph: {
			title: isEs ? "Precios y Paquetes — Pyrux" : "Pricing & Packages — Pyrux",
			description: isEs
				? "Paquetes de desarrollo web profesional. Landing pages, sitios corporativos, e-commerce y más."
				: "Professional web development packages. Landing pages, corporate sites, e-commerce and more.",
			url,
			locale: isEs ? "es_AR" : "en_US",
			images: [{ url: "/og-image.png", width: 1200, height: 630, alt: isEs ? "Precios — Pyrux" : "Pricing — Pyrux" }],
		},
		twitter: {
			card: "summary_large_image",
			title: isEs ? "Precios y Paquetes — Pyrux" : "Pricing & Packages — Pyrux",
			description: isEs
				? "Paquetes de desarrollo web profesional."
				: "Professional web development packages.",
			images: ["/og-image.png"],
		},
	};
}

export default async function PricingPage({ params }: PricingPageProps) {
	const { locale } = await params;
	const isEs = locale === "es";
	const url = `${BASE_URL}/${locale}/pricing`;

	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
			{ "@type": "ListItem", position: 2, name: isEs ? "Precios" : "Pricing", item: url },
		],
	});

	const faqSchema = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqItems[locale as Locale].map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: { "@type": "Answer", text: item.answer },
		})),
	});

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
			<PricingContent />
		</>
	);
}
