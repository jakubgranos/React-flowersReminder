import React from 'react';
import AddFlowerFormWrapper from './style';
const AddFlowerForm = () => {

	return (
		<AddFlowerFormWrapper>
			<div className="addflowerform__wrapper">
				<input type="text" placeholder="Nazwa Kwiatka" />
			</div>
			<div className="addflowerform__wrapper">
				<textarea placeholder="Opis Kwiatka" />
			</div>
			<div className="addflowerform__wrapper">
				<label htmlFor="addFlowerFile"></label>
				<input type="file" id="addFlowerFile" name="addFlowerFile" />
			</div>
			<img src="" alt="flower image placeholder" />
			<button type="submit">Dodaj</button>
		</AddFlowerFormWrapper>
	)

}

export default AddFlowerForm
