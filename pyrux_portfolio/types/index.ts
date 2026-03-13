// ═══════════════════════════════════════════════
// Tipos globales del portfolio — Pyrux
// ═══════════════════════════════════════════════

export interface Project {
	id: string;
	title: string;
	description: string;
	shortDescription: string;
	technologies: string[];
	images: string[];
	liveUrl?: string;
	githubUrl?: string;
	creatorId: string;
	featured: boolean;
	date: string;
}

export interface Company {
	id: string;
	name: string;
	logo: string;
	summary: string;
	workDescription: string;
	websiteUrl: string;
	testimonial?: string;
}

export type TechnologyCategory =
	| "frontend"
	| "backend"
	| "database"
	| "devops"
	| "mobile"
	| "other";

export interface Technology {
	id: string;
	name: string;
	icon: string;
	category: TechnologyCategory;
	featured: boolean;
}

export interface SocialLinks {
	linkedin?: string;
	github?: string;
	email?: string;
	whatsapp?: string;
	instagram?: string;
	website?: string;
}

export interface Creator {
	id: string;
	name: string;
	bio: string;
	image: string;
	photos: string[];
	role: string;
	socialLinks: SocialLinks;
	featuredProjects: string[];
}

export interface Value {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export interface ServiceItem {
	title: string;
	desc: string;
	icon: string;
}

export interface ContactItem {
	label: string;
	sublabel: string;
	icon: string;
	href?: string;
	action?: "copy-email";
	hoverBorder: string;
	hoverShadow: string;
	hoverIcon: string;
}
