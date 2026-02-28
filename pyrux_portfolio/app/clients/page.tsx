// ═══════════════════════════════════════════════
// Página /clients — todas las empresas
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import ClientsPageClient from "./ClientsPageClient";

export const metadata: Metadata = {
	title: "Clientes — Pyrux",
	description:
		"Empresas y clientes que confiaron en Pyrux para sus proyectos digitales.",
};

export default function ClientsPage() {
	return <ClientsPageClient />;
}
