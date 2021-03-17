import React from 'react';
import { AuthSignupSection, AuthSignupHeading } from './style';
import AuthSignupForm from '../Form/SignupForm';

const Signup = () => {
	return (
		<AuthSignupSection>
			<AuthSignupHeading>Zarejestruj się</AuthSignupHeading>
			<AuthSignupForm />
		</AuthSignupSection>
	)
}

export default Signup;
