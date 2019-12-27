import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Book-List App</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Book
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/add" className="nav-link">
							Add Book
						</Link>
					</li>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
