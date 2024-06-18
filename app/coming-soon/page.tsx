import Link from 'next/link';

import { Button } from '@/components/ui/button';

const ContactUs = () => {
	return (
		<>
			<div className='px-8 md:px-[100px] py-9'>
				<h1 className='text-heading text-primary font-bold'>
					Coming soon ...
				</h1>

				<Link href='/khutbas'>
					<Button className='bg-primary text-white font-bold rounded-full mt-14 py-6'>
						Go back home
						<div className='bg-white rounded-full ml-5 w-8'>
							<i className='ri-arrow-right-line text-primary text-2xl' />
						</div>
					</Button>
				</Link>
			</div>
		</>
	);
};

export default ContactUs;
