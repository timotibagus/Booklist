import React, { Component } from 'react';

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = { searchField: '' };
	}
	render() {
		return (
			<input
				type="search"
				placeholder="Search Book"
				onChange={this.props.onChange}
				value={this.props.value}
				className="form-control mb-2"
			/>
		);
	}
}
export default SearchBox;
