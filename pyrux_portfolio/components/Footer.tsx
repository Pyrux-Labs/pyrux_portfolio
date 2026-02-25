export default function Footer() {
	return (
		<footer className="mt-auto pt-10 text-center text-[0.9rem] text-muted animate-fade-in-up [animation-delay:0.75s]">
			<nav className="flex justify-center items-center gap-3 mb-4 text-[0.95rem]">
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Linkedin
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Email
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Whatsapp
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Github
				</a>
				<a
					href="#"
					className="text-coral no-underline transition-colors duration-200 ease-in-out hover:text-cyan">
					Instagram
				</a>
			</nav>

			<p className="mt-3 text-[0.8rem] text-muted opacity-70">
				© Copyright Pyrux Todos los derechos reservados
			</p>
			<p className="mt-3 text-[0.7rem] text-muted opacity-70">
				Designed by Pyrux
			</p>
		</footer>
	);
}
