import Video from '@/components/Videos/Video';

const Videos = () => {
	const list: Array<{ vidSrc: string; thumbnailSrc: string; title: string }> =
		[
			{
				vidSrc: 'https://www.youtube.com/embed/As7sBTH_5ms',
				thumbnailSrc:
					'https://img.youtube.com/vi/As7sBTH_5ms/hqdefault.jpg',
				title: 'Jummuah from Different Angles',
			},
			{
				vidSrc: 'https://www.youtube.com/embed/Eyn_CYCTRtQ',
				thumbnailSrc:
					'https://img.youtube.com/vi/Eyn_CYCTRtQ/hqdefault.jpg',
				title: 'Jummuah from Different Angles',
			},
			{
				vidSrc: 'https://www.youtube.com/embed/sMFlimOQyzo',
				thumbnailSrc:
					'https://img.youtube.com/vi/sMFlimOQyzo/hqdefault.jpg',
				title: 'Jummuah from Different Angles',
			},
			{
				vidSrc: 'https://www.youtube.com/embed/f9uklKIxmr8',
				thumbnailSrc:
					'https://img.youtube.com/vi/f9uklKIxmr8/hqdefault.jpg',
				title: 'How to Deliver Khutba?',
			},
			{
				vidSrc: 'https://www.youtube.com/embed/9i1otABODik',
				thumbnailSrc:
					'https://img.youtube.com/vi/9i1otABODik/hqdefault.jpg',
				title: 'How to Deliver Khutba?',
			},
		];

	return (
		<>
			<div className='px-8 md:px-[100px] py-9'>
				<h1 className='text-heading text-primary font-bold leading-title'>
					Khutbabank Videos
				</h1>
				<h2 className='text-sub-heading text-secondary font-bold mt-3'>
					Find the educational videos below
				</h2>
				<div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-10 justify-center mt-10'>
					{list.map((l, i) => (
						<Video
							key={i}
							vidSrc={l.vidSrc}
							thumbnailSrc={l.thumbnailSrc}
							title={l.title}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Videos;
