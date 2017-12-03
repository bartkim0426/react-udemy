import React from 'react';

const VideoDetail = ({video}) => {
	// React는 videos가 채워지기 전에 모든 component들을 rendering함
	// 그래서 loading, 불러오기 등의 방법을 써서 render에 필요한 component들이 모두 준비될 떄 까지 기다리게 해야함
	// ajax spinner라고 부름 => high level component에 위치시킴
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	// ES6 syntax to add string
	// same as "https://www.youtube.com/embed/" + {videoId}
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetail;
