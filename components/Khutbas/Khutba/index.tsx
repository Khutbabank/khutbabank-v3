import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface Props {
	category: string;
	description: string;
	id: string;
	imageId: string;
	title: string;
	publishedOn: string;
}

const Khutba = ({ title, description, category, id, publishedOn }: Props) => {
	return (
		<>
			<div className='flex flex-col p-5 rounded-2xl border-[1px] border-dark-grey'>
				<Image
					src='/khutba/image.png'
					width={400}
					height={400}
					alt='thumbnail'
					className='rounded-2xl w-full'
				/>

				<div className='flex flex-col gap-4 mt-6'>
					<p className='text-normal font-bold text-black'>{title}</p>
					<p className='text-small text-black'>{description}</p>
				</div>

				<div className='h-[0.1px] border-[1px] border-dark-grey my-4' />

				<div className='flex gap-4 justify-between'>
					<div className='flex flex-col gap-1'>
						<p className='text-black'>Length</p>
						<p className='text-black font-bold'>10 mins</p>
					</div>

					<div className='flex flex-col gap-1'>
						<p className='text-black'>Category</p>
						<p className='text-black font-bold'>{category}</p>
					</div>

					<div className='flex flex-col gap-1'>
						<p className='text-black'>Published On</p>
						<p className='text-black font-bold'>{publishedOn}</p>
					</div>
				</div>

				<div className='flex gap-5 mt-10 w-full'>
					<Link href={`/khutba/${id}`} className='w-full'>
						<Button className='flex items-center justify-center gap-3 bg-primary text-white w-full'>
							<i className='text-white text-xl ri-book-open-fill' />
							Read now
						</Button>
					</Link>
					<Button className='flex items-center justify-center gap-3 bg-secondary text-white w-full'>
						<i className='text-2xl text-white ri-download-cloud-fill' />
						Download
					</Button>
				</div>
			</div>
		</>
	);
};

export default Khutba;
