import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Hero from "../components/Hero";
import LatestPost from "../components/LatestPost";
import Testimonials from "../components/Testimonials";
import QuickStart from "../components/QuickStart";
import Features from "../components/Features";
import IntegrationsPreview from "../components/IntegrationsPreview";
import PressSection from "../components/PressSection";
import CtaGrid from "../components/CtaGrid";
import Newsletter from "../components/Newsletter";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function Index() {
	return (
		<>
			<ThemeToggle />
			<StarBackground />
			<main className="oc-container">
				<Hero />
				<LatestPost />
				<Testimonials />
				<QuickStart />
				<Features />
				<IntegrationsPreview />
				<PressSection />
				<CtaGrid />
				<Newsletter />
				<Sponsors />
				<Footer />
			</main>
		</>
	);
}
