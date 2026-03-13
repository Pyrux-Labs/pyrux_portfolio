// ═══════════════════════════════════════════════
// Page /prices - services packages
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import PreciosPageClient from "./PricesPageClient";

export const metadata: Metadata = {
	title: "Precios y Paquetes — Pyrux",
	description:
		"Paquetes de desarrollo web profesional. Landing pages, sitios corporativos, e-commerce y más. Precios en USD, código a medida, soporte incluido.",
};

export default function PreciosPage() {
	return <PreciosPageClient />;
}
