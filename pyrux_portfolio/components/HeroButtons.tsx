export default function HeroButtons() {
	return (
		<section className="mb-10 animate-fade-in-up [animation-delay:0.5s] text-center">
			<div className="flex justify-center gap-4">
				<a
					href="#"
					className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card-strong border border-border no-underline transition-all duration-300 ease-in-out hover:border-coral hover:shadow-[0_4px_20px_var(--shadow-coral-mid)]">
					<span className="text-[0.9rem] text-primary">
						Contacta con nosotros
					</span>
					<span className="text-muted transition-colors duration-200 group-hover:text-coral">
						→
					</span>
				</a>

				<a
					href="#"
					className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card-strong border border-border no-underline transition-all duration-300 ease-in-out hover:border-coral hover:shadow-[0_4px_20px_var(--shadow-coral-mid)]">
					<span className="text-[0.9rem] text-primary">Nuestros Proyectos</span>
					<span className="text-muted transition-colors duration-200 group-hover:text-coral">
						→
					</span>
				</a>
			</div>
		</section>
	);
}
