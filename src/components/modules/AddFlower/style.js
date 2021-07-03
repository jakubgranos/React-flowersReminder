import styled from 'styled-components';
const colors = {
	colorRefGold: '#9e8423',
	transparentRefGold: '#0000002b',
	transparentRefGoldHover: '#00000040',
	refGoldHover: '#897425'
}

const AddFlowerSection = styled.section`
	padding-top: 150px;
	min-height: 700px;
	display: flex;

	flex-direction: column;
	align-items: flex-start;

	&.active {
		&:after {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #000000ab;
			z-index: 3;
			top: 0;
			left: 0;
			opacity: 1;
		}
	}

	&:after {
		transition: opacity 0.5s;
		content: '';
		opacity: 0;
	}

`;

const AddFlowerButton = styled.button`
	min-height: 250px;
	min-width: 250px;

	border: 5px dashed ${colors.colorRefGold};
	background: ${colors.transparentRefGold};
	position: relative;

	transition: background-color .2s;
	&:hover {
		background-color: ${colors.transparentRefGoldHover};

		&:after,
		&:before {
			background-color: ${colors.refGoldHover};
		}
	}

	&:after,
	&:before {
		content: '';

		position: absolute;
		display: block;
		width: 50px;
		height: 5px;
		transform: translate(-50%, -50%);
		background-color: ${colors.colorRefGold};
		transition: background-color .2s;
	}

	&:before {
		top: 50%;
		left: 50%;
	}

	&:after {
		transform: rotate(90deg) translate(-50%, -50%);
		left: 39.5%;
    	top: 59%;
	}

`;

const AddFlowerModal = styled.div`
	position: absolute;
	width: 80vw;
	height: 50vw;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
	display: flex;
	margin: 0 auto;
	font-family: 'Open Sans', sans-serif;
	align-items: stretch;
	flex-direction: column;
	padding: 70px 60px 70px 60px;
	border-radius: 33px;
	transition: transform 8s, opacity 0.5s;
	overflow: hidden;
	opacity: 0;
	z-index: -1;
	
	&.active {
		z-index: 4;
		display: block;
		opacity: 1;
		line-height: 1;

	}

	@keyframes TopBottom {
		from {
			height: 200px;
			border-radius: 0 0 90% 50%;
		}
		to {
			height: 100%;
			border-radius: 0 0 10% 10%;
		}
	}

	@keyframes BottomTop {
		from {
			height: 100%;
			border-radius: 0 0 10% 10%;
		}
		
		to {
			height: 230px;
			border-radius: 0 0 90% 50%;
		}
	}

	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 130%;
		background-image: linear-gradient(to right bottom, #f7971e, #fba516, #feb40d, #ffc304, #ffd200);
		height: 230px;
		top: 0;
		left: -40px;
		z-index: 3;
		border-radius: 0 0 90% 50%;
		transition: height 2s, border-radius 4s;
		animation: BottomTop 2s infinite alternate;
		animation-iteration-count: 1;
	}

	h2 {
		position: relative;
		color: white;
		font-size: 30px;
		z-index: 4;

		text-shadow: 0 0 0 black;
	}
`;

const CloseFlowerModal = styled.button`
	width: 50px;
	height: 40px;
	position: absolute;
    top: 20px;
    right: 20px;
	z-index: 5;
	background: transparent;
	border: none;
	display: flex;
	align-items: space-between;
	flex-direction: column;
	justify-content: center;

	span {
		width: 100%;
		height: 3px;
		background-color: white;
		display: block;

		&:first-of-type {
			transform: rotate(45deg);
		}

		&:last-of-type {
			transform: 	rotate(-45deg) translate(2px, -1px);
		}
	}
`;

export { AddFlowerSection, AddFlowerButton, AddFlowerModal, CloseFlowerModal };
