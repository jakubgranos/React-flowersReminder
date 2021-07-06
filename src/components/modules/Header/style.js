import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
	position: fixed;
	bottom:0;
	left: 0;
	width: 100%;
	height: 70px;
	transition: height 1s;
	z-index: 3;

    background: #a38555;
    box-shadow: 0 12px 40px #12190d;

	&.active {
		height: 93%;
	}

`;

export const HeaderNav = styled.nav`
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

	ul:not(:first-of-type) {
		li, button  {
			font-size: 30px;
			line-height: 1;
		}
	}
`;

export const HeaderAddbutton = styled.button`
	position: absolute;
    z-index: 3;
    transform: translate(-50%, -50%);
	border: none;
    left: 50%;
    top: -1px;
    padding: 10px;
    background: #7cb65b;
    border-radius: 50px;
    width: 90px;
    height: 90px;
	font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: white;
	transition: transform 0.5s;

	&.active {
		transform: translate(-50%, -50%) rotate(45deg);
	}
`;
