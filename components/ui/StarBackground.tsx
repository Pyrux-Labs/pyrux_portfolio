export default function StarBackground() {
	return (
		<>
			<div
				className="stars fixed inset-0 pointer-events-none z-0 animate-twinkle"
				style={{
					backgroundImage:
						"radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.6), transparent), radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.7), transparent), radial-gradient(2px 2px at 200px 60px, var(--star-accent, rgba(249,115,22,0.7)), transparent), radial-gradient(1px 1px at 250px 150px, rgba(255,255,255,0.5), transparent), radial-gradient(2px 2px at 300px 40px, var(--star-accent, rgba(249,115,22,0.5)), transparent)",
					backgroundSize: "350px 200px",
				}}
			/>
			<div
				className="nebula fixed inset-0 pointer-events-none z-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 50% at 20% 20%, rgba(249,115,22,0.12), transparent 50%), radial-gradient(ellipse 60% 60% at 80% 30%, rgba(249,115,22,0.07), transparent 50%), radial-gradient(ellipse 90% 70% at 50% 90%, rgba(249,115,22,0.05), transparent 50%)",
				}}
			/>
		</>
	);
}
