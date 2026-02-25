export default function Footer() {
	return (
		<footer className="oc-footer">
			<nav className="footer-nav">
				<a href="#" className="footer-link">
					Blog
				</a>
				<a href="#" className="footer-link">
					Showcase
				</a>
				<a href="#" className="footer-link">
					Shoutouts
				</a>
				<a href="#" className="footer-link">
					Integrations
				</a>
				<a href="#" className="footer-link">
					Trust
				</a>
			</nav>
			<p className="footer-credit">
				Built by{" "}
				<a href="#" className="footer-author">
					Peter Steinberger
				</a>{" "}
				and the community.
			</p>
			<p className="footer-disclaimer">
				OpenClaw is an independent project. Not affiliated with any company
				mentioned on this page.
			</p>
		</footer>
	);
}
