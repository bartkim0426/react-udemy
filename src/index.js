import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';

// Youtube api key
const YOUTUBE_API_KEY = "AIzaSyCGE0qq_eTihlAteGEKJxXUtdpbmnnIf-s";

// Factory part
// Component class
// const App = function() {
// 	return <div>Hi!</div>;
// };
// ES6 syntax with () =>
// same as upper function
// App의 자식 component의 data를 가져올 수 있다 (상위의 컴포넌트는 데이터를 가져오는것을 전담)

// functional component
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	)
// };

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards')
	}

	videoSearch(term) {
		YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
			// this.setState({videos: videos});
			// if key, value is same using like in ES6
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		)
	}
}

// refactoring to class component
// for using state

// if using `ReactDOM.render(App)`
// Have to make instance from component
// <App />;

ReactDOM.render(<App/>, document.querySelector(".container"));
// Target container is not a DOM element
// Where to reder? => ReactDOM has second element: Target DOM node
// it's in index.html - container, root, or etc...
