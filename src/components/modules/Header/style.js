import styled from "styled-components";

const HeaderWrapper = styled.header`
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	height: 230px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition width 1s, height 1s;
	z-index: 3;

	&:before {
		content: '';
		display: block;
		position: fixed;
		width: 130%;
		background-image: linear-gradient(to right bottom, #f7971e, #fba516, #feb40d, #ffc304, #ffd200);
		height: 230px;
		top: 0;
		left: -30%;
		z-index: 3;
		border-radius: 0 0 62% 89%;
		transition: height 1s, border-radius 2s;
	}

	&.active {
		height: 100%;

		&:before {
			height: 100%;
			border-radius: 0 0 0 0;
			}
		}
	}

`;

const HeaderNav = styled.nav`
	opacity: 0;
	position: relative;
	z-index: 3;
	transition: opacity 1s, transform 1s;

	transform: translateY(-100%);
	display: grid;
	gap: 130px 0;
	
	&.active {
		transform: translateY(0);
		opacity: 1;
	}

	ul {
		list-style-type: none;
		padding: 0;

		li {
			a {
				color: white;
				text-decoration: none;
			}

			&:not(:last-of-type) {
				margin-bottom: 20px;
			}
		}
		
		button {
			margin: 40px 0 0;
			background: transparent;
			border: none;
			padding: 0;
			color: #4b4b4b;
		}
	}

	ul:not(:last-child) {
		li {
			font-size: 50px;
			line-height: 1;
		}
	}

	ul:not(:first-child) {
		li, button  {
			font-size: 30px;
			line-height: 1;
			
		}
	}
`;

export { HeaderWrapper, HeaderNav }
