import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import Khutba from '../Khutba';

const KhutbaList = () => {
	return (
		<>
			<div className='flex flex-col px-8 md:px-[100px] py-24 pt-20'>
				<h1 className='text-primary text-heading font-bold'>
					Browse the Khutba bank
				</h1>

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

					<div className='mt-20 grid grid-cols-3'>
						<Khutba
							id='1'
							description="A short story of Prophet Ibrahim AS, the incident with his father and people and the bulding of Ka'bah with..."
							category='Story'
							imageId='1'
							title='Story of Prophet Ibrahim AS'
							publishedOn='12/12/2024'
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default KhutbaList;
