import Image from 'next/image';

const HomePageAboutUs = () => {
	return (
		<>
			<div className='bg-white flex items-center justify-between gap-20'>
				<Image
					src='/hero/quran.png'
					width={542}
					height={707}
					className='w-full max-h-[707px] object-cover rounded-normal'
					alt='Quran'
				/>
			</div>
		</>
	);
};

export default HomePageAboutUs;
