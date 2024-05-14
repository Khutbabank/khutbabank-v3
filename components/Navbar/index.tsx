import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Navbar = () => {
	const links: Array<{ href: string; name: string }> = [
		{ name: 'About Us', href: '/about-us' },
		{ name: 'Khutbas', href: '/khutbas' },
		{ name: 'Videos', href: '/videos' },
		{ name: 'Contact Us', href: '/contact-us' },
	];

	return (
		<>
			<div className='flex items-center justify-between py-12 px-8 md:px-[100px]'>
				<Image src='/logo.svg' width={197} height={40} alt='logo' />
				<div className='flex gap-3 items-center'>
					{links.map((link, i) => (
						<Link
							className='text-black text-normal hover:underline'
							href={link.href}
							key={i}
						>
							{link.name}
						</Link>
					))}
				</div>
				<Button className='bg-primary text-white font-bold rounded-full'>
					Get Khutba
				</Button>
			</div>
		</>
	);
};

export default Navbar;
