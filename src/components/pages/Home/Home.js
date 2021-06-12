import Homepage from './style';
import React, { useContext } from 'react';
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
		<Homepage>
			<SidebarMenu />
			<div className="container">
				<button onClick={(e) => logout(e)}>Wygoluj się</button>
			</div>
		</Homepage>
	)
}

export default Home;
