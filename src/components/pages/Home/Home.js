import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../AuthContext';
import { useHistory } from "react-router-dom";
import fire from '../../firebase';
const Home = () => {
	const { value, setValue } = useContext(AuthContext);
	const logout = (e) => {
		e.preventDefault();
		fire.auth().signOut().then(() => {
			console.log('wylogowano');
		})
	}
	return (
		<div>
			{value}

			<button onClick={(e) => logout(e)}>Wygoluj się</button>

		</div>
	)
}

export default Home;
