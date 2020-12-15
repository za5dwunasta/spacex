import React from 'react';
import launchHome from '../assets/img/launch-home.png';

import './Home.scss';
import Launches from '../components/Launches';

export default function Home() {
	return (
		<div className="home">
			<div className="home__image-container">
				<img src={launchHome} alt="" className="home__landing-image" />
			</div>

			<Launches />
		</div>
	);
}
