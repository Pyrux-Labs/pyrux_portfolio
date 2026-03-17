// ═══════════════════════════════════════════════
// Page /prices - services packages
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import PreciosPageClient from "./PricesPageClient";

export const metadata: Metadata = {
	title: "Precios y Paquetes — Pyrux",
	description:
		"Paquetes de desarrollo web profesional. Landing pages, sitios corporativos, e-commerce y más. Precios en USD, código a medida, soporte incluido.",
	alternates: {
		canonical: "https://www.pyrux.com.ar/pricing",
	},
	openGraph: {
		title: "Precios y Paquetes — Pyrux",
		description:
			"Paquetes de desarrollo web profesional. Landing pages, sitios corporativos, e-commerce y más. Precios en USD, código a medida, soporte incluido.",
		url: "https://www.pyrux.com.ar/pricing",
		images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Precios — Pyrux" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Precios y Paquetes — Pyrux",
		description:
			"Paquetes de desarrollo web profesional. Landing pages, sitios corporativos, e-commerce y más.",
		images: ["/og-image.png"],
	},
};

export default function PreciosPage() {
	return <PreciosPageClient />;
}
