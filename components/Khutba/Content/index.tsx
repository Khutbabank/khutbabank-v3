import { MutableRefObject } from 'react';

import defaultTexts from '@/configs/defaultTexts';

interface Props {
	title: string;
	firstPart: string;
	secondPart: string;
	isShortKhutbaChecked: boolean;
	isMediumKhutbaChecked: boolean;
	isLongKhutbaChecked: boolean;
	isHighContrastChecked: boolean;
	componentRef: MutableRefObject<null>;
	paddingClassNames: string;
	khutbaContentFontSize: number;
}

const Content = ({
	title,
	firstPart,
	secondPart,
	isShortKhutbaChecked,
	isMediumKhutbaChecked,
	isLongKhutbaChecked,
	isHighContrastChecked,
	componentRef,
	paddingClassNames,
	khutbaContentFontSize,
}: Props) => {
	return (
		<>
			<div
				className={`flex flex-col mt-7 ${paddingClassNames} ${
					isHighContrastChecked && 'bg-high-contrast-background py-5'
				}`}
				ref={componentRef}
			>
				<h1
					className={`text-heading font-bold mb-5 leading-title ${
						isHighContrastChecked
							? 'text-high-contrast-primary'
							: 'text-primary'
					}`}
					style={{
						fontSize: `${
							khutbaContentFontSize > 0
								? `${50 + khutbaContentFontSize}px`
								: '50px'
						} `,
					}}
				>
					{title}
				</h1>

				{isShortKhutbaChecked && (
					<div className='flex flex-col items-center gap-10 my-9'>
						<audio controls src='/audios/hajaah-short.m4a'></audio>

						<pre
							className={`break-words whitespace-pre-wrap text-2xl text-center ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.shortKhutba.beginning}
						</pre>
					</div>
				)}

				{isMediumKhutbaChecked && (
					<div className='flex flex-col items-center gap-10 my-9'>
						<audio controls src='/audios/hajaah-medium.m4a'></audio>

						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.mediumKhutba.beginning}
						</pre>
					</div>
				)}

				{isLongKhutbaChecked && (
					<div className='flex flex-col items-center gap-10 my-9'>
						<audio controls src='/audios/hajaah-long.m4a'></audio>

						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.longKhutba.beginning}
						</pre>
					</div>
				)}

				<pre
					className={`text-normal overflow-hidden break-normal whitespace-pre-wrap ${
						isHighContrastChecked
							? 'text-high-contrast-text'
							: 'text-black'
					}`}
					style={{
						fontSize: `${
							khutbaContentFontSize > 0
								? `${18 + khutbaContentFontSize}px`
								: '18px'
						} `,
					}}
				>
					{firstPart}
				</pre>

				{isShortKhutbaChecked && (
					<pre
						className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
							isHighContrastChecked
								? 'text-high-contrast-text'
								: 'text-black'
						}`}
						style={{
							fontSize: `${
								khutbaContentFontSize > 0
									? `${24 + khutbaContentFontSize}px`
									: '24px'
							} `,
						}}
					>
						{defaultTexts.shortKhutba.middle1}
					</pre>
				)}

				{isMediumKhutbaChecked && (
					<pre
						className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
							isHighContrastChecked
								? 'text-high-contrast-text'
								: 'text-black'
						}`}
						style={{
							fontSize: `${
								khutbaContentFontSize > 0
									? `${24 + khutbaContentFontSize}px`
									: '24px'
							} `,
						}}
					>
						{defaultTexts.mediumKhutba.middle1}
					</pre>
				)}

				{isLongKhutbaChecked && (
					<pre
						className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
							isHighContrastChecked
								? 'text-high-contrast-text'
								: 'text-black'
						}`}
						style={{
							fontSize: `${
								khutbaContentFontSize > 0
									? `${24 + khutbaContentFontSize}px`
									: '24px'
							} `,
						}}
					>
						{defaultTexts.longKhutba.middle1}
					</pre>
				)}

				<div className='flex flex-col mt-5'>
					<h2
						className='text-secondary font-medium text-sub-heading'
						style={{
							fontSize: `${
								khutbaContentFontSize > 0
									? `${30 + khutbaContentFontSize}px`
									: '30px'
							} `,
						}}
					>
						Second Part
					</h2>
					{isShortKhutbaChecked && (
						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.shortKhutba.middle2}
						</pre>
					)}
					{isMediumKhutbaChecked && (
						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.mediumKhutba.middle2}
						</pre>
					)}
					{isLongKhutbaChecked && (
						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.longKhutba.middle2}
						</pre>
					)}
					<pre
						className={`text-normal overflow-hidden break-words whitespace-pre-wrap mt-3 ${
							isHighContrastChecked
								? 'text-high-contrast-text'
								: 'text-black'
						}`}
						style={{
							fontSize: `${
								khutbaContentFontSize > 0
									? `${18 + khutbaContentFontSize}px`
									: '18px'
							} `,
						}}
					>
						{secondPart}
					</pre>
					{isShortKhutbaChecked && (
						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.shortKhutba.ending}
						</pre>
					)}
					{isMediumKhutbaChecked && (
						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.mediumKhutba.ending}
						</pre>
					)}
					{isLongKhutbaChecked && (
						<pre
							className={`overflow-hidden break-words whitespace-pre-wrap text-2xl text-center my-9 ${
								isHighContrastChecked
									? 'text-high-contrast-text'
									: 'text-black'
							}`}
							style={{
								fontSize: `${
									khutbaContentFontSize > 0
										? `${24 + khutbaContentFontSize}px`
										: '24px'
								} `,
							}}
						>
							{defaultTexts.longKhutba.ending}
						</pre>
					)}
				</div>
			</div>
		</>
	);
};

export default Content;
