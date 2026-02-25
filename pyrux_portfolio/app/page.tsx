import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Hero from "../components/Hero";
import HeroButtons from "../components/HeroButtons";
import OurProjects from "../components/OurProjects";
import OurServices from "../components/OurServices";
import OurStack from "../components/OurStack";
import OurTeam from "../components/OurTeam";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Index() {
	return (
		<>
			<ThemeToggle />
			<StarBackground />
			<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col px-4 pt-10 pb-8 min-[481px]:px-6 min-[481px]:pt-15 min-[481px]:pb-10">
				<Hero />
				<HeroButtons />
				<OurProjects />
				<OurServices />
				<OurTeam />
				<ContactUs />
				<OurStack />
				<Footer />
			</main>
		</>
	);
}
