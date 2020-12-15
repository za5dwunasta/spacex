import React from 'react';
import spaceXLogo from '../assets/img/spacex-logo.png';
import './Header.scss';
import Button from '../components/Button';

export default function Header() {
	return (
		<div className="header">
			<div className="header__logo">
				<img className="hearder__logo" src={spaceXLogo} alt="Space X logo" />
				<div className="header__brand-name">LAUNCHES</div>
			</div>

			<Button text="Reload Data" icon="refresh" />
		</div>
	);
}
