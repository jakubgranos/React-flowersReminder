import React from 'react';
import { AuthSignupSection, AuthSignupHeading } from './style';
import AuthSignupForm from './Form/Form';

const SignupForm = () => {
	return (
		<AuthSignupSection>
			<AuthSignupHeading>Sign Up</AuthSignupHeading>
			<AuthSignupForm />
		</AuthSignupSection>
	)
}

export default SignupForm;
