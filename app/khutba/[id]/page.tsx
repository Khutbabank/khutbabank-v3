'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { useReactToPrint } from 'react-to-print';
import { Timestamp } from 'firebase/firestore';

import Content from '@/components/Khutba/Content';
import ControlButtons from '@/components/Khutba/ControlButtons';
import { getKhutba } from '@/firebase/functions/khutbas';

const Khutba = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [isShortKhutbaChecked, setIsShortKhutbaChecked] =
		useState<boolean>(false);
	const [isMediumKhutbaChecked, setIsMediumKhutbaChecked] =
		useState<boolean>(false);
	const [isLongKhutbaChecked, setIsLongKhutbaChecked] =
		useState<boolean>(false);
	const [isHighContrastChecked, setIsHighContrastChecked] =
		useState<boolean>(false);
	const [khutba, setKhutba] = useState<{
		category: string;
		description: string;
		id: string;
		imageId: string;
		title: string;
		createdTimestamp: Timestamp;
		imageUrl: string | null;
		khutba_first_part: string;
		khutba_second_part: string;
	}>();
	const [khutbaContentFontSize, setKhutbaContentFontSize] =
		useState<number>(0);

	const params = useParams<{ id: string }>();

	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const paddingClassNames = 'px-8 md:px-[100px]';

	useEffect(() => {
		const getData = async () => {
			const data = await getKhutba({ id: params.id });

			if (data.result) {
				setKhutba(data.result);
				setLoading(false);
			} else if (data.error) {
				setError(true);
				setLoading(false);
			}
		};

		getData();
	}, []);

	return (
		<>
			<div className='py-24 pt-8 md:pt-14'>
				{!loading ? (
					error ? (
						<p
							className={`${paddingClassNames} text-black font-bold text-xl mt-3`}
						>
							There has been an error. Please try again later.
						</p>
					) : (
						khutba && (
							<>
								<ControlButtons
									handlePrint={handlePrint}
									isShortKhutbaChecked={isShortKhutbaChecked}
									isMediumKhutbaChecked={isMediumKhutbaChecked}
									isLongKhutbaChecked={isLongKhutbaChecked}
									isHighContrastChecked={isHighContrastChecked}
									setIsShortKhutbaChecked={setIsShortKhutbaChecked}
									setIsMediumKhutbaChecked={setIsMediumKhutbaChecked}
									setIsLongKhutbaChecked={setIsLongKhutbaChecked}
									setIsHighContrastChecked={setIsHighContrastChecked}
									setKhutbaContentFontSize={setKhutbaContentFontSize}
									khutbaContentFontSize={khutbaContentFontSize}
									paddingClassNames={paddingClassNames}
								/>
								<Content
									paddingClassNames={paddingClassNames}
									componentRef={componentRef}
									isShortKhutbaChecked={isShortKhutbaChecked}
									isMediumKhutbaChecked={isMediumKhutbaChecked}
									isLongKhutbaChecked={isLongKhutbaChecked}
									isHighContrastChecked={isHighContrastChecked}
									title={khutba?.title}
									firstPart={khutba?.khutba_first_part}
									secondPart={khutba?.khutba_second_part}
									khutbaContentFontSize={khutbaContentFontSize}
								/>
							</>
						)
					)
				) : (
					<p
						className={`${paddingClassNames} text-black font-bold text-xl mt-3`}
					>
						Loading ...
					</p>
				)}
			</div>
		</>
	);
};

export default Khutba;
