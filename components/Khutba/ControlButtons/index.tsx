import { Dispatch, SetStateAction, useState } from 'react';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface Props {
	isShortKhutbaChecked: boolean;
	isMediumKhutbaChecked: boolean;
	isLongKhutbaChecked: boolean;
	isHighContrastChecked: boolean;
	setIsShortKhutbaChecked: Dispatch<SetStateAction<boolean>>;
	setIsMediumKhutbaChecked: Dispatch<SetStateAction<boolean>>;
	setIsLongKhutbaChecked: Dispatch<SetStateAction<boolean>>;
	setIsHighContrastChecked: Dispatch<SetStateAction<boolean>>;
	handlePrint: unknown | any; // todo: please type this proper
	paddingClassNames: string;
}

const ControlButtons = ({
	isShortKhutbaChecked,
	isMediumKhutbaChecked,
	isLongKhutbaChecked,
	isHighContrastChecked,
	setIsShortKhutbaChecked,
	setIsMediumKhutbaChecked,
	setIsLongKhutbaChecked,
	setIsHighContrastChecked,
	handlePrint,
	paddingClassNames,
}: Props) => {
	const [size, setSize] = useState(16);

	return (
		<>
			<div
				className={`flex flex-col gap-8 items-center ${paddingClassNames}`}
			>
				<div className='flex items-center justify-center gap-3 mx-auto w-full'>
					<div className='flex items-center space-x-2'>
						<Switch
							className='data-[state=checked]:bg-primary'
							id='short-khutba-toggle'
							checked={isShortKhutbaChecked}
							onClick={() => {
								setIsShortKhutbaChecked(!isShortKhutbaChecked);
								setIsMediumKhutbaChecked(false);
								setIsLongKhutbaChecked(false);
							}}
						/>
						<Label htmlFor='short-khutba-toggle' className='text-black'>
							Short Khutba
						</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Switch
							className='data-[state=checked]:bg-primary'
							id='medium-khutba-toggle'
							checked={isMediumKhutbaChecked}
							onClick={() => {
								setIsShortKhutbaChecked(false);
								setIsMediumKhutbaChecked(!isMediumKhutbaChecked);
								setIsLongKhutbaChecked(false);
							}}
						/>
						<Label htmlFor='medium-khutba-toggle' className='text-black'>
							Medium Khutba
						</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Switch
							className='data-[state=checked]:bg-primary'
							id='long-khutba-toggle'
							checked={isLongKhutbaChecked}
							onClick={() => {
								setIsShortKhutbaChecked(false);
								setIsMediumKhutbaChecked(false);
								setIsLongKhutbaChecked(!isLongKhutbaChecked);
							}}
						/>
						<Label htmlFor='long-khutba-toggle' className='text-black'>
							Long Khutba
						</Label>
					</div>
				</div>

				<div className='flex items-center justify-center gap-3 mx-auto w-full'>
					<div className='flex items-center space-x-2'>
						<Switch
							className='data-[state=checked]:bg-primary'
							id='high-contrast-toggle'
							checked={isHighContrastChecked}
							onClick={() => {
								setIsHighContrastChecked((prev) => !prev);
							}}
						/>
						<Label htmlFor='high-contrast-toggle' className='text-black'>
							High Contrast
						</Label>
					</div>
				</div>

				<div className='flex items-center justify-center gap-3 mx-auto w-full'>
					<div className='flex items-center space-x-2 w-6/12'>
						<p className='text-black text-xs font-medium'>Aa</p>
						<Slider
							id='font-size-slider'
							min={12}
							max={24}
							step={1}
							value={[size]}
							onValueChange={(val) => setSize(val[0])}
							aria-label='Adjust text size'
						/>
						<p className='text-black font-medium'>Aa</p>
					</div>
				</div>

				<Button
					onClick={handlePrint}
					className='flex items-center justify-center gap-3 bg-secondary text-white'
				>
					<i className='text-2xl text-white ri-printer-fill' />
					Print Khutba
				</Button>
			</div>
			;
		</>
	);
};

export default ControlButtons;
