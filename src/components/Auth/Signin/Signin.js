import React from 'react';
import { AuthSigninSection, AuthSigninHeading } from './style';
import AuthSignupForm from '../Form/SigninForm';

const Signup = () => {
	return (
		<AuthSigninSection>
			<AuthSigninHeading>Zaloguj się</AuthSigninHeading>
			<AuthSignupForm />
		</AuthSigninSection>
	)
}

export default Signup;
