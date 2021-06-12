import React, { useState } from 'react';
import { HamburgerWrapper, HamburgerLine } from './style';

const Hamburger = (props) => {
	const [active, setActive] = useState('');
	const hamburgerFunc = () => {
		setActive(!active);

		if (props.sidebarClass.sideBarActive) {
			props.sidebarClass.setSidebarActive(false);
		} else {
			props.sidebarClass.setSidebarActive(true);
		}
	}
	return (
		<HamburgerWrapper onClick={hamburgerFunc} className={active ? 'active' : null}>
			<HamburgerLine />
			<HamburgerLine />
			<HamburgerLine />
		</HamburgerWrapper>
	);
}

export default Hamburger;
