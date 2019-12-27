import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import Book from '../components/book';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = { books: [] };
		this.bookList = this.bookList.bind(this);
	}

	componentDidMount() {
		axios
			.get('https://timoti-booklist-server.herokuapp.com/books')
			.then((res) => this.setState({ books: res.data }))
			.catch((err) => console.log(err));
	}

	bookList() {
		return this.state.books.map((currenData, index) => {
			return <Book book={currenData} number={index} key={index} />;
		});
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Book List</h3>
				<Table responsive>
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Description</th>
							<th>Publisher</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>{this.bookList()}</tbody>
				</Table>
			</div>
		);
	}
}

export default BookList;
