import '../assets/scss/app.scss';
import React from 'react';
// import AuthSignup from './Auth/Signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import SignupPage from '../components/pages/Signup/Signup';
function App() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignupPage} />
			</div>
		</Router>
	)
}

export default App;
