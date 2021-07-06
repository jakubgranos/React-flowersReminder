import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom'
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
	AuthFormLinkTo,
	AuthFormFeedback
} from '../AuthStyles/style';
import { ReactSVG } from 'react-svg'
import IconEmail from '../../../../assets/icons/icon-email.svg'
import IconUser from '../../../../assets/icons/icon-user.svg'
import IconPassword from '../../../../assets/icons/icon-password.svg'

import AuthChangeComponent from '../../../PagesContexts/AuthChangeComponent';
const Register = () => {
	const db = fire.firestore();
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const { changeAuthComponent, setChangeAuthComponent } = useContext(AuthChangeComponent);
	const [password, setPassword] = useState('');
	const [feedback, setFeedback] = useState('');
	const authInputs = { email, password }
	const submitListener = (e) => {
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(authInputs.email, authInputs.password).then(() => {
			setNewClass('active');
			setTimeout(() => {
				setChangeAuthComponent(true)
				db.collection('users').add({
					username: username,
					email: email
				})
				setChangeAuthComponent(false)
			}, 2100)
		}).catch(err => {
			setNewClass('active');
			setTimeout(() => {
				setFeedback(err.message)
				setNewClass();
			}, 2100)
		})
	}

	const [newClass, setNewClass] = useState('');
	const changeToLogin = (e) => {
		e.preventDefault();
		setNewClass('active');
		setTimeout(() => {
			setChangeAuthComponent(false)
		}, 2100)
	}

	return (
		<AuthSection className={newClass}>
			<AuthHeadingSection className={newClass}>
				<AuthHeading>Rejestracja</AuthHeading>
				<AuthSubHeading>Dołącz do nas - Już nigdy nie <br></br> zapomnisz o kwiatkach!</AuthSubHeading>
			</AuthHeadingSection>
			<AuthFormWrapper>
				{feedback !== '' && <AuthFormFeedback> {feedback} </AuthFormFeedback>}
				<AuthFormLabel>
					<AuthFormInput type="email" placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)} required />
					<ReactSVG src={IconEmail} />
				</AuthFormLabel>
				<AuthFormLabel>
					<AuthFormInput type="text" placeholder="Imie*" value={username} onChange={e => setUsername(e.target.value)} required />
					<ReactSVG src={IconUser} />
				</AuthFormLabel>
				<AuthFormLabel>
					<AuthFormInput type="password" placeholder="Hasło*" value={password} onChange={e => setPassword(e.target.value)} required />
					<ReactSVG src={IconPassword} />
				</AuthFormLabel>

				<AuthFormButton onClick={(e) => submitListener(e)}>Stwórz konto</AuthFormButton>
				<AuthFormLinkTo>Masz już konto? <button onClick={changeToLogin}>Zaloguj się</button> </AuthFormLinkTo>
			</AuthFormWrapper>
		</AuthSection>
	)
}

export default Register;
