import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.number + 1}</td>
				<td>{this.props.book.title}</td>
				<td>{this.props.book.description}</td>
				<td>{this.props.book.publisher}</td>
				<td>
					<Link to="/">Edit</Link>
				</td>
			</tr>
		);
	}
}

export default Book;
