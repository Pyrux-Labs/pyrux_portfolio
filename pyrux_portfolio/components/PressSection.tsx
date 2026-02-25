export default function PressSection() {
	return (
		<section className="mb-14 animate-fade-in-up [animation-delay:0.65s]">
			<h2 className="font-display text-[1.4rem] font-semibold mb-5 flex items-center gap-2.5">
				<span className="text-coral font-bold">⟩</span> Press &amp; Community
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				{/* MacStories */}
				<div className="flex flex-col items-center gap-4 px-7 py-6 rounded-2xl border border-border bg-card-strong backdrop-blur-xl text-primary transition-all duration-250 ease-in-out text-center hover:-translate-y-1 hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]">
					<div className="flex items-center gap-2.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="var(--coral-bright)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-7 h-7 text-muted">
							<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
							<path d="M18 14h-8" />
							<path d="M15 18h-5" />
							<path d="M10 6h8v4h-8V6Z" />
						</svg>
						<span className="font-display text-[1.1rem] font-semibold text-secondary tracking-[0.02em]">
							MacStories
						</span>
					</div>
					<blockquote className="font-display text-base font-medium leading-normal text-primary m-0 italic">
						&ldquo;Featured as one of the must-try AI tools for Mac power users.
						OpenClaw brings a new paradigm of local-first AI assistants.&rdquo;
					</blockquote>
					<cite className="text-[0.9rem] text-coral font-medium not-italic">
						— John Voorhees, MacStories
					</cite>
				</div>
				{/* StarryHope */}
				<div className="flex flex-col items-center gap-4 px-7 py-6 rounded-2xl border border-border bg-card-strong backdrop-blur-xl text-primary transition-all duration-250 ease-in-out text-center hover:-translate-y-1 hover:border-coral hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]">
					<div className="flex items-center gap-2.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="var(--coral-bright)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-7 h-7 text-muted">
							<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
						</svg>
						<span className="font-display text-[1.1rem] font-semibold text-secondary tracking-[0.02em]">
							StarryHope
						</span>
					</div>
					<blockquote className="font-display text-base font-medium leading-normal text-primary m-0 italic">
						&ldquo;OpenClaw is a remarkable open-source project that puts
						privacy first while delivering enterprise-grade AI assistant
						capabilities to individual users.&rdquo;
					</blockquote>
					<cite className="text-[0.9rem] text-coral font-medium not-italic">
						— Editorial Team, StarryHope
					</cite>
				</div>
			</div>
		</section>
	);
}
