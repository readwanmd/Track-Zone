/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';
import classes from './index.module.css';

const LocalClock = ({ clock, updateClock, createClock }) => {
	const { date, timeZone, offset } = useClock(clock.timeZone, clock.offset);
	const timer = useTimer(date);

	useEffect(() => {
		updateClock({
			date,
			timeZone,
			offset,
		});
	}, [date]);

	return (
		<div className={classes.local_clock}>
			{timer && (
				<ClockDisplay
					date={timer}
					title={clock.title}
					timeZone={timeZone}
					offset={offset}
				>
					<ClockActions
						local={true}
						clock={clock}
						updateClock={updateClock}
						createClock={createClock}
					/>
				</ClockDisplay>
			)}
		</div>
	);
};
export default LocalClock;
