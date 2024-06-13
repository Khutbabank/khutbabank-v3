'use client';

import { useState, useEffect } from 'react';

import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Khutba from '../Khutba';
import { getKhutbas, getKhutbaImage } from '@/firebase/functions/khutbas';

const KhutbaList = () => {
	const [khutbas, setKhutbas] = useState<
		Array<{
			category: string;
			description: string;
			id: string;
			imageId: string;
			title: string;
			createdTimeStamp: string;
			imageUrl: string | null;
		}>
	>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const getData = async () => {
			const data = await getKhutbas();

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
			}
		};

		getData();
	}, []);

	return (
		<>
			<div className='flex flex-col px-8 md:px-[100px] py-24 pt-20'>
				<h1 className='text-primary text-heading font-bold'>
					Browse the Khutba bank
				</h1>
				{!loading ? (
					// todo: look into this form - why do we have it here? is it needed?
					<form className='mt-4'>
						<p className='text-normal text-black'>
							Use the filters to narrow your search
						</p>

						<div className='flex flex-col sm:flex-row gap-4 mt-8 md:max-w-[500px]'>
							<Input
								className='bg-white text-black'
								placeholder='Search Khutba'
							/>

							<Select>
								<SelectTrigger className='bg-white text-black'>
									<SelectValue placeholder='Select Khutba category' />
								</SelectTrigger>
								<SelectContent className='bg-white text-black'>
									<SelectItem value='imaan'>Imaan</SelectItem>
									<SelectItem value='prophets'>Prophets</SelectItem>
									<SelectItem value='aqeedah'>Aqeedah</SelectItem>
									<SelectItem value='fiqh'>Fiqh</SelectItem>
									<SelectItem value='prayer'>Prayer</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4'>
							{khutbas &&
								khutbas.length > 0 &&
								khutbas.map((k, i) => (
									<Khutba
										key={i}
										id={k.id}
										description={k.description}
										category={k.category}
										imageId={k.imageId}
										title={k.title}
										publishedOn={k.createdTimeStamp}
										imageUrl={k.imageUrl}
									/>
								))}

							<Khutba
								id='1'
								description="A short story of Prophet Ibrahim AS, the incident with his father and people and the bulding of Ka'bah with..."
								category='Story'
								imageId='1'
								title='Story of Prophet Ibrahim AS'
								publishedOn='12/12/2024'
								imageUrl={null}
							/>
						</div>
					</form>
				) : (
					<p className='text-black font-bold text-xl mt-3'>Loading ...</p>
				)}
			</div>
		</>
	);
};

export default KhutbaList;
