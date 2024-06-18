import Image from 'next/image';
import Link from 'next/link';

interface prop {
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

const KhutbaGridItem = ({ title, description, id, imageUrl }: prop) => {
	return (
		<>
			<div className='flex flex-col gap-10 items-center p-5 md:flex-row border-[1px] border-dark-grey rounded-2xl'>
				<Image
					src={imageUrl ? imageUrl : '/khutba/image.png'}
					width={640}
					height={260}
					alt='cover img'
					className='rounded-2xl w-full h-full max-h-[15rem] max-w-[15rem] object-cover object-center'
				/>

				<div className='flex flex-col h-full'>
					<h3 className='text-sub-heading font-bold text-primary'>
						{title}
					</h3>
					<p className='text-black text-normal mt-3'>{description}</p>
					<Link
						className='text-primary font-bold flex items-center gap-1 text-xl mt-auto'
						href={`/khutba/${id}`}
					>
						Read Now
						<i className='ri-arrow-right-line ' />
					</Link>
				</div>
			</div>
		</>
	);
};

export default KhutbaGridItem;
