export default function Sponsors() {
	return (
		<section className="sponsors">
			<p className="sponsors-label">Supported by</p>
			<div className="sponsors-row">
				<a href="#" className="sponsor-card">
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
				<a href="#" className="sponsor-card">
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
