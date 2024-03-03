import { Button } from '@/components/ui/button';

import KhutbaGrid from './KhutbaGrid';

const FeaturedKhutbas = () => {
	return (
		<>
			<div className='flex flex-col gap-[76px]'>
				<div className='flex justify-between items-center gap-4 px-8 md:px-[100px] bg-white'>
					<h1 className='text-heading text-primary font-bold'>
						Featured Khutba
					</h1>
					<Button className='bg-secondary rounded-full font-bold px-8'>
						All Khutbas
					</Button>
				</div>
				<KhutbaGrid />
			</div>
		</>
	);
};

export default FeaturedKhutbas;
