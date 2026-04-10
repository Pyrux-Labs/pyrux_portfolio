import type { Metadata } from "next";
import { Manrope } from "next/font/google";
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
	"@type": ["LocalBusiness", "ProfessionalService"],
	name: "Pyrux",
	url: BASE_URL,
	logo: `${BASE_URL}/Pyrux-logo.svg`,
	image: `${BASE_URL}/og-image.png`,
	description:
		"Desarrollamos software a medida en Rosario: sitios web, sistemas de gestión, automatizaciones e integraciones. Código real, resultados concretos.",
	telephone: "+54 9 341 694 1225",
	serviceType: "Desarrollo de Software",
	address: {
		"@type": "PostalAddress",
		streetAddress: "San Luis 2267",
		addressLocality: "Rosario",
		addressRegion: "Santa Fe",
		postalCode: "2000",
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
	knowsAbout: [
		"software development",
		"fullstack development",
		"web development",
		"custom software",
		"web applications",
		"system design",
		"Next.js",
		"React",
		"Node.js",
		"TypeScript",
		"API development",
		"database design",
		"e-commerce development",
	],
};

const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Pyrux",
	url: BASE_URL,
};


export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: "Pyrux — Desarrollo de Software | Rosario, Argentina",
	description:
		"Desarrollamos software a medida en Rosario: sitios web, sistemas de gestión, automatizaciones e integraciones. Código real, resultados concretos.",
	keywords: [
		"desarrollo de software",
		"software a medida",
		"desarrollo fullstack",
		"software factory",
		"ingeniería de software",
		"empresa de software Rosario",
		"desarrollo web",
		"diseño web",
		"automatización",
		"Next.js",
		"React",
		"TypeScript",
		"Pyrux",
		"desarrollo de software Argentina",
		"páginas web profesionales",
		"desarrollo web Rosario",
	],
	authors: [{ name: "Pyrux", url: BASE_URL }],
	openGraph: {
		title: "Pyrux — Desarrollo de Software | Rosario, Argentina",
		description:
			"Desarrollamos software a medida en Rosario: sitios web, sistemas de gestión, automatizaciones e integraciones. Código real, resultados concretos.",
		type: "website",
		url: BASE_URL,
		locale: "es_AR",
		siteName: "Pyrux",
		images: [
			{
				url: `${BASE_URL}/og-image.png`,
				type: "image/png",
				width: 1200,
				height: 630,
				alt: "Pyrux — Desarrollo de Software | Rosario, Argentina",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Pyrux — Desarrollo de Software | Rosario, Argentina",
		description:
			"Desarrollamos software a medida en Rosario: sitios web, sistemas de gestión, automatizaciones e integraciones. Código real, resultados concretos.",
		images: [`${BASE_URL}/og-image.png`],
	},
	icons: {
		icon: "/Pyrux-logo.svg",
		shortcut: "/Pyrux-logo.svg",
		apple: "/apple-touch-icon.png",
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
		<html lang="es" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning className={manrope.variable}>
			<head>
				{/* Prevenir FOUC: aplicar tema antes del primer render */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){var t=localStorage.getItem('oc-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}})();`,
					}}
				/>
				{/* Setear html lang según la URL antes del render */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){document.documentElement.lang=location.pathname.startsWith('/en')?'en':'es';})();`,
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
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
