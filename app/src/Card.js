import React from 'react';


const Card = ({ id, brand, percentageOff, discountType, discountCode, imgName}) => {
	return (
		<div className = 'tc bg light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src = { process.env.PUBLIC_URL + `/images/${ imgName }.png`} style ={{width:200, height:200}} />
			<div>
				<h2> {brand}</h2>
				<p> {percentageOff} </p>
				<p> {discountType} </p>
				<p> {discountCode} </p>
		</div>
		</div>
		);
}
export default Card;