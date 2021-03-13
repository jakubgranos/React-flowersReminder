import React, { useContext } from 'react';
import { Router, Redirect, Route } from 'react-router-dom'
import { AuthContext } from './Auth/AuthContext/AuthContext';

const PrivateRoute = ({ component: RouteComponents, ...rest }) => {
	const { currentUser } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={routeProps =>
				!!currentUser ? (
					<RouteComponents {...routeProps} />
				) : (
					<Redirect to={"/login"} />
				)
			}
		/>
	)
}

export default PrivateRoute;
