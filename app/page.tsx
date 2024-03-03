import FeaturedKhutbas from '@/components/FeaturedKhutbas';
import HeroSection from '@/components/HeroSection';
import HomePageAboutUs from '@/components/HomePageAboutUs';

export default function Home() {
	return (
		<>
			<HeroSection />
			<HomePageAboutUs />
			<FeaturedKhutbas />
		</>
	);
}
