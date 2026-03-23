// ═══════════════════════════════════════════════
// Page /[locale]/[type] — projects | clients
// ═══════════════════════════════════════════════

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import BackLink from "@/components/ui/BackLink";
import PageHeading from "@/components/ui/PageHeading";
import ItemGallery from "@/components/gallery/ItemGallery";

type GalleryType = "projects" | "clients";

interface GalleryPageProps {
	params: Promise<{ locale: string; type: string }>;
}

const BASE_URL = "https://www.pyrux.com.ar";

const meta = {
	projects: {
		es: {
			title: "Proyectos — Pyrux",
			description: "Todos los proyectos desarrollados por Pyrux. Desarrollo web, sistemas a medida y soluciones digitales.",
			short: "Todos los proyectos desarrollados por Pyrux.",
			breadcrumb: "Proyectos",
		},
		en: {
			title: "Projects — Pyrux",
			description: "All projects developed by Pyrux. Web development, custom systems and digital solutions.",
			short: "All projects developed by Pyrux.",
			breadcrumb: "Projects",
		},
	},
	clients: {
		es: {
			title: "Clientes — Pyrux",
			description: "Empresas y clientes que confiaron en Pyrux para sus proyectos digitales.",
			short: "Empresas y clientes que confiaron en Pyrux.",
			breadcrumb: "Clientes",
		},
		en: {
			title: "Clients — Pyrux",
			description: "Companies and clients that trusted Pyrux for their digital projects.",
			short: "Companies and clients that trusted Pyrux.",
			breadcrumb: "Clients",
		},
	},
} satisfies Record<GalleryType, Record<"es" | "en", Record<string, string>>>;

export function generateStaticParams() {
	return [{ type: "projects" }, { type: "clients" }];
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
	const { locale, type } = await params;
	if (type !== "projects" && type !== "clients") return {};

	const lang = locale === "es" ? "es" : "en";
	const { title, description, short } = meta[type][lang];
	const url = `${BASE_URL}/${locale}/${type}`;

	return {
		title,
		description,
		alternates: {
			canonical: url,
			languages: {
				es: `${BASE_URL}/es/${type}`,
				en: `${BASE_URL}/en/${type}`,
				"x-default": `${BASE_URL}/es/${type}`,
			},
		},
		openGraph: {
			title,
			description: short,
			url,
			locale: locale === "es" ? "es_AR" : "en_US",
			images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: short,
			images: ["/og-image.png"],
		},
	};
}

export default async function GalleryPage({ params }: GalleryPageProps) {
	const { locale, type } = await params;
	if (type !== "projects" && type !== "clients") notFound();

	const galleryType = type as GalleryType;
	const lang = locale === "es" ? "es" : "en";
	const namespace = galleryType === "projects" ? "ProjectsPage" : "ClientsPage";
	const t = await getTranslations({ locale, namespace });
	const url = `${BASE_URL}/${locale}/${type}`;

	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: locale === "es" ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
			{ "@type": "ListItem", position: 2, name: meta[galleryType][lang].breadcrumb, item: url },
		],
	});

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
			<main className="w-full max-w-content mx-auto flex-1 flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				<BackLink />
				<PageHeading title={t("title")} subtitle={t("subtitle")} />
				<ItemGallery type={galleryType} creatorId={galleryType === "projects" ? "pyrux" : undefined} />
			</main>
		</>
	);
}
