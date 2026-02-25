const projects = [
	{
		author: "@jonahships_",
		quote:
			"Setup @openclaw by @steipete yesterday. All I have to say is, wow. First I was using my Claude Max sub and I used all of my limit quickly, so today I had my claw bot setup a proxy. The future is already here.",
		avatar: "jonahships_",
	},
	{
		author: "@AryehDubois",
		quote:
			"Tried Claw by @steipete. I tried to build my own AI assistant bots before, and I am very impressed how many hard things Claw gets right. Persistent memory, persona onboarding, comms integration.",
		avatar: "AryehDubois",
	},
	{
		author: "@markjaquith",
		quote:
			"I've been saying for like six months that even if LLMs suddenly stopped improving, we could spend years discovering new transformative uses. @openclaw feels like that kind of leap forward.",
		avatar: "markjaquith",
	},
	{
		author: "@danpeguine",
		quote:
			"Why @openclaw is nuts: your context and skills live on YOUR computer, not a walled garden. It's open source. Growing community building skills. Proactive AF: cron jobs, reminders, background tasks.",
		avatar: "danpeguine",
	},
	{
		author: "@nateliason",
		quote:
			"Yeah this was 1,000% worth it. Separate Claude subscription + Claw, managing sessions I can kick off anywhere, autonomously running tests and capturing errors then resolving them and opening PRs...",
		avatar: "nateliason",
	},
	{
		author: "@nathanclark_",
		quote:
			"A smart model with eyes and hands at a desk with keyboard and mouse. You message it like a coworker and it does everything a person could do. That's what you have now.",
		avatar: "nathanclark_",
	},
];

const clients = [
	{
		author: "@nickvasiles",
		quote:
			"Can't believe how quickly @openclaw can spin up entire projects. I described a simple SaaS idea and within minutes it had a working prototype with authentication, database, and UI. Mind-blowing.",
		avatar: "nickvasiles",
	},
	{
		author: "@techmeme",
		quote:
			"OpenClaw represents a new breed of AI assistants that actually execute tasks rather than just answering questions. The integration with chat apps is brilliant.",
		avatar: "techmeme",
	},
	{
		author: "@swyx",
		quote:
			"The best part about @openclaw is that it runs locally. Your data never leaves your machine. That's how AI assistants should work.",
		avatar: "swyx",
	},
	{
		author: "@rauchg",
		quote:
			"Open source AI assistants that can take real actions on your behalf — this is the future we've been building toward. @openclaw nails it.",
		avatar: "rauchg",
	},
	{
		author: "@levelsio",
		quote:
			"Just had @openclaw clear my entire inbox, respond to important emails, and schedule 3 meetings. All from a WhatsApp message. Living in the future.",
		avatar: "levelsio",
	},
	{
		author: "@dhh",
		quote:
			"Running your own AI agent on your own hardware, accessible via any chat app. This is computing freedom at its finest. Bravo @openclaw.",
		avatar: "dhh",
	},
];

function ProjectCard({
	author,
	quote,
	avatar,
}: {
	author: string;
	quote: string;
	avatar: string;
}) {
	return (
		<div
			className="flex items-start gap-3 p-4 min-w-80 max-w-100 max-[480px]:min-w-70 max-[480px]:max-w-80 max-[480px]:p-3 rounded-xl border border-border bg-card-strong backdrop-blur-sm no-underline text-primary transition-all duration-250 ease-in-out shrink-0 hover:border-coral hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]"
			tabIndex={-1}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={`https://unavatar.io/x/${avatar}`}
				alt={avatar}
				className="w-11 h-11 max-[480px]:w-9 max-[480px]:h-9 rounded-full shrink-0 border-2 border-border bg-elevated object-cover"
				loading="lazy"
			/>
			<div className="flex flex-col gap-1.5 min-w-0">
				<p className="text-[0.9rem] max-[480px]:text-[0.85rem] leading-normal text-secondary line-clamp-3">
					&ldquo;{quote}&rdquo;
				</p>
				<span className="text-[0.8rem] font-semibold text-coral">{author}</span>
			</div>
		</div>
	);
}

export default function OurProjects() {
	// Duplicate cards for infinite scroll effect
	const row1Cards = [...projects, ...projects];
	const row2Cards = [...clients, ...clients];

	return (
		<section className="mb-14 animate-fade-in-up [animation-delay:0.75s] overflow-hidden -mx-6 px-6 max-[480px]:-mx-4 max-[480px]:px-4">
			<div className="flex justify-between items-center mb-5 max-[480px]:pl-4">
				<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5 ">
					<span className="text-coral font-bold">⟩</span> Nuestros proyectos
				</h2>
				<a
					href="#"
					className="text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
					View all <span className="sr-only">community shoutouts</span>
					<span aria-hidden="true">→</span>
				</a>
			</div>
			<div
				className="testimonials-track flex flex-col gap-2 -mx-6 max-[480px]:-mx-4 overflow-hidden"
				style={{
					maskImage:
						"linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
				}}>
				<div
					className="testimonials-row flex gap-4 w-max py-2 animate-scroll-right hover:[animation-play-state:paused]"
					style={{ "--duration": "120s" } as React.CSSProperties}>
					{row1Cards.map((t, i) => (
						<ProjectCard key={`r1-${i}`} {...t} />
					))}
				</div>
				<div
					className="testimonials-row flex gap-4 w-max py-2 animate-scroll-left hover:[animation-play-state:paused]"
					style={{ "--duration": "130s" } as React.CSSProperties}>
					{row2Cards.map((t, i) => (
						<ProjectCard key={`r2-${i}`} {...t} />
					))}
				</div>
			</div>
			<div className="flex justify-between items-center mb-5 mt-5 max-[480px]:pl-4">
				<a
					href="#"
					className="text-[0.9rem] text-coral no-underline font-medium transition-colors duration-200 ease-in-out hover:text-cyan">
					View all <span className="sr-only">community shoutouts</span>
					<span aria-hidden="true">→</span>
				</a>
				<h2 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
					Nuestros clientes <span className="text-coral font-bold">⟨</span>
				</h2>
			</div>
		</section>
	);
}
