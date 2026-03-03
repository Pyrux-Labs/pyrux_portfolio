// ═══════════════════════════════════════════════
// Footer — Pyrux Portfolio
// ═══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const currentYear = new Date().getFullYear();
const CONTACT_EMAIL = "pyrux@pyrux.com.ar";

const socialLinks = [
	{ label: "LinkedIn", href: "https://linkedin.com/company/pyrux" },
	{ label: "Email", action: "copy-email" as const },
	{ label: "WhatsApp", href: "https://wa.me/5491112345678" },
	{ label: "Instagram", href: "https://instagram.com/pyrux.dev" },
];

export default function Footer() {
	const { copy } = useCopyToClipboard();

	const handleClick = async (link: (typeof socialLinks)[0]) => {
		if (link.action === "copy-email") {
			await copy(CONTACT_EMAIL);
			toast.success("Email copiado al portapapeles", {
				description: CONTACT_EMAIL,
				duration: 2500,
			});
		}
	};

	return (
		<>
			<motion.footer
				className="mt-auto pt-10 text-center text-[0.9rem] text-muted"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}>
				<nav
					className="flex flex-wrap justify-center items-center gap-3 mb-4 text-[0.95rem]"
					aria-label="Redes sociales">
					{socialLinks.map((link) => {
						const isLink = !!link.href;
						const Component = isLink ? "a" : "button";
						const extraProps = isLink
							? {
									href: link.href,
									target: "_blank" as const,
									rel: "noopener noreferrer",
								}
							: { type: "button" as const };

						return (
							<Component
								key={link.label}
								{...extraProps}
								onClick={() => handleClick(link)}
								className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan cursor-pointer">
								{link.label}
							</Component>
						);
					})}
				</nav>

				<p className="mt-3 text-[0.8rem] text-muted opacity-70">
					© {currentYear} Pyrux. Todos los derechos reservados.
				</p>
				<p className="mt-3 text-[0.7rem] text-muted opacity-70 pb-4">
					Designed by Pyrux
				</p>
			</motion.footer>
			<Toaster
				position="bottom-center"
				toastOptions={{
					style: {
						background: "var(--bg-elevated)",
						color: "var(--text-primary)",
						border: "1px solid var(--border-subtle)",
					},
				}}
			/>
		</>
	);
}
