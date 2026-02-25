const testimonialsRow1 = [
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

const testimonialsRow2 = [
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

function TestimonialCard({
	author,
	quote,
	avatar,
}: {
	author: string;
	quote: string;
	avatar: string;
}) {
	return (
		<div className="testimonial-card" tabIndex={-1}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={`https://unavatar.io/x/${avatar}`}
				alt={avatar}
				className="testimonial-avatar"
				loading="lazy"
			/>
			<div className="testimonial-content">
				<p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
				<span className="testimonial-author">{author}</span>
			</div>
		</div>
	);
}

export default function Testimonials() {
	// Duplicate cards for infinite scroll effect
	const row1Cards = [...testimonialsRow1, ...testimonialsRow1];
	const row2Cards = [...testimonialsRow2, ...testimonialsRow2];

	return (
		<section className="testimonials">
			<div className="section-header">
				<h2 className="section-title">
					<span className="claw-accent">⟩</span> What People Say
				</h2>
				<a href="#" className="section-link">
					View all <span className="sr-only">community shoutouts</span>
					<span aria-hidden="true">→</span>
				</a>
			</div>
			<div className="testimonials-track">
				<div
					className="testimonials-row row-1"
					style={{ "--duration": "120s" } as React.CSSProperties}>
					{row1Cards.map((t, i) => (
						<TestimonialCard key={`r1-${i}`} {...t} />
					))}
				</div>
				<div
					className="testimonials-row row-2"
					style={{ "--duration": "130s" } as React.CSSProperties}>
					{row2Cards.map((t, i) => (
						<TestimonialCard key={`r2-${i}`} {...t} />
					))}
				</div>
			</div>
		</section>
	);
}
