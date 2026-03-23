import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import HeroButtons from "@/components/home/HeroButtons";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import ContactUs from "@/components/home/ContactUs";
import TechStack from "@/components/home/TechStack";

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
			? "Pyrux — Desarrollo web y soluciones digitales"
			: "Pyrux — Web Development & Digital Solutions",
		description: isEs
			? "Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel."
			: "We build modern websites, custom systems and automations to take your business to the next level.",
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
				? "Pyrux — Desarrollo web y soluciones digitales"
				: "Pyrux — Web Development & Digital Solutions",
			description: isEs
				? "Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel."
				: "We build modern websites, custom systems and automations to take your business to the next level.",
			url,
			locale: isEs ? "es_AR" : "en_US",
		},
	};
}

export default function LocaleHomePage() {
	return (
		<main className="w-full max-w-content mx-auto flex-1 flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
			<Hero />
			<HeroButtons />
			<FeaturedWork />
			<Services />
			<Team />
			<ContactUs />
			<TechStack />
		</main>
	);
}
