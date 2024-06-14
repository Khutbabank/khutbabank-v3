import Image from 'next/image';
import Link from 'next/link';

import jsPDF from 'jspdf';

import { Button } from '@/components/ui/button';

interface Props {
	category: string;
	description: string;
	id: string;
	imageId: string;
	title: string;
	publishedOn: string;
	imageUrl: string | null;
	khutbaFirstPart: string;
	khutbaSecondPart: string;
}

const Khutba = ({
	title,
	description,
	category,
	id,
	publishedOn,
	imageUrl,
	khutbaFirstPart,
	khutbaSecondPart,
}: Props) => {
	const onDownloadButtonClick = () => {
		const doc = new jsPDF();

		doc.text(`Title: ${title}`, 20, 10);
		doc.text(`Description: ${description}`, 20, 20);
		doc.text(`Category: ${category}`, 20, 30);

		const firstPartLine = doc.splitTextToSize(khutbaFirstPart, 180);
		doc.text(`First Part: ${firstPartLine}`, 20, 40);

		const offset = doc.getTextDimensions(khutbaFirstPart).h + 20;
		const secondPartLine = doc.splitTextToSize(khutbaSecondPart, 180);
		doc.text(`Second Part: ${secondPartLine}`, 20, offset);

		doc.save(`khutba-${title}.pdf`);
	};

	return (
		<>
			<div className='flex flex-col p-5 rounded-2xl border-[1px] border-dark-grey'>
				<Image
					src={imageUrl ? imageUrl : '/khutba/image.png'}
					width={400}
					height={400}
					alt='thumbnail'
					className='rounded-2xl w-full h-full max-h-[22rem] max-w-[30rem] object-cover object-center'
				/>

				<div className='flex flex-col gap-4 mt-6 mb-6'>
					<p className='text-normal font-bold text-black'>{title}</p>
					<p className='text-small text-black'>{description}</p>
				</div>

				<div className='h-[0.1px] border-[1px] border-dark-grey my-4 mt-auto' />

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
					<Button
						onClick={onDownloadButtonClick}
						className='flex items-center justify-center gap-3 bg-secondary text-white w-full'
					>
						<i className='text-2xl text-white ri-download-cloud-fill' />
						Download
					</Button>
				</div>
			</div>
		</>
	);
};

export default Khutba;
