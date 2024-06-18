'use client';

import { useState, useEffect } from 'react';
import { getLatestKhutbas, getKhutbaImage } from '@/firebase/functions/khutbas';

import KhutbaGridItem from '../KhutbaGridItem';

const KhutbaGrid = () => {
	const [khutbas, setKhutbas] = useState<
		Array<{
			category: string;
			description: string;
			id: string;
			imageId: string;
			title: string;
			createdTimeStamp: string;
			imageUrl: string | null;
			khutba_first_part: string;
			khutba_second_part: string;
		}>
	>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const getData = async () => {
			const data = await getLatestKhutbas();

			if (data.result) {
				// @ts-ignore - I had no choice
				const khutbasWithImages = data.result.map((khutba: any) => ({
					...khutba,
					imageUrl: null,
				}));

				setKhutbas(data.result);
				setLoading(false);

				const imagePromises = khutbasWithImages.map(
					async (khutba, index) => {
						const imageData = await getKhutbaImage({
							imageId: khutba.imageId,
						});

						if (imageData.result) {
							setKhutbas((prevKhutbas: any) =>
								prevKhutbas.map((k: any, i: any) =>
									i === index
										? { ...k, imageUrl: imageData.result }
										: k,
								),
							);
						}
					},
				);

				await Promise.all(imagePromises);

				return;
			}

			if (data.error) {
				setError(true);
				setLoading(false);
			}
		};

		getData();
	}, []);

	return (
		<>
			<div className='grid md:grid-cols-2 gap-8'>
				{!loading ? (
					khutbas &&
					khutbas.length > 0 &&
					khutbas.map((k, i) => (
						<KhutbaGridItem
							key={i}
							id={k.id}
							description={k.description}
							category={k.category}
							imageId={k.imageId}
							title={k.title}
							publishedOn={k.createdTimeStamp}
							imageUrl={k.imageUrl}
							khutbaFirstPart={k.khutba_first_part}
							khutbaSecondPart={k.khutba_second_part}
						/>
					))
				) : (
					<p className='text-black font-bold text-xl mt-3'>Loading ...</p>
				)}
			</div>
		</>
	);
};

export default KhutbaGrid;
