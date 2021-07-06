import styled from '@emotion/styled'

export const AddFlowerForm = styled.form`
	width: 100%;
	height: 100%;
	padding-top: 70px;
`;

export const AddFlowerFormImage = styled.img`
	width: 150px;
    height: 150px;
    object-fit: cover;
	border-radius: 100%;
`;

export const AddFlowerInputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

export const AddFlowerInput = styled.input`
	width: 150px;
    height: 150px;
    object-fit: cover;
	border-radius: 100%;
	opacity: 0;
	position: absolute;
	cursor: pointer;
`;


export const AddFlowerHint = styled.button`
	background: white;
	color: #a38555;
	border: none;
	font-size: 35px;
	position: absolute;
	top: 20px;
	right: 20px;
	border: 1px solid white;
	border-radius: 100%;
	padding: 7px;
	width: 50px;
	height: 50px;
	font-weight: 900;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AddFlowerWrapper = styled.div`
	opacity: 0;

	transition: opacity 0.5s;
	
	&.active {
		opacity: 1;
	}
`;
