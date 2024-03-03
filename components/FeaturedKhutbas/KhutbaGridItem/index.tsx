import Image from 'next/image';

interface prop {
	imageUrl: string;
	title: string;
	description: string;
	id: number;
}

const KhutbaGridItem = ({ imageUrl, title, description, id }: prop) => {
	return (
		<>
			<div className='flex flex-col gap-10 items-center p-5 md:flex-row border-dark-grey rounded-2xl'>
				<Image src={imageUrl} width={240} height={260} alt='cover img' />

				<div className='flex flex-col'>
					<h3 className='text-sub-heading font-bold text-primary'>
						{title}
					</h3>
					<p className='text-black text-normal mt-3'>{description}</p>
				</div>
			</div>
		</>
	);
};

export default KhutbaGridItem;
