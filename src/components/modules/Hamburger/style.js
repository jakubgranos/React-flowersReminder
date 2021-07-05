import styled from 'styled-components';

const HamburgerWrapper = styled.button`
    width: 50px;
    height: 36px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	cursor: pointer;
	position: absolute;
    z-index: 3;
    top: 80px;
    right: 40px;
    transform: translate(-50%, -50%);
	background: transparent;
	border: none;

	&.active {
		span:nth-child(2) {
			opacity: 0;
			transform: translate3d(-50px,0,0)
		}

		span:nth-child(1) {
			transform: translate3d(0,16px,0) rotate(40deg);
		}
		
		span:nth-child(3) {
			transform translate3d(0,-16px,0) rotate(-40deg);
		}
	}
`;

const HamburgerLine = styled.span`
	width: 100%;
	height: 3px;
	background: white;
	transition: transform 0.5s, opacity 0.2s;
`;

export { HamburgerWrapper, HamburgerLine }
