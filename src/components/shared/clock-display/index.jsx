/* eslint-disable react/prop-types */
import classes from './index.module.css';

const ClockDisplay = ({
	date,
	title,
	timeZone,
	offset,
	difrence,
	children,
}) => {
	const offsetHr = offset / 60;

	return (
		<div className={classes.card}>
			<h1>{title}</h1>
			<h3>{date?.toLocaleTimeString()}</h3>
			<p>
				{timeZone}{' '}
				{offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
			</p>
			<p>{difrence}</p>

			{children}
		</div>
	);
};
export default ClockDisplay;
