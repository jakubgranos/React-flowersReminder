import '../assets/scss/app.scss';
import React from 'react';
// import AuthSignup from './Auth/Signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import Signup from '../components/pages/Signup/Signup';
import { AuthProvider } from './Auth/AuthContext/AuthContext';
import PrivateRoute from './PrivateRoute';
function App() {
	return (
		<AuthProvider>
			<Router>
				<div>
					<PrivateRoute exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
				</div>
			</Router>
		</AuthProvider>
	)
}

export default App;
