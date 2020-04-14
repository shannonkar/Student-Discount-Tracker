import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
//import InputGroup from 'react-bootstrap/InputGroup';

const SearchBox = () => {
	return (
		<div className = "SearchBox">
			<input type = 'search' placeholder = 'search discounts'/>
			<Button variant = "light"> Search </Button>
		</div>
		)
}
export default SearchBox;