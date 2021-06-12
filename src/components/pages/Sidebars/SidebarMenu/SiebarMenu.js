import React, { useState } from 'react'
import SidebarMenuSection from './style';
import Hamburger from '../hamburger/hamburger';
const SidebarMenu = () => {
	const [sideBarActive, setSidebarActive] = useState('');
	return (
		<SidebarMenuSection className={sideBarActive ? "active" : null}>
			<Hamburger sidebarClass={{ setSidebarActive, sideBarActive }} />
		</SidebarMenuSection>
	)
}

export default SidebarMenu;
