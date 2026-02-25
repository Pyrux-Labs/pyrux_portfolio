export default function QuickStart() {
	return (
		<section className="quickstart">
			<h2 className="section-title">
				<span className="claw-accent">⟩</span> Quick Start
			</h2>
			<div className="code-block">
				<div className="code-header">
					<span className="code-dot" />
					<span className="code-dot" />
					<span className="code-dot" />
					<div className="mode-switch">
						<button className="mode-btn active">One-liner</button>
						<button className="mode-btn">npm</button>
						<button className="mode-btn">Hackable</button>
						<button className="mode-btn">macOS</button>
					</div>
					<span className="code-title">bash</span>
				</div>
				<div className="code-content">
					<div className="code-line comment">
						# Works everywhere. On macOS, first run may need an Administrator
						for Homebrew.
					</div>
					<div className="code-line cmd">
						<span className="code-prompt">$</span>
						<span>curl -fsSL https://openclaw.ai/install.sh | bash</span>
						<button className="copy-line-btn" title="Copy">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<rect x="9" y="9" width="13" height="13" rx="2" />
								<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<p className="quickstart-note">
				Works on macOS, Windows &amp; Linux. The one-liner installs Node.js and
				everything else for you.
			</p>
		</section>
	);
}
