import Image from 'next/image';

const HomePageAboutUs = () => {
	return (
		<>
			<div className='bg-white flex items-center justify-between gap-20 px-8 md:px-[100px]'>
				<Image
					src='/hero/quran.png'
					width={542}
					height={707}
					className='w-full max-h-[707px] object-cover rounded-normal'
					alt='Quran'
				/>
				<div className='flex flex-col'>
					<h1 className='text-heading font-bold text-primary'>
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
				</div>
			</div>
		</>
	);
};

export default HomePageAboutUs;
