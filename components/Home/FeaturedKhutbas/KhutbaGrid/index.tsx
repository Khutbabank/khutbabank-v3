import KhutbaGridItem from '../KhutbaGridItem';

const KhutbaGrid = () => {
	return (
		<>
			<div className='grid md:grid-cols-2 gap-8'>
				<KhutbaGridItem
					imageUrl='/dummyImgs/khutba-cover-img.png'
					title='Correct Belief'
					description='Prophet Isa (peace be on him) is a significant figure in Islam and one of the most important prophets of Allah.'
					id={1}
				/>
				<KhutbaGridItem
					imageUrl='/dummyImgs/khutba-cover-img.png'
					title='Correct Belief'
					description='Prophet Isa (peace be on him) is a significant figure in Islam and one of the most important prophets of Allah.'
					id={1}
				/>
				<KhutbaGridItem
					imageUrl='/dummyImgs/khutba-cover-img.png'
					title='Correct Belief'
					description='Prophet Isa (peace be on him) is a significant figure in Islam and one of the most important prophets of Allah.'
					id={1}
				/>
				<KhutbaGridItem
					imageUrl='/dummyImgs/khutba-cover-img.png'
					title='Correct Belief'
					description='Prophet Isa (peace be on him) is a significant figure in Islam and one of the most important prophets of Allah.'
					id={1}
				/>
			</div>
		</>
	);
};

export default KhutbaGrid;
