/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-responsive-modal';
import { convertTo12HourFormat } from '../../utils/timeZone';
import UpdateEvent from '../shared/event-form/updateEvent';
import classes from './index.module.css';

const ClockEvents = ({
	isShowEvent,
	showEventModal,
	clockId,
	allEvents,
	deleteEvent,
	editEvent,
}) => {
	const [editModal, setEditModal] = useState(false);
	const [event, setEevent] = useState({
		clockId: '',
		id: '',
		title: '',
		time: '',
	});
	const filteredEvents = Object.values(allEvents).filter(
		(item) => item.clockId === clockId
	);

	const handleEditModal = () => {
		setEditModal(!editModal);
	};

	const handleEventPass = (item) => {
		setEevent(item);

		handleEditModal();
	};

	return (
		<>
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
								<span
									style={{
										display: 'inline-flex',
										gap: '5px',
										marginLeft: 'auto',
									}}
								>
									<button
										onClick={() => handleEventPass(item)}
										className={'btn'}
									>
										<img
											style={{ width: '1rem' }}
											src="https://i.postimg.cc/GH6rLwy0/icons8-inscription-48.png"
											alt="Update"
										/>
									</button>
									<button
										onClick={() => deleteEvent(item.id)}
										className={'btn'}
									>
										<img
											style={{ width: '1rem' }}
											src="https://i.postimg.cc/vHzB94sj/icons8-remove-48.png"
											alt="Delete"
										/>
									</button>
								</span>
								<Modal open={editModal} onClose={handleEditModal} center>
									<h3>Event Edit</h3>

									<UpdateEvent
										event={event}
										editEvent={editEvent}
										handleEditModal={handleEditModal}
									/>
								</Modal>
							</li>
						))}
					</ul>
				) : (
					<p className={classes.no_events}>There is no events to show!</p>
				)}
			</Modal>
		</>
	);
};
export default ClockEvents;
