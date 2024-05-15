import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'Khutba Bank | About Us',
	description:
		'For Khateebs all around the World ... Khutba Bank has regularly provided high-quality khutba scripts for schools, universities, youth circles, mosques and work ...',
};

const AboutUsLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='bg-white min-h-screen'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default AboutUsLayout;
