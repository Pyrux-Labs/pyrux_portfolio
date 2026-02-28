import type { Metadata } from "next";
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
				<link rel="preconnect" href="https://api.fontshare.com" />
				<link
					rel="preconnect"
					href="https://cdn.fontshare.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&f[]=satoshi@400,500,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
