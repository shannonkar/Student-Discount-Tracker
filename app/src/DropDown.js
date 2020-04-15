import React from 'react';

const DropDown = ({ selectedOption, DiscountTypeSelect }) => {
	return(
	 <div>
		<form>
			<label>
				What type of discount are you looing for today?
				<select value = { selectedOption } onChange ={ DiscountTypeSelect }>
					<option value = "default"> Select an option </option>
					<option value = "retail"> Retail </option>
					<option value = "electronics"> Electronics </option>
					<option value = "Home Decor">Home Decor </option>
					<option value = "services"> Services </option>
					<option value = "transportation"> Transportation </option>
				</select>
			</label>
			
		</form>
	 </div>
)
	
}
export default DropDown