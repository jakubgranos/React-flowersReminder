import '../assets/scss/app.scss';
import AuthBackgroundSelector from './style';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
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
			console.log(user);
			setValue(user.email)
		}
	})
	return (
		<Router>
			<main className="app-main" >
				<AuthBackgroundSelector src={authBackground} alt="" />
				<AuthContext.Provider value={{ value, setValue }}>
					{value && <Route exact path="/" component={Home} />}
					<Route exact path="/login" component={Login} ></Route>
				</AuthContext.Provider>
				<Route exact path="/register" component={Register} />
			</main>
		</Router>
	)
}

export default App;
