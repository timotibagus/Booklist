import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navbar.component';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
	return (
		<Router>
			<div className="container">
				<NavBar />
				<Route exact path="/" component={BookList} />
				<Route path="/add" component={AddBook} />
			</div>
		</Router>
	);
}

export default App;
