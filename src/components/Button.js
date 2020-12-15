import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';
import refresh from '../assets/icons/refresh.png';
import select from '../assets/icons/select.png';
import sort from '../assets/icons/sort.png';

const icons = {
	refresh: refresh,
	select: select,
	sort: sort
};

function Button({ text, icon, eventHandler }) {
	return (
		<button onClick={eventHandler} className={'button' + (icon === 'refresh' ? ' button--refresh' : '')}>
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
