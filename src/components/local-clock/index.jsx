/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ clock, updateClock, createClock }) => {
	const { date, timeZone, offset } = useClock(clock.timeZone, clock.offset);

	useEffect(() => {
		updateClock({
			date,
			timeZone,
			offset,
		});
	}, [date]);

	return (
		<div>
			{date && (
				<ClockDisplay
					date={date}
					title={clock.title}
					timeZone={timeZone}
					offset={offset}
				/>
			)}

			<ClockActions
				local={true}
				clock={clock}
				updateClock={updateClock}
				createClock={createClock}
			/>
		</div>
	);
};
export default LocalClock;
