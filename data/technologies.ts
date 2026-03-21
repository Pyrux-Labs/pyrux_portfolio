// ═══════════════════════════════════════════════
// Datos de tecnologías — Pyrux Portfolio
// ═══════════════════════════════════════════════

import type { Technology } from "@/types";

export const technologies: Technology[] = [
	// Frontend
	{
		id: "react",
		name: "React",
		icon: "SiReact",
		category: "frontend",
		featured: false,
	},
	{
		id: "nextjs",
		name: "Next.js",
		icon: "SiNextdotjs",
		category: "frontend",
		featured: true,
	},
	{
		id: "typescript",
		name: "TypeScript",
		icon: "SiTypescript",
		category: "frontend",
		featured: true,
	},
	{
		id: "javascript",
		name: "JavaScript",
		icon: "SiJavascript",
		category: "frontend",
		featured: false,
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		icon: "SiTailwindcss",
		category: "frontend",
		featured: true,
	},
	{
		id: "framer-motion",
		name: "Framer Motion",
		icon: "SiFramer",
		category: "frontend",
		featured: false,
	},
	{
		id: "html",
		name: "HTML5",
		icon: "SiHtml5",
		category: "frontend",
		featured: false,
	},
	{
		id: "css",
		name: "CSS3",
		icon: "SiCss3",
		category: "frontend",
		featured: false,
	},
	{
		id: "vite",
		name: "Vite",
		icon: "SiVite",
		category: "frontend",
		featured: false,
	},
	{
		id: "three-js",
		name: "Three.js",
		icon: "SiThreedotjs",
		category: "frontend",
		featured: false,
	},
	// Backend
	{
		id: "django",
		name: "Django",
		icon: "SiDjango",
		category: "backend",
		featured: false,
	},
	{
		id: "nodejs",
		name: "Node.js",
		icon: "SiNodedotjs",
		category: "backend",
		featured: true,
	},
	{
		id: "express",
		name: "Express",
		icon: "SiExpress",
		category: "backend",
		featured: false,
	},
	{
		id: "python",
		name: "Python",
		icon: "SiPython",
		category: "backend",
		featured: false,
	},
	// Databases
	{
		id: "postgresql",
		name: "PostgreSQL",
		icon: "SiPostgresql",
		category: "database",
		featured: false,
	},
	{
		id: "mongodb",
		name: "MongoDB",
		icon: "SiMongodb",
		category: "database",
		featured: false,
	},
	{
		id: "redis",
		name: "Redis",
		icon: "SiRedis",
		category: "database",
		featured: false,
	},

	// DevOps
	{
		id: "docker",
		name: "Docker",
		icon: "SiDocker",
		category: "devops",
		featured: false,
	},
	{
		id: "git",
		name: "Git",
		icon: "SiGit",
		category: "devops",
		featured: false,
	},
	{
		id: "github",
		name: "GitHub",
		icon: "SiGithub",
		category: "devops",
		featured: true,
	},
	{
		id: "linux",
		name: "Linux",
		icon: "SiLinux",
		category: "devops",
		featured: true,
	},
	{
		id: "vercel",
		name: "Vercel",
		icon: "SiVercel",
		category: "devops",
		featured: true,
	},
	{
		id: "render",
		name: "Render",
		icon: "SiRender",
		category: "devops",
		featured: false,
	},
	{
		id: "github-pages",
		name: "GitHub Pages",
		icon: "SiGithub",
		category: "devops",
		featured: false,
	},
	{
		id: "nginx",
		name: "Nginx",
		icon: "SiNginx",
		category: "devops",
		featured: false,
	},
	// Other
	{
		id: "stripe",
		name: "Stripe",
		icon: "SiStripe",
		category: "other",
		featured: false,
	},
	{
		id: "figma",
		name: "Figma",
		icon: "SiFigma",
		category: "other",
		featured: true,
	},
	{
		id: "supabase",
		name: "Supabase",
		icon: "SiSupabase",
		category: "database",
		featured: true,
	},
	{
		id: "google-seo",
		name: "Google SEO",
		icon: "SiGoogle",
		category: "other",
		featured: true,
	},
];

// Funciones auxiliares
export function getTechnologyById(id: string): Technology | undefined {
	return technologies.find((t) => t.id === id);
}

export function getFeaturedTechnologies(): Technology[] {
	return technologies.filter((t) => t.featured);
}

export function getTechnologiesByCategory(
	category: Technology["category"]
): Technology[] {
	return technologies.filter((t) => t.category === category);
}

export const technologyCategories: {
	id: Technology["category"];
	label: string;
}[] = [
	{ id: "frontend", label: "Frontend" },
	{ id: "backend", label: "Backend" },
	{ id: "database", label: "Bases de Datos" },
	{ id: "devops", label: "DevOps & Tools" },
	{ id: "other", label: "Otros" },
];
