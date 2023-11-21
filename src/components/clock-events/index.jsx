/* eslint-disable react/prop-types */
import Modal from 'react-responsive-modal';
import { convertTo12HourFormat } from '../../utils/timeZone';
import classes from './index.module.css';

const ClockEvents = ({ isShowEvent, showEventModal, allEvents, clockId }) => {
	console.log('allEvents=>', allEvents);
	const filteredEvents = Object.values(allEvents).filter(
		(item) => item.clockId === clockId
	);
	return (
		<Modal
			open={isShowEvent}
			onClose={showEventModal}
			center
			classNames={{
				modal: `${classes.modal}`,
			}}
		>
			<h3>Events</h3>

			{filteredEvents.length > 0 ? (
				<ul className={classes.events}>
					{filteredEvents.map((item) => (
						<li key={item.id} className={classes.event}>
							{item?.title}{' '}
							<span className={classes.event_time}>
								{convertTo12HourFormat(item?.time)}
							</span>
						</li>
					))}
				</ul>
			) : (
				<p className={classes.no_events}>There is no events to show!</p>
			)}
		</Modal>
	);
};
export default ClockEvents;
