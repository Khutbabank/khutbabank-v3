import Image from 'next/image';

import Navbar from '../../Navbar';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
	return (
		<>
			<div className='h-screen bg-background '>
				<Navbar />
				<div className='mt-6 px-8 md:px-[100px]'>
					<h1 className='font-semibold text-super-heading leading-tight text-primary'>
						Jummah Khutbas tailored for the Muslim Community
					</h1>
					<div className='flex justify-between items-center gap-14 mt-8'>
						<Image
							src='/hero/quran.png'
							width={888}
							height={352}
							className='w-full max-h-[352px] object-cover rounded-normal'
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
							<Button className='bg-primary text-white font-bold rounded-full'>
								View All Khutbas
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
