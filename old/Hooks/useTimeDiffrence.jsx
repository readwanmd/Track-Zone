const useTimeDiffrence = (tZone) => {
	const targetTimeZone = tZone;
	const localDateTime = new Date();

	const targetDateTime = new Date(
		localDateTime.toLocaleString('en-US', { timeZone: targetTimeZone })
	);

	// Calculate the time difference in minutes
	const timeDifferenceMinutes = (targetDateTime - localDateTime) / 60000; // 1 minute = 60000 ms

	let aheadOrBehind = '';
	if (timeDifferenceMinutes > 0) {
		aheadOrBehind = 'Ahead of';
	} else if (timeDifferenceMinutes < 0) {
		aheadOrBehind = 'Behind of';
	} else {
		aheadOrBehind = 'No Diffence';
	}

	const hoursDifference = Math.floor(Math.abs(timeDifferenceMinutes) / 60);
	const minutesDifference = Math.abs(timeDifferenceMinutes) % 60;

	const difference = `${aheadOrBehind} ${
		hoursDifference > 0 ? `${hoursDifference} hours` : ''
	} ${
		parseInt(minutesDifference) > 0
			? `${parseInt(minutesDifference)} minuites`
			: ''
	}`;

	return { difference };
};
export default useTimeDiffrence;
