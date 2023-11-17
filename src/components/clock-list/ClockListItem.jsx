/* eslint-disable react/prop-types */
import { formatDistance } from 'date-fns';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timeZone, clock.offset);

	if (!date) return null;

	const difrence = formatDistance(date, localClock.date, {
		addSuffix: true,
	});

	return (
		<div>
			<ClockDisplay
				date={date}
				title={clock.title}
				timeZone={clock.timeZone}
				offset={clock.offset}
				difrence={difrence}
			/>

			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};
export default ClockListItem;
