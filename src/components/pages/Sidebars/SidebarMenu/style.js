import styled from "styled-components";

const SidebarMenuSection = styled.aside`
	position: absolute;
	right: 0;
	top: 0;
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition width 1s, height 1s;

	&:before {
		content: '';
		display: block;
		background-image: linear-gradient(to right bottom, #f7971e, #fba516, #feb40d, #ffc304, #ffd200);
		width: 100%;
		height: 100%;
		z-index: 3;
		border-radius: 0 0 0% 159%;
	}

	&.active {
		width: 500px;
		height: 500px;
	}

`;

export default SidebarMenuSection
