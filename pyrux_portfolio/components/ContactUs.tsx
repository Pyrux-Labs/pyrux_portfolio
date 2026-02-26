import { Mail } from "lucide-react";

const ctaItems = [
	{
		label: "Linkedin",
		sublabel: "Conecta con nosotros",
		hoverBorder: "var(--linkedin-color)",
		hoverShadow: "var(--linkedin-shadow)",
		hoverIcon: "var(--linkedin-color)",
		icon: (
			<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
				<path d="M20.447 20.452H16.89v-5.569c0-1.327-.027-3.036-1.851-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.347V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a1.988 1.988 0 1 1 0-3.976 1.988 1.988 0 0 1 0 3.976zM6.89 20.452H3.783V9H6.89v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.451C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.174V1.723C24 .771 23.2 0 22.222 0z" />
			</svg>
		),
	},

	{
		label: "Email",
		sublabel: "Envíanos un mensaje",
		hoverBorder: "var(--cyan-bright)",
		hoverShadow: "var(--shadow-cyan-soft)",
		hoverIcon: "var(--cyan-bright)",
		icon: <Mail size={24} strokeWidth={2} />,
	},
	{
		label: "Whatsapp",
		sublabel: "Chatea con nosotros",
		hoverBorder: "var(--whatsapp-color)",
		hoverShadow: "var(--whatsapp-shadow)",
		hoverIcon: "var(--whatsapp-color)",
		icon: (
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.4 0 .06 5.34.06 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.63a11.9 11.9 0 0 0 5.8 1.48h.01c6.65 0 12-5.34 12-11.93 0-3.18-1.24-6.17-3.54-8.44ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.88 9.88 0 0 1-1.52-5.28C2.18 6.5 6.7 2 12.05 2c2.64 0 5.12 1.03 6.98 2.9a9.86 9.86 0 0 1 2.9 7.01c0 5.44-4.53 9.89-9.87 9.89Zm5.44-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
			</svg>
		),
	},
	{
		label: "Instagram",
		sublabel: "Síguenos en Instagram",
		hoverBorder: "var(--instagram-color)",
		hoverShadow: "var(--instagram-shadow)",
		hoverIcon: "var(--instagram-color)",
		icon: (
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
				<path d="M16 11.37a4 4 0 1 1-4.37-4.37 4 4 0 0 1 4.37 4.37z" />
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
			</svg>
		),
	},
];

export default function ContactUs() {
	return (
		<div className="mb-14 animate-fade-in-up [animation-delay:0.65s]">
			<h2 className="font-display text-[1.4rem] font-semibold mb-5 flex items-center gap-2.5">
				<span className="text-coral font-bold">⟩</span> Contactanos
			</h2>
			<section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 animate-fade-in-up [animation-delay:0.45s]">
				{ctaItems.map((item) => (
					<a
						key={item.label}
						href="#"
						className="group flex flex-col items-center gap-2 py-6 px-4 max-[480px]:py-5 max-[480px]:px-3 rounded-2xl border border-border bg-card backdrop-blur-xl no-underline text-primary transition-all duration-250 ease-in-out hover:-translate-y-1 hover:border-(--cta-border) hover:shadow-[0_12px_40px_var(--cta-shadow)]"
						style={
							{
								"--cta-border": item.hoverBorder,
								"--cta-shadow": item.hoverShadow,
								"--cta-icon": item.hoverIcon,
							} as React.CSSProperties
						}>
						<div className="w-7 h-7 text-coral transition-transform duration-250 ease-in-out group-hover:scale-110 group-hover:text-(--cta-icon)">
							{item.icon}
						</div>
						<span className="font-display font-semibold text-base max-[480px]:text-[0.9rem]">
							{item.label}
						</span>
						<span className="text-[0.8rem] text-muted">{item.sublabel}</span>
					</a>
				))}
			</section>
		</div>
	);
}
