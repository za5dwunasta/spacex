import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';
import refresh from '../assets/icons/refresh.png';
import select from '../assets/icons/select.png';
import sort from '../assets/icons/sort.png';

import { useLaunchesValue } from '../context/launches-context';

const icons = {
	refresh: refresh,
	select: select,
	sort: sort
};

function Button({ text, icon, eventHandler }) {
	const { loading } = useLaunchesValue();

	return (
		<button
			onClick={eventHandler}
			disabled={loading}
			className={'button' + (icon === 'refresh' ? ' button--refresh' : '')}
		>
			{text}
			<img className="button__icon" src={icons[icon]} alt="" />
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	eventHandler: PropTypes.func.isRequired
};

export default Button;
