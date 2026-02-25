export default function Hero() {
	return (
		<header className="text-center mb-14 animate-fade-in-up">
			<div
				className="group w-20 h-20 min-[481px]:w-[100px] min-[481px]:h-[100px] mx-auto mb-6 animate-float cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:[animation:none]"
				aria-hidden="true">
				<svg
					viewBox="0 0 120 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full drop-shadow-[0_0_20px_var(--logo-glow)] transition-[filter] duration-300 ease-in-out group-hover:drop-shadow-[0_0_30px_var(--logo-glow-hover)]">
					{/* Lobster Body */}
					<path
						d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z"
						fill="url(#lobster-gradient)"
					/>
					{/* Left Claw */}
					<path
						d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z"
						fill="url(#lobster-gradient)"
						className="origin-right animate-claw-snap"
					/>
					{/* Right Claw */}
					<path
						d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z"
						fill="url(#lobster-gradient)"
						className="origin-left animate-claw-snap"
						style={{ animationDelay: "0.2s" }}
					/>
					{/* Antenna */}
					<path
						d="M45 15 Q35 5 30 8"
						stroke="var(--coral-bright)"
						strokeWidth="2"
						strokeLinecap="round"
						className="origin-center animate-wiggle"
					/>
					<path
						d="M75 15 Q85 5 90 8"
						stroke="var(--coral-bright)"
						strokeWidth="2"
						strokeLinecap="round"
						className="origin-center animate-wiggle"
					/>
					{/* Eyes */}
					<circle cx="45" cy="35" r="6" fill="var(--bg-deep)" />
					<circle cx="75" cy="35" r="6" fill="var(--bg-deep)" />
					<circle
						cx="46"
						cy="34"
						r="2"
						fill="var(--cyan-bright)"
						className="animate-blink"
					/>
					<circle
						cx="76"
						cy="34"
						r="2"
						fill="var(--cyan-bright)"
						className="animate-blink"
					/>
					<defs>
						<linearGradient
							id="lobster-gradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%">
							<stop offset="0%" stopColor="var(--logo-gradient-start)" />
							<stop offset="100%" stopColor="var(--logo-gradient-end)" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<h1 className="font-display text-[clamp(3rem,10vw,4.5rem)] font-bold tracking-[-0.03em] leading-none mb-3">
				<span
					className="bg-clip-text text-transparent animate-gradient-shift"
					style={{
						backgroundImage:
							"linear-gradient(135deg, var(--hero-title-start) 0%, var(--coral-bright) 52%, var(--hero-title-end) 100%)",
						backgroundSize: "200% 200%",
					}}>
					OpenClaw
				</span>
			</h1>
			<p className="font-display text-[1.1rem] font-medium text-coral tracking-[0.15em] uppercase mb-5 animate-fade-in-up [animation-delay:0.15s]">
				The AI that actually does things.
			</p>
			<p className="text-[1.1rem] text-secondary max-w-[780px] mx-auto leading-[1.7] animate-fade-in-up [animation-delay:0.3s]">
				Clears your inbox, sends emails, manages your calendar, checks you in
				for flights.
				<br />
				All from WhatsApp, Telegram, or any chat app you already use.
			</p>
		</header>
	);
}
