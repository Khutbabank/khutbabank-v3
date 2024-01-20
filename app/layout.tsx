import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import 'remixicon/fonts/remixicon.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Khutba Bank',
	description:
		'For Khateebs all around the World ... Khutba Bank has regularly provided high-quality khutba scripts for schools, universities, youth circles, mosques and work ...',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
