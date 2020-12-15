import React from 'react';

import './LaunchesListFilters.scss';
import DropdownList from './DropdownList';

function LaunchesListFilters() {
	return (
		<div className="launches-filters">
			<DropdownList />
			<DropdownList />
		</div>
	);
}

export default LaunchesListFilters;
