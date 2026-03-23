// ═══════════════════════════════════════════════
// Datos de proyectos — Pyrux Portfolio
// creatorId: "pyrux" para proyectos del estudio,
//            ID del creador para proyectos personales
// images: Cloudinary public IDs (sin extensión, sin carpeta)
//         Excepción: paths locales que empiezan con "/"
// ═══════════════════════════════════════════════

import type { Project } from "@/types";
import type { Locale } from "@/i18n/config";

export const projects: Record<Locale, Project[]> = {
	es: [
		// ── Proyectos del estudio (Pyrux) ─────────────
		{
			id: "landing_page_medmind",
			title: "Landing Page MedMind",
			description:
				"Landing page moderna y responsive para MedMind, una empresa de servicios de traducción profesional. Diseñada para comunicar confianza y generar consultas de clientes de forma efectiva, con animaciones fluidas y optimización SEO completa.",
			shortDescription:
				"Landing page moderna para empresa de traducción profesional.",
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
			title: "CMS MedMind",
			description:
				"Aplicación web de gestión de contenido desarrollada a medida para MedMind. Permite al equipo administrar traducciones, clientes y facturación desde un panel privado. Incluye integración con Stripe para la gestión de pagos y se despliega en contenedores Docker para máxima portabilidad.",
			shortDescription:
				"Panel de administración con pagos Stripe y despliegue en Docker.",
			technologies: ["nodejs", "express", "stripe", "postgresql", "docker"],
			images: [
				"1_vps9mc",
				"2_xjkpjx",
				"3_tg2p77",
				"4_k6kpoc",
			],
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},
		{
			id: "pyrux_portfolio",
			title: "Portfolio Pyrux",
			description:
				"Este mismo sitio. Portfolio web de Pyrux diseñado y desarrollado íntegramente por el estudio. Muestra proyectos, clientes, integrantes y planes de precios. Construido con Next.js App Router, Tailwind CSS v4 y Framer Motion, con exportación estática y deploy automático en Vercel.",
			shortDescription:
				"Portfolio web del estudio, con animaciones y deploy estático.",
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
			title: "Goal Planner",
			description:
				"Aplicación web de calendario de metas personales. Permite a los usuarios crear objetivos, organizarlos en un calendario interactivo y hacer seguimiento de su progreso semana a semana. Construida con Next.js y Supabase para persistencia en tiempo real.",
			shortDescription:
				"Calendario de metas con seguimiento semanal y persistencia en tiempo real.",
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
			title: "Job Finder",
			description:
				"Aplicación web para buscar y guardar ofertas de trabajo. Permite filtrar por tecnología, modalidad y salario. Incluye sistema de favoritos, notas por postulación y recordatorios de seguimiento.",
			shortDescription:
				"App para buscar, filtrar y hacer seguimiento de ofertas laborales.",
			technologies: ["react", "typescript", "nodejs", "postgresql"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/job-finder",
			featured: false,
			date: "2025-08-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "task_api",
			title: "Task API",
			description:
				"API REST para gestión de tareas personales con autenticación JWT, roles de usuario y endpoints para crear, priorizar y archivar tareas. Dockerizada y documentada con Swagger.",
			shortDescription:
				"API REST con autenticación JWT para gestión de tareas.",
			technologies: ["nodejs", "express", "postgresql", "docker"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/task-api",
			featured: false,
			date: "2025-05-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "auth_boilerplate",
			title: "Auth Boilerplate",
			description:
				"Boilerplate de autenticación con registro, login, refresh tokens y recuperación de contraseña. Pensado para arrancar proyectos sin repetir la misma lógica de auth cada vez.",
			shortDescription:
				"Boilerplate de autenticación completo con JWT y refresh tokens.",
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
			title: "Ecommerce Funcional",
			description:
				"Aplicación desarrollada con React, Vite y Tailwind CSS, con alto nivel de personalización en diseño y funcionalidades. Incluye integración con API, sistema de cuentas y gestión de órdenes, junto con animaciones, modo oscuro y diseño responsive. Código optimizado y escalable, enfocado en usabilidad, experiencia de usuario y mantenimiento eficiente.",
			shortDescription:
				"Ecommerce completo con cuentas, órdenes, modo oscuro y diseño responsive.",
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
			title: "Búsqueda de Animes",
			description:
				"Plataforma web desarrollada en Python con sistema de autenticación, perfiles de usuario y panel administrativo completo. Incluye gestión de contenido mediante CRUD, búsquedas avanzadas, rankings y sección de noticias, con interfaz moderna y responsive. Proyecto orientado a escalabilidad y organización de datos, integrando múltiples módulos y una experiencia de usuario fluida.",
			shortDescription:
				"Plataforma web de animes con auth, CRUD, rankings y panel administrativo.",
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
			title: "Minecraft en el Navegador",
			description:
				"Aplicación 3D desarrollada en el navegador que recrea un entorno tipo Minecraft, con exploración libre, físicas básicas y construcción por bloques. Incluye renderizado en tiempo real, control de cámara y optimización de texturas para una experiencia fluida. Proyecto enfocado en gráficos interactivos, lógica de juego y rendimiento en entornos web.",
			shortDescription:
				"Entorno 3D tipo Minecraft en el navegador con física, bloques y renderizado en tiempo real.",
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
			title: "Training Camp Argentina 2025",
			description:
				"Participación en Training Camp Argentina 2025 enfocado en programación competitiva, con entrenamiento intensivo y resolución de problemas complejos. Profundización en programación dinámica y estructuras de datos avanzadas aplicadas a competencias tipo ICPC. Experiencia orientada al desarrollo lógico y analítico, combinando aprendizaje técnico con trabajo colaborativo.",
			shortDescription:
				"Programación competitiva tipo ICPC: dinámica, estructuras de datos y resolución de problemas.",
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
			title: "Landing Page Moderna",
			description:
				"Página web diseñada para comunicar valor de forma clara y efectiva, con enfoque en conversión y experiencia de usuario. Incluye diseño responsive, secciones estructuradas, animaciones sutiles y tiempos de carga optimizados. Desarrollada con buenas prácticas de frontend, priorizando rendimiento, accesibilidad y escalabilidad.",
			shortDescription:
				"Landing page orientada a conversión con animaciones y diseño responsive.",
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
			title: "Todo List",
			description:
				"Aplicación web para testear loading skeletons, useState de React y búsqueda en tiempo real. Proyecto experimental orientado al aprendizaje de patrones de UI y manejo de estado.",
			shortDescription:
				"App de tareas con loading skeletons, búsqueda en tiempo real y manejo de estado React.",
			technologies: ["react", "css", "github-pages"],
			images: ["2026-03-19-011738_hyprshot_yigpcl"],
			liveUrl: "https://ginogiorgi.github.io/curso-react-intro/",
			featured: false,
			date: "2023-12-03",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "gino_ecommerce_basico",
			title: "E-Commerce Básico",
			description:
				"Aplicación frontend interactiva desarrollada en JavaScript, orientada a la gestión y visualización de productos. Incluye filtrado por categorías, vista de detalle y carrito funcional, con componentes interconectados y lógica dinámica. Diseño responsive y enfoque en usabilidad, ofreciendo una experiencia fluida en distintos dispositivos.",
			shortDescription:
				"E-commerce en JavaScript con filtros por categoría, detalle de producto y carrito.",
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
			title: "Blog Async",
			description:
				"Blog simple para testear la API de YouTube y patrones de programación asíncrona con async/await. Proyecto de aprendizaje centrado en el consumo de APIs externas y manejo de promesas en JavaScript.",
			shortDescription:
				"Blog para testear la API de YouTube y async/await en JavaScript.",
			technologies: ["html", "css", "javascript", "github-pages"],
			images: ["2026-03-19-012510_hyprshot_rdetkd"],
			liveUrl: "https://ginogiorgi.github.io/asyncLanding/",
			featured: false,
			date: "2023-05-28",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "gino_work_in_progress",
			title: "Work in Progress",
			description:
				"Página de trabajo en progreso simple, diseñada mientras se construía el portfolio. Muestra una pantalla de placeholder con animación y mensaje de próximo lanzamiento.",
			shortDescription:
				"Placeholder de portfolio con animación y mensaje de próximo lanzamiento.",
			technologies: ["html", "css", "javascript", "github-pages"],
			images: ["2026-03-19-012633_hyprshot_hpcnya"],
			liveUrl: "https://ginogiorgi.github.io/workInProgress/",
			featured: false,
			date: "2023-05-05",
			creatorId: "gino-ruben-giorgi",
		},
	],
	en: [
		// ── Studio projects (Pyrux) ───────────────────
		{
			id: "landing_page_medmind",
			title: "MedMind Landing Page",
			description:
				"Modern and responsive landing page for MedMind, a professional translation services company. Designed to communicate trust and effectively generate client inquiries, with smooth animations and full SEO optimization.",
			shortDescription:
				"Modern landing page for a professional translation company.",
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
			title: "MedMind CMS",
			description:
				"Custom-built content management web application for MedMind. Allows the team to manage translations, clients, and billing from a private dashboard. Includes Stripe integration for payment management and deploys in Docker containers for maximum portability.",
			shortDescription:
				"Admin panel with Stripe payments and Docker deployment.",
			technologies: ["nodejs", "express", "stripe", "postgresql", "docker"],
			images: [
				"1_vps9mc",
				"2_xjkpjx",
				"3_tg2p77",
				"4_k6kpoc",
			],
			featured: true,
			date: "2026-01-01",
			creatorId: "pyrux",
		},
		{
			id: "pyrux_portfolio",
			title: "Pyrux Portfolio",
			description:
				"This very site. Pyrux's web portfolio designed and developed entirely by the studio. Showcases projects, clients, team members, and pricing plans. Built with Next.js App Router, Tailwind CSS v4, and Framer Motion, with static export and automatic deployment on Vercel.",
			shortDescription:
				"Studio web portfolio with animations and static deployment.",
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
			title: "Goal Planner",
			description:
				"Personal goal calendar web application. Allows users to create objectives, organize them in an interactive calendar, and track their progress week by week. Built with Next.js and Supabase for real-time persistence.",
			shortDescription:
				"Goal calendar with weekly tracking and real-time persistence.",
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

		// ── Personal projects — Juan ──────────────────
		{
			id: "job_finder",
			title: "Job Finder",
			description:
				"Web application for searching and saving job offers. Allows filtering by technology, work mode, and salary. Includes a favorites system, notes per application, and follow-up reminders.",
			shortDescription:
				"App for searching, filtering, and tracking job offers.",
			technologies: ["react", "typescript", "nodejs", "postgresql"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/job-finder",
			featured: false,
			date: "2025-08-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "task_api",
			title: "Task API",
			description:
				"REST API for personal task management with JWT authentication, user roles, and endpoints to create, prioritize, and archive tasks. Dockerized and documented with Swagger.",
			shortDescription:
				"REST API with JWT authentication for task management.",
			technologies: ["nodejs", "express", "postgresql", "docker"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/task-api",
			featured: false,
			date: "2025-05-01",
			creatorId: "juan-manuel-garcia",
		},
		{
			id: "auth_boilerplate",
			title: "Auth Boilerplate",
			description:
				"Authentication boilerplate with registration, login, refresh tokens, and password recovery. Designed to start projects without repeating the same auth logic every time.",
			shortDescription:
				"Complete authentication boilerplate with JWT and refresh tokens.",
			technologies: ["nodejs", "typescript", "postgresql", "express"],
			images: [],
			githubUrl: "https://github.com/LittleBigPants/auth-boilerplate",
			featured: false,
			date: "2025-02-01",
			creatorId: "juan-manuel-garcia",
		},

		// ── Personal projects — Gino ──────────────────
		{
			id: "gino_ecommerce_funcional",
			title: "Functional Ecommerce",
			description:
				"Application built with React, Vite, and Tailwind CSS, featuring a high level of customization in design and functionality. Includes API integration, account system, and order management, along with animations, dark mode, and responsive design. Optimized and scalable code focused on usability, user experience, and efficient maintenance.",
			shortDescription:
				"Full ecommerce with accounts, orders, dark mode, and responsive design.",
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
			title: "Anime Search",
			description:
				"Web platform built in Python with an authentication system, user profiles, and a complete admin panel. Includes content management via CRUD, advanced search, rankings, and a news section, with a modern and responsive interface. Project focused on scalability and data organization, integrating multiple modules and a smooth user experience.",
			shortDescription:
				"Anime web platform with auth, CRUD, rankings, and admin panel.",
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
			title: "Browser Minecraft",
			description:
				"3D application built for the browser that recreates a Minecraft-like environment, with free exploration, basic physics, and block construction. Includes real-time rendering, camera control, and texture optimization for a smooth experience. Project focused on interactive graphics, game logic, and performance in web environments.",
			shortDescription:
				"Minecraft-style 3D environment in the browser with physics, blocks, and real-time rendering.",
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
			title: "Training Camp Argentina 2025",
			description:
				"Participation in Training Camp Argentina 2025 focused on competitive programming, with intensive training and complex problem solving. Deep dive into dynamic programming and advanced data structures applied to ICPC-style competitions. An experience focused on logical and analytical development, combining technical learning with collaborative work.",
			shortDescription:
				"ICPC-style competitive programming: dynamic programming, data structures, and problem solving.",
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
			title: "Modern Landing Page",
			description:
				"Web page designed to communicate value clearly and effectively, focused on conversion and user experience. Includes responsive design, structured sections, subtle animations, and optimized load times. Developed with frontend best practices, prioritizing performance, accessibility, and scalability.",
			shortDescription:
				"Conversion-focused landing page with animations and responsive design.",
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
			title: "Todo List",
			description:
				"Web application for testing loading skeletons, React useState, and real-time search. Experimental learning project focused on UI patterns and state management.",
			shortDescription:
				"Task app with loading skeletons, real-time search, and React state management.",
			technologies: ["react", "css", "github-pages"],
			images: ["2026-03-19-011738_hyprshot_yigpcl"],
			liveUrl: "https://ginogiorgi.github.io/curso-react-intro/",
			featured: false,
			date: "2023-12-03",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "gino_ecommerce_basico",
			title: "Basic E-Commerce",
			description:
				"Interactive frontend application built in JavaScript, focused on product management and display. Includes category filtering, product detail view, and a functional cart, with interconnected components and dynamic logic. Responsive design with a focus on usability, delivering a smooth experience across devices.",
			shortDescription:
				"JavaScript e-commerce with category filters, product detail, and shopping cart.",
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
			title: "Async Blog",
			description:
				"Simple blog for testing the YouTube API and asynchronous programming patterns with async/await. A learning project centered on consuming external APIs and handling promises in JavaScript.",
			shortDescription:
				"Blog for testing the YouTube API and async/await patterns in JavaScript.",
			technologies: ["html", "css", "javascript", "github-pages"],
			images: ["2026-03-19-012510_hyprshot_rdetkd"],
			liveUrl: "https://ginogiorgi.github.io/asyncLanding/",
			featured: false,
			date: "2023-05-28",
			creatorId: "gino-ruben-giorgi",
		},
		{
			id: "gino_work_in_progress",
			title: "Work in Progress",
			description:
				"Simple work-in-progress page created while building the portfolio. Displays a placeholder screen with an animation and a coming-soon message.",
			shortDescription:
				"Portfolio placeholder with animation and coming-soon message.",
			technologies: ["html", "css", "javascript", "github-pages"],
			images: ["2026-03-19-012633_hyprshot_hpcnya"],
			liveUrl: "https://ginogiorgi.github.io/workInProgress/",
			featured: false,
			date: "2023-05-05",
			creatorId: "gino-ruben-giorgi",
		},
	],
};

// ── Funciones auxiliares ─────────────────────────

export function getProjectById(id: string, locale: Locale): Project | undefined {
	return projects[locale].find((p) => p.id === id);
}

export function getFeaturedProjects(locale: Locale): Project[] {
	return projects[locale].filter((p) => p.featured);
}

export function getStudioProjects(locale: Locale): Project[] {
	return projects[locale].filter((p) => p.creatorId === "pyrux");
}

export function getProjectsByCreator(creatorId: string, locale: Locale): Project[] {
	return projects[locale].filter((p) => p.creatorId === creatorId);
}

export function getProjectsByTechnology(techId: string, locale: Locale): Project[] {
	return projects[locale].filter((p) => p.technologies.includes(techId));
}
