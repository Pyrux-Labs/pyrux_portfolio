export default function Footer() {
	return (
		<footer className="mt-auto pt-10 text-center text-[0.9rem] text-muted animate-fade-in-up [animation-delay:0.75s]">
			<nav className="flex justify-center items-center gap-3 mb-4 text-[0.95rem]">
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Blog
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Showcase
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Shoutouts
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Integrations
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Trust
				</a>
			</nav>
			<p>
				Built by{" "}
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Peter Steinberger
				</a>{" "}
				and the community.
			</p>
			<p className="mt-3 text-[0.8rem] text-muted opacity-70">
				OpenClaw is an independent project. Not affiliated with any company
				mentioned on this page.
			</p>
		</footer>
	);
}
