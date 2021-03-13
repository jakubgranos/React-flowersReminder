import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import {
	AuthSignupFormWrapper,
	AuthSignupFormLabel,
	AuthSignupFormInput,
	AuthSignupFormButton
} from './style';

const AuthSignupForm = () => {
	const emailRef = useRef();
	const passwordRef = useRef()
	const passwordConfRef = useRef()

	return (
		<AuthSignupFormWrapper>
			<AuthSignupFormLabel>Email</AuthSignupFormLabel>
			<AuthSignupFormInput type="email" placeholder="Email" ref={emailRef} />

			<AuthSignupFormLabel>Password</AuthSignupFormLabel>
			<AuthSignupFormInput type="password" placeholder="Password" ref={passwordRef} />

			<AuthSignupFormLabel>Password Confirmation</AuthSignupFormLabel>
			<AuthSignupFormInput type="password" placeholder="Password repeat" ref={passwordConfRef} />
			<Link to="/login">
				<AuthSignupFormButton>Sign Up</AuthSignupFormButton>
			</Link>
		</AuthSignupFormWrapper>
	)
}

export default AuthSignupForm;
