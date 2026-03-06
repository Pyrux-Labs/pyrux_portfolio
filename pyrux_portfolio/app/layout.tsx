import type { Metadata } from "next";
import ThemeToggle from "@/components/ui/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
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
	],
	authors: [{ name: "Pyrux" }],
	openGraph: {
		title: "Pyrux — Desarrollo web y soluciones digitales",
		description:
			"Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel.",
		type: "website",
		locale: "es_AR",
		siteName: "Pyrux",
	},
	twitter: {
		card: "summary_large_image",
		title: "Pyrux — Desarrollo web y soluciones digitales",
		description:
			"Creamos páginas web modernas, sistemas a medida y automatizaciones para llevar tu negocio al siguiente nivel.",
	},
	icons: {
		icon: "/Pyrux-logo.svg",
		shortcut: "/Pyrux-logo.svg",
		apple: "/Pyrux-logo.svg",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="dark" suppressHydrationWarning>
			<head>
				{/* Google tag (gtag.js) */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-XD1K5TMVZ9"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-XD1K5TMVZ9');
						`,
					}}
				/>
				{/* Prevenir FOUC: aplicar tema antes del primer render */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){var t=localStorage.getItem('oc-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}})();`,
					}}
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<ThemeToggle />
				{children}
			</body>
		</html>
	);
}
