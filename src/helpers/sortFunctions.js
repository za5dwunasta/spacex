export function filterData(data, year) {
	const filtered = data.filter((launch) => {
		return launch.launch_year === year;
	});
	return filtered;
}

export function orderData(data, order) {
	const ordered = data.sort((a, b) => {
		return order === 'desc' ? b.launch_date_unix - a.launch_date_unix : a.launch_date_unix - b.launch_date_unix;
	});
	return ordered;
}
