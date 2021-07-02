
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from "../Login/Login";
import Register from '../Register/Register';
import AuthChangeComponent from '../../../PagesContexts/AuthChangeComponent';
const Auth = () => {
	const [changeAuthComponent, setChangeAuthComponent] = useState(null);

	return (
		<AuthChangeComponent.Provider value={{ changeAuthComponent, setChangeAuthComponent }}>
			{changeAuthComponent ? (<Register></Register>) : (<Login></Login>)}
		</AuthChangeComponent.Provider>
	)
}

export default Auth;
