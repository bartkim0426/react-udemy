import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {;
	const imageURL = video.snippet.thumbnails.default.url;
	// console.log(video);
	// 위에 props 대신에 {video}를 받는게 아랫줄과 동일한 문장
	//const video = props.video;
	return (
		<li 
			onClick={ () => onVideoSelect(video) }
			className="list-group-item">
			<div className="video-list mdeia">
				<div className="mdeia-left">
					<img className="media-object" src={imageURL}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
