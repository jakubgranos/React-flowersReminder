import '../assets/scss/app.scss';
import AuthBackgroundSelector from './style';
import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import AuthContext from './AuthContext';
import fire from './firebase';
import authBackground from '../assets/images/auth-background.jpg'
import Auth from '../components/pages/Auth/Auth/Auth';
function App() {
	const [globalUserEmail, setGlobalUserEmail] = useState(null)
	fire.auth().onAuthStateChanged(user => {
		if (user) {
			setGlobalUserEmail(user.email)
		}
	})

	return (
		<Router>
			<main className="app-main">
				<AuthBackgroundSelector src={authBackground} alt="" />
				<AuthContext.Provider value={{ globalUserEmail, setGlobalUserEmail }}>
					{globalUserEmail && <Route exact path="/homepage" component={Home} ></Route>}
					{/* {globalUserEmail ? (<Redirect to="/homepage" />) : (<Redirect to="/" />)} */}
					<Route exact path="/" component={Auth} ></Route>
				</AuthContext.Provider>
			</main>
		</Router>
	)
}

export default App;
