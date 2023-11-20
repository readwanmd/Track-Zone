import { addSeconds } from 'date-fns';
import { useEffect, useState } from 'react';

const useTimer = (date) => {
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		setTimer(date);
	}, [date]);

	let timerId;
	useEffect(() => {
		if (!timer) return;

		timerId = setInterval(() => {
			setTimer(addSeconds(timer, 1));
		}, 1000);

		return () => {
			clearInterval(timerId);
		};
	}, [timer]);

	return timer;
};
export default useTimer;
