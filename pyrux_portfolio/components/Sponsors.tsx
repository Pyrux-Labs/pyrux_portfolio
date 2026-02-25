export default function Sponsors() {
	return (
		<section className="mb-14 animate-fade-in-up [animation-delay:0.72s]">
			<p className="font-display text-[1.4rem] font-semibold mb-6 text-center">
				Supported by
			</p>
			<div className="flex items-center justify-center gap-10 max-[480px]:gap-4 flex-wrap">
				<a
					href="#"
					className="flex items-center justify-center px-8 max-[480px]:px-6 py-5 max-[480px]:py-4 rounded-2xl border border-border bg-card backdrop-blur-xl no-underline transition-all duration-250 ease-in-out hover:-translate-y-1 hover:border-border-accent hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]">
					<svg
						width="100"
						height="24"
						viewBox="0 0 100 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M12 6v6l4 2"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<text
							x="28"
							y="16"
							fill="currentColor"
							fontSize="14"
							fontFamily="var(--font-body)">
							OpenAI
						</text>
					</svg>
				</a>
				<a
					href="#"
					className="flex items-center justify-center px-8 max-[480px]:px-6 py-5 max-[480px]:py-4 rounded-2xl border border-border bg-card backdrop-blur-xl no-underline transition-all duration-250 ease-in-out hover:-translate-y-1 hover:border-border-accent hover:shadow-[0_12px_40px_var(--shadow-coral-soft)]">
					<svg
						width="120"
						height="24"
						viewBox="0 0 120 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							x="2"
							y="4"
							width="16"
							height="16"
							rx="3"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M6 10h8M6 14h5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<text
							x="24"
							y="16"
							fill="currentColor"
							fontSize="14"
							fontFamily="var(--font-body)">
							Blacksmith
						</text>
					</svg>
				</a>
			</div>
		</section>
	);
}
