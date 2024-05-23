import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const ControlButtons = () => {
	return (
		<>
			<div className='flex flex-col gap-8 items-center'>
				<div className='flex items-center justify-center gap-3 mx-auto w-full'>
					<div className='flex items-center space-x-2'>
						<Switch
							className='data-[state=checked]:bg-primary'
							id='short-khutba-toggle'
						/>
						<Label htmlFor='short-khutba-toggle' className='text-black'>
							Short Khutba
						</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Switch
							className='data-[state=checked]:bg-primary'
							id='medium-khutba-toggle'
						/>
						<Label htmlFor='medium-khutba-toggle' className='text-black'>
							Medium Khutba
						</Label>
					</div>

					<div className='flex items-center space-x-2'>
						<Switch
							className='data-[state=checked]:bg-primary'
							id='long-khutba-toggle'
						/>
						<Label htmlFor='long-khutba-toggle' className='text-black'>
							Long Khutba
						</Label>
					</div>
				</div>

				<Button className='flex items-center justify-center gap-3 bg-secondary text-white'>
					<i className='text-2xl text-white ri-printer-fill' />
					Prink Khutba
				</Button>
			</div>
			;
		</>
	);
};

export default ControlButtons;
