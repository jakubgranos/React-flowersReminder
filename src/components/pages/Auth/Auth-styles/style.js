import styled from "styled-components";

const AuthSection = styled.section`
	background: white;
	width: auto;
	height: auto;
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	font-family: 'Open Sans', sans-serif;
	align-items: stretch;
	flex-direction: column;
	position: relative;
	max-width: 480px;
	padding: 80px 60px 70px 60px;
	overflow: hidden;
	border-radius: 33px;
	box-shadow: 15px 9px 18px #cc7a0454;

	@keyframes TopBottom {
		from {
			height: 340px;
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
			height: 340px;
			border-radius: 0 0 90% 50%;
		}
	}

	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 130%;
		background-image: linear-gradient(to right bottom, #f7971e, #fba516, #feb40d, #ffc304, #ffd200);
		height: 340px;
		top: 0;
		left: -40px;
		z-index: 3;
		border-radius: 0 0 90% 50%;
		transition: height 2s, border-radius 4s;
		animation: BottomTop 2s;
	}
	
	&.test {
		&:before {
			animation: TopBottom 2s;
		}
	}
`;

const AuthHeadingSection = styled.div`
	margin: 0 0 130px 0;
	position: relative;
	z-index: 4;
	@keyframes changeOpacity {
		from {
			opacity: 0
		}
		to {
			opacity: 1;
		}
	}

	animation: changeOpacity 2s;

	&.test {
		animation: changeOpacity 2s;
	}
`;
const AuthHeading = styled.h1`
	color: white;
	font-size: 40px;
	line-height: 45px;
	font-weight: 900;
`;

const AuthSubHeading = styled.p`
	color: white;
	position: relative;
	z-index: 1;
	font-size: 20px;
	line-height: 35px;
	font-weight: 400;

	&:last-child {
		margin-bottom: 0;
	}

`;
const AuthFormWrapper = styled.form`
	width: 100%;
	height: 100%;
`;

const AuthFormLabel = styled.label`
	position: relative;
	display: block;

	svg {
		position: absolute;
		top: 21px;
		right: 30px;
		width: 25px;
		height: 25px;
		fill: lightgray;
		transition fill .2s;
	}

	input:focus + div svg {
		fill: #f99c1b;
	}

`;

const AuthFormInput = styled.input`
	width: 100%;
	min-height: 65px;
	border: 1px solid lightgray;
	margin-bottom: 0;
	background: white;
	padding: 20px 63px 20px 30px;
	font-size: 22px;
	line-height: 25px;
	outline: none;
	border-radius: 50px;
	margin-bottom: 15px;
	color: #f99c1b;
	box-shadow: 0px 4px 5px #d3d3d38a;
	transition border-color .2s;

	&:focus {
		border-color: #f99c1b;

		&::-webkit-input-placeholder {
			color: #f99c1b;
		}
	}

	&::-webkit-input-placeholder {
		transition: color .2s;
		color: lightgray;
	}
`;

const AuthFormButton = styled.button`
	width: 100%;
	padding: 20px 15px;
	background-image: linear-gradient(to right bottom, #f7971e, #fba516, #feb40d, #ffc304, #ffd200);
	background-position: 0 -57px;
    background-size: 100% 200px;
    background-repeat: no-repeat;
	border-radius: 50px;

	transition: background .2s;
	color: white;
	border: 0;
	font-size: 23px;
	line-height: 30px;
	cursor: pointer;
	margin-top: 40px;

	&:hover {
		transition: background-position .2s;
		background-position: 0 0px;
	}
`;

const AuthFormLinkTo = styled.p`
	margin: 0;
	margin-top: 10px;
	font-size: 16px;
	line-height: 22px;
	text-align: right;
	padding: 0 15px;

	a {
		text-decoration: none;
		font-size: 18px;
		color: #f99c1b;
		cursor: pointer;
	}
`;

export { AuthSection, AuthHeadingSection, AuthHeading, AuthSubHeading, AuthFormWrapper, AuthFormLabel, AuthFormInput, AuthFormButton, AuthFormLinkTo };
