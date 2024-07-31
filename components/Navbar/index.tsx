import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
				<Link href='/'>
					<Image
						src='/logo.svg'
						width={197}
						height={40}
						alt='logo'
						className='hidden md:block'
					/>
				</Link>

				<Link href='/'>
					<Image
						src='/kb-logo.png'
						width={50}
						height={40}
						alt='logo'
						className='block md:hidden'
					/>
				</Link>

				<div className='hidden lg:flex gap-5 items-center mx-auto'>
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

				<DropdownMenu>
					<DropdownMenuTrigger className='block lg:hidden ml-auto mr-6'>
						<i className='ri-menu-fill text-4xl text-black font-bold' />
					</DropdownMenuTrigger>
					<DropdownMenuContent className='block lg:hidden'>
						{links.map((l, i) => (
							<DropdownMenuItem key={i} className='py-3'>
								<Link
									className='text-black text-normal hover:underline'
									href={l.href}
								>
									{l.name}
								</Link>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				{/* // TODO: get this button to get random khutba */}
				<Link href='/khutbas'>
					<Button className='bg-primary text-white font-bold rounded-full'>
						Get Khutba
					</Button>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
