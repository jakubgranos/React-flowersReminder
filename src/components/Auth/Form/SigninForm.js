import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase';
import {
	AuthSignupFormWrapper,
	AuthSignupFormLabel,
	AuthSignupFormInput,
	AuthSignupFormButton
} from './style';

const AuthSignupForm = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');
	const [feedback, setFeedback] = useState('');

	const authInputs = { email, password }
	const submitListener = (e) => {
		e.preventDefault();
	}

	return (
		<AuthSignupFormWrapper>
			<AuthSignupFormLabel>Email</AuthSignupFormLabel>
			<AuthSignupFormInput type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

			<AuthSignupFormLabel>Hasło</AuthSignupFormLabel>
			<AuthSignupFormInput type="password" placeholder="Hasło.." value={password} onChange={e => setPassword(e.target.value)} />

			<AuthSignupFormButton onClick={(e) => submitListener(e)}>Zaloguj się</AuthSignupFormButton>
			{feedback}
		</AuthSignupFormWrapper>
	)
}

export default AuthSignupForm;
