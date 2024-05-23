interface Props {
	title: string;
	firstPart: string;
	secondPart: string;
}

const Content = ({ title, firstPart, secondPart }: Props) => {
	return (
		<>
			<div className='flex flex-col mt-7'>
				<h1 className='text-heading text-primary font-bold'>{title}</h1>

				<p className='text-black text-normal overflow-hidden break-words whitespace-pre-lines'>
					{firstPart}
				</p>

				<div className='flex flex-col mt-5'>
					<h2 className='text-secondary font-medium text-sub-heading'>
						Second Part
					</h2>
					<p className='text-black text-normal overflow-hidden break-words whitespace-pre-lines mt-3'>
						{secondPart}
					</p>
				</div>
			</div>
		</>
	);
};

export default Content;
