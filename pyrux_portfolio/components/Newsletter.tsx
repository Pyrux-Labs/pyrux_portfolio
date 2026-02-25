"use client";

export default function Newsletter() {
	return (
		<section className="mb-14 animate-fade-in-up [animation-delay:0.7s]">
			<div
				className="text-center px-8 py-10 max-[480px]:px-5 max-[480px]:py-7 rounded-[20px] border border-border backdrop-blur-xl"
				style={{ background: "var(--newsletter-gradient)" }}>
				<h2 className="font-display text-[1.4rem] font-semibold mb-2 flex items-center justify-center gap-2.5">
					Stay in the Loop
				</h2>
				<p className="text-[0.95rem] text-secondary mb-6 max-w-[400px] mx-auto">
					Get updates on new features, skills, and community highlights. No
					spam, unsubscribe anytime.
				</p>
				<form
					className="flex gap-3 max-w-[440px] mx-auto max-[480px]:flex-col"
					onSubmit={(e) => e.preventDefault()}>
					<input
						type="email"
						placeholder="your@email.com"
						className="flex-1 max-[480px]:w-full px-[18px] py-3.5 rounded-xl border border-border bg-card-strong text-primary font-body text-[0.95rem] outline-none transition-all duration-250 ease-in-out placeholder:text-muted focus:border-coral focus:shadow-[0_0_0_3px_var(--surface-coral-soft)]"
						autoComplete="email"
						required
					/>
					<button
						type="submit"
						className="group inline-flex items-center gap-2 max-[480px]:w-full max-[480px]:justify-center px-6 py-3.5 rounded-xl border-none font-display text-[0.95rem] font-semibold text-white cursor-pointer transition-all duration-250 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--shadow-coral-strong)] active:translate-y-0"
						style={{
							background:
								"linear-gradient(135deg, var(--coral-bright) 0%, var(--coral-dark) 100%)",
							boxShadow: "0 4px 20px var(--shadow-coral-mid)",
						}}>
						Subscribe
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-[18px] h-[18px] transition-transform duration-200 ease-in-out group-hover:translate-x-[3px]">
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</button>
				</form>
			</div>
		</section>
	);
}
