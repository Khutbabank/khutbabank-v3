import { Dispatch, SetStateAction } from 'react';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

interface Props {
	isShortKhutbaChecked: boolean;
	isMediumKhutbaChecked: boolean;
	isLongKhutbaChecked: boolean;
	setIsShortKhutbaChecked: Dispatch<SetStateAction<boolean>>;
	setIsMediumKhutbaChecked: Dispatch<SetStateAction<boolean>>;
	setIsLongKhutbaChecked: Dispatch<SetStateAction<boolean>>;
	handlePrint: unknown | any; // todo: please type this proper
	paddingClassNames: string;
}

const ControlButtons = ({
	isShortKhutbaChecked,
	isMediumKhutbaChecked,
	isLongKhutbaChecked,
	setIsShortKhutbaChecked,
	setIsMediumKhutbaChecked,
	setIsLongKhutbaChecked,
	handlePrint,
	paddingClassNames,
}: Props) => {
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
								setIsMediumKhutbaChecked(!isMediumKhutbaChecked);
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
								setIsLongKhutbaChecked(!isLongKhutbaChecked);
							}}
						/>
						<Label htmlFor='long-khutba-toggle' className='text-black'>
							Long Khutba
						</Label>
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
