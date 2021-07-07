import styled from '@emotion/styled'

export const AddFlowerForm = styled.form`
	width: 100%;
	height: 100%;

    max-width: 360px;
    margin: 0 auto;
	padding: 120px 20px 0;

`;

export const AddFlowerFormImage = styled.img`
	width: 150px;
    height: 150px;
    object-fit: cover;
	border-radius: 100%;
	position: relative;
	
`;

export const AddFlowerInputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	&:first-of-type {
		margin-bottom: 40px;


		&:after {
			content: '';
			width: 20px;
			height: 100px;
			background: #7cb65b;
			position: absolute;
			bottom: -42px;
			z-index: -1;
		}

	}

`;

export const AddFlowerInputFile = styled.input`
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
	line-height: 1;
`;

export const AddFlowerWrapper = styled.div`
	opacity: 0;

	transition: opacity 0.5s;

	overflow-y: auto;
	height: 100%;

	&.active {
		opacity: 1;
	}
	
`;


export const AddFlowerInput = styled.input`
	text-align: center;
	width: 100%;
	padding: 15px;
	background: transparent;
	border: none;
	color: white;
	outline: none;
	line-height: 1;
	font-size: 20px;
	font-family: 'Roboto Condensed', sans-serif;
	letter-spacing: 1px;

	&::placeholder {
		color: white;
	}
`;

export const AddFlowerTextArea = styled.textarea`
	text-align: center;
	width: 100%;
	padding: 15px;
	background: transparent;
	border: none;
	outline: none;
	font-family: 'Roboto Condensed', sans-serif;
	letter-spacing: 1px;
    max-width: 229px;
	height: 220px;
    color: #645143;
    line-height: 1.2;
    font-size: 24px;
    margin-left: 7px;
	resize: none;

	&::placeholder {
	    color: #645143;
	}
`;


export const AddFlowerInputPattern = styled.div`
	position: relative;
`;

