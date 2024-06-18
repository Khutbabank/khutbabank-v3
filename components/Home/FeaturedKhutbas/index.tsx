import { Button } from '@/components/ui/button';

import KhutbaGrid from './KhutbaGrid';

const FeaturedKhutbas = () => {
	return (
		<>
			<div className='flex flex-col gap-10 bg-white px-8 md:px-[100px] py-12 pb-20'>
				<div className='flex flex-col md:flex-row justify-between md:items-center gap-4  '>
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
