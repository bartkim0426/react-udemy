// import React from 'react';
// syntax suger
import React, { Component } from 'react';

// function component
// const SearchBar = () => {
// 	return <input />;
// };

// start from functional
// and refactor to class when need more function
// class component
class SearchBar extends Component {
	constructor(props) {
		// react의 Component 함수 (parent class)를 상속 받기위해서...
		super(props);
		// state?
		// 새 object를 만들면서 initializing
		// this.state는 object
		// only construcor can define state (this.state)
		// others, using setState
		this.state = { term: "" };
	}

	render() {
		// javascirpt 변수 사용할때는 {}로 감싸줘야함
		// onChange: react special property
		// return <input onChange={this.onInputChange}/>;
		// change to arrow function
		// return <input onChange={event => console.log(event.target.value)}/>;
		// change to state
		// never do like
		// this.state.item, only use setState
		// using on 참조 is possible
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={ event => this.onInputChange(event.target.value)}/>
			</div>
		);
	};

	onInputChange(term) {
		// set term value
		this.setState({term});
		// callback
		this.props.onSearchTermChange(term);
	}
	// react의 데이터 관리
	// input의 value가 바뀔 필요가 없음. 쉽게 input값을 읽을 수 있게 해줌

	// about event
	// 1. event handler 정의
	// 2. event handler 사용
	// handleInputChange 등의 이름을 사용
	// on이나 handle + input(특정 요소) + Change(행동)
	// event handler: always event (e, 이름은 상관 없음)
	// ONInputChange(event) {
	// 	console.log(event.target.value);	
	// }
}

// About state
// what state is?
// plane js object

export default SearchBar;
