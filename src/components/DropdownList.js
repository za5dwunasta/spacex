import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import './DropdownList.scss';
import { CSSTransition } from 'react-transition-group';

function DropdownList({ text, icon, list, filterName, handleFunction, loading }) {
	const [ isOpen, setIsOpen ] = useState();

	function dropdownOpen() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="dropdown">
			<Button
				text={text}
				icon={icon}
				eventHandler={dropdownOpen}
				loading={loading}
				aria-haspopup="true"
				aria-expanded="false"
			/>
			<CSSTransition in={isOpen === true} timeout={500} classNames="dropdown__animation" unmountOnExit>
				<ul role="listbox" aria-expanded="false" className="dropdown__list">
					{list.map((item, index) => (
						<li key={index} className="dropdown__item">
							<div
								onClick={(e) => {
									handleFunction(e);
									dropdownOpen();
								}}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										handleFunction(e);
										dropdownOpen();
									}
								}}
								data-info={item}
								role="option"
								tabIndex="0"
								aria-label={`Select ${item} as ${filterName}`}
							>
								{item}
							</div>
						</li>
					))}
				</ul>
			</CSSTransition>
		</div>
	);
}

DropdownList.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
	filterName: PropTypes.string,
	handleFunction: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	list: PropTypes.array.isRequired
};

export default DropdownList;
