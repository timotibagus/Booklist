import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class AddBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			publisher: '',
			submited: false
		};
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangePublisher = this.onChangePublisher.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
	handleSubmit(event) {
		event.preventDefault();

		const newBook = {
			title: this.state.title,
			description: this.state.description,
			publisher: this.state.publisher
		};
		const uri = 'https://timoti-booklist-server.herokuapp.com/books';
		axios.post(uri, newBook).then((res) => console.log(res.data));

		this.setState({
			description: '',
			title: '',
			publisher: '',
			submited: !this.state.submited
		});
		setInterval(() => {
			this.setState({ submited: false });
		}, 3000);
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="bookName">
					<Form.Label>Book Title</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Book Title"
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

				{this.state.submited === true && (
					<Alert variant="success" style={{ marginTop: 10 }}>
						Data added!
					</Alert>
				)}
			</Form>
		);
	}
}
export default AddBook;
