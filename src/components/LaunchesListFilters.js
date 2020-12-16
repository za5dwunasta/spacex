import React from 'react';

import './LaunchesListFilters.scss';
import DropdownList from './DropdownList';

import { useLaunchesValue } from '../context/launches-context';

function LaunchesListFilters() {
	const { loading, yearsList, order, setOrder, year, setYear } = useLaunchesValue();

	function handleFilterYear(e) {
		const _year = e.currentTarget.dataset.info;
		if (_year === 'All launches') {
			setYear('');
		} else {
			setYear(e.currentTarget.dataset.info);
		}
	}
	function handleSort(e) {
		setOrder(e.currentTarget.dataset.info === 'Descending' ? 'desc' : 'asc');
	}

	return (
		<div className="launches-filters">
			<DropdownList
				text={year === '' ? 'Filter by Year' : `Filtered: ${year}`}
				icon="select"
				list={yearsList}
				isActive={true}
				handleFunction={handleFilterYear}
				loading={loading}
				filterName="year of start"
			/>
			<DropdownList
				text={`Sort ${order === 'desc' ? 'Descending' : 'Ascending'}`}
				icon="sort"
				list={[ 'Descending', 'Ascending' ]}
				isActive={true}
				handleFunction={handleSort}
				loading={loading}
				filterName="order method"
			/>
		</div>
	);
}

LaunchesListFilters.propTypes = {};

export default LaunchesListFilters;
