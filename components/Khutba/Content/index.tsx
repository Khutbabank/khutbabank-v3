import { MutableRefObject } from 'react';

import defaultTexts from '@/configs/defaultTexts';

interface Props {
	title: string;
	firstPart: string;
	secondPart: string;
	isShortKhutbaChecked: boolean;
	isMediumKhutbaChecked: boolean;
	isLongKhutbaChecked: boolean;
	componentRef: MutableRefObject<null>;
	paddingClassNames: string;
}

const Content = ({
	title,
	firstPart,
	secondPart,
	isShortKhutbaChecked,
	isMediumKhutbaChecked,
	isLongKhutbaChecked,
	componentRef,
	paddingClassNames,
}: Props) => {
	return (
		<>
			<div
				className={`flex flex-col mt-7 ${paddingClassNames}`}
				ref={componentRef}
			>
				<h1 className='text-heading text-primary font-bold mb-5'>
					{title}
				</h1>

				{isShortKhutbaChecked && (
					<pre className=' break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
						{defaultTexts.shortKhutba.beginning}
					</pre>
				)}

				{isMediumKhutbaChecked && (
					<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
						{defaultTexts.mediumKhutba.beginning}
					</pre>
				)}

				{isLongKhutbaChecked && (
					<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
						{defaultTexts.longKhutba.beginning}
					</pre>
				)}

				<pre className='text-black text-normal overflow-hidden break-normal whitespace-pre-wrap'>
					{firstPart}
				</pre>

				{isShortKhutbaChecked && (
					<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
						{defaultTexts.shortKhutba.middle1}
					</pre>
				)}

				{isMediumKhutbaChecked && (
					<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
						{defaultTexts.mediumKhutba.middle1}
					</pre>
				)}

				{isLongKhutbaChecked && (
					<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
						{defaultTexts.longKhutba.middle1}
					</pre>
				)}

				<div className='flex flex-col mt-5'>
					<h2 className='text-secondary font-medium text-sub-heading'>
						Second Part
					</h2>

					{isShortKhutbaChecked && (
						<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
							{defaultTexts.shortKhutba.middle2}
						</pre>
					)}

					{isMediumKhutbaChecked && (
						<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
							{defaultTexts.mediumKhutba.middle2}
						</pre>
					)}

					{isLongKhutbaChecked && (
						<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
							{defaultTexts.longKhutba.middle2}
						</pre>
					)}

					<pre className='text-black text-normal overflow-hidden break-words whitespace-pre-wraps mt-3'>
						{secondPart}
					</pre>

					{isShortKhutbaChecked && (
						<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
							{defaultTexts.shortKhutba.ending}
						</pre>
					)}

					{isMediumKhutbaChecked && (
						<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
							{defaultTexts.mediumKhutba.ending}
						</pre>
					)}

					{isLongKhutbaChecked && (
						<pre className='overflow-hidden break-words whitespace-pre-wrap text-black text-2xl text-center my-9'>
							{defaultTexts.longKhutba.ending}
						</pre>
					)}
				</div>
			</div>
		</>
	);
};

export default Content;
