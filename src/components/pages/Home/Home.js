import Homepage from './style';
import React from 'react';
import Header from '../../modules/Header/Header';
import AddFlower from '../../modules/AddFlower/AddFlower';

const Home = () => {
	return (
		<Homepage>
			<Header />
			<div className="container">
				<AddFlower />
			</div>
		</Homepage>
	)
}

export default Home;
