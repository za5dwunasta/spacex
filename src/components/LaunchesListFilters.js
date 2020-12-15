import React from 'react';

import './LaunchesListFilters.scss';
import DropdownList from './DropdownList';

function LaunchesListFilters() {
	return (
		<div className="launches-filters">
			<div className="launches-filters">
				<DropdownList
					text={year === '' ? 'Filter by Year' : `Filtered: ${year}`}
					icon="select"
					list={yearsList}
					isActive={true}
					handleFunction={handleFilterYear}
					loading={loading}
				/>
				<DropdownList
					text={`Sort ${order === 'desc' ? 'Descending' : 'Ascending'}`}
					icon="sort"
					list={[ 'Descending', 'Ascending' ]}
					isActive={true}
					handleFunction={handleSort}
					loading={loading}
				/>
			</div>
		</div>
	);
}

export default LaunchesListFilters;
