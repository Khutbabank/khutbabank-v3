'use client';

import { useState, useEffect } from 'react';

import { Input } from '@/components/ui/input';
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select';
import Khutba from '../Khutba';
import { getKhutbas, getKhutbaImage } from '@/firebase/functions/khutbas';
import { Timestamp } from 'firebase/firestore';

const KhutbaList = () => {
	const [khutbas, setKhutbas] = useState<
		Array<{
			category: string;
			description: string;
			id: string;
			imageId: string;
			title: string;
			createdTimestamp: Timestamp;
			imageUrl: string | null;
			khutba_first_part: string;
			khutba_second_part: string;
		}>
	>();
	const [filteredKhutbas, setFilteredKhutbas] = useState<
		Array<{
			category: string;
			description: string;
			id: string;
			imageId: string;
			title: string;
			createdTimestamp: Timestamp;
			imageUrl: string | null;
			khutba_first_part: string;
			khutba_second_part: string;
		}>
	>([]);
	const [khutbaSearchText, setKhutbaSearchText] = useState<string>('');
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
				setLoading(false);
			}
		};

		getData();
	}, []);

	const onSearchKhutbaInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setKhutbaSearchText(e.target.value);

		if (e.target.value && e.target.value.length > 0) {
			const filtered = khutbas?.filter((k) =>
				k.title.toLowerCase().includes(e.target.value.toLowerCase()),
			);

			if (filtered && filtered?.length > 0) {
				setFilteredKhutbas(filtered);
			} else {
				setFilteredKhutbas([]);
			}
		} else {
			setFilteredKhutbas([]);
		}
	};

	return (
		<>
			<div className='flex flex-col px-8 md:px-[100px] py-24 pt-20'>
				<h1 className='text-primary text-heading font-bold'>
					Browse the Khutba bank
				</h1>
				{!loading ? (
					error ? (
						<p className='text-black font-bold text-xl mt-3'>
							There has been an error. Please try again later.
						</p>
					) : (
						// TODO: look into this form element - why do we have it here? is it needed?
						<form className='mt-4'>
							<p className='text-normal text-black'>
								Use the filters to narrow your search
							</p>

							<div className='flex flex-col sm:flex-row gap-4 mt-8 md:max-w-[500px]'>
								<Input
									onChange={onSearchKhutbaInputChange}
									value={khutbaSearchText}
									className='bg-white text-black'
									placeholder='Search Khutba'
								/>
								{/* // TODO: hidden for now */}
								{/* <Select>
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
								</Select> */}
							</div>

							<div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
								{filteredKhutbas.length > 0 &&
									filteredKhutbas.map((k, i) => (
										<Khutba
											key={i}
											id={k.id}
											description={k.description}
											category={k.category}
											imageId={k.imageId}
											title={k.title}
											publishedOn={k.createdTimestamp}
											imageUrl={k.imageUrl}
											khutbaFirstPart={k.khutba_first_part}
											khutbaSecondPart={k.khutba_second_part}
										/>
									))}

								{filteredKhutbas.length < 1 &&
									khutbaSearchText.length < 1 &&
									khutbas &&
									khutbas.length > 0 &&
									khutbas.map((k, i) => (
										<Khutba
											key={i}
											id={k.id}
											description={k.description}
											category={k.category}
											imageId={k.imageId}
											title={k.title}
											publishedOn={k.createdTimestamp}
											imageUrl={k.imageUrl}
											khutbaFirstPart={k.khutba_first_part}
											khutbaSecondPart={k.khutba_second_part}
										/>
									))}
							</div>
						</form>
					)
				) : (
					<p className='text-black font-bold text-xl mt-3'>Loading ...</p>
				)}
			</div>
		</>
	);
};

export default KhutbaList;
