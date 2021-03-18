import React, { useState } from 'react';
import fire from '../../../firebase';
import {
	AuthSection,
	AuthHeadingSection,
	AuthFormWrapper,
	AuthFormLabel,
	AuthFormInput,
	AuthFormButton
} from '../Auth-styles/style';

const Login = () => {
	const [user, setUser] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const submitListener = (e) => {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(userEmail, userPassword).then(res => {
			if (res.user) {
				setUser(true);
			} else {
				setUser(false)
			}
		}).catch(e => {
			console.log(e.error);
		});
	}

	return (
		<AuthSection>
			<AuthHeadingSection>Zaloguj się</AuthHeadingSection>
			<AuthFormWrapper>
				<AuthFormLabel>Email</AuthFormLabel>
				<AuthFormInput type="email" placeholder="Email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />

				<AuthFormLabel>Hasło</AuthFormLabel>
				<AuthFormInput type="password" placeholder="Hasło.." value={userPassword} onChange={e => setUserPassword(e.target.value)} />
				{user && <div>zalogowano</div>}

				<AuthFormButton onClick={(e) => submitListener(e)}>Zaloguj się</AuthFormButton>
			</AuthFormWrapper>
		</AuthSection>
	)
}

export default Login;
