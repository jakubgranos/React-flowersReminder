import React, { useState } from 'react'
import { HeaderWrapper, HeaderNav, HeaderAddbutton } from './style';
import Addflower from '../AddFlower/AddFlower'
const Header = () => {
	const [sideBarActive, setSidebarActive] = useState('');

	const switchHeaderActive = () => {
		setSidebarActive(!sideBarActive);
		sideBarActive ? setSidebarActive(false) : setSidebarActive(true);
	}

	return (
		<HeaderWrapper className={sideBarActive ? "active" : null}>
			<HeaderAddbutton onClick={switchHeaderActive} className={sideBarActive ? "active" : null}>+</HeaderAddbutton>
			<Addflower testprop={sideBarActive} className={sideBarActive ? "active" : null}></Addflower>
		</HeaderWrapper>
	)
}

export default Header;
