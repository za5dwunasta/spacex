/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React from 'react';
import spaceXLogo from '../assets/img/spacex-logo.png';
import './Header.scss';

import Button from '../components/Button';
import { useLaunchesValue } from '../context/launches-context';

export default function Header() {
	const { setRefresh, setYear, setOrder } = useLaunchesValue();
	function reloadData() {
		setYear('');
		setOrder('desc');
		setRefresh(true);
	}

	return (
		<div className="header">
			<div className="header__logo">
				<img className="hearder__logo" src={spaceXLogo} alt="Space X logo" />
				<div className="header__brand-name">LAUNCHES</div>
			</div>

			<Button text="Reload Data" icon="refresh" eventHandler={reloadData} />
		</div>
	);
}
