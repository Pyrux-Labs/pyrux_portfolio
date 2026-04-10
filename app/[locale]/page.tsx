import type { Metadata } from "next";
import { companies } from "@/data/companies";
import type { Locale } from "@/i18n/config";
import Hero from "@/components/home/Hero";
import HeroButtons from "@/components/home/HeroButtons";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import ContactUs from "@/components/home/ContactUs";
import TechStack from "@/components/home/TechStack";
import StatsBar from "@/components/home/StatsBar";

interface HomePageProps {
	params: Promise<{ locale: string }>;
}

const BASE_URL = "https://www.pyrux.com.ar";

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
	const { locale } = await params;
	const isEs = locale === "es";
	const url = `${BASE_URL}/${locale}`;

	return {
		title: isEs
			? "Pyrux — Desarrollo de Software | Rosario, Argentina"
			: "Pyrux — Custom Software Development | Rosario, Argentina",
		description: isEs
			? "Desarrollamos software a medida en Rosario: sitios web, sistemas de gestión, automatizaciones e integraciones. Código real, resultados concretos."
			: "We develop custom software in Rosario: websites, management systems, automations and integrations. Real code, concrete results.",
		alternates: {
			canonical: url,
			languages: {
				es: `${BASE_URL}/es`,
				en: `${BASE_URL}/en`,
				"x-default": `${BASE_URL}/es`,
			},
		},
		openGraph: {
			title: isEs
				? "Pyrux — Desarrollo de Software | Rosario, Argentina"
				: "Pyrux — Custom Software Development | Rosario, Argentina",
			description: isEs
				? "Desarrollamos software a medida en Rosario: sitios web, sistemas de gestión, automatizaciones e integraciones. Código real, resultados concretos."
				: "We develop custom software in Rosario: websites, management systems, automations and integrations. Real code, concrete results.",
			url,
			locale: isEs ? "es_AR" : "en_US",
			images: [{ url: `${BASE_URL}/og-image.png`, type: "image/png", width: 1200, height: 630 }],
		},
		twitter: {
			card: "summary_large_image",
			images: [`${BASE_URL}/og-image.png`],
		},
	};
}

export default async function LocaleHomePage({ params }: HomePageProps) {
	const { locale } = await params;

	const reviewSchema = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${BASE_URL}/#organization`,
		name: "Pyrux",
		url: BASE_URL,
		review: companies[locale as Locale]
			.filter((c) => c.testimonial)
			.map((c) => ({
				"@type": "Review",
				name: `Reseña de ${c.name}`,
				author: { "@type": "Organization", name: c.name },
				reviewBody: c.testimonial,
				reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
			})),
	});

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: reviewSchema }} />
			<main className="w-full max-w-content mx-auto flex-1 flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
			<Hero />
			<HeroButtons />
			<FeaturedWork />
			<Services />
			<Team />
			<ContactUs />
			<StatsBar />
			<TechStack />
		</main>
		</>
	);
}
