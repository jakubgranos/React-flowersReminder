import React, { useState } from 'react';
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
} from '../Auth-styles/style';
import { ReactSVG } from 'react-svg'
import IconEmail from '../../../../assets/icons/icon-email.svg'
import IconUser from '../../../../assets/icons/icon-user.svg'
import IconPassword from '../../../../assets/icons/icon-password.svg'

const Register = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');
	const [feedback, setFeedback] = useState('');

	const authInputs = { email, password }
	const submitListener = (e) => {
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(authInputs.email, authInputs.password).then(() => {
			setNewClass('active');
			setTimeout(() => {
				history.push('/')
			}, 2100)
		}).catch(err => {
			setFeedback(err.message)
		})

	}
	const [newClass, setNewClass] = useState('');
	const changeToLogin = () => {
		setNewClass('active');
		setTimeout(() => {
			history.push('/')
		}, 2100)
	}

	return (
		<AuthSection className={newClass}>
			<AuthHeadingSection className={newClass}>
				<AuthHeading>Rejestracja</AuthHeading>
				<AuthSubHeading>Dołącz do nas - Już nigdy nie <br></br> zapomnisz o kwiatkach!</AuthSubHeading>
			</AuthHeadingSection>
			<AuthFormWrapper>
				<AuthFormLabel>
					<AuthFormInput type="email" placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)} required />
					<ReactSVG src={IconEmail} />
				</AuthFormLabel>
				<AuthFormLabel>
					<AuthFormInput type="text" placeholder="Imie*" required />
					<ReactSVG src={IconUser} />
				</AuthFormLabel>
				<AuthFormLabel>
					<AuthFormInput type="password" placeholder="Hasło*" value={password} onChange={e => setPassword(e.target.value)} required />
					<ReactSVG src={IconPassword} />
				</AuthFormLabel>

				<AuthFormButton onClick={(e) => submitListener(e)}>Stwórz konto</AuthFormButton>
				{feedback !== '' && <AuthFormFeedback> {feedback} </AuthFormFeedback>}
				<AuthFormLinkTo>Masz już konto? <a onClick={changeToLogin}>Zaloguj się</a> </AuthFormLinkTo>
			</AuthFormWrapper>
		</AuthSection>
	)
}

export default Register;
