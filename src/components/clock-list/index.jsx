import ClockListItem from './ClockListItem';

/* eslint-disable react/prop-types */
const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
	return (
		<div>
			<h3>Other Clocks</h3>
			<hr />
			{clocks.length === 0 ? (
				<p>There is no clock, Create one</p>
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
						/>
					))}
				</div>
			)}
		</div>
	);
};
export default ClockList;
