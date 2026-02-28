// ═══════════════════════════════════════════════
// Página /creator/[id] — proyectos de un creador
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import { creators } from "@/data/creators";
import CreatorPageClient from "./CreatorPageClient";

interface CreatorPageProps {
	params: Promise<{ id: string }>;
}

// Generar rutas estáticas para cada creador
export function generateStaticParams() {
	return creators.map((c) => ({ id: c.id }));
}

// Metadata dinámica
export async function generateMetadata({
	params,
}: CreatorPageProps): Promise<Metadata> {
	const { id } = await params;
	const creator = creators.find((c) => c.id === id);
	return {
		title: creator
			? `${creator.name} — Pyrux`
			: "Creador no encontrado — Pyrux",
		description: creator?.bio ?? "Perfil de creador en Pyrux",
	};
}

export default async function CreatorPage({ params }: CreatorPageProps) {
	const { id } = await params;
	return <CreatorPageClient creatorId={id} />;
}
