import ClockListItem from './ClockListItem';
import classes from './index.module.css';
/* eslint-disable react/prop-types */
const ClockList = ({
	clocks,
	updateClock,
	deleteClock,
	localClock,
	addEvent,
	allEvents,
}) => {
	return (
		<div className={classes.clock_list}>
			<h2>Other Clocks</h2>
			{clocks.length === 0 ? (
				<p>There is no clock, Create one!</p>
			) : (
				<div
					style={{
						display: 'flex',
						gap: '10px',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					{clocks.map((clock) => (
						<ClockListItem
							key={clock.id}
							clock={clock}
							localClock={localClock}
							updateClock={updateClock}
							deleteClock={deleteClock}
							addEvent={addEvent}
							allEvents={allEvents}
						/>
					))}
				</div>
			)}
		</div>
	);
};
export default ClockList;
