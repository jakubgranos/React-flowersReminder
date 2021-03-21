import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import fire from '../../../firebase';
import {
	AuthSection,
	AuthHeadingSection,
	AuthFormWrapper,
	AuthFormLabel,
	AuthFormInput,
	AuthFormButton,
	AuthHeading,
	AuthSubHeading,
	AuthFormLinkTo
} from '../Auth-styles/style';
import AuthContext from '../../../AuthContext';
import { ReactSVG } from 'react-svg'
import IconEmail from '../../../../assets/icons/icon-email.svg'
import IconUser from '../../../../assets/icons/icon-user.svg'
import IconPassword from '../../../../assets/icons/icon-password.svg'
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

	const [newClass, setNewClass] = useState('');
	const changeToLogin = () => {
		setNewClass('test');
		setTimeout(() => {
			history.push('/register')
		}, 2100)
	}

	return (
		<AuthSection className={newClass}>
			<AuthHeadingSection>
				<AuthHeading>Logowanie</AuthHeading>
				<AuthSubHeading>Witaj z powrotem <br></br> Życzymy miłego dnia! </AuthSubHeading>
			</AuthHeadingSection>
			<AuthFormWrapper>
				<AuthFormLabel>
					<AuthFormInput type="email" placeholder="Email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
					<ReactSVG src={IconEmail} />
				</AuthFormLabel>
				<AuthFormLabel>
					<AuthFormInput type="password" placeholder="Hasło.." value={userPassword} onChange={e => setUserPassword(e.target.value)} />
					<ReactSVG src={IconPassword} />
				</AuthFormLabel>
				<AuthFormButton onClick={(e) => submitListener(e)}>Zaloguj się</AuthFormButton>
				<AuthFormLinkTo>Nie masz jeszcze konta? <a onClick={changeToLogin}>Zarejestruj się</a> </AuthFormLinkTo>
			</AuthFormWrapper>
		</AuthSection>
	)
}

export default Login;
