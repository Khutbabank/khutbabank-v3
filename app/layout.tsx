import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import 'remixicon/fonts/remixicon.css';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
