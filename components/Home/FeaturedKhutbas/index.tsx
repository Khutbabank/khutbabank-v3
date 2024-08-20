import Link from 'next/link';

import { Button } from '@/components/ui/button';

import KhutbaGrid from './KhutbaGrid';

const FeaturedKhutbas = () => {
	return (
		<>
			<div className='flex flex-col gap-14 md:gap-10 bg-white px-8 md:px-[100px] py-[100px] pt-0'>
				<div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
					<h1 className='text-heading text-primary font-bold leading-title'>
						Featured Khutba
					</h1>
					<Link href='/khutbas'>
						<Button className='bg-secondary rounded-full font-bold px-8'>
							All Khutbas
						</Button>
					</Link>
				</div>

				<KhutbaGrid />
			</div>
		</>
	);
};

export default FeaturedKhutbas;
