import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../AuthContext';
import { useHistory } from "react-router-dom";
import fire from '../../firebase';
import SidebarMenu from '../Sidebars/SidebarMenu/SiebarMenu';
const Home = () => {
	const { value, setValue } = useContext(AuthContext);
	const history = useHistory();
	const logout = (e) => {
		e.preventDefault();
		fire.auth().signOut().then(() => {
			history.push('/')
		})
	}
	return (
		<section className="homepage">
			<SidebarMenu />
			{value}

			<button onClick={(e) => logout(e)}>Wygoluj się</button>

		</section>
	)
}

export default Home;
