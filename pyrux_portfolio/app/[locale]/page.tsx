import type { Metadata } from "next";
import StarBackground from "@/components/ui/StarBackground";
import Hero from "@/components/sections/Hero";
import HeroButtons from "@/components/sections/HeroButtons";
import OurProjects from "@/components/sections/OurProjects";
import OurServices from "@/components/sections/OurServices";
import OurStack from "@/components/sections/OurStack";
import OurTeam from "@/components/sections/OurTeam";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/layout/Footer";

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
		<>
			<StarBackground />
			<main className="relative z-1 max-w-content mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pt-22 min-[481px]:pb-10">
				<Hero />
				<HeroButtons />
				<OurProjects />
				<OurServices />
				<OurTeam />
				<ContactUs />
				<OurStack />
				<Footer />
			</main>
		</>
	);
}
