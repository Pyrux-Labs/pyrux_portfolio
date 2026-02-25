"use client";

export default function Newsletter() {
	return (
		<section className="newsletter">
			<div className="newsletter-card">
				<h2 className="newsletter-title">Stay in the Loop</h2>
				<p className="newsletter-desc">
					Get updates on new features, skills, and community highlights. No
					spam, unsubscribe anytime.
				</p>
				<form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
					<input
						type="email"
						placeholder="your@email.com"
						className="newsletter-input"
						autoComplete="email"
						required
					/>
					<button type="submit" className="newsletter-btn">
						Subscribe
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							width="16"
							height="16">
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</button>
				</form>
			</div>
		</section>
	);
}
