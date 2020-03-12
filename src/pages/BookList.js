import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

import Book from '../components/book';
import SearchBox from '../components/searchbox';
import loadingImage from '../loading.gif';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = { books: [], isLoading: true, searchField: '' };
		this.bookList = this.bookList.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	componentDidMount() {
		axios
			.get('https://timoti-booklist-server.herokuapp.com/books')
			.then((res) => this.setState({ books: res.data, isLoading: false }))
			.catch((err) => console.log(err));
	}

	bookList() {
		const { books, searchField } = this.state;
		const filterBook = books.filter((book) => {
			return book.title.toLowerCase().includes(searchField.toLowerCase());
		});
		return filterBook.map((currenData, index) => {
			return <Book book={currenData} number={index} key={index} />;
		});
	}

	onChangeHandler(e) {
		this.setState({ searchField: e.target.value });
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<div>
					<h3 className="d-flex justify-content-center">Book List</h3>
				</div>
				<SearchBox
					onChange={this.onChangeHandler}
					value={this.state.searchField}
				/>
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
					<tbody>
						{this.state.isLoading === false && this.bookList()}
					</tbody>
				</Table>
				{this.state.isLoading === true && (
					<img
						src={loadingImage}
						style={{
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto',
							width: '10%'
						}}
						alt="loadingImage"
					/>
				)}
			</div>
		);
	}
}

export default BookList;
