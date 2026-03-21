interface PageHeadingProps {
	title: string;
	subtitle: string;
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
	return (
		<>
			<h1 className="font-display text-3xl font-bold text-primary mb-2">{title}</h1>
			<p className="text-secondary">{subtitle}</p>
		</>
	);
}
