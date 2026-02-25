const features = [
	{
		title: "Desarrollo Web",
		desc: "Diseñamos y desarrollamos sitios web modernos y responsivos que ayudan a tu negocio a destacarse y atraer nuevos clientes.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--coral-bright)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
				<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			</svg>
		),
	},
	{
		title: "Software a Medida",
		desc: "Creamos sistemas personalizados adaptados a tus procesos para mejorar la organización, la eficiencia y el trabajo diario.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--coral-bright)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
			</svg>
		),
	},
	{
		title: "Automatización de Procesos",
		desc: "Automatizamos tareas repetitivas, integraciones y comunicaciones para que tu empresa ahorre tiempo y reduzca trabajo manual.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--coral-bright)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M12 18V5" />
				<path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
				<path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
				<path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
				<path d="M18 18a4 4 0 0 0 2-7.464" />
				<path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
				<path d="M6 18a4 4 0 0 1-2-7.464" />
				<path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
			</svg>
		),
	},
	{
		title: "Diseño UI y Experiencia Digital",
		desc: "Interfaces limpias e intuitivas pensadas para mejorar la experiencia de usuario y la percepción profesional de tu marca.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--coral-bright)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<circle cx="12" cy="12" r="10" />
				<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
				<path d="M2 12h20" />
			</svg>
		),
	},
	{
		title: "Optimización y Rendimiento",
		desc: "Mejoramos sitios y sistemas existentes para que sean más rápidos, confiables y efectivos para tus objetivos.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--coral-bright)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M12 19h8" />
				<path d="m4 17 6-6-6-6" />
			</svg>
		),
	},
	{
		title: "Mantenimiento y Soporte",
		desc: "Actualizaciones, seguridad y soporte técnico continuo para que tus productos digitales funcionen sin problemas.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="var(--coral-bright)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
			</svg>
		),
	},
];

export default function OurServices() {
	return (
		<section className="mb-14 animate-fade-in-up [animation-delay:0.55s]">
			<h2 className="font-display text-[1.4rem] font-semibold mb-5 flex items-center gap-2.5">
				<span className="text-coral font-bold">⟩</span> Que hacemos
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
				{features.map((f) => (
					<a
						key={f.title}
						href="#"
						className="block p-5 rounded-[14px] border border-border bg-card backdrop-blur-xl transition-all duration-250 ease-in-out no-underline text-inherit cursor-pointer hover:-translate-y-1 hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]">
						<div className="flex items-center justify-center mb-3">
							{f.icon}
						</div>
						<h3 className="font-display text-base font-semibold text-primary mb-1.5">
							{f.title}
						</h3>
						<p className="text-[0.85rem] text-muted leading-normal">{f.desc}</p>
					</a>
				))}
			</div>
		</section>
	);
}
