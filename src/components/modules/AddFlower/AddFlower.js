import React, { useState } from 'react';
import { AddFlowerForm, AddFlowerFormImage, AddFlowerInputsWrapper, AddFlowerInputFile, AddFlowerWrapper, AddFlowerHint, AddFlowerInput, AddFlowerTextArea } from './style';
import ImagesPlaceholder from '../../../assets/images/images-placeholder.png'
import Pot from '../../../assets/images/pot.png'
import { css } from "@emotion/css";
const AddFlower = (props) => {
	const [active, setActive] = useState('');
	return (
		<AddFlowerWrapper className={props.testprop ? 'active' : null}>
			<AddFlowerHint>?</AddFlowerHint>
			<AddFlowerForm>
				<AddFlowerInputsWrapper>
					<AddFlowerFormImage src={ImagesPlaceholder} alt="image placeholder" />
					<AddFlowerInputFile type="file" />
				</AddFlowerInputsWrapper>
				<AddFlowerInputsWrapper>
					<AddFlowerInput type="text" placeholder="Nazwa kwiatka" />
				</AddFlowerInputsWrapper>
				<AddFlowerInputsWrapper>
					<AddFlowerTextArea placeholder="Informacje o kwiatku" />
					<img src={Pot} alt="" className={css`
					position: absolute;
					max-width: 100%;
					top: -53px;
					z-index: -1;
					max-height: 357px;
					left: 50%;
					transform: translateX(-50%);
					max-width: 320px;
				`} />
				</AddFlowerInputsWrapper>
			</AddFlowerForm>
		</AddFlowerWrapper>
	);
}

export default AddFlower;
