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
