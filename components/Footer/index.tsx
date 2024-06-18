import Image from 'next/image';
import Link from 'next/link';

import Copyright from './Copyright';

const Footer = () => {
	return (
		<>
			<footer className='flex flex-col px-8 mt-auto md:px-[100px] py-12 bg-background'>
				<div className='flex flex-col gap-6 md:flex-row md:justify-between'>
					<div className='my-auto'>
						<Image src='/logo.svg' width={250} height={40} alt='logo' />
					</div>

					<div className='flex flex-col gap-8 md:gap-14 md:flex-row'>
						<div className='flex flex-col'>
							<p className='text-normal font-bold text-primary'>
								General
							</p>

							<div className='flex flex-col gap-3 mt-5'>
								<Link
									className='font-normal text-black hover:underline'
									href='/'
								>
									Home
								</Link>
								<Link
									className='font-normal text-black hover:underline'
									href='/about-us'
								>
									About Us
								</Link>
								<Link
									className='font-normal text-black hover:underline'
									href='/videos'
								>
									Videos
								</Link>
								<Link
									className='font-normal text-black hover:underline'
									href='/khutbas'
								>
									Khutbas
								</Link>
							</div>
						</div>

						{/* <div className='flex flex-col'>
							<p className='text-normal font-bold text-primary'>
								Common Khutbas
							</p>

							<div className='flex flex-col gap-3 mt-5'>
								<Link
									className='font-normal text-black hover:underline'
									href='/'
								>
									Delivered by devil
								</Link>
								<Link
									className='font-normal text-black max-w-[165px] overflow-hidden whitespace-nowrap text-ellipsis hover:underline'
									href='/'
								>
									Sins II - The consequences
								</Link>
								<Link
									className='font-normal text-black hover:underline max-w-[165px] overflow-hidden whitespace-nowrap text-ellipsis'
									href='/'
								>
									Sabr - A Quality of Life
								</Link>
								<Link
									className='font-normal text-black hover:underline max-w-[165px] overflow-hidden whitespace-nowrap text-ellipsis'
									href='/'
								>
									Friday - The Chosen Day
								</Link>
							</div>
						</div> */}

						<div className='flex flex-col'>
							<p className='text-normal font-bold text-primary'>
								Khutba Bank
							</p>

							<div className='flex flex-col gap-3 mt-5'>
								<Link
									className='font-normal text-black hover:underline'
									href='/contact-us'
								>
									Contact Us
								</Link>
								<Link
									className='font-normal text-black hover:underline'
									href='/coming-soon'
								>
									FAQ
								</Link>
							</div>
						</div>
					</div>
				</div>

				<Copyright />
			</footer>
		</>
	);
};

export default Footer;
