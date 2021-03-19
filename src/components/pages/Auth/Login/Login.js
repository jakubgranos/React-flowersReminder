import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import fire from '../../../firebase';
import {
	AuthSection,
	AuthHeadingSection,
	AuthFormWrapper,
	AuthFormLabel,
	AuthFormInput,
	AuthFormButton
} from '../Auth-styles/style';
import AuthContext from '../../../AuthContext';

const Login = () => {
	const history = useHistory()
	const [userTest, setUserTest] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const { value, setValue } = useContext(AuthContext);
	const submitListener = (e) => {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(userEmail, userPassword).then(res => {
			if (res.user) {
				setUserTest(true);
				history.push('/')
			} else {
				setUserTest(false)
			}
		}).catch(e => {
			console.log(e.error);
		});

		fire.auth().onAuthStateChanged(user => {
			if (user) {
				setValue(user.email)
			}
		})
	}

	const logout = (e) => {
		e.preventDefault();
		fire.auth().signOut().then(() => {
			console.log('wylogowano');
		})
	}
	return (
		<AuthSection>
			<AuthHeadingSection>Zaloguj się</AuthHeadingSection>
			Zalogowany jako {value}
			<AuthFormWrapper>
				<AuthFormLabel>Email</AuthFormLabel>
				<AuthFormInput type="email" placeholder="Email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />

				<AuthFormLabel>Hasło</AuthFormLabel>
				<AuthFormInput type="password" placeholder="Hasło.." value={userPassword} onChange={e => setUserPassword(e.target.value)} />
				{userTest && <div>zalogowano</div>}

				<AuthFormButton onClick={(e) => submitListener(e)}>Zaloguj się</AuthFormButton>
				<AuthFormButton onClick={(e) => logout(e)}>Wygoluj się</AuthFormButton>
			</AuthFormWrapper>
		</AuthSection>
	)
}

export default Login;
