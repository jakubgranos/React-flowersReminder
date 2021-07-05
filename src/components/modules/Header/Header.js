import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import { HeaderWrapper, HeaderNav } from './style';
import Hamburger from '../Hamburger/Hamburger';
import fire from '../../firebase';

const Header = () => {
	const history = useHistory();
	const [sideBarActive, setSidebarActive] = useState('');
	const logout = (e) => {
		e.preventDefault();
		fire.auth().signOut().then(() => {
			history.push('/')
		})
	}

	return (
		<HeaderWrapper className={sideBarActive ? "active" : null}>
			<Hamburger sidebarClass={{ setSidebarActive, sideBarActive }} />
			<HeaderNav className={sideBarActive ? "active" : null}>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/">Profile</Link></li>
					<li><Link to="/">Settings</Link></li>
				</ul>

				<ul>
					<li><Link to="/">Oceń Aplikacje</Link></li>
					<li><Link to="/">Zgłoś Problem</Link></li>
					<button onClick={(e) => logout(e)}>Wygoluj się</button>
				</ul>

			</HeaderNav>
		</HeaderWrapper>
	)
}

export default Header;
