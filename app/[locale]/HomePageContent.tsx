import StarBackground from "@/components/ui/StarBackground";
import Hero from "@/components/home/Hero";
import HeroButtons from "@/components/home/HeroButtons";
import OurProjects from "@/components/home/OurProjects";
import OurServices from "@/components/home/OurServices";
import OurTeam from "@/components/home/OurTeam";
import ContactUs from "@/components/home/ContactUs";
import OurStack from "@/components/home/OurStack";
import Footer from "@/components/layout/Footer";

export default function HomePageContent() {
	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-content mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pt-22 min-[481px]:pb-10">
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
