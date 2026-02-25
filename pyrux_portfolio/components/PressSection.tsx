export default function PressSection() {
	return (
		<section className="press-section">
			<h2 className="section-title">
				<span className="claw-accent">⟩</span> Press &amp; Community
			</h2>
			<div className="press-grid">
				{/* MacStories */}
				<div className="press-card">
					<div className="press-source">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="var(--coral-bright)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
							<path d="M18 14h-8" />
							<path d="M15 18h-5" />
							<path d="M10 6h8v4h-8V6Z" />
						</svg>
						<span className="press-name">MacStories</span>
					</div>
					<blockquote className="press-quote">
						&ldquo;Featured as one of the must-try AI tools for Mac power users.
						OpenClaw brings a new paradigm of local-first AI assistants.&rdquo;
					</blockquote>
					<cite className="press-author">— John Voorhees, MacStories</cite>
				</div>
				{/* StarryHope */}
				<div className="press-card">
					<div className="press-source">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="var(--coral-bright)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
						</svg>
						<span className="press-name">StarryHope</span>
					</div>
					<blockquote className="press-quote">
						&ldquo;OpenClaw is a remarkable open-source project that puts
						privacy first while delivering enterprise-grade AI assistant
						capabilities to individual users.&rdquo;
					</blockquote>
					<cite className="press-author">— Editorial Team, StarryHope</cite>
				</div>
			</div>
		</section>
	);
}
