import Link from 'next/link';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

const HomePageAboutUs = () => {
	return (
		<>
			<div className='bg-white flex flex-col md:flex-row  justify-between gap-16 py-[100px] px-8 md:px-[100px] md:gap-32'>
				<Image
					src='/homePageAboutUs/books.png'
					width={542}
					height={707}
					className='w-full max-h-[707px] object-cover object-center rounded-normal'
					alt='Quran'
				/>
				<div className='flex flex-col gap-8 md:gap-0 md:max-w-[540px]'>
					<h1 className='text-heading font-bold text-primary leading-tight'>
						Thousands of Muslims benefitted on daily basis
					</h1>
					<p className='text-normal text-black'>
						Khutba Bank aims to help improve khutbas delivered worldwide.
						We provide high-quality khutba scripts for schools,
						universities, mosques and workplaces. Our scripts have also
						been used by youth circles as we cover challenging topics like
						love, coping with stress, evolution and others. We also
						provide tips on how to effectively deliver a sermon.
					</p>
					<Link href='/about-us'>
						<Button className='bg-primary text-white font-bold rounded-full mt-5 md:mt-24'>
							Learn More About Us
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default HomePageAboutUs;
