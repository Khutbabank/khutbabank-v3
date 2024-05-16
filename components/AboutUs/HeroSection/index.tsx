import Image from 'next/image';

const HeroSection = () => {
	return (
		<>
			<div className='flex md:justify-between md:items-center md:gap-20 px-8 md:px-[100px] py-9'>
				<Image
					className='rounded-lg hidden md:block'
					src='/hero/books.png'
					width={2042}
					height={707}
					alt='books'
				/>
				<div className='flex flex-col'>
					<h1 className='text-heading text-primary font-bold'>About Us</h1>
					<p className='text-black text-normal mt-5'>
						Khutba Bank aims to help improve khutbas delivered worldwide.
						We provide high-quality khutba scripts for schools,
						universities, mosques and workplaces. Our scripts have also
						been used by youth circles as we cover challenging topics like
						love, coping with stress, evolution and others. We also
						provide tips on how to effectively deliver a sermon.
					</p>
					<p className='text-black text-normal mt-3'>
						The Prophet Muhammad (ﷺ) encouraged us to spread good by
						informing us of its reward. The Prophet (ﷺ) said: “Whoever
						calls people to guidance will have a reward like that of those
						who follow him, without it detracting from their reward in the
						slightest.” [Muslim]
					</p>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
