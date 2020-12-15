import React, { useEffect, useState } from 'react';

import LaunchesListFilters from '../components/LaunchesListFilters';
import LaunchesList from '../components/LaunchesList';
import { useLaunchesValue } from '../context/launches-context';
import { filterData, orderData } from '../helpers/sortFunctions';

import './Launches.scss';
import Spinner from './Spinner';

function Launches() {
	const { year, allLaunches, order, setLaunches, loading, error } = useLaunchesValue();
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(
		() => {
			setIsLoading(true);
			let _data = year !== '' ? orderData(filterData(allLaunches, year), order) : orderData(allLaunches, order);
			setLaunches([ ..._data ]);
			setIsLoading(false);
		},
		[ year, order ]
	);

	return (
		<div className="launches-container">
			<LaunchesListFilters />
			{loading || isLoading ? (
				<Spinner />
			) : error ? (
				<div className="launches-container__error"> No data to be found :( Please try later.</div>
			) : (
				<LaunchesList />
			)}
		</div>
	);
}

export default Launches;
