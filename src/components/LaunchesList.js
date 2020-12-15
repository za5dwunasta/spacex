import React from 'react';
import LaunchesListItem from './LaunchesListItem';
import { useLaunchesValue } from '../context/launches-context';

import moment from 'moment';

import './LaunchesList.scss';

function LaunchesList() {
	const { launches } = useLaunchesValue();

	return (
		<div className="launches-list">
			{launches.map((item, index) => (
				<LaunchesListItem
					key={item.flight_number + item.mission_name}
					no={index + 1}
					missionName={item.mission_name}
					missionDate={moment(item.launch_date_utc).format('Do MMM YYYY')}
					racketName={item.rocket.rocket_name}
				/>
			))}
		</div>
	);
}

export default LaunchesList;
