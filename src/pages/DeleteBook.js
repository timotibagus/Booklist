import React, { Component } from 'react';
import axios from 'axios';

class DeleteBook extends Component {
	componentDidMount() {
		axios
			.delete(
				`https://timoti-booklist-server.herokuapp.com/books/${this.props
					.match.params.id}`
			)
			.then((res) => {
				console.log(res);
				this.props.history.push('/');
			})
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<div className="alert alert-primary" role="alert">
				Data delete
			</div>
		);
	}
}

export default DeleteBook;
