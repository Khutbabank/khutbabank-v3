import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BrowseVideoBank = () => {
	return (
		<>
			<div className='bg-primary flex flex-col items-center justify-center py-28 px-8 md:px-[100px] mt-10 md:mt-0'>
				<h1 className='text-white text-super-heading font-bold text-center leading-title'>
					Video Bank
				</h1>
				<p className='text-normal text-white mt-5 text-center'>
					To further assist you in your khutba journey, we've created an
					ever-growing playlist of videos, tutorials, and even courses to
					guide you through your endeavours.
				</p>
				<Link href='/videos'>
					<Button className='bg-secondary rounded-full font-bold px-8 mt-12'>
						Browse Video Bank
					</Button>
				</Link>
			</div>
		</>
	);
};

export default BrowseVideoBank;
