/* eslint-disable react/prop-types */
const ClockDisplay = ({ date, title, timeZone, offset }) => {
	const offsetHr = offset / 60;
	return (
		<div>
			<h1>{title}</h1>
			<h3>{date?.toLocaleTimeString()}</h3>
			<p>
				{timeZone}{' '}
				{offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
			</p>
		</div>
	);
};
export default ClockDisplay;
