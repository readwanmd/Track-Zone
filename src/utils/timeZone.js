import { TIMEZONE_OFFSET } from '../constants/timeZone';

export const getOffset = (start = -11.5, end = 12) => {
	const offset = [];
	for (let i = start; i <= end; i += 0.5) {
		offset.push(i);
	}
	return offset;
};

export const getTimeZone = () => {
	return ['GMT', 'UTC', ...Object.keys(TIMEZONE_OFFSET)];
};

export function convertTo12HourFormat(time24) {
	if (time24 === '') return null;

	let timeArray = time24.split(':');
	let hours = parseInt(timeArray[0], 10);
	let minutes = parseInt(timeArray[1], 10);

	// Determine AM or PM
	let period = hours >= 12 ? 'PM' : 'AM';

	// Convert hours to 12-hour format
	hours = hours % 12 || 12;

	// Add leading zero to minutes if necessary
	minutes = minutes < 10 ? '0' + minutes : minutes;

	// Construct the 12-hour format time string
	let time12 = hours + ':' + minutes + ' ' + period;

	return time12;
}
