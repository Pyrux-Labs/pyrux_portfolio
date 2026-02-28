import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pyrux — Desarrollo web y soluciones digitales.",
	description: "Pyrux — Desarrollo web y soluciones digitales.",
	icons: {
		icon: "/Pyrux-logo.svg",
		shortcut: "/Pyrux-logo.svg",
		apple: "/Pyrux-logo.svg",
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
