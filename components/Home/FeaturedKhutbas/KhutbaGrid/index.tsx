// 'use client';

// import { useState, useEffect } from 'react';
// import { getLatestKhutbas, getKhutbaImage } from '@/firebase/functions/khutbas';
import { getLatestKhutbas } from '@/prisma/functions/khutbas';

import KhutbaGridItem from '../KhutbaGridItem';

const KhutbaGrid = async () => {
	// const [khutbas, setKhutbas] = useState<
	// 	Array<{
	// 		id: string;
	// 		createdAt: Date;
	// 		author: string | null;
	// 		title: string;
	// 		description: string;
	// 		categoryId: string;
	// 		firstPart: string;
	// 		secondPart: string;
	// 		thumbnailPath: string;
	// 	}>
	// >();
	// const [loading, setLoading] = useState<boolean>(true);
	// const [error, setError] = useState<boolean>(false);

	const { result: khutbas, error } = await getLatestKhutbas();

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const data = await getLatestKhutbas();
	// 		console.log(data);

	// 		if (data.result) {
	// 			// @ts-ignore - I had no choice
	// 			// const khutbasWithImages = data.result.map((khutba: any) => ({
	// 			// 	...khutba,
	// 			// 	imageUrl: null,
	// 			// }));

	// 			setKhutbas(data.result);
	// 			setLoading(false);

	// 			// const imagePromises = khutbasWithImages.map(
	// 			// 	async (khutba, index) => {
	// 			// 		const imageData = await getKhutbaImage({
	// 			// 			imageId: khutba.imageId,
	// 			// 		});

	// 			// 		if (imageData.result) {
	// 			// 			setKhutbas((prevKhutbas: any) =>
	// 			// 				prevKhutbas.map((k: any, i: any) =>
	// 			// 					i === index
	// 			// 						? { ...k, imageUrl: imageData.result }
	// 			// 						: k,
	// 			// 				),
	// 			// 			);
	// 			// 		}
	// 			// 	},
	// 			// );

	// 			// await Promise.all(imagePromises);

	// 			return;
	// 		}

	// 		if (data.error) {
	// 			setError(true);
	// 			setLoading(false);
	// 		}
	// 	};

	// 	getData();
	// }, []);

	return (
		<>
			<div className='grid md:grid-cols-2 gap-8'>
				{/* {!loading ? (
					khutbas &&
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
					))
				) : (
					<p className='text-black font-bold text-xl mt-3'>Loading ...</p>
				)} */}
				{khutbas &&
					khutbas.length > 0 &&
					khutbas.map((k, i) => (
						<KhutbaGridItem
							key={i}
							id={k.id}
							description={k.description}
							category={'Unknown'} // TODO: fix this
							title={k.title}
							imageUrl={`${process.env.NEXT_PUBLIC_THUMBNAIL_URL}/${k.thumbnailPath}.png`}
							khutbaFirstPart={k.firstPart}
							khutbaSecondPart={k.secondPart}
						/>
					))}
			</div>
		</>
	);
};

export default KhutbaGrid;
