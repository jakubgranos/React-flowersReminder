import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import fire from '../../../firebase';
import {
	AuthSection,
	AuthHeadingSection,
	AuthFormWrapper,
	AuthFormLabel,
	AuthFormInput,
	AuthFormButton
} from '../Auth-styles/style';

const Register = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');
	const [feedback, setFeedback] = useState('');

	const authInputs = { email, password }
	const submitListener = (e) => {
		e.preventDefault();
		if (email && password) {
			fire.auth().createUserWithEmailAndPassword(authInputs.email, authInputs.password).then(() => {
				history.push('/login')
			}).catch(err => {
				setFeedback(err.message)
			})
		} else {
			setFeedback('Coś poszło nie tak ... Spróbuj jeszcze raz')
		}
	}

	return (
		<AuthSection>
			<AuthHeadingSection>Zarejestruj się</AuthHeadingSection>
			<AuthFormWrapper>
				<AuthFormLabel>Email</AuthFormLabel>
				<AuthFormInput type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

				<AuthFormLabel>Hasło</AuthFormLabel>
				<AuthFormInput type="password" placeholder="Hasło.." value={password} onChange={e => setPassword(e.target.value)} />

				<AuthFormButton onClick={(e) => submitListener(e)}>Zarejestruj się</AuthFormButton>
				{feedback}
			</AuthFormWrapper>
		</AuthSection>
	)
}

export default Register;
