import Image from 'next/image';
import Link from 'next/link';

interface prop {
	imageUrl: string;
	title: string;
	description: string;
	id: number;
}

const KhutbaGridItem = ({ imageUrl, title, description, id }: prop) => {
	return (
		<>
			<div className='flex flex-col gap-10 items-center p-5 md:flex-row border-[1px] border-dark-grey rounded-2xl'>
				<Image src={imageUrl} width={640} height={260} alt='cover img' />

				<div className='flex flex-col'>
					<h3 className='text-sub-heading font-bold text-primary'>
						{title}
					</h3>
					<p className='text-black text-normal mt-3'>{description}</p>
					<Link
						className='text-primary font-bold flex items-center gap-1 text-xl mt-[50px]'
						href='/'
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
