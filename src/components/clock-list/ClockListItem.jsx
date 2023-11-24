/* eslint-disable react/prop-types */
import { formatDistance } from 'date-fns';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';
import EventActions from '../shared/event-actions';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timeZone, clock.offset);
	const timer = useTimer(date);

	if (!date || !timer) return null;

	const difrence = formatDistance(date, localClock.date, {
		addSuffix: true,
	});

	return (
		<div>
			<ClockDisplay
				date={timer}
				title={clock.title}
				timeZone={clock.timeZone}
				offset={clock.offset}
				difrence={difrence}
			>
				<ClockActions
					clock={clock}
					updateClock={updateClock}
					deleteClock={deleteClock}
				/>
				<EventActions clockId={clock.id} />
			</ClockDisplay>
		</div>
	);
};
export default ClockListItem;
