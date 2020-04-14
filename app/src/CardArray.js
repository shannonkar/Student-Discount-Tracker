import React from 'react';
import Card from './Card';

const CardArray = ({ discounts }) => {
	const cardArray = discounts.map((user, i) => {
		return (<Card  key = {i}
		 		 id = {discounts[i].id} 
		 		brand = {discounts[i].brand} 
				percentageOff = {discounts[i].percentageOff} 
				discountType= {discounts[i].discountType}
				discountCode = {discounts[i].discountCode} 
				imgName = {discounts[i].imgName}
				/>
				);
	})
return(
	<div> 
	{ cardArray }
	</div>
	);
}

export default CardArray;