
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from "../Login/Login";
import Register from '../Register/Register';
import AuthChangeComponent from '../../AuthChangeComponent';
const Auth = () => {
	const [changeAuthComponent, setChangeAuthComponent] = useState(null);
	return (
		<section>
			<AuthChangeComponent.Provider value={{ changeAuthComponent, setChangeAuthComponent }}>
				{changeAuthComponent ? (<Login></Login>) : (<Register></Register>)}
			</AuthChangeComponent.Provider>
		</section>
	)
}

export default Auth;
