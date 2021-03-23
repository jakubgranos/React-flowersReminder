import '../assets/scss/app.scss';
import AuthBackgroundSelector from './style';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import Login from "./pages/Auth/Login/Login";
import Register from './pages/Auth/Register/Register';
import AuthContext from './AuthContext';
import fire from './firebase';
import authBackground from '../assets/images/auth-background.jpg'

function App() {
	const [value, setValue] = useState(null)
	fire.auth().onAuthStateChanged(user => {
		if (user) {
			setValue(user.email)
		}
	})

	return (
		<Router>
			<main className="app-main" >
				<AuthBackgroundSelector src={authBackground} alt="" />
				<AuthContext.Provider value={{ value, setValue }}>
					<Route exact path="/" component={Login} ></Route>
					{value ? (
						<Route exact path="/homepage" component={Home} ></Route>
					) : (
						<Redirect to="/" />
					)}
				</AuthContext.Provider>
				<Route exact path="/register" component={Register} />
			</main>
		</Router>
	)
}

export default App;
