import { getLatestKhutbas } from '@/prisma/functions/khutbas';

import KhutbaGridItem from '../KhutbaGridItem';

const KhutbaGrid = async () => {
	const { result: khutbas, error } = await getLatestKhutbas();

	return (
		<>
			<div className='grid md:grid-cols-2 gap-8'>
				{khutbas &&
					khutbas.length > 0 &&
					khutbas.map((k, i) => (
						<KhutbaGridItem
							key={i}
							id={k.id}
							description={k.description}
							category={'Unknown'} // TODO: fix this
							title={k.title}
							imageUrl={`${process.env.NEXT_PUBLIC_THUMBNAIL_URL}/${k.thumbnailPath}`}
							khutbaFirstPart={k.firstPart}
							khutbaSecondPart={k.secondPart}
						/>
					))}
			</div>
		</>
	);
};

export default KhutbaGrid;
