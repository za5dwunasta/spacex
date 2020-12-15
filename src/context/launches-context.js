import React, { createContext, useContext, useState } from 'react';
import { useAllLaunches } from '../hooks/useAllLaunches';

export const LaunchesContext = createContext();
export const LaunchesProvider = ({ children }) => {
	const { allLaunches, launches, setLaunches, loading, yearsList, setRefresh, error } = useAllLaunches();
	const [ order, setOrder ] = useState('desc');
	const [ year, setYear ] = useState('');

	return (
		<LaunchesContext.Provider
			value={{
				launches,
				setLaunches,
				allLaunches,
				loading,
				yearsList,
				order,
				setOrder,
				year,
				setYear,
				setRefresh,
				error
			}}
		>
			{children}
		</LaunchesContext.Provider>
	);
};
export const useLaunchesValue = () => useContext(LaunchesContext);
