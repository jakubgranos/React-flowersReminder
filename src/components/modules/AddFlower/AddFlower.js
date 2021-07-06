import React, { useState } from 'react';
import { AddFlowerForm, AddFlowerFormImage, AddFlowerInputsWrapper, AddFlowerInput, AddFlowerWrapper, AddFlowerHint } from './style';
import ImagesPlaceholder from '../../../assets/images/images-placeholder.png'

const AddFlower = (props) => {
	const [active, setActive] = useState('');
	return (
		<AddFlowerWrapper className={props.testprop ? 'active' : null}>
			<AddFlowerHint>?</AddFlowerHint>
			<AddFlowerForm>
				<AddFlowerInputsWrapper>
					<AddFlowerFormImage src={ImagesPlaceholder} alt="image placeholder" />
					<AddFlowerInput type="file" />
				</AddFlowerInputsWrapper>
			</AddFlowerForm>
		</AddFlowerWrapper>
	);
}

export default AddFlower;
