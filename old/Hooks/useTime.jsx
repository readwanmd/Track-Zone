import { useEffect, useState } from 'react';

const useTime = ({ tZone, tStyle = 'medium', hCycle = 'h12' }) => {
	let time = new Date().toLocaleString('en-US', {
		timeZone: tZone,
		timeStyle: tStyle, // short, medium, long, full
		hourCycle: hCycle, //h12, h24
	});
	const [currentTime, setCurrentTime] = useState(time);

	const updateTime = () => {
		time = new Date().toLocaleString('en-US', {
			timeZone: tZone,
			timeStyle: tStyle,
			hourCycle: hCycle,
		});
		setCurrentTime(time);
	};

	useEffect(() => {
		const intervalID = setInterval(updateTime, 1000);
		return () => {
			clearInterval(intervalID);
		};
	}, []);

	return { currentTime };
};
export default useTime;
