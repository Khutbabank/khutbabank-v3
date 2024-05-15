import Image from 'next/image';

const HeroSection = () => {
	return (
		<>
			<div className='flex md:justify-between md:gap-20 px-8 md:px-[100px]'>
				<Image
					className='rounded-lg hidden md:block'
					src='/hero/books.png'
					width={542}
					height={707}
					alt='books'
				/>
			</div>
		</>
	);
};

export default HeroSection;
