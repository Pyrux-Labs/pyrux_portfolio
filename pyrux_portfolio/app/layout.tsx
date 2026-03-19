import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { LocaleProvider } from "@/i18n/locale-provider";
import { faqItems } from "@/data/faq";
import { defaultLocale } from "@/i18n/config";
import "./globals.css";

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-manrope",
	display: "swap",
});

const BASE_URL = "https://www.pyrux.com.ar";

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": ["Organization", "LocalBusiness"],
	name: "Pyrux",
	url: BASE_URL,
	logo: `${BASE_URL}/Pyrux-logo.svg`,
	image: `${BASE_URL}/og-image.png`,
	description:
		"Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel.",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Rosario",
		addressRegion: "Santa Fe",
		addressCountry: "AR",
	},
	areaServed: [
		{ "@type": "City", name: "Rosario" },
		{ "@type": "Country", name: "Argentina" },
	],
	sameAs: [
		"https://www.instagram.com/pyrux_labs",
		"https://linkedin.com/company/pyrux",
	],
	priceRange: "$$",
	knowsAbout: ["desarrollo web", "diseño web", "software a medida", "Next.js", "React"],
};

const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Pyrux",
	url: BASE_URL,
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqItems[defaultLocale].map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: "Pyrux — Desarrollo web y soluciones digitales",
	description:
		"Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel. Portfolio de Pyrux.",
	keywords: [
		"desarrollo web",
		"software a medida",
		"diseño web",
		"automatización",
		"Next.js",
		"React",
		"TypeScript",
		"Pyrux",
		"agencia web Argentina",
		"páginas web profesionales",
		"desarrollo web Rosario",
		"agencia web Rosario",
	],
	authors: [{ name: "Pyrux", url: BASE_URL }],
	alternates: {
		canonical: BASE_URL,
	},
	openGraph: {
		title: "Pyrux — Desarrollo web y soluciones digitales",
		description:
			"Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel.",
		type: "website",
		url: BASE_URL,
		locale: "es_AR",
		siteName: "Pyrux",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Pyrux — Desarrollo web y soluciones digitales",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Pyrux — Desarrollo web y soluciones digitales",
		description:
			"Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel.",
		images: ["/og-image.png"],
	},
	icons: {
		icon: "/Pyrux-logo.svg",
		shortcut: "/Pyrux-logo.svg",
		apple: "/Pyrux-logo.svg",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
		},
	},
	other: {
		"theme-color": "#F97316",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" data-theme="dark" suppressHydrationWarning className={manrope.variable}>
			<head>
				{/* Prevenir FOUC: aplicar tema antes del primer render */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){var t=localStorage.getItem('oc-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}})();`,
					}}
				/>
				{/* Prevenir FOWL: aplicar locale antes del primer render */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){var l=localStorage.getItem('pyrux-locale');if(!l){l=navigator.language&&navigator.language.startsWith('es')?'es':'en';localStorage.setItem('pyrux-locale',l);}document.documentElement.lang=l;document.documentElement.dataset.locale=l;})();`,
					}}
				/>
				{/* JSON-LD structured data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</head>
			<body>
				<LocaleProvider>
					<div className="relative z-50">
						<ThemeToggle />
						<LanguageToggle />
					</div>
					{children}
				<WhatsAppFAB />
				</LocaleProvider>
			</body>
		</html>
	);
}
