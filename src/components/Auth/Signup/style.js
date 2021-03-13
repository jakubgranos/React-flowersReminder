import styled from "styled-components";

const AuthSignupSection = styled.section`
	background: white;
	width: 600px;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 45px 50px;
	margin: 0 auto;
	font-family: 'Open Sans', sans-serif;
`;

const AuthSignupHeading = styled.h1`
	color: black;
	font-size: 40px;
	line-height: 45px;
	margin: 0 0 45px 0;
	font-weight: 900;
`;

export { AuthSignupSection, AuthSignupHeading };
