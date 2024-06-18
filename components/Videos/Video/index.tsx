interface Props {
	vidSrc: string;
	thumbnailSrc: string;
	title: string;
}

const Video = ({ vidSrc, thumbnailSrc, title }: Props) => {
	return (
		<>
			<iframe
				className='rounded-xl'
				width='360'
				height='200'
				src={vidSrc}
				srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0a4c82;text-shadow:0 0 0.5em black}</style><a href=${vidSrc}><img src=${thumbnailSrc} alt=${thumbnailSrc}><span>▶</span></a>`}
				// frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title={title}
			/>
		</>
	);
};

export default Video;
