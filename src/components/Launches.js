import React from 'react';

import LaunchesListFilters from '../components/LaunchesListFilters';
import LaunchesList from '../components/LaunchesList';

import './Launches.scss';

function Launches() {
	return (
		<div className="launches-container">
			<LaunchesListFilters />
			<LaunchesList />
		</div>
	);
}

export default Launches;
