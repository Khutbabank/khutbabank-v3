'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select';
import Khutba from '../Khutba';

interface Props {
	khutbas:
		| {
				id: string;
				createdAt: Date;
				author: string | null;
				title: string;
				description: string;
				categoryId: string;
				firstPart: string;
				secondPart: string;
				thumbnailPath: string;
		  }[]
		| null;
}

const KhutbaList = ({ khutbas }: Props) => {
	const [filteredKhutbas, setFilteredKhutbas] = useState<
		Array<{
			id: string;
			createdAt: Date;
			author: string | null;
			title: string;
			description: string;
			categoryId: string;
			firstPart: string;
			secondPart: string;
			thumbnailPath: string;
		}>
	>([]);
	const [khutbaSearchText, setKhutbaSearchText] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

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
				<h1 className='text-primary text-heading font-bold leading-title'>
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
											title={k.title}
											imageUrl={`${process.env.NEXT_PUBLIC_THUMBNAIL_URL}/${k.thumbnailPath}`}
											khutbaFirstPart={k.firstPart}
											khutbaSecondPart={k.secondPart}
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
											title={k.title}
											imageUrl={`${process.env.NEXT_PUBLIC_THUMBNAIL_URL}/${k.thumbnailPath}`}
											khutbaFirstPart={k.firstPart}
											khutbaSecondPart={k.secondPart}
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
