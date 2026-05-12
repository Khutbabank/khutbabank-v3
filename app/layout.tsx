import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import './globals.css';
import 'remixicon/fonts/remixicon.css';
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
		<html lang='en' className={cn("font-sans", inter.variable)}>
			<body className={montserrat.className}>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
