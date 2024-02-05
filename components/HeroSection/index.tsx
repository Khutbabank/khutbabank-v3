import Image from 'next/image';

import Navbar from '../Navbar';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
	return (
		<>
			<div className='h-screen bg-background px-8 md:px-[100px]'>
				<Navbar />
				<h1 className='font-semibold text-6xl text-primary mt-5'>
					Jummah Khutbas tailored for the Muslim Community
				</h1>
				<div className='flex justify-between gap-3 mt-8'>
					<Image
						src='/hero/quran.png'
						width={888}
						height={352}
						alt='Quran'
					/>
					<div className='flex flex-col gap-7 justify-self-end md:max-w-[318px]'>
						<h3 className='font-bold text-3xl text-secondary'>
							For Khateebs all around the world
						</h3>
						<p className='text-black text-lg'>
							Khutba Bank has regularly provided high-quality khutba
							scripts for schools, universities, youth circles, mosques
							and work places.
						</p>
						<Button className='bg-primary text-white font-bold rounded-full'>
							View All Khutbas
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
