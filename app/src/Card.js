import React from 'react';


const Card = ({ id, brand, percentageOff, discountType, discountCode, imgName, }) => {
	return (
		<div className = 'tc grow bg-washed-blue  br3 pa3 ma2 dib bw2 shadow-5' >
			<img src = { process.env.PUBLIC_URL + `/images/${ imgName }.png`} style ={{width:200, height:200}} />
			<div>
				<h2> {brand}</h2>
				<p> Percentage off:  {percentageOff} </p>
				<p> Discount Type: {discountType} </p>
				<a href = "#" onClick={() => {alert(`The discountCode ${ discountCode }  has been copied to the clipboard`)}}> {discountCode}</a>
				
		</div>
		</div>
		);
}
export default Card;