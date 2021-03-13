import styled from "styled-components";

const AuthSignupFormWrapper = styled.form`
	width: 100%;
	height: 100%;
`;

const AuthSignupFormLabel = styled.label`
	color: black;
	font-size: 30px;
	line-height: 40px;
	margin: 0 0 15px 0;
	font-weight: 900;
	display: block;
`;

const AuthSignupFormInput = styled.input`
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

const AuthSignupFormButton = styled.button`
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


export { AuthSignupFormWrapper, AuthSignupFormLabel, AuthSignupFormInput, AuthSignupFormButton };
