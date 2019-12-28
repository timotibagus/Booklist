import React, { Component } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

class EditBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			publisher: ''
		};
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangePublisher = this.onChangePublisher.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		const uri = `https://timoti-booklist-server.herokuapp.com/books/${id}`;
		axios
			.get(uri)
			.then((res) =>
				this.setState({
					title: res.data.title,
					description: res.data.description,
					publisher: res.data.publisher
				})
			)
			.catch((err) => console.log(err));
	}
	onChangeTitle(e) {
		this.setState({
			title: e.target.value
		});
	}
	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}
	onChangePublisher(e) {
		this.setState({
			publisher: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		const { id } = this.props.match.params;
		const uri = `https://timoti-booklist-server.herokuapp.com/books/${id}`;
		const updateBook = {
			title: this.state.title,
			description: this.state.description,
			publisher: this.state.publisher
		};
		axios
			.patch(uri, updateBook)
			.then((res) => {
				console.log(res.data);
				this.props.history.push('/');
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="bookName">
					<Form.Label>Book Title</Form.Label>
					<Form.Control
						required
						type="text"
						value={this.state.title}
						onChange={this.onChangeTitle}
					/>
				</Form.Group>
				<Form.Group controlId="description">
					<Form.Label>Description</Form.Label>
					<Form.Control
						required
						type="text"
						value={this.state.description}
						onChange={this.onChangeDescription}
					/>
				</Form.Group>
				<Form.Group controlId="publisher">
					<Form.Label>Publisher</Form.Label>
					<Form.Control
						required
						type="text"
						value={this.state.publisher}
						onChange={this.onChangePublisher}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default EditBook;
