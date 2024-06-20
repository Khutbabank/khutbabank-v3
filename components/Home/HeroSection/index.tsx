import Image from 'next/image';
import Link from 'next/link';

import Navbar from '../../Navbar';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
	return (
		<>
			<div className='flex flex-col bg-background '>
				<Navbar />
				<div className='px-8 md:px-[100px] py-10 pb-[100px] md:pt-5 md:py-24'>
					<h1 className='font-semibold text-heading md:text-super-heading leading-tight text-primary break-words'>
						Jummah Khutbas tailored for the Muslim Community
					</h1>
					<div className='flex justify-between gap-14 mt-8'>
						<Image
							src='/hero/quran.png'
							width={888}
							height={352}
							className='hidden md:block md:w-[400px] md:max-w-[400px] lg:w-[600px] lg:max-w-[600px] xl:max-w-none xl:w-full max-h-[352px] object-cover rounded-normal'
							alt='Quran'
						/>
						<div className='flex flex-col gap-7 justify-self-end md:max-w-[318px]'>
							<h3 className='font-bold text-3xl text-secondary'>
								For Khateebs all around the world
							</h3>
							<p className='text-black text-lg'>
								Khutba Bank has regularly provided high-quality khutba
								scripts for schools, universities, youth circles,
								mosques and work places.
							</p>
							<Link href='/khutbas'>
								<Button className='bg-primary text-white font-bold rounded-full'>
									View All Khutbas
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
