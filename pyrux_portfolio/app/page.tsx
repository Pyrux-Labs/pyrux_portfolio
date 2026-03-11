import StarBackground from "@/components/ui/StarBackground";
import Hero from "@/components/sections/Hero";
import HeroButtons from "@/components/sections/HeroButtons";
import OurProjects from "@/components/sections/OurProjects";
import OurServices from "@/components/sections/OurServices";
import OurStack from "@/components/sections/OurStack";
import OurTeam from "@/components/sections/OurTeam";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/layout/Footer";

export default function Index() {
	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pt-22 min-[481px]:pb-10">
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
