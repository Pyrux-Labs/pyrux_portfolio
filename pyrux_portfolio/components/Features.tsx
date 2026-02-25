const features = [
	{
		title: "Runs on Your Machine",
		desc: "Mac, Windows, or Linux. Anthropic, OpenAI, or local models. Private by default—your data stays yours.",
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
		title: "Any Chat App",
		desc: "Talk to it on WhatsApp, Telegram, Discord, Slack, Signal, or iMessage. Works in DMs and group chats.",
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
		title: "Persistent Memory",
		desc: "Remembers you and becomes uniquely yours. Your preferences, your context, your AI.",
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
		title: "Browser Control",
		desc: "It can browse the web, fill forms, and extract data from any site.",
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
		title: "Full System Access",
		desc: "Read and write files, run shell commands, execute scripts. Full access or sandboxed—your choice.",
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
		title: "Skills & Plugins",
		desc: "Extend with community skills or build your own. It can even write its own.",
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

export default function Features() {
	return (
		<section className="features">
			<h2 className="section-title">
				<span className="claw-accent">⟩</span> What It Does
			</h2>
			<div className="features-grid">
				{features.map((f) => (
					<a key={f.title} href="#" className="feature-card">
						<div className="feature-icon">{f.icon}</div>
						<h3 className="feature-title">{f.title}</h3>
						<p className="feature-desc">{f.desc}</p>
					</a>
				))}
			</div>
		</section>
	);
}
