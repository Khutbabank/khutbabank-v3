import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'Khutba Bank | Videos',
	description:
		'For Khateebs all around the World ... Khutba Bank has regularly provided high-quality khutba scripts for schools, universities, youth circles, mosques and work ...',
};

const VideosLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='bg-white min-h-screen flex flex-col'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default VideosLayout;
