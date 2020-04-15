import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { discounts } from './discounts';
import CardArray from './CardArray';
import DropDown from './DropDown';
import Particles from 'react-particles-js';
import 'tachyons';

const particlesOptions = {
 
	    "particles": {
	        "number": {
	            "value": 100,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "color":{"value":"#ffffff"},

	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 3,
	            "direction": "up",
	            "out_mode": "out"
	        },
	        "shape": {
      				"type": "star", 
      				"stroke": { 
        				"width": 0,
       		 		"color": "#ffffff"
      				},
	   		},
      		"line_linked": {
    				"enable": true,
   		 			"distance": 100, 
    				"color": "#ffffff",
    				"opacity": 0.5,
    				"width": 2
 				 },
	   	},

	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "grab"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "grab": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
}
class App extends Component {
	constructor(){
		super();
		this.state ={
			discounts: [],
			selectedOption: '' 
		}
	}


	OnDiscountTypeSelect = (event) =>{
		this.setState({selectedOption: event.target.value});
		this.setState({discounts: discounts});

	}
	OnSubmit= (event) => {
		console.log("selected");

	};
	
	render(){
		const { discounts, selectedOption } = this.state;
		const filteredResults = discounts.filter(discount => {
			return discount.discountType.toLowerCase().includes(selectedOption.toLowerCase());
		})
		return(
			<div className= "App">
	     		 <h1> Student Discount Tracker </h1>
	     		 <DropDown DiscountTypeSelect = { this.OnDiscountTypeSelect }  />
	      		 <CardArray discounts = { filteredResults } submitChange = { this.OnSubmit }/>
	      		  <Particles className = 'particles' params = {particlesOptions}/>
	    </div>
		)
}
}
export default App;
