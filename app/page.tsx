import FeaturedKhutbas from '@/components/Home/FeaturedKhutbas';
import HeroSection from '@/components/Home/HeroSection';
import HomePageAboutUs from '@/components/Home/HomePageAboutUs';
import BrowseVideoBank from '@/components/Home/BrowseVideoBank';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<HeroSection />
			<HomePageAboutUs />
			<FeaturedKhutbas />
			<BrowseVideoBank />
			<Footer />
		</>
	);
}
