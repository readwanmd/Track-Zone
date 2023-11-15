import { addMinutes } from 'date-fns';
import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../constants/timeZone';

const useClock = (timeZone, offset) => {
	const [localDate, setLocalDate] = useState(null);
	const [localTimeZone, setLocalTimeZone] = useState('');
	const [localOffset, setLocalOffset] = useState(0);
	const [utc, setUtc] = useState(null);

	useEffect(() => {
		let d = new Date();
		const lo = d.getTimezoneOffset();
		d = addMinutes(d, lo);
		setUtc(d);
		setLocalOffset(lo);
	}, []);

	useEffect(() => {
		if (utc !== null) {
			if (timeZone) {
				offset = TIMEZONE_OFFSET[timeZone] ?? offset;

				const newUtc = addMinutes(utc, offset);
				setLocalDate(newUtc);
			} else {
				const newUtc = addMinutes(utc, -localOffset);
				const dateStrArr = newUtc.toUTCString().split(' ');
				setLocalTimeZone(dateStrArr.pop());
				setLocalDate(newUtc);
			}
		}
	}, [utc, timeZone, offset]);

	return {
		date: localDate,
		dateUTC: utc,
		offset: offset || -localOffset,
		timeZone: timeZone || localTimeZone,
	};
};

export default useClock;
