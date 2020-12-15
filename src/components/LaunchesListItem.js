import React from 'react';
import PropTypes from 'prop-types';
import './LaunchesListItem.scss';

function LaunchesListItem({ no, missionName, missionDate, racketName }) {
	return (
		<div className="launches-item">
			<div className="launches-item__info">
				<div className="launches-item__no">#{no}</div>
				<div className="launches-item__mission-name">{missionName}</div>
			</div>
			<div className="launches-item__details">
				<div className="launches-item__date">{missionDate}</div>
				<div className="launches-item__rocket-name">{racketName}</div>
			</div>
		</div>
	);
}

LaunchesListItem.propTypes = {
	no: PropTypes.number.isRequired,
	missionName: PropTypes.string.isRequired,
	missionDate: PropTypes.string.isRequired,
	racketName: PropTypes.string.isRequired
};

export default LaunchesListItem;
