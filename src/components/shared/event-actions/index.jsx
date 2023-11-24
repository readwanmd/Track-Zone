import { useState } from 'react';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import useEvents from '../../../hooks/useEvents';
import ClockEvents from '../../clock-events';
import EventForm from '../event-form';
/* eslint-disable react/prop-types */

const EventActions = ({ clockId }) => {
	const [isShowEvent, setIsShowEvent] = useState(false);
	const [isCreateEvent, setIsCreateEvent] = useState(false);
	const { addEvent, allEvents, deleteEvent, editEvent } = useEvents();

	const showEventModal = () => {
		setIsShowEvent(!isShowEvent);
	};

	const createEventModal = () => {
		setIsCreateEvent(!isCreateEvent);
	};
	return (
		<div>
			<div className="btn-group">
				<button onClick={showEventModal} className="btn btn-info">
					Show Events
				</button>
				<button onClick={createEventModal} className="btn btn-create">
					Add Event
				</button>
			</div>

			{isShowEvent && (
				<ClockEvents
					showEventModal={showEventModal}
					isShowEvent={isShowEvent}
					allEvents={allEvents}
					clockId={clockId}
					deleteEvent={deleteEvent}
					editEvent={editEvent}
				/>
			)}

			{isCreateEvent && (
				<>
					<Modal open={isCreateEvent} onClose={createEventModal} center>
						<h3>Create Event</h3>

						<EventForm
							clockId={clockId}
							isCreateEvent={isCreateEvent}
							addEvent={addEvent}
							createEventModal={createEventModal}
						/>
					</Modal>
				</>
			)}
		</div>
	);
};

export default EventActions;
