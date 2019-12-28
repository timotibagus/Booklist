import React from 'react';
import { Link } from 'react-router-dom';

function Book({ book, number }) {
	return (
		<tr>
			<td>{number + 1}</td>
			<td>{book.title}</td>
			<td>{book.description}</td>
			<td>{book.publisher}</td>
			<td>
				<Link to={`/edit/${book._id}`}>Edit</Link>
				|
				<Link to={`/delete/${book._id}`}>Delete</Link>
			</td>
		</tr>
	);
}

export default Book;
