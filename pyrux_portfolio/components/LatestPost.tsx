export default function LatestPost() {
	return (
		<section className="mb-10 animate-fade-in-up [animation-delay:0.5s] text-center">
			<a
				href="#"
				className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card-strong border border-border no-underline transition-all duration-300 ease-in-out hover:border-coral hover:shadow-[0_4px_20px_var(--shadow-coral-mid)]">
				<span className="px-2 py-[3px] rounded-xl bg-coral text-white text-[0.7rem] font-semibold uppercase tracking-[0.5px]">
					New
				</span>
				<span className="text-[0.9rem] text-primary">
					OpenClaw Partners with VirusTotal for Skill Security
				</span>
				<span className="text-muted transition-colors duration-200 group-hover:text-coral">
					→
				</span>
			</a>
		</section>
	);
}
