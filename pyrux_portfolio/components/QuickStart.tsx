export default function QuickStart() {
	return (
		<section className="mb-14 animate-fade-in-up [animation-delay:0.6s]">
			<h2 className="font-display text-[1.4rem] font-semibold mb-5 flex items-center gap-2.5">
				<span className="text-coral font-bold">⟩</span> Quick Start
			</h2>
			<div className="bg-elevated border border-border rounded-xl overflow-hidden">
				<div className="flex items-center gap-2 px-4 py-3 bg-overlay border-b border-border max-[480px]:flex-wrap max-[480px]:gap-2">
					<span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
					<span className="w-3 h-3 rounded-full bg-[#febc2e]" />
					<span className="w-3 h-3 rounded-full bg-[#28c840]" />
					<div className="flex gap-1 bg-overlay p-[3px] rounded-md">
						<button className="font-mono text-[0.7rem] px-2.5 py-1 border-none rounded bg-cyan text-deep font-semibold cursor-pointer transition-all duration-150 ease-in-out">
							One-liner
						</button>
						<button className="font-mono text-[0.7rem] px-2.5 py-1 border-none rounded bg-transparent text-muted cursor-pointer transition-all duration-150 ease-in-out hover:text-secondary">
							npm
						</button>
						<button className="font-mono text-[0.7rem] px-2.5 py-1 border-none rounded bg-transparent text-muted cursor-pointer transition-all duration-150 ease-in-out hover:text-secondary">
							Hackable
						</button>
						<button className="font-mono text-[0.7rem] px-2.5 py-1 border-none rounded bg-transparent text-muted cursor-pointer transition-all duration-150 ease-in-out hover:text-secondary">
							macOS
						</button>
					</div>
					<span className="ml-auto text-[0.75rem] text-muted font-mono">
						bash
					</span>
				</div>
				<div className="px-5 py-4 font-mono text-[0.9rem] leading-[1.6] max-[480px]:px-3.5 max-[480px]:py-3 max-[480px]:text-[0.65rem]">
					<div className="flex items-center gap-2 max-[480px]:gap-1.5 py-1 text-muted italic">
						# Works everywhere. On macOS, first run may need an Administrator
						for Homebrew.
					</div>
					<div className="group flex items-center gap-2 max-[480px]:gap-1.5 py-1 text-primary">
						<span className="text-coral select-none">$</span>
						<span>curl -fsSL https://openclaw.ai/install.sh | bash</span>
						<button
							className="opacity-60 group-hover:opacity-100 ml-auto flex items-center justify-center w-7 h-7 border-none rounded-md bg-interactive text-muted cursor-pointer transition-all duration-200 ease-in-out hover:bg-interactive-hover hover:text-primary shrink-0"
							title="Copy">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="w-3.5 h-3.5">
								<rect x="9" y="9" width="13" height="13" rx="2" />
								<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<p className="mt-4 text-[0.9rem] text-muted text-center">
				Works on macOS, Windows &amp; Linux. The one-liner installs Node.js and
				everything else for you.
			</p>
		</section>
	);
}
