import { useState, useEffect } from 'react';
import { orderData } from '../helpers/sortFunctions';

export function useAllLaunches() {
	const [ allLaunches, setAllLaunches ] = useState([]);
	const [ launches, setLaunches ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	const [ yearsList, setYearsList ] = useState([ 'All launches', 'loading...' ]);
	const [ refresh, setRefresh ] = useState(true);

	const url = `https://api.spacexdata.com/v3/launches?order=desc`;

	useEffect(
		() => {
			async function load() {
				if (refresh === false) {
					return;
				}
				setLoading(true);
				try {
					// fetch data
					const response = await fetch(url);
					const result = await response.json();

					// backend sorting seems not to return correct data so let's sort data here
					const _data = await orderData(result, 'desc');

					setLaunches(_data);
					setAllLaunches(_data);
					console.log(result);

					// get up2date list of launch_years
					const unique = [ ...new Set(result.map((item) => item.launch_year)) ].sort((a, b) => b - a);
					const _yearList = [ 'All launches', ...unique ];
					setYearsList(_yearList);
				} catch (e) {
					setError(true);
					console.log(error);
				}
				setLoading(false);
				setRefresh(false);
			}
			load();
		},
		[ error, refresh, url ]
	);

	return { allLaunches, launches, error, setLaunches, loading, yearsList, setRefresh };
}
