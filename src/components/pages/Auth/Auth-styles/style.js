import styled from "styled-components";

const AuthSection = styled.section`
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

const AuthHeadingSection = styled.h1`
	color: black;
	font-size: 40px;
	line-height: 45px;
	margin: 0 0 45px 0;
	font-weight: 900;
`;
const AuthFormWrapper = styled.form`
	width: 100%;
	height: 100%;
`;

const AuthFormLabel = styled.label`
	color: black;
	font-size: 30px;
	line-height: 40px;
	margin: 0 0 15px 0;
	font-weight: 900;
	display: block;
`;

const AuthFormInput = styled.input`
	width: 100%;
	min-height: 65px;
	border: 1px solid lightgray;
	margin-bottom: 30px;
	background: white;
	padding: 10px;
	font-size: 25px;
	line-height: 25px;

	&:placecholder {
		color: lightgray;
	}
`;

const AuthFormButton = styled.button`
	width: 100%;
	padding: 20px 15px;
	background: #1096bf;
	transition: background .2s;
	color: white;
	border: 0;
	font-size: 25px;
	line-height: 25px;
	cursor: pointer;
	margin-top: 40px;

	&:hover {
		background: #0F81A3
	}
`;



export { AuthSection, AuthHeadingSection, AuthFormWrapper, AuthFormLabel, AuthFormInput, AuthFormButton };
