// ═══════════════════════════════════════════════
// Footer — Pyrux Portfolio
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

const socialLinks = [
	{ label: "LinkedIn", href: "https://linkedin.com/company/pyrux" },
	{ label: "Email", href: "mailto:contacto@pyrux.dev" },
	{ label: "WhatsApp", href: "https://wa.me/5491112345678" },
	{ label: "Instagram", href: "https://instagram.com/pyrux.dev" },
];

export default function Footer() {
	return (
		<motion.footer
			className="mt-auto pt-10 text-center text-[0.9rem] text-muted"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}>
			<nav
				className="flex flex-wrap justify-center items-center gap-3 mb-4 text-[0.95rem]"
				aria-label="Redes sociales">
				{socialLinks.map((link) => (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
						{link.label}
					</a>
				))}
			</nav>

			<p className="mt-3 text-[0.8rem] text-muted opacity-70">
				© {currentYear} Pyrux. Todos los derechos reservados.
			</p>
			<p className="mt-3 text-[0.7rem] text-muted opacity-70 pb-4">
				Designed by Pyrux
			</p>
		</motion.footer>
	);
}
