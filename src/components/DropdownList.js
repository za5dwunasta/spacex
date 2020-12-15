import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Button from './Button';
import './DropdownList.scss';

function DropdownList({ text, icon, handleFunction, list }) {
	const [ isOpen, setIsOpen ] = useState();
	const nodeRef = useRef(null);
	function dropdownOpen() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="dropdown">
			<Button text={text} icon={icon} eventHandler={dropdownOpen} />
			<CSSTransition
				in={isOpen === true}
				nodeRef={nodeRef}
				timeout={500}
				classNames="dropdown__animation"
				unmountOnExit
			>
				<ul className="dropdown__list">
					{list.map((item, index) => (
						<li
							key={index}
							className="dropdown__item"
							onClick={(e) => {
								handleFunction(e);
								dropdownOpen();
							}}
							data-info={item}
						>
							{item}
						</li>
					))}
				</ul>
			</CSSTransition>
		</div>
	);
}

DropdownList.propTypes = {
	text: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,

	icon: PropTypes.string.isRequired,
	handleFunction: PropTypes.func.isRequired
};

export default DropdownList;
