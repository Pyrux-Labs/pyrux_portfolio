// ═══════════════════════════════════════════════
// Datos de proyectos — Pyrux Portfolio
// creatorId: "pyrux" para proyectos del estudio,
//            ID del creador para proyectos personales
// images: Cloudinary public IDs (sin extensión, sin carpeta)
//         Excepción: paths locales que empiezan con "/"
// ═══════════════════════════════════════════════

import type { Project } from "@/types";
import type { Locale } from "@/i18n/config";

// ── Tipos internos ────────────────────────────

type ProjectBase = Omit<Project, "title" | "description" | "shortDescription">;
type ProjectTranslation = Pick<Project, "title" | "description" | "shortDescription">;

// ── Data base (locale-independiente) ─────────

const projectsBase: ProjectBase[] = [
	// ── Proyectos del estudio (Pyrux) ─────────────
	{
		id: "landing_page_medmind",
		technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
		images: [
			"2026-03-23-090701_hyprshot_zj1m2w",
			"2026-03-23-090715_hyprshot_swvta8",
			"2026-03-23-090724_hyprshot_hrt17n",
			"2026-03-23-090751_hyprshot_rlrab6",
			"2026-03-23-090822_hyprshot_ov805i",
			"2026-03-23-090837_hyprshot_bvk5jq",
		],
		liveUrl: "https://www.medmind.com.ar",
		featured: true,
		date: "2026-01-01",
		creatorId: "pyrux",
	},
	{
		id: "cms_medmind",
		technologies: ["nodejs", "express", "stripe", "postgresql", "docker"],
		images: [
			"cms_medmind_1_a99vyl",
			"cms_medmind_2_pmdkwu",
			"cms_medmind_3_lbthh6",
			"cms_medmind_4_pct74n",
		],
		featured: true,
		date: "2026-01-01",
		creatorId: "pyrux",
	},
	{
		id: "pyrux_portfolio",
		technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
		images: [
			"2026-03-23-153843_hyprshot_nf5col",
			"2026-03-23-153904_hyprshot_kysyvd",
			"2026-03-23-153929_hyprshot_zvwpy9",
			"2026-03-23-153939_hyprshot_jkmqdp",
			"2026-03-23-153950_hyprshot_cp4hur",
			"2026-03-23-154004_hyprshot_sbepy9",
			"2026-03-23-154024_hyprshot_yulgki",
		],
		liveUrl: "https://www.pyrux.com.ar",
		featured: true,
		date: "2026-02-01",
		creatorId: "pyrux",
	},
	{
		id: "goal_planner",
		technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion", "supabase"],
		images: [
			"2026-03-23-075519_hyprshot_rsnbhk",
			"2026-03-23-075545_hyprshot_mihlfr",
			"2026-03-23-075622_hyprshot_mc20hf",
			"2026-03-23-080150_hyprshot_virzur",
			"2026-03-23-080217_hyprshot_c7dtuq",
			"2026-03-23-080251_hyprshot_ogc6oz",
			"2026-03-23-080323_hyprshot_nsjzmg",
			"2026-03-23-080409_hyprshot_iy7eob",
			"2026-03-23-080420_hyprshot_yde9k8",
		],
		liveUrl: "https://www.goalplanner.com.ar",
		featured: true,
		date: "2026-01-01",
		creatorId: "pyrux",
	},

	// ── Proyectos personales — Juan ───────────────
	{
		id: "job_finder",
		technologies: ["react", "typescript", "nodejs", "postgresql"],
		images: [],
		githubUrl: "https://github.com/LittleBigPants/job-finder",
		featured: false,
		date: "2025-08-01",
		creatorId: "juan-manuel-garcia",
	},
	{
		id: "task_api",
		technologies: ["nodejs", "express", "postgresql", "docker"],
		images: [],
		githubUrl: "https://github.com/LittleBigPants/task-api",
		featured: false,
		date: "2025-05-01",
		creatorId: "juan-manuel-garcia",
	},
	{
		id: "auth_boilerplate",
		technologies: ["nodejs", "typescript", "postgresql", "express"],
		images: [],
		githubUrl: "https://github.com/LittleBigPants/auth-boilerplate",
		featured: false,
		date: "2025-02-01",
		creatorId: "juan-manuel-garcia",
	},

	// ── Proyectos personales — Gino ───────────────
	{
		id: "gino_ecommerce_funcional",
		technologies: ["react", "tailwindcss", "vite", "github-pages"],
		images: [
			"main-page_fp8su7",
			"log-in_v8rlfr",
			"sign-up_kuwlfg",
			"product-detail_pbkowt",
			"checkout-menu_zcn45w",
			"my-orders_isohqt",
			"my-order_gh7mrg",
			"my-account_yedhs7",
			"edit-account_cc8kay",
		],
		liveUrl: "https://ginogiorgi.github.io/E-Commerse-React-Vite-Tailwind/login",
		featured: true,
		date: "2023-12-27",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_busqueda_animes",
		technologies: ["django", "python", "github-pages", "render"],
		images: [
			"Screenshot_1_zifqxd",
			"Screenshot_2_wff8hd",
			"Screenshot_3_laq7jf",
			"Screenshot_4_efdfed",
			"Screenshot_5_ualmmw",
		],
		liveUrl: "https://geekzone-r616.onrender.com/",
		featured: true,
		date: "2025-07-05",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_minecraft",
		technologies: ["three-js", "css", "vite", "github-pages"],
		images: [
			"2026-03-18-230006_hyprshot_dhhuvs",
			"2026-03-18-230039_hyprshot_iydou9",
			"2026-03-18-230203_hyprshot_eybnag",
		],
		liveUrl: "https://ginogiorgi.github.io/minecraft/",
		featured: true,
		date: "2025-12-22",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_training_camp_2025",
		technologies: ["javascript", "python"],
		images: [
			"1_lkasp9",
			"2_bfgnt9",
			"3_pau5zh",
			"4_ed8psu",
			"5_renpdv",
			"6_kvuzrb",
			"7_sld8nx",
			"8_f8lufc",
			"9_r7qpxf",
		],
		githubUrl: "https://github.com/ginogiorgi/Training_Camp_Argentina_2025",
		featured: false,
		date: "2025-07-19",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_landing_moderna",
		technologies: ["nextjs", "css", "github-pages"],
		images: [
			"2026-03-18-231705_hyprshot_as7sxy",
			"2026-03-18-231718_hyprshot_y6pbcn",
			"2026-03-18-231733_hyprshot_brgu4l",
		],
		liveUrl: "https://ginogiorgi.github.io/modern_ui_ux_reactjs/",
		featured: false,
		date: "2025-11-09",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_todo_list",
		technologies: ["react", "css", "github-pages"],
		images: ["2026-03-19-011738_hyprshot_yigpcl"],
		liveUrl: "https://ginogiorgi.github.io/curso-react-intro/",
		featured: false,
		date: "2023-12-03",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_ecommerce_basico",
		technologies: ["html", "css", "javascript", "github-pages"],
		images: [
			"2026-03-19-011738_hyprshot_amzzto",
			"2026-03-19-012150_hyprshot_x4ksvz",
		],
		liveUrl: "https://ginogiorgi.github.io/cursoFrontendDeveloperJavascriptPractico/",
		featured: false,
		date: "2023-12-26",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_blog",
		technologies: ["html", "css", "javascript", "github-pages"],
		images: ["2026-03-19-012510_hyprshot_rdetkd"],
		liveUrl: "https://ginogiorgi.github.io/asyncLanding/",
		featured: false,
		date: "2023-05-28",
		creatorId: "gino-ruben-giorgi",
	},
	{
		id: "gino_work_in_progress",
		technologies: ["html", "css", "javascript", "github-pages"],
		images: ["2026-03-19-012633_hyprshot_hpcnya"],
		liveUrl: "https://ginogiorgi.github.io/workInProgress/",
		featured: false,
		date: "2023-05-05",
		creatorId: "gino-ruben-giorgi",
	},
];

// ── Traducciones (título + descripciones) ────

const projectsI18n: Record<string, Record<Locale, ProjectTranslation>> = {
	landing_page_medmind: {
		es: {
			title: "MedMind",
			description:
				"Sitio web institucional para MedMind, empresa de traducción especializada en medicina y educación entre español e inglés. Incluye landing page, sección sobre la empresa, formulario de contacto y blog de artículos bilingüe. Diseñado para transmitir confianza y profesionalismo a instituciones de salud, clínicas y universidades. Desde que salió al aire, el sitio genera contactos nuevos todos los días. Dos semanas de desarrollo.",
			shortDescription:
				"Sitio institucional bilingüe para empresa de traducción en medicina y educación.",
		},
		en: {
			title: "MedMind",
			description:
				"Institutional website for MedMind, a translation company specialized in medicine and education between Spanish and English. Includes a landing page, about section, contact form, and bilingual article blog. Designed to convey trust and professionalism to health institutions, clinics, and universities. Since launch, the site has been generating new contacts every day. Two weeks of development.",
			shortDescription:
				"Bilingual institutional website for a medical and educational translation company.",
		},
	},
	cms_medmind: {
		es: {
			title: "CMS MedMind",
			description:
				"Panel de gestión a medida para el equipo de MedMind. Permite publicar y editar noticias del blog en español e inglés directamente desde una interfaz simple, sin tocar código. Entregado en una semana.",
			shortDescription:
				"Panel de gestión con blog bilingüe para el equipo de MedMind. Entregado en una semana.",
		},
		en: {
			title: "MedMind CMS",
			description:
				"Custom management panel for the MedMind team. Allows publishing and editing blog posts in Spanish and English directly from a simple interface, no coding required. Delivered in one week.",
			shortDescription:
				"Bilingual blog management panel for the MedMind team. Delivered in one week.",
		},
	},
	pyrux_portfolio: {
		es: {
			title: "Portfolio Pyrux",
			description:
				"Este mismo sitio. Diseñado y desarrollado por Pyrux para mostrar el trabajo del estudio con la misma calidad que le entregamos a nuestros clientes. Animaciones con Framer Motion, internacionalización en español e inglés, deploy estático automático en Vercel. Dos semanas de desarrollo.",
			shortDescription:
				"El portfolio del estudio: animaciones, i18n y deploy estático. Dos semanas de desarrollo.",
		},
		en: {
			title: "Pyrux Portfolio",
			description:
				"This very site. Designed and developed by Pyrux to showcase the studio's work with the same quality we deliver to our clients. Framer Motion animations, Spanish and English internationalization, automatic static deployment on Vercel. Two weeks of development.",
			shortDescription:
				"The studio's portfolio: animations, i18n, and static deployment. Two weeks of development.",
		},
	},
	goal_planner: {
		es: {
			title: "Goal Planner",
			description:
				"Aplicación web para gestionar metas personales en un calendario interactivo. Los usuarios crean objetivos, los organizan por semana y hacen seguimiento de su progreso en tiempo real. Ya con sus primeros usuarios activos y creciendo de forma orgánica, sin haber hecho marketing todavía. Construida con Next.js y Supabase. Un mes de desarrollo.",
			shortDescription:
				"App de metas personales con primeros usuarios activos y crecimiento orgánico.",
		},
		en: {
			title: "Goal Planner",
			description:
				"Web application to manage personal goals on an interactive calendar. Users create objectives, organize them by week, and track their progress in real time. Already gaining its first active users and growing organically, without any marketing yet. Built with Next.js and Supabase. One month of development.",
			shortDescription:
				"Personal goals app with first active users and organic growth.",
		},
	},
	job_finder: {
		es: {
			title: "Job Finder",
			description:
				"Aplicación web para buscar y guardar ofertas de trabajo. Permite filtrar por tecnología, modalidad y salario. Incluye sistema de favoritos, notas por postulación y recordatorios de seguimiento.",
			shortDescription:
				"App para buscar, filtrar y hacer seguimiento de ofertas laborales.",
		},
		en: {
			title: "Job Finder",
			description:
				"Web application for searching and saving job offers. Allows filtering by technology, work mode, and salary. Includes a favorites system, notes per application, and follow-up reminders.",
			shortDescription:
				"App for searching, filtering, and tracking job offers.",
		},
	},
	task_api: {
		es: {
			title: "Task API",
			description:
				"API REST para gestión de tareas personales con autenticación JWT, roles de usuario y endpoints para crear, priorizar y archivar tareas. Dockerizada y documentada con Swagger.",
			shortDescription:
				"API REST con autenticación JWT para gestión de tareas.",
		},
		en: {
			title: "Task API",
			description:
				"REST API for personal task management with JWT authentication, user roles, and endpoints to create, prioritize, and archive tasks. Dockerized and documented with Swagger.",
			shortDescription:
				"REST API with JWT authentication for task management.",
		},
	},
	auth_boilerplate: {
		es: {
			title: "Auth Boilerplate",
			description:
				"Boilerplate de autenticación con registro, login, refresh tokens y recuperación de contraseña. Pensado para arrancar proyectos sin repetir la misma lógica de auth cada vez.",
			shortDescription:
				"Boilerplate de autenticación completo con JWT y refresh tokens.",
		},
		en: {
			title: "Auth Boilerplate",
			description:
				"Authentication boilerplate with registration, login, refresh tokens, and password recovery. Designed to start projects without repeating the same auth logic every time.",
			shortDescription:
				"Complete authentication boilerplate with JWT and refresh tokens.",
		},
	},
	gino_ecommerce_funcional: {
		es: {
			title: "Ecommerce Funcional",
			description:
				"Aplicación desarrollada con React, Vite y Tailwind CSS, con alto nivel de personalización en diseño y funcionalidades. Incluye integración con API, sistema de cuentas y gestión de órdenes, junto con animaciones, modo oscuro y diseño responsive. Código optimizado y escalable, enfocado en usabilidad, experiencia de usuario y mantenimiento eficiente.",
			shortDescription:
				"Ecommerce completo con cuentas, órdenes, modo oscuro y diseño responsive.",
		},
		en: {
			title: "Functional Ecommerce",
			description:
				"Application built with React, Vite, and Tailwind CSS, featuring a high level of customization in design and functionality. Includes API integration, account system, and order management, along with animations, dark mode, and responsive design. Optimized and scalable code focused on usability, user experience, and efficient maintenance.",
			shortDescription:
				"Full ecommerce with accounts, orders, dark mode, and responsive design.",
		},
	},
	gino_busqueda_animes: {
		es: {
			title: "Búsqueda de Animes",
			description:
				"Plataforma web desarrollada en Python con sistema de autenticación, perfiles de usuario y panel administrativo completo. Incluye gestión de contenido mediante CRUD, búsquedas avanzadas, rankings y sección de noticias, con interfaz moderna y responsive. Proyecto orientado a escalabilidad y organización de datos, integrando múltiples módulos y una experiencia de usuario fluida.",
			shortDescription:
				"Plataforma web de animes con auth, CRUD, rankings y panel administrativo.",
		},
		en: {
			title: "Anime Search",
			description:
				"Web platform built in Python with an authentication system, user profiles, and a complete admin panel. Includes content management via CRUD, advanced search, rankings, and a news section, with a modern and responsive interface. Project focused on scalability and data organization, integrating multiple modules and a smooth user experience.",
			shortDescription:
				"Anime web platform with auth, CRUD, rankings, and admin panel.",
		},
	},
	gino_minecraft: {
		es: {
			title: "Minecraft en el Navegador",
			description:
				"Aplicación 3D desarrollada en el navegador que recrea un entorno tipo Minecraft, con exploración libre, físicas básicas y construcción por bloques. Incluye renderizado en tiempo real, control de cámara y optimización de texturas para una experiencia fluida. Proyecto enfocado en gráficos interactivos, lógica de juego y rendimiento en entornos web.",
			shortDescription:
				"Entorno 3D tipo Minecraft en el navegador con física, bloques y renderizado en tiempo real.",
		},
		en: {
			title: "Browser Minecraft",
			description:
				"3D application built for the browser that recreates a Minecraft-like environment, with free exploration, basic physics, and block construction. Includes real-time rendering, camera control, and texture optimization for a smooth experience. Project focused on interactive graphics, game logic, and performance in web environments.",
			shortDescription:
				"Minecraft-style 3D environment in the browser with physics, blocks, and real-time rendering.",
		},
	},
	gino_training_camp_2025: {
		es: {
			title: "Training Camp Argentina 2025",
			description:
				"Participación en Training Camp Argentina 2025 enfocado en programación competitiva, con entrenamiento intensivo y resolución de problemas complejos. Profundización en programación dinámica y estructuras de datos avanzadas aplicadas a competencias tipo ICPC. Experiencia orientada al desarrollo lógico y analítico, combinando aprendizaje técnico con trabajo colaborativo.",
			shortDescription:
				"Programación competitiva tipo ICPC: dinámica, estructuras de datos y resolución de problemas.",
		},
		en: {
			title: "Training Camp Argentina 2025",
			description:
				"Participation in Training Camp Argentina 2025 focused on competitive programming, with intensive training and complex problem solving. Deep dive into dynamic programming and advanced data structures applied to ICPC-style competitions. An experience focused on logical and analytical development, combining technical learning with collaborative work.",
			shortDescription:
				"ICPC-style competitive programming: dynamic programming, data structures, and problem solving.",
		},
	},
	gino_landing_moderna: {
		es: {
			title: "Landing Page Moderna",
			description:
				"Página web diseñada para comunicar valor de forma clara y efectiva, con enfoque en conversión y experiencia de usuario. Incluye diseño responsive, secciones estructuradas, animaciones sutiles y tiempos de carga optimizados. Desarrollada con buenas prácticas de frontend, priorizando rendimiento, accesibilidad y escalabilidad.",
			shortDescription:
				"Landing page orientada a conversión con animaciones y diseño responsive.",
		},
		en: {
			title: "Modern Landing Page",
			description:
				"Web page designed to communicate value clearly and effectively, focused on conversion and user experience. Includes responsive design, structured sections, subtle animations, and optimized load times. Developed with frontend best practices, prioritizing performance, accessibility, and scalability.",
			shortDescription:
				"Conversion-focused landing page with animations and responsive design.",
		},
	},
	gino_todo_list: {
		es: {
			title: "Todo List",
			description:
				"Aplicación web para testear loading skeletons, useState de React y búsqueda en tiempo real. Proyecto experimental orientado al aprendizaje de patrones de UI y manejo de estado.",
			shortDescription:
				"App de tareas con loading skeletons, búsqueda en tiempo real y manejo de estado React.",
		},
		en: {
			title: "Todo List",
			description:
				"Web application for testing loading skeletons, React useState, and real-time search. Experimental learning project focused on UI patterns and state management.",
			shortDescription:
				"Task app with loading skeletons, real-time search, and React state management.",
		},
	},
	gino_ecommerce_basico: {
		es: {
			title: "E-Commerce Básico",
			description:
				"Aplicación frontend interactiva desarrollada en JavaScript, orientada a la gestión y visualización de productos. Incluye filtrado por categorías, vista de detalle y carrito funcional, con componentes interconectados y lógica dinámica. Diseño responsive y enfoque en usabilidad, ofreciendo una experiencia fluida en distintos dispositivos.",
			shortDescription:
				"E-commerce en JavaScript con filtros por categoría, detalle de producto y carrito.",
		},
		en: {
			title: "Basic E-Commerce",
			description:
				"Interactive frontend application built in JavaScript, focused on product management and display. Includes category filtering, product detail view, and a functional cart, with interconnected components and dynamic logic. Responsive design with a focus on usability, delivering a smooth experience across devices.",
			shortDescription:
				"JavaScript e-commerce with category filters, product detail, and shopping cart.",
		},
	},
	gino_blog: {
		es: {
			title: "Blog Async",
			description:
				"Blog simple para testear la API de YouTube y patrones de programación asíncrona con async/await. Proyecto de aprendizaje centrado en el consumo de APIs externas y manejo de promesas en JavaScript.",
			shortDescription:
				"Blog para testear la API de YouTube y async/await en JavaScript.",
		},
		en: {
			title: "Async Blog",
			description:
				"Simple blog for testing the YouTube API and asynchronous programming patterns with async/await. A learning project centered on consuming external APIs and handling promises in JavaScript.",
			shortDescription:
				"Blog for testing the YouTube API and async/await patterns in JavaScript.",
		},
	},
	gino_work_in_progress: {
		es: {
			title: "Work in Progress",
			description:
				"Página de trabajo en progreso simple, diseñada mientras se construía el portfolio. Muestra una pantalla de placeholder con animación y mensaje de próximo lanzamiento.",
			shortDescription:
				"Placeholder de portfolio con animación y mensaje de próximo lanzamiento.",
		},
		en: {
			title: "Work in Progress",
			description:
				"Simple work-in-progress page created while building the portfolio. Displays a placeholder screen with an animation and a coming-soon message.",
			shortDescription:
				"Portfolio placeholder with animation and coming-soon message.",
		},
	},
};

// ── Merge interno ─────────────────────────────

function buildProjects(locale: Locale): Project[] {
	return projectsBase.map((base) => ({
		...base,
		...projectsI18n[base.id][locale],
	}));
}

// ── API pública ───────────────────────────────

export function getProjectById(id: string, locale: Locale): Project | undefined {
	return buildProjects(locale).find((p) => p.id === id);
}

export function getFeaturedProjects(locale: Locale): Project[] {
	return buildProjects(locale).filter((p) => p.featured);
}

export function getStudioProjects(locale: Locale): Project[] {
	return buildProjects(locale).filter((p) => p.creatorId === "pyrux");
}

export function getProjectsByCreator(creatorId: string, locale: Locale): Project[] {
	return buildProjects(locale).filter((p) => p.creatorId === creatorId);
}

export function getProjectsByTechnology(techId: string, locale: Locale): Project[] {
	return buildProjects(locale).filter((p) => p.technologies.includes(techId));
}

export function getAllProjects(locale: Locale): Project[] {
	return buildProjects(locale);
}
