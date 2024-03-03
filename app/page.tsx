import FeaturedKhutbas from '@/components/FeaturedKhutbas';
import HeroSection from '@/components/HeroSection';
import HomePageAboutUs from '@/components/HomePageAboutUs';
import BrowseVideoBank from '@/components/BrowseVideoBank';

export default function Home() {
	return (
		<>
			<HeroSection />
			<HomePageAboutUs />
			<FeaturedKhutbas />
			<BrowseVideoBank />
		</>
	);
}
