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
			description: "Webs, sistemas y aplicaciones que resuelven problemas reales. Todo lo que construimos, acá.",
			short: "Todo lo que construimos, acá.",
			breadcrumb: "Proyectos",
		},
		en: {
			title: "Projects — Pyrux",
			description: "Websites, systems and apps that solve real problems. Everything we've built, right here.",
			short: "Everything we've built, right here.",
			breadcrumb: "Projects",
		},
	},
	clients: {
		es: {
			title: "Clientes — Pyrux",
			description: "Cada cliente es un problema resuelto. Conocé las empresas que confían en Pyrux.",
			short: "Las empresas que confían en Pyrux.",
			breadcrumb: "Clientes",
		},
		en: {
			title: "Clients — Pyrux",
			description: "Every client is a problem solved. Meet the companies that trust Pyrux.",
			short: "The companies that trust Pyrux.",
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
	const url = locale === "es" ? `${BASE_URL}/${type}` : `${BASE_URL}/${locale}/${type}`;

	return {
		title,
		description,
		alternates: {
			canonical: url,
			languages: {
				es: `${BASE_URL}/${type}`,
				en: `${BASE_URL}/en/${type}`,
				"x-default": `${BASE_URL}/${type}`,
			},
		},
		openGraph: {
			title,
			description: short,
			url,
			locale: locale === "es" ? "es_AR" : "en_US",
			images: [{ url: `${BASE_URL}/og-image.png`, type: "image/png", width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: short,
			images: [`${BASE_URL}/og-image.png`],
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
	const isEs = locale === "es";
	const url = isEs ? `${BASE_URL}/${type}` : `${BASE_URL}/${locale}/${type}`;
	const homeUrl = isEs ? BASE_URL : `${BASE_URL}/${locale}`;

	const breadcrumb = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: homeUrl },
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
